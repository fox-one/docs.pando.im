---
title: Los geht's
sidebar_position: 1
date: 2021-08-13 12:33:07
---

Pando Leaf unterstützt den [Minxin Messenger](https://docs.pando.im/docs/wallets/mixin-messenger) Geldbeutel und [fennec](https://docs.pando.im/docs/apps/wallets) (Online Geldbeutel). Der folgende Inhalt nimmt den Minxin Messenger Geldbeutel als einen Beispiel.

Besuchen Sie [Pando Leaf](https://leaf.pando.im) oder suchen Sie Mixin ID **7000103924** in dem Mixin Messenger App. Dann klicken Sie die blaue Nummer. Anschließend klicken Sie "+Add Bot" und danach den Roboterprofil um Pando Leaf zu öffnen.

![](../assets/leaf-get-started-p1.png)


Klicken Sie " Geldbeutel verbinden" um zu starten. Vergewissern Sie sich, dass Sie die Genehmigung erteilt haben, sonst können die Daten Ihrer Assets nicht auf das Interface angezeigt werden

![](../assets/leaf-get-started-p2.png)

````mdx-code-block
:::tip
Check all and authorize. Authorization can only view but cannot use your assets. It is safe.
:::
````

Let's get to know the homepage of pando leaf.

![](../assets/leaf-get-start-p3.png)

You are required to [add a vault](https://docs.pando.im/docs/leaf/tutorials/open-vault) when first enter.  Let's focus on the screenshot on the right.

BTC locked is your collateral in the vault. We can see 1 btc in the inmage means we pledged 1 btc in pando leaf.

Worauf man sich fokussieren sollte, ist der Besicherungsgrad, [Liquiditätspreis,](https://docs.pando.im/docs/leaf/key-concepts/liquidation/liquidation-ratio), [aktueller Preis und nachfolgender Preis](https://docs.pando.im/docs/leaf/key-concepts/price-oracles).

Take the above picture as an example, the current mortgage rate is 4414.4%, and the liquidation price is 1500 pusd, which means that when the price of BTC drops to 1500 pusd, it will be forced to enter the liquidation process.

Combined with the current price and the next price, it can be considered safe.

````mdx-code-block
:::caution
Please ensure that the collateral Ratio is within a safe range, which less than 150% will be liquidated totally.
:::
````

Go and try it.


