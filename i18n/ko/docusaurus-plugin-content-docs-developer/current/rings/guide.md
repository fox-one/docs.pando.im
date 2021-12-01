---
title: 가이드
date: 2021-08-16 18:40:00
---

Pando Rings 엔진에 연결하는 더 쉽고 빠른 방법입니다.

## 설치하기

```sh
go get github.com/fox-one/pando-rings-sdk-go
```

## 사용법

* 엔드포인트 초기화

```go
rings.Endpoint = "xxxxx" // e.g. rings.Endpoint = "https://compound-test-api.fox.one"
```

* 가져오기

```go
import "github.com/fox-one/pando-rings-sdk-go"
```

* 모든 시장 요청

```go
rings.RequestAllMarkets(ctx context.Context) ([]*Market, error)
```

* 거래 요청
```go
rings.RequestTransactions(ctx context.Context, limit int, offset time.Time) ([]*Transaction, error)
```

* 사용자 작업 요청
```go
//공급 요청 url
rings.RequestSupply(ctx context.Context, followID string, assetID string, amount decimal.Decimal) (string, string, error)

//저당 요청 url
rings.RequestPledge(ctx context.Context, followID string, ctokenAssetID string, amount decimal.Decimal) (string, string, error)

// 저당 취소 요청 url
rings.RequestUnpledge(ctx context.Context, followID string, ctokenAssetID string, ctokenAmount decimal.Decimal) (string, string, error)

// 빠른 저당 요청 url
rings.RequestQuickPledge(ctx context.Context, followID string, assetID string, amount decimal.Decimal) (string, string, error)

// (차압된 물건)상환 요청 url
rings.RequestRedeem(ctx context.Context, followID string, ctokenAssetID string, redeemAmount decimal.Decimal) (string, string, error)

// (차압된 물건) 빠른 상환 요청 url
rings.RequestQuickRedeem(ctx context.Context, followID string, ctokenAssetID string, redeemAmount decimal.Decimal) (string, string, error)

// 대출 요청 url
rings.RequestBorrow(ctx context.Context, followID string, assetID string, borrowAmount decimal.Decimal) (string, string, error)

// 빠른 대출 요청 url
rings.RequestQuickBorrow(ctx context.Context, followID string, supplyAssetID string, supplyAmount decimal.Decimal, borrowAssetID string, borrowAmount decimal.Decimal) (string, string, error)

// (대출금) 상환 요청 url
rings.RequestRepay(ctx context.Context, followID string, assetID string, amount decimal.Decimal) (string, string, error)

// 청산 요청 url
rings.RequestLiquidate(ctx context.Context, followID string, supplyUserID string, supplyCTokenAssetID string, borrowAssetID string, repayAmount decimal.Decimal) (string, string, error)

```

SDK 사용에 대한 자세한 내용은 [예시](https://github.com/fox-one/pando-rings-sdk-go/tree/main/example)를 참조하거나 [Pando rings의 구현](https://github.com/fox-one/compound-app)을 참고하세요.