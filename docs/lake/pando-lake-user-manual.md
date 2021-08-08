---
title: Pando Lake User Manual
sidebar_position: 2
date: 2021-08-08 22:33:07
---

Welcome to Pando Lake.



## How to trade with pando lake

1. First find Pando Laker robot in Mixin messenger, id is 7000103537
2. On the transaction page (ie SWAP! page), select the asset you want to pay and purchase the proposed asset to improve the payment experience. We strongly request that the operation be performed in the wallet. You can authorize by clicking **Connect Wallet**. 
3. Enter the amount in the sell or get input box, and check whether the selling, getting, price, price impact and other values are in line with expectations. 

 - Price display, you can switch the pricing method by clicking the small icon button on the right side of the price
 - The handling fee is the ratio of the asset sold multiplied by the handling fee, the current ratio is 0.3%.
 - Price influence refers to the percentage of shadow lines that will be generated on the price of the system after the transaction is completed. When the price impact is greater, it means that your order has produced a behavior similar to "pulling/smashing orders".
4. Click the SWAP! button, enter the PIN code in the pop-up payment pop-up window and make the payment. Please wait for a while after the payment is completed, the page will automatically refresh after the transaction is completed or failed.

## How to add liquidity to trading pairs

1. Since adding liquidity requires recording your liquidity share, we strongly recommend that you link your wallet for authorization before proceeding.
2. First enter the preparation page for adding liquidity. There are many entry points. The common way is to click the plus button on the Me page, and click Add Liquidity on the transaction page to enter.
3.Select the coins to add liquidity. At this time, there will be two situations:
If this trading pair has never been added with liquidity before, and we are unable to obtain the effective price of one of the assets, a risk alert will be displayed at the top of the page. At this time, you can enter the amount to be added in the two quantity input boxes at will The amount of liquidity.
If this trading pair has liquidity, or we can obtain the effective prices of all two assets, you can enter the quantity of one of the assets, and the required quantity of the other asset will be automatically replenished.
4. After inputting, check the result prediction of liquidity injection. After confirming that it is correct, click the button below to go to the review page for adding liquidity (you need to link the wallet first).
5. Click the two "Inject" buttons respectively, and pay in the pop-up payment pop-up window. After completing the injection of the two amounts, click the "Finish" button to complete the liquidity injection. After a short wait for the system to confirm (usually the system The speed of confirmation is close to "Confirmation completed immediately"), the page will automatically jump away, and the liquidity has been injected.

## How to withdraw liquidity

1. The prerequisite for withdrawing liquidity is **must** be connected to the wallet, otherwise the liquidity share information cannot be obtained correctly.

2. Click the Withdraw button on the trading pair details page, or in the trading pair that has added liquidity on the My page, click to expand the trading pair panel, and click the corresponding withdrawal button.

3. Click the preset ratio button or slide the slider, select the ratio you want to extract liquidity, and confirm the liquidity information to be extracted. Here will show you the estimated amount of assets you will get after withdrawing liquidity.

 Select the ratio, confirm the information, and click Extract.

4. Click the Withdraw button to pay for the LP Token corresponding to the liquidity. If the transaction pair does not support the LP Token, the payment will be 0.00000001 CNB. After the payment is completed, wait for the system to clear the payment. After the withdrawal is completed, the system will pop up a prompt and automatically jump. This process usually only takes a few seconds to complete.

## How Pando Lake works

The Pando Lake is a DApp built on the Mixin Network and consists of the Pando Lake engine and website.

The Pando Lake engine uses a decentralized automatic liquidity protocol: Automatic Market Maker Agreement (AMM). There is no need to bid, to match transactions, and there is no centralized organization and facilities to guarantee transactions. Each liquidity pool is controlled by the Pando Lake engine and supports operations such as asset exchange and liquidity injection/withdrawal. Each liquidity pool essentially uses the formula x*y=k to ensure the rationality of the transaction.

## How to determine the price on pando lake

The price is determined by the relative amount of assets (token) on both sides of each liquidity pool. Pando Lakewill maintain a constant formula: x*y=k, under this condition, x=token1, y = token2, k=constant. Each transaction will reduce a certain amount of tokens in exchange for the amount of another token. During this period, the constant k remains unchanged and the balance is updated. Therefore, each transaction will adjust the balance of the token, which will cause the price of the system to change.

In this mechanism, the price is essentially only a reflection of the quantity, so when the exchange transaction is carried out, the ratio of the number of assets to be sold and the number of assets acquired will be calculated to obtain the actual transaction price.

## Transaction fee description

Pando Lakeis developed based on Mixin Network and does not require transfer fees.

However, Pando Lakeneeds to provide incentives to liquidity providers. During the transaction, a certain fee will be charged from the sold coins and filled into the liquidity pool. The income will be shared by the liquidity provider according to the proportion of shares provided.

The current transaction fee ratio is 0.3%.

## How is the initial price of the liquidity pool determined

The initial price of the liquidity pool is determined by the number of two assets in the first record of adding liquidity. Pando Lakewill display a risk alert when adding liquidity for the first time, reminding users that they are adding liquidity for the first time.

When adding liquidity for the first time, Pando Lakewill try to obtain the legal currency price of the two assets or the price denominated in BTC to determine the quantity ratio of the two assets.

However, when both the legal currency price and the BTC denominated price cannot obtain an effective price, Pando Lakecannot predict the proportion of the two assets that should be added, and the initial price of the liquidity pool will be completely determined by the first liquidity provider.

- As a trader, please don’t worry. If the quantity ratio provided by the first provider is not reasonable, that is, when the price does not meet market expectations, this is a good time for spreads and arbitrage.
- As a provider, please be cautious in providing liquidity, especially when the system cannot estimate the proportion of the quantity. The number of errors that differ greatly from the market price will cause you to suffer huge losses.

## How is the ratio of injected/extracted liquidity determined?

When injecting and withdrawing liquidity, the principle of setting the ratio of the amount of assets on both sides is: do not change the current trading pair price.

The injection of liquidity is specifically divided into two situations:

When injecting liquidity for the first time, we will calculate the amount to be injected based on the fiat currency prices of the assets on both sides. If the appropriate fiat currency price cannot be obtained, the first user who provides liquidity determines the amount by himself. It should be noted that in the case where the user decides the quantity by himself, if the injected price is unreasonable, other users will arbitrage through external exchange, making the price tend to be in a reasonable range.
If liquidity is injected into a trading pair with existing liquidity, it will be added proportionally based on the current total amount of the liquidity pool.
There is only one situation for withdrawing liquidity:

Based on the total amount of assets on both sides of the current liquidity pool and the proportion of shares to be withdrawn.

## Which tokens are supported

In theory, we can provide support for the assets supported by Mixin Network, but the current list of assets we choose to support is based on the following rules:

A considerable ecology or high reputation has been formed in the blockchain industry.
There is already a certain audience base in the Mixin ecological community.
The project party is willing to provide assets as the initial liquidity market maker, and the net value reaches the standard recognized by the Fox.ONE team.
