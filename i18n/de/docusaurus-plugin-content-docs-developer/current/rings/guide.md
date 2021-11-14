---
title: Anleitung
sidebar_position: 3
date: 16-08-2021 18:40:00
---

Eine einfachere und schnellere Möglichkeit, sich mit Pando Rings zu verbinden.

## Installiere

```sh
go bekomme github.com/fox-one/pando-rings-sdk-go
```

## Auslastung

* Initialisiere den Endpunkt

```go
rings.Endpoint = "xxxxx" // z.B. rings.Endpoint = "https://compound-test-api.fox.one"
```

* Importieren

```go
"github.com/fox-one/pando-rings-sdk-go" importieren
```

* Alle Märkte anfragen

```go
rings.RequestAllMarkets(ctx context.Context) ([]*Markt, Fehler)
```

* Transaktionen anfordern
```go
rings.RequestTransactions(ctx context.Context, limit int, offset time.time) ([]*Transaktion, Fehler)
```

* Benutzeraktion anfordern
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

Weitere Details zum Benutzen von sdk, lesen Sie bitte das Beispiel [](https://github.com/fox-one/pando-rings-sdk-go/tree/main/example), Oder lesen Sie die [offizielle Vollversion der Pando Ringe für die Implementation](https://github.com/fox-one/compound-app)