---
title: Read Market
date: 30-09-2021 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## Read Global Statistics

### GET /states/markets

This API will respond historical market statistics

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
      // liquidity in US dollar
      "value": "88919122.02992768",
      // liquidity in US dollar
      "volume": "10727320.64681277"
    },
    ...
  ]
}
```

## Read Pair Statistics

### GET /states/markets/:base/:quote

This API will respond historical market statistics specified by base and quote asset.

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
      // liquidity in US dollar
      "value": "88919122.02992768",
      // liquidity in US dollar
      "volume": "10727320.64681277"
    },
    ...
  ]
}
```

## Read Candlestick Data

### GET /states/markets/:base/:quote/kline/v2?dur=:dur

This API will respond the candlestick data specified by base and quote asset.

<APIEndpoint base="https://api.4swap.org/api" url="/stats/markets/:base/:quote/kline/v2?dur=:dur" />

<APIMetaPanel />

<APIParams p-base="The base asset id" p-base-required="{true}" p-quote="The quote asset id" p-quote-required="{true}" p-dur="The duration. for example, 4320h means latest 180 days" />

<APIRequest title="Read market statistics of ETH-BTC" method="GET" isPublic base="https://api.4swap.org/api" url='/stats/markets/43d61dcd-e413-450d-80b8-101d5e903357/c6d0c728-2624-429b-8e0d-d9d19b6592fa/kline/v2?dur=4320h' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": [
    [
      // timestamp
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
