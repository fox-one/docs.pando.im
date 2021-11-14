---
title: 净年化收益率
date: 2021-09-04 12:33:07
---

import { Improvement, } from "@site/src/components/admonitions";

<Improvement msg="better math formula: https://docusaurus.io/docs/markdown-features/math-equations"/>

净年化收益率反映了基于当时 [供应年化利率](./glossary) 和 [贷款年化利率](./glossary) 的净年化收益率。 它反映了您在当前的年化收益率是赚钱还是亏钱。

净年化收益率 = [ ∑(资产的供应量 x 资产的供应年化利率) - ∑(资产的贷款量 x 资产的贷款年化利率) ] / 总供应量

例如，您提供了两种资产：BTC 和 ETH；您贷了两种资产：[pUSD](/docs/leaf/pusd) 和 USDC。 您当前的净年化收益率将是：
{[(BTC供应量 * BTC供应年化利率) + (ETH供应量 * ETH供应年化利率)] - [(pUSD贷款额 * pUSD贷款年化利率) + (USDC贷款额 * USDC贷款年化利率)]}/(BTC供应量 + Eth供应量)
