---
title: SDKを利用した取引
date: 2021年7月22日22時33分7秒
---

デフォルトで、Pando Lake は 4swap を流動性プロバイダーとして使用しています。 そのためPando Lakeでは4swapのSDKを利用して資産を交換するのが簡単です。

## 4swap SDK をプロジェクトにインポートする

```go
輸入 （
     fswap "github.com/fox-one/4swap-sdk-go"
     mtg "github.com/fox-one/4swap-sdk-go/mtg"
     「github.com/fox-one/mixin-sdk-go」
     "github.com/shopspring/decimal"
）。
```

## マルチシググループ情報を取得する

Pando Lakeで暗号資産の交換や流動性の追加、削除などの操作を実行する際には、 マルチシグ取引を作成し、Mixin Networkとやり取りする必要があります。

各マルチシグの参加者はMTGのメンバーでもあります。 なので最初に一度目を通し、後の利用に備え保存しておいてください。

```go
// 4swapのMTGAPIエンドポイントを使用します
fswap.UseEndpoint（fswap.MtgEndpoint）

// mtgグループを読み取ります
//グループ情報は頻繁に変更されます
//後で使用するために保存することをお勧めします
グループ、エラー：= fswap.ReadGroup（ctx）
err！= nil {の場合
     エラーを返す
}
..。 
```

## 取引可能なペアをすべて取得する

サポートされている全アセットペアの取得は簡単に行えます:

```go
ペア、エラー：= fswap.ListPairs（ctx）
err！= nil {の場合
     エラーを返す
}
..。 
```

## 取引に最適なルートを計算する

暗号資産を交換する前に、スワッピングルートを指定する必要があります。

現時点ではLakeがルートを決定していますが、その場合パフォーマンスの問題が発生し、ボットの速度が低下する可能性があります。 そのため、自身で交換ルートを計算することをお勧めします。

ルートの計算は簡単です。 流動生に基づきペアのソートを行い、`Route`か`ReverseRoute`メソッドを呼び出すと、計算結果を含んだ`order`オブジェクトが返されます。

```go
//最初に並べ替え
sort.Slice（pairs、func（i、j int）bool {
     aLiquidity：= pair [i] .BaseValue.Add（pairs [i] .QuoteValue）
     bLiquidity：= pair [j] .BaseValue.Add（pairs [j] .QuoteValue）
     aLiquidity.GreaterThan（bLiquidity）を返します
}）

//ルートを計算します
// InputAssetID-支払いたいアセットのID
// OutputAssetID-取引するアセットのID
// InputAmount-ルートを計算する量（例：1000）
preOrder、err：= fswap.Route（pairs、InputAssetID、OutputAssetID、InputAmount）
err！= nil {の場合
     エラーを返す
}

// asset_idの配列であるOrder.RouteAssetsから最適なルートを読み取ることができます
log.Printf（ "ルート：％v"、preOrder.RouteAssets）
log.Printf（ "価格：％v"、preOrder.FillAmount.Div（InputAmount））
..。 
```

````mdx-code-block
：：：情報
4swap SDKを使用しない場合は、独自の最適ルートアルゴリズムを実装できます（[golangバージョン]（https://github.com/fox-one/4swap-sdk-go/blob/master/route.go）、 [javascriptバージョン]（https://github.com/fox-one/4swap-web/blob/develop/src/utils/pair/route.ts））。 
:::
````

## 実際の注文を作成する

注文に関する必要な情報の全てが、JSON 形式でトランザクションメモに保存されています:

```json
{
  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"
}
```

その中身には、

  - {receiver_id} はLPトークンを受け取るユーザーのIDです
  - {follow_id} は送金を追跡するためのUUIDです
  - {fill_asset_id} は、交換に使用する暗号資産のIDです
  - {routes} はルートIDのシーケンスで、どのルートを使用するかを示します。
  - {minimum} は、受け取る暗号資産の最小額を示します

4swap SDK を使用している場合は、メソッド `mtg.SwapAction` を使用してプロセスを簡素化することもできます。

```go
//注文を追跡するID
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
..。 

```

## プログラムで注文する

ボットに注文をさせたい場合は、ボットからマルチシグトランザクションを送信してください。

これは裁定ボットで一般的に利用される手段です。 ボットのウォレットに、十分な暗号資産があることを確認してください。

トランザクションを作成し、それをカーネルノードに送信するために、[mixin-sdk-go](https://github.com/fox-one/mixin-sdk-go) クライアントを使用する必要があります。

```go
// `OpponentMultisig`で指定されたマルチサインアドレスにトランザクションを送信します
//OpponentMultisig.ReceiversはMTGグループのメンバーです
tx、err：= client.Transaction（ctx、＆amp; mixin.TransferInput {
     AssetID：payAssetID、
     金額：decimal.RequireFromString（amount）、
     TraceID：mixin.RandomTraceID（）、
     メモ：メモ、
     OpponentMultisig：struct {
         レシーバー[]文字列 `json："レシーバー、omitempty "`
         しきい値uint8`json： "threshold、omitempty" `
     } {
         受信者：group.Members、
         しきい値：uint8（group.Threshold）、
     }、
}、* pin） 
```
