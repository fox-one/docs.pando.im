---
title: Assets auflisten und Pools hinzufügen
sidebar_position: 6
date: 15-08-2021 22:33:07
---

importiert { Verbesserung, } aus "@site/src/components/admonitions";

<Improvement />

**[Pando Lake](https://lake.pando.im)** erlaubt nur ausgewählte Pools mit nachgewiesenen Anmeldeinformationen. Es akzeptiert keinen neuen Pool von der Öffentlichkeit.

**[4swap](https://4swap.org)** ist ein Community-gesteuertes Projekt, das es derzeit erlaubt, jeden Pool hinzuzufügen.

## Asset-Informationen zum Mixin Netzwerk hinzufügen

Besuchen Sie Mixins [Asset-Profil](https://github.com/MixinNetwork/asset-profile) Seite, folgen Sie den Anweisungen unter `README.md` zu Mixin Network.

Wenn Sie zum Beispiel ein ERC-20-Token namens "RUM" haben, können Sie es dem Mixin-Netzwerk hinzufügen:

1. eine Icon-Datei namens "icon.png", sollte es 520px * 520px sein.
2. eine json-Datei namens "index.json", die eine gültige json-Datei sein sollte und die folgenden Informationen enthält:

```json
{
  // die Asset ID von RUM im Mixin Network
  "asset_id": "4f2ec12c-22f4-3a9e-b757-c84b6415ea8f",
  // RUM ist ein ERC-20-Token, die Kettennummer ist ETH's Asset Id
  "chain_id": "43d61dcd-e413-450d-80b8-101d5e903357",
  // RUM wird in CoinMarketCap, also verwenden wir den leeren String
  "cmc_id": ""
}
```

Die Übertragung des obigen Beispiels ist [hier](https://github.com/MixinNetwork/asset-profile/commit/437d378f899c5837598bdb8c4e9c18ae8f21ad27).

````mdx-code-block
:::info
Bitte erstellen Sie eine Pull-Request-Anfrage, wenn Sie fertig sind. Normalerweise dauert es etwa 1~2 Tage, bis Mixin Network Ihre Pull-Anfrage bearbeitet.
:::
````

## Erstelle einen Pool bei 4swap

Sie müssen zu [Mixin Messenger](../../apps/wallets#mixin-messenger) oder [Fennec](../../apps/wallets#fennec) wechseln, um einen Pool zu erstellen.

1. Stellen Sie sicher, dass das Guthaben der 2 Assets über dem Mindestbetrag von 0.00000001 liegt. Wenn nicht, hinterlegen Sie bitte einige auf Ihre Brieftasche ein.
2. Stellen Sie sicher, dass Sie den Mindestbetrag von 0,02 ETH in Ihrer Brieftasche haben. Falls nicht, hinterlegen Sie bitte ein paar in Ihre Brieftasche oder tauschen Sie sie mit [4swap](https://app.4swap.org) aus.
3. Besuchen Sie [diese Seite](https://app.4swap.org/#/me), tippen Sie auf "Verbinden", um sich mit Ihrer Wallet zu verbinden.

![](../assets/lake-get-started-p2.png)

4. Besuchen Sie [diese Seite](https://app.4swap.org/#/liquidity/create), wählen Sie zwei Assets aus, die Sie zum Pool hinzufügen möchten und klicken Sie auf `Bezahlen`, um einen Pool zu erstellen.

Wir werden umfassend prüfen, ob die Währung auf der Grundlage von coinmarketcap Ranking, Transaktionsvolumen und Wechselkursunterstützung aufgelistet werden soll.

Sie können auch 37160854 bei Mixin Messenger kontaktieren, um nach der Auflistung von Blatt/Ringen zu fragen.

````mdx-code-block
:::info
Es dauert normalerweise 1~3 Tage, bis der Pool von [MTG nodes](../key-concepts/mtg) erstellt und genehmigt wird. Wenn die Anfrage nicht innerhalb von 3 Tagen bearbeitet wird, erhalten Sie eine Rückerstattung.
:::
````