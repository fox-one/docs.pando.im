---
title: Authorization

date: 2021-07-31 11:18:01
---

import {
  APIMetaPanel,
  APIRequest,
  APIEndpoint,
  APIParams,
  APIPayload,
} from "@site/src/components/api";

Most APIs are public access, but some are only available to authenticated users.

## Sign /me with keystores

Usually, you can use the a regular Mixin authentication token for ```GET https://api.mixin.one/me``` with scope "FULL".

The token should be generated by **your own Mixn Application**. Please visit [Developer Dashboard](https://developers.mixin.one/dashboard) to create an application, and visit [Mixin Developers Docs](https://developers.mixin.one/docs/api/guide#signing) for the signing procedure.

## POST /oauth

In merely cases, for example, you want to provide user a customized swap GUI, you can use the OAuth to get a token for the user.

Call this API instead of [Mixin Messenger's OAuth API](https://developers.mixin.one/docs/api/oauth/oauth#get-access-token) to exchange the access token with code.

The code must be issued by 4swap.

<APIEndpoint base="https://api.4swap.org/api" url="/oauth" />

<APIMetaPanel />

<APIPayload>{`{
  // the code from Mixin Messenger's OAuth
  "code":       "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54",
  // leave "broker_id" and "label" to empty if you don't want to use other brokers.
  "broker_id":  "",
  "label":      ""
}
`}</APIPayload>

<APIRequest
  title="Exchange an access token"
  method="POST"
  isPublic
  base="https://api.4swap.org/api"
  url='/oauth --data PAYLOAD'
/>

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
