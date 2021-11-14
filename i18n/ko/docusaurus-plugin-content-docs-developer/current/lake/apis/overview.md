---
title: Lake API 개요
date: 2021-09-30 23:18:01
---

Pando Lake와 4swap은 타사 개발자를 위한 간단하고 개발자 친화적인 API를 제공합니다.

## API 엔드포인트:

| 이름 | 엔드포인트                           |
| -- | ------------------------------- |
| 우선 | https://api.4swap.org/api       |
| 대안 | https://mtgswap-api.fox.one/api |

이들 중 하나를 사용하여 다음 형식으로 API 요청을 구성할 수 있습니다.

```
HTTP_METHOD ${API_BASE}/${API_PATH}
```

## 개체

일부 개체는 API 응답에 널리 사용됩니다.

### 페어 개체

```json
{
  //기준 및 견적 자산의 자산 ID
  "base_asset_id": "c94ac88f-4671-3976-b60a-09064f1811e8",
  "quote_asset_id": "f5ef6b5d-cc5a-3d90-b2c0-a2fd386e7a3c",
  // 기준 자산 및 견적 자산의 양
  "base_amount": "827.7243632",
  "quote_amount": "57701.51287515",
  // 예치한 페어의 유동성
  "liquidity": "6588.04146863",
  // 예치한 페어의 LP-Token 자산 ID
  "liquidity_asset_id": "b34633de-4012-38e3-88a9-1f41eafdf45a",
  // 예치한 페어의 경로 ID
  "route_id": 1,
  // 수수료 0.3%
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

### 자산 개체

```json
{
  // 자산 ID
  "id": "159648dc-eba7-3d0e-82ea-06995bee0537",
  // 표시된 이름, 기호 및 아이콘
  "name": "4swap LP Token BTC-wBTC",
  "symbol": "sBTC-wBTC",
  "logo": "https://mixin-images.zeromesh.net/kVAd-goGIX7OAFruP_gcT04yXomO4BfTFEyeroKPl38Ypc6KQnQZBdeVzp8VCOiDyD-4-A8Wyh_HiFztViJxjrSZezrlRl6Up5SCWw=s128",
  // 체인 자산의 자산 ID
  "chain_id": "43d61dcd-e413-450d-80b8-101d5e903357",
  // 체인 자산 개체
  "chain": {Asset Entity},
  // 미국 달러 가격
  "price": "84447.541565189134",
  // 이 자산에 대한 추가 정보
   "extra": {"circulation":"109542949","name":"Ethereum","explorer":"https://etherscan.io/","intro":{"en":["Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.","Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014 and officially launched the blockchain on July 30, 2015.","Ethereum’s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud."]},"website":"https://www.ethereum.org/","issue":"2014/7/24","total":"109542949"}
}
```