---
title: ウォレットを呼び出す
date: 2021年7月22日22時33分7秒
---

現在、4swap/Lakeと互換性のあるウォレットは2種類あります。

- [Mixin Messenger](/docs/apps/wallets#mixin-messenger): Mixinコアチームによって作成されたモバイルウォレット。
- [ Fennec ](/docs/apps/wallets#fennec)：Fox.ONEチームによって作成されたブラウザ拡張ウォレット。

これらのウォレットのいずれかをサポートするWebインターフェイスを提供する場合は、Webアプリをウォレットと統合し、それらを呼び出して希望の時間に支払う必要があります。

## メッセンジャーを起動する

MixinMessengerの支払いインターフェースを呼び出すのはとても簡単です。

まず最初に、承認する必要のあるマルチシグ転送を示す`code_url`か`code`を取得する必要があります。

それを取得するには2つの方法があります。

1. API ["/api/actions"](../apis/actions) に従い、 [スワップアクション](../action-protocol#swap-crypto) を作成します
2. API `https://api.mixin.one/payments` を呼び出して、 `code_id` を含む支払いオブジェクトを取得してください
3. 独自のバックエンドでトランザクションを生成し、code / code_urlをフロントエンドに渡します。

ここでは、最初の方法を紹介します:

### 方法1

```javascript
const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';
const ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';

非同期関数pay（）{
   const follow_id = uuid.v4（）;

   //メモを作成します
   const memo = `3、$ {YOUR_USER_ID}、$ {follow_id}、$ {ETH_ASSET_ID}、$ {''}、$ {'0.0001'}`;

   // BTCからETHにスワップするアクションを作成します
   const resp = await http.post（ `/アクション`、{
     データ： {
       アクション：メモ、
       金額：「0.0001」、
       アセットID：BTC_ASSET_ID、
       //またはbroker_idを空のままにします
       ブローカーID： '5dbdb169-d56d-4b5b-b066-9b0780691b14'、
     }
   }）;

   // WebアプリがMessengerのWebビューで実行されている場合
   //支払いUIを呼び出します
   window.location.href = `https://mixin.one/codes/$ {resp.code}`;

   // Webがデスクトップへのアクセスもサポートしている場合
   //次のようにユーザーにQrCodeを表示する必要がある場合があります。
   // const qrCode = generateQrCode（ `https://mixin.one/codes/$ {resp.coded}`）
   // showQrCodeDialog（）;
} 
```

### 方法2

```javascript
const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';
const ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';

非同期関数pay（）{
   const follow_id = uuid.v4（）;

   //メモを作成します
   const memo = `3、$ {YOUR_USER_ID}、$ {follow_id}、$ {ETH_ASSET_ID}、$ {''}、$ {'0.0001'}`;

   // BTCからETHにスワップするアクションを作成します
   const resp = await http.post（ `https：// api.mixin.one / payments`、{
     データ： {
       BTC_ASSET_ID、
       '0.0001'、
       メモ、
       trace_id：follow_id、
       // API `/ api / information`からレシーバーとしきい値を読み取ります
       opponent_multisig：{レシーバー、しきい値}、
     }
   }）;

   // WebアプリがMessengerのWebビューで実行されている場合
   //支払いUIを呼び出します
   window.location.href = resp.data.code_url;

   // Webがデスクトップへのアクセスもサポートしている場合
   //次のようにユーザーにQrCodeを表示する必要がある場合があります。
   // const qrCode = generateQrCode（ `https://mixin.one/codes/$ {resp.coded}`）
   // showQrCodeDialog（）;
} 
```

## Fennecを呼び出す

Fennecは、暗号化されたキーストアをブラウザに保存するブラウザ拡張ウォレットです。

アセットの読み込み、プロファイルの読み取り、支払いの準備のためにMixinAPIを呼び出す必要はありません。 代わりに、Fennecはそれらすべてを実行するための独自のAPIを提供します。

詳細については、<ahref = "https://github.com/fox-one/fennec#4-interact-with-your-mixin-dapp">デモのソースコード</a>を読んで理解してください。

```javascript
//フェネック内線
ext = nullとします。
//フェネックコンテキスト
ctx = nullとします。
//トークン
トークン= null;

非同期関数load（）{
  //内線をチェックしてコンテキストを取得します
  if（window .__ MIXIN __＆amp;＆amp; window .__ MIXIN __。mixin_ext）{
    ext = window .__ MIXIN __。mixin_ext;
    ctx = await ext.enable（ "demo"）;
    if（ctx）{
      token = await ctx.wallet.signToken（{
        ペイロード：{from： "デモ"}
      }）;
    }
  }
}

const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';
const ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';

関数pay（）{
  const follow_id = uuid.v4（）;

  //メモを作成します
  const memo = `3、$ {YOUR_USER_ID}、$ {follow_id}、$ {ETH_ASSET_ID}、$ {''}、$ {'0.0001'}`;

  // BTCからETHにスワップするアクションを作成します
  const resp = await http.post（ `/アクション`、{
    データ： {
      アクション：メモ、
      金額：「0.0001」、
      アセットID：BTC_ASSET_ID、
      //またはbroker_idを空のままにします
      ブローカーID： '5dbdb169-d56d-4b5b-b066-9b0780691b14'、
    }
  }）;

  ctx.wallet.multisigsPayment（{コード：resp.code}）;
} 
```
