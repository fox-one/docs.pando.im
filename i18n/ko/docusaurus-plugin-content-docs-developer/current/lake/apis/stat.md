---
title: Read Market
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## 글로벌 통계 읽기

### GET /states/markets

이 API는 과거 시장 통계에 응답합니다.

<APIEndpoint base="https://api.4swap.org/api" url="/stats/markets/?dur=:dur" />

<APIMetaPanel />

<APIParams p-dur="The duration. for example, 4320h means latest 180 days"/>

<APIRequest title="시장 통계 읽기" method="GET" isPublic base="https://api.4swap.org/api" url='/stats/markets/?dur=4320h' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": [
    {
      "ts": 1617408000,
      "date": "2021-04-03T00:00:00Z",
      // 미국 달러의 유동성
      "value": "88919122.02992768",
      // 미국 달러의 유동성
      "volume": "10727320.64681277"
    },
    ...
  ]
}
```

## 페어 통계 읽기

### GET /states/markets/:base/:quote

이 API는 기준 및 견적 자산별로 지정된 과거 시장 통계에 응답합니다.

<APIEndpoint base="https://api.4swap.org/api" url="/stats/markets/:base/:quote/?dur=:dur" />

<APIMetaPanel />

<APIParams p-base="The base asset id" p-base-required="{true}" p-quote="The quote asset id" p-quote-required="{true}" p-dur="The duration. for example, 4320h means latest 180 days" />

<APIRequest title="ETH-BTC의 시장 통계 읽기" method="GET" isPublic base="https://api.4swap.org/api" url='/stats/markets/43d61dcd-e413-450d-80b8-101d5e903357/c6d0c728-2624-429b-8e0d-d9d19b6592fa?dur=4320h' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": [
    {
      "ts": 1617408000,
      "date": "2021-04-03T00:00:00Z",
      // 미국 달러의 유동성
      "value": "88919122.02992768",
      // 미국 달러의 유동성
      "volume": "10727320.64681277"
    },
    ...
  ]
}
```

## 차트 데이터 읽기

### GET /states/markets/:base/:quote/kline/v2?dur=:dur

이 API는 기준 및 견적 자산별로 지정된 차트 데이터에 응답합니다.

<APIEndpoint base="https://api.4swap.org/api" url="/stats/markets/:base/:quote/kline/v2?dur=:dur" />

<APIMetaPanel />

<APIParams p-base="The base asset id" p-base-required="{true}" p-quote="The quote asset id" p-quote-required="{true}" p-dur="The duration. for example, 4320h means latest 180 days" />

<APIRequest title="ETH-BTC의 시장 통계 읽기" method="GET" isPublic base="https://api.4swap.org/api" url='/stats/markets/43d61dcd-e413-450d-80b8-101d5e903357/c6d0c728-2624-429b-8e0d-d9d19b6592fa/kline/v2?dur=4320h' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": [
    [
      // 타임스탬프
      1612148400,
      // 기준 가격/견적 가격
      "0.039304863681",
      // 기준 가격/견적 가격
      "25.442131511901"
    ]
    ...
  ]
}
```
