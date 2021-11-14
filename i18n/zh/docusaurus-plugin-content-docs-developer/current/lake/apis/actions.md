---
title: 创建操作
date: 2021-09-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## POST /actions

这个 API 用于生成加密转账，它需要 [action protocol](../action-protocol) 的数据作为参数。 它在您不想自己签名和加密转账时是有用的。

<APIEndpoint base="https://api.4swap.org/api" url="/actions" />

<APIMetaPanel scope="Authorized" /><APIPayload>{`{ // Action protocol data "action":     "3,dfa655ef-55db-4e18-bdd7-29a7c576a223,92779607-e478-4f66-95a6-b2ae47f69d55,c6d0c728-2624-429b-8e0d-d9d19b6592fa,e2nUv,0.0000042669", // amount of crypto "amount":     "123", // asset id of crypto "asset_id":   "2566bf58-c4de-3479-8c55-c137bb7fe2ae", // optional, broker id, leave it empty to use 4swap's default broker "broker_id":  "", // optional, an UUID to trace the transfer "trace_id":   "" } `}</APIPayload>

<APIRequest title="创建一个 Action" method="POST" base="https://api.4swap.org/api" url='/actions --data PAYLOAD' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": {
    // 加密过的 action 数据
    "action": "...",
    // code 和 code url.
    // 它们可以被用来调用Mixin 网络兼容的钱包，如Messenger 和 Fennec。
    "code": "d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "code_url": "mixin://codes/d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    // 用来追踪转账的 UUID 
    "follow_id": "yyyyyyyy-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  }
}
```

如果你在使用 fox-one的 [mixin-sdk-go](https://github.com/fox-one/mixin-sdk-go), 请将 `action` 作为 `client.Transaction` 的参数，创建交易并将交易发送到主网地址:

```go
// 将交易发送到由 `OpponentMultisig` 指定的多签地址 
// OpponentMultisig.Receivers 都是 MTG Group 的成员
tx, err := client.Transaction(ctx, &mixin.TransferInput{
    AssetID: assetID,
    Amount:  decimal.RequireFromString(amount),
    TraceID: mixin.RandomTraceID(),
  // the `action` field in the response
    Memo:    resp.Action,
  // the MTG members from `/api/information`
    OpponentMultisig: struct {
        Receivers []string `json:"receivers,omitempty"`
        Threshold uint8    `json:"threshold,omitempty"`
    }{
        Receivers: group.Members,
        Threshold: uint8(group.Threshold),
    },
}, *pin)
```

如果您想要整合一个 web 应用程序并与 Mixin 网络兼容，例如： [Mixin Messenger](/docs/apps/wallets#mixin-messenger) and [Fennec](/docs/apps/wallets#fennec), 请阅读 [Guide / Invoking Wallet](../guide/invoke-wallets)。
