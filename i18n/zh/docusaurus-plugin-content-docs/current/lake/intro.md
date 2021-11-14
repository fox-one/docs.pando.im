---
title: 什么是 Pando Lake
date: 2021-07-22 22:33:07
---

[Pando Lake](https://lake.pando.im) 是一个去中心化协议，用于实现自动的资产流动性供应，基于Mixin网络上的智能合约替代方案Mixin MTG（Mixin Trusted Group）技术构建。

它使用组合算法 - 运行在Curve-like, bespoke low slippage算法上，低交易费算法专门用于稳定币之间的兑换，其余货币对的交易费基于恒定乘积公式 `x*y=k`算法。

每个资产对管理一个由两种代币储备金组成的流动性池。 资产对中代币的价格直接由储备金余额决定。

用户们可以在特定的加密资产市场（对）进行资产交换和/或成为资产流动性提供者。

对于资产对 `pUSD-USDT(ERC-20)`, `pUSD-USDT(TRC-20)`, `pUSD-USDC`, `pUSD-DAI`, 和 `BTC-wBTC`, 交换手续费为 0.04%。 其余的资产对，交换手续费为0.3%。

[交易费](./key-concepts/trading-fee)按照资金流动性提供者在流动性池中提供的资金份额比例，支付给了所有的资金流动性提供者。

[4swap](https://4swap.org)提供了名为“代理”的机制，用户可以通过该机制与协议进行交互。 Pando Lake有自己的代理来为用户提供服务。 更多信息请参考 ["Lake vs 4swap"](faqs/lake-vs-4swap)。

**→** [访问 4swap.org](https://4swap.org)  
**→** [访问 Pando Lake](https://lake.pando.im)  



