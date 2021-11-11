---
title: Read Assets
sidebar_position: 5
date: 2021-09-30 23:18:01
---

"@site/src/components/api"에서 { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } 를 가져옵니다.

## GET /assets

이 API는 지원되는 모든 암호화폐 자산에 응답합니다.

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