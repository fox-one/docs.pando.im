---
title: SDK를 사용하여 거래하기
date: 2021-07-22 22:33:07
---

기본적으로 Pando Lake는 유동성 공급자로 4swap을 사용합니다. 4swap의 SDK로 Pando Lake에서 쉽게 자산을 교환할 수 있습니다.

## 프로젝트에 4swap SDK 가져오기

```go
import (
    fswap "github.com/fox-one/4swap-sdk-go"
    mtg "github.com/fox-one/4swap-sdk-go/mtg"
    "github.com/fox-one/mixin-sdk-go"
    "github.com/shopspring/decimal"
)
```

## 다중서명 그룹 정보 가져오기

Pando Lake에서 암호화폐 교환, 유동성 추가, 유동성 제거 등의 작업을 수행할 때 다중서명 트랜잭션을 생성하고 Mixin 네트워크와 상호 작용해야 합니다.

각 다중 서명의 참가자는 MTG의 구성원이기도 합니다. 따라서 먼저 읽고 나중에 사용할 수 있도록 저장해 두십시오.

```go
ctx := context.TODO()

// 4swap의 MTG API 엔드포인트 사용
fswap.UseEndpoint(fswap.MtgEndpoint)

//  mtg 그룹 읽기
// 그룹 정보는 자주 변경될 것입니다.
// 나중에 사용하기 위해 저장하는 것이 좋습니다.
group, err := fswap.ReadGroup(ctx)
if err != nil {
    return err
}
...
```

## 거래 가능한 모든 페어 가져오기

지원되는 모든 자산 페어를 쉽게 가져올 수 있습니다.

```go
pairs, err := fswap.ListPairs(ctx)
if err != nil {
    return err
}
...
```

## 최적의 거래 경로 계산

암호화폐를 스와핑하기 전에 스와핑 경로를 지정해야 합니다.

현재 Lake가 경로를 결정하도록 할 수 있지만 성능 문제가 발생하고 봇이 느려질 수 있습니다. 따라서 스와핑 경로를 직접 계산하는 것이 좋습니다.

경로를 계산하는 것은 쉽습니다. 유동성에 따라 페어를 정렬하고 `Route` 또는 `ReverseRoute` 메서드를 호출하면 계산 결과가 포함된 `order` 개체를 반환합니다.

```go
// 먼저 정렬하세요
sort.Slice(pairs, func(i, j int) bool {
    aLiquidity := pairs[i].BaseValue.Add(pairs[i].QuoteValue)
    bLiquidity := pairs[j].BaseValue.Add(pairs[j].QuoteValue)
    return aLiquidity.GreaterThan(bLiquidity)
})

// 경로를 계산하세요.
// InputAssetID - 지불하려는 자산의 Id
// OutputAssetID - 거래하는 자산의 Id
// InputAmount - 경로를 계산할 금액(예: 1000)
preOrder, err := fswap.Route(pairs, InputAssetID, OutputAssetID, InputAmount)
if err != nil {
    return err
}

// asset_id의 배열인 Order.RouteAssets에서 최적의 경로를 읽을 수 있습니다.
log.Printf("Route: %v", preOrder.RouteAssets)
log.Printf("Price: %v", preOrder.FillAmount.Div(InputAmount))
...
```

````mdx-code-block
:::info
4swap SDK를 사용하지 않는다면 자신만의 최적의 경로 알고리즘을 구현할 수 있습니다.([golang version](https://github.com/fox-one/4swap-sdk-go/blob/master/route.go), [자바스크립트 버전](https://github.com/fox-one/4swap-web/blob/develop/src/utils/pair/route.ts)).
:::
````

## 실제 거래 구축

주문에 대한 모든 필수 정보는 JSON 형식으로 트랜잭션 메모에 저장됩니다.

```json
{
  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"
}
```

그 중,

  - {receiver_id} 는 LP-Token을 받을 사용자의 ID입니다.
  - {follow_id} 는 전송을 추적하는 UUID입니다.
  - {fill_asset_id} 는 교환에 사용할 자산의 ID입니다.
  - {routes} 는 사용하려는 경로를 나타내는 경로 Id의 시퀀스입니다.
  - {minimum} 는 당신이 얻을 수 있는 최소 금액 입니다.

4swap SDK를 사용하는 경우 `mtg.SwapAction` 메서드를 사용하여 프로세스를 단순화할 수도 있습니다.

```go
// 주문을 추적하는 ID
followID, _ := uuid.NewV4()

// 스왑 작업 빌드, 매개 변수 지정
action := mtg.SwapAction(
    receiverID,
    followID.String(),
    OutputAssetID,
    preOrder.Routes,
    // 당신이 얻을 수 있는 최소 금액 입니다.
    // 이 값을 다음보다 작은 숫자로 변경할 수 있습니다.
preOrder.FillAmount
    preOrder.FillAmount.Div(decimal.NewFromFloat(0.005)),
)

// 메모 생성
memo, err := action.Encode(group.PublicKey)
if err != nil {
    return err
}
log.Println("memo", memo)
...

```

## 프로그래밍 방식으로 주문하기

봇이 주문을 하도록 하려면 봇에서 다중서명 트랜잭션을 보내십시오.

이것은 차익 거래 봇의 일반적인 장면입니다. 봇의 지갑에 충분한 암호화폐가 있는지 확인하십시오.

트랜잭션을 생성하고 커널 노드로 전송하려면 [mixin-sdk-go](https://github.com/fox-one/mixin-sdk-go) 클라이언트를 사용해야 합니다.

```go
// 'OpponentMultisig'로 지정된 다중 서명 주소로 트랜잭션을 보냅니다.
// OpponentMultisig.Receivers는 MTG 그룹 구성원입니다.
tx, err := client.Transaction(ctx, &mixin.TransferInput{
    AssetID: payAssetID,
    Amount:  decimal.RequireFromString(amount),
    TraceID: mixin.RandomTraceID(),
    Memo:    memo,
    OpponentMultisig: struct {
        Receivers []string `json:"receivers,omitempty"`
        Threshold uint8    `json:"threshold,omitempty"`
    }{
        Receivers: group.Members,
        Threshold: uint8(group.Threshold),
    },
}, *pin)
```
