---
title: Übersicht
sidebar_position: eins
date: 20-03-2021 12:38:07
---

Pando ist ein dezentralisiertes Finanznetzwerk, das mit der MTG-Technologie aufgebaut wurde und dessen zugrunde liegender Finanzalgorithmus von [MakerDao](https://makerdao.com) und Synthetix inspiriert ist.

Pando nimmt mehrere übersichtliche Vermögenswerte( auf und wächst mehrere Pando-Vermögenswerte), die auch als Pfand verwendet werden können.

## Eine Einführung in den Pando-See

### pUSD

pUSD ist eine stabile Münze, die am 25. Dezember 2020 eingeführt wurde. Seit dem Start lag das Backup-Verhältnis von pUSD immer höher als 200%.

### Unterstützung

Knoten haben durch Abstimmung die Möglichkeit, beliebige Assets als Zusage hinzuzufügen. Sobald Knoten ein Asset als Verpfändung wählen, kann jeder Pusd leihen, indem er genug spezifizierte Vermögenswerte zur Verfügung stellt.

Knotenpunkte haben auch die Möglichkeit, verschiedene Parameter der Zusagen durch Abstimmung anzupassen.

Alle vom Mixin Network unterstützten Vermögenswerte, einschließlich BTC, ETH usw., sind potenzielle Zusagen für Pando.

### Tresore

Alle genehmigten Zusagen können in der Pando Multi-Signatur-Adresse hinterlegt werden, um einen Tresor zu erstellen, der Pusd für jeden Pando Benutzer generiert.

Solange der Preis des Versprechens höher ist als die Mindestvoraussetzung, haben die Urheber die volle Kontrolle über ihre Tresore.

### Interagiere mit Pando

Benutzer und Knotenadministratoren müssen Multi-Signatur-Transaktionen verwenden, um mit Pando zu interagieren.

Die Methoden und Parameter der Transaktionen werden alle in der Memo geschrieben, die zusätzliche Informationen für jede Übertragung enthält.

Um die Privatsphäre der Nutzer zu schützen, müssen derzeit alle Informationen in der Memo durch den folgenden Algorithmus verschlüsselt werden:

Pando wird zunächst ein Paar ed25519 öffentliche und private Schlüssel generieren und den öffentlichen Schlüssel veröffentlichen.

Für jede Transaktion erzeugt der Benutzer ein Paar von temporären ed25519 öffentlichen und privaten Schlüsseln und erzeugt eine Zeichenkette von 32-Bit Bytes.

Die ersten 16 Bits dieser Bytes werden der Schlüssel für AES-Verschlüsselung, und die letzten 16 Bits sind die `iv` der AES-Verschlüsselung.

Diese Bytes müssen die ursprüngliche Memo verschlüsseln und ein Ergebnis generieren, das wir verschlüsselt nennen. Der Client sollte verschlüsselte Bytes und den öffentlichen Schlüssel des Benutzers zusammen setzen und in base64 als letzte Memo für die Übertragung kodieren.

Die Knoten von Pando synchronisieren alle Transfers vom Mixin Network. Wenn ein Knoten eine gültige Übertragung erkennt, führt er einen umgekehrten Vorgang aus, um den schlüssel- und iv-verschlüsselten Schlüssel wiederherzustellen, und entschlüsselt dann die Parameter der Aktion.

Die Knoten müssen sicherstellen, dass sie die Interaktion des Benutzers in der gleichen Weise verarbeiten, um sicherzustellen, dass die in der Datenbank gespeicherten Daten vollständig mit anderen Knoten übereinstimmen; Es sollte der gleichen Reihenfolge folgen, wenn Sie Geld überweisen, um sicherzustellen, dass alle Knoten wählen, wenn die Überweisung in der gleichen utxo.

### Hochrisikoreiche Tresore liquidieren

Um sicherzustellen, dass es in Pando immer genug Zusagen gibt, um die geliehene Pusd zu unterstützen, Alle Tresore benötigen eine überschüssige Hypothek wie 150%.

Wenn der Wert der verpfändeten Vermögenswerte aufgrund von Marktpreisschwankungen unzureichend ist, Der Tresor wird in einen hochriskanten Zustand eintreten und für die Liquidation offen sein, um den Pusd einzulösen. ie Liquidation wird als Auktion durchgeführt:

- Wenn der Pusd bei der Versteigerung ausreicht, um die Schulden im Tresor und die Liquidation Strafe zu begleichen, Die Versteigerung wird gerade die Höhe der Vergabe verkaufen, um die Schulden zu decken, und die verbleibenden Versprechungen werden an den ursprünglichen Eigentümer zurückgeschickt.
- Wenn der Pusd aus der Versteigerung des Versprechens stammt, reicht nicht aus, um die Schulden und die Liquidation zu begleichen, der Verlust wird zur Haftung von Pando und wird von allen Knoten geteilt.

### Preis Oracle

Pando muss die Preise der verpfändeten Vermögenswerte synchronisieren, um die Sicherungsrate der Tresore zu aktualisieren und die risikoreichen Tresore zu liquidieren.

Die Preisdaten von Pando basieren auf einem externen dezentralen Preisdienst. Pando wird die Preisdaten nicht direkt verwenden.

Pando fügt allen Preisdaten eine einstündige Verzögerung hinzu. Durch dieser Zeit jemand einen Preisdienst angreift, können die Knoten abstimmen, um den Status des Versprechens zu ändern, das dringend eingefroren werden soll. Knoten können auch für neue Preise abstimmen.

### Zusammenfassung und zukünftige Arbeiten

Pando hat das Ziel erreicht, dass der Konsens zwischen vertrauenswürdigen Knoten dezentralisiert wird den dex Service mit mehreren Amm-Formeln an alle Benutzer des Mixin Networks zu bringen.

Pando behält sich auch die Möglichkeit vor, die Kreditvergabe auf nicht-stabile Vermögenswerte auszuweiten. Zum Beispiel kann es eine 1:1 Token pTesla gegen Tesla Aktie im Mixin Netzwerk ausgeben. und dann bitte Bitcoin auf Pando um pTesla zu generieren, die Verbindungen zwischen den Assets im Mixin Network und den externen Vermögenswerten der Welt aufbauen wird.
