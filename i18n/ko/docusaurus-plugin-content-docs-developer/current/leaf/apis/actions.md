---
title: 액션 생성
date: 2021-10-01 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## 액션 생성

### POST /actions

매개 변수를 사용하여 액션을 생성합니다.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/actions" />

<APIMetaPanel scope="Authorized"/><APIPayload>{`
{ // 지불 금액, 선택 사항 "amount": "1.014", // 결제 자산 Id, 선택 사항 "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa", // 거래를 추적하기 위한 Uuid "follow_id": "17d836d0-8b15-4cba-91d4-d343ed0ad737", // 액션 매개 변수(문자열 배열) // 새 볼트 열기: // [ //    "31", //    "d0ec4cc7-edf6-5359-bf23-41fc9d26444e", // 담보 id //    "100" // 생성된 pUSD의 수량 // ] // 볼트에 담보물 예치: // [ //    "32", //    "b829e5f4-b452-4521-a0eb-ad65588ae91a" // 볼트 id // ] // 볼트에서 담보물 인출: // [ //    "33", //    "b829e5f4-b452-4521-a0eb-ad65588ae91a", // 볼트 id //    "0.23" // 인출할 담보물 수량 // ] // 투자회수 pUSD: // [ //    "34", //    "b829e5f4-b452-4521-a0eb-ad65588ae91a" // 볼트 id // ] // 추가 pUSD 생성: // [ //    "35", //    "b829e5f4-b452-4521-a0eb-ad65588ae91a", // 볼트 id //    "100" // 생성된 pUSD의 수량 // ] // 경매 입찰: // [ //    "42", //    "870c9719-0677-415f-981f-685546175e14", // 경매 Id //    "0.2" // 원하는 담보물 수량 // ] "parameters": ["string"] }` }</APIPayload>

<APIRequest title="액션 생성" method="POST" base="https://leaf-api.pando.im/api" url='/actions' data="--data PAYLOAD" />

```json title="Response"
{
  // 코드 및 코드 url.
  // Messenger 및 Fennec과 같은 Mixin Network 호환 지갑을 호출하는 데 사용할 수 있습니다.  "code": "string",
  "code_url": "string",
  "memo": "string"
}
```
