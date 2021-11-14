---
title: Verwendung von SDK zum Handel
sidebar_position: eins
date: 22-07-2021 22:33:07
---

Pando Lake verwendet 4swap als Liquiditätsanbieter. Es ist einfach, Vermögenswerte am Pando Lake durch 4swap's SDK auszutauschen.

## Importieren Sie 4swap SDK in Ihr Projekt

```go
import (
    fswap "github.com/fox-one/4swap-sdk-go"
    mtg "github.com/fox-one/4swap-sdk-go/mtg"
    "github.com/fox-one/mixin-sdk-go"
    "github.com/shopspring/decimal"
)
```

## Erhalte die Multisig Gruppen-Informationen

Wenn du Operationen am Pando Lake durchführst, wie zum Beispiel das Tauschen von Kryptos, wodurch Liquidität hinzugefügt wird und Entfernen von Liquidität, müssen Sie multisig Transaktionen erstellen und mit Mixin Network interagieren.

Die Teilnehmer jeder Multisig sind auch Mitglieder der MTG. Bitte lesen Sie diese zuerst und speichern Sie sie für eine spätere Nutzung.

```go
ctx := context.TODO()

// use the 4swap's MTG api endpoint
fswap.UseEndpoint(fswap.MtgEndpoint)

// read the mtg group
// the group information would change frequently
// it's recommended to save it for later use
group, err := fswap.ReadGroup(ctx)
if err != nil {
    return err
}
...
```

## Alle handelbaren Paare erhalten

Um alle unterstützten Asset-Paare zu erhalten ist einfach:

```go
pairs, err := fswap.ListPairs(ctx)
if err != nil {
    return err
}
...
```

## Berechne die beste Route zum Handel

Bevor wir Kryptos austauschen, müssen wir die Swapp-Route angeben.

Zur Zeit können Sie den See über die Route entscheiden lassen, aber es kann zu Leistungsproblemen führen und den Bot verlangsamen. Aus diesem Grund ist es empfehlenswert, selbst eine Umtauschroute zu berechnen.

Die Route zu berechnen ist einfach. Sortieren Sie die Paare nach Liquidität und rufen `Route` oder `ReverseRoute` Methoden an das eine `Bestellung` zurückgibt, die das Ergebnis der Berechnung enthält.

```go
// sort first
sort.Slice(pairs, func(i, j int) bool {
    aLiquidity := pairs[i].BaseValue.Add(pairs[i].QuoteValue)
    bLiquidity := pairs[j].BaseValue.Add(pairs[j].QuoteValue)
    return aLiquidity.GreaterThan(bLiquidity)
})

// calculate the route
// InputAssetID - the id of the asset you want to paid
// OutputAssetID - the id of the asset you trade for
// InputAmount - the amount to calucate the route, for example, 1000
preOrder, err := fswap.Route(pairs, InputAssetID, OutputAssetID, InputAmount)
if err != nil {
    return err
}

// you can read the best route from Order.RouteAssets, which is an array of asset_id
log.Printf("Route: %v", preOrder.RouteAssets)
log.Printf("Price: %v", preOrder.FillAmount.Div(InputAmount))
...
```

````mdx-code-block
:::info
Wenn du 4swap SDK nicht verwendest, kannst du deinen eigenen besten Routenalgorithmus implementieren ([golang Version](https://github.com/fox-one/4swap-sdk-go/blob/master/route.go), [Javascript-Version](https://github.com/fox-one/4swap-web/blob/develop/src/utils/pair/route.ts)).
:::
````

## Konstruiere eine echte Ordnung

Alle erforderlichen Informationen über eine Bestellung werden in der Transaktionsnotiz im JSON-Format gespeichert:

```json
{
  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"
}
```

in dem,

  - {receiver_id} ist die ID des Benutzers, der das LP-Token erhalten wird
  - {follow_id} ist eine UUID um die Übertragung zu verfolgen
  - {fill_asset_id} ist die ID des Assets, die Sie zum Swapping verwenden werden
  - {routes} ist eine Routen-Ids Sequenz, die angibt, welche Route Sie verwenden möchten.
  - {minimum} ist der Mindestbetrag an Assets die Sie erhalten werden

Wenn Sie 4swap SDK verwenden, können Sie auch die Methode `mtg.SwapAction` verwenden, um den Prozess zu vereinfachen:

```go
// the ID to trace the orders
followID, _ := uuid.NewV4()

// build a swap action, specified the parameters
action := mtg.SwapAction(
    receiverID,
    followID.String(),
    OutputAssetID,
    preOrder.Routes,
    // the minimum amount of asset you will get.
    // Sie können diesen Wert auf eine Zahl ändern, die kleiner ist als preOrder.FillAmount
    preOrder.FillAmount.Div(decimal.NewFromFloat(0. 05)),
)

// memo generieren
memo, err := action.Encode(group.PublicKey)
if err != nil {
    return err
}
log.Println("memo", memo...

```

## Bestellung programmatisch aufgeben

Wenn Sie möchten, dass der Bot eine Bestellung aufgibt, senden Sie eine Multisig Transaktion vom Bot.

Dies ist eine gemeinsame Szene für Arbitrage Bot. Bitte stellen Sie sicher, dass der Bot genug Krypto in der Brieftasche des Bots hat.

Wir müssen [mixin-sdk-go](https://github.com/fox-one/mixin-sdk-go) Client verwenden, um die Transaktion zu erstellen und an die Kernelknoten zu senden.

```go
// send a transaction to a multi-sign address which specified by `OpponentMultisig`
// the OpponentMultisig.Receivers are the MTG group members
tx, err := client.Transaction(ctx, &mixin.TransferInput{
    AssetID: assetID,
    Amount:  decimal.RequireFromString(amount),
    TraceID: mixin.RandomTraceID(),
  // the `action` field in the response
    Memo:    resp.Action,
  // the MTG members from `/api/information`
    OpponentMultisig: struct {
        Receivers []string `json:"receivers,omitempty"`
        Threshold uint8    `json:"threshold,omitempty"`
    }{
        Receivers: group.Members,
        Threshold: uint8(group.Threshold),
    },
}, *pin)
```
