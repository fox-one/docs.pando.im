---
title: Withdrawing assets from Pando Rings
date: 2021-09-04 12:33:07
---

When you want to get back the asset you supplied to the market, you will need to withdraw. After withdrawing, you will stop earning supply interest.

Click on the supplied asset card on the Me page, then click on "Withdraw", you will then land on the Withdraw page.

**Available to withdraw** shows the amount you can withdraw. It is the sum of your unpledged asset amount and the pledged amount that is not covering borrows.

**Unpledged** shows your supplied but unpledged amount of a specific rToken. And **Supplying** shows your supply amount of the asset.

![](../assets/withdraw1.jpg)

The system prioritizes withdrawing from the unpledged amount.

If the amount you intend to withdraw is not more than your unpledged amount, the system will withdraw directly from the unpledged amount.

If you do have unpledged amount and the amount you intend to withdraw is more than the unpledged, you will need to first unpledge certain amount then withdraw all the the unpledged amount to receive it in your wallet.

![](../assets/withdraw2.jpg)

````mdx-code-block
:::info
You may need [pando seed](https://docs.pando.im/docs/leaf/key-concepts/pando-seed) to assist in this operation.
:::
````

If you don't have any unpledged amount left and your pledged amount is not fully covering borrows, the system will directly withdraw for you from your pledged amount, finishing withdrawing in just one step.

If you have outstanding borrow, it is possible that you cannot withdraw the same amount you have supplied. In this case, please return part or total amount of your borrow first.

Please be noted that, if you have outstanding borrow, withdrawing from your pledged amount, or in other words, unpledging rTokens, will reduce your borrow capacity (borrow limit), affecting your loan risk level. The reasoning behind is, because your borrow stays the same, when your borrow limit decreases, your borrow will take a bigger percentage of your borrow limit. Please be cautious with your withdrawing and avoid [liquidation](../key-concepts/liquidation) of your pledged assets. 

