---
title: What's Pando Lake
date: 2021-07-22 22:33:07
---

[Pando Lake](https://lake.pando.im) is a decentralized protocol for automated liquidity provision built with the Mixin MTG (Mixin Trusted Group) technology, an alternative to smart contracts on Mixin Network.

It uses combined algorithms - functioning on a Curve-like, bespoke low slippage, low trading fee algorithm specifically for swapping between stablecoins and on the constant product formula `x*y=k` for the rest of pairs.

Each pair manages a liquidity pool made up of reserves of two tokens. The prices of the pair tokens are directly determined by the reserve balances.

Users can swap at a specific crypto assets market(pair) and/or become liquidity providers.

For the pairs `pUSD-USDT(ERC-20)`, `pUSD-USDT(TRC-20)`, `pUSD-USDC`, `pUSD-DAI`, and `BTC-wBTC`, the swapping fee is 0.04%. For the rest of pairs, the swapping fee is 0.3%.

The [trading fee](./key-concepts/trading-fee) is paid to all liquidity providers proportional to their shares of the liquidity pool.

[4swap](https://4swap.org) provides a mechanism named "Broker" that users interact with the protocol. Pando Lake  has its own Broker to serve the users. Please refer to ["Lake vs 4swap"](faqs/lake-vs-4swap) for more information.

**→** [Visit 4swap.org](https://4swap.org)  
**→** [Visit Pando Lake](https://lake.pando.im)  



