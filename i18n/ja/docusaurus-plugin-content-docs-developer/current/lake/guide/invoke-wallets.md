---
title: Invoke Wallets
date: 2021-07-22 22:33:07
---

現在、4swap/Lakeと互換性のあるウォレットは2種類あります。

- [Mixin Messenger](/docs/apps/wallets#mixin-messenger): Mixinコアチームによって作成されたモバイルウォレット。
- [Fennec](/docs/apps/wallets#fennec): Fox.ONEチームが作成したブラウザ拡張ウォレット。

これらいずれかのウォレットをサポートするウェブインターフェースを提供する場合、ウォレットをウェブアプリに統合し、所望時間に支払うよう呼び出す必要があります。

## Invoke Messenger

Mixin Messengerの決済インターフェースを呼び出す方法はとてもシンプルです:

まず最初に、承認する必要のあるマルチシグ転送を示す`code_url`か`code`を取得する必要があります。

取得方法は二つあります:

1. API ["/api/actions"](../apis/actions) に従い、 [スワップアクション](../action-protocol#swap-crypto) を作成します
2. API `https://api.mixin.one/payments` を呼び出して、 `code_id` を含む支払いオブジェクトを取得してください。
3. 自身のバックエンドでトランザクションを生成し、code/code_urlをフロントエンドに渡してください。

一つ目の方法を紹介します:

### 方法1

```javascript
const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';
const ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';

async function pay() {
  const follow_id = uuid.v4();

  // construct the memo
  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;

  // create action to swap from BTC to ETH
  const resp = await http.post(`/actions`, {
    data: {
      action: memo,
      amount: "0.0001",
      asset_id: BTC_ASSET_ID,
      // or leave broker_id empty
      broker_id: '5dbdb169-d56d-4b5b-b066-9b0780691b14',
    }
  });

  // if your web app is running in Messenger's webview
  // it will invoke the payment UI
  window.location.href = `https://mixin.one/codes/${resp.code}`;

  // if your web also support to visit on desktop
  // you may need to show the QrCode to the users like this:
  // const qrCode = generateQrCode(`https://mixin.one/codes/${resp.coded}`)
  // showQrCodeDialog();
}
```

### 方法2

```javascript
const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';
const ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';

async function pay() {
  const follow_id = uuid.v4();

  // construct the memo
  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;

  // create action to swap from BTC to ETH
  const resp = await http.post(`https://api.mixin.one/payments`, {
    data: {
      BTC_ASSET_ID,
      '0.0001',
      memo,
      trace_id: follow_id,
      // read receivers and threshold from API `/api/information`
      opponent_multisig: { receivers, threshold },
    }
  });

  // if your web app is running in Messenger's webview
  // it will invoke the payment UI
  window.location.href = resp.data.code_url;

  // if your web also support to visit on desktop
  // you may need to show the QrCode to the users like this:
  // const qrCode = generateQrCode(`https://mixin.one/codes/${resp.coded}`)
  // showQrCodeDialog();
}
```

## Invoke Fennec

Fennec はブラウザ拡張ウォレットで、ブラウザに暗号化されたキーストアを格納します。

アセットのロードやプロフィールの読み込み、支払い準備のとために Mixin APIを呼び出す必要はありません。 その代わりに、Fennecはそれら全てを実行する独自APIを提供しています。

詳細については、 [デモのソースコード](https://github.com/fox-one/fennec#4-interact-with-your-mixin-dapp) を参照してください。

```javascript
// fennec ext
let ext = null;
// fennec context
let ctx = null;
// token
let token = null;

async function load() {
  // check the ext and get the context
  if (window.__MIXIN__ && window.__MIXIN__.mixin_ext) {
    ext = window.__MIXIN__.mixin_ext;
    ctx = await ext.enable("demo");
    if (ctx) {
      token = await ctx.wallet.signToken({
        payload: { from: "demo" }
      });
    }
  }
}

const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';
const ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';

function pay() {
  const follow_id = uuid.v4();

  // construct the memo
  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;

  // create action to swap from BTC to ETH
  const resp = await http.post(`/actions`, {
    data: {
      action: memo,
      amount: "0.0001",
      asset_id: BTC_ASSET_ID,
      // or leave broker_id empty
      broker_id: '5dbdb169-d56d-4b5b-b066-9b0780691b14',
    }
  });

  ctx.wallet.multisigsPayment({ code: resp.code });
}
```
