---
title: APIリファレンス
date: 2021年8月16日17時40分0秒
---

このドキュメントでは、パンドリングエンジンのRESTfulAPIおよびRPCインターフェイスの定義と使用法について説明します。

## 認証トークン

キーストアによるスコープ「FULL」で` GET https://api.mixin.one/me </ code>の認証トークンに署名します。</p>

<p spaces-before="0">詳細については、<ahref = "https://developers.mixin.one/docs/api/guide#signing">ミックスイン開発者向けドキュメント</a>にアクセスしてください。</p>

<h2 spaces-before="0">平穏なAPI</h2>

<h3 spaces-before="0">•すべての市場 </h3>

<p spaces-before="0">供給および借入が可能なすべての市場を返します。</p>

<p spaces-before="0"><strong x-id="1">HTTP</strong></p>

<pre><code>取得 /api/v1/市場/全て
`</pre>

**レスポンス**

```json
{
  "データ"： [
    {{
      "id"：1、
      "asset_id"： "4d8c508b-91c5-375b-92b0-ee702ed2dac5"、
      「記号」：「USDT」、
      "ctoken_asset_id"： "f8abf8be-2ead-3638-afa4-8a0b08872998"、
      "total_cash"： "334.7108376354365625"、
      "total_borrows"： "8.7389310703276705"、
      "予約"： "0.4136021855620769"、
      "ctokens"： "339.76830046"、
      "init_exchange_rate"： "1"、
      "reserve_factor"： "0.1"、
      "liquidation_incentive"： "0.05"、
      "borrow_cap"： "0"、
      "collat​​eral_factor"： "0.75"、
      "close_factor"： "0.5"、
      "base_rate"： "0.025"、
      「乗数」：「0.3」、
      "jump_multiplier"： "0"、
      「キンク」：「0」、
      "block_number"：1719179、
      "utilization_rate"： "0.0254752469950221"、
      "exchange_rate"： "1.0096179250853535"、
      "supply_rate_per_block"： "0.0000000003559835"、
      "borrow_rate_per_block"： "0.0000000155263385"、
      "価格"： "1.0002"、
      "price_updated_at"： "2021-08-17T11：14：49 + 08：00"、
      "borrow_index"： "0.0000000123582381"、
      「バージョン」：2230721、
      「ステータス」：1、
      "created_at"： "2020-12-18T17：37：07 + 08：00"、
      "updated_at"： "2021-08-17T11：14：50 + 08：00"、
      "supply_apy"： "0.0007484197104"、
      "borrow_apy"： "0.0326425740624"、
      「サプライヤー」：36、
      「借り手」：15
    }
  ]
} 
```

### •トランザクション

すべてのユーザートランザクションを時間単位で返します。

**HTTP**

```
取得 /api/v1/トランザクション?l制限 =10&オフセット=
```

**クエリパラメータ **

| カギ    | 種類 | des                                                           |
| ----- | -- | ------------------------------------------------------------- |
| 制限    | 列  | ページデータの上限は、デフォルトで500です。                                       |
| オフセット | 列  | ページネーションの開始時刻、RFC3339Nano形式、例： 2020-12-12T12：12：12.999999999Z |

**応答 **

```json
[
   {{
     「id」：28022、
     「アクション」：1、
     "trace_id"： "f88257ab-1eaa-3941-a1c7-3de547c301dc"、
     "user_id"： "3deb7492-fabd-4792-875e-a08a64391db4"、
     "follow_id"： "41dcd9d6-6653-4c2f-ba77-c241654c3abe"、
     "asset_id"： "4d8c508b-91c5-375b-92b0-ee702ed2dac5"、
     「金額」：「0.4」、
     "データ"： {
       "金額"： "0.39619513"、
       "ctoken_asset_id"： "f8abf8be-2ead-3638-afa4-8a0b08872998"
     }、
     "created_at"： "2021-08-10T12：01：27 + 08：00"、
     "updated_at"： "2021-08-10T12：01：27 + 08：00"
   }、
   {{
     「id」：28023、
     「アクション」：5、
     "trace_id"： "16bd7cb6-2db3-51d1-b9a2-82d77e598423"、
     "user_id"： "3deb7492-fabd-4792-875e-a08a64391db4"、
     "follow_id"： "41dcd9d6-6653-4c2f-ba77-c241654c3abe"、
     "snapshot_trace_id"： "ee4c355a-8fb2-3f39-9e16-b151bef4372a"、
     "asset_id"： "f8abf8be-2ead-3638-afa4-8a0b08872998"、
     "金額"： "0.39619513"、
     "データ"： {
       「原点」：0
     }、
     "created_at"： "2021-08-10T12：01：34 + 08：00"、
     "updated_at"： "2021-08-10T12：01：34 + 08：00"
   }
]
```

### •支払いを要求する

指定されたアクションおよびパラメーターデータに従って支払いURLを返します。

**HTTP**

```url
役職 /api/v1/支払い要求 
```

**積載量**

```json
{
  "メモ_base64": "AQIQU1BMqZkaQmWmkOzm4LfkFA==",
  "資産_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
  "金額": "0.01",
  "痕跡_id": "2996c597-db43-4294-982e-6791909c0271",
  "従う _id": "53504ca9-991a-4265-a690-ece6e0b7e414"
}
```

**応答**

```json
{
  "url":"mixin://コード/6df372af-5557-4064-a074-698c4677661e"
}
```

## RPC

[ Twirp ](https://github.com/twitchtv/twirp)実装RPCインターフェースに基づいています。 <ahref = "https://github.com/fox-one/pando-rings-sdk-go/blob/main/rpc/service.proto">プロトファイル</a>

```proto
構文= "proto3";

オプションgo_package = "../rpc";

「google / protobuf /timestamp.proto」をインポートします。

メッセージMarketReq {

}

メッセージマーケット{
    int64 id = 1;
    文字列asset_id = 2;
    文字列記号= 3;
    文字列ctoken_asset_id = 4;
    文字列total_cash = 5;
    文字列total_borrows = 6;
    文字列予約= 7;
    文字列ctokens = 8;
    文字列init_exchange_rate = 9;
    文字列reserve_factor = 10;
    文字列liquidation_incentive = 11;
    文字列borrow_cap = 12;
    文字列collat​​eral_factor = 13;
    文字列close_factor = 14;
    文字列base_rate = 15;
    文字列乗数= 16;
    文字列jump_multiplier = 17;
    文字列キンク= 18;
    int64 block_number = 19;
    文字列utilization_rate = 20;
    文字列exchange_rate = 21;
    文字列supply_rate_per_block = 22;
    文字列borrow_rate_per_block = 23;
    文字列価格= 24;
    google.protobuf.Timestamp price_update_at = 25;
    文字列borrow_index = 26;
    int32ステータス= 27;
    google.protobuf.Timestamp created_at = 28;
    google.protobuf.Timestamp updated_at = 29;
    int64サプライヤー= 30;
    int64借り手= 31;
    文字列supply_apy = 32;
    文字列borrow_apy = 33;
}

メッセージMarketListResp {
    繰り返される市場データ= 1;
}

メッセージPriceReq {

}

メッセージPriceReceiver {
    繰り返される文字列メンバー= 1;
    int32しきい値= 2;
}

メッセージPriceSigner {
    int32インデックス= 1;
    文字列verify_key = 2;
}

メッセージ価格{
    文字列asset_id = 1;
    文字列記号= 2;
    文字列trace_id = 3;
    PriceReceiverレシーバー= 4;
    繰り返されるPriceSigner署名者= 5;
    int32しきい値= 6;
}
メッセージPriceRequestResp {
    繰り返される価格データ= 1;
}

メッセージTransactionReq {
    google.protobuf.Timestamp offset = 1;
    int32制限= 2;
}

メッセージトランザクション{
    int64 id = 1;
    int32アクション= 2;
    文字列trace_id = 3;
    文字列user_id = 4;
    文字列follow_id = 5;
    文字列snapshot_trace_id = 6;
    文字列asset_id = 7;
    文字列量= 8;
    バイトデータ= 9;
    google.protobuf.Timestamp created_at = 10;
}

メッセージTransactionListResp {
    繰り返されるトランザクションデータ= 1;
}

メッセージPayReq {
    文字列asset_id = 1;
    文字列量= 2;
    文字列trace_id = 3;
    文字列follow_id = 4;
    文字列memo_base64 = 5;
    bool with_gas = 6;
}

メッセージPayResp {
    文字列url = 1;
}

サービスコンパウンド{
    rpc Alの販売（MarketReq）は（MarketListResp）を返します。
    rpc PriceRequest（PriceReq）は（PriceRequestResp）;を返します。
    rpc Transactions（TransactionReq）は（TransactionListResp）;を返します。
    rpc PayRequest（PayReq）は（PayResp）を返します。
} 
```

### 使用法

```go
rpcClient：= rpc.NewCompoundProtobufClient（ "https://compound-test-api.fox.one"、＆amp; http.Client {}）

//すべてのマーケットをリクエストします
市場、エラー：= rpcClient.Alの販売（ctx、＆amp; rpc.MarketReq {}）
err！= nil {の場合
     nilを返し、エラー
}
リターンマーケット、なし

//トランザクションをリクエストします
t：= timestamppb.New（time.Now（）。AddDate（0、0、-400））
req：= rpc.TransactionReq {
     オフセット：t、
     制限：50、
}

トランザクション、エラー：= rpcClient.Transactions（cmd.Context（）、＆amp; req）
err！= nil {の場合
     nilを返し、エラー
}

返品取引、nil

//支払いをリクエストします
req：= rpc.PayReq {
     AssetId： "4d8c508b-91c5-375b-92b0-ee702ed2dac5"、
     金額：「0.01」、
     TraceId：uuid.New（）、
     FollowId：uuid.New（）、
     MemoBase64： "AQIQONJAADfaSXCp + PK9A5Erkg =="、
}
resp、err：= rpcClient.PayRequest（cmd.Context（）、＆amp; req）
err！= nil {の場合
     nilを返し、エラー
}

resp、nilを返します 
```

## [動作](https://github.com/fox-one/compound/blob/master/core/action.go)

```go
const（
    // ActionTypeDefaultのデフォルト
    ActionTypeDefault ActionType = iota
    // ActionTypeSupply供給アクション
    ActionTypeSupply
    // ActionTypeBorrow借用アクション
    ActionTypeBorrow
    // ActionTypeRedeem償還アクション
    ActionTypeRedeem
    // ActionTypeRepay返済アクション
    ActionTypeRepay
    // ActionTypeMintミントトークンアクション
    ActionTypeMint
    // ActionTypePledge誓約アクション
    ActionTypePledge
    // ActionTypeUnpledge unpledge action
    ActionTypeUnpledge
    // ActionTypeLiquidate清算アクション
    ActionTypeLiquidate
    // ActionTypeRedeemTransfer償還転送アクション
    ActionTypeRedeemTransfer
    // ActionTypeUnpledgeTransferunpledge転送アクション
    ActionTypeUnpledgeTransfer
    // ActionTypeBorrowTransfer借用転送アクション
    ActionTypeBorrowTransfer
    // ActionTypeLiquidateTransfer清算転送アクション
    ActionTypeLiquidateTransfer
    // ActionTypeRefundTransfer払い戻しアクション
    ActionTypeRefundTransfer
    // ActionTypeRepayRefundTransfer返済払い戻しアクション
    ActionTypeRepayRefundTransfer
    // ActionTypeLiquidateRefundTransferが払い戻しアクションを差し押さえます
    ActionTypeLiquidateRefundTransfer
    // ActionTypeProposalAddMarket追加市場提案アクション
    ActionTypeProposalAddMarket
    // ActionTypeProposalUpdateMarket更新市場提案アクション
    ActionTypeProposalUpdateMarket
    // ActionTypeProposalWithdrawReserves引き出し予約プロポーザルアクション
    ActionTypeProposalWithdrawReserves
    // ActionTypeProposalProvidePriceは価格アクションを提供します
    ActionTypeProposalProvidePrice
    // ActionTypeProposalVote投票アクション
    ActionTypeProposalVote
    // ActionTypeProposalInjectCTokenForMintトークンアクションを注入します
    ActionTypeProposalInjectCTokenForMint
    // ActionTypeProposalUpdateMarketAdvance更新マーケットアドバンスパラメータアクション
    ActionTypeProposalUpdateMarketAdvance
    // ActionTypeProposalTransferプロポーザル転送アクション
    ActionTypeProposalTransfer
    // ActionTypeProposalCloseMarketプロポーザルクローズマーケットアクション
    ActionTypeProposalCloseMarket
    // ActionTypeProposalOpenMarketプロポーザル公開市場操作
    ActionTypeProposalOpenMarket
    // ActionTypeProposalAddScopeプロポーザルaddallowlistスコープアクション
    ActionTypeProposalAddScope
    // ActionTypeProposalRemoveScopeプロポーザルはallowlistスコープアクションを削除します
    ActionTypeProposalRemoveScope
    // ActionTypeProposalAddAllowListプロポーザルをallowlistアクションに追加
    ActionTypeProposalAddAllowList
    // ActionTypeProposalRemoveAllowListプロポーザルをallowlistアクションから削除します
    ActionTypeProposalRemoveAllowList
    // ActionTypeUpdateMarket更新マーケット
    ActionTypeUpdateMarket
    // ActionTypeQuickPledgeサプライ-＆gt;誓約
    ActionTypeQuickPledge
    // ActionTypeQuickBorrowサプライ-＆gt;誓約-＆gt;借りる
    ActionTypeQuickBorrow
    // ActionTypeQuickBorrowTransferクイックボロー転送
    ActionTypeQuickBorrowTransfer
    // ActionTypeQuickRedeem unpledge-＆gt;償還
    ActionTypeQuickRedeem
    // ActionTypeQuickRedeemクイック引き換え転送
    ActionTypeQuickRedeemTransfer
    // ActionTypeProposalAddOracleSigner add oraclesignerプロポーザルアクション
    ActionTypeProposalAddOracleSigner
    // ActionTypeProposalRemoveOracleSignerは、Oracle署名者の提案アクションを削除します
    ActionTypeProposalRemoveOracleSigner
）。 
```
