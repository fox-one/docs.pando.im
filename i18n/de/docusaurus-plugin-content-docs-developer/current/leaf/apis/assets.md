---
title: Read Assets
date: 30-09-2021 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## Read All Assets

### GET /assets

This API will respond all supported crypto assets.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/assets" />

<APIMetaPanel />

<APIRequest title="Read supported assets" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/assets' />

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

## Read Single Asset

### GET /assets/:asset_id

This API will respond one crypto asset with `:asset_id`

<APIEndpoint base="https://leaf-api.pando.im/api" url="/assets/:asset_id" />

<APIMetaPanel />

<APIParams p-asset_id="the asset id" p-asset_id-required="{true}" />

<APIRequest title="Read one asset" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/assets/c6d0c728-2624-429b-8e0d-d9d19b6592fa' />

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
