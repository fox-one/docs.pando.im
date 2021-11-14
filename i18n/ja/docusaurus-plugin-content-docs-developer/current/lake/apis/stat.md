---
title: Read Market
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## Read Global Statistics

### GET /states/markets

このAPIは過去の市場統計を返します。

<APIEndpoint base="https://api.4swap.org/api" url="/stats/markets/?dur=:dur" />

<APIMetaPanel />

<APIParams p-dur="The duration. for example, 4320h means latest 180 days"/>

<APIRequest title="Read market statistics" method="GET" isPublic base="https://api.4swap.org/api" url='/stats/markets/?dur=4320h' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": [
    {
      "ts": 1617408000,
      "date": "2021-04-03T00:00:00Z",
      // 米ドルでの流動性
      "value": "88919122.02992768",
      // 米ドルでの流動性
      "volume": "10727320.64681277"
    },
    ...
  ]
}
```

## Read Pair Statistics

### GET /states/markets/:base/:quote

このAPIは、指定したベースの資産と引用する資産の過去の市場統計を返します。

<APIEndpoint base="https://api.4swap.org/api" url="/stats/markets/:base/:quote/?dur=:dur" />

<APIMetaPanel />

<APIParams p-base="The base asset id" p-base-required="{true}" p-quote="The quote asset id" p-quote-required="{true}" p-dur="The duration. for example, 4320h means latest 180 days" />

<APIRequest title="Read market statistics of ETH-BTC" method="GET" isPublic base="https://api.4swap.org/api" url='/stats/markets/43d61dcd-e413-450d-80b8-101d5e903357/c6d0c728-2624-429b-8e0d-d9d19b6592fa?dur=4320h' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": [
    {
      "ts": 1617408000,
      "date": "2021-04-03T00:00:00Z",
      // 米ドルでの流動性
      "value": "88919122.02992768",
      // 米ドルでの流動性
      "volume": "10727320.64681277"
    },
    ...
  ]
}
```

## Read Candlestick Data

### GET /states/markets/:base/:quote/kline/v2?dur=:dur

このAPIは、指定したベースの資産と引用する資産のローソク足のデータを返します。

<APIEndpoint base="https://api.4swap.org/api" url="/stats/markets/:base/:quote/kline/v2?dur=:dur" />

<APIMetaPanel />

<APIParams p-base="The base asset id" p-base-required="{true}" p-quote="The quote asset id" p-quote-required="{true}" p-dur="The duration. for example, 4320h means latest 180 days" />

<APIRequest title="Read market statistics of ETH-BTC" method="GET" isPublic base="https://api.4swap.org/api" url='/stats/markets/43d61dcd-e413-450d-80b8-101d5e903357/c6d0c728-2624-429b-8e0d-d9d19b6592fa/kline/v2?dur=4320h' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": [
    [
      // タイムスタンプ
      1612148400,
      // price of base / quote
      "0.039304863681",
      // price of quote / base
      "25.442131511901"
    ]
    ...
  ]
}
```
