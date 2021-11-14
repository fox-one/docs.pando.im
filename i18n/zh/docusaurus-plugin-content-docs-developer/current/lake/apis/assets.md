---
title: 读取所有资产
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## GET /assets

此 API 将返回所有支持的加密资产。

<APIEndpoint base="https://api.4swap.org/api" url="/assets" />

<APIMetaPanel />

<APIRequest title="读取支持的资产" method="GET" isPublic base="https://api.4swap.org/api" url='/assets' />

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