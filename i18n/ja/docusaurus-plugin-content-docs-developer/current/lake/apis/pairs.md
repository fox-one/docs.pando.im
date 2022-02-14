---
title: ペアを読む
date: 2021年9月30日23時18分01秒
---

輸入 { APIMetaPanel、 APIRequest、 APIEndpoint、 APIParams、 APIPayload、 } from "@ site / src / components / api";

## 取得 /一対

このAPIはサポートされている全てのペアに応答します。

<APIEndpoint base="https://api.4swap.org/api" url="/pairs" />

<APIMetaPanel />

<APIRequest title=" サポートされているペアを読み取る " method="GET" isPublic base="https://api.4swap.org/api" url='/pairs' />

```json title="Response"
{{
   "ts"：1627697766503、
   "データ"： {
     「ペア」：[
       {ペアエンティティ}、
       {ペアエンティティ}、
      ...
    ],
    "pair_count": 75,
    "transaction_count_24h": 25134,
    "volume_24h": "5189724.64904556",
    "fee_24h": "13687.38904891",
    "ts": 1627697766503,
  }
}
```

### /ペア 用のコインマーケットキャップ 互換API

このAPIはサポートされている全てのペアに応答します。 Coinmarketcapの要件と互換性があります。

<APIEndpoint base="https://api.4swap.org/api" url="/cmc/pairs" />

<APIMetaPanel />

<APIRequest title=" サポートされているペアを読み取る " method="GET" isPublic base="https://api.4swap.org/api" url='/cmc/pairs' />

```json title="Response"
{{{
   "ts"：1627697766503、
   "データ"： {
     // 2つの暗号のasset_idsの組み合わせ
     "05c5ac01-31f9-4a69-aa8a-ab796de1d041_31d2ea9c-95eb-3355-b65b-ba096853bc18"：{
       // MoneroのアセットID
       "base_id"： "05c5ac01-31f9-4a69-aa8a-ab796de1d041"、
       "base_name"： "Monero"、
       "base_symbol"： "XMR"、
       // pUSDのアセットID
       "quote_id"： "31d2ea9c-95eb-3355-b65b-ba096853bc18"、
       "quote_name"： "Pando USD"、
       "quote_symbol"： "pUSD"、
       "last_price"： "235.830040473787049"、
       "base_volume"： "1.87552947"、
       "quote_volume"： "439.96755122"
     }、 
    ...
  }
}
```