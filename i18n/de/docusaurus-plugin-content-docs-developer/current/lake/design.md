---
title: Design
date: 2021-07-31 14:38:07
---

## 4swap Design Document

> Pando Lake is a MTG implementation on Mixin Network of Uniswap V2

Pando Lake is an automated liquidity protocol powered by a constant product formula and implemented in [Mixin Trusted Group](https://developers.mixin.one/docs/mainnet/mtg/overview). It obviates the need for single Mixin Dapp, prioritizing decentralization, censorship resistance, and security.

Anyone can become a liquidity provider (LP) for a pool by depositing an equivalent value of each underlying token in return for pool tokens. These tokens track pro-rata LP shares of the total reserves, and can be redeemed for the underlying assets at any time.

Pairs act as automated market makers, standing ready to accept one token for the other as long as the “constant product” formula is preserved. This formula, most simply expressed as **x * y = k**, states that trades must not change the product (k) of a pair’s reserve balances (x and y). Because k remains unchanged from the reference frame of a trade, it is often referred to as the invariant. This formula has the desirable property that larger trades (relative to reserves) execute at exponentially worse rates than smaller ones.

> A modified [Curve](https://curve.fi) formula used on the stablecoin pools like USDT/USDC.

## Interact with 4swap

All participants of 4swap complete the interaction by transferring tokens to the multisig wallet. Node worker **Syncer** syncs the payments as mixin multisig outputs; another worker **Payee** processes all outputs in order.

![MTG Design](assets/mtg_design.png)

### Mixin Multisig Output

**Output:**

| field     | description      |
| --------- | ---------------- |
| CreatedAt | payment time     |
| AssetID   | payment asset id |
| Amount    | payment amount   |
| Memo      | extra message    |

**Output Memo:**

**Memo** contain the **TransactionAction** information.

The memo is AES-encrypted, an ed25519 public key used for compound AES key/iv will be in the first 32 bytes.

### TransactionAction Definition

| field      | description                                | type   |
| ---------- | ------------------------------------------ | ------ |
| Action     | swap, deposit or withdraw                  | number |
| UserID     | mixin id used for receipt                  | uuid   |
| FollowID   | user defined trace id for this transaction | uuid   |
| Parameters | relevant parameters                        | bytes  |

## Workers

1. **Syncer** sync unhanded utxo by mixin messenger api & store into WalletStore as **outputs** in created asc order.
2. **Payee** pull unhanded utxo from WalletStore in order and parse memo to get the action then handle it. Transfers may be created during handling.
3. **Assigner** select enough unspent UTXO and assign to a pending transfer.
4. **Cashier** pull unhandled transfers from WalletStore in order, then request & sign multisig transfer. If enough signatures collected, generate a raw transaction.
5. **TxSender** commit raw transactions to Mixin Network.

### Syncer Workflow

![Syncer Workflow](assets/pando-syncer.png)

### Payee Workflow

![Payee Workflow](assets/pando-payee.png)

### Assigner & Cashier & TxSender Workflow

![Assigner & Cashier Workflow](assets/pando-cashier.png)

## Actions

### Deposit

Each Pando Lake liquidity pool is a trading venue for a pair of Mixin Mainnet tokens. When a pool is created by the governance, its balances of each token are 0; in order for the pool to begin facilitating trades, someone must seed it with an initial deposit of each token. This first liquidity provider is the one who sets the initial price of the pool.

The number of liquidity tokens This first liquidity provider will receive would equal `sqrt(x*y)`, where x and y represent the amount of each token provided. For the following providers, the number will be `min(x/reserve_x,y/reserve_y)*liquidity_shares`.

**Parameters:**

| name     | type    | description                |
| -------- | ------- | -------------------------- |
| AssetID  | uuid    | opposite asset id          |
| Slippage | decimal | max slippage allowed       |
| Expire   | int64   | deposit timeout in seconds |

### Swap

From the constant product formula it follows that the price of that token A is simply price_token_A = reserve_token_B / reserve_token_A. The market price only moves as the reserve ratio of the tokens in the pool changes, which happens when someone trades against it.

The swapping rule is the constant product formula. When either token is withdrawn, a proportional amount of the other must be deposited, in order to make the constant(`k`) unchange.

Pando Lake applies a 0.3% fee (0.04% for stablecoin pools) to trades, which is added to reserves to increases `k` actually as a payout to liquidation providers.

**Parameters:**

| name    | type    | description                                 |
| ------- | ------- | ------------------------------------------- |
| AssetID | uuid    | target asset id                             |
| Route   | string  | swap routes                                 |
| minimum | decimal | minimum amount acceptable, refund otherwise |

### Withdraw

To retrieve the underlying liquidity, plus any fees accrued, liquidity providers must give back their liquidity tokens, effectively exchanging them for their portion of the liquidity pool, plus the proportional fee allocation.

The number of tokens retrieved will be `lp_token/liquidity_shares*reserve_x` and `lp_token/liquidity_shares*reserve_y`.
