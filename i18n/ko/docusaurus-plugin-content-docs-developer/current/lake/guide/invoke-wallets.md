---
title: 지갑 불러오기
date: 2021-07-22 22:33:07
---

현재 4swap/Lake와 호환되는 지갑은 두 가지가 있습니다.

- [Mixin Messenger](/docs/apps/wallets#mixin-messenger): Mixin 핵심 팀에서 만든 모바일 지갑입니다.
- [Fennec](/docs/apps/wallets#fennec): Fox.ONE 팀에서 만든 브라우저 확장 지갑입니다.

이러한 지갑을 지원하는 웹 인터페이스를 제공하려면 웹 앱을 지갑과 통합하여 원하는 시간에 결제할 수 있도록 호출해야 합니다.

## Messenger 불러오기

Mixin Messenger의 결제 인터페이스를 호출하는 것은 매우 간단합니다.

먼저 다중서명 전송을 확인해야 함을 나타내는 `code_url` 또는 `code`를 가져와야 합니다.

두 가지 방법으로 얻을 수 있습니다.

1. API ["/api/actions"를 따라](../apis/actions)[swap action](../action-protocol#swap-crypto)을 생성합니다.
2. API ` https://api.mixin.one/payments`를 호출하여 `code_id`가 포함된 결제 개체를 가져옵니다.
3. 자체 백엔드에서 트랜잭션을 생성하고 code/code_url을 프론트엔드에 전달하십시오.

첫 번째 방법을 알려드리겠습니다.

### Way 1

```javascript
const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';
const ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';

async function pay() {
  const follow_id = uuid.v4();

  // 메모 작성
  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;

  // BTC에서 ETH로 스왑하는 작업 생성
  const resp = await http.post(`/actions`, {
    data: {
      action: memo,
      amount: "0.0001",
      asset_id: BTC_ASSET_ID,
      // 또는 Broker_id를 비워 두십시오.
      broker_id: '5dbdb169-d56d-4b5b-b066-9b0780691b14',
    }
  });

  // 웹 앱이 Messenger의 webview에서 실행 중인 경우
  // 그것은 결제 UI를 호출할 것입니다.
  window.location.href = `https://mixin.one/codes/${resp.code}`;

  // 웹에서 데스크톱 방문도 지원하는 경우
  // 다음과 같이 사용자에게 QrCode를 표시해야 할 수도 있습니다.
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

  // 메모 작성
  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;

  // BTC에서 ETH로 스왑하는 작업 생성
  const resp = await http.post(`https://api.mixin.one/payments`, {
    data: {
      BTC_ASSET_ID,
      '0.0001',
      memo,
      trace_id: follow_id,
      // API `/api/information`에서 수신기 및 임계값 읽기
      opponent_multisig: { receivers, threshold },
    }
  });

  // 웹 앱이 Messenger의 webview에서 실행 중인 경우
  // 그것은 결제 UI를 호출할 것입니다.
  window.location.href = resp.data.code_url;

  // 웹에서 데스크톱 방문도 지원하는 경우
  // 다음과 같이 사용자에게 QrCode를 표시해야 할 수도 있습니다.
  // const qrCode = generateQrCode(`https://mixin.one/codes/${resp.coded}`)
  // showQrCodeDialog();
}
```

## Fennec 불러오기

Fennec은 암호화된 키 저장소를 브라우저에 저장하는 브라우저 확장 지갑입니다.

자산을 로드하거나 프로필을 읽거나 결제를 준비하기 위해 Mixin API를 호출할 필요가 없습니다. 대신 Fennec은 이 모든 작업을 수행할 수 있는 자체 API를 제공합니다.

자세한 내용은 [demo's source code](https://github.com/fox-one/fennec#4-interact-with-your-mixin-dapp)를 읽고 알아보세요.

```javascript
// fennec ext
let ext = null;
// fennec context
let ctx = null;
// token
let token = null;

async function load() {
  // ext를 확인하고 context 를 파악하세요.
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

  // 메모 작성
  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;

  // BTC에서 ETH로 스왑하는 작업 생성
  const resp = await http.post(`/actions`, {
    data: {
      action: memo,
      amount: "0.0001",
      asset_id: BTC_ASSET_ID,
      // 또는 Broker_id를 비워 두십시오.
      broker_id: '5dbdb169-d56d-4b5b-b066-9b0780691b14',
    }
  });

  ctx.wallet.multisigsPayment({ code: resp.code });
}
```
