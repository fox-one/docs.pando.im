---
title: SDKを利用した取引
date: 2021-07-22 22:33:07
---

デフォルトで、Pando Lake は 4swap を流動性プロバイダーとして使用しています。 そのためPando Lakeでは4swapのSDKを利用して資産を交換するのが簡単です。

## 4swap SDK をプロジェクトにインポートする

```go
import (
    fswap "github.com/fox-one/4swap-sdk-go"
    mtg "github.com/fox-one/4swap-sdk-go/mtg"
    "github.com/fox-one/mixin-sdk-go"
    "github.com/shopspring/decimal"
)
```

## マルチシググループ情報を取得する

Pando Lakeで暗号資産の交換や流動性の追加、削除などの操作を実行する際には、 マルチシグ取引を作成し、Mixin Networkとやり取りする必要があります。

各マルチシグの参加者はMTGのメンバーでもあります。 なので最初に一度目を通し、後の利用に備え保存しておいてください。

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

## 取引可能なペアをすべて取得する

サポートされている全アセットペアの取得は簡単に行えます:

```go
pairs, err := fswap.ListPairs(ctx)
if err != nil {
    return err
}
...
```

## 取引に最適なルートを計算する

暗号資産を交換する前に、スワッピングルートを指定する必要があります。

現時点ではLakeがルートを決定していますが、その場合パフォーマンスの問題が発生し、ボットの速度が低下する可能性があります。 そのため、自身で交換ルートを計算することをお勧めします。

ルートの計算は簡単です。 流動生に基づきペアのソートを行い、`Route`か`ReverseRoute`メソッドを呼び出すと、計算結果を含んだ`order`オブジェクトが返されます。

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

## 実際の注文を作成する

注文に関する必要な情報の全てが、JSON 形式でトランザクションメモに保存されています:

```json
{
  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"
}
```

その中身には、

  - {receiver_id} はLPトークンを受け取るユーザーのIDです
  - {follow_id} は送金を追跡するためのUUIDです
  - {fill_asset_id} は、交換に使用する暗号資産のIDです
  - {routes} はルートIDのシーケンスで、どのルートを使用するかを示します。
  - {minimum} は、受け取る暗号資産の最小額を示します

4swap SDK を使用している場合は、メソッド `mtg.SwapAction` を使用してプロセスを簡素化することもできます。

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

## プログラムで注文する

ボットに注文をさせたい場合は、ボットからマルチシグトランザクションを送信してください。

これは裁定ボットで一般的に利用される手段です。 ボットのウォレットに、十分な暗号資産があることを確認してください。

トランザクションを作成し、それをカーネルノードに送信するために、[mixin-sdk-go](https://github.com/fox-one/mixin-sdk-go) クライアントを使用する必要があります。

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
