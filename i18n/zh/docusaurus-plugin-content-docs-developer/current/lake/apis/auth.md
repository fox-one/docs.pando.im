---
title: 授权
date: 2021-07-31 11:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

大多数API是公开访问的，但有些仅供认证用户使用。

Pando Lake 和 4swap使用标准的 OAuth 协议给用户授权。

## POST /oauth

调用此 API 而不是 [Mixin Messenger OAuth API](https://developers.mixin.one/docs/api/oauth/oauth#get-access-token) 来交换access token和code。

<APIEndpoint base="https://api.4swap.org/api" url="/oauth" />

<APIMetaPanel /><APIPayload>{`{ // 来自 Mixin Messenger's OAuth 的 code "code":       "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54", // leave "broker_id" and "label" to empty if you don't want to use other brokers. "broker_id":  "", "label":      "" } `}</APIPayload>

<APIRequest title="交换访问令牌" method="POST" isPublic base="https://api.4swap.org/api" url='/oauth --data PAYLOAD' />

```json title="Response"
{
  "ts": 1627697766645,
  "data": {
    "scope": "PROFILE:READ ASSETS:READ",
    // OAuth 的 token
    "token": "..."
  }
}
```

Token 与 [Mixin API](https://developers.mixin.one/docs/api/guide) 兼容。 可以用它从 Mixin API 获取信息。

