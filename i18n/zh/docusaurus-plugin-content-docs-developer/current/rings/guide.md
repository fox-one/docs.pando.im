---
title: 指南
date: 2021-08-16 18:40:00
---

连接到 Pando Rings 引擎的更简单快捷的方式。

## 安装

```sh
go get github.com/fox-one/pando-rings-sdk-go
```

## 使用情况

* 初始化终点

```go
rings.Endpoint = "xxxxx" // e.g. rings.Endpoint = "https://compound-test-api.fox.one"
```

* 导入

```go
导入 "github.com/fox-one/pando-rings-sdk-go"
```

* 请求所有市场

```go
rings.RequestAllMarkets(ctx context.Context) ([]*Market, error)
```

* 请求交易
```go
rings.RequestTransactions(ctx context.Context, limit int, offset time.Time) ([]*Transaction, error)
```

* 请求用户操作
```go
//请求供应
rings.RequestSupply(ctx context.Context, followID string, assetID string, amount decimal.Decimal) (string, string, error)

//请求质押
rings.RequestPledge(ctx context.Context, followID string, ctokenAssetID string, amount decimal.Decimal) (string, string, error)

//请求取消质押
rings.RequestUnpledge(ctx context.Context, followID string, ctokenAssetID string, ctokenAmount decimal.Decimal) (string, string, error)

//请求快速质押
rings.RequestQuickPledge(ctx context.Context, followID string, assetID string, amount decimal.Decimal) (string, string, error)

//请求赎回
rings.RequestRedeem(ctx context.Context, followID string, ctokenAssetID string, redeemAmount decimal.Decimal) (string, string, error)

//请求快速赎回
rings.RequestQuickRedeem(ctx context.Context, followID string, ctokenAssetID string, redeemAmount decimal.Decimal) (string, string, error)

//请求借出
rings.RequestBorrow(ctx context.Context, followID string, assetID string, borrowAmount decimal.Decimal) (string, string, error)

//请求快速借出
rings.RequestQuickBorrow(ctx context.Context, followID string, supplyAssetID string, supplyAmount decimal.Decimal, borrowAssetID string, borrowAmount decimal.Decimal) (string, string, error)

//请求快速还款
rings.RequestRepay(ctx context.Context, followID string, assetID string, amount decimal.Decimal) (string, string, error)

//请求清算操作
rings.RequestLiquidate(ctx context.Context, followID string, supplyUserID string, supplyCTokenAssetID string, borrowAssetID string, repayAmount decimal.Decimal) (string, string, error)

```

更多SDK使用细节请阅读[示例](https://github.com/fox-one/pando-rings-sdk-go/tree/main/example)，或者参考[Pando Rings 的实现](https://github.com/fox-one/compound-app)