---
title: 가격은 어떻게 결정되나요?
sidebar_position: 2
date: 2021-08-15 22:33:07
---

Pando lake/4swap에서의 모든 거래는 가격에 영향을 미칠 것입니다.

If the total amount of the liquidity pool is large, the transaction amount is negligible relative to the depth of the liquidity pool, and this transaction will have a very low price impact, which called [slippage](https://docs.pando.im/docs/lake/key-concepts/slippage-impernament-loss/).

When the impact reaches a certain level, the price on 4swap is different from the prices on other exchanges, which will form an arbitrage space. There are many automatic arbitrage robots working hard all the time to ensure consistent prices.

````mdx-code-block
:::caution

It is important to pay attention to the size of the transaction amount relative to the total amount of liquidity. If the transaction amount is too high relative to the total amount of the liquidity pool, the transaction price will seriously deviate from the market price, resulting in greater losses.

:::
````

