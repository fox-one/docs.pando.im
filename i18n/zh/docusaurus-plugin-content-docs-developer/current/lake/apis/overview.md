---
title: API概述
date: 2021-09-30 23:18:01
---

Pando Lake 和 4swap 为第三方开发者提供了简洁、开发者友好的 API.

## 目前使用的 API 端点

| 名称          | 端点                              |
| ----------- | ------------------------------- |
| Primary     | https://api.4swap.org/api       |
| Alternative | https://mtgswap-api.fox.one/api |

您可以使用其中任何一个来构造您的 API 请求：

```
HTTP_METHOD ${API_BASE}/${API_PATH}
```

## 实体

一些实体在API响应中被广泛使用。

### 交易对实体

```json
{
  // base 和 quote assets 的 asset id
  "base_asset_id": "c94ac88f-4671-3976-b60a-09064f1811e8",
  "quote_asset_id": "f5ef6b5d-cc5a-3d90-b2c0-a2fd386e7a3c",
  //base 和 quote assets 的数量
  "base_amount": "827.7243632",
  "quote_amount": "57701.51287515",
  // 此交易对的流动性
  "liquidity": "6588.04146863",
  // 此交易对 LP-Token 的 asset id
  "liquidity_asset_id": "b34633de-4012-38e3-88a9-1f41eafdf45a",
  // 此交易对的 route id
  "route_id": 1,
  // 手续费 0.3%
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

### 资产实体

```json
{
  // asset id
  "id": "159648dc-eba7-3d0e-82ea-06995bee0537",
  // 显示名称, 代号 和图标
  "name": "4swap LP Token BTC-wBTC",
  "symbol": "sBTC-wBTC",
  "logo": "https://mixin-images.zeromesh.net/kVAd-goGIX7OAFruP_gcT04yXomO4BfTFEyeroKPl38Ypc6KQnQZBdeVzp8VCOiDyD-4-A8Wyh_HiFztViJxjrSZezrlRl6Up5SCWw=s128",
  // 主链的asset id
  "chain_id": "43d61dcd-e413-450d-80b8-101d5e903357",
  // 主链资产实体
  "chain": {Asset Entity},
  // 美元价格
  "price": "84447.541565189134",
  // 其余信息
  "extra": {"circulation":"109542949","name":"Ethereum","explorer":"https://etherscan.io/","intro":{"en":["Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.","Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014 and officially launched the blockchain on July 30, 2015.","Ethereum’s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud."]},"website":"https://www.ethereum.org/","issue":"2014/7/24","total":"109542949"}
}
```