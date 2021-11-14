---
title: Design
sidebar_position: eins
date: 31-07-2021 14:38:07
---


## Pando Lake Design

> Pando Lake ist eine MTG-Implementierung im Mixin Netzwerk von Uniswap V2

Pando Lake ist ein automatisiertes Liquiditätsprotokoll mit einer konstanten Produktformel und implementiert in [Mixin Trusted Group](https://developers.mixin.one/docs/mainnet/mtg/overview). Damit wird die Notwendigkeit einer einzigen Mixin Dapp vermieden, wobei Dezentralisierung, Zensurresistenz und Sicherheit Vorrang eingeräumt wird.

Jeder kann ein Liquiditätsanbieter (LP) für einen Pool werden, indem er einen gleichwertigen Wert von jedem zugrunde liegenden Token im Gegenzug für Pool-Token hinterlegt. Diese Token verfolgen anteilige LP-Aktien der Gesamtreserven und können jederzeit für die zugrunde liegenden Assets eingelöst werden.

Paare fungieren als automatisierte Marktmacher, stehen bereit, ein Zeichen für das andere zu akzeptieren, solange die Formel „konstante“ bleibt. Diese Formel, am einfachsten ausgedrückt als **x * y = k**, legt fest, dass der Handel das Produkt (k) der Reserveguthaben eines Paares (x und y) nicht ändern darf. Da k vom Bezugsrahmen eines Handels unverändert bleibt, wird es oft als invariant bezeichnet. Diese Formel hat die wünschenswerte Eigenschaft, die größere Handelsgeschäfte (im Vergleich zu Reserven) zu exponentiell schlechteren Zinssätzen ausführen als kleinere.

> Eine modifizierte [Kurve](https://curve.fi) Formel für die Stablecoin Pools wie USDT/USDC.

## Einzahlung

Jeder Liquiditätspool am Pando Lake ist ein Handelsplatz für ein Paar Mixin Mainnet Tokens. Wenn ein Pool von der Governance erstellt wird, sind seine Salden von jedem Token 0; damit der Pool beginnen kann, den Handel zu erleichtern, muss jemand ihn mit einer ersten Kaution von jedem Token. Dieser erste Liquiditätsanbieter legt den ersten Preis für den Pool fest.

Die Anzahl der Liquiditäts-Tokens Dieser erste Liquiditätsanbieter wird erhalten würde `sqrt(x*y)`, wobei x und y die Menge der einzelnen Token repräsentieren. Für die folgenden Anbieter lautet die Nummer `min(x/reserve_x,y/reserve_y)*liquidity_shares`.

![einzahlen](./assets/pando_lake_deposit.png)

## Auszahlen

Um die zugrunde liegende Liquidität zu erhalten, müssen die Liquiditätsanbieter zuzüglich anfallender Gebühren ihre Liquiditäts-Token zurückgeben, Sie werden effektiv gegen ihren Anteil am Liquiditätspool ausgetauscht, zuzüglich der anteiligen Gebührenzuweisung.

Die Anzahl der abgerufenen Tokens beträgt `lp_token/liquidity_shares*reserve_x` und `lp_token/liquidity_shares*reserve_y`.

![auszahlen](./assets/pando_lake_withdraw.png)

## Tauschen

Aus der konstanten Produktformel ergibt sich, dass der Preis dieses Tokens A einfach price_token_A = reserve_token_B / reserve_token_A ist. Der Marktpreis bewegt sich nur, wenn sich das Reserveverhältnis der Tokens im Pool ändert, was geschieht, wenn jemand dagegen handelt.

Die Auslagerungsregel ist die konstante Produktformel. Wenn eines der beiden Token zurückgezogen wird, muss ein proportionaler Betrag des anderen hinterlegt werden, um die Konstante (`k`) unverändert zu lassen.

Pando Lake erhebt eine Gebühr von 0,3% (0. 4% für Stablecoin Pools) zu Trades, die zu Reserven hinzugefügt werden, um `k` tatsächlich als Auszahlung an Liquidationsanbieter zu erhöhen.

![tauschen](./assets/pando_lake_swap.png)
