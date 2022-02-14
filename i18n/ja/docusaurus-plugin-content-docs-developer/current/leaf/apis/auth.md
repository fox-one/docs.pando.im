---
title: 承認
date: 2021年7月31日11時18分01秒
---

輸入 { APIMetaPanel、 APIRequest、 APIEndpoint、 APIParams、 APIPayload、 } from "@ site / src / components / api";

ほとんどのAPIは公開アクセスですが、認証されたユーザーのみが利用できるものもあります。

Pando Lake と 4swap は、標準 OAuth プロトコルを使用してユーザーを認証します。

## POST /ログイン

[Mixin MessengerのOAuth API](https://developers.mixin.one/docs/api/oauth/oauth#get-access-token) の代わりにこのAPIをコールしてアクセストークンをコードと交換します。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/login" />

<APIMetaPanel /><APIPayload>{`{ // MixinMessengerのOAuthからのコード "コード"： "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54"、 } `}</APIPayload>

<APIRequest title="アクセストークンを交換" method="POST" isPublic base="https://leaf-api.pando.im/api" url='/oauth --data PAYLOAD' />

```json title="Response"
{{
   "ts"：1627697766645、
   "データ"： {
     "scope"： "PROFILE：READ ASSETS：READ"、
     // OAuthトークン
    "トークン": "..."
  }
}
```

トークンは [Mixin API](https://developers.mixin.one/docs/api/guide) と互換性があります。 Mixin API から情報を取得するために使用しても構いません。

## キーストアで/ meに署名する

スコープが「FULL」の GET https://api.mixin.one/me </ code>のMixin認証トークンがサポートされています。</p>

<p spaces-before="0">詳細については、<ahref = "https://developers.mixin.one/docs/api/guide#signing">ミックスイン開発者向けドキュメント</a>にアクセスしてください。</p>

