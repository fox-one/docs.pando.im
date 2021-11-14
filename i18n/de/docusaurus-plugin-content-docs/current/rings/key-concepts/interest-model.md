---
title: Zinsfestlegung
sidebar_position: vier
date: 16-10-2021 12:33:07
---

Alle Zinssätze in Pando Rings werden in Abhängigkeit von **Auslastungsrate** ermittelt. **Mit den Änderungen der Auslastungsrate schwanken die Zinssätze.**


### Die Nutzungsrate

Die Verwendungsrate für einen Geldmarkt ist definiert als:


``````
Utilization_rate = market.total_borrows/(market.total_cash + market.borrows - market.reserves)
``````

Wo
- market.total_borrows bezieht sich auf den Betrag der gesamten Kreditaufnahme eines bestimmten Geldmarktes
- market.total_cash bezieht sich auf den im System verbleibenden Betrag eines bestimmten Geldmarktes
- market.Reserven bezieht sich auf den Betrag, der als Gewinn eines bestimmten Geldmarktes gehalten wird

Die Formel kann in etwa als Prozentsatz des Geldes interpretiert werden, das aus dem gesamten zur Verfügung gestellten Geld aufgenommen wurde.

Eine hohe Auslastungsrate bedeutet, dass die Nachfrage hoch ist und eine Menge Kreditaufnahme stattfindet. also steigen die Zinssätze als Anreiz, mehr Menschen dazu zu bringen, Bargeld in das System zu pumpen. Eine niedrige Auslastungsrate bedeutet, dass die Nachfrage nach Krediten gering ist, also sinken die Zinssätze, um mehr Menschen zu ermutigen, Geld aus dem System zu leihen.


### Ausleihrate

Momentan folgt das Kreditkursmodell aller Geldmärkte auf den Rings dem Modell des Sprungkurses.

In diesem Modell ist ein Schlüsselparameter als **Kink**definiert, was ein Wert der Verwertungsrate ist und einen steilen Wendepunkt schafft, an dem die Zinssätze steigen.

Die Kreditrate des Sprungkursmodells ist definiert als:

**Wenn die Nutzungsrate <unk> Kink:**

```
Darlehenszinssatz = Multiplikator * market.utilization_rate + Basiszinssatz
```

**Wenn die Nutzungsrate > Kink:**

```
Borrow_interest_rate = Multiplikator * Kink + jump_multiplier * (market.utilization_rate - Kink) + base_rate
```

Wo
- base_rate pro Jahr ist die minimale Kreditrate
- multiplikator pro Jahr ist der Zinssatz für die Erhöhung des Zinssatzes im Hinblick auf die Nutzung
- Kink ist der Punkt in dem Modell, in dem das Modell dem Sprungmultiplikator folgt
- sprung_multiplier pro Jahr ist der Zinssatz für die Erhöhung der Zinsen im Hinblick auf die Nutzung nach dem Kink

### Vorratsrate

Die Lieferrate wird wie folgt berechnet:

```
Supply_interest_rate = Borrow_interest_rate * markt.utilization_rate * (1 - market.reserve_factor)
```

Wo
- market.utilization_rate ist die Auslastungsrate eines bestimmten Marktes
- markt. eserve_factor kontrolliert, welcher Prozentsatz der Kreditnehmer für einen bestimmten Markt bezahlt, um Kreditgeber vor Zahlungsausfall und Liquidationsstörungen zu schützen
- Darlehenszinssatz ist der Zinssatz, den Kreditnehmer für einen zertifizierten Markt zahlen


### Parameter aller Geldmärkte von Pando Ring
(zuletzt aktualisiert am 18. Okt 2021)

Zurzeit haben alle Geldmärkte einen Kink von 80%, was bedeutet, dass die Auslastungsquote 80 % erreicht sowohl die Angebots- als auch die Kreditzinsen werden einen plötzlichen Sprung haben.

| Symbol | Name                         | basisrate | reserve_Faktor | multiplikator | springe Multiplikator | kinken     |
| ------ | ---------------------------- | --------- | -------------- | ------------- | --------------------- | ---------- |
| pUSD   | Pando USD                    | 0 %       | 15%            | 5.8%          | 1.476                 | 80 Prozent |
| USDT   | Tether USD                   | 0 %       | 15%            | 5.8%          | 1.476                 | 80 Prozent |
| BTC    | Bitcoin                      | 0 %       | 20%            | 29.13%        | 3.6255                | 80 Prozent |
| ETH    | Ethereum                     | 0 %       | 20%            | 29.13%        | 3.6255                | 80 Prozent |
| LTC    | Litecoin                     | 0 %       | 20%            | 29.13%        | 3.6255                | 80 Prozent |
| EOS    | EOS                          | 0 %       | 20%            | 29.13%        | 3.6255                | 80 Prozent |
| DOT    | Die Architektur von Polkadot | 0 %       | 20%            | 29.13%        | 3.6255                | 80 Prozent |
| XIN    | Mixin                        | 0 %       | 20%            | 29.13%        | 3.6255                | 80 Prozent |
| MOB    | MoblieCoin                   | 0 %       | 20%            | 29.13%        | 3.6255                | 80 Prozent |
| BOX    | BoxToken                     | 0 %       | 20%            | 29.13%        | 3.6255                | 80 Prozent |
| DOGE   | DogeCoin                     | 0 %       | 20%            | 29.13%        | 3.6255                | 80 Prozent |


Für PUSD und USDT: ![](../assets/stablecoin-model.png)

Für BTC, ETH, LTC, EOS. DOT, XIN, MOB, BOX und DOGE: ![](../assets/othercoins-model.png)


Es ist wichtig, das Zinsmodell Ihrer ausgewählten Geldmärkte zu verstehen und die Zinsänderungen für die Rentabilität und Sicherheit Ihrer Vermögenswerte zu überwachen. 







