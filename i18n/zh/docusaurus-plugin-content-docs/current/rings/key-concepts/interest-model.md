---
title: 利率确定
sidebar_position: 4
date: 2021-10-16 12:33:07
---

Pando Rings的所有利率都是由**利用率**函数决定的。 **随着利用率的变化，利率不断波动。**


### 利用率

资金市场的利用率定义如下：


``````
利用率 = 市场的总贷款/(市场总现货 + 市场贷款 - 市场准备金)
``````

其中：
- 市场总贷款额 是指特定代币市场的贷款总额
- 市场总现货 是指特定代币市场系统中剩余的现货
- 市场准备金 是指作为特定货币市场的利润保留的金额

该公式可以大致理解为贷款资金占总供应资金的百分比。

高利用率意味着需求旺盛，大量借款正在发生，利率上升则是为了激励更多人向系统内注入资金。 低利用率意味着借款需求较低，利率下降则可以鼓励更多人从系统中借出资金。


### 借款率

目前，Pando Rings市场内所有代币的借款利率模型都遵循跳跃利率模型。

在这个模型中，有一个关键参数被定义为**Kink**，代表利用率的值，并为利率起伏开辟了一个灵敏的转折点。

跳跃利率模型的借贷利率定义如下：

**当利用率≤Kink时：**

```
Borrow_interest_rate = multiplier * market.utilization_rate + base_rate
```

**当利用率 > Kink时：**

```
Borrow_interest_rate = multiplier * Kink + jump_multiplier * (market.utilization_rate - Kink) + base_rate
```

其中：
- 每年的基本利率是最低借款利率
- 每年的乘数是利用率的增长率
- Kink是模型中跟随跳跃乘数的点
- 每年的跳跃乘数是Kink之后相对于利用率的利率增长率

### 供应率

供应率计算方法如下：

```
Supply_interest_rate = Borrow_interest_rate * market.utilization_rate * (1 - market.reserve_factor)
```

其中：
- market.utilization_rate 是某个市场的利用率
- market.reserve_factor 借款人为某个市场支付的利息百分比被保留在系统内，以保护贷方免受借款违约和清算故障的影响
- Borrow_interest_rate 是借款人为某个市场支付的利率


### 所有Pando Rings货币市场的参数
(最近一次更新于2021年10月18日)

目前，所有货币市场都有80%的kink，也就是说，当利用率达到80%时，供给利率和借款利率都会突然升高。

| 币种   | 名称          | base_rate | reserve_factor | 乘数     | 跳跃乘数   | kink |
| ---- | ----------- | --------- | -------------- | ------ | ------ | ---- |
| pUSD | Pando USD   | 0%        | 15%            | 5.8%   | 1.476  | 80%  |
| USDT | Tether USD  | 0%        | 15%            | 5.8%   | 1.476  | 80%  |
| BTC  | Bitcoin     | 0%        | 20%            | 29.13% | 3.6255 | 80%  |
| ETH  | Ethereum    | 0%        | 20%            | 29.13% | 3.6255 | 80%  |
| LTC  | Litecoin    | 0%        | 20%            | 29.13% | 3.6255 | 80%  |
| EOS  | EOS         | 0%        | 20%            | 29.13% | 3.6255 | 80%  |
| DOT  | 波卡 Polkadot | 0%        | 20%            | 29.13% | 3.6255 | 80%  |
| XIN  | Mixin       | 0%        | 20%            | 29.13% | 3.6255 | 80%  |
| MOB  | MoblieCoin  | 0%        | 20%            | 29.13% | 3.6255 | 80%  |
| BOX  | BoxToken    | 0%        | 20%            | 29.13% | 3.6255 | 80%  |
| DOGE | DogeCoin    | 0%        | 20%            | 29.13% | 3.6255 | 80%  |


对于pUSD 和 USDT： ![](../assets/stablecoin-model.png)

对于BTC, ETH, LTC, EOS。 DOT, XIN, MOB, BOX 和 DOGE： ![](../assets/othercoins-model.png)


为了您的资产的盈利和资产安全，了解您选择的货币市场的利率模型并监控利率的变化非常重要。 







