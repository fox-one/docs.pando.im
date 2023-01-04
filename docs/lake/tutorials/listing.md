---
title: Listing assets and adding pools
date: 2021-08-15 22:33:07
---

> [Pando Lake](https://lake.pando.im) only allows for selected pools that have proven credentials. It doesn't accept new pool from the public.
> 
> [4swap](https://4swap.org) is a community-driven project that is currently allowing for any pool to be added.

## Add asset information to Mixin Network

Visit Mixin's [asset-profile](https://github.com/MixinNetwork/asset-profile) page, follow the instructions at `README.md` to Mixin Network.

For example, if you have an ERC-20 token named "RUM", you can add it to Mixin Network:

1. an icon file named "icon.png", it should be 520x520px.
2. a json file named "index.json", which should be a valid json file and contain the following information:

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
Please create a pull request when you have finished. It usually takes about 1~3 days for Mixin Network to process your pull request.
:::
````

## Create Pools

### Preparations

You need to use [Mixin Messenger](https://mixin.one/messenger) or [Fennec](https://pando.im/fennec/) to create a pool.

1. Make sure the wallet balance of the 2 assets is above the minimum amount of 0.00000001. If not, please deposit some to your wallet.
2. Make sure you have above the minimum amount of 0.02 ETH in your wallet. If not, please deposit some into your wallet or swap for it at [4swap](https://app.4swap.org).
3. Send an email to `contact@pando.im` to apply for a pool. Please tell us the 2 assets' asset_id of the pool you want to create. We will review your application and reply to you within 1~3 days.

### Submit the Proposal

1. Visit [Pando Governance](https://governance.pando.im/), tap "4swap" and tap "Create Pool".
2. Connect with your Mixin Messenger or Fennec wallet.
3. Choose the 2 assets you want to add to the pool and tap `Create` to pay to submit the proposal to create the pool.

````mdx-code-block
:::info
It usually takes 1~3 days to wait for the pool to be created and approved by [MTG nodes](../key-concepts/mtg). If the request is not processed in 3 days, you will receive a refund.
:::
````