---
title: 技术设计
date: 2021-07-12 23:33:07
---

# Pando Leaf 设计文档

## 与 Pando 交互

Pando 的所有参与者通过将token发送到多签钱包来完成交互。 节点 Worker 中的 **Syncer** 将所有付款同步为 mixin 多签输出；另有一个 Woker **Payee** 按顺序处理所有输出。

![Pando Leaf 设计](design/mtg_design.png)

### Mixin 多签输出

**输出:**

| 字段      | 描述          |
| ------- | ----------- |
| Sender  | 用户 mixin id |
| 创建      | 付款时间        |
| AssetID | 付款资产ID      |
| Amount  | 付款金额        |
| Memo    | 附加消息        |

**输出Memo：**

Memo 包含 **TransactionAction** 信息，详情见 [DecodeTransactionAction](https://github.com/fox-one/pando/blob/main/core/action.go)。

Memo可能是AES加密的，一个用于复合AESkey/iv的ed25519公钥将出现在 Memo 的前32字节。

### TransactionAction 定义

| 字段       | 描述                            | 类型    |
| -------- | ----------------------------- | ----- |
| FollowID | 用户为此 transaction 定义的 trace id | uuid  |
| Body     | 操作类型 & 相关参数                   | bytes |

## Workers

1. **Syncer** 通过 Mixin Messenger API 同步未处理的utxo& 作为 **Outputs** 存储到 WalletStore 按更新的asc顺序。
2. **Payee** 按顺序从钱包商店拉取未处理的utxo，然后解析备忘录以获取操作，然后处理它。 转账可能会在处理过程中被创建。
3. **Assigner** 选择足够的未使用的 UTXO 并分配到未处理的转账。
4. **Cashier** 按顺序从钱包商店提取未处理的转账，然后请求& 签署多方签名转账。 如果收集到足够的签名，则生成一个新的交易。
5. **TxSender**将新的交易提交到Mixin网络。

### Syncer 工作流程

![Syncer 工作流程](design/pando-syncer.png)

### Payee 工作流程

![Payee 工作流程](design/pando-payee.png)

### Assigner & Cashier & TxSender 工作流程

![Assigner & Cashier 工作流程](design/pando-cashier.png)

## 操作

Pando 支持的所有带有cat、flip、oracle、proposal、sys和vat的操作。 详情见 [core/action](https://github.com/fox-one/pando/blob/main/core/action.go)。

### Sys - 系统操作

#### #1 提现

> pkg/maker/sys/withdraw.go

从多签钱包中提取任何资产，需要发起提案。

**参数:**

| 名称       | 类型   | 描述            |
| -------- | ---- | ------------- |
| 资产       | uuid | 提取资产ID        |
| 数量       | uuid | 提现数量          |
| opponent | uuid | 接收者的 mixin id |

### 提案 - 治理系统

#### #11 Make

> pkg/maker/proposal/make.go

创建一个新的提案

**参数:**

| 名称   | 类型    | 描述               |
| ---- | ----- | ---------------- |
| data | bytes | 动作类型& 如果参数传入将被执行 |

#### #12 Shout

> pkg/maker/proposal/shout.go

请求节点管理员为此提案投票

**参数:**

| 名称 | 类型   | 描述     |
| -- | ---- | ------ |
| id | uuid | 提案追踪ID |

#### #13 投票

> pkg/maker/proposal/vote.go

仅节点可以投票支持提案。 如果收集了足够的选票，附加操作将自动在所有节点上执行。

**参数:**

| 名称 | 类型   | 描述     |
| -- | ---- | ------ |
| id | uuid | 提案追踪ID |

### Cat - 管理者抵押物

#### #21 创建

> pkg/maker/cat/create.go

创建一个新的抵押类型，需要提案。

**参数:**

| 名称   | 类型     | 描述     |
| ---- | ------ | ------ |
| gem  | uuid   | 抵押资产ID |
| dai  | uuid   | 债务资产ID |
| name | string | 抵押品类名称 |

#### #22 供应

> pkg/maker/cat/supply.go

供应dai币以增加这种抵押品类的总债务上限。 付款资产ID必须等于债务资产ID。

**参数:**

| 名称 | 类型   | 描述       |
| -- | ---- | -------- |
| id | uuid | 抵押资产追踪ID |

#### #23 编辑

> pkg/maker/cat/edit.go

如果需要修改抵押资产的一个或多个属性，必须进行提案。

**参数:**

| 名称    | 类型     | 描述       |
| ----- | ------ | -------- |
| id    | uuid   | 抵押资产追踪ID |
| key   | string | 属性名称     |
| value | string | 属性值      |

#### #24 Fold

> pkg/maker/cat/fold.go

修改债务乘数(利率)，创建/销毁相应的债务。

**参数:**

| 名称 | 类型   | 描述       |
| -- | ---- | -------- |
| id | uuid | 抵押资产追踪ID |

### Vat - 管理者金库

#### #31 打开

> pkg/maker/vat/open.go

用某特定抵押资产新建一个金库

**参数:**

| 名称   | 类型      | 描述      |
| ---- | ------- | ------- |
| id   | uuid    | 抵押品追踪ID |
| debt | decimal | 初始借款    |

#### #32 存入

> pkg/maker/vat/deposit.go

将抵押品加入保险库。

**参数:**

| 名称 | 类型   | 描述     |
| -- | ---- | ------ |
| id | uuid | 金库追踪ID |

#### #33 提取

> pkg/maker/vat/withdraw.go

从金库取出抵押品，仅金库拥有者可用。

**参数:**

| 名称   | 类型      | 描述     |
| ---- | ------- | ------ |
| id   | uuid    | 金库追踪ID |
| dink | decimal | 更改抵押物  |

#### #34 还款

> pkg/maker/vat/payback.go

减少金库债务。

**参数:**

| 名称 | 类型   | 描述     |
| -- | ---- | ------ |
| id | uuid | 金库追踪ID |

#### #35 铸币

> pkg/maker/vat/generate.go

增加金库债务，仅金库拥有者可用。

**参数:**

| 名称   | 类型      | 描述     |
| ---- | ------- | ------ |
| id   | uuid    | 金库追踪ID |
| debt | decimal | 债务变化   |

### 拍卖 - 管理者拍卖

#### #41 Kick

> pkg/maker/flip/kick.go

对爆仓金库中放置的抵押品进行拍卖。

**参数:**

| 名称 | 类型   | 描述     |
| -- | ---- | ------ |
| id | uuid | 金库追踪ID |

#### #42 Bid

> pkg/maker/flip/bid.go

支付dai参与拍卖

> 从招标阶段开始，投标人们通过不断增加dai的投标金额竞争一定数量的Gem。 一旦Dai的数量增加，拍卖将进入dent阶段。 倾向阶段的重点是提高dai来偿还系统债务。 在dent阶段，竞标者竞相减少对固定数量Dai竞价的Gem数量。 丧失的Gem会被退回到已清算的金库，让所有者提取。 Dent阶段的重点是在市场允许的情况下将尽可能多的抵押品退还给金库所有者。

**参数:**

| 名称  | 类型      | 描述     |
| --- | ------- | ------ |
| id  | uuid    | 拍卖追踪ID |
| lot | decimal | 抵押数量   |

#### #43 交易

> pkg/maker/flip/deal.go

认领中标/完成拍卖

**参数:**

| 名称 | 类型   | 描述     |
| -- | ---- | ------ |
| id | uuid | 拍卖追踪ID |

### Oracle - manager price oracle

#### #51 创建

> pkg/maker/oracle/create.go

为资产注册一个新的oracle必须提案。

**参数:**

| 名称    | 类型      | 描述                    |
| ----- | ------- | --------------------- |
| id    | uuid    | 资产 Id                 |
| price | decimal | 初始价格                  |
| hop   | int64   | poke calls之间时间有数秒的延迟。 |
| 阀值    | int64   | poke时需要的统治者数量。        |
| ts    | 时间戳     | 请求的时间戳                |

#### #52 编辑

> pkg/maker/oracle/edit.go

修改某一oracle的下一个价格，hop& 阈值，需要提案。

**参数:**

| 名称 | 类型     | 描述    |
| -- | ------ | ----- |
| id | uuid   | 资产 id |
| 密钥 | string | 属性名称  |
| 值  | string | 属性值   |

#### #53 点数

> pkg/maker/oracle/poke.go

更新当前提要值，并排队等待下一个提要值。

**参数:**

| 名称 | 类型   | 描述      |
| -- | ---- | ------- |
| id | uuid | 资产 Id   |
| 价格 | 小数   | 下一个新的价格 |
| ts | 时间戳  | 请求时间戳   |

#### #54 Rely

> pkg/maker/oracle/rely.go

在白名单中添加新的价格提要，需要提案

**参数:**

| 名称  | 类型   | 描述         |
| --- | ---- | ---------- |
| id  | uuid | 提要mixin id |
| key | 字节   | 公钥         |

#### #55 Deny

> pkg/maker/oracle/deny.go

从白名单中删去一个价格源，需要提案。

**参数:**

| 名称 | 类型   | 描述            |
| -- | ---- | ------------- |
| id | uuid | feed mixin id |
