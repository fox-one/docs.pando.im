---
title: Pando Leafとは？
date: 2021-07-22 22:33:07
---

[Pando Leaf](https://leaf.pando.im) is a decentralized financial network built with the Mixin MTG ([Mixin Trusted Group](https://developers.mixin.one/document/mainnet/mtg/exchange)) technology, a place where you can deposit collateral to generate and destory [Pando USD(pUSD)](./pusd) and destroy it when repaying the generated pUSD balance.

## How does Pando Leaf work?

Depositing collaterals and repaying the generated pUSD balance both happen in a **vault**.

- Vaults are not free. Generating the stablecoin requires the payment of stability fee. To reclaim collateral, users must repay the previously generated stablecoin and the accumulated stability fee.
- Vaults are required to be overcollateralized. Vault owners should uphold the liquidation price/liquidation ratio (which is the minimum collateralization ratio) to avoid the **liquidation** of their positions.

When a vault is liquidated, a liquidation penalty is applied and collateral is sold to repay the vault’s outstanding stablecoin balance.

For more techincal details, please refer to the [Pando Leaf Technical Design](/developer/leaf/design)

## Auction

Anyone can participate in the auction if a vault breaches the minimum required collateralization ratio and becomes liquidated.

There are two phases of the auction - For the first phase, participants bid at an increment of not less than 3% of the previous bidding amount to cover the highest amount of the outstanding debt. If within the limit of 12 hours, no one is willing to cover the total debt, the auction is over and the bidder who is willing to cover the highest amount of the debt will take all of the collateral home. Or if there is someone who bids to cover the total debt, then the auction will move to the second phase.

For the second phase, participants bid at a decrement of no less than 3% of the previous bidding amount on accepting the smallest part of the collateral for the payment of the total debt.






