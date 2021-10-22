---
title: 总览
sidebar_position: 1
date: 2021-03-20 12:38:07
---

基于[Mixin](https://github.com/MixinNetwork/mixin) [MTG技术](https://github.com/MixinNetwork/developers.mixin.one/blob/main/developers/src/i18n/en/document/mainnet/mtg.md)实现的[Compound协议](https://github.com/compound-finance/compound-protocol)。

## rToken

您向市场提供一定数量的某种加密货币后获得的相应证书令牌(Token)。

## 功能

### 供应

用户向市场提供加密货币以提供流动性， 并获取相应的 rToken。 他们通过提供流动性获得利息收益。

![](overview/uc_supply.jpg)

### 抵押

用户必须在借款前向市场质押rToken。

![](overview/uc_pledge.jpg)

### 取消抵押

用户赎回向市场抵押的rToken。

![](overview/uc_unpledge.jpg)

### 兑换

用户返回rToken就可以换取之前供应的相应加密货币，以及作为提供流动性奖励的利息收益。

![](overview/uc_redeem.jpg)

### 借款

用户以一定的利率从市场借入加密货币。

![](overview/uc_borrow.jpg)

### 还款

用户偿还借入的加密货币以及借款期间的累积利息。

![](overview/uc_repay.jpg)

### 平仓清算

由于市场价格波动，用户的贷款价值可能会超过其抵押资产的价值。 当这种情况发生时，其他用户可以使用较低的价格来获得用户抵押的资产，以便偿还用户抵押资产未能覆盖的债务。

![](overview/uc_liquidity.jpg)

