---
title: What if the transfer fails?
sidebar_position: 3
date: 2021-08-08 22:33:08
---

Don't worry, your assets are safe and there will be no loss if the transfer fails. There are several possibilities.

## How to deal with transaction failure

Common transaction failures are caused by the transaction exceeding slippage. Please refresh the page to obtain the latest transaction pair data.

The information displayed by Pando Lakeon the web page is the estimated information at the moment you enter the quantity. When you actually pay, it may happen that due to the transaction behavior of others, the actual amount of assets you will get when you pay is different from the estimated amount. There is a large difference in quantity, Pando Lakewill actively reject this kind of transaction with a large difference between the expected and actual results to reduce the loss caused by the difference between the estimated and the actual value.

We provide a parameter name slippage, which can be set on the gear ⚙ icon button on the right side of the transaction button. The slippage is the difference between the estimated information and the actual transaction result during Pando Laketransactions.

The greater the slippage, the higher the tolerance for the expected difference in the transaction, and the success rate of the transaction will increase, but it may also result in greater losses.
The smaller the slippage, the lower the tolerance for the expected difference of the transaction, the lower the transaction success rate, but each order will be more in line with the estimated situation you see on the web page.
The default value of slippage is 1%, that is, when the actual transaction differs from the estimated transaction amount you see on the webpage by more than 1%, the Pando Lake engine will reject the transaction.

## How to deal with liquidity injection failure

The common failure of liquidity injection is caused by exceeding slippage. Please refresh the page to get the latest trading pair data.

When injecting liquidity, there is a very important principle: the injection behavior should not change the current trading pair price.

Therefore, there is also the concept of slippage when injecting liquidity. When injecting liquidity, the proportion of assets in the liquidity pool is changed due to the trading behavior of others, or in a more general sense, the price of the liquidity pool occurs due to the transaction. Big change. There is a difference between the injected assets and the current liquidity pool ratio. If the difference exceeds a certain ratio, the liquidity injection will fail. That is, slippage is exceeded.

There is also a situation where the injection fails, that is, the two assets injected are too small to obtain the minimum amount of LP shares. It will also lead to failure to inject liquidity.

If you encounter other situations in the transaction that cause the transaction to fail, please contact our community manager-Chris (ID: 37160854) or ask questions in the Pando Lakeofficial community (ID: 7000103578)