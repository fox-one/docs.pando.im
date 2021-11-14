---
title: Using SDK to Trade
date: 2021-07-22 22:33:07
---

By default, Pando Lake uses 4swap as the liquidity provider. It's easy to exchange assets at Pando Lake by 4swap's SDK.

## Import 4swap SDK into your project

```go
import (
    fswap "github.com/fox-one/4swap-sdk-go"
    mtg "github.com/fox-one/4swap-sdk-go/mtg"
    "github.com/fox-one/mixin-sdk-go"
    "github.com/shopspring/decimal"
)
```

## Get the multisig group information

When you perform operations at Pando Lake, such as swapping crypto, adding liquidity, and removing liquidity, you must create multisig transactions and interact with Mixin Network.

The participants of each multisig are also the members of MTG. So please read them first and save them for later use.

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

## Get all tradable pairs

To get all supported asset pairs is easy:

```go
pairs, err := fswap.ListPairs(ctx)
if err != nil {
    return err
}
...
```

## Calculate the best route to trade

Before swapping cryptos, we need to specify the swapping route.

At present, you may let Lake decide the route, but it may cause the performance issues and slow down the bot. Because of that, it is recommended to calculate a swapping route yourself.

To calculate route is easy. Sort the pairs according to the liquidity and call `Route` or `ReverseRoute` methods, which will return an `order` object that includes the result of calculation.

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
If you don't use 4swap SDK, you can implement your own best route algorithm ([golang version](https://github.com/fox-one/4swap-sdk-go/blob/master/route.go), [javascript version](https://github.com/fox-one/4swap-web/blob/develop/src/utils/pair/route.ts)).
:::
````

## Construct a real order

All required information about an order is stored in the transaction memo, in JSON format:

```json
{
  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"
}
```

in which,

  - {receiver_id} is the id of user who will receive the LP-Token
  - {follow_id} is a UUID to trace the transfer
  - {fill_asset_id} is the asset's ID you are going to use for swapping
  - {routes} is a route ids' sequence, which indicates which route you want to use.
  - {minimum} is the minimum amount of asset you will get

If you are using 4swap SDK, you can also use the method `mtg.SwapAction` to simplify the process:

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
    // you may want to change this value to a number which less than preOrder.FillAmount
    preOrder.FillAmount.Div(decimal.NewFromFloat(0.005)),
)

// generate the memo
memo, err := action.Encode(group.PublicKey)
if err != nil {
    return err
}
log.Println("memo", memo)
...

```

## Place an order programmatically

If you want the bot to place an order, send a multisig transaction from the bot.

This is a common scene for arbitrage bot. Please make sure the bot has enough crypto in the bot's wallet.

We need to use [mixin-sdk-go](https://github.com/fox-one/mixin-sdk-go) client to create and send the transaction to the kernel nodes.

```go
// send a transaction to a multi-sign address which specified by `OpponentMultisig`
// the OpponentMultisig.Receivers are the MTG group members
tx, err := client.Transaction(ctx, &mixin.TransferInput{
    AssetID: payAssetID,
    Amount:  decimal.RequireFromString(amount),
    TraceID: mixin.RandomTraceID(),
    Memo:    memo,
    OpponentMultisig: struct {
        Receivers []string `json:"receivers,omitempty"`
        Threshold uint8    `json:"threshold,omitempty"`
    }{
        Receivers: group.Members,
        Threshold: uint8(group.Threshold),
    },
}, *pin)
```
