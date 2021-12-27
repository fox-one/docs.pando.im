---
title: 操作协议
date: 2021-07-31 11:18:01
---

4swap 和 Lake 是MTG 应用程序，从 Mixin 网络读取 [多重签名交易](https://developers.mixin.one/document/wallet/api/multisigs/tutorial)。

要发送转账到 4swap 或 Lake，开发人员必须创建多签转账。

4swap 和 Lake 设计了 **操作协议 (Action Protocol)** 来阐述每次交易的行为。 操作协议是基于 JSON 的协议，它使用加密memo来存储指令和参数。

## 生成操作

有两种办法来生成操作。

**使用 SDK**

如果您正在使用 [4swap SDK](https://github.com/fox-one/4swap-sdk-go)，您可以使用 SDK 的方法来简化过程。 下面的示例展示了如何由  `mtg.SwapAction` 生成一个 Swap 操作。

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
)
```

**使用 API**

调用 API ["/api/actions"](./apis/actions) 来获取签名传输请求，该请求可以让您直接调用钱包提供的服务。

这将比SDK方法慢，但你不需要自己发起行动(generate actions)并签名。

## 规范

### 添加流动性

当您要添加流动性到现有的交易对时， 您需要将这两种资产分两次转账发送给4swap的Mainnet地址。

对于每次转账，memo应以以下形式构造：

```json
{
  "action": "1,{receiver_id},{follow_id},{asset_id},{slippage},{timeout}"
}
```

其中：

- `{receiver_id}` 是 LP-Token 接受者的user id
- `{follow_id}` 是用来追踪转账的 UUID ，您可以使用 `UUID.v4()` 来创建一个
- `{asset_id}` 是您将要存入的对应资产 ID。 例如，如果您要将流动性添加到 [ETH/BTC 交易对](https://app.4swap.org/#/pair-info?base=43d61dcd-e413-450d-80b8-101d5e903357&quote=c6d0c728-2624-429b-8e0d-d9d19b6592fa)， asset_id就是 `43d61dcd-e413-450d-80b8-101d5e903357`，当您付款 `BTC`时， 对应asset_id就是 `c6d0c728-2224-429b-8e0d-9d19b6592fa`
- `{slippage}` 是滑点的比率，例如：0.001 = 0.1%。 如果当市场发生变动时，指定了一个小的滑点值可能会导致失败
- `{timeout}` 是以秒为单位的超时。 如果您没有及时完成这两笔转账，资产将在 `timeout`时间退还给您。

如果这两项转账在超时之前成功由4swap或Lake处理， 您在 memo的`receiver_id` 中指定的用户将收到此对应的 LP-Token。


### 移除流动性

当您要移除对应的流动性时，您需要将LP-Token转账到4swap的Mainnet地址。 它的Memo应采取这样的形式：

```json
{
  "action": "2,{receiver_id},{follow_id}"
}
```

其中：

- `{receiver_id}` 是返回资产接受者的user id
- `{follow_id}` 是用来跟踪转账记录的UUID

如果转账已被处理，您在 memo的`receiver_id` 中指定的用户将收到等量的加密资产。

### Swap 交换加密货币

当你要交换一个资产到另一个资产时。 您需要将您打算提供的资产转账给4swap的Mainnet地址。 它的Memo应采取这样的形式：

```json
{
  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"
}
```

其中：

- `{receiver_id}` 是 LP-Token 接受者的user id
- `{follow_id}` 是用来跟踪转账记录的UUID
- `{fill_asset_id}` 是您准备用于交换的资产的 ID
- `{routes}` 是路由ID的序列，它表明您想使用哪个路由
- `{minimum}` 是您期望得到的资产的最小数量

如果4swap 或 Lake 无法取得最小数量的目标资产， 交换将被中止，您发送到Mainnet地址的资产将被退款。

## 解析 4swap 或 Lake 的转账 memo

> 转账Memo是一个 base64 解码的 json 字符串

```json5
{
  "s": "4swapTrade|4swapRefund", // 4swapTrade: swap Successful, 4swapRefund: swap failed
  "t": "bf0c984d-7f8a-424e-bddd-473fcf5f7020", // follow id
}
```
