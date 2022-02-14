---
title: オークションを読む
date: 2021年10月01日　23時18分01秒
---

輸入 { APIMetaPanel、 APIRequest、 APIEndpoint、 APIParams、 APIPayload、 } from "@ site / src / components / api";

## すべてのオークションを読む

### GET /flips

このAPIはすべてのオークションに応答します。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/flips" />

<APIMetaPanel />

<APIParams p-cursor="the cursor to start from" p-limit="the limitation of items in response" />

<APIRequest title="すべてのオークションを読む" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/flips' />

```json title="Response"
{
 「フリップ」：[
     {
       // ActionKick：オークションが始まり、すべての入札が受け入れられます
       // ActionBid：オークション入札
       // ActionDeal：オークションは終了しました
       「アクション」：0、
       「アート」：「ストリング」、
       //現在の入札額
       「入札」：「文字列」、
       "collateral_id"： "文字列"、
       "created_at"： "2021-10-02"、
       //オークション終了時間
       "終了"： "2021-10-02"、
       「男」：「文字列」、
       "id"： "文字列"、
       //オークションにかけられた担保の金額
       「ロット」：「100」、
       //受け入れられた入札の最大額
       「タブ」：「2」、
       //入札終了時間
       "tic"： "2021-10-02"、
       "vault_id"： "文字列"
     }
   ]、
   「ページ付け」：{
     "has_next"：true、
     "next_cursor"： "文字列"
  }
}
```

## シングルオークションを読む

### GET /flips/:id

このAPIは、`：id </ code>によって1つのオークションに応答します。</p>

<p spaces-before="0">

<APIEndpoint base="https://leaf-api.pando.im/api" url="/flips/:id" /></p>

<p spaces-before="0">

<APIMetaPanel /></p>

<p spaces-before="0"><APIRequest
  title="1つのオークションを読む"
  method="GET"
  isPublic
 base="https://leaf-api.pando.im/api"
  url='/flips/4ce8a961-4b90-34e8-9780-6ce46a8205a6'
/></p>

<pre><code class="json title="Response"">{
 "ts"：1633139399005、
   "データ"： {
     "id"： "4ce8a961-4b90-34e8-9780-6ce46a8205a6"、
     "created_at"： "2021-06-22T13：00：42Z"、
     "tic"： "2021-06-22T14：01：13Z"、
     "終了"： "2021-06-23T01：00：42Z"、
     "入札"： "1859.30248633"、
     「ロット」：「1.07」、
     "タブ"： "1859.30248633"、
     「アート」：「1631.9052992207771378」、
     "collateral_id"： "686cb137-b5e6-586c-bece-926736ffc583"、
     "vault_id"： "754a82aa-6f9a-3ddc-aa4e-985f6e1b7687"、
     「男」：「」、
     「アクション」：「FlipDeal」
  }
}
`</pre>

## オークションイベントを読む

### GET /flips/:id/events

このAPIは、1つのオークションのすべてのイベントに`：id </ code>で応答します。</p>

<p spaces-before="0">

<APIEndpoint base="https://leaf-api.pando.im/api" url="/flips/:id/events" /></p>

<p spaces-before="0">

<APIMetaPanel /></p>

<p spaces-before="0"><APIRequest
  title="1つのオークションのすべてのイベントを読む"
  method="GET"
  isPublic
 base="https://leaf-api.pando.im/api"
  url='/flips/4ce8a961-4b90-34e8-9780-6ce46a8205a6/events'
/></p>

<pre><code class="json title="Response"">{
 "ts"：1633139503820、
   "データ"： {
     「イベント」：[
       {{
         "flip_id"： "4ce8a961-4b90-34e8-9780-6ce46a8205a6"、
         "created_at"： "2021-06-22T13：00：42Z"、
         「アクション」：「FlipKick」、
         「入札」：「0」、
         「ロット」：「1.358」
       }、
       {{
         "flip_id"： "4ce8a961-4b90-34e8-9780-6ce46a8205a6"、
         "created_at"： "2021-06-22T13：01：55Z"、
         "アクション"： "FlipBid"、
         「入札」：「5」、
         「ロット」：「1.358」
       }、
       {{
         "flip_id"： "4ce8a961-4b90-34e8-9780-6ce46a8205a6"、
         "created_at"： "2021-06-22T13：02：49Z"、
         "アクション"： "FlipBid"、
         "入札"： "1859.30248633"、
         「ロット」：「1.358」
      },
      // ...
    ]
  }
}
`</pre>
