---
title: 市場を読む
date: 2021年9月30日23時18分01秒
---

輸入 { APIMetaPanel、 APIRequest、 APIEndpoint、 APIParams、 APIPayload、 } from "@ site / src / components / api";

## グローバル統計を読む

### 取得 /states/市場

このAPIは過去の市場統計に対応します

<APIEndpoint base="https://api.4swap.org/api" url="/stats/markets/?dur=:dur" />

<APIMetaPanel />

<APIParams p-dur="The duration. for example, 4320h means latest 180 days"/>

<APIRequest title="市場統計を読む " method="GET" isPublic base="https://api.4swap.org/api" url='/stats/markets/?dur=4320h' />

```json title="Response"
{{
   "ts"：1627697766503、
   "データ"： [
     {{
       "ts"：1617408000、
       "日付"： "2021-04-03T00：00：00Z"、
       //米ドルでの流動性
       "値"： "88919122.02992768"、
       //米ドルでの流動性
       「ボリューム」：「10727320.64681277」
     }、
    ...
  ]
}
```

## ペア統計を読む

### 取得 /states/市場/:基/:見積もり

このAPIは、ベースおよび見積もり資産によって指定された過去の市場統計に応答します。

<APIEndpoint base="https://api.4swap.org/api" url="/stats/markets/:base/:quote/?dur=:dur" />

<APIMetaPanel />

<APIParams p-base="The base asset id" p-base-required="{true}" p-quote="The quote asset id" p-quote-required="{true}" p-dur="The duration. for example, 4320h means latest 180 days" />

<APIRequest title=" ETH-BTCの市場統計を読む " method="GET" isPublic base="https://api.4swap.org/api" url='/stats/markets/43d61dcd-e413-450d-80b8-101d5e903357/c6d0c728-2624-429b-8e0d-d9d19b6592fa?dur=4320h' />

```json title="Response"
{{
   "ts"：1627697766503、
   "データ"： [
     {{
       "ts"：1617408000、
       "日付"： "2021-04-03T00：00：00Z"、
       //米ドルでの流動性
       "値"： "88919122.02992768"、
       //米ドルでの流動性
       「ボリューム」：「10727320.64681277」
     }、
    ...
  ]
}
```

## ローソク足データを読む

### 取得 /states/市場/:基/:見積もり/クライン/v2?dur=:dur

このAPIは、ベースアセットとクォートアセットで指定されたローソク足データに応答します。

<APIEndpoint base="https://api.4swap.org/api" url="/stats/markets/:base/:quote/kline/v2?dur=:dur" />

<APIMetaPanel />

<APIParams p-base="The base asset id" p-base-required="{true}" p-quote="The quote asset id" p-quote-required="{true}" p-dur="The duration. for example, 4320h means latest 180 days" />

<APIRequest title="ETH-BTCの市場統計を読む " method="GET" isPublic base="https://api.4swap.org/api" url='/stats/markets/43d61dcd-e413-450d-80b8-101d5e903357/c6d0c728-2624-429b-8e0d-d9d19b6592fa/kline/v2?dur=4320h' />

```json title="Response"
"ts"：1627697766503、
   "データ"： [
     [
       //タイムスタンプ
       1612148400、
       //ベースの価格/見積もり
       「0.039304863681」、
       //見積もり/ベースの価格
       「25.442131511901」
     ]
    ...
  ]
}
```
