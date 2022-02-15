---
title: 권한 부여
date: 2021-07-31 11:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

대부분의 API는 공용 액세스이지만 일부는 인증된 사용자만 사용할 수 있습니다.

Pando Lake 및 4swap은 표준 OAuth 프로토콜을 사용하여 사용자를 인증합니다.

## POST /login

액세스 토큰을 코드와 교환하려면 [Mixin Messenger의 OAuth API](https://developers.mixin.one/docs/api/oauth/oauth#get-access-token) 대신 이 API를 호출하세요.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/login" />

<APIMetaPanel /><APIPayload>{`{ // Mixin Messenger의 OAuth 코드 "code": "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54", } `}</APIPayload>

<APIRequest title="Exchange an access token" method="POST" isPublic base="https://leaf-api.pando.im/api" url='/oauth --data PAYLOAD' />

```json title="Response"
{
  "ts": 1627697766645,
  "data": {
    "scope": "PROFILE:READ ASSETS:READ",
    // OAuth 토큰
    "token": "..."
  }
}
```

토큰은 [Mixin API](https://developers.mixin.one/docs/api/guide)와 호환됩니다. Mixin API에서 정보를 얻는 데 사용해도 괜찮습니다.

## Sign /me with keystores

Mixin authentication token for `GET https://api.mixin.one/me` with scope "FULL" is supported.

visit [mixin developers doc](https://developers.mixin.one/docs/api/guide#signing) for more details.

