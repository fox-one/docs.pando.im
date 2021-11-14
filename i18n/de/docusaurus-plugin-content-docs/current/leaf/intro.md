---
title: Was ist Pando Blatt
sidebar_position: eins
date: 22-07-2021 22:33:07
---

[Pando Leaf](https://leaf.pando.im) ist ein dezentralisiertes Finanznetzwerk, das mit der Mixin MTG ([Mixin Trusted Group](https://developers.mixin.one/document/mainnet/mtg/exchange)) Technologie gebaut wurde ein Ort, an dem Sie Sicherheiten einlegen können, um zu generieren und zu schicken, [Pando USD(pUSD)](./pusd) und es bei der Rückzahlung des generierten PUSD-Guthabens zu zerstören.

## Wie funktioniert Pando Blatt?

Die Einzahlung von Sicherheiten und die Rückzahlung des generierten Pusd-Guthabens erfolgt sowohl in einem **Tresor**.

- Tresore sind nicht kostenlos. Die Generierung der Stablecoin erfordert die Zahlung der Stabilitätsgebühr. Um Sicherheiten zurückzugewinnen, müssen die Nutzer die zuvor erzeugte Stablecoin und die angehäufte Stabilitätsgebühr zurückzahlen.
- Gewölbe sind zu überlagern. Die Besitzer von Vault sollten das Verflüssigungspreis/-liquidierungsverhältnis (das das minimale Sicherungsverhältnis ist) aufrechterhalten, um die **Liquidation** ihrer Positionen zu vermeiden.

Wird ein Tresor liquidiert, wird eine Liquidationsstrafe erhoben und zur Rückzahlung des ausstehenden Stablecoin-Guthabens der Tresor werden Sicherheiten verkauft.

Weitere technische Details finden Sie im [Pando Blatt Technisches Design](/developer/leaf/design)

## Auktion

Jeder kann an der Auktion teilnehmen, wenn ein Tresor gegen das erforderliche Mindest-Sicherungsverhältnis verstößt und liquidiert wird.

Es gibt zwei Phasen der Auktion - Für die erste Phase, Teilnehmer bieten in einem Zuwachs von nicht weniger als 3% des vorherigen Gebotsbetrags an, um den höchsten Betrag der ausstehenden Schulden zu decken. Wenn innerhalb der Begrenzung von 12 Stunden niemand bereit ist, die Gesamtverschuldung zu decken, Die Auktion ist vorbei und der Bieter, der bereit ist, den höchsten Betrag der Schulden zu decken, nimmt alle Sicherheiten nach Hause. Oder wenn es jemanden gibt, der anbietet, die Gesamtverschuldung zu decken, dann wird die Auktion in die zweite Phase gehen.

Für die zweite Phase, Die Teilnehmer bieten mit einem Erlass von nicht weniger als 3% des vorherigen Gebotsbetrages an, den kleinsten Teil der Sicherheiten zur Zahlung der Gesamtverschuldung anzunehmen.






