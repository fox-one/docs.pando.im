---
title: Net APY

date: 2021-09-04 12:33:07
---

import {
  Improvement,
} from "@site/src/components/admonitions";

<Improvement msg="better math formula: https://docusaurus.io/docs/markdown-features/math-equations"/>

Net APY(annual percentage yield) reflects the estimatd annual net yield based on the [Supply APY](./glossary) and [Borrow APY](./glossary) of the very moment. It indicates whether you are making money or losing money at the current APYS.

Net APY = [ ∑(an asset's Supply x its Supply APY) - ∑(an asset's Borrow x its Borrow APY) ] / Total Supply

For example, you have supplied two assets: BTC and ETH; and you have borrowed two assets: [pUSD](/docs/leaf/pusd) and USDC. Your Net APY of the moment will be:
  {[(BTC Supply * BTC Supply APY) + (ETH Supply * ETH Supply APY)] - [(pUSD Borrow * pUSD Borrow APY) + (USDC Borrow * USDC Borrow APY)]} / (BTC Supply + EtH Supply)
