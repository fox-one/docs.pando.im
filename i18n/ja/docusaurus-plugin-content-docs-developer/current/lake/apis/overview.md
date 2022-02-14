---
title: Lake API 概要
date: 2021年9月30日23時18分01秒
---

Pando Lakeと4swapは、サードパーティの開発者向けにシンプルで開発者に優しいAPIを提供します。

## API エンドポイント

| 名前  | 終点                              |
| --- | ------------------------------- |
| 主要な | https://api.4swap.org/api       |
| 別   | https://mtgswap-api.fox.one/api |

それらのいずれかを使用して、次の形式でAPIリクエストを作成できます。

```
HTTP_METHOD ${API_BASE}/${API_PATH}
```

## 標識

一部の標識は、API応答で広く使用されています。

### 関連する標識

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

### 資産エンティティ

```json
{{
   //アセットID
   "id"： "159648dc-eba7-3d0e-82ea-06995bee0537"、
   //表示される名前、記号、アイコン
   "名前"： "4swap LPトークンBTC-wBTC"、
   「記号」：「sBTC-wBTC」、
   "ロゴ"： "https://mixin-images.zeromesh.net/kVAd-goGIX7OAFruP_gcT04yXomO4BfTFEyeroKPl38Ypc6KQnQZBdeVzp8VCOiDyD-4-A8Wyh_HiFztViJxjrSZezrlRl6Up5SC
   //チェーンアセットのアセットID
   "chain_id"： "43d61dcd-e413-450d-80b8-101d5e903357"、
   //チェーンアセットエンティティ
   "チェーン"：{アセットエンティティ}、
   //米ドルでの価格
   "価格"： "84447.541565189134"、
   //このアセットの追加情報
   "extra"：{"circulation"： "109542949"、 "name"： "Ethereum"、 "explorer"： "https://etherscan.io/"、 "intro"：{"en"：["Ethereum is a 独自の暗号通貨であるイーサリアムを備えた分散型オープンソースブロックチェーンシステム。 ETHは、他の多くの暗号通貨のプラットフォームとして、また分散型スマートコントラクトの実行のためのプラットフォームとして機能します。 "、" Ethereumは、VitalikButerinによる2013年のホワイトペーパーで最初に説明されました。 ブテリン氏は、他の共同創設者とともに、2014年夏のオンライン公開クラウドセールでプロジェクトの資金を確保し、2015年7月30日に正式にブロックチェーンを立ち上げました。」、「イーサリアム自身の目標は、 分散型アプリケーション。世界中のユーザーが、検閲、ダウンタイム、詐欺に強いソフトウェアを作成して実行できるようにします。 "]}、" website "：" https://www.ethereum.org/ "、" issue "： "2014/7/24"、 "合計"： "109542949"}
}

```