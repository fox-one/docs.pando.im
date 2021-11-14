---
title: API-Referenz
sidebar_position: vier
date: 16-08-2021 17:40:00
---

Dieses Dokument beschreibt die Definition und Verwendung der ruhelosen Api und RPC Schnittstelle des Pando Rings Motors.

## Ausgeruhte API

### •Alle Märkte

Liefert alle Märkte, die geliefert und ausgeliehen werden können.

**Fehlermeldungen**
```
GET /api/v1/markets/all
```

**Reaktion**
```json
{
  "data": [
    {
      "id": 1,
      "asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
      "Symbol": "USDT",
      "ctoken_asset_id": "f8abf8be-2ead-3638-afa4-8a0b08872998",
      "total_cash": "334. 108376354365625",
      "total_borrows": "8.7389310703276705",
      "reserves": "0. 136021855620769",
      "ctokens": "339. 6830046",
      "init_exchange_rate": "1",
      "reserve_factor": "0. ",
      "liquidation_incentive": "0. 5",
      "borrow_cap": "0",
      "collateral_factor": "0. 5",
      "close_factor": "0.5",
      "base_rate": "0. 25",
      "Multiplikator": "0. ",
      "jump_multiplier": "0",
      "kink": "0",
      "block_number": 1719179,
      "utilization_rate": "0. 254752469950221",
      "exchange_rate": "1.0096179250853535",
      "supply_rate_per_block": "0. 000000003559835",
      "borrow_rate_per_block": "0.0000000155263385",
      "Preis": "1. 002",
      "price_updated_at": "2021-08-17T11:14:49+08:00",
      "borrow_index": "0. 000000123582381",
      "Version": 2230721,
      "status": 1,
      "created_at": "2020-12-18T17:37:07+08:00",
      "updated_at": "2021-08-17T11:14:50+08:00",
      "supply_apy": "0. 007484197104",
      "borrow_apy": "0. 326425740624",
      "Lieferanten": 36,
      "Kreditnehmer": 15
    }
  ]
}
```

### Transaktionen

Gibt alle Benutzertransaktionen nach Zeit zurück.

**Fehlermeldungen**
```
GET /api/v1/transactions?limit=10&offset=
```

**Abfrageparameter**
| schlüssel | type   | des                                                              |
| --------- | ------ | ---------------------------------------------------------------- |
| limit     | string | standardmäßig 500 Seiten Datenlimit                              |
| versatz   | string | Startzeit, RFC3339Nano Format, z.B. 2020-12-12T12:12:12.9999999Z |

**Reaktion**
```json
[
  {
    "id": 28022,
    "action": 1,
    "trace_id": "f88257ab-1eaa-3941-a1c7-3de547c301dc",
    "user_id": "3deb7492-fabd-4792-875e-a08a64391db4",
    "follow_id": "41dcd9d6-6653-4c2f-ba77-c241654c3abe",
    "asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
    "amount": "0.4",
    "data": {
      "amount": "0.39619513",
      "ctoken_asset_id": "f8abf8be-2ead-3638-afa4-8a0b08872998"
    },
    "created_at": "2021-08-10T12:01:27+08:00",
    "updated_at": "2021-08-10T12:01:27+08:00"
  },
  {
    "id": 28023,
    "action": 5,
    "trace_id": "16bd7cb6-2db3-51d1-b9a2-82d77e598423",
    "user_id": "3deb7492-fabd-4792-875e-a08a64391db4",
    "follow_id": "41dcd9d6-6653-4c2f-ba77-c241654c3abe",
    "snapshot_trace_id": "ee4c355a-8fb2-3f39-9e16-b151bef4372a",
    "asset_id": "f8abf8be-2ead-3638-afa4-8a0b08872998",
    "amount": "0.39619513",
    "data": {
      "origin": 0
    },
    "created_at": "2021-08-10T12:01:34+08:00",
    "updated_at": "2021-08-10T12:01:34+08:00"
  }
]
```

### • Zahlungsanfrage

Gibt die Lohn-Url entsprechend der angegebenen Aktion und den Parameterdaten zurück.

**Fehlermeldungen**
```url
POST /api/v1/pay-requests
```

**Payload**
```json
{
  "memo_base64": "AQIQU1BMqZkaQmWmkOzm4LfkFA==",
  "asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
  "amount": "0.01",
  "trace_id": "2996c597-db43-4294-982e-6791909c0271",
  "follow_id": "53504ca9-991a-4265-a690-ece0b7e414"
}
```

**Reaktion**
```json
{
  "url":"mixin://codes/6df372af-5557-4064-a074-698c4677661e"
}
```

## RPC

Basierend auf [Twirp](https://github.com/twitchtv/twirp) Implementierungs-RPC-Schnittstellen. [Proto-Datei](https://github.com/fox-one/pando-rings-sdk-go/blob/main/rpc/service.proto)
```proto
syntax = "proto3";

option go_package = "../rpc";

import "google/protobuf/timestamp.proto";

message MarketReq {

}

message Market {
    int64 id = 1;
    string asset_id = 2;
    string symbol = 3;
    string ctoken_asset_id = 4;
    string total_cash = 5;
    string total_borrows = 6;
    string reserves = 7;
    string ctokens = 8;
    string init_exchange_rate = 9;
    string reserve_factor = 10;
    string liquidation_incentive = 11;
    string borrow_cap = 12;
    string collateral_factor = 13;
    string close_factor = 14;
    string base_rate = 15;
    string multiplier = 16;
    string jump_multiplier = 17;
    string kink = 18;
    int64 block_number = 19;
    string utilization_rate = 20;
    string exchange_rate = 21;
    string supply_rate_per_block = 22;
    string borrow_rate_per_block = 23;
    string price = 24;
    google.protobuf.Timestamp price_update_at = 25;
    string borrow_index = 26;
    int32 status = 27;
    google.protobuf.Timestamp created_at = 28;
    google.protobuf.Timestamp updated_at = 29;
    int64 suppliers = 30;
    int64 borrowers = 31;
    string supply_apy = 32;
    string borrow_apy = 33;
}

message MarketListResp {
    repeated Market data = 1;
}

message PriceReq {

}

message PriceReceiver {
    repeated string members = 1;
    int32 threshold = 2;
}

message PriceSigner {
    int32 index = 1;
    string verify_key = 2;
}

message Price {
    string asset_id = 1;
    string symbol = 2;
    string trace_id = 3;
    PriceReceiver receiver = 4;
    repeated PriceSigner signers = 5;
    int32 threshold = 6;
}
message PriceRequestResp {
    repeated Price data = 1;
}

message TransactionReq {
    google.protobuf.Timestamp offset = 1;
    int32 limit = 2;
}

message Transaction {
    int64 id = 1;
    int32 action = 2;
    string trace_id = 3;
    string user_id = 4;
    string follow_id = 5;
    string snapshot_trace_id = 6;
    string asset_id = 7;
    string amount = 8;
    bytes data = 9;
    google.protobuf.Timestamp created_at = 10;
}

message TransactionListResp {
    repeated Transaction data = 1;
}

message PayReq {
    string asset_id = 1;
    string amount = 2;
    string trace_id = 3;
    string follow_id = 4;
    string memo_base64 = 5;
    bool with_gas = 6;
}

message PayResp {
    string url = 1;
}

service Compound {
    rpc AllMarkets(MarketReq) returns (MarketListResp);
    rpc PriceRequest(PriceReq) returns (PriceRequestResp);
    rpc Transactions(TransactionReq) returns (TransactionListResp);
    rpc PayRequest (PayReq) returns (PayResp);
}
```

### • Nutzung

```go
rpcClient := rpc.NewCompoundProtobufClient("https://compound-test-api.fox.one", &http.Client{})

//request all markets
markets, err := rpcClient.AllMarkets(ctx, &rpc. arketReq{})
if err != nil {
    return nil, err
}
return markets, nil

//request transactions
t := timestamppb.New(time.Now(). ddDate(0, -400))
req := rpc. ransactionReq{
    Offset: t,
    Limit: 50,
}

Transaktionen, err := rpcClient.Transactions(cmd. ontext(), &req)
if err != nil {
    return nil, err
}

return transactions, nil

// request pay
req := rpc. ayReq{
    AssetId: "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
    Amount: "0. 1",
    TraceId: uuid. ew(),
    FollowId: uuid.New(),
    MemoBase64: "AQIQONJAADfaSXCp+PK9A5Erkg==",
}
resp, err := rpcClient. ayRequest(cmd.Context(), &req)
if err != nil {
    return nil, err
}

return resp, nil
```

## [Aktionen](https://github.com/fox-one/compound/blob/master/core/action.go)

```go
const (
    // AktionTypeDefault default
    AktionTypeDefault ActionType = iota
    // AktionTypeSupply supply action
    AktionTypeSupply
    // AktionTypeBorrow borrow action
    AktionTypeBorrow
    // AktionTypeRedeem redeem action
    AktionTypeRedeem
    // AktionTypeRepay repay action
    AktionTypeRepay
    // AktionTypeMint mint ctoken action
    AktionTypeMint
    // AktionTypePledge pledge action
    AktionTypePledge
    // AktionTypeUnpledge unpledge action
    AktionTypeUnpledge
    // AktionTypeLiquidate liquidation action
    AktionTypeLiquidate
    // AktionTypeRedeemTransfer redeem transfer action
    AktionTypeRedeemTransfer
    // AktionTypeUnpledgeTransfer unpledge transfer action
    AktionTypeUnpledgeTransfer
    // AktionTypeBorrowTransfer borrow transfer action
    AktionTypeBorrowTransfer
    // AktionTypeLiquidateTransfer liquidation transfer action
    AktionTypeLiquidateTransfer
    // AktionTypeRefundTransfer refund action
    AktionTypeRefundTransfer
    // AktionTypeRepayRefundTransfer repay refund action
    AktionTypeRepayRefundTransfer
    // AktionTypeLiquidateRefundTransfer seize refund action
    AktionTypeLiquidateRefundTransfer
    // AktionTypeProposalAddMarket add market proposal action
    AktionTypeProposalAddMarket
    // AktionTypeProposalUpdateMarket update market proposal action
    AktionTypeProposalUpdateMarket
    // AktionTypeProposalWithdrawReserves withdraw reserves proposal action
    AktionTypeProposalWithdrawReserves
    // AktionTypeProposalProvidePrice provide price action
    AktionTypeProposalProvidePrice
    // AktionTypeProposalVote vote action
    AktionTypeProposalVote
    // AktionTypeProposalInjectCTokenForMint inject token action
    AktionTypeProposalInjectCTokenForMint
    // AktionTypeProposalUpdateMarketAdvance update market advance parameters action
    AktionTypeProposalUpdateMarketAdvance
    // AktionTypeProposalTransfer proposal transfer action
    AktionTypeProposalTransfer
    // AktionTypeProposalCloseMarket proposal close market action
    AktionTypeProposalCloseMarket
    // AktionTypeProposalOpenMarket proposal open market action
    AktionTypeProposalOpenMarket
    // AktionTypeProposalAddScope proposal add allowlist scope action
    AktionTypeProposalAddScope
    // AktionTypeProposalRemoveScope proposal remove allowlist scope action
    AktionTypeProposalRemoveScope
    // AktionTypeProposalAddAllowList proposal add to allowlist action
    AktionTypeProposalAddAllowList
    // AktionTypeProposalRemoveAllowList proposal remove from allowlist action
    AktionTypeProposalRemoveAllowList
    // AktionTypeUpdateMarket update market
    AktionTypeUpdateMarket
    // AktionTypeQuickPledge supply -> pledge
    ActionTypeQuickPledge
    // ActionTypeQuickBorrow supply -> pledge -> borrow
    ActionTypeQuickBorrow
    // ActionTypeQuickBorrowTransfer quick borrow transfer
    ActionTypeQuickBorrowTransfer
    // ActionTypeQuickRedeem unpledge -> redeem
    ActionTypeQuickRedeem
    // ActionTypeQuickRedeem quick redeem transfer
    ActionTypeQuickRedeemTransfer
    // ActionTypeProposalAddOracleSigner add oracle signer proposal action
    ActionTypeProposalAddOracleSigner
    // ActionTypeProposalRemoveOracleSigner remove oracle signer proposal action
    ActionTypeProposalRemoveOracleSigner
)
```