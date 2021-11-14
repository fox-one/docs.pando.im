---
title: 创建操作
date: 2021-10-01 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

## 创建一个操作

### POST /actions

创建一个带参数的操作。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/actions" />

<APIMetaPanel scope="Authorized"/><APIPayload>{`
{ // 付款金额，可选 "amount": "1.014”, // 付款资产的asset id，可选 "asset_id": "c6d0c728-2624-429b-8e0d-9d19b6592fa", // 追踪交易的 UUID "follow_id": "17d836d0-8b15-4cba-91d4-d343ed0ad737", // 操作参数 (string array) // 创建新金库： // [ // "31", // "d0ec4cc7-edf6-5359-bf23-41fc9d26444e", // 抵押物 UUID // "100" // 要生成的pUSD数量 // ] // 将抵押品存入金库： // [ // "32", // "b829e5f4-b452-4521-a0eb-ad65588ae91a" // 金库 UUID // ] // 将抵押物从金库中取出： // [ // "33", // "b829e5f4-b452-4521-a0eb-ad65588ae91a", // 金库 UUID // "0.3" // 要提取的抵押物数量 // ] // 返还pUSD: // [ // "34", // "b829e5f4-b452-4521-a0eb-ad65588ae91a" // 金库 UUID // ] // 生成更多pUSD： // [ // "35”， // "b829e5f4-b452-4521-a0eb-ad65588ae91a", // 金库 UUID // "100" // 生成的pUSD数量 // ] // 拍卖投标： // [ // "42", // "870c9719-0677-415f-981f-685546175e14", // 拍卖物 UUID // "0.2 "// 想要的抵押品数量 // ] "parameters": ["string"] }` }</APIPayload>

<APIRequest title="创建一个操作" method="POST" base="https://leaf-api.pando.im/api" url='/actions' data="--data PAYLOAD" />

```json title="Response"
{
  // 操作code和操作url.
  // 它们可以被用来调用Mixin 网络兼容的钱包，如Messenger 和 Fennec。  "code": "string",
  "code_url": "string",
  "memo": "string"
}
```
