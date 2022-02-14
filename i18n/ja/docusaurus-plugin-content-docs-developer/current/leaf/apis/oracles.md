---
title: オラクルを読む
date: 2021年10月01日　23時18分01秒
---

輸入 { APIMetaPanel、 APIRequest、 APIEndpoint、 APIParams、 APIPayload、 } from "@ site / src / components / api";

## 全てのOraclesを読み込む

### GET /oracles

この API はすべてのオラクルに対応します。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/oracles" />

<APIMetaPanel />

<APIRequest title="すべてのオラクルを読む" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/oracles' />

```json title="Response"
{
   "ts"：1633140945596、
   "データ"： {
     「オラクル」：[
       {{
         "asset_id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
         「ホップ」：1800、
         //現在の価格
         「現在」：「47817.13」、
         //次のpirce
         「次へ」：「47759.41」、
         //最新の価格の時間
         "peek_at"： "2021-04-27T06：00：00Z"、
         //コンセンサスのしきい値
         「しきい値」：4、
         //価格に同意したメンバー
         「知事」：[
           "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826"、
           "d2d4399d-669d-4448-89f6-d65805e62fb7"、
           "1265e53d-3642-484c-9f3d-b8616606fd6d"、
           「75f18fe8-b056-46d6-9c48-0214425e58ce」
         ]
       }、
      // ...
    ]
  }
}
```

## 単一のオラクルを読む

### GET /oracles/:id

このAPIは、1つのOracleにasset_id `：id </ code>で応答します。</p>

<p spaces-before="0">

<APIEndpoint base="https://leaf-api.pando.im/api" url="/oracles/:id" /></p>

<p spaces-before="0">

<APIMetaPanel /></p>

<p spaces-before="0"><APIParams
  p-id="the asset id"
  p-id-required="{true}"
/></p>

<p spaces-before="0"><APIRequest
  title="1つのオラクルを読む"
  method="GET"
  isPublic
 base="https://leaf-api.pando.im/api"
  url='/oracles/c6d0c728-2624-429b-8e0d-d9d19b6592fa'
/></p>

<pre><code class="json title="Response"">{
   "ts"：1633140945596、
   "データ"： {
     「オラクル」：[
       {{
         "asset_id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
         「ホップ」：1800、
         //現在の価格
         「現在」：「47817.13」、
         //次のpirce
         「次へ」：「47759.41」、
         //最新の価格の時間
         "peek_at"： "2021-04-27T06：00：00Z"、
         //コンセンサスのしきい値
         「しきい値」：4、
         //価格に同意したメンバー
         「知事」：[
           "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826"、
           "d2d4399d-669d-4448-89f6-d65805e62fb7"、
           "1265e53d-3642-484c-9f3d-b8616606fd6d"、
           「75f18fe8-b056-46d6-9c48-0214425e58ce」
         ]
       }、
      // ...
`</pre>
