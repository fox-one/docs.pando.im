---
title: 授权
date: 2021-07-31 11:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

大多数API是公开访问的，但有些仅供认证用户使用。

Pando Lake 和 4swap使用标准的 OAuth 协议给用户授权。

## 发布/登录

调用此API而不是[Mixin Messenger的OAuth API](https://developers.mixin.one/docs/api/oauth/oauth#get-access-token)，来用代码交换访问令牌。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/login" />

<APIMetaPanel /><APIPayload>{`{ // 来自 Mixin Messenger 的 OAuth 的代码 “代码”：“28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54”， } `}</APIPayload>

<APIRequest title="交换访问令牌" method="POST" isPublic base="https://leaf-api.pando.im/api" url='/oauth --data PAYLOAD' />

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

## 使用密钥库签署 /我

支持范围为“FULL”的 `GET https://api.mixin.one/me` 的 Mixin 身份验证令牌。

访问 [mixin 开发人员文档](https://developers.mixin.one/docs/api/guide#signing)了解更多详情。

