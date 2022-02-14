---
title: MTG情報を読み取る
date: 2021年9月30日23時18分01秒
---

輸入 { APIMetaPanel、 APIRequest、 APIEndpoint、 APIParams、 APIPayload、 } from "@ site / src / components / api";

## 取得 /情報

この API は 4swap と Lake に関する MTG 情報を提供します。

````mdx-code-block
：：：情報
MTG情報は頻繁に変更されないため、応答を保存して後で使用することができます。
:::
````

<APIEndpoint base="https://api.4swap.org/api" url="/info" />

<APIMetaPanel />

<APIRequest title="MTG情報を読み取る" method="GET" isPublic base="https://api.4swap.org/api" url='/info' />


**応答**

```json
{{
   "ts"：1627697766645、
   "データ"： {
     // MTGメンバーのユーザーID
     「メンバー」：[
       "a753e0eb-3010-4c4a-a7b2-a7bda4063f62"、
       "099627f8-4031-42e3-a846-006ee598c56e"、
       "aefbfd62-727d-4424-89db-ae41f75d2e04"、
       "d68ca71f-0e2c-458a-bb9c-1d6c2eed2497"、
       "e4bc0740-f8fe-418c-ae1b-32d9926f5863"
     ]、
     "public_key"： "dt351xp3KjNlVCMqBYUeUSF45upCEiReSZAqcjcP / Lc ="、
     //マルチシグしきい値
     「しきい値」：3
   }
}
```