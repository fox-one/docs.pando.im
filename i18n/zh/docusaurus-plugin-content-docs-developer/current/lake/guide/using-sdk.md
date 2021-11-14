---
title: 使用 SDK 进行交易
date: 2021-07-22 22:33:07
---

默认情况下，Pando Lake 使用 4swap 作为流动资金提供者。 很容易通过4swap的SDK在Pando Lake上交换资产。

## 导入4swap SDK 到您的项目

```go
import (
    fswap "github.com/fox-one/4swap-sdk-go"
    mtg "github.com/fox-one/4swap-sdk-go/mtg"
    "github.com/fox-one/mixin-sdk-go"
    "github.com/shopspring/decimal"
)
```

## 获取多签组信息

当您在 Pando Lake 执行操作时，例如swap操作，添加流动性和移除流动性时，您必须创建多签交易并与 Mixin 网络交互。

每个多签参与者也是MTG的成员。 所以请先请求一次，然后保存以备以后使用。

```go
ctx := context.TODO()

// 用 4swap's MTG api 端点
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

## 获取所有可用交易对

要获得所有支持的资产对是很容易的：

```go
pairs, err := fswap.ListPairs(ctx)
if err != nil {
    return err
}
...
```

## 计算最佳交易路径

在swap之前，我们需要指定交换路线。

目前，你可以让Lake决定交易路线，但它可能会造成性能问题并减慢机器人的速度。 因此，建议自行计算一个交换路线。

计算路由非常容易。 根据流动性排序并调用 `Route` 或 `ReverseRoute` 方法 返回一个 `order` 对象，其中包含计算结果。

```go
// 先排序
sort.Slice(pairs, func(i, j int) bool {
    aLiquidity := pairs[i].BaseValue.Add(pairs[i].QuoteValue)
    bLiquidity := pairs[j].BaseValue.Add(pairs[j].QuoteValue)
    return aLiquidity.GreaterThan(bLiquidity)
})

// 计算路径
// InputAssetID - the id of the asset you want to paid
// OutputAssetID - the id of the asset you trade for
// InputAmount - the amount to calucate the route, for example, 1000
preOrder, err := fswap.Route(pairs, InputAssetID, OutputAssetID, InputAmount)
if err != nil {
    return err
}

// 你可以通过 Order.RouteAssets 读取最佳路径, 会返回一个包含asset_id的数组
log.Printf("Route: %v", preOrder.RouteAssets)
log.Printf("Price: %v", preOrder.FillAmount.Div(InputAmount))
...
```

````mdx-code-block
:::info
如果你不使用4swap SDK, 你可以实现你自己最好的路由算法([Golang版本](https://github.com/fox-one/4swap-sdk-go/blob/master/route.go), [javascript 版本](https://github.com/fox-one/4swap-web/blob/develop/src/utils/pair/route.ts))。
:::
````

## 构造一个真实的交易

所有必需的订单信息都存储在交易memo中，格式为 JSON ：

```json
{
  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"
}
```

其中：

  - {receiver_id} 是 LP-Token 接受者的user id
  - {follow_id} 是用来跟踪转账记录的UUID
  - {fill_asset_id} 是您准备用于交换的资产的 ID
  - {routes} 是路由ID的序列，它表明您想使用哪个路由
  - {minimum} 是您期望得到的资产的最小数量

如果您正在使用 4swap SDK，您也可以使用方法 `mtg.SwapAction` 来简化过程：

```go
// 追踪订单
followID, _ := uuid.NewV4()

// 构建交换动作，指定参数
action := mtg。 wapAction(
    receiverID,
    followID.String(),
    OutputAssetID,
    preorder. outes,
    // 您将获得的资产的最低数量。
    // 您可能会希望将这个数值改成稍小于 preOrder.FillAmount 的数值
    preOrder.FillAmount.Div(decimal.NewFromFloat(0.005)),
)

// 生成 memo
memo, err := action.Encode(group.PublicKey)
if err != nil {
    return err
}
log.Println("memo", memo)
...

```

## 用程序下订单

如果你想要机器人下订单，请从机器人发送多签交易。

这是套利机器人的常见使用场景。 请确保在机器人的钱包中有足够数量的加密货币。

我们需要使用 [mixin-sdk-go](https://github.com/fox-one/mixin-sdk-go) 客户端来创建和发送交易到内核节点。

```go
// 将交易发送到由 `OpponentMultisig` 指定的多签地址 
// OpponentMultisig.Receivers 都是 MTG Group 的成员
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
