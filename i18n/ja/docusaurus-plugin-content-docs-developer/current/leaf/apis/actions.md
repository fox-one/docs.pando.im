---
title: アクションの作成
date: 2021年10月01日　23時18分1秒
---

輸入 { APIMetaPanel、 APIRequest、 APIEndpoint、 APIParams、 APIPayload、 } from "@ site / src / components / api";

## アクションを作成する

### POST /アクション

パラメータを使用してアクションを作成します。

<APIEndpoint base="https://leaf-api.pando.im/api" url="/actions" />

<APIMetaPanel/><APIPayload>{`
{{ //支払い金額、オプション 「金額」：「1.014」、 //支払い資産ID、オプション "asset_id"： "c6d0c728-2624-429b-8e0d-d9d19b6592fa"、 //トランザクションをトレースするuuid "follow_id"： "17d836d0-8b15-4cba-91d4-d343ed0ad737"、 //アクションパラメータ（文字列配列） //新しいボールトを開きます： // [ // "31"、 // "d0ec4cc7-edf6-5359-bf23-41fc9d26444e"、//担保ID // "100" //生成されたpUSDの量 //] //担保を保管庫に預けます： // [ // "32"、 // "b829e5f4-b452-4521-a0eb-ad65588ae91a" //ボールトID //] //担保をボールトから引き出します： // [ // "33"、 // "b829e5f4-b452-4521-a0eb-ad65588ae91a"、//ボールトID // "0.23" //引き出される担保の金額 //] //回収pUSD： // [ // "34"、 // "b829e5f4-b452-4521-a0eb-ad65588ae91a" //ボールトID //] //より多くのpUSDを生成します： // [ // "35"、 // "b829e5f4-b452-4521-a0eb-ad65588ae91a"、//ボールトID // "100" //生成されたpUSDの量 //] //オークションに入札します： // [ // "42"、 // "870c9719-0677-415f-981f-685546175e14"、//オークションID // "0.2" //必要な担保の量 //] "パラメータ"：["文字列"] } ` }</APIPayload>

<APIRequest title="アクションを作成する" method="POST" base="https://leaf-api.pando.im/api" url='/actions' data="--data PAYLOAD" />

```json title="Response"
{{
   //コードとコードURL。
  // MessengerやFennecなどのMixinNetwork互換ウォレットを呼び出すために使用できます。  "コード"： "文字列"、
   "code_url"： "文字列"、
   「メモ」：「文字列」
}
```
