---
title: MTG Info lesen
sidebar_position: 3
date: 30-09-2021 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } von "@site/src/components/api";

## GET /info

Diese API wird MTG Informationen über 4swap und See.

````mdx-code-block
:::info
Du kannst die Antwort speichern, um sie später zu verwenden, da sich die MTG-Informationen nicht oft ändern würden.
:::
````

<APIEndpoint base="https://api.4swap.org/api" url="/info" />

<APIMetaPanel />

<APIRequest title="MTG Info lesen" method="GET" isPublic base="https://api.4swap.org/api" url='/info' />


**Reaktion**

```json
{
  "ts": 1627697766645,
  "data": {
    // Benutzer-ID von MTG-Mitgliedern
    "members": [
      "a753e0eb-3010-4c4a-a7b2-a7bda4063f62",
      "099627f8-4031-42e3-a846-006ee598c56e",
      "aefbfd62-727d-4424-89db-ae41f75d2e04",
      "d68ca71f-0e2c-458a-bb9c-1d6c2eed2497",
      "e4bc0740-f8fe-418c-ae1b-32d9926f5863"
    ],
    "public_key": "dt351xp3KjNlVCMqBYUeUSF45upCEiReSZAqcjcP/Lc=",
    // Multisig Schwellwert
    "Schwell": 3
  }
}
```