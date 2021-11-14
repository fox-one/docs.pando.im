---
title: 資産を読み取る
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## GET /assets

この API はサポートされているすべての暗号資産に対応します。

<APIEndpoint base="https://api.4swap.org/api" url="/assets" />

<APIMetaPanel />

<APIRequest title="サポートされている資産を読み取る" method="GET" isPublic base="https://api.4swap.org/api" url='/assets' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": {
    "assets": [
      {Asset Entity},
      {Asset Entity},
      ...
    ]
  }
}
```