---
title: Invoke Wallets

date: 2021-07-22 22:33:07
---

At present, there are two kinds of wallets that are compatible with 4swap/Lake:

- [Mixin Messenger](/docs/apps/wallets#mixin-messenger): A mobile wallet that is created by Mixin core team.
- [Fennec](/docs/apps/wallets#fennec): A browser extension wallet created by Fox.ONE team.

If you are going to provide a web interface that supports any of these wallets, you need to integrate your web app with the wallets and invoke them to pay at the desired time.

## Invoke Messenger

To invoke the payment interface of Mixin Messenger is pretty simple:

At first, you need to get the `code_url` or `code` which indicates a multisig transfer need to confirm.

There are two ways to get it:

1. Follow the API ["/api/actions"](../apis/actions) to create a [swap action](../action-protocol#swap-crypto)
2. Call the API `https://api.mixin.one/payments` to get a payment object which contains `code_id`
3. Generate a transaction at your own backend and pass the code/code_url to the frontend.

Here I will show you the first ways:

### Way 1

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

### Way 2

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

Fennec is browser extension wallet, which stores encrypted keystores in the browser.

You don't need to call Mixin API to load assets, read profile or prepare a payment. Instead, Fennec provides its own API to do them all.

For more information, please read the [demo's source code](https://github.com/fox-one/fennec#4-interact-with-your-mixin-dapp) to figure out.

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
