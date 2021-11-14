---
title: Technisches Design
sidebar_position: zwei
date: 12-07-2021 23:33:07
---

# Pando Blatt-Design-Dokument

## Interagiere mit Pando

Alle Teilnehmer von Pando vervollständigen die Interaktion durch Übertragung von Token auf die Multisig Wallet. Node Worker **Syncer** synchronisiert die Zahlungen als Mixin Multisig Ausgabe; ein weiterer Arbeiter **Payee** verarbeitet alle Ausgänge in der Reihenfolge.

![Pando Design](design/mtg_design.png)

### Mixin Multisig Output

**Ausgang:**

| feld        | beschreibung          |
| ----------- | --------------------- |
| Absender    | user mixin id         |
| Erstellt am | zahlungszeit          |
| AnlageID    | zahlung Asset Id      |
| Betrag      | zahlungsbetrag        |
| Memo        | zusätzliche Nachricht |

**Ausgabe Memo:**

Memo enthält die **TransaktionAktion** Informationen, siehe Details in [DecodeTransactionAction](https://github.com/fox-one/pando/blob/main/core/action.go).

Die Memo ist vielleicht AES-verschlüsselt, ein ed25519 öffentlicher Schlüssel, der für zusammengesetzte AES-Schlüssel verwendet wird, wird in den ersten 32 Bytes sein.

### Definition der Transaktionsaktion

| feld     | beschreibung                                      | type  |
| -------- | ------------------------------------------------- | ----- |
| FollowID | benutzerdefinierte Trace-Id für diese Transaktion | uUID  |
| Körper   | aktionstyp & relevante Parameter                  | bytes |

## Arbeiter

1. **Syncer** synchronisiert unhand-utxo durch Mixin Messenger api & Store in WalletStore als **Ausgänge** in aktualisierter asc Reihenfolge.
2. **Zahler** ziehen Sie unhandene utxo aus dem WalletStore in der Reihenfolge und analysieren Sie Memo, um die Aktion zu erhalten und dann mit ihr umzugehen. Transfers können während der Bearbeitung erstellt werden.
3. **Assigner** wählen Sie genug nicht verbrauchte UTXO aus und weisen Sie einer ausstehenden Übertragung zu.
4. **Kasse** ziehen Sie unbehandelte Überweisungen vom WalletStore in der Reihenfolge, dann fordern Sie & eine Multisig Übertragung an. Wenn genug Signaturen gesammelt werden, generieren Sie eine Rohtransaktion.
5. **TxSender** übertrage rohe Transaktionen in Mixin Network.

### Syncer-Workflow

![Syncer-Workflow](design/pando-syncer.png)

### Zahlungsempfänger Workflow

![Zahlungsempfänger Workflow](design/pando-payee.png)

### Zuweiser & Kasse & TxSender Workflow

![Zuweiser & Kassierer-Workflow](design/pando-cashier.png)

## Aktionen

Alle Aktionen von Pando unterstützt mit Gruppen Katze, Flip,Orakel,Vorschlag, Sys und Vat. siehe [Kern/Aktion](https://github.com/fox-one/pando/blob/main/core/action.go) für Details.

### Sys - Systemoperationen

#### #1 Zurückziehen

> pkg/maker/sys/withdraw.go

abheben von Vermögenswerten aus der Multisig Wallet, Vorschlag erforderlich.

**Einstellungen:**

| name   | type | beschreibung            |
| ------ | ---- | ----------------------- |
| asset  | uuid | abheben Asset-Id        |
| betrag | uuid | betrag abheben          |
| gegner | uuid | mixin id des Empfängers |

### Vorschlag - Governance-System

#### #11 machen

> pkg/maker/proposal/make.go

einen neuen Vorschlag erstellen

**Einstellungen:**

| name | type  | beschreibung                                             |
| ---- | ----- | -------------------------------------------------------- |
| data | bytes | aktionstyp & Parameter werden ausgeführt, wenn übergeben |

#### #12 Schreien

> pkg/maker/proposal/shout.go

den Node-Administrator auffordern, für diesen Vorschlag zu stimmen

**Einstellungen:**

| name | type | beschreibung     |
| ---- | ---- | ---------------- |
| id   | uUID | vorschlagspur-Id |

#### #13 Stimmen

> pkg/maker/proposal/vote.go

stimme für einen Vorschlag, nur Knoten. Wenn genug Stimmen gesammelt werden, wird die angehängte Aktion automatisch auf allen Knoten ausgeführt.

**Einstellungen:**

| name | type | beschreibung     |
| ---- | ---- | ---------------- |
| id   | uUID | vorschlagspur-Id |

### Katze - Manager Sicherheiten

#### #21 Erstellen

> pkg/maker/cat/create.go

erstellen Sie einen neuen Collateral Typ, Vorschlag erforderlich.

**Einstellungen:**

| name  | type   | beschreibung         |
| ----- | ------ | -------------------- |
| juwel | uUID   | collateral Asset Id  |
| dai   | uUID   | schulden-Asset-Id    |
| name  | string | collateral type name |

#### #22 Versorgung

> pkg/maker/cat/supply.go

lieferung dai token zur Erhöhung der Gesamtschuldgrenze für diese Sicherheiten zu erhöhen. Die Id der Zahlungsverpflichtung muss der Verschuldungsanforderung entsprechen.

**Einstellungen:**

| name | type | beschreibung        |
| ---- | ---- | ------------------- |
| id   | uUID | collaterale Spur-Id |

#### #23 bearbeiten

> pkg/maker/cat/edit.go

ein oder mehrere Attribute der Collateral modifizieren, Vorschlag erforderlich.

**Einstellungen:**

| name      | type   | beschreibung        |
| --------- | ------ | ------------------- |
| id        | uUID   | collaterale Spur-Id |
| schlüssel | string | attributbezeichnung |
| wert      | string | attributwert        |

#### #24 Falten

> pkg/maker/cat/fold.go

modifizieren Sie die Schulden multiplikator(Kurse), erstellen / zerstören entsprechende Schulden.

**Einstellungen:**

| name | type | beschreibung        |
| ---- | ---- | ------------------- |
| id   | uuid | collaterale Spur-Id |

### Vat - Manager Tresore

#### #31 Öffnen

> pkg/maker/vat/open.go

öffne einen neuen Tresor mit dem speziellen Sicherheitstyp

**Einstellungen:**

| name   | type        | beschreibung        |
| ------ | ----------- | ------------------- |
| id     | uuid        | collaterale Spur-Id |
| schuld | dezimalzahl | erste Schulden      |

#### #32 Einzahlung

> pkg/maker/vat/deposit.go

übertragen von Sicherheiten in einen Vault.

**Einstellungen:**

| name | type | beschreibung    |
| ---- | ---- | --------------- |
| id   | uuid | trester-Spur Id |

#### #33 Zurückziehen

> pkg/maker/vat/withdraw.go

rücktritt von Sicherheiten nur von einem Tresorbesitzer, Tresor.

**Einstellungen:**

| name | type        | beschreibung              |
| ---- | ----------- | ------------------------- |
| id   | uuid        | trester-Spur Id           |
| dink | dezimalzahl | änderung der Sicherheiten |

#### #34 Rückzahlung

> pkg/maker/vat/payback.go

verringerte Tresorschuld.

**Einstellungen:**

| name | type | beschreibung    |
| ---- | ---- | --------------- |
| id   | uUID | trester-Spur Id |

#### #35 Generieren

> pkg/maker/vat/generate.go

erhöhung der Tresorschuld, Tresorbesitzer nur.

**Einstellungen:**

| name   | type        | beschreibung          |
| ------ | ----------- | --------------------- |
| id     | uUID        | trester-Spur Id       |
| schuld | dezimalzahl | änderung der Schulden |

### Flip - Manager Auktionen

#### #41 Kick

> pkg/maker/flip/kick.go

die Sicherheiten für die Auktion aus einem unsicheren Gewölbe aufstellen.

**Einstellungen:**

| name | type | beschreibung    |
| ---- | ---- | --------------- |
| id   | uUID | trester-Spur Id |

#### #42 Bid

> pkg/maker/flip/bid.go

bezahlen dai an der Auktion teilzunehmen.

> Ab der Zehntphase konkurrieren Bieter um eine feste Menge Gem mit steigenden Geboten von Dai. Sobald der Tabellenbetrag von Dai erhöht wurde, bewegt sich die Auktion in die Dentphase. Der Sinn der Phase besteht darin, Dai anzuheben, um die Schulden des Systems abzudecken. Während der Dentphasen-Bieter um die Verringerung der Menge von Gem für den festen Tab-Betrag von Dai. Verlassene Gem wird in den liquidierten Tresor zurückgegeben, damit der Eigentümer abholen kann. Der Sinn der Dungsphase besteht darin, dem Vault-Inhaber so viele Sicherheiten wie es der Markt zulassen wird.

**Einstellungen:**

| name   | type        | beschreibung       |
| ------ | ----------- | ------------------ |
| id     | uuid        | flip-Trace-Id      |
| partie | dezimalzahl | besicherter Betrag |

#### #43 Deal

> pkg/maker/flip/deal.go

ein Gewinnangebot einholen / eine abgeschlossene Auktion abschließen

**Einstellungen:**

| name | type | beschreibung  |
| ---- | ---- | ------------- |
| id   | uuid | flip-Trace-Id |

### Oracle - Manager Preis Orakel

#### #51 Erstellen

> pkg/maker/oracle/create.go

ein neues Orakel für das Vermögen registrieren, Vorschlag erforderlich.

**Einstellungen:**

| name      | type        | beschreibung                                       |
| --------- | ----------- | -------------------------------------------------- |
| id        | uuid        | asset Id                                           |
| preis     | dezimalzahl | erstpreis                                          |
| hüpfen    | int64       | zeitverzögerung in Sekunden zwischen Poke-Aufrufen |
| grenzwert | int64       | anzahl der benötigten Governors bei poke           |
| ts        | zeitstempel | zeitstempel anfordern                              |

#### #52 bearbeiten

> pkg/maker/oracle/edit.go

ändern Sie den nächsten Preis eines Orakels, Hopf & Schwellenwert, Vorschlag erforderlich.

**Einstellungen:**

| name      | type   | beschreibung        |
| --------- | ------ | ------------------- |
| id        | uuid   | asset id            |
| schlüssel | string | attributbezeichnung |
| wert      | string | attributwert        |

#### #53 Poke

> pkg/maker/oracle/poke.go

aktualisiert den aktuellen Feed-Wert und die Warteschlange nach oben.

**Einstellungen:**

| name  | type        | beschreibung          |
| ----- | ----------- | --------------------- |
| id    | uuid        | asset id              |
| preis | dezimalzahl | neuer nächster Preis  |
| ts    | zeitstempel | zeitstempel anfordern |

#### #54 Rely

> pkg/maker/oracle/rely.go

einen neuen Preisfeed zur Whitelist hinzufügen, Vorschlag erforderlich

**Einstellungen:**

| name      | type  | beschreibung           |
| --------- | ----- | ---------------------- |
| id        | uUID  | user mixin id          |
| schlüssel | bytes | öffentlicher Schlüssel |

#### #55 Leugnen

> pkg/maker/oracle/deny.go

einen Preisfeed von der Whitelist entfernen, Vorschlag erforderlich

**Einstellungen:**

| name | type | beschreibung  |
| ---- | ---- | ------------- |
| id   | uuid | user mixin id |
