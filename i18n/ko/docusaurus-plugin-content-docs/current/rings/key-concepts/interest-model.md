---
title: 금리 결정
date: 2021-10-16 12:33:07
---

Pando Rings의 모든 이자율은 **이용률**의 함수로 결정됩니다. **이용률의 변화에 따라 금리가 지속적으로 변동합니다.**


### 이용률

단기 금융 시장의 이용률은 다음과 같이 정의됩니다.


``````
Utilization_rate = market.total_borrows/(market.total_cash + market.borrows - market.reserves)
``````

그 중:
- market.total_borrows는 특정 토큰 마켓의 총 차입액을 나타냅니다.
- market.total_cash는 특정 토큰 마켓의 시스템에 남아있는 금액을 나타냅니다.
- market.reserves는 특정 토큰 마켓의 이익으로 유지되는 금액을 말합니다.

이 공식은 대략 공급된 총 화폐에서 빌린 화폐가 차지하는 비율로 해석할 수 있습니다.

이용률이 높다는 것은 수요가 많고 차입금이 많다는 것을 의미하므로 더 많은 사람들이 시스템에 현금을 투입하도록 하기 위해 이자율을 인상합니다. 이용률이 낮다는 것은 대출 수요가 낮다는 것을 의미하므로 더 많은 사람들이 시스템에서 현금을 빌리도록 하기 위해 이자율을 낮춥니다.


### 대출금리

현재 Pando Rings의 모든 토큰 마켓의 차입금리 모델은 점프금리 모델을 따릅니다.

이 모델에는 **Kink**로 정의된 핵심 매개변수가 있는데, 이는 이용률의 값이며 금리 등락에 민감한 전환점을 생성합니다.

점프금리 모델의 차입금리는 다음과 같이 정의됩니다.

**이용률 ≤ Kink일때:**

```
Borrow_interest_rate = multiplier * market.utilization_rate + base_rate
```

**이용률 > Kink일때:**

```
Borrow_interest_rate = multiplier * Kink + jump_multiplier * (market.utilization_rate - Kink) + base_rate
```

그 중:
- base_rate는 최소 대출 금리입니다.
- multiplier는 이용률에 대한 이자율의 증가율입니다.
- Kink는 모델이 점프 승수를 따르는 점입니다.
- jump_multiplier는 Kink 이후 이용률에 대한 이자율의 증가율입니다.

### 공급율

공급율은 다음과 같이 계산됩니다.

```
Supply_interest_rate = Borrow_interest_rate * market.utilization_rate * (1 - market.reserve_factor)
```

그 중:
- market.utilization_rate는 특정 시장의 이용률입니다.
- market.reserve_factor는 대출 채무 불이행 및 청산 오작동으로부터 대출자를 보호하기 위해 특정 시장에 대해 차용인이 지불하는 이자의 비율을 제어하여 시스템 내에 유지됩니다.
- Borrow_interest_rate는 차용인이 특정 시장에 대해 지불하는 이자율입니다.


### 모든 Pando Rings 코인마켓의 매개변수
(2021년 10월 18일 최종 업데이트)

현재 모든 코인시장의 Kink는 80%입니다. 즉 이용률이 80%에 이르면 공급금리와 차입금리가 급등하게 됩니다.

| 통화   | 이름         | base_rate | reserve_factor | multiplier | jump_multiplier | kink |
| ---- | ---------- | --------- | -------------- | ---------- | --------------- | ---- |
| pUSD | Pando USD  | 0%        | 15%            | 5.8%       | 1.476           | 80%  |
| USDT | Tether USD | 0%        | 15%            | 5.8%       | 1.476           | 80%  |
| BTC  | Bitcoin    | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| ETH  | Ethereum   | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| LTC  | Litecoin   | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| EOS  | EOS        | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| DOT  | Polkadot   | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| XIN  | Mixin      | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| MOB  | MoblieCoin | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| BOX  | BoxToken   | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| DOGE | DogeCoin   | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |


pUSD 및 USDT의 경우:![](../assets/stablecoin-model.png)

BTC, ETH, LTC, EOS의 경우: DOT, XIN, MOB, BOX 와 DOGE의 경우: ![](../assets/othercoins-model.png)


선택한 자금 시장의 이자율 모델을 이해하고 자산의 수익성과 안전을 위해 이자율의 변화를 모니터링하는 것이 중요합니다. 







