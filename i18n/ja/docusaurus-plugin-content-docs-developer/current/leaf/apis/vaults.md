---
title: 金庫の読み取り
date: 2021年10月01日　23時18分1秒
---

輸入 { APIMetaPanel、 APIRequest、 APIEndpoint、 APIParams、 APIPayload、 } from "@ site / src / components / api";

## 全ての金庫の読み取り

### GET /vats

このAPIはすべての金庫に応答します。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/vats" />

<APIMetaPanel />

<APIParams p-cursor="the cursor to start from" p-limit="the limitation of items in response" />

<APIRequest title="すべての保管庫の読み取り" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/vats' />

```json title="Response"
{
   "ts"：1633140121000、
   "データ"： {
     「ボールト」：[
       {{
         "id"： "52010fd0-6a9d-393c-abcb-ca997d950bf5"、
         "created_at"： "2021-04-27T10：51：16Z"、
         "collateral_id"： "d0ec4cc7-edf6-5359-bf23-41fc9d26444e"、
         //ロックされた担保
         「インク」：「2」、
         //正規化された債務
         「アート」：「30530.6925452775230346」、
         "identity_id"： "1"
       }、
       {{
         "id"： "321b4903-c291-39e4-9563-6b01c4826b08"、
         "created_at"： "2021-04-27T10：53：26Z"、
         "collateral_id"： "686cb137-b5e6-586c-bece-926736ffc583"、
         「インク」：「2」、
         「アート」：「98.1633931890668012」、
         "identity_id"： "2"
       }、
       {{
         "id"： "6fbd8796-3ffa-38ab-aa95-64584e6e57ca"、
         "created_at"： "2021-04-27T11：01：52Z"、
         "collateral_id"： "d0ec4cc7-edf6-5359-bf23-41fc9d26444e"、
         「インク」：「10」、
         「アート」：「206146.036118189767744」、
         "identity_id"： "3"
       }
       //...
    ]、
     「ページ付け」：{
       "next_cursor"： "100"、
       "has_next"：true
     }
   }
}
```

## 単一保管庫の読み取り

### GET /vat/:id

このAPIは、1つの金庫に`：id </ code>で応答します </p>

<p spaces-before="0">

<APIEndpoint base="https://leaf-api.pando.im/api" url="/vats/:id" /></p>

<p spaces-before="0">

<APIMetaPanel /></p>

<p spaces-before="0"><APIParams
  p-id="the vault id"
  p-id-required="{true}"
/></p>

<p spaces-before="0"><APIRequest
  title="保管庫の読み取り"
  method="GET"
  isPublic
 base="https://leaf-api.pando.im/api"
  url='/vats/52010fd0-6a9d-393c-abcb-ca997d950bf5'
/></p>

<pre><code class="json title="Response"">{
   "ts"：1633140496485、
   "データ"： {
     "id"： "52010fd0-6a9d-393c-abcb-ca997d950bf5"、
     "created_at"： "2021-04-27T10：51：16Z"、
     "collateral_id"： "d0ec4cc7-edf6-5359-bf23-41fc9d26444e"、
     「インク」：「2」、
     「アート」：「30530.6925452775230346」、
     "identity_id"： "1"
   }
}
`</pre>

## すべての金庫イベントを読む

### /vat/:id/events を取得

この API は `:id` で保管庫のすべてのイベントに応答します

<APIEndpoint base="https://leaf-api.pando.im/api" url="/vat/:id/events" />

<APIMetaPanel />

<APIParams p-id="the vault id" p-id-required="{true}" />

<APIRequest title="1つの保管庫のすべてのイベントを読む" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/vaults/52010fd0-6a9d-393c-abcb-ca997d950bf5/events' />

```json title="Response"
{
   "ts"：1633140563750、
   "データ"： {
     「イベント」：[
       {{
         "vault_id"： "52010fd0-6a9d-393c-abcb-ca997d950bf5"、
         "created_at"： "2021-09-28T06：52：14Z"、
         "アクション"： "VatWithdraw"、
         "dink"： "-1"、
         「ダーツ」：「0」、
         "負債"： "0"
       }、
       {{
         "vault_id"： "52010fd0-6a9d-393c-abcb-ca997d950bf5"、
         "created_at"： "2021-09-28T06：51：54Z"、
         "アクション"： "VatPayback"、
         "dink"： "0"、
         "ダーツ"： "-14724.0127094986199707"、
         「負債」：「-15000」
      },
      // ...
    ]
  }
}
```


## 私の金庫を読む

### GET /me/vats

この API は、現在のユーザーに属するすべての保管庫に対応します。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/me/vats" />

<APIMetaPanel scope="Authorized" />

<APIParams p-cursor="the cursor to start from" p-limit="the limitation of items in response" />

<APIRequest title="ユーザーのすべての保管庫の読み取り" method="GET" base="https://leaf-api.pando.im/api" url='/me/vats' />

```json title="Response"
{
   "ts"：1633140121000、
   "データ"： {
     「ボールト」：[
       {{
         "id"： "52010fd0-6a9d-393c-abcb-ca997d950bf5"、
         "created_at"： "2021-04-27T10：51：16Z"、
         "collateral_id"： "d0ec4cc7-edf6-5359-bf23-41fc9d26444e"、
         「インク」：「2」、
         「アート」：「30530.6925452775230346」、
         "identity_id"： "1"
       }、
       //...
    ]、
     「ページ付け」：{
       "next_cursor"： "100"、
       "has_next"：true
     }
   }
}
```
