---
title: Read MTG Info
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## GET /info

이 API는 4swap과 Lake에 대한 MTG 정보를 제공할 것입니다.

````mdx-code-block
:::info
MTG 정보가 자주 변경되지 않으므로 나중에 사용하기 위해 응답을 저장할 수 있습니다.
:::
````

<APIEndpoint base="https://api.4swap.org/api" url="/info" />

<APIMetaPanel />

<APIRequest title="Read MTG info" method="GET" isPublic base="https://api.4swap.org/api" url='/info' />


**응답**

```json
{
  "ts": 1627697766645,
  "data": {
    // MTG 구성원의 사용자 ID
    "members": [
      "a753e0eb-3010-4c4a-a7b2-a7bda4063f62",
      "099627f8-4031-42e3-a846-006ee598c56e",
      "aefbfd62-727d-4424-89db-ae41f75d2e04",
      "d68ca71f-0e2c-458a-bb9c-1d6c2eed2497",
      "e4bc0740-f8fe-418c-ae1b-32d9926f5863"
    ],
    "public_key": "dt351xp3KjNlVCMqBYUeUSF45upCEiReSZAqcjcP/Lc=",
    // 다중서명 임계값
    "threshold": 3
  }
}
```