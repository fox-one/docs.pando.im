---
title: Liquidation
date: 2021-07-28 22:33:07
---

## Auction Process

When a vault breaches the minimum required collateralization ratio, it will be liquidated and the collateral will be on auction. Anyone can participate in the auction. The ongoing auction can be found in the Ongoing section on the Auctions page.

There are TWO phases of the auction.

**For Phase 1**, participants bid at an increment of not less than 3% of the previous bidding amount to cover the highest amount of the outstanding debt. If within the limit of 12 hours, no one is willing to cover the total debt, the auction is over and the bidder who is willing to cover the highest amount of the debt will take all of the collateral home. Or if there is someone who bids to cover the total debt, then the auction will move to the second phase.

**For Phase 2**, participants bid at a decrement of no less than 3% of the previous bidding amount on accepting the smallest part of the collateral for the payment of the total debt. The winner will need to pay off all the debt in exchange for the smallest amount of the collateral that (s)he subtmits the bid for.

## Liquidation Ratio

The Liquidation Ratio is the minimum required collateralization level for each Vault type before it is considered undercollateralized and subject to liquidation.

Each Vault type’s Liquidation Ratio is determined by a combination of the collateral’s risk profile and the Stability Fee. There may be multiple Vault types for each collateral, with varying Liquidation Ratios and Stability Fees.

```
Liquidation Ratio = (Collateral Amount x Collateral Price) ÷ Generated pUSD × 100
```

## Liquidation Price

The Liquidation Price is the price at which a Vault becomes vulnerable to liquidation.

Vault owners can lower their liquidation price by adding more collateral or returning pUSD to the Vault.

```
Liquidation Price = (Generated pUSD * Liquidation Ratio) / (Amount of Collateral)
```

## Liquidation Penalty

A Liquidation Penalty is a fee paid by Vault owners when the value of their collateral reaches the Vault's Liquidation Price.

The Liquidation Penalty is added to the Vault’s total outstanding generated pUSD when liquidation occurs, which results in more collateral being sold at auction.

