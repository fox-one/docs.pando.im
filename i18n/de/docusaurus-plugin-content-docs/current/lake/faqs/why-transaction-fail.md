---
title: Why did my transaction fail?
date: 2021-08-15 22:33:07
---

import { Improvement, } from "@site/src/components/admonitions";

<Improvement />


Common transaction failures are caused by the transaction exceeding slippage. Please refresh the page to obtain the latest transaction pair data.

The information displayed by Pando Lakeon the web page is the estimated information at the moment you enter the quantity. When you actually pay, it may happen that due to the transaction behavior of others, the actual amount of assets you will get when you pay is different from the estimated amount. There is a large difference in quantity, Pando Lakewill actively reject this kind of transaction with a large difference between the expected and actual results to reduce the loss caused by the difference between the estimated and the actual value.

We provide a parameter name slippage, which can be set on the gear ⚙ icon button on the right side of the transaction button. The slippage is the difference between the estimated information and the actual transaction result during Pando Laketransactions.

The greater the slippage, the higher the tolerance for the expected difference in the transaction, and the success rate of the transaction will increase, but it may also result in greater losses. The smaller the slippage, the lower the tolerance for the expected difference of the transaction, the lower the transaction success rate, but each order will be more in line with the estimated situation you see on the web page. The default value of slippage is 1%, that is, when the actual transaction differs from the estimated transaction amount you see on the webpage by more than 1%, the Pando Lake engine will reject the transaction.