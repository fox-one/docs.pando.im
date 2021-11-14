---
title: Read Collaterals

date: 2021-10-01 23:18:01
---

import {
  APIMetaPanel,
  APIRequest,
  APIEndpoint,
  APIParams,
  APIPayload,
} from "@site/src/components/api";

## Read All Collaterals

### GET /cats

This API will respond all supported collaterals.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/cats" />

<APIMetaPanel />

<APIRequest
  title="Read supported assets"
  method="GET"
  isPublic
  base="https://leaf-api.pando.im/api"
  url='/cats'
/>

```json title="Response"
{
  "collaterals": [
    {
      // normalized debt
      "art": "number",
      // minimum bid increase
      "beg": "number",
      // max pUSD out for liquidation 
      "box": "number",
      // the liquidation penalty
      "chop": "number",
      "created_at": "2021-10-02",
      // the asset id of debt
      "dai": "string",
      // total pUSD issued
      "debt": "number",
      // max liquidation Quantity per auction
      "dunk": "number",
      // debt floor per vault
      "dust": "number",
      // stability fee
      "duty": "number",
      // the asset id of collateral
      "gem": "string",
      // id of this collateral type
      "id": "string",
      // locked Collateral
      "ink": "number",
      // debt Ceiling 
      "line": "number",
      // balance of pUSD out for liquidation
      "litter": "number",
      // status of this collateral type
      "live": true,
      // liquidation ratio, eg 150%
      "mat": "number",
      // name of this collateral type
      "name": "string",
      // number of vaults belong to this collateral type
      "number_of_vaults": 0,
      // current price of gem/dai
      "price": "number",
      // accumulated Rates
      "rate": "number",
      // the update date of `rate`
      "rho": "2021-10-02",
      // total debt supplied
      "supply": "number",
      // total auction length
      "tau": 0,
      // single bid lifetime
      "ttl": 0
    }
  ]
}
```

## Read Single Collateral

### GET /cats/:id

This API will respond one collateral with `:id`

<APIEndpoint base="https://leaf-api.pando.im/api" url="/cats/:id" />

<APIMetaPanel />

<APIParams
  p-id="the collateral id"
  p-id-required="{true}"
/>

<APIRequest
  title="Read one collateral by ID"
  method="GET"
  isPublic
  base="https://leaf-api.pando.im/api"
  url='/cats/d0ec4cc7-edf6-5359-bf23-41fc9d26444e'
/>

```json title="Response"
{
  "ts": 1633138872979,
  "data": {
    "id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",
    "created_at": "2021-04-27T07:02:55Z",
    "name": "BTC",
    "gem": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
    "dai": "31d2ea9c-95eb-3355-b65b-ba096853bc18",
    "ink": "717.09020133",
    "art": "9463539.4478672014194987",
    "rate": "1.0192090425079456",
    "rho": "2021-10-02T01:40:26Z",
    "debt": "9530560.48933399",
    "line": "19000000",
    "dust": "100",
    "price": "47815.83",
    "mat": "1.5",
    "duty": "1.045",
    "chop": "1.13",
    "dunk": "5000",
    "beg": "1.03",
    "ttl": 1800,
    "tau": 43200,
    "live": true,
    "number_of_vaults": "407",
    "box": "500000",
    "litter": "0",
    "supply": "19000000"
  }
}
```
