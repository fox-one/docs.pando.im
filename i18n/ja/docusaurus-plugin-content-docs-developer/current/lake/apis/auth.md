---
title: 承認
date: 2021-07-31 11:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

ほとんどのAPIは公開アクセスですが、認証されたユーザーのみが利用できるものもあります。

Pando Lake と 4swap は、標準 OAuth プロトコルを使用してユーザーを認証します。

## POST /oauth

[Mixin MessengerのOAuth API](https://developers.mixin.one/docs/api/oauth/oauth#get-access-token) の代わりにこのAPIをコールしてアクセストークンをコードと交換します。

<APIEndpoint base="https://api.4swap.org/api" url="/oauth" />

<APIMetaPanel /><APIPayload>{`{ // Mixin Messenger's OAuthからのコード "code":       "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54", // leave "broker_id" and "label" to empty if you don't want to use other brokers. "broker_id":  "", "label":      "" } `}</APIPayload>

<APIRequest title="アクセストークンを交換" method="POST" isPublic base="https://api.4swap.org/api" url='/oauth --data PAYLOAD' />

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

トークンは [Mixin API](https://developers.mixin.one/docs/api/guide) と互換性があります。 Mixin API から情報を取得するために使用しても構いません。

