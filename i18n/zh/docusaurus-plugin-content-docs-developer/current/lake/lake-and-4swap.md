---
title: 比较 Lake 和 4swap
date: 2021-07-31 15:44:07
---

**4swap** 是一种开放协议，为 Mixin MTG组提供去中心化流动性和交换服务的基础。

## 4swap

**4swap Broker** 是用户与 4swap 协议交互的接口。

默认broker是 4swap Mixin Messenger bot（ID：7000103537）。 如果您未在请求中指定broker ID，则有关资产种类、交易对、市场数据、订单数据都将由该broker响应。

您可以通过访问 https://4swap.org 访问该broker的 Web 界面。

## Pando Lake

**Pando Lake** 是由 Pando 托管的 4swap broker。

Pando Lake 过滤市场信息，以仅显示具有良好流动性并有可靠社区支持的交易对和市场。

Pando Lake 有一个单独的 Mixin Messenger bot（id：7000103937），您也可以通过访问 https://lake.pando.im 访问其 Web 界面。

LP Token在 Pando Lake 和 4swap 之间共享。

### 与 Pando Lake 整合

Pando Lake的broker id为`5dbdb169-d56d-4b5b-b066-9b0780691b14`，通常用于请求中。

**授权到 Lake**

调用`POST /api/oauth`对钱包进行授权时，必须指定两个参数`broker_id`和`label`，其中`label` 应该是一个字符串“lake”。

**其他 API**

参数 `broker_id` 应附加到以下 API 请求的查询或载荷中：

- POST /api/actions，它会生成一个可以发送到 Pando Lake 的转账。
- GET /api/pairs，它将以 `whitelists` 字段响应，其中包含 Pando Lake 支持的资产 ID。


