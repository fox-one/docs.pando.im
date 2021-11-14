---
title: See und 4swap vergleichen
sidebar_position: fünf
date: 31-07-2021 15:44:07
---

**4swap** ist ein offenes Protokoll, das die Grundlage für den dezentralen Liquiditäts- und Austauschservice mit einer Mixin Trusted Group bereitstellt.

## 4-Swap

**4swap Broker** ist die Schnittstelle, die Benutzer mit dem 4swap-Protokoll interagieren.

Der Standardbroker ist der 4swap Mixin Messenger Bot (id: 7000103537). Wenn Sie keine Broker-ID in den Anfragen angeben, werden alle Informationen über Assets, Paare, Markt, Bestellungen von diesem Broker beantwortet.

Du kannst auf die Webschnittstelle dieses Brokers zugreifen, indem du https://4swap.org besuchst.

## Pando Lake

**Pando Lake** ist ein 4-Swap Broker, der von Pando gehostet wird.

Pando Lake filtert die Marktinformationen, um nur die ausgewählten Paare und Märkte anzuzeigen, die über eine gute Liquidität verfügen und von soliden Gemeinschaften unterstützt werden.

Pando Lake verfügt über einen individuellen Mixin Messenger Bot (id: 7000103937), über https://lake.pando.im.

Die LP-Token werden zwischen dem Pando-See und dem 4swap geteilt.

### Mit dem Pando-See integrieren

Die Broker-Id des Pando Sees ist `5dbdb169-d56d-4b5b-b066-9b0780691b14`, die in Anfragen verwendet wird.

**Zum See autorisieren**

Beim Aufruf `POST /api/oauth` um die Wallet zu autorisieren, zwei Parameter `broker_id` und `label` müssen angegeben werden, in welcher `Bezeichnung` ein String "See" sein soll.

**Andere APIs**

Der Parameter `broker_id` sollte an die Abfrage oder Payload der folgenden API-Anfragen angehängt werden:

- POST /api/actions generiert einen Transfer der zum Pando See gesendet werden kann.
- GET /api/paare, es wird mit einem `Whitelists` Feld antworten, das Asset-Ids enthält, die vom Pando Lake unterstützt werden.


