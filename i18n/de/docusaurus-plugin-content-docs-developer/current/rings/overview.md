---
title: Übersicht
sidebar_position: eins
date: 20-03-2021 12:38:07
---

Eine Implementierung des [Compound Protokolls](https://github.com/compound-finance/compound-protocol) basierend auf [Mixin](https://github.com/MixinNetwork/mixin) [MTG](https://github.com/MixinNetwork/developers.mixin.one/blob/main/developers/src/i18n/en/document/mainnet/mtg.md) Technologie.

## rToken

Der zugehörige Zertifikatstoken, den Sie erhalten, nachdem Sie eine Reihe von Cetain verschlüsselter Währung an den Markt geliefert haben.

## Funktion

### Belieferung

Benutzer liefern verschlüsselte Währungen an den Markt, um Liquidität zu gewährleisten, und erhalten die entsprechenden Rtoken. Sie erhalten Zinserträge durch die Bereitstellung von Liquidität.

![](overview/uc_supply.jpg)

### Unterstützung

Benutzer müssen rToken dem Markt versprechen, bevor sie Kredite aufnehmen.

![](overview/uc_pledge.jpg)

### Unversprechen

Die Nutzer nehmen den dem Markt zugesagten rToken zurück.

![](overview/uc_unpledge.jpg)

### Redeem

Benutzer geben den rToken im Gegenzug für die zugehörige verschlüsselte Währung, die vorher geliefert wurde, zurück, einschließlich Zinserträge als Belohnung für die Bereitstellung von Liquidität.

![](overview/uc_redeem.jpg)

### Leihen

Benutzer leihen verschlüsselte Währungen vom Markt zu einem bestimmten Zinssatz.

![](overview/uc_borrow.jpg)

### Zurückzahlen

Benutzer zahlen die geliehene verschlüsselte Währung und die Zinsen zurück, die während der Kreditperiode anfallen.

![](overview/uc_repay.jpg)

### Liquidation

Aufgrund der Schwankungen des Marktpreises kann der Wert des Darlehens eines Nutzers den des verpfändeten Vermögens übersteigen. Wenn das passiert, Die anderen Nutzer können mit einem niedrigeren Preis die verpfändeten Vermögenswerte des Nutzers erhalten, so dass die Schulden, die nicht durch verpfändete Vermögenswerte gedeckt sind, zurückerstattet werden.

![](overview/uc_liquidity.jpg)

