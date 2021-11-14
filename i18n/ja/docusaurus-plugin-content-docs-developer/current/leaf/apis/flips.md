---
title: オークションを読む
date: 2021-10-01 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## すべてのオークションを読む

### GET /flips

この API はすべてのauctionsに対応します。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/flips" />

<APIMetaPanel />

<APIParams p-cursor="the cursor to start from" p-limit="the limitation of items in response" />

<APIRequest title="すべてのauctionsを読む" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/flips' />

```json title="Response"
{
  "flips": [
    {
      // ActionKick: the auction begins, any bid are accepted
      // ActionBid: the auction bidding
      // ActionDeal: the auction is over
      "action": 0,
      "art": "string",
      // the current amount of bid
      "bid": "string",
      "collateral_id": "string",
      "created_at": "2021-10-02",
      // auction end time
      "end": "2021-10-02",
      "guy": "string",
      "id": "string",
      // the amount of auctioned collateral
      "lot": "100",
      // the max amount of bid accepted
      "tab": "2",
      // bid end time
      "tic": "2021-10-02",
      "vault_id": "string"
    }
  ],
  "pagination": {
    "has_next": true,
    "next_cursor": "string"
  }
}
```

## 単一の Auctionsを読む

### GET /flips/:id

この API は asset_id `:id` で 1 つのAuctionに応答します.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/flips/:id" />

<APIMetaPanel />

<APIRequest title="単一のauctionsを表示する" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/flips/4ce8a961-4b90-34e8-9780-6ce46a8205a6' />

```json title="Response"
{
  "ts": 1633139399005,
  "data": {
    "id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",
    "created_at": "2021-06-22T13:00:42Z",
    "tic": "2021-06-22T14:01:13Z",
    "end": "2021-06-23T01:00:42Z",
    "bid": "1859.30248633",
    "lot": "1.07",
    "tab": "1859.30248633",
    "art": "1631.9052992207771378",
    "collateral_id": "686cb137-b5e6-586c-bece-926736ffc583",
    "vault_id": "754a82aa-6f9a-3ddc-aa4e-985f6e1b7687",
    "guy": "",
    "action": "FlipDeal"
  }
}
```

## オークションイベントを読む

### GET /flips/:id/events

この API は、1 つのAuctionの `:id` ですべてのイベントに応答します。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/flips/:id/events" />

<APIMetaPanel />

<APIRequest title="1 つのauctionsのすべてのイベントを読む" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/flips/4ce8a961-4b90-34e8-9780-6ce46a8205a6/events' />

```json title="Response"
{
  "ts": 1633139503820,
  "data": {
    "events": [
      {
        "flip_id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",
        "created_at": "2021-06-22T13:00:42Z",
        "action": "FlipKick",
        "bid": "0",
        "lot": "1.358"
      },
      {
        "flip_id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",
        "created_at": "2021-06-22T13:01:55Z",
        "action": "FlipBid",
        "bid": "5",
        "lot": "1.358"
      },
      {
        "flip_id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",
        "created_at": "2021-06-22T13:02:49Z",
        "action": "FlipBid",
        "bid": "1859.30248633",
        "lot": "1.358"
      },
      // ...
    ]
  }
}
```
