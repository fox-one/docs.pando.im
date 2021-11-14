---
title: Guide
date: 16-08-2021 18:40:00
---

An easier and faster way to Connect to Pando Rings engine.

## Installing

```sh
go get github.com/fox-one/pando-rings-sdk-go
```

## Usage

* Initialize the endpoint

```go
rings.Endpoint = "xxxxx" // e.g. rings.Endpoint = "https://compound-test-api.fox.one"
```

* Import

```go
import "github.com/fox-one/pando-rings-sdk-go"
```

* Request all markets

```go
rings.RequestAllMarkets(ctx context.Context) ([]*Market, error)
```

* Request transactions
```go
rings.RequestTransactions(ctx context.Context, limit int, offset time.Time) ([]*Transaction, error)
```

* Request user action
```go
//request supply action url
rings.RequestSupply(ctx context.Context, followID string, assetID string, amount decimal.Decimal) (string, string, error)

//request pledge action url
rings.RequestPledge(ctx context.Context, followID string, ctokenAssetID string, amount decimal.Decimal) (string, string, error)

// request unpledge action url
rings.RequestUnpledge(ctx context.Context, followID string, ctokenAssetID string, ctokenAmount decimal.Decimal) (string, string, error)

// request quick pledge action url
rings.RequestQuickPledge(ctx context.Context, followID string, assetID string, amount decimal.Decimal) (string, string, error)

// request redeem action url
rings.RequestRedeem(ctx context.Context, followID string, ctokenAssetID string, redeemAmount decimal.Decimal) (string, string, error)

// request quick redeem action url
rings.RequestQuickRedeem(ctx context.Context, followID string, ctokenAssetID string, redeemAmount decimal.Decimal) (string, string, error)

// request borrow action url
rings.RequestBorrow(ctx context.Context, followID string, assetID string, borrowAmount decimal.Decimal) (string, string, error)

// request quick borrow action url
rings.RequestQuickBorrow(ctx context.Context, followID string, supplyAssetID string, supplyAmount decimal.Decimal, borrowAssetID string, borrowAmount decimal.Decimal) (string, string, error)

// request repay action url
rings.RequestRepay(ctx context.Context, followID string, assetID string, amount decimal.Decimal) (string, string, error)

// request liquidate action url
rings.RequestLiquidate(ctx context.Context, followID string, supplyUserID string, supplyCTokenAssetID string, borrowAssetID string, repayAmount decimal.Decimal) (string, string, error)

```

More details of sdk using, please read the [example](https://github.com/fox-one/pando-rings-sdk-go/tree/main/example), Or refer to the [official full-featured version of Pando rings for implementation](https://github.com/fox-one/compound-app)