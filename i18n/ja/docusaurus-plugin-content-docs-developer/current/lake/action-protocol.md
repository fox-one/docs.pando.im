---
title: アクションプロトコル
date: 2021年7月31日11時18分01秒
---

4swapとLakeはMTGアプリケーションであり、MixinNetworkから<ahref = "https://developers.mixin.one/document/wallet/api/multisigs/tutorial">マルチシグトランザクション</a>を読み取ります。

4swap または Lakeに転送するには、開発者がマルチシグ転送を作成する必要があります。

4swap と Lake は、各トランザクションの動作を示すために、 **Action Protocol** を設計します。 Action ProtocolはJSONベースのプロトコルで、暗号化されたメモを使用して命令とパラメータを保存します。

## アクションを生成する

アクションを生成するには2つのアプローチがあります。

**SDKの使用 **

[ 4swap SDK ](https://github.com/fox-one/4swap-sdk-go)を使用している場合は、SDKのメソッドを使用してプロセスを簡素化できます。  次の例は、` mtg.SwapAction </ code>によってスワップアクションを生成する方法を示しています。 </p>

<pre><code class="go">//注文を追跡するID
followID、_：= uuid.NewV4（）

//スワップアクションを作成し、パラメータを指定します
アクション：= mtg.SwapAction（
     レシーバーID、
     followID.String（）、
     OutputAssetID、
     preOrder.Routes、
     //取得するアセットの最小量。 
    //この値をpreOrder.FillAmount未満の数値に変更したい場合があります
     preOrder.FillAmount.Div（decimal.NewFromFloat（0.005））、
）。

//メモを生成します
メモ、エラー：= action.Encode（group.PublicKey）
err！= nil {の場合
     エラーを返す
}
log.Println（ "メモ"、メモ） 
`</pre>

**APIの使用**

API [ "/ api / statement" ](./apis/actions)を呼び出して、ウォレットサービスを直接呼び出すために使用できる署名付き転送リクエストを取得します。

SDKのアプローチよりも時間がかかりますが、アクションを生成して自分で署名する必要はありません。

## 仕様

### 流動性を追加する

既存のペアに流動性を追加する場合は、ペア内のこれら2つの資産を4swapのメインネットアドレスに送信する必要があります。

転送ごとに、次の形式でメモを作成する必要があります。

```json
{
  "action": "1,{receiver_id},{follow_id},{asset_id},{slippage},{timeout}"
}
```

その中で、

- `{receiver_id}` は、LPトークンを受け取るユーザーのIDです
- `{follow_id}`は転送をトレースするためのUUIDであり、`UUID.v4()` を使用して転送を作成できます
- `{asset_id}` は、入金するペアの反対側の資産の ID です。 流動性をコードする<ahref = "https://app.4swap.org/#/pair-info?base=43d61dcd-e413-450d-80b8-101d5e903357&quote=c6d0c728-2624-429b-8e0d -d9d19b6592fa "> ETH / BTCペア</a>、` BTC </ code>と<code> c6d0c728-を支払うと、アセットIDは<code> 43d61dcd-e413-450d-80b8-101d5e903357 </ code>になります それ以外の場合は、2624-429b-8e0d-d9d19b6592fa </ code>。</li>
<li><code>{slippage}` はスリップページの比率です。例: 0.001 = 0.1%。 市場が不安定なときに小さなスリッページ値を指定すると失敗する可能性があります
- `{timeout}` は秒単位のタイムアウトです。 2つの転送を時間内に完了しなかった場合、暗号は `timeout`で返金されます。

2つの転送がタイムアウト前に4swapまたはLakeによって処理された場合、メモ `receiver_id` で指定したユーザーは、このペアのいくつかのLPトークンを受け取ります。


### 流動性を取り除く

ペアの流動性を削除する場合は、LPトークンを4swap のメインネットアドレスに転送する必要があります。 そのメモは次のような形式である必要があります。

```json
{{
   "アクション"： "2、{receiver_id}、{follow_id}"
}
```

その中で、

- `{receiver_id}` は、暗号を受け取るユーザーのIDです
- `{follow_id}` は、転送を追跡する UUID です

転送が処理された場合、メモ `receiver_id` で指定したユーザーは、同等の暗号資産を受け取ります。

### 暗号通貨を交換する

ある暗号通貨を別の暗号通貨に交換する場合は、提供する暗号通貨を4swapのメインネットアドレスに転送する必要があります。 転送メモは次のような形式にする必要があります。

```json
{
  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"
}
```

その中で、

- `{receiver_id}` は、LPトークンを受け取るユーザーのIDです
- `{follow_id}` は、転送を追跡するためのUUIDです
- `{fill_asset_id}` は、交換に使用する資産のIDです
- `{routes}` は、使用するルートを示すルートIDのシーケンスです。
- `{minimum}`は、取得する資産の最小値です。

4swapまたはLakeが最小の宛先暗号を取得できない場合、スワッピングは中止され、メインネットアドレスに送信した暗号は返金されます。

## 4swapまたはLake転送メモの解析

> 転送メモはbase64でデコードされたjson文字列です

```json5

{
   "s"： "4swapTrade | 4swapRefund"、// 4swapTrade：スワップ成功、4swapRefund：スワップ失敗
   "t"： "bf0c984d-7f8a-424e-bddd-473fcf5f7020"、// IDをフォロー
} 
```
