---
title: Lake API 概要
date: 2021-09-30 23:18:01
---

Pando Lake と 4swap は、サードパーティ開発者向けのシンプルで開発者フレンドリーなAPIsを提供します。

## API エンドポイント

| ネーム         | エンドポイント                         |
| ----------- | ------------------------------- |
| Primary     | https://api.4swap.org/api       |
| Alternative | https://mtgswap-api.fox.one/api |

これらのいずれかを使用し、APIリクエストをフォームで作成できます:

```
HTTP_METHOD ${API_BASE}/${API_PATH}
```

## エンティティ

一部のエンティティはAPIレスポンスで広く使用されています。

### ペアエンティティ

```json
{
  // baseとquote assetsのasset id
  "base_asset_id": "c94ac88f-4671-3976-b60a-09064f1811e8",
  "quote_asset_id": "f5ef6b5d-cc5a-3d90-b2c0-a2fd386e7a3c",
  // baseとquote assetsの数量
  "base_amount": "827.7243632",
  "quote_amount": "57701.51287515",
  // このペアの流動性
  "liquidity": "6588.04146863",
  // このペアのLPトークンのasset id
  "liquidity_asset_id": "b34633de-4012-38e3-88a9-1f41eafdf45a",
  // このペアのroute id
  "route_id": 1,
  // 手数料 0.3%
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
  "extra": {"circulation":"109542949","name":"Ethereum","explorer":"https://etherscan.io/","intro":{"en":["Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.","Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterinと他の共同創設者と一緒に、2014年夏のオンライン公開セールでプロジェクトの資金を確保し、2015年7月30日にブロックチェーンを正式ローンチしました。 「Ethereumが主張する目標は、分散型アプリケーションのグローバルプラットフォームになることです。 世界中のユーザーが、検閲、ダウンタイム、不正行為に強いソフトウェアを書いて実行できるようにします。 ]},"website":"https://www.etherum.org/","issue":"2014/7/24","total":"109542949"}
}
```