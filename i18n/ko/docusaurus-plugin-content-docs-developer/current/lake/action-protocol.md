---
title: Action Protocol
date: 2021-07-31 11:18:01
---

4swap 및 Lake는 MTG 애플리케이션으로 Mixin Network에서 [multisig transactions](https://developers.mixin.one/document/wallet/api/multisigs/tutorial)을 읽습니다.

4swap 또는 Lake로 송금을 보내려면 개발자가 다중 서명 송금을 생성해야 합니다.

4swap과 Lake는 각 트랜잭션의 동작을 설명하기 위해 **Action Protocol**을 디자인합니다. 액션 프로토콜은 암호화된 메모를 사용하여 명령과 매개변수를 저장하는 JSON 기반 프로토콜입니다.

## 액션 생성

액션을 생성하는 두 가지 접근 방식이 있습니다.

**SDK를 사용하는 방법**

[4swap SDK](https://github.com/fox-one/4swap-sdk-go)를 사용하는 경우 SDK의 방법을 사용하여 프로세스를 단순화할 수 있습니다. 다음 예는 `mtg.SwapAction`으로 스왑 작업을 생성하는 방법을 보여줍니다.

```go
// 주문을 추적하는 ID
followID, _ := uuid.NewV4()

// 스왑 작업 빌드, 매개 변수 지정
action := mtg.SwapAction(
    receiverID,
    followID.String(),
    OutputAssetID,
    preOrder.Routes,
    // 당신이 얻을 수 있는 자산의 최소 금액.
    // 이 값을 preOrder.FillAmount보다 작은 숫자로 변경할 수 있습니다.
    preOrder.FillAmount.Div(decimal.NewFromFloat(0.005)),
)

// 메모 생성
memo, err := action.Encode(group.PublicKey)
if err != nil {
    return err
}
log.Println("memo", memo)
```

**API를 사용하는 방법**

지갑 서비스를 직접 호출하는 데 사용할 수 있는 서명된 전송 요청을 받으려면 API ["/api/actions"](./apis/actions)를 호출하십시오.

SDK 접근 방식보다 느리지만 작업을 생성하고 직접 서명할 필요는 없습니다.

## 일반정보 및 사양

### 유동성 추가

기존 페어에 유동성을 추가하려면 페어에 있는 이 두 자산을 각각 4swap의 메인넷 주소로 보내야 합니다.

각 전송에 대해 메모는 다음 형식으로 구성되어야 합니다.

```json
{
  "action": "1,{receiver_id},{follow_id},{asset_id},{slippage},{timeout}"
}
```

그 중,

- `{receiver_id}` 는 LP-Token을 받을 사용자의 ID입니다.
- `{follow_id}` 는 전송을 추적하기 위한 UUID입니다. `UUID.v4()`를 사용하여 생성할 수 있습니다.
- `{asset_id}` 는 입금할 페어의 반대쪽 자산 ID입니다. 예를 들어 [ETH/BTC 거래 페어](https://app.4swap.org/#/pair-info?base=43d61dcd-e413-450d-80b8-101d5e903357&quote=c6d0c728-2624-429b에 유동성을 추가하려는 경우 -8e0d-d9d19b6592fa), asset_id는 `43d61dcd-e413-450d-80b8-101d5e903357`이며, `BTC`를 지불하려면 asset_id `c6d0c728-2224-429b-8e0d-9d19b6592fa`입니다.
- `{slippage}` 는 슬리피지(slippage) 비율입니다. 예: 0.001 = 0.1% 시장의 변동성이 심할 때 작은 슬리피지 값을 지정하면 실패할 수 있습니다.
- `{timeout}` 는 시간 초과(초) 입니다. 두 개의 전송을 제 시간에 완료하지 않으면 `timeout` 내에 암호화폐가 환불됩니다.

두 전송이 시간 초과 전에 4swap 또는 Lake에 의해 처리된 경우, 메모 `receiver_id`에 지정한 사용자는 이 페어의 LP-Token 을 받게 됩니다.


### 유동성 제거

한 페어의 유동성을 제거하려면 LP-Token을 4swap의 메인넷 주소로 이전해야 합니다. 메모는 다음과 같은 형식이어야 합니다.

```json
{
  "action": "2,{receiver_id},{follow_id}"
}
```

그 중,

- `{receiver_id}` 는 암호화폐를 받을 사용자의 Id입니다.
- `{follow_id}` 는 전송을 추적하는 UUID입니다.

전송이 처리되면 메모 `receiver_id`에 지정한 사용자가 동등한 암호화폐 자산을 받게 됩니다.

### 암호화폐 스왑

하나의 암호화폐를 다른 암호화폐로 교환하려면 교환하려는 암호화폐를 4swap의 메인넷 주소로 전송해야 합니다. 전송 메모는 다음과 같은 형식이어야 합니다.

```json
{
  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"
}
```

그 중,

- `{receiver_id}` 는 LP-Token을 받을 사용자의 ID입니다.
- `{follow_id}` 는 전송을 추적하는 UUID입니다.
- `{fill_asset_id}` 는 교환에 사용할 자산의 ID입니다.
- `{routes}`는 사용하려는 경로를 나타내는 경로 Id의 시퀀스입니다.
- `{minimum}`는 당신이 얻을 수 있는 최소 금액 입니다.

4swap 또는 Lake가 최소 대상의 암호화폐를 얻지 못하면 스와핑이 중단되고 메인넷 주소로 보내는 암호화폐가 환불됩니다.

## 4swap 또는 Lake 송금 메모 분석

> 전송 메모는 base64로 디코딩된 json 문자열입니다.

```json5
{
  "s": "4swapTrade|4swapRefund", // 4swapTrade: swap Successful, 4swapRefund: swap failed
  "t": "bf0c984d-7f8a-424e-bddd-473fcf5f7020", // follow id
}
```
