---
title: 列出资产和添加流动池
date: 2021-08-15 22:33:07
---

> [Pando Lake](https://lake.pando.im) only allows for selected pools that have proven credentials. It doesn't accept new pool from the public.
> 
> [4swap](https://4swap.org) is a community-driven project that is currently allowing for any pool to be added.

## 将资产信息添加到 Mixin 网络

Visit Mixin's [asset-profile](https://github.com/MixinNetwork/asset-profile) page, follow the instructions at `README.md` to Mixin Network.

For example, if you have an ERC-20 token named "RUM", you can add it to Mixin Network:

1. an icon file named "icon.png", it should be 520x520px.
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

The commit of the above example is [here](https://github.com/MixinNetwork/asset-profile/commit/437d378f899c5837598bdb8c4e9c18ae8f21ad27).

````mdx-code-block
:::info
完成后请创建Pull Request。 It usually takes about 1~3 days for Mixin Network to process your pull request.
:::
````

## Create Pools

### Preparations

You need to use [Mixin Messenger](https://mixin.one/messenger) or [Fennec](https://pando.im/fennec/) to create a pool.

1. 确保2项资产的钱包余额高于0.00000001的最低金额。 如果不足，请存入一些到您的钱包。
2. 确保您的钱包中至少有 0.02 ETH。 如果不足，请存入一些到您的钱包或者在[4swap](https://app.4swap.org)中换一些。
3. Send an email to `contact@pando.im` to apply for a pool. Please tell us the 2 assets' asset_id of the pool you want to create. We will review your application and reply to you within 1~3 days.

### Submit the Proposal

1. Visit [Pando Governance](https://governance.pando.im/), tap "4swap" and tap "Create Pool".
2. Connect with your Mixin Messenger or Fennec wallet.
3. Choose the 2 assets you want to add to the pool and tap `Create` to pay to submit the proposal to create the pool.

````mdx-code-block
:::info
通常需要1~3天的时间等待[MTG nodes](../key-concepts/mtg)创建和批准流动池。 如果请求未在 3 天内未处理，您将收到退款。
:::
````