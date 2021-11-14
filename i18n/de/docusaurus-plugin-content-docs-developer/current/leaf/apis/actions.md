---
title: Aktionen erstellen
sidebar_position: 9
date: 01-10-2021 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } von "@site/src/components/api";

## Aktion erstellen

### POST /Aktionen

Erstellen Sie eine Aktion mit den Parametern.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/actions" />

<APIMetaPanel scope="Authorized"/><APIPayload>{`
{ // der Zahlungsbetrag, optional "Betrag": "1. 14", // die Id der Zahlung, optional "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa", // eine Uuid zur Verfolgung der Transaktion "follow_id": "17d836d0-8b15-4cba-91d4-d343ed0ad737", // Aktionsparameter (String Array) // Einen neuen Tresor öffnen: // [ // "31", // "d0ec4cc7-edf6-5359-bf23-41fc9d26444e", // Collateral id // "100" // Menge an pUSD generiert // ] // Kaution Sicherheiten zu Tresor // [ // "32", // "b829e5f4-b452-4521-a0eb-ad65588ae91a" // Tresor Id // ] // Sicherheiten vom Tresor zurückziehen: // [ // "33", // "b829e5f4-b452-4521-a0eb-ad65588ae91a", // Vault id // "0. 3" // Betrag der zu zahlenden Sicherheiten // ] // Rückzahlung pUSD: // [ // "34", // "b829e5f4-b452-4521-a0eb-ad65588ae91a" // Tresor Id // ] // Mehr Pusd generieren: // [ // "35", // "b829e5f4-b452-4521-a0eb-ad65588ae91a", // Tresor Id // "100" // pUSD generiert // ] // Gebot für eine Auktion: // [ // "42", // "870c9719-0677-415f-981f-685546175e14", // Auktion Id // "0. " // Anzahl der gewünschten Sicherheiten // ] "Parameter": ["string"] }` }</APIPayload>

<APIRequest title="Neue Aktion erstellen" method="POST" base="https://leaf-api.pando.im/api" url='/actions' data="--data PAYLOAD" />

```json title="Response"
{
  // the code and the code url.
  // they could be used to invoke Mixin Network compatible wallet, like Messenger and Fennec.  "code": "string",
  "code_url": "string",
  "memo": "string"
}
```
