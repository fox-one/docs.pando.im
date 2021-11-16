---
title: Read Pairs
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## GET /pairs

This API will respond all supported pairs.

<APIEndpoint base="https://api.4swap.org/api" url="/pairs" />

<APIMetaPanel />

<APIRequest title="Read supported pairs" method="GET" isPublic base="https://api.4swap.org/api" url='/pairs' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": {
    "pairs": [
      {Pair Entity},
      {Pair Entity},
      ...
    ],
    "pair_count": 75,
    "transaction_count_24h": 25134,
    "volume_24h": "5189724.64904556",
    "fee_24h": "13687.38904891",
    "ts": 1627697766503,
  }
}
```

### Coinmarketcap Compatible API for /pairs

The API will respond all supported pairs. It's compatible with Coinmarketcap's requirements.

<APIEndpoint base="https://api.4swap.org/api" url="/cmc/pairs" />

<APIMetaPanel />

<APIRequest title="Read support pairs" method="GET" isPublic base="https://api.4swap.org/api" url='/cmc/pairs' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": {
    // combination of 2 crypto's asset_ids
    "05c5ac01-31f9-4a69-aa8a-ab796de1d041_31d2ea9c-95eb-3355-b65b-ba096853bc18": {
      // Monero's asset id
      "base_id": "05c5ac01-31f9-4a69-aa8a-ab796de1d041",
      "base_name": "Monero",
      "base_symbol": "XMR",
      // pUSD's asset id
      "quote_id": "31d2ea9c-95eb-3355-b65b-ba096853bc18",
      "quote_name": "Pando USD",
      "quote_symbol": "pUSD",
      "last_price": "235.830040473787049",
      "base_volume": "1.87552947",
      "quote_volume": "439.96755122"
    },
    ...
  }
}
```