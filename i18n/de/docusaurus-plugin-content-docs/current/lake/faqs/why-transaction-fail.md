---
title: Warum ist meine Transaktion fehlgeschlagen?
date: 15-08-2021 22:33:07
---

import { Improvement, } from "@site/src/components/admonitions";

<Improvement />


Häufige Transaktionsfehler werden durch die Überschreitung des Schlupfes der Transaktion verursacht. Bitte aktualisieren Sie die Seite, um die neuesten Transaktionspaardaten zu erhalten.

Die von Pando Lakeon auf der Webseite angezeigten Informationen sind die geschätzten Informationen zum Zeitpunkt der Eingabe der Menge. Wenn Sie tatsächlich zahlen, kann es passieren, dass aufgrund des Transaktionsverhaltens anderer der tatsächliche Betrag der Vermögenswerte, die Sie bei der Zahlung erhalten, vom geschätzten Betrag abweicht. Gibt es eine große Differenz in der Menge, wird Pando Lake diese Art von Transaktion mit einer großen Differenz zwischen dem erwarteten und dem tatsächlichen Ergebnis aktiv ablehnen, um den Verlust zu reduzieren, der durch die Differenz zwischen dem geschätzten und dem tatsächlichen Wert verursacht wird.

Wir bieten einen Parameter namens Schlupf an, der über die Schaltfläche mit dem Zahnradsymbol ⚙ auf der rechten Seite der Transaktionstaste eingestellt werden kann. The slippage is the difference between the estimated information and the actual transaction result during Pando Laketransactions.

The greater the slippage, the higher the tolerance for the expected difference in the transaction, and the success rate of the transaction will increase, but it may also result in greater losses. The smaller the slippage, the lower the tolerance for the expected difference of the transaction, the lower the transaction success rate, but each order will be more in line with the estimated situation you see on the web page. The default value of slippage is 1%, that is, when the actual transaction differs from the estimated transaction amount you see on the webpage by more than 1%, the Pando Lake engine will reject the transaction.