---
title: Action Protocol
date: 31-07-2021 11:18:01
---

4swap and Lake are MTG applications, which read [multisig transactions](https://developers.mixin.one/document/wallet/api/multisigs/tutorial) from Mixin Network.

To send transfers to 4swap or Lake, the developers must create multisig transfers.

4swap and Lake design the **Action Protocol** to illustrate behaviors of each transaction. The Action Protocol is a JSON based protocol, which uses the encrypted memo to store instruction and parameters.

## Generate Actions

There are two approaches to generate the actions.

**Using SDK**

If you are using [4swap SDK](https://github.com/fox-one/4swap-sdk-go), you can use the SDK's methods to simplify the process. The following example showcases how to generate a swap action by  `mtg.SwapAction`.

```go
// the ID to trace the orders
followID, _ := uuid.NewV4()

// build a swap action, specified the parameters
action := mtg.SwapAction(
    receiverID,
    followID.String(),
    OutputAssetID,
    preOrder.Routes,
    // the minimum amount of asset you will get.
    // you may want to change this value to a number which is less than preOrder.FillAmount
    preOrder.FillAmount.Div(decimal.NewFromFloat(0.005)),
)

// generate the memo
memo, err := action.Encode(group.PublicKey)
if err != nil {
    return err
}
log.Println("memo", memo)
```

**Using API**

Call the API ["/api/actions"](./apis/actions) to get a signed transfer request that you can use to invoke the wallet service directly.

It would be slower than the SDK approach, however you would not need to generate actions and sign them yourself.

## Specification

### Add Liquidity

When you are going to add liquidity to an existing pair, you need to send two transfers of these two assets in the pair to 4swap's Mainnet address.

For each transfer, the memo should be constructed in the following form:

```json
{
  "action": "1,{receiver_id},{follow_id},{asset_id},{slippage},{timeout}"
}
```

in which,

- `{receiver_id}` is the id of user who will receive the LP-Token
- `{follow_id}` is a UUID to trace the transfer, you can use `UUID.v4()` to create one
- `{asset_id}` is the opposite asset's ID of the pair you are going to deposit. For example, if you are going to add liquidity to [ETH/BTC pair](https://app.4swap.org/#/pair-info?base=43d61dcd-e413-450d-80b8-101d5e903357&quote=c6d0c728-2624-429b-8e0d-d9d19b6592fa), the asset id is `43d61dcd-e413-450d-80b8-101d5e903357` when you pay `BTC` and `c6d0c728-2624-429b-8e0d-d9d19b6592fa` otherwise.
- `{slippage}` is the slippage ratio, e.g. 0.001 = 0.1%. It may fail if you specified a small slippage value when the market is volatile
- `{timeout}` is the timeout in sec. If you don't complete the two transfers in time, the crypto will be refunded to you in `timeout`.

If the two transfers have been handled by the 4swap or Lake before timeout, the user you specified in the memo `receiver_id` will receive some LP-Tokens of this pair.


### Remove Liquidity

When you are going to remove liquidity of a pair, you need to transfer the LP-Tokens to the 4swap's Mainnet address. Its memo should be in such a form:

```json
{
  "action": "2,{receiver_id},{follow_id}"
}
```

in which,

- `{receiver_id}` is the id of user who will receive the crypto
- `{follow_id}` is a UUID to trace the transfer

If the transfer has been handled, the user you specified in the memo `receiver_id` will receive the equivalent crypto assets.

### Swap Crypto

When you are going to swap one crypto to another, you need to transfer the crypto which you intend to provide to the 4swap's Mainnet address. The transfer memo should be in such a form:

```json
{
  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"
}
```

in which,

- `{receiver_id}` is the id of user who will receive the LP-Token
- `{follow_id}` is a UUID to trace the transfer
- `{fill_asset_id}` is the asset's ID you are going to use for swapping
- `{routes}` is a route ids' sequence, which indicate which route you want to use.
- `{minimum}` is the minimum amount of asset you will get

If 4swap or Lake can't get the minimun destination crypto, the swapping will be aborted and the crypto you send to the Mainnet address will be refunded.

## Parsing 4swap or Lake transfer memo

> The transfer memo is a base64 decoded json string

```json5
{
  "s": "4swapTrade|4swapRefund", // 4swapTrade: swap Successful, 4swapRefund: swap failed
  "t": "bf0c984d-7f8a-424e-bddd-473fcf5f7020", // follow id
}
```
