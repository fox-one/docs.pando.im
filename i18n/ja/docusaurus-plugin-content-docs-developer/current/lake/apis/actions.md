---
title: アクションを作成
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## POST /actions

これは提供された [アクションプロトコル](../action-protocol) データによって暗号化送金を生成するための API です。 送金する際に自分で署名したり暗号化したりしたくない場合には便利です。

<APIEndpoint base="https://api.4swap.org/api" url="/actions" />

<APIMetaPanel scope="Authorized" /><APIPayload>{`{ // Action protocol data "action":     "3,dfa655ef-55db-4e18-bdd7-29a7c576a223,92779607-e478-4f66-95a6-b2ae47f69d55,c6d0c728-2624-429b-8e0d-d9d19b6592fa,e2nUv,0.0000042669", // amount of crypto "amount":     "123", // asset id of crypto "asset_id":   "2566bf58-c4de-3479-8c55-c137bb7fe2ae", // optional, broker id, leave it empty to use 4swap's default broker "broker_id":  "", // optional, an UUID to trace the transfer "trace_id":   "" } `}</APIPayload>

<APIRequest title="アクションを作成" method="POST" base="https://api.4swap.org/api" url='/actions --data PAYLOAD' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": {
    //暗号化されたaction data
    "action": "...",
    // code と code url.
    // MessengerとFennecのようなMixin Networkに対応するウォレットを呼び出すために使用できます。
    "code": "d294380f-xxxx-xxxx-xxxxxxxxxxxxxxxx",
    "code_url": "mixin://codes/d294380-xxxx-xxxx-xxxxxxxxxxxxxxxxxxxxxx",
    // 送金をトレースするためのUUID
    "follow_id": "yyyyyyyy-xx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxxxxxxxxx"
  }
}
```

Fox-oneの [mixin-sdk-go](https://github.com/fox-one/mixin-sdk-go) を使用する場合、`action` を`clientのパラメータとして利用してください。トランザクション`を作成し、メインネットアドレスに送ります:

```go
// トランザクションを「OpponentMultisig」に指定されたマルチサインアドレスに送る
// 「OpponentMultisig.Receivers」全員は「MTG Group」のメンバーである
tx, err := client.Transaction(ctx, &mixin.TransferInput{
    AssetID: assetID,
    Amount:  decimal.RequireFromString(amount),
    TraceID: mixin.RandomTraceID(),
  // the `action` field in the response
    Memo:    resp.Action,
  // the MTG members from `/api/information`
    OpponentMultisig: struct {
        Receivers []string `json:"receivers,omitempty"`
        Threshold uint8    `json:"threshold,omitempty"`
    }{
        Receivers: group.Members,
        Threshold: uint8(group.Threshold),
    },
}, *pin)
```

WebアプリケーションとMixin Networkウォレットを統合したい場合（例えば、[Mixin Messenger](/docs/apps/wallets#mixin-messenger) と [Fennec](/docs/apps/wallets#fennec)）、 [Guide / Invoking Wallets](../guide/invoke-wallets)を参考してください。
