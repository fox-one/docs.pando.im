---
title: Read Vaults
date: 2021-10-01 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## Read All Vaults

### GET /vats

이 API는 모든 볼트에 응답합니다.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/vats" />

<APIMetaPanel />

<APIParams p-cursor="the cursor to start from" p-limit="the limitation of items in response" />

<APIRequest title="Read all vaults" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/vats' />

```json title="Response"
{
  "ts": 1633140121000,
  "data": {
    "vaults": [
      {
        "id": "52010fd0-6a9d-393c-abcb-ca997d950bf5",
        "created_at": "2021-04-27T10:51:16Z",
        "collateral_id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",
        // 잠긴 담보
        "ink": "2",
        // 정상화 부채 (normalized debt)
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

## Read Single Vault

### GET /vat/:id

이 API는 `:id`로 하나의 볼트에 응답합니다.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/vats/:id" />

<APIMetaPanel />

<APIParams p-id="the vault id" p-id-required="{true}" />

<APIRequest title="Read one vault" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/vats/52010fd0-6a9d-393c-abcb-ca997d950bf5' />

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

## Read All Vault Events

### GET /vat/:id/events

이 API는 `:id`로 한 볼트의 모든 이벤트에 응답합니다.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/vat/:id/events" />

<APIMetaPanel />

<APIParams p-id="the vault id" p-id-required="{true}" />

<APIRequest title="Read all events of one vault" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/vaults/52010fd0-6a9d-393c-abcb-ca997d950bf5/events' />

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


## Read My Vaults

### GET /me/vats

이 API는 현재 사용자에게 속한 모든 볼트에 응답합니다.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/me/vats" />

<APIMetaPanel scope="Authorized" />

<APIParams p-cursor="the cursor to start from" p-limit="the limitation of items in response" />

<APIRequest title="Read all vaults of a user" method="GET" base="https://leaf-api.pando.im/api" url='/me/vats' />

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
