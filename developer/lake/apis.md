---
title: RESTful APIs
sidebar_position: 3
date: 2021-07-31 11:18:01
---

## API Endpoints

| Name | Endpoint |
| --- | --- |
| 4swap | https://mtgswap-api.fox.one |
| Pando Lake | https://lake-api.pando.im |

You can use any of them to construct your API requests in form:

```
HTTP_METHOD ${API_BASE}/${API_PATH}
```

## Entities

### Pair Entity

```json
{
  // the asset id of base and quote assets
  "base_asset_id": "c94ac88f-4671-3976-b60a-09064f1811e8",
  "quote_asset_id": "f5ef6b5d-cc5a-3d90-b2c0-a2fd386e7a3c",
  // the amount of base and quote assets
  "base_amount": "827.7243632",
  "quote_amount": "57701.51287515",
  // the liquidity of this pair
  "liquidity": "6588.04146863",
  // the asset id of LP-Token of this pair
  "liquidity_asset_id": "b34633de-4012-38e3-88a9-1f41eafdf45a",
  // the route id of this pair
  "route_id": 1,
  // fee 0.3%
  "fee_percent": "0.003",
  "max_liquidity": "100000000",
  "base_value": "301753.29",
  "quote_value": "300856.63",
  "volume_24h": "9552.48",
  "fee_24h": "28.63",
  "transaction_count_24h": 165,
  "version": 7503628,
  "base_volume_24h": "27.23252371",
  "quote_volume_24h": "1895.88436236"
}
```

### Asset Entity

```json
{
  // asset id
  "id": "159648dc-eba7-3d0e-82ea-06995bee0537",
  // displayed name, symbol and icon
  "name": "4swap LP Token BTC-wBTC",
  "symbol": "sBTC-wBTC",
  "logo": "https://mixin-images.zeromesh.net/kVAd-goGIX7OAFruP_gcT04yXomO4BfTFEyeroKPl38Ypc6KQnQZBdeVzp8VCOiDyD-4-A8Wyh_HiFztViJxjrSZezrlRl6Up5SCWw=s128",
  // asset id of chain asset
  "chain_id": "43d61dcd-e413-450d-80b8-101d5e903357",
  // chain asset entity
  "chain": {Asset Entity},
  // price in US Dollar
  "price": "84447.541565189134",
  // extra information of this assets
  "extra": {"circulation":"109542949","name":"Ethereum","explorer":"https://etherscan.io/","intro":{"en":["Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.","Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014 and officially launched the blockchain on July 30, 2015.","Ethereum’s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud."]},"website":"https://www.ethereum.org/","issue":"2014/7/24","total":"109542949"}
}
```

## Get Information

```
GET /api/info
```

Responds [MTG](https://developers.mixin.one/document/mainnet/mtg/overview) information about 4swap and Lake.

You can save it to use it later because the information would not change frequently.

**Response**

```json
{
  "ts": 1627697766645,
  "data": {
    // user id of MTG members
    "members": [
      "a753e0eb-3010-4c4a-a7b2-a7bda4063f62",
      "099627f8-4031-42e3-a846-006ee598c56e",
      "aefbfd62-727d-4424-89db-ae41f75d2e04",
      "d68ca71f-0e2c-458a-bb9c-1d6c2eed2497",
      "e4bc0740-f8fe-418c-ae1b-32d9926f5863"
    ],
    "public_key": "dt351xp3KjNlVCMqBYUeUSF45upCEiReSZAqcjcP/Lc=",
    // multisig threshold
    "threshold": 3
  }
}
```

## List Assets

```
GET /api/assets
```

Responds supported assets of 4swap and Lake.

**Response**

```json
{
  "ts": 1627697766503,
  "data": {
    "assets": [
      {Asset Entity},
      {Asset Entity},
      ...
    ]
  }
}
```

## List Pairs

```
GET /api/pairs
```

Responds all supported pairs of 4swap's pairs pool.

**Response**

```json
{
  "ts": 1627697766503,
  "data": {
    "pairs": [
      {Pair Entity},
      {Pair Entity},
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

## Read Pair Market Stat

```
GET /api/stats/markets/${BASE_ASSET_ID}/${QUOTE_ASSET_ID}
```

Responds market stat information about two asset ids specified in the URL.

**Response**

```json
{
  "ts": 1627697766503,
  "data": [
    {
      "ts": 1612224000,
      "date": "2021-02-02T00:00:00Z",
      // liquidity in US dollar
      "value": "15796065.69038667",
      // volume in US dollar
      "volume": "656098.59481682"
    },
    ...
  ]
}
```

## Read Pair Market Stat

```
GET /api/stats/markets/${BASE_ASSET_ID}/${QUOTE_ASSET_ID}/kline/v2?dur=4320h
```

Responds market K-line data about two asset ids specified in the URL.

**Response**

```json
{
  "ts": 1627697766503,
  "data": [
    [
      // timestamp
      1612148400,
      // price of base / quote
      "0.039304863681",
      // price of quote / base
      "25.442131511901"
    ]
    ...
  ]
}
```

