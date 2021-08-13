---
title: Pando Leaf User Manual
sidebar_position: 3
date: 2021-08-08 22:33:07
---

## How to create a vault and mortgage coins

1. Visit [Pando Leaf](https://leaf.pando.im), or search Mixin ID 7000103924 at Mixin Messenger

2. On “My page” of Pando Leaf, click to create a vault or the “+” button at the bottom right, and the coin type selection will pop up. Choose the appropriate coin type according to your needs

3. On the corresponding minting page, respectively fill in the amount of assets you intend to deposit and the number of coins you wish to generate

4. Click the "Deposit Assets to Generate" button, pay the corresponding collateral, and wait for the robot to put in the money

Please pay attention to the risk warning. When the mortgage rate reaches the minimum mortgage rate, Pando Leaf will treat the asset as insolvent and initiate an auction on it

## How to repay the vault

1. First find and open Pando Leaf, and Mixin ID is 7000103924
2. On “My page” of Pando Leaf, find the vault to be repaid in the vault list, and click "Repay" on the operation button. If the vault is not unfolded (that is, the operation button cannot be found), click the card of the vault to unfold it
3. On the repayment page, fill in the amount of assets you intend to repay or click “Set as maximum” at the bottom right of the input box to directly repay all debts
4. Click the "Repay" button and pay the corresponding currency

## How to mint more coins from the vault

1. First find and open Pando Leaf, and Mixin ID is 7000103924
2. On “My page” of Pando Leaf, find the vault to be minted in the vault list, and click "Generate" on the operation button. If the vault is not unfolded (that is, the operation button cannot be found), click the card of the vault to unfold it
3. On the generation page, fill in the amount of assets you intend to generate or slide the progress bar below to adjust the minting amount
4. Click the "Generate" button and pay the corresponding currency

Please pay attention to the risk warning, setting the number of generations to the maximum or dragging the progress bar to full will cause your mortgage rate to reach the minimum mortgage rate

## How to increase collateral

1. First find and open Pando Leaf, and Mixin ID is 7000103924

2. On “My page” of Pando Leaf, find the vault you want to add collateral to in the vault list, and click "Deposit" on the operation button. If the vault is not unfolded (that is, the operation button cannot be found), click the card of the vault to unfold it

3. On the repayment page, fill in the amount of assets you intend to repay. Click on the wallet balance at the bottom left of the input box to quickly enter

4. Click the "Deposit" button and pay the corresponding currency

## How to get back the collateral

1. First find and open Pando Leaf, Mixin ID is 7000103924

2. On “My page” of Pando Leaf, find the vault from which you want to retrieve the collateral in the vault list, and click "Details" on the operation button. If the vault is not unfolded (that is, the operation button cannot be found), click the card of the vault to unfold it

3. On the details page, click the retrieve button at the bottom to enter the retrieve page

4. Fill in the amount of collateral assets you intend to retrieve or slide the progress bar below to adjust the amount

5. Click the "Retrieve" button and pay a "very small amount of CNB" transaction to get back the collateral

The significance of paying "very small amount of CNB" is to ensure that the user's behavior is issued by the user through a transaction record, and the operation record is recorded on the chain.

## How to participate in a clearing auction

1. First find and open Pando Leaf, and Mixin ID is 7000103924

2. Open the robot to the "Me" page of Pando Leaf, click the button on the upper right, and click Clear Auction to enter the auction list page.

3. In the auction list, find the card whose status is "Auction", and click to enter the corresponding bidding page

4. View the current auction information, enter the bid amount in the input box on the page

5. Click the "Bidding" button to make a payment and try to participate in the bidding.

The auction of Pando Leaf is divided into two stages. Please note that the bidding rules of the two stages and the meaning of the quantity entered under the corresponding rules are different.

The first stage is to bid for debt repayment, each time the amount needs to be larger than the previous number of times, and the upper limit is the total debt amount

The second stage is to bid on the amount of collateral. The amount of each bid must be smaller than the amount of the previous bid, and the lower limit is 0 (that is, the entire debt is directly repaid and the collateral is not required)

## Nouns and concepts in Pando Leaf

1. Basic concepts
- Vault
 - Collateral
 - Minting
 - Debt

2.Vault related
 - Deposit/Mortgage
 - Retrieve
 - Minting
 - Repayment
 - Mortgage
 - Minimum mortgage rate
 - Current price
 - Liquidation price
 - Annualized interest rate

3. Auction
 - Liquidation penalty
 - Market data
 - Collateral bidding
 - Liquidation penalty

4. Market data
 - Total mortgage
 - Total supply
 - Total mortgage rate
 - Next price and price prediction machine
 - Up to

### Basic concepts

#### Vault

Vault refers to the fact that users provide collateral and mint coins according to a certain mortgage type, thereby creating an independent small ledger "vault" in the Pando Leaf system. The type of the vault is specified when it is created. A series of parameters such as the collateral, the minimum mortgage rate, the minimum/maximum coinage, and the annualized interest rate are specified in the vault type.

#### collateral

The collateral refers to the assets deposited by the user in Pando Leaf as a reliable proof of the value of the

#### Minting

Minting refers to the act of generating tokens from the vault as a guarantee after users have pledged their assets. It should be noted that for the same type of vault, the total supply of minting quota is shared by all the treasuries of this type, but each vault is responsible for its own debts arising from the coinage.

#### Debt

After the user minting coins from the vault, the total amount of collateral remained unchanged, and the total value in the vault decreased, so the user incurred debts to the vault.

### Vault

#### Deposit/Mortgage

It refers to transfer additional collateral to the vault

#### Retrieve

It refers to taking out the collateral from the vault

#### Generate/Mint

It refers to minting coins from the vault, which will generate corresponding debts and accumulate increases based on the annualized interest rate of the vault

#### Repay

It refers to the behavior of transferring to gold coins to repay eliminating debts

#### Minimum mortgage rate

The liquidation limit of the vault. When the mortgage rate in the vault is as low as the value of the minimum mortgage rate, the vault will be liquidated. The minimum mortgage rate is specified by the vault type

#### Mortgage rate

The ratio between the collateral in the vault and the debt. The lower the ratio, the higher the risk, and the vault will be liquidated when it reaches the minimum mortgage rate

#### Current price

The current price of 1 unit of collateral / 1 unit of debt, such as1 BTC/pUSD

#### Liquidation price

The relative price of collateral and debt in the current vault is essentially another embodiment of the mortgage rate. The liquidation price should be lower than the current price. When the liquidation price reaches the current price, the vault will be liquidated

#### Annualized interest rate

After the debt is generated, interest will continue to be generated. The annualized interest rate refers to how much the growth rate of the debt interest will increase per year.

### Auction

#### Liquidation auction

When a vault is insolvent, the system will initiate a liquidation of the vault, and the collateral in the vault and the corresponding debt will be taken out of the vault for auction. After the auction is initiated, the collateral in the vault will be managed by the system and no longer belong to the vault, and the corresponding debt will also be transferred to the system to undertake.

#### Debt bidding

In the first stage of the auction, the meaning of bidding at this stage is "how much debt you are willing to bid to repay." Starting from 0 and increasing the price, there is a maximum bid limit. Each bid cannot be the same as the previous one, and must be increased by at least 3% or the bid must be the maximum bid limit. When there is the highest bid, it will enter the second stage, which is the collateral bidding auction stage.

#### Collateral bidding

In the second stage of the auction, the meaning of bidding at this stage is "I am willing to pay all debts, and I will only bid for a smaller part of the collateral." At this stage, the auction starts with the full amount of collateral, and each bid price must be 3% less than the total amount of the collateral last time, or the bid is 0. When the bid price is 0, it means that someone is willing to assume all the debts without any collateral, and the collateral that has not been taken away will be returned to the original vault.

#### Liquidation penalty

Liquidation penalty is the punishments for those who blow up. When the vault is liquidated for auction, the debt bid limit set by the system for the auction is not the debt of the original vault, but a certain percentage of the liquidation penalty added to the debt, and the liquidation penalty after the debt being wiped will belongs to the system. Liquidation penalty is also a liquidation penalty mechanism that attempts to retrieve the collateral at no cost through the method of "the original vault owner assumes all debts."



### Market data

#### Total mortgage

The valuation of the total mortgage assets of all the vaults in the entire Pando Leaf

#### Total debt

The sum of the total coinage and interest of all the vaults in the entire Pando Leaf.

#### Total mortgage rate

The ratio of total mortgage to total debt reflects to a certain extent the security of the coins minted by Pando Leaf.

#### Next price and price oracle

The calculation of mortgage rate and liquidation price in Pando Leaf is not real-time. This is because in practice, an attacker may use a large amount of funds to fast in and out (commonly known as pin-in) to attack the mortgage rate. At the time that the market fluctuates rapidly and sharply, it is necessary to leave a certain reaction and response time for the user. The mechanism of price prediction machine is introduced in Pando Leaf.

Price prediction opportunities continuously record the prices of multiple channels, use certain algorithms to eliminate single-channel attacks, pin-in attacks and other vicious behaviors, and lag the real-world price feedback in the system to give users reaction and response time .

The next price is the next price that the price oracle will provide to the system.

#### Up to

Since the same type of vaults share the total supply quota, each type will have a remaining quota value of this type, and the maximum value that can be provided is this value.

## How pando leaf works

Pando Leaf is a product that issues stable price currency based on over-collateralization. Users can mortgage high-quality and valuable assets in Pando Leaf to obtain stable currency at a lower rate. When the user's mortgage assets are insufficient, Pando Leaf will use the liquidation auction system to deal with insolvent vault to prevent bad debts in the system.

But it seems that many concepts of Pando Leaf are very similar and similar to lending. How does Pando Leaf work and how to stabilize currency prices? What is the difference with borrowing? The following will try to explain these two parts.

### How to stabilize coin prices

The form of Pando Leaf looks a lot like a loan. It also uses words like debt in some terms, because currency cannot be created out of nothing and must rely on valuable entities.

In the traditional centralized currency system, the state provides an endorsement for the value of the currency, in exchange for the stability of the currency price issued by the central bank within the jurisdiction of the system.

In a decentralized system, for every currency issued, if the price is stable, it must rely on sufficient guarantees. This is why Pando Leaf's vaults are over-collateralized.

However, only over-collateralization is not enough. When the price of collateral assets fluctuates, Pando Leaf needs a mechanism for debt settlement, which is the liquidation auction.

### Liquidation auction

The liquidation auction is that when the mortgaged assets are insufficient, Pando Leaf will take the mortgaged assets for auction to offset the debts that have been generated. It should be noted that each vault has a corresponding minimum mortgage rate, but even if the assets are touched, the lowest mortgage rate triggers liquidation, and because of over-collateralization, participation in auctions can often buy corresponding assets at prices lower than the market, so that there will be no bad debts except certain very extreme cases.

The specific rules of the auction will not be described in detail in this article. You can find out more Pando Leaf's clearing auction.

However, even if the auction does have insolvent bad debts, Pando Leaf has a corresponding mechanism to deal with it.

## Pando Leaf's liquidation auction

When the vault's mortgage rate reaches the minimum mortgage rate, Pando Leaf will consider that the vault has blown up and will initiate liquidation.

### Initiate a liquidation auction

Pando Leaf will initiate one or more auctions based on the total amount of mortgaged assets and debts in the vault. The assets and debts of each auction are controlled within a certain range. The specific auction limit is in accordance with "Most users can participate" and " It’s the principle of auctioning it off as few times as possible.

When Pando Leaf initiates liquidation, the auction system will take out a certain amount of collateral from the vault one or more times, and at the same time it transfers the corresponding certain amount of debt to the Pando Leaf auction system.

### Auction process

**The first stage: debt bidding**

The goal of the first stage is to auction the assets at a price that is sufficient to offset the debt. The total debt is the upper limit of the bid for this stage.

The bid at this stage is the bidding for the debt. For example, for the example where the collateral is BTC and the debt is pUSD, the bid amount is the amount of pUSD you will pay for the auction.

Each increase shall not be less than 3% of the previous bidder’s bid or the bid is the highest price (the upper limit of the bid).

When the auction bid reaches the highest bid, the achievement of the first stage of the auction will immediately enter the second stage.

**The second stage: bidding for collateral**

The goal of the second stage is to bid for the amount of collateral. Since Pando Leaf's vaults are all over-collateralized, we hope that the auction price will be more in line with the current market price, while at the same time being able to recover some of the excess losses for the vaults.

The bid at this stage is a bid for the amount of collateral, no matter how much the bid is, and it means that the bidder will be willing to bear all debts.

Each bidding price needs to be 3% less than the previous bidder's quantity, or a minimum value of 0. And bidding 0 collateral will mean that the bidder does not need any collateral, and directly repays all debts.

During the second stage of the auction, the collateral that is no longer participating in the auction will be returned to the original vault immediately by the system.

After the second stage is over, a liquidation auction is terminated.