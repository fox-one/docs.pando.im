---
title: MTG情報を読み取る
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## GET /info

この API は 4swap と Lake に関する MTG 情報を提供します。

````mdx-code-block
:::info
MTG情報が頻繁に変更されないので、後で使うためにリスポンスを保存しても構わない。
:::
````

<APIEndpoint base="https://api.4swap.org/api" url="/info" />

<APIMetaPanel />

<APIRequest title="MTG情報を読み取る" method="GET" isPublic base="https://api.4swap.org/api" url='/info' />


**レスポンス**

```json
{
  "ts": 1627697766645,
  "data": {
    // MTGメンバーズのユーザーID
    "members": [
      "a753e0eb-3010-4c4a-a7b2-a7bda4063f62",
      "099627f8-4031-42e3-a846-006ee598c56e",
      "aefbfd62-727d-4424-89db-ae41f75d2e04",
      "d68ca71f-0e2c-458a-bb9c-1d6c2eed2497",
      "e4bc0740-f8fe-418c-ae1b-32d9926f5863"
    ],
    "public_key": "dt351xp3KjNlVCMqBYUeUSF45upCEiReSZAqcjcP/Lc=",
    // マルチシグ閾値
    "threshold": 3
  }
}
```