---
title: 读取 MTG 信息
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## GET /info

此 API 将返回关于4swap和Lake的 MTG信息。

````mdx-code-block
:::info
因为 MTG 信息不会频繁更改，您可以保存返回值以便之后使用。
:::
````

<APIEndpoint base="https://api.4swap.org/api" url="/info" />

<APIMetaPanel />

<APIRequest title="读取 MTG 信息" method="GET" isPublic base="https://api.4swap.org/api" url='/info' />


**响应**

```json
{
  "ts": 1627697766645,
  "data": {
    // MTG members 的 user id 
    "members": [
      "a753e0eb-3010-4c4a-a7b2-a7bda4063f62",
      "099627f8-4031-42e3-a846-006ee598c56e",
      "aefbfd62-727d-4424-89db-ae41f75d2e04",
      "d68ca71f-0e2c-458a-bb9c-1d6c2eed2497",
      "e4bc0740-f8fe-418c-ae1b-32d9926f5863"
    ],
    "public_key": "dt351xp3KjNlVCMqBYUeUSF45upCEiReSZAqcjcP/Lc=",
    // 多签 threshold
    "threshold": 3
  }
}
```