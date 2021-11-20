---
title: 为什么我的交易失败？
date: 2021-08-15 22:33:07
---

import { Improvement, } from "@site/src/components/admonitions";

<Improvement />


常见的交易失败是由于交易的超额滑点造成的。 请刷新页面以获取交易对的最新数据。

The information displayed by Pando Lake on the web page is the estimated information at the moment you enter the quantity. 当您实际支付时，可能会出现由于他人的交易行为导致您支付时实际获得的资产数量与预估金额不同的情况。 There is a large difference in quantity, Pando Lake will actively reject this kind of transaction with a large difference between the expected and actual results to reduce the loss caused by the difference between the estimated and the actual value.

我们提供了一个名称为滑点的参数，可以在交易按钮右侧的齿轮⚙图标按钮上设置。 The slippage is the difference between the estimated information and the actual transaction result during Pando Lake transactions.

滑点越大，对交易预期差异的容忍度越高，交易的成功率就会提高，但也可能造成较大的损失。 滑点越小，对交易预期差异的容忍度越低，交易成功率越低，但每笔订单会更符合您在网页上看到的估计情况。 滑点的默认值为 1%，即当实际交易与您在网页上看到的预估交易金额相差 1% 以上时，Pando Lake 引擎将拒绝该交易。