---
title: Authorization
date: 2021-07-31 11:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

Most APIs are public access, but some are only available to authenticated users.

Pando Lake and 4swap use standard OAuth protocol to authorize users.

## POST /login

Call this API instead of [Mixin Messenger's OAuth API](https://developers.mixin.one/docs/api/oauth/oauth#get-access-token) to exchange the access token with code.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/login" />

<APIMetaPanel /><APIPayload>{`{ // the code from Mixin Messenger's OAuth "code": "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54", } `}</APIPayload>

<APIRequest title="Exchange an access token" method="POST" isPublic base="https://leaf-api.pando.im/api" url='/oauth --data PAYLOAD' />

```json title="Response"
{
  "ts": 1627697766645,
  "data": {
    "scope": "PROFILE:READ ASSETS:READ",
    // the OAuth token
    "token": "..."
  }
}
```

The token is compatible with [Mixin API](https://developers.mixin.one/docs/api/guide). It's fine to use it to get information from Mixin API.

## Sign /me with keystores

Mixin authentication token for `GET https://api.mixin.one/me` with scope "FULL" is supported.

visit [mixin developers doc](https://developers.mixin.one/docs/api/guide#signing) for more details.

