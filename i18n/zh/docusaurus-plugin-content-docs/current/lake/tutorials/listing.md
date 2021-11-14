---
title: 列出资产和添加流动池
date: 2021-08-15 22:33:07
---

import { Improvement, } from "@site/src/components/admonitions";

<Improvement />

**[Pando Lake](https://lake.pando.im)** 仅允许经过广泛验证的流动池。 它不接受来自公众的新流动池。

**[4swap](https://4swap.org)** 是一个社区驱动的项目，目前允许添加任何流动池。

## 将资产信息添加到 Mixin 网络

访问Mixin的 [asset-profile](https://github.com/MixinNetwork/asset-profile) 页面，遵照Mixin网络的说明`README.md`。

例如，如果您有一个名为“RUM”的 ERC-20 代币，您可以将其添加到 Mixin Network：

1. 一个图标文件命名为“icon.png”，尺寸应该是520px * 520px。
2. 一个JSON文件命名为"index.json"，它应该是一个有效的JSON文件并包含下面的信息：

```json
{
  // the asset id of RUM in Mixin Network
  "asset_id": "4f2ec12c-22f4-3a9e-b757-c84b6415ea8f",
  // RUM is a ERC-20 token, the chain id is ETH's asset id
  "chain_id": "43d61dcd-e413-450d-80b8-101d5e903357",
  // RUM is not listed on CoinMarketCap, so we use the empty string
  "cmc_id": ""
}
```

上面例子的提交 [点此查看](https://github.com/MixinNetwork/asset-profile/commit/437d378f899c5837598bdb8c4e9c18ae8f21ad27)。

````mdx-code-block
:::info
完成后请创建Pull Request。 Mixin网络通常需要大约 1~2 天的时间来处理您的Pull Request。
:::
````

## 在4swap创建一个流动池

您需要前往 [Mixin Messenger](../../apps/wallets#mixin-messenger) 或 [Fennec](../../apps/wallets#fennec) 创建一个流动池。

1. 确保2项资产的钱包余额高于0.00000001的最低金额。 如果不足，请存入一些到您的钱包。
2. 确保您的钱包中至少有 0.02 ETH。 如果不足，请存入一些到您的钱包或者在[4swap](https://app.4swap.org)中换一些。
3. 访问 [这个页面](https://app.4swap.org/#/me)，点击“连接钱包”去连接您的钱包。

![](../assets/lake-get-started-p2.png)

4. 访问 [这个页面](https://app.4swap.org/#/liquidity/create)，选择您希望添加到流动池的两种资产点击 `支付` 创建流动池。.

我们将根据CoinMarketCap排名、交易量和交易所支持情况综合考虑是否上币。

您也可以通过 Mixin Messenger 联系 37160854 查询Pando Leaf/Pando Rings的列表。

````mdx-code-block
:::info
通常需要1~3天的时间等待[MTG nodes](../key-concepts/mtg)创建和批准流动池。 如果请求未在 3 天内未处理，您将收到退款。
:::
````