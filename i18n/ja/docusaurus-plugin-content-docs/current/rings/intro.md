---
title: Pando Ringsとは？
sidebar_position: 1
date: 2021-07-22 22:33:07
---

Pando Ringsは、Mixin MTG（Mixin Trusted Group）テクノロジーで構築されたアルゴリズムによる自律型金利プロトコルです。 それはあなたが暗号通貨を貸したり借りたりできる場所です。 あなたはそれをお金のためのオープンな市場と考えることができます。 ユーザーは暗号通貨を預けて利息を稼いだり、他の暗号資産を借りたりすることができます。

供給と借入の金利は、供給と需要に基づいてアルゴリズムで調整されます。


## How does Pando Rings work?

Supplied assets in Pando Rings are tracked in tokens called rTokens, Pando Rings' native tokens. rTokens are ERC-20 tokens that represent claims to a portion of an asset pool in Pando Rings.

For example, if you deposit BTC into Pando Rings, it is converted to rBTC. If you deposit ETH, it will be converted to rETH. rTokens are available in the connected wallet for further transactional purposes.

As the money market earns interest (borrowing increases), rTokens earn interest and become convertible to more of the underlying assets. If you deposit multiple coins, they'll each earn interest based on their individual rToken interest rates. You earn interest on Pando Rings by holding the rTokens.

Lending in Pando Rings is straightforward. After selecting the asset you wish to supply liquidity for and signing the transaction through your wallet, you instantly add the asset to the pool and start earning interest in real-time. At the same time, the assets are converted to rTokens.

Borrowing is a bit more complicated. To borrow, supplying is not enough - you have to make sure that you also have pledged, locking your rTokens into the system as collateral to earn the Borrowing Power (Borrow Balance). Every asset that is available for supply will add a different amount of borrowing power based on its collateral factor. Users can then borrow according to the Total Borrowing Power (Borrow Limit) they have.

There are shortcuts if your goal is to borrow - Quick Supply function is for you to quickly get the borrow balance as it enables you pledge when you supply the asset. Quick Borrow enables you to get the loan right away when you supply an asset.

Similar to many other DeFi projects, Pando Rings works with the concept of overcollateralization. This means that borrowers have to supply more value than they wish to borrow to avoid liquidation.

