---
title: 读取交易
date: 2021-10-01 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## 读取所有交易

### GET /transactions

此 API 将返回所有交易记录。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/transactions" />

<APIMetaPanel />

<APIRequest title="读取所有交易" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/transactions' />

```json title="Response"
{
  "ts": 1633141343147,
  "data": {
    "transactions": [
      {
        "id": "66598b30-67cf-3925-bc0e-b2382bb21e34",
        "created_at": "2021-04-27T05:29:18Z",
        "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",
        "amount": "0.00000001",
        "action": "CatFold",
        "status": "OK",
        "msg": "",
        "parameters": "[\"00000000-0000-0000-0000-000000000000\"]"
      },
      {
        "id": "578d309a-c83a-3202-85ea-124531b79b9b",
        "created_at": "2021-04-27T05:30:18Z",
        "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",
        "amount": "0.00000001",
        "action": "CatFold",
        "status": "OK",
        "msg": "",
        "parameters": "[\"00000000-0000-0000-0000-000000000000\"]"
      },
      // ...
    ],
    "pagination": {
      "next_cursor": "50",
      "has_next": true
    }
  }
}
```

## 读取单笔交易

### GET /transactions/:follow_id

此 API 将根据 `:follow_id` 返回一次交易信息。 `follow_id` 是你在创建 [`动作(Action)`](./actions) 时能够指定的一个 UUID。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/transactions/:follow_id" />

<APIMetaPanel scope="Authorized" />

<APIParams p-follow_id="the follow id" p-follow_id-required="{true}" />

<APIRequest title="读取单笔交易" method="GET" base="https://leaf-api.pando.im/api" url='/transactions/c8c92c8f-65b3-49b7-bfae-d5ae43265129' />

```json title="Response"
{
  "action": 0,
  "amount": "string",
  "asset_id": "string",
  "created_at": "2021-10-02",
  "id": "string",
  "msg": "string",
  "parameters": "string",
  // Abort|Ok
  "status": 0
}
```
