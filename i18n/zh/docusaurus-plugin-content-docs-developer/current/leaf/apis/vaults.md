---
title: 读取金库
date: 2021-10-01 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## 读取所有金库

### GET /vats

此 API 将返回所有已创建的金库。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/vats" />

<APIMetaPanel />

<APIParams p-cursor="the cursor to start from" p-limit="the limitation of items in response" />

<APIRequest title="读取所有金库" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/vats' />

```json title="Response"
{
  "ts": 1633140121000,
  "data": {
    "vaults": [
      {
        "id": "52010fd0-6a9d-393c-abcb-ca997d950bf5",
        "created_at": "2021-04-27T10:51:16Z",
        "collateral_id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",
        //抵押物
        "ink": "2",
        //标准化债务 (normalized debt)
        "art": "30530.6925452775230346",
        "identity_id": "1"
      },
      {
        "id": "321b4903-c291-39e4-9563-6b01c4826b08",
        "created_at": "2021-04-27T10:53:26Z",
        "collateral_id": "686cb137-b5e6-586c-bece-926736ffc583",
        "ink": "2",
        "art": "98.1633931890668012",
        "identity_id": "2"
      },
      {
        "id": "6fbd8796-3ffa-38ab-aa95-64584e6e57ca",
        "created_at": "2021-04-27T11:01:52Z",
        "collateral_id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",
        "ink": "10",
        "art": "206146.036118189767744",
        "identity_id": "3"
      }
      // ...
    ],
    "pagination": {
      "next_cursor": "100",
      "has_next": true
    }
  }
}
```

## 读取单个金库

### GET /vat/:id

此 API 将根据 `:id` 返回单个金库。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/vats/:id" />

<APIMetaPanel />

<APIParams p-id="the vault id" p-id-required="{true}" />

<APIRequest title="读取单个金库" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/vats/52010fd0-6a9d-393c-abcb-ca997d950bf5' />

```json title="Response"
{
  "ts": 1633140496485,
  "data": {
    "id": "52010fd0-6a9d-393c-abcb-ca997d950bf5",
    "created_at": "2021-04-27T10:51:16Z",
    "collateral_id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",
    "ink": "2",
    "art": "30530.6925452775230346",
    "identity_id": "1"
  }
}
```

## 读取金库的所有事件

### GET /vat/:id/events

此 API 将根据 `:id` 返回一个金库的所有事件。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/vat/:id/events" />

<APIMetaPanel />

<APIParams p-id="the vault id" p-id-required="{true}" />

<APIRequest title="读取一个金库的所有事件" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/vaults/52010fd0-6a9d-393c-abcb-ca997d950bf5/events' />

```json title="Response"
{
  "ts": 1633140563750,
  "data": {
    "events": [
      {
        "vault_id": "52010fd0-6a9d-393c-abcb-ca997d950bf5",
        "created_at": "2021-09-28T06:52:14Z",
        "action": "VatWithdraw",
        "dink": "-1",
        "dart": "0",
        "debt": "0"
      },
      {
        "vault_id": "52010fd0-6a9d-393c-abcb-ca997d950bf5",
        "created_at": "2021-09-28T06:51:54Z",
        "action": "VatPayback",
        "dink": "0",
        "dart": "-14724.0127094986199707",
        "debt": "-15000"
      },
      // ...
    ]
  }
}
```


## 读取我的金库

### GET /me/vats

此 API 将返回当前用户的所有金库。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/me/vats" />

<APIMetaPanel scope="Authorized" />

<APIParams p-cursor="the cursor to start from" p-limit="the limitation of items in response" />

<APIRequest title="读取一个用户的所有金库" method="GET" base="https://leaf-api.pando.im/api" url='/me/vats' />

```json title="Response"
{
  "ts": 1633140121000,
  "data": {
    "vaults": [
      {
        "id": "52010fd0-6a9d-393c-abcb-ca997d950bf5",
        "created_at": "2021-04-27T10:51:16Z",
        "collateral_id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",
        "ink": "2",
        "art": "30530.6925452775230346",
        "identity_id": "1"
      },
      // ...
    ],
    "pagination": {
      "next_cursor": "100",
      "has_next": true
    }
  }
}
```
