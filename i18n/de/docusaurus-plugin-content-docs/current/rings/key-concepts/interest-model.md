---
title: Interest Rate Determination
date: 16-10-2021 12:33:07
---

All interest rates in Pando Rings are determined as a function of **utilization rate**. **With the changes in the utilization rate, interest rates continuously fluctuate.**


### The Utilization Rate

The utilization rate for a money market is defined as:


``````
Utilization_rate = market.total_borrows/(market.total_cash + market.borrows - market.reserves)
``````

Where
- market.total_borrows refers to the amount of total borrow of a certain money market
- market.total_cash refers to the amount left in the system of a certain money market
- market.reserves refers to the amount that is kept as profit of a certain money market

The formula can be interpreted roughly as the percentage of money borrowed out of the total money supplied.

A high utilization rate signifies that demand is high and a lot of borrowing is taking place, so interest rates go up as an incentive to get more people to inject cash into the system. A low utilization rate signifies that demand for borrowing is low, so interest rates go down to encourage more people to borrow cash from the system.


### Borrow rate

Currently, the borrow rate model of all money markets on Rings follow the Jump Rate model.

In this model, there is a key parameter defined as **Kink**, which is a value of the utilization rate and creates a sharp turning point where the interest rates spike.

The borrow rate of the jump rate model is defined as:

**When the utilization rate ≤ Kink:**

```
Borrow_interest_rate = multiplier * market.utilization_rate + base_rate
```

**When the utilization rate > Kink:**

```
Borrow_interest_rate = multiplier * Kink + jump_multiplier * (market.utilization_rate - Kink) + base_rate
```

Where
- base_rate per year is the minimum borrowing rate
- multiplier per year is the rate of increase in interest rate with respect to utilization
- Kink is the point in the model in which the model follows the jump multiplier
- jump_multiplier per year is the rate of increase in interest rate with respect to utilization after the Kink

### Supply rate

The supply rate is calculated as follows:

```
Supply_interest_rate = Borrow_interest_rate * market.utilization_rate * (1 - market.reserve_factor)
```

Where
- market.utilization_rate is the utilization rate of a certain market
- market.reserve_factor controls what percentage of the interest borrowers pay for a certain market is kept within the system to protect lenders against borrow default and liquidation malfunction
- Borrow_interest_rate is the interest rate that borrowers pay for a certian market


### Parameters of all Pando Rings' money markets
(last updated on Oct 18, 2021)

Currently, all money markets has a Kink of 80%, meaning, when utilization ratio reaches 80%, both the supply and borrow interest rates will have a sudden jump.

| Symbol | Name       | base_rate | reserve_factor | multiplier | jump_multiplier | kink |
| ------ | ---------- | --------- | -------------- | ---------- | --------------- | ---- |
| pUSD   | Pando USD  | 0%        | 15%            | 5.8%       | 1.476           | 80%  |
| USDT   | Tether USD | 0%        | 15%            | 5.8%       | 1.476           | 80%  |
| BTC    | Bitcoin    | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| ETH    | Ethereum   | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| LTC    | Litecoin   | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| EOS    | EOS        | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| DOT    | Polkadot   | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| XIN    | Mixin      | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| MOB    | MoblieCoin | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| BOX    | BoxToken   | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |
| DOGE   | DogeCoin   | 0%        | 20%            | 29.13%     | 3.6255          | 80%  |


For pUSD and USDT: ![](../assets/stablecoin-model.png)

For BTC, ETH, LTC, EOS. DOT, XIN, MOB, BOX and DOGE: ![](../assets/othercoins-model.png)


It is important to understand the interest rate model of your selected money markets and monitor the changes in the interest rates for the profitability and safety of your assets. 







