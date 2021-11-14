---
title: Transaktionen lesen
sidebar_position: acht
date: 01-10-2021 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## Alle Transaktionen lesen

### GET /transaktionen

Diese API wird alle Transaktionen beantworten.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/transactions" />

<APIMetaPanel />

<APIRequest title="Alle Transaktionen lesen" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/transactions' />

```json title="Response"
{
  "ts": 16331443147,
  "data": {
    "Transaktionen": [
      {
        "id": "66598b30-67cf-3925-bc0e-b2382bb21e34",
        "created_at": "2021-04-27T05:29:18Z",
        "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",
        "Betrag": "0. 00001",
        "Aktion": "CatFold",
        "status": "OK",
        "msg": "",
        "Parameter": "[\"00000000-00-00-0000-0000000000\"]"
      },
      {
        "id": "578d309a-c83a-3202-85ea-124531b79b9b",
        "created_at": "2021-04-27T05:30:18Z",
        "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",
        "Betrag": "0. 00001",
        "action": "CatFold",
        "status": "OK",
        "msg": "",
        "Parameter": "[\"00000000-00-00-0000-00000000\"]"
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

## Einzelne Transaktion anzeigen

### Erhalte /Transaktion/:follow_id

Diese API reagiert eine Transaktion mit `:follow_id`. Die `follow_id` ist eine Uuid die Sie beim Erstellen der [`Aktion`](./actions) angegeben haben.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/transactions/:follow_id" />

<APIMetaPanel scope="Authorized" />

<APIParams p-follow_id="the follow id" p-follow_id-required="{true}" />

<APIRequest title="Eine Transaktion lesen" method="GET" base="https://leaf-api.pando.im/api" url='/transactions/c8c92c8f-65b3-49b7-bfae-d5ae43265129' />

```json title="Response"
{
  "action": 0,
  "amount": "string",
  "asset_id": "string",
  "created_at": "2021-10-02",
  "id": "string",
  "msg": "string",
  "Parameter": "string", "string",
  // Abbrechen|Ok
  "Status": 0
}
```
