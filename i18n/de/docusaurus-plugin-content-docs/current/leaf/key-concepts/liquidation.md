---
title: Liquidation
date: 28-07-2021 22:33:07
---

## Auktionsprozess

Wenn ein Tresor gegen das erforderliche Mindest-Sicherungsverhältnis verstößt, wird es liquidiert und die Sicherheiten werden auf Versteigerung gesetzt. Jedermann kann an der Auktion teilnehmen. Die laufende Auktion finden Sie im Abschnitt Laufende auf der Auktionsseite.

Es gibt zwei Phasen der Versteigerung.

**Für Phase 1**, Teilnehmer bieten in einem Zuwachs von nicht weniger als 3% des vorherigen Gebotsbetrags an, um den höchsten Betrag der ausstehenden Schulden zu decken. Wenn innerhalb der Begrenzung von 12 Stunden niemand bereit ist, die Gesamtverschuldung zu decken, Die Auktion ist vorbei und der Bieter, der bereit ist, den höchsten Betrag der Schulden zu decken, nimmt alle Sicherheiten nach Hause. Oder wenn es jemanden gibt, der anbietet, die Gesamtverschuldung zu decken, dann wird die Auktion in die zweite Phase gehen.

**Für Phase 2**, Die Teilnehmer bieten mit einem Erlass von nicht weniger als 3% des vorherigen Gebotsbetrages an, den kleinsten Teil der Sicherheiten zur Zahlung der Gesamtverschuldung anzunehmen. Der Gewinner muss alle Schulden im Austausch für den kleinsten Betrag der Sicherheiten zurückzahlen, für die er (s)das Gebot überwies.

## Liquidationsquote

Das Liquidation Ratio ist das Mindestmaß an Sicherheiten für jeden Vault-Typ, bevor es als unterbesichert und liquidierend betrachtet wird.

Die Liquidation Ratio jedes Vault Typs wird durch eine Kombination des Risikoprofils und der Stabilitätsgebühr bestimmt. Es kann für jede Sicherheiten mehrere Vault-Typen geben, mit variierenden Liquidierungsquoten und Stabilitätsgebühren.

```
Liquidation Ratio = (Collateraler Betrag x Collateral Price) ÷ Generierte pUSD × 100
```

## Liquiditätspreis

Der Liquidation Price ist der Preis, zu dem ein Vault anfällig für die Liquidation wird.

Vault-Besitzer können ihren Liquidationspreis senken, indem sie mehr Sicherheiten hinzufügen oder pUSD in das Vault zurückschicken.

```
Liquidation Price = (Generiert pUSD * Liquidation Ratio) / (Amount of Collateral)
```

## Strafe für Liquidation

Eine Liquidation Strafe ist eine Gebühr, die von Vault-Inhabern bezahlt wird, wenn der Wert ihrer Sicherheiten den Liquidation Preis des Vaults erreicht.

Die Liquidation Strafe wird zusätzlich zum gesamten ausstehenden Pusd des Vaults hinzugefügt, wenn die Liquidation eintritt, was zur Folge hat, dass mehr Sicherheiten bei Auktionen verkauft werden.

