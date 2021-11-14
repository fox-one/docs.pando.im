---
title: Wallets aufrufen
sidebar_position: zwei
date: 22-07-2021 22:33:07
---

Zur Zeit gibt es zwei Arten von Wallets, die mit 4swap/See kompatibel sind:

- [Mixin Messenger](/docs/apps/wallets#mixin-messenger): Eine mobile Brieftasche die vom Mixin Core Team erstellt wurde.
- [Fennec](/docs/apps/wallets#fennec): Eine vom Fox.ONE Team erstellte Browser-Erweiterung Brieftasche.

Wenn Sie eine Webschnittstelle zur Verfügung stellen wollen, die eine dieser Wallets unterstützt, Sie müssen Ihre Web-App in die Wallets integrieren und sie aufrufen, um sie zum gewünschten Zeitpunkt zu bezahlen.

## Messenger aufrufen

Um die Zahlungsschnittstelle von Mixin Messenger aufzurufen, ist ziemlich einfach:

Zuerst müssen Sie den `code_url` oder `Code` erhalten, der angibt, dass eine Multisig Übertragung bestätigt werden muss.

Es gibt zwei Wege, es zu erreichen:

1. Folge der API ["/api/actions"](../apis/actions) um eine [Swap-Aktion zu erstellen](../action-protocol#swap-crypto)
2. Rufen Sie die API `https://api.mixin.one/payment` auf, um ein Zahlungsobjekt zu erhalten, das `code_id` enthält
3. Generieren Sie eine Transaktion im eigenen Backend und übergeben Sie den Code/code_url an das Frontend.

Hier zeige ich dir die ersten Wege:

### Weg 1

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

### Weg 2

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

Fennec ist die Brieftasche der Browser-Erweiterung, die verschlüsselte Keyshops im Browser speichert.

Sie müssen nicht die Mixin API aufrufen, um Assets zu laden, Profil lesen oder eine Zahlung vorbereiten. Stattdessen stellt Fennec seine eigene API bereit, um sie alle zu erledigen.

Für weitere Informationen lesen Sie bitte den [-Demo-Code](https://github.com/fox-one/fennec#4-interact-with-your-mixin-dapp) um herauszufinden.

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
