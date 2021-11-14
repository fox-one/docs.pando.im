---
title: Assets lesen
sidebar_position: 3
date: 30-09-2021 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } von "@site/src/components/api";

## Alle Assets lesen

### GET /Assets

Diese API reagiert auf alle unterstützten Crypto-Assets.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/assets" />

<APIMetaPanel />

<APIRequest title="Unterstützte Assets lesen" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/assets' />

```json title="Response"
{
  "ts": 1633110638578,
  "data": {
    "assets": [
      {
        "id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "name": "Bitcoin",
        "Symbol": "BTC",
        "Logo": "https://mixin-images. eromesh. et/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
        "chain_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "chain": {
          "id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
          "name": "Bitcoin",
          "Symbol": "BTC",
          "Logo": "https://mixin-images. eromesh. et/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
          "chain_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
          "ketten": null,
          "Preis": "47640"
        },
        "Preis": "47640"
      },
      // ...
    ]
  }
}
```

## Einzelnes Asset lesen

### /Asset_id einstellen

Diese API antwortet auf eine Kryptoanlage mit `:asset_id`

<APIEndpoint base="https://leaf-api.pando.im/api" url="/assets/:asset_id" />

<APIMetaPanel />

<APIParams p-asset_id="the asset id" p-asset_id-required="{true}" />

<APIRequest title="Ein Asset lesen" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/assets/c6d0c728-2624-429b-8e0d-d9d19b6592fa' />

```json title="Response"
{
  "ts": 1633110638578,
  "data": {
    "assets": [
      {
        "id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "name": "Bitcoin",
        "Symbol": "BTC",
        "Logo": "https://mixin-images. eromesh. et/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
        "chain_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "chain": {
          "id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
          "name": "Bitcoin",
          "Symbol": "BTC",
          "Logo": "https://mixin-images. eromesh. et/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
          "chain_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
          "ketten": null,
          "Preis": "47640"
        },
        "Preis": "47640"
      },
      // ...
    ]
  }
}
```
