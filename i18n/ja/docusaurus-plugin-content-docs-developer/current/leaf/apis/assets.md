---
title: 資産を読む
date: 2021年9月30日23時18分01秒
---

輸入 { APIMetaPanel、 APIRequest、 APIEndpoint、 APIParams、 APIPayload、 } from "@ site / src / components / api";

## すべてのアセットを読む

### 取得/資産

この API はサポートされているすべての暗号資産に対応します。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/assets" />

<APIMetaPanel />

<APIRequest title="サポートされている資産を読み取る" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/assets' />

```json title="Response"
{{
   "ts"：1633110638578、
   "データ"： {
     「資産」：[
       {{
         "id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
         "名前"： "ビットコイン"、
         「シンボル」：「BTC」、
         "ロゴ"： "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128"
         "chain_id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
         "鎖"： {
           "id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
           "名前"： "ビットコイン"、
           「シンボル」：「BTC」、
           "ロゴ"： "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128"
           "chain_id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
           「チェーン」：null、
           「価格」：「47640」
         }、
         「価格」：「47640」
       }、
      // ...
    ]
  }
}
```

## 単一資産の読み取り

### 取得 /資産/:資産_id

このAPIは、1つの暗号資産を`:asset_id `で応答します

<APIEndpoint base="https://leaf-api.pando.im/api" url="/assets/:asset_id" />

<APIMetaPanel />

<APIParams p-asset_id="the asset id" p-asset_id-required="{true}" />

<APIRequest title="単一のアセットを読む" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/assets/c6d0c728-2624-429b-8e0d-d9d19b6592fa' />

```json title="Response"
{{
   "ts"：1633110638578、
   "データ"： {
     「資産」：[
       {{
         "id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
         "名前"： "ビットコイン"、
         「シンボル」：「BTC」、
         "ロゴ"： "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128"
         "chain_id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
         "鎖"： {
           "id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
           "名前"： "ビットコイン"、
           「シンボル」：「BTC」、
           "ロゴ"： "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128"
           "chain_id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、
           「チェーン」：null、
           「価格」：「47640」
         }、
         「価格」：「47640」
       }、
      // ...
    ]
  }
}
```
