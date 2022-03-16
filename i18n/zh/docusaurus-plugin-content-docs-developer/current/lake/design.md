---
title: 设计
date: 2021-07-31 14:38:07
---

## 4swap 设计文档

> Pando Lake 是在Uniswap V2 在 Mixin网络上的实现

Pando Lake是由恒定产量公式驱动的自动化流动性协议，部署在[Mixin Trusted Group](https://developers.mixin.one/docs/mainnet/mtg/overview)。 它消除了对单一 Mixin Dapp 的需求，优先考虑去中心化、审查阻力和安全性。

任何人都可以通过存入每个等值价值的基础代币来换取矿池代币，从而成为矿池的流动性提供者 (LP)。 这些代币按比例跟踪总储备中的 LP 份额，并且可以随时赎回相关资产。

交易对充当自动化做市商，并在保留“恒定乘积”公式的前提下，随时准备接受一种代币兑换另一种代币。 这个公式，最简单的表示为 **x * y = k**，规定交易不得改变一对准备金余额（x 和 y）的他们的乘积 (k)。 因为 k 相对于交易的参考系保持不变，所以它通常被称为不变量。 这个公式有一个理想的特性，即较大额的交易（相对于储备）的执行速度比较小额的交易要差得多。

> 用于稳定币池（如 USDT/USDC）的修改后的[Curve](https://curve.fi)公式。

## 与 4swap 交互

4swap的所有参与者通过将代币转移到多签钱包来完成交互。 节点 Worker 中的 **Syncer** 将所有付款同步为 mixin 多签输出；另有一个 Woker **Payee** 按顺序处理所有输出。

![MTG 设计](assets/mtg_design.png)

### Mixin 多签输出

**输出:**

| 字段      | 描述     |
| ------- | ------ |
| 创建      | 付款时间   |
| AssetID | 付款资产ID |
| Amount  | 付款金额   |
| Memo    | 附加消息   |

**输出Memo：**

**备忘录**包含 **交易操作**信息。

备忘录是AES加密的，一个用于复合AES 密钥/iv的ed25519公钥将出现在前32个字节。

### TransactionAction 定义

| 字段       | 描述                            | 类型    |
| -------- | ----------------------------- | ----- |
| 操作       | 交换、 存款或取款                     | 数量    |
| 用户ID     | 用于接收的 mixin id                | uuid  |
| FollowID | 用户为此 transaction 定义的 trace id | uuid  |
| 参数       | 相关参数                          | bytes |

## Workers

1. **Syncer**通过mixin messenger api & 同步未处理的 utxo；作为**输出**按照创建的asc顺序存储到WalletStore。
2. **Payee** 按顺序从钱包商店拉取未处理的utxo，然后解析备忘录以获取操作，然后处理它。 转账可能会在处理过程中被创建。
3. **Assigner** 选择足够的未使用的 UTXO 并分配到未处理的转账。
4. **Cashier** 按顺序从钱包商店提取未处理的转账，然后请求& 签署多方签名转账。 如果收集到足够的签名，则生成一个新的交易。
5. **TxSender**将新的交易提交到Mixin网络。

### Syncer 工作流程

![Syncer 工作流程](assets/pando-syncer.png)

### Payee 工作流程

![Payee 工作流程](assets/pando-payee.png)

### Assigner & Cashier & TxSender 工作流程

![Assigner & Cashier 工作流程](assets/pando-cashier.png)

## 操作

### 存入

每个 Pando Lake 流动性池都是一对 Mixin Mainnet 代币的交易场所。 治理者创建矿池时，其每个代币的余额为0； 为了让矿池开始促进交易，必须有人存入每个代币的初始存款作为种子。 第一个流动性提供者是设定流动池初始价格的人。

第一个流动性提供者将收到的流动性代币数量将等于 `sqrt(x*y)`，其中 x 和 y 代表提供的每个代币的数量。 对于之后的提供者，数字将为 `min(x/reserve_x,y/reserve_y)*liquidity_shares`。

**参数:**

| 名称      | 类型      | 描述         |
| ------- | ------- | ---------- |
| AssetID | uuid    | 对方的资产ID    |
| 滑点      | decimal | 允许的最大滑点    |
| 过期      | int64   | 存款超时，以秒为单位 |

### Swap

从常数乘积公式可以得出，代币 A 的价格就是 price_token_A = reserve_token_B / reserve_token_A。 市场价格只会随着池中代币比率的变化而变化，当有人与它进行交易时就会发生这种情况。

交换规则是常数乘积公式。 当任一代币被提取时，必须按比例存入另一个代币，以使常数 (`k`) 保持不变。

Pando Lake 对交易收取 0.3% 的费用（稳定币池为 0.04%），将其添加到准备金中以增加 `k` ，实际上作为对流动性提供者的支付。

**参数:**

| 名称      | 类型      | 描述            |
| ------- | ------- | ------------- |
| AssetID | uuid    | 目标资产ID        |
| 路径      | string  | 交换路径          |
| 最小      | decimal | 可接受的最低金额，否则退款 |

### 取回

为了恢复基础流动性，加上所有应计费用，流动性提供者必须返还他们的流动性代币，才能有效地将它们交换为他们在流动性池中的部分，包括按比例分配的手续费费用。

返回的代币数量将会是 `lp_token/liquidity_shares*reserve_x` 和 `lp_token/liquidity_shares*reserve_y`。
