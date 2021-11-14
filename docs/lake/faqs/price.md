---
title: How are prices determined?

date: 2021-08-15 22:33:07
---

Every transaction on pando lake/4swap will have an impact on the price. 

If the total amount of the liquidity pool is large, the transaction amount is negligible relative to the depth of the liquidity pool, and this transaction will have a very low price impact, which called [slippage](https://docs.pando.im/docs/lake/key-concepts/slippage-impernament-loss/).

When the impact reaches a certain level, the price on 4swap is different from the prices on other exchanges, which will form an arbitrage space. There are many automatic arbitrage robots working hard all the time to ensure consistent prices.

````mdx-code-block
:::caution

It is important to pay attention to the size of the transaction amount relative to the total amount of liquidity. If the transaction amount is too high relative to the total amount of the liquidity pool, the transaction price will seriously deviate from the market price, resulting in greater losses.

:::
````

