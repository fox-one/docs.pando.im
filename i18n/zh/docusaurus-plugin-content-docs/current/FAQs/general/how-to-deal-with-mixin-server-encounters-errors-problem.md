---
title: 如何处理 "Mixin服务器遇到错误 "的问题
date: 2022-09-21 12:33:07
---

当你在Pando产品中看到 "Mixin服务器遇到错误 "时，一种可能的情况是你要支付的加密货币有太多的utxo，其数量已经超过256，不足以完成交易的支付。 换句话说，你需要在付款前将零钱合并成整钱。

![](../assets/bug.png)

你可以通过支付更多的次数来合并零钱，直到有足够的整钱来支付。 此外，你还可以将你要支付的加密货币转移到一个新的Mixin钱包，然后再转回来，再次支付给Pando。 这相当于把零钱换成整钱。

你可以通过[fennec](https://pando.im/wallet/)轻松建立一个新的Mixin钱包。

[了解更多关于fennec 的详细信息](https://docs.pando.im/docs/apps/wallets/#fennec)