---
title: 净年化收益率
sidebar_position: 2
date: 2021-09-04 12:33:07
---

import { Improvement, } from "@site/src/components/admonitions";

<Improvement msg="better math formula: https://docusaurus.io/docs/markdown-features/math-equations"/>

Net APY(annual percentage yield) reflects the estimatd annual net yield based on the [Supply APY](./glossary) and [Borrow APY](./glossary) of the very moment. 它表示您在当前的APYS是在赚钱还是在亏钱。

净APY = [∑(资产的供应量x其供应APY)-∑(资产的借款x其借款APY)]/总供应量

举个例子，您提供了两种资产：BTC 和 ETH；您借了两种资产： [pUSD](/docs/leaf/pusd) 和 USDC。 您目前的净APY将是：
{[(BTC Supply * BTC Supply APY) + (ETH Supply * ETH Supply APY)] - [(pUSD Borrow * pUSD Borrow APY) + (USDC Borrow * USDC Borrow APY)]}(BTC Supply + EtH Supply)