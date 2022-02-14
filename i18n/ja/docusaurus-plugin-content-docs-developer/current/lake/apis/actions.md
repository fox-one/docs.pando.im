---
title: アクションを作成する
date: 2021年9月30日23時18分01秒
---

輸入 { APIMetaPanel、 APIRequest、 APIEndpoint、 APIParams、 APIPayload、 } from "@ site / src / components / api";

## POST /アクション

これは、提供された<ahref = "../ action-protocol">アクションプロトコル</a>データによって暗号化された転送を生成するためのAPIです。 転送に自分で署名して暗号化したくない場合に便利です。

<APIEndpoint base="https://api.4swap.org/api" url="/actions" />

<APIMetaPanel scope="Authorized" /><APIPayload>{`{ //アクションプロトコルデータ "アクション"： "3、dfa655ef-55db-4e18-bdd7-29a7c576a223,92779607-e478-4f66-95a6-b2ae47f69d55、c6d0c728-2624-429b-8e0d-d9d19b6592fa、e2nUv、0.0000042669"、 //暗号の量 「金額」：「123」、 //暗号のアセットID "asset_id"： "2566bf58-c4de-3479-8c55-c137bb7fe2ae"、 //オプション、ブローカーID、4swapのデフォルトブローカーを使用するには空のままにします "broker_id"： ""、 //オプション、転送をトレースするUUID "trace_id"： "" } `} </APIPayload>

<APIRequest title="アクションを作成" method="POST" base="https://api.4swap.org/api" url='/actions --data PAYLOAD' />

```json title="Response"
"ts"：1627697766503、
   "データ"： {
     //暗号化されたアクションデータ
     "アクション"： "..."、
     //コードとコードURL。 
    // MessengerやFennecなどのMixinNetwork互換ウォレットを呼び出すために使用できます。
    "コード"： "d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx"、
     "code_url"： "mixin：// codes / d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx"、
     //転送をトレースするUUID
     "follow_id"： "yyyyyyyy-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
   }
} 
```

Fox-oneの [mixin-sdk-go](https://github.com/fox-one/mixin-sdk-go) を使用する場合、`action` を`clientのパラメータとして利用してください。トランザクション`を作成し、メインネットアドレスに送ります:

```go
// `OpponentMultisig`で指定されたマルチサインアドレスにトランザクションを送信します
//OpponentMultisig.ReceiversはMTGグループのメンバーです
tx、err：= client.Transaction（ctx、＆amp; mixin.TransferInput {
     AssetID：assetID、
     金額：decimal.RequireFromString（amount）、
     TraceID：mixin.RandomTraceID（）、
   //応答の `action`フィールド
     メモ：resp.Action、
   // `/ api / information`のMTGメンバー
     OpponentMultisig：struct {
         レシーバー[]文字列 `json："レシーバー、omitempty "`
         しきい値uint8`json： "threshold、omitempty" `
     } {
         受信者：group.Members、
         しきい値：uint8（group.Threshold）、
     }、
}、* pin） 
```

たとえば、ウェブアプリをMixin Network互換のウォレットと統合する場合は、[ Mixin Messenger ](/docs/apps/wallets#mixin-messenger)や<ahref = "/ docs / apps / wallets＃fennec "> Fennec </a>、<ahref =" ../ guide / invoke-wallets ">ガイド/ウォレットの呼び出し</a>をお読みください。
