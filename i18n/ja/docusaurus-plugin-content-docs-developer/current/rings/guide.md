---
title: 手引き
date: 2021年8月16日18時40分0秒
---

Pando Rings エンジンに接続するためのより簡単で高速な方法。

## インストール

```sh
github.com/fox-one/pando-rings-sdk-goを取得します
```

## 使用方法

* エンドポイントを初期化します

```go
ring.Endpoint = "xxxxx" //例： ring.Endpoint = "https://compound-test-api.fox.one"
```

* インポート

```go
github.com/fox-one/pando-rings-sdk-goを取得します"
```

* すべての市場をリクエスト

```go

ring.RequestAlの販売（ctx context.Context）（[] * Market、error） 
```

* トランザクションをリクエストする
```go
rings.トランザクションのリクエスト(ctx 環境 .環境 , 制限整数、オフセット時間。時間 ) ([]*トランザクション、エラー)
```

* ユーザーアクションを要求する
```go
//サプライアクションのURLをリクエストします
ring.RequestSupply（ctx context.Context、followID string、assetID string、amount decimal.Decimal）（string、string、error）

//誓約アクションのURLをリクエストします
ring.RequestPledge（ctx context.Context、followID string、ctokenAssetID string、amount decimal.Decimal）（string、string、error）

//誓約解除アクションのURLをリクエストします
ring.RequestUnpledge（ctx context.Context、followID string、ctokenAssetID string、ctokenAmount decimal.Decimal）（string、string、error）

//クイックプレッジアクションURLをリクエストします
ring.RequestQuickPledge（ctx context.Context、followID string、assetID string、amount decimal.Decimal）（string、string、error）

//償還アクションURLをリクエストします
ring.RequestRedeem（ctx context.Context、followID string、ctokenAssetID string、redeemAmount decimal.Decimal）（string、string、error）

//クイック引き換えアクションURLをリクエストします
ring.RequestQuickRedeem（ctx context.Context、followID string、ctokenAssetID string、redeemAmount decimal.Decimal）（string、string、error）

//借用アクションのURLをリクエストします
ring.RequestBorrow（ctx context.Context、followID string、assetID string、borrowAmount decimal.Decimal）（string、string、error）

//クイックボローアクションURLをリクエストします
ring.RequestQuickBorrow（ctx context.Context、followID string、supplyAssetID string、supplyAmount decimal.Decimal、borrowAssetID string、borrowAmount decimal.Decimal）（string、string、error）

//返済アクションのURLをリクエストします
ring.RequestRepay（ctx context.Context、followID string、assetID string、amount decimal.Decimal）（string、string、error）

//清算アクションURLをリクエストします
ring.RequestLiquidate（ctx context.Context、followID string、supplyUserID string、supplyCTokenAssetID string、borrowAssetID string、repayAmount decimal.Decimal）（string、string、error） 

```

使用するSDKの詳細については、[例](https://github.com/fox-one/pando-rings-sdk-go/tree/main/example)を読むか、を参照してください。 the <ahref = "https://github.com/fox-one/compound-app">実装用のPandoリングの公式フル機能バージョン</a>