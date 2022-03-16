---
title: 列表交易
date: 2021-12-30 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## GET /transactions

该API将响应一个交易列表。

<APIEndpoint base="https://api.4swap.org/api" url="/transactions" />

<APIMetaPanel />

<APIRequest title="阅读交易" method="GET" isPublic base="https://api.4swap.org/api" url='/transactions?cursor={next_cursor}&limit={limit}' />

```json title="Response"
{
  "ts": 1640871682322,
  "data": {
    "transactions": [
      {
        "id": "c5002520-2e63-587e-96ec-0f5af779a08b",
        "created_at": "2021-12-30T13:41:21Z",
        "type": "Swap", // transaction types, Swap, Withdraw, Deposit
        "base_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
        "quote_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",
        "base_amount": "0.47768255",
        "quote_amount": "-553.26863537",
        "fee_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
        "fee_amount": "0.00143304",
        "pay_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
        "filled_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",
        "funds": "0.47768255",
        "amount": "553.26863537",
        "value": "0.48",
        "fee_value": "0",
        "follow_id": "45432f10-d5b9-41dd-88fc-2cc92c736b19",
        "liquidity": "0"
      }
    ],
    "pagination": {
      "next_cursor": "13982534",
      "has_next": true
    }
  }
}

```

## GET /交易/{base_asset_id}/{quote_asset_id}

该API将响应指定交易对的交易列表。

<APIEndpoint base="https://api.4swap.org/api" url="/transactions/{base_asset_id}/{quote_asset_id}" />

<APIMetaPanel />

<APIRequest title="读取指定的交易对的交易" method="GET" isPublic base="https://api.4swap.org/api" url='/transactions/{base_asset_id}/{quote_asset_id}?cursor={next_cursor}&limit={limit}' />

```json title="Response"
{
  "ts": 1640871682322,
  "data": {
    "transactions": [
      {
        "id": "c5002520-2e63-587e-96ec-0f5af779a08b",
        "created_at": "2021-12-30T13:41:21Z",
        "type": "Swap", // transaction types, Swap, Withdraw, Deposit
        "base_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
        "quote_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",
        "base_amount": "0.47768255",
        "quote_amount": "-553.26863537",
        "fee_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
        "fee_amount": "0.00143304",
        "pay_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
        "filled_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",
        "funds": "0.47768255",
        "amount": "553.26863537",
        "value": "0.48",
        "fee_value": "0",
        "follow_id": "45432f10-d5b9-41dd-88fc-2cc92c736b19",
        "liquidity": "0"
      }
    ],
    "pagination": {
      "next_cursor": "13982534",
      "has_next": true
    }
  }
}

```

## GET /交易/{base_asset_id}/{quote_asset_id}/我的

该API将响应一个与我有关的指定交易对的交易列表。

<APIEndpoint base="https://api.4swap.org/api" url="/transactions/{base_asset_id}/{quote_asset_id}/mine" />

<APIMetaPanel />

<APIRequest title="读取指定的交易对的交易" method="GET" base="https://api.4swap.org/api" url='/transactions/{base_asset_id}/{quote_asset_id}?cursor={next_cursor}&limit={limit}' />

```json title="Response"
{
  "ts": 1640871682322,
  "data": {
    "transactions": [
      {
        "id": "c5002520-2e63-587e-96ec-0f5af779a08b",
        "created_at": "2021-12-30T13:41:21Z",
        "type": "Swap", // transaction types, Swap, Withdraw, Deposit
        "base_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
        "quote_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",
        "base_amount": "0.47768255",
        "quote_amount": "-553.26863537",
        "fee_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
        "fee_amount": "0.00143304",
        "pay_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
        "filled_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",
        "funds": "0.47768255",
        "amount": "553.26863537",
        "value": "0.48",
        "fee_value": "0",
        "follow_id": "45432f10-d5b9-41dd-88fc-2cc92c736b19",
        "liquidity": "0"
      }
    ],
    "pagination": {
      "next_cursor": "13982534",
      "has_next": true
    }
  }
}

```
