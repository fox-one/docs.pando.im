---
title: Tresore lesen
sidebar_position: 6
date: 01-10-2021 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## Alle Tresore lesen

### GET /vats

Diese API wird alle Tresore beantworten.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/vats" />

<APIMetaPanel />

<APIParams p-cursor="the cursor to start from" p-limit="the limitation of items in response" />

<APIRequest title="Alle Tresore lesen" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/vats' />

```json title="Response"
{
  "ts": 1633140121000,
  "data": {
    "vaults": [
      {
        "id": "52010fd0-6a9d-393c-abcb-ca997d950bf5",
        "created_at": "2021-04-27T10:51:16Z",
        "collateral_id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",
        // locked Collateral
        "ink": "2",
        // normalized debt
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

## Einzelne Tresore lesen

### GET /vat/:id

Diese API antwortet auf einen Tresor mit `:id`

<APIEndpoint base="https://leaf-api.pando.im/api" url="/vats/:id" />

<APIMetaPanel />

<APIParams p-id="the vault id" p-id-required="{true}" />

<APIRequest title="Einen Tresor lesen" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/vats/52010fd0-6a9d-393c-abcb-ca997d950bf5' />

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

## Alle Tresorereignisse lesen

### GET /vat/:id/events

Diese API reagiert auf alle Ereignisse eines Tresors mit `:id`

<APIEndpoint base="https://leaf-api.pando.im/api" url="/vat/:id/events" />

<APIMetaPanel />

<APIParams p-id="the vault id" p-id-required="{true}" />

<APIRequest title="Alle Ereignisse eines Tresors lesen" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/vaults/52010fd0-6a9d-393c-abcb-ca997d950bf5/events' />

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


## Meine Tresore lesen

### GET /me/vats

Diese API wird alle Tresore des aktuellen Benutzers beantworten.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/me/vats" />

<APIMetaPanel scope="Authorized" />

<APIParams p-cursor="the cursor to start from" p-limit="the limitation of items in response" />

<APIRequest title="Alle Tresore eines Benutzers lesen" method="GET" base="https://leaf-api.pando.im/api" url='/me/vats' />

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
