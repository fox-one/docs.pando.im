---
title: Create Actions
sidebar_position: 9
date: 2021-10-01 23:18:01
---

import {
  APIMetaPanel,
  APIRequest,
  APIEndpoint,
  APIParams,
  APIPayload,
} from "@site/src/components/api";

## Create an Action

### POST /actions

Create an action with the parameters.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/actions" />

<APIMetaPanel/>

<APIPayload>{`{
  // the payment amount, optional
  "amount": "1.014",
  // the payment asset id, optional
  "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
  // an uuid to trace the transaction
  "follow_id": "17d836d0-8b15-4cba-91d4-d343ed0ad737",
  // action parameters
  // Vault
  // Open a new vault: ["31","collateral id","pUSD amount"]
  // Deposit collateral to vault: ["32","vault id"]
  // Withdraw collateral from vault: ["33","vault id","withdraw amount"]
  // Payback pUSD: ["34","vault id"]
  // Generate more pUSD: ["35","vault id","pUSD amount"]
  // Auction
  // Bid for an auction: ["42","auction id","collateral amount wanted"]
  "parameters": [
    "string"
  ]
}
`}</APIPayload>

<APIRequest
  title="Create an action"
  method="POST"
  base="https://leaf-api.pando.im/api"
  url='/actions'
  data="--data PAYLOAD"
/>

```json title="Response"
{
  // the code and the code url.
  // they could be used to invoke Mixin Network compatible wallet, like Messenger and Fennec.  "code": "string",
  "code_url": "string",
  "memo": "string"
}
```
