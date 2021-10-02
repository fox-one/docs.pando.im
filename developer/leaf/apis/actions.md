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

<APIMetaPanel scope="Authorized" />

<APIPayload>{`{
  // the amount
  "amount": 0,
  // the asset id
  "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
  // an uuid to trace the transaction
  "follow_id": "17d836d0-8b15-4cba-91d4-d343ed0ad737",
  // other parameters
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