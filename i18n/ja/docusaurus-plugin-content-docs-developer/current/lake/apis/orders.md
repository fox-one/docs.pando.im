---
title: 注文の詳細を読む
date: 2021年11月15日　14時18分1秒
---

輸入 { APIMetaPanel、 APIRequest、 APIEndpoint、 APIParams、 APIPayload、 } from "@ site / src / components / api";

## 取得 /注文/:従う _id

このAPIは、フォローIDに関連する注文の詳細に応答します。

<APIEndpoint base="https://api.4swap.org/api" url="/orders/:follow_id" />

<APIMetaPanel scope="Authorized" />

<APIMetaPanel />

<APIRequest title="注文の詳細を読む" method="GET" isPublic base="https://api.4swap.org/api" url='/orders/:follow_id' />

```json title="Response"
{{
  "データ"： {
    "id"： "87ae5014-d20f-4cf1-b530-8771137e4e0e"、
    "created_at"： "2020-09-15T03：35：34Z"、
    "user_id"： "8017d200-7870-4b82-b53f-74bae1d2dad7"、
    "state"： "Done"、//注文ステータスTrading / Rejected / Done
    "pay_asset_id"： "6cfe566e-4aad-470b-8c9a-2fd35b49c68d"、
    "fill_asset_id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
    "pay_amount"： "1"、
    "fill_amount"： "00025725"、
    "min_amount"： "0.0002521"、
    "ルート"： "1bv"、
    "route_assets"：[
      "6cfe566e-4aad-470b-8c9a-2fd35b49c68d"、
      "c6d0c728-2624-429b-8e0d-d9d19b6592fa"
    ]、
    「トランザクション」：[
      {{
        "id"： "87ae5014-d20f-4cf1-b530-8771137e4e0e"、
        "created_at"： "2020-09-15T03：35：34Z"、
        "user_id"： "8017d200-7870-4b82-b53f-74bae1d2dad7"、
        「タイプ」：「スワップ」、
        "base_asset_id"： "6cfe566e-4aad-470b-8c9a-2fd35b49c68d"、
        "quote_asset_id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
        "base_amount"： "1"、
        "quote_amount"： "-0.00025725"、
        "fee_asset_id"： "6cfe566e-4aad-470b-8c9a-2fd35b49c68d"、
        "fee_amount"： "0.003"、
        "pay_asset_id"： "6cfe566e-4aad-470b-8c9a-2fd35b49c68d"、
        "filled_asset_id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
        「資金」：「1」、
        「金額」：「0.00025725」
      }
    ]
  }
} 
```
