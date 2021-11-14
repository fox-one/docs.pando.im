---
title: Create Actions
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## POST /actions

제공된 [작업 프로토콜](../action-protocol) 데이터에 의해 암호화된 전송을 생성하기 위한 API입니다. 전송에 직접 서명하고 암호화하지 않으려는 경우에 유용합니다.

<APIEndpoint base="https://api.4swap.org/api" url="/actions" />

<APIMetaPanel scope="Authorized" /><APIPayload>{`{ // 액션 프로토콜 데이터 "action":     "3,dfa655ef-55db-4e18-bdd7-29a7c576a223,92779607-e478-4f66-95a6-b2ae47f69d55,c6d0c728-2624-429b-8e0d-d9d19b6592fa,e2nUv,0.0000042669", // 암호 수량 "amount":     "123", // 암호화 자산 ID "asset_id":   "2566bf58-c4de-3479-8c55-c137bb7fe2ae", // 선택 사항, 브로커 ID, 4swap의 기본 브로커를 사용하려면 비워 둡니다. "broker_id":  "", // 선택 사항, 전송을 추적하기 위한 UUID "trace_id":   "" } `}</APIPayload>

<APIRequest title="Create an action" method="POST" base="https://api.4swap.org/api" url='/actions --data PAYLOAD' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": {
    // 암호화된 작업 데이터
    "action": "...",
    // 코드 및 코드 url.
    // Messenger 및 Fennec과 같은 Mixin Network 호환 지갑을 호출하는 데 사용할 수 있습니다.
    "code": "d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "code_url": "mixin://codes/d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    // 전송을 추적하기 위한 UUID
    "follow_id": "yyyyyyyy-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  }
}
```

[mixin-sdk-go](https://github.com/fox-one/mixin-sdk-go) 클라이언트를 사용하는 경우 `action`을 `client.Transaction`의 매개변수로 사용하고 생성된 트랜잭션을 메인넷 주소로 보내주세요.

```go
// 'OpponentMultisig'로 지정된 다중 서명 주소로 트랜잭션을 보냅니다.
// OpponentMultisig.Receivers는 MTG 그룹 구성원입니다.
tx, err := client.Transaction(ctx, &mixin.TransferInput{
    AssetID: assetID,
    Amount:  decimal.RequireFromString(amount),
    TraceID: mixin.RandomTraceID(),
  // 응답의 'action' 필드
    Memo:    resp.Action,
  //`/api/information`의 MTG 구성원들
    OpponentMultisig: struct {
        Receivers []string `json:"receivers,omitempty"`
        Threshold uint8    `json:"threshold,omitempty"`
    }{
        Receivers: group.Members,
        Threshold: uint8(group.Threshold),
    },
}, *pin)
```

웹 앱을 Mixin 네트워크 호환 지갑(예: Mixin Messenger 및 Fennec) 과 통합하려면 가이드 / 지갑 호출을 읽어보세요.
