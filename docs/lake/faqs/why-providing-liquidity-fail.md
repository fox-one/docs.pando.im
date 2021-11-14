---
title: Why did I fail in providing liquidity?

date: 2021-08-15 22:33:07
---

import {
  Improvement,
} from "@site/src/components/admonitions";

<Improvement />


The common failure of liquidity injection is caused by exceeding slippage. Please refresh the page to get the latest trading pair data.

When injecting liquidity, there is a very important principle: the injection behavior should not change the current trading pair price.

Therefore, there is also the concept of slippage when injecting liquidity. When injecting liquidity, the proportion of assets in the liquidity pool is changed due to the trading behavior of others, or in a more general sense, the price of the liquidity pool occurs due to the transaction. Big change. There is a difference between the injected assets and the current liquidity pool ratio. If the difference exceeds a certain ratio, the liquidity injection will fail. That is, slippage is exceeded.

There is also a situation where the injection fails, that is, the two assets injected are too small to obtain the minimum amount of LP shares. It will also lead to failure to inject liquidity.

If you encounter other situations in the transaction that cause the transaction to fail, please contact our community manager-Chris (ID: 37160854) or ask questions in the Pando Lakeofficial community (ID: 7000103578)