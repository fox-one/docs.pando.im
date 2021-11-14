---
title: Lese Collaterals
sidebar_position: vier
date: 01-10-2021 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } von "@site/src/components/api";

## Alle Collaterals lesen

### HINWEIS/Katzen

Diese API wird alle unterstützten Sicherheiten beantworten.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/cats" />

<APIMetaPanel />

<APIRequest title="Unterstützte Assets lesen" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/cats' />

```json title="Response"
{
  "collaterals": [
    {
      // normalisierte Schulden
      "art": "number",
      // Minimale Geboterhöhung
      "Beginn": "Nummer",
      // Maximaler Pusd für Liquidation 
      "Box": "Nummer",
      // die Liquidation Strafe
      "chop": "Nummer",
      "created_at": "2021-10-02",
      // Asset Id der Schulden
      "dai": "string",
      // pUSD insgesamt ausgestellt
      "Schuld": "Nummer",
      // Maximale Liquidationsmenge pro Auktion
      "dunk": "Nummer",
      // Schuldenstand pro Tresor
      "Staub": "Nummer",
      // Stabilitätsgebühr
      "Pflicht": "Nummer",
      // die Asset-Id der Sicherheiten
      "gem": "string",
      // id dieses Collateral Typs
      "id": "string",
      // gesperrte Sicherheiten
      "ink": "Nummer",
      // Schuldenobergrenze 
      "Linie": "Nummer",
      // Pusd-Guthaben für die Liquidation
      "Wurf": "Nummer",
      // Status dieses Collateral Typs
      "live": true
      // Liquidation Ratio, zB 150%
      "mat": "Nummer",
      // Name dieses Collateral Typs
      "name": "string",
      // Anzahl der Tresore gehören zu diesem Sicherheitstyp
      "number_of_vaults": 0,
      // aktueller Preis von gem/dai
      "Preis": "Nummer",
      // kumulierte Raten
      "Preis": "Nummer",
      // das Updatedatum von `rate`
      "rho": "2021-10-02",
      // Gesamtverschuldung geliefert
      "Angebot": "Nummer",
      // Gesamtlänge der Auktion
      "tau": 0,
      // Single-Gebot Lebenszeit
      "ttl": 0
    }
  ]
}
```

## Einzelne Sicherheiten lesen

### GET /cats/:id

Diese API antwortet auf eine Collateral mit `:id`

<APIEndpoint base="https://leaf-api.pando.im/api" url="/cats/:id" />

<APIMetaPanel />

<APIParams p-id="the collateral id" p-id-required="{true}" />

<APIRequest title="Lese ein Collateral nach ID" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/cats/d0ec4cc7-edf6-5359-bf23-41fc9d26444e' />

```json title="Response"
{
  "ts": 1633138872979,
  "data": {
    "id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",
    "created_at": "2021-04-27T07:02:55Z",
    "name": "BTC",
    "gem": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
    "dai": "31d2ea9c-95eb-3355-b65b-ba096853bc18",
    "ink": "717. 9020133",
    "art": "9463539.4478672014194987",
    "rate": "1. 192090425079456",
    "rho": "2021-10-02T01:40:26Z",
    "Schuld": "9530560. 8933399",
    "line": "190000",
    "staub": "100",
    "price": "47815. 3",
    "mat": "1. ",
    "duty": "1.045",
    "chop": "1. 3",
    "dunk": "5000",
    "beg": "1. 3",
    "ttl": 1800,
    "tau": 43200,
    "live": true
    "number_of_vaults": "407",
    "Box": "500000",
    "Wurf": "0",
    "Lieferzeit": "190000"
  }
}
```
