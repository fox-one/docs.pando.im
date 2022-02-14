---
title: 担保を読む
date: 2021年10月01日　23時18分01秒
---

輸入 { APIMetaPanel、 APIRequest、 APIEndpoint、 APIParams、 APIPayload、 } from "@ site / src / components / api";

## すべての担保を読む

### 取得 /一対

この API は、サポートされているすべての担保に対応します。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/cats" />

<APIMetaPanel />

<APIRequest title="サポートされている資産を読み取る" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/cats' />

```json title="Response"
{{
  「担保」：[
    {{
      //正規化された債務
      「アート」：「数」、
      //最低入札単価の引き上げ
      「頼む」：「数」、
      //清算のために最大pUSD
      「ボックス」：「番号」、
      //清算ペナルティ
      "chop"： "number"、
      "created_at"： "2021-10-02"、
      //債務の資産ID
      「dai」：「string」、
      //発行された合計pUSD
      「負債」：「数」、
      //オークションあたりの最大清算数量
      「ダンク」：「番号」、
      //ボールトあたりの債務フロア
      「ほこり」：「数」、
      //安定料金
      「関税」：「番号」、
      //担保の資産ID
      "gem"： "文字列"、
      //この担保タイプのID
      "id"： "文字列"、
      //ロックされた担保
      「インク」：「番号」、
      //債務上限
      "行"： "番号"、
      //清算のためのpUSDの残高
      「ごみ」：「数」、
      //この担保タイプのステータス
      「ライブ」：本当、
      //清算比率、例：150％
      「マット」：「番号」、
      //この担保タイプの名前
      "名前"： "文字列"、
      //ボールトの数はこの担保タイプに属します
      "number_of_vaults"：0、
      // gem / daiの現在の価格
      「価格」：「数」、
      //累積レート
      「レート」：「数値」、
      // `rate`の更新日
      "rho"： "2021-10-02"、
      //供給された負債の合計
      「供給」：「数」、
      //オークションの合計の長さ
      「タウ」：0、
      //単一入札の有効期間
      "ttl"：0
    }
  ]
}
```

## 単一の担保を読む

### GET /cats/:id

このAPIは、1つの担保に`：id </ code>で応答します</p>

<p spaces-before="0">

<APIEndpoint base="https://leaf-api.pando.im/api" url="/cats/:id" /></p>

<p spaces-before="0">

<APIMetaPanel /></p>

<p spaces-before="0"><APIParams
  p-id="the collateral id"
  p-id-required="{true}"
/></p>

<p spaces-before="0"><APIRequest
  title="IDで1つの担保を読む"
  method="GET"
  isPublic
 base="https://leaf-api.pando.im/api"
  url='/cats/d0ec4cc7-edf6-5359-bf23-41fc9d26444e'
/></p>

<pre><code class="json title="Response"">  {
   "ts"：1633138872979、
   "データ"： {
     "id"： "d0ec4cc7-edf6-5359-bf23-41fc9d26444e"、
     "created_at"： "2021-04-27T07：02：55Z"、
     「名前」：「BTC」、
     "gem"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
     "dai"： "31d2ea9c-95eb-3355-b65b-ba096853bc18"、
     「インク」：「717.09020133」、
     「アート」：「9463539.4478672014194987」、
     "レート"： "1.0192090425079456"、
     "rho"： "2021-10-02T01：40：26Z"、
     「負債」：「9530560.48933399」、
     "行"： "19000000"、
     「ほこり」：「100」、
     「価格」：「47815.83」、
     「マット」：「1.5」、
     「義務」：「1.045」、
     「チョップ」：「1.13」、
     「ダンク」：「5000」、
     "beg"： "1.03"、
     "ttl"：1800、
     「タウ」：43200、
     「ライブ」：本当、
     "number_of_vaults"： "407"、
     「ボックス」：「500000」、
     「ごみ」：「0」、
     「供給」：「19000000」
   }
}
`</pre>
