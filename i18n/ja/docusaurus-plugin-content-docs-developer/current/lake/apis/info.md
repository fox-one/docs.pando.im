---
title: Read MTG Info
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## GET /info

This API will MTG information about 4swap and Lake.

````mdx-code-block
:::info
You can save the response to use it later because the MTG information wouldn't change frequently.
:::
````

<APIEndpoint base="https://api.4swap.org/api" url="/info" />

<APIMetaPanel />

<APIRequest title="Read MTG info" method="GET" isPublic base="https://api.4swap.org/api" url='/info' />


**Response**

```json
{
  "ts": 1627697766645,
  "data": {
    // user id of MTG members
    "members": [
      "a753e0eb-3010-4c4a-a7b2-a7bda4063f62",
      "099627f8-4031-42e3-a846-006ee598c56e",
      "aefbfd62-727d-4424-89db-ae41f75d2e04",
      "d68ca71f-0e2c-458a-bb9c-1d6c2eed2497",
      "e4bc0740-f8fe-418c-ae1b-32d9926f5863"
    ],
    "public_key": "dt351xp3KjNlVCMqBYUeUSF45upCEiReSZAqcjcP/Lc=",
    // multisig threshold
    "threshold": 3
  }
}
```