---
title: 資産を読み取る
date: 2021年9月30日23時18分01秒
---

輸入 { APIMetaPanel、 APIRequest、 APIEndpoint、 APIParams、 APIPayload、 } from "@ site / src / components / api";

## 取得/資産

この API はサポートされているすべての暗号資産に応答します。

<APIEndpoint base="https://api.4swap.org/api" url="/assets" />

<APIMetaPanel />

<APIRequest title="サポートされている資産を読み取る" method="GET" isPublic base="https://api.4swap.org/api" url='/assets' />

```json title="Response"
{{
   "ts"：1627697766503、
   "データ"： {
     「資産」：[
       {アセットエンティティ}、
       {アセットエンティティ}、
       ..。
    ]
  }
}
```