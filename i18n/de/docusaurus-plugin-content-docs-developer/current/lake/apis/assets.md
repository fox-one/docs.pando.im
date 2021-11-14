---
title: Read Assets
date: 30-09-2021 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## GET /assets

This API will respond all supported crypto assets.

<APIEndpoint base="https://api.4swap.org/api" url="/assets" />

<APIMetaPanel />

<APIRequest title="Read supported assets" method="GET" isPublic base="https://api.4swap.org/api" url='/assets' />

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