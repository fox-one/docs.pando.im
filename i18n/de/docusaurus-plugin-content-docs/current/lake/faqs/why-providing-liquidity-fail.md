---
title: Warum habe ich bei der Bereitstellung von Liquidität versagt?
date: 15-08-2021 22:33:07
---

import { Improvement, } from "@site/src/components/admonitions";

<Improvement />


Das häufige Versagen der Liquiditätszufuhr wird durch die Überschreitung des Schlupfes verursacht. Bitte aktualisieren Sie die Seite, um die neuesten Daten für das Handelspaar zu erhalten.

Bei der Zuführung von Liquidität gibt es einen sehr wichtigen Grundsatz: Das Zuführungsverhalten sollte den aktuellen Preis des Handelspaares nicht verändern.

Daher gibt es auch das Konzept des Schlupfes bei der Zuführung von Liquidität. When injecting liquidity, the proportion of assets in the liquidity pool is changed due to the trading behavior of others, or in a more general sense, the price of the liquidity pool occurs due to the transaction. Big change. There is a difference between the injected assets and the current liquidity pool ratio. If the difference exceeds a certain ratio, the liquidity injection will fail. That is, slippage is exceeded.

There is also a situation where the injection fails, that is, the two assets injected are too small to obtain the minimum amount of LP shares. It will also lead to failure to inject liquidity.

If you encounter other situations in the transaction that cause the transaction to fail, please contact our community manager-Chris (ID: 37160854) or ask questions in the Pando Lakeofficial community (ID: 7000103578)