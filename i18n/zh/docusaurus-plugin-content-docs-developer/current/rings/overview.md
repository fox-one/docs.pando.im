---
title: 总览
date: 2021-03-20 12:38:07
---

基于[Mixin](https://github.com/MixinNetwork/mixin) [MTG技术](https://github.com/MixinNetwork/developers.mixin.one/blob/main/developers/src/i18n/en/document/mainnet/mtg.md)实现的[Compound协议](https://github.com/compound-finance/compound-protocol)。

## rToken

您向市场提供一定数量的加密货币后获得的相应的凭证(Token)。

## 功能

### 供应

用户通过向市场供应加密货币以提供流动性， 同时获取对应的 rToken。 通过提供流动性他们能获得利息收益。

![](overview/uc_supply.jpg)

### 抵押

用户必须先向市场质押rToken后才能借款。

![](overview/uc_pledge.jpg)

### 取消抵押

用户赎回向市场抵押的rToken。

![](overview/uc_unpledge.jpg)

### 兑换

用户通过归还rToken可以换回之前供应的相应加密货币，包括作为提供流动性奖励的利息收益。

![](overview/uc_redeem.jpg)

### 借款

用户以一定的利率从市场借入加密货币。

![](overview/uc_borrow.jpg)

### 还款

用户偿还借入的加密货币并支付借币期间的累积利息。

![](overview/uc_repay.jpg)

### 平仓清算

由于市场价格波动，用户的贷款金额可能会超过其抵押资产的金额。 当这种情况发生时，其他用户可以使用较低的价格来获得用户抵押的资产，以便偿还用户抵押资产未能覆盖的债务。

![](overview/uc_liquidity.jpg)

