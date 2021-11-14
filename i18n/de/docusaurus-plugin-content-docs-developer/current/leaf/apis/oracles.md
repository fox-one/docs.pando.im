---
title: Oracles lesen
sidebar_position: sieben
date: 01-10-2021 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } von "@site/src/components/api";

## Alle Oracles lesen

### GET /oracles

Diese API wird alle Orakel beantworten.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/oracles" />

<APIMetaPanel />

<APIRequest title="Alle Orakel lesen" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/oracles' />

```json title="Response"
{
  "ts": 1633140945596,
  "data": {
    "oracles": [
      {
        "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        "hop": 1800,
        // current price
        "current": "47817.13",
        // next pirce
        "next": "47759.41",
        // the time of latest price
        "peek_at": "2021-04-27T06:00:00Z",
        // the threshold of the consensus
        "threshold": 4,
        // the members who have agreed to the price
        "governors": [
          "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826",
          "d2d4399d-669d-4448-89f6-d65805e62fb7",
          "1265e53d-3642-484c-9f3d-b8616606fd6d",
          "75f18fe8-b056-46d6-9c48-0214425e58ce"
        ]
      },
      // ...
    ]
  }
}
```

## Einzelnes Oracle lesen

### GET /oracles/:id

Diese API antwortet ein Orakel mit der asset_id `:id`

<APIEndpoint base="https://leaf-api.pando.im/api" url="/oracles/:id" />

<APIMetaPanel />

<APIParams p-id="the asset id" p-id-required="{true}" />

<APIRequest title="Ein Orakel lesen" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/oracles/c6d0c728-2624-429b-8e0d-d9d19b6592fa' />

```json title="Response"
{
  "ts": 1633141162231,
  "data": {
    "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
    "hop": 1800,
    // current price
    "current": "47817.13",
    // next pirce
    "next": "47759.41",
    // the time of latest price
    "peek_at": "2021-04-27T06:00:00Z",
    // the threshold of the consensus
    "threshold": 4,
    // the members who have agreed to the price
    "governors": [
      "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826",
      "d2d4399d-669d-4448-89f6-d65805e62fb7",
      "1265e53d-3642-484c-9f3d-b8616606fd6d",
      "75f18fe8-b056-46d6-9c48-0214425e58ce"
    ]
  }
}
```
