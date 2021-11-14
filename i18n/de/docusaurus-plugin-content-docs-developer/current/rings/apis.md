---
title: API Reference
date: 16-08-2021 17:40:00
---

This document describes the definition and usage of the restful api and RPC interface of the pando rings engine.

## Restful API

### • All markets

Returns all the markets that can be supplied and borrowed.

**HTTP**
```
GET /api/v1/markets/all
```

**Response**
```json
{
  "data": [
    {
      "id": 1,
      "asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
      "symbol": "USDT",
      "ctoken_asset_id": "f8abf8be-2ead-3638-afa4-8a0b08872998",
      "total_cash": "334.7108376354365625",
      "total_borrows": "8.7389310703276705",
      "reserves": "0.4136021855620769",
      "ctokens": "339.76830046",
      "init_exchange_rate": "1",
      "reserve_factor": "0.1",
      "liquidation_incentive": "0.05",
      "borrow_cap": "0",
      "collateral_factor": "0.75",
      "close_factor": "0.5",
      "base_rate": "0.025",
      "multiplier": "0.3",
      "jump_multiplier": "0",
      "kink": "0",
      "block_number": 1719179,
      "utilization_rate": "0.0254752469950221",
      "exchange_rate": "1.0096179250853535",
      "supply_rate_per_block": "0.0000000003559835",
      "borrow_rate_per_block": "0.0000000155263385",
      "price": "1.0002",
      "price_updated_at": "2021-08-17T11:14:49+08:00",
      "borrow_index": "0.0000000123582381",
      "version": 2230721,
      "status": 1,
      "created_at": "2020-12-18T17:37:07+08:00",
      "updated_at": "2021-08-17T11:14:50+08:00",
      "supply_apy": "0.0007484197104",
      "borrow_apy": "0.0326425740624",
      "suppliers": 36,
      "borrowers": 15
    }
  ]
}
```

### • Transactions

Returns all the user transactions by time.

**HTTP**
```
GET /api/v1/transactions?limit=10&offset=
```

**Query Params**
| key    | type   | des                                                                            |
| ------ | ------ | ------------------------------------------------------------------------------ |
| limit  | string | page data limit, 500 by default                                                |
| offset | string | Pagination start time, RFC3339Nano format, e.g. 2020-12-12T12:12:12.999999999Z |

**Response**
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

### • Request Pay

Returns the pay url according to the specified action and paramter data.

**HTTP**
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
  "follow_id": "53504ca9-991a-4265-a690-ece6e0b7e414"
}
```

**Response**
```json
{
  "url":"mixin://codes/6df372af-5557-4064-a074-698c4677661e"
}
```

## RPC

Based on [Twirp](https://github.com/twitchtv/twirp) implementation RPC interfaces. [proto file](https://github.com/fox-one/pando-rings-sdk-go/blob/main/rpc/service.proto)
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

### • Usage

```go
rpcClient := rpc.NewCompoundProtobufClient("https://compound-test-api.fox.one", &http.Client{})

//request all markets
markets, err := rpcClient.AllMarkets(ctx, &rpc.MarketReq{})
if err != nil {
    return nil, err
}
return markets, nil

//request transactions
t := timestamppb.New(time.Now().AddDate(0, 0, -400))
req := rpc.TransactionReq{
    Offset: t,
    Limit:  50,
}

transactions, err := rpcClient.Transactions(cmd.Context(), &req)
if err != nil {
    return nil, err
}

return transactions, nil

// request pay
req := rpc.PayReq{
    AssetId:    "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
    Amount:     "0.01",
    TraceId:    uuid.New(),
    FollowId:   uuid.New(),
    MemoBase64: "AQIQONJAADfaSXCp+PK9A5Erkg==",
}
resp, err := rpcClient.PayRequest(cmd.Context(), &req)
if err != nil {
    return nil, err
}

return resp, nil
```

## [Actions](https://github.com/fox-one/compound/blob/master/core/action.go)

```go
const (
    // ActionTypeDefault default
    ActionTypeDefault ActionType = iota
    // ActionTypeSupply supply action
    ActionTypeSupply
    // ActionTypeBorrow borrow action
    ActionTypeBorrow
    // ActionTypeRedeem redeem action
    ActionTypeRedeem
    // ActionTypeRepay repay action
    ActionTypeRepay
    // ActionTypeMint mint ctoken action
    ActionTypeMint
    // ActionTypePledge pledge action
    ActionTypePledge
    // ActionTypeUnpledge unpledge action
    ActionTypeUnpledge
    // ActionTypeLiquidate liquidation action
    ActionTypeLiquidate
    // ActionTypeRedeemTransfer redeem transfer action
    ActionTypeRedeemTransfer
    // ActionTypeUnpledgeTransfer unpledge transfer action
    ActionTypeUnpledgeTransfer
    // ActionTypeBorrowTransfer borrow transfer action
    ActionTypeBorrowTransfer
    // ActionTypeLiquidateTransfer liquidation transfer action
    ActionTypeLiquidateTransfer
    // ActionTypeRefundTransfer refund action
    ActionTypeRefundTransfer
    // ActionTypeRepayRefundTransfer repay refund action
    ActionTypeRepayRefundTransfer
    // ActionTypeLiquidateRefundTransfer seize refund action
    ActionTypeLiquidateRefundTransfer
    // ActionTypeProposalAddMarket add market proposal action
    ActionTypeProposalAddMarket
    // ActionTypeProposalUpdateMarket update market proposal action
    ActionTypeProposalUpdateMarket
    // ActionTypeProposalWithdrawReserves withdraw reserves proposal action
    ActionTypeProposalWithdrawReserves
    // ActionTypeProposalProvidePrice provide price action
    ActionTypeProposalProvidePrice
    // ActionTypeProposalVote vote action
    ActionTypeProposalVote
    // ActionTypeProposalInjectCTokenForMint inject token action
    ActionTypeProposalInjectCTokenForMint
    // ActionTypeProposalUpdateMarketAdvance update market advance parameters action
    ActionTypeProposalUpdateMarketAdvance
    // ActionTypeProposalTransfer proposal transfer action
    ActionTypeProposalTransfer
    // ActionTypeProposalCloseMarket proposal close market action
    ActionTypeProposalCloseMarket
    // ActionTypeProposalOpenMarket proposal open market action
    ActionTypeProposalOpenMarket
    // ActionTypeProposalAddScope proposal add allowlist scope action
    ActionTypeProposalAddScope
    // ActionTypeProposalRemoveScope proposal remove allowlist scope action
    ActionTypeProposalRemoveScope
    // ActionTypeProposalAddAllowList proposal add to allowlist action
    ActionTypeProposalAddAllowList
    // ActionTypeProposalRemoveAllowList proposal remove from allowlist action
    ActionTypeProposalRemoveAllowList
    // ActionTypeUpdateMarket update market
    ActionTypeUpdateMarket
    // ActionTypeQuickPledge supply -> pledge
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