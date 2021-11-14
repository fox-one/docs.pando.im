---
title: アクションの作成
date: 2021-10-01 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## アクションを作成する

### POST /actions

パラメータを使用してアクションを作成します。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/actions" />

<APIMetaPanel scope="Authorized"/><APIPayload>{`
{ // the payment amount, optional "amount": "1.014", // the payment asset id, optional "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa", // an uuid to trace the transaction "follow_id": "17d836d0-8b15-4cba-91d4-d343ed0ad737", // action parameters (string array) // Open a new vault: // [ //    "31", //    "d0ec4cc7-edf6-5359-bf23-41fc9d26444e", // collateral id //    "100" // amount of pUSD generated // ] // Deposit collateral to vault: // [ //    "32", //    "b829e5f4-b452-4521-a0eb-ad65588ae91a" // vault id // ] // Withdraw collateral from vault: // [ //    "33", //    "b829e5f4-b452-4521-a0eb-ad65588ae91a", // vault id //    "0.23" // amount of collateral to be withdrawed // ] // Payback pUSD: // [ //    "34", //    "b829e5f4-b452-4521-a0eb-ad65588ae91a" // vault id // ] // Generate more pUSD: // [ //    "35", //    "b829e5f4-b452-4521-a0eb-ad65588ae91a", // vault id //    "100" // amount of pUSD generated // ] // Bid for an auction: // [ //    "42", //    "870c9719-0677-415f-981f-685546175e14", // auction id //    "0.2" // amount of collateral wanted // ] "parameters": ["string"] }` }</APIPayload>

<APIRequest title="アクションを作成する" method="POST" base="https://leaf-api.pando.im/api" url='/actions' data="--data PAYLOAD" />

```json title="Response"
{
  // the code and the code url.
  // MessengerやFennecなどのMixinNetwork互換ウォレットを呼び出すために使用できます。  "code": "string",
  "code_url": "string",
  "memo": "string"
}
```
