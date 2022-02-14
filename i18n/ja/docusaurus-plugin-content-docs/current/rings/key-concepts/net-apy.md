---
title: ネットAPY
date: 2021年9月04日12時33分07秒
---

輸入 { 改善、 } from "@ site / src / components / admonitions";

<Improvement msg="better math formula: https://docusaurus.io/docs/markdown-features/math-equations"/>

純APY(年利) は、の[供給APY](./glossary) および[借入APY](./glossary) に基づいた推定年間純利回りを反映しています。 それはあなたが現在のAPYSでお金を稼いでいるか失っているのかを示します。

ネットAPY = [∑（資産の供給xその供給APY）-∑（資産の借入xその借入APY）] /総供給

たとえば、BTCとETHの2つの資産を提供しました。 [ pUSD ](/docs/leaf/pusd)とUSDCの2つの資産を借りました。 現時点でのNet APYは次のようになります。:
  {[(BTC供給*BTC供給APY)+ (ETH供給*ETH供給APY)] - [(pUSD借入*pUSD借入APY)+ (USDC借入*USDC借入APY)]} / (BTC供給+ETH供給)
