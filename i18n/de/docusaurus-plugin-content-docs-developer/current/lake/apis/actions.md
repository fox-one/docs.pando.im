---
title: Create Actions
date: 30-09-2021 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## POST /actions

This is an API to generate an encrypted transfer by provided [action protocol](../action-protocol) data. It's useful if you don't want to sign and encrypt the transfer yourself.

<APIEndpoint base="https://api.4swap.org/api" url="/actions" />

<APIMetaPanel scope="Authorized" /><APIPayload>{`{ // Action protocol data "action":     "3,dfa655ef-55db-4e18-bdd7-29a7c576a223,92779607-e478-4f66-95a6-b2ae47f69d55,c6d0c728-2624-429b-8e0d-d9d19b6592fa,e2nUv,0.0000042669", // amount of crypto "amount":     "123", // asset id of crypto "asset_id":   "2566bf58-c4de-3479-8c55-c137bb7fe2ae", // optional, broker id, leave it empty to use 4swap's default broker "broker_id":  "", // optional, an UUID to trace the transfer "trace_id":   "" } `}</APIPayload>

<APIRequest title="Create an action" method="POST" base="https://api.4swap.org/api" url='/actions --data PAYLOAD' />

```json title="Response"
{
  "ts": 1627697766503,
  "data": {
    // the encrypted action data
    "action": "...",
    // the code and the code url.
    // they could be used to invoke Mixin Network compatible wallet, like Messenger and Fennec.
    "code": "d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "code_url": "mixin://codes/d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    // an UUID to trace the transfer
    "follow_id": "yyyyyyyy-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  }
}
```

If you are using [mixin-sdk-go](https://github.com/fox-one/mixin-sdk-go) client, use the `action` as the parameter for `client.Transaction` to create and send the transaction to the Mainnet address:

```go
// send a transaction to a multi-sign address which specified by `OpponentMultisig`
// the OpponentMultisig.Receivers are the MTG group members
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

If you want to integrate a web app with Mixin Network compatible wallets, for example, [Mixin Messenger](/docs/apps/wallets#mixin-messenger) and [Fennec](/docs/apps/wallets#fennec), please read [Guide / Invoking Wallets](../guide/invoke-wallets).
