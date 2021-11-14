---
title: Read Collaterals
date: 2021-10-01 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## Read All Collaterals

### GET /cats

이 API는 지원되는 모든 담보에 응답합니다.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/cats" />

<APIMetaPanel />

<APIRequest title="Read supported assets" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/cats' />

```json title="Response"
{
  "collaterals": [
    {
      // 정상화된 부채
      "art": "number",
      // 최소 입찰가 인상
      "beg": "number",
      // 청산을 위해 지출된 최대 pUSD
      "box": "number",
      // 청산 패널티
      "chop": "number",
      "created_at": "2021-10-02",
      // 부채의 자산 ID
      "dai": "string",
      // 발행된 총 pUSD
      "debt": "number",
      // 경매당 최대 청산 수량
      "dunk": "number",
      // 볼트당 부채 한도
      "dust": "number",
      // 고정 수수료
      "duty": "number",
      // 담보의 자산 ID
      "gem": "string",
      // 이 담보 유형의 ID
      "id": "string",
      // 잠긴 담보
      "ink": "number",
      // 부채 한도
      "line": "number",
      // 청산을 위해 지출된 pUSD의 잔액
      "litter": "number",
      // 이 담보 유형의 상태
      "live": true,
      // 청산 비율, 예: 150%
      "mat": "number",
      // 이 담보 유형의 이름
      "name": "string",
      // 이 담보 유형에 속하는 볼트의 수량
      "number_of_vaults": 0,
      // gem/dai의 현재 가격
      "price": "number",
      // 누적 요금
      "rate": "number",
      // '요율' 업데이트 날짜
      "rho": "2021-10-02",
      // 총 부채 공급액
      "supply": "number",
      // 총 경매 기간
      "tau": 0,
      // 단일 입찰 수명
      "ttl": 0
    }
  ]
}
```

## Read Single Collateral

### GET /cats/:id

이 API는 `:id`로 단일 담보에 응답합니다.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/cats/:id" />

<APIMetaPanel />

<APIParams p-id="the collateral id" p-id-required="{true}" />

<APIRequest title="Read one collateral by ID" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/cats/d0ec4cc7-edf6-5359-bf23-41fc9d26444e' />

```json title="Response"
{
  "ts": 1633138872979,
  "data": {
    "id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",
    "created_at": "2021-04-27T07:02:55Z",
    "name": "BTC",
    "gem": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
    "dai": "31d2ea9c-95eb-3355-b65b-ba096853bc18",
    "ink": "717.09020133",
    "art": "9463539.4478672014194987",
    "rate": "1.0192090425079456",
    "rho": "2021-10-02T01:40:26Z",
    "debt": "9530560.48933399",
    "line": "19000000",
    "dust": "100",
    "price": "47815.83",
    "mat": "1.5",
    "duty": "1.045",
    "chop": "1.13",
    "dunk": "5000",
    "beg": "1.03",
    "ttl": 1800,
    "tau": 43200,
    "live": true,
    "number_of_vaults": "407",
    "box": "500000",
    "litter": "0",
    "supply": "19000000"
  }
}
```
