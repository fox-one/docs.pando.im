---
title: 调用钱包
date: 2021-07-22 22:33:07
---

目前有两种钱包与 4swap/Lake 兼容：

- [Mixin Messenger](/docs/apps/wallets#mixin-messenger): Mixin 核心团队创建的移动端钱包。
- [Fennec](/docs/apps/wallets#fennec): Fox.ONE 团队创建的浏览器扩展钱包。

如果您想要提供一个支持这些钱包的应用， 您需要将您的应用与钱包整合起来，并在需要的时候调用它们来处理付款。

## 调用Mixin Messenger

调用Mixin Messenger的付款接口非常简单：

首先，您需要获取 `code_url` 或 `code` 来表示多签转账需要被确认。

有两种方法来获取它:

1. 按照API ["/api/actions"](../apis/actions) 创建一个 [swap action](../action-protocol#swap-crypto)
2. 调用  `https://api.mixin.one/payments` API 来获取包含 `code_id` 的付款对象
3. 在您的后端生成交易，并将code/code_url传递到前端。

在这里，我将向您展示第一种方法：

### 方式1

```javascript
const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';
const ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';

async function pay() {
  const follow_id = uuid.v4();

  // 构造memo
  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;

  // 从 BTC swap 到 ETH
  const resp = await http.post(`/actions`, {
    data: {
      action: memo,
      amount: "0.0001",
      asset_id: BTC_ASSET_ID,
      // 或留空 broker_id
      broker_id: '5dbdb169-d56d-4b5b-b066-9b0780691b14',
    }
  });

  // 如果您的 web app 在 Messenger的 webview 里运行
  // 它将调用 payment UI
  window.location.href = `https://mixin.one/codes/${resp.code}`;

  // 如果您的 web app 同时支持桌面端运行
  // 您可能需要向您的用户展示这样的二维码:
  // const qrCode = generateQrCode(`https://mixin.one/codes/${resp.coded}`)
  // showQrCodeDialog();
}
```

### 方式2

```javascript
const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';
const ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';

async function pay() {
  const follow_id = uuid.v4();

  // 构造memo
  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;

  // 从 BTC swap 到 ETH
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

  // 如果您的 web app 在 Messenger的 webview 里运行
  // 它将调用 payment UI
  window.location.href = resp.data.code_url;

  // 如果您的 web app 同时支持桌面端运行
  // 您可能需要向您的用户展示这样的二维码:
  // const qrCode = generateQrCode(`https://mixin.one/codes/${resp.coded}`)
  // showQrCodeDialog();
}
```

## 调用Fennec

Fennec 是在浏览器中储存加密密钥的浏览器扩展钱包。

您不需要调用 Mixin API 来加载资产、读取个人资料或准备付款。 相反，Fennec 提供自己的 API 来做所有的事情。

欲了解更多信息，请阅读 [demo的源代码](https://github.com/fox-one/fennec#4-interact-with-your-mixin-dapp)

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

  // 构造memo
  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;

  // 从 BTC swap 到 ETH
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
