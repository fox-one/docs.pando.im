---
title: アセットを読む
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## すべてのアセットを読む

### GET /assets

この API はサポートされているすべての暗号資産に対応します。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/assets" />

<APIMetaPanel />

<APIRequest title="サポートされているアセットを読む" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/assets' />

```json title="Response"
{
  "ts": 1633110638578,
  "data": {
    "assets": [
      {
        "id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "name": "Bitcoin",
        "symbol": "BTC",
        "logo": "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
        "chain_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "chain": {
          "id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
          "name": "Bitcoin",
          "symbol": "BTC",
          "logo": "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
          "chain_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
          "chain": null,
          "price": "47640"
        },
        "price": "47640"
      },
      // ...
    ]
  }
}
```

## 単一のアセットを読む

### GET /assets/:asset_id

このAPIは、1つの暗号資産を`:asset_id `で応答します

<APIEndpoint base="https://leaf-api.pando.im/api" url="/assets/:asset_id" />

<APIMetaPanel />

<APIParams p-asset_id="the asset id" p-asset_id-required="{true}" />

<APIRequest title="単一のアセットを読む" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/assets/c6d0c728-2624-429b-8e0d-d9d19b6592fa' />

```json title="Response"
{
  "ts": 1633110638578,
  "data": {
    "assets": [
      {
        "id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "name": "Bitcoin",
        "symbol": "BTC",
        "logo": "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
        "chain_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "chain": {
          "id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
          "name": "Bitcoin",
          "symbol": "BTC",
          "logo": "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
          "chain_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
          "chain": null,
          "price": "47640"
        },
        "price": "47640"
      },
      // ...
    ]
  }
}
```
