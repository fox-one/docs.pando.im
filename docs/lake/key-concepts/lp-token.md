---
title: Liquidity Provider Token (LP Token)

date: 2021-08-15 22:33:07
---

Liquidity provider tokens or LP tokens are ERC-20 tokens issued to liquidity providers on Pando Lake / 4swap. You can think of it as an IOU or a receipt. 

LP tokens are used to track individual contributions to the overall liquidity pool, as LP tokens held correspond proportionally to the share of liquidity in the overall pool.

At the most basic level, LP tokens work on the following formula:

**Total Value of Liquidity Pool / Circulating Supply of LP Tokens =  Value of 1 LP Token**

Just like other assets, the LP tokens can be transerred and traded.  

Whenever a trade occurs, a [fee](./trading-fee) is charged to the transaction sender. This fee is distributed pro-rata to all LPs in the pool upon completion of the trade.

To retrieve the underlying liquidity, plus any fees accrued, liquidity providers can remove liquidity, "burning" their liquidity tokens. This will allow them to exchange LP tokens for their portion of the liquidity pool, plus the proportional fee allocation. **The yield will not be distributed while the user is still holding the LP tokens.**





