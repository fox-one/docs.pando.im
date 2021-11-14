---
title: 读取市场
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## 读取全局统计数据

### GET /states/markets

此 API 将返回市场的历史数据。

<APIEndpoint base="https://api.4swap.org/api" url="/stats/markets/?dur=:dur" />

<APIMetaPanel />

<APIParams p-dur="The duration. for example, 4320h means latest 180 days"/>

<APIRequest title="读取市场统计数据" method="GET" isPublic base="https://api.4swap.org/api" url='/stats/markets/?dur=4320h' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": [
    {
      "ts": 1617408000,
      "date": "2021-04-03T00:00:00Z",
      //以美元计算的流动性
      "value": "88919122.02992768",
      //以美元计算的流动性
      "volume": "10727320.64681277"
    },
    ...
  ]
}
```

## 读取交易对数据

### GET /states/markets/:base/:quote

此 API 将返回由base和quote asset指定的历史市场统计数据。

<APIEndpoint base="https://api.4swap.org/api" url="/stats/markets/:base/:quote/?dur=:dur" />

<APIMetaPanel />

<APIParams p-base="The base asset id" p-base-required="{true}" p-quote="The quote asset id" p-quote-required="{true}" p-dur="The duration. for example, 4320h means latest 180 days" />

<APIRequest title="读取ETH-BTC的市场统计" method="GET" isPublic base="https://api.4swap.org/api" url='/stats/markets/43d61dcd-e413-450d-80b8-101d5e903357/c6d0c728-2624-429b-8e0d-d9d19b6592fa?dur=4320h' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": [
    {
      "ts": 1617408000,
      "date": "2021-04-03T00:00:00Z",
      //以美元计算的流动性
      "value": "88919122.02992768",
      //以美元计算的流动性
      "volume": "10727320.64681277"
    },
    ...
  ]
}
```

## 读取蜡烛图数据

### GET /states/markets/:base/:quote/kline/v2?dur=:dur

此 API 将返回由base和quote asset指定的蜡烛图数据。

<APIEndpoint base="https://api.4swap.org/api" url="/stats/markets/:base/:quote/kline/v2?dur=:dur" />

<APIMetaPanel />

<APIParams p-base="The base asset id" p-base-required="{true}" p-quote="The quote asset id" p-quote-required="{true}" p-dur="The duration. for example, 4320h means latest 180 days" />

<APIRequest title="读取ETH-BTC的市场统计" method="GET" isPublic base="https://api.4swap.org/api" url='/stats/markets/43d61dcd-e413-450d-80b8-101d5e903357/c6d0c728-2624-429b-8e0d-d9d19b6592fa/kline/v2?dur=4320h' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": [
    [
      // 时间戳
      1612148400,
      // base / quote 的价格
      "0.039304863681",
      // base / quote 的价格
      "25.442131511901"
    ]
    ...
  ]
}
```
