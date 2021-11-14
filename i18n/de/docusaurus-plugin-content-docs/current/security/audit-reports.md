---
title: Auditberichte
sidebar_position: 3
---

import { Improvement, } from "@site/src/components/admonitions";

<Improvement />

## Auditberichte von IOActive

### Bericht Herunterladen

[Audit-Bericht von IOActive](//docs.pando.im/reports/ioactive-report.pdf)

### Findungen und Remediationsstatus

| ID    | Titel                                                                                      | Gesamt-Risiko | Stand        |
| ----- | ------------------------------------------------------------------------------------------ | ------------- | ------------ |
| MP-07 | Ringe - Kreditrückzahlungstransaktionen können nach Änderung des Kreditguthabens scheitern | Hoch          | Festgehalten |
| MP-06 | Allgemein - veralteter Web-Server mit mehreren Schwachstellen                              | Hoch          | Festgehalten |
| MP-01 | Mangel an Zertifikatsfixierung                                                             | Mittel        |              |
| MP-02 | Unzureichende JailBreak Erkennung                                                          | Mittel        |              |
| MP-03 | Sicherheit für den App-Transport deaktiviert                                               | Niedrig       |              |
| MP-04 | RPATH Satz in Binärdatei                                                                   | Niedrig       |              |
| MP-05 | Binäre Benutzer unsichere APIs                                                             | Niedrig       |              |

### Problemanalyse

**MP-07: Ringe - Kreditrückzahlungstransaktionen können nach Änderung des Kreditguthabens fehlgeschlagen sein**

Dieses Problem wurde durch eine falsche Logik in `Payee.handleRepayEvent()` verursacht. Bitte lesen Sie den IOActive Audit-Bericht (von p3 bis p8) für weitere Details.

**MP-07: Allgemein - veralteter Webserver mit mehreren Schwachstellen**

Dieses Problem wird durch einen veralteten Webserver verursacht, der API-Endpunkte zur Verfügung stellt. Bitte lesen Sie den IOActive Audit-Bericht (von p3 bis p8) für weitere Details.

**MP-01: Mangel an Zertifikatsfixierung**

Dies ist ein Problem, das mit dem Mixin Messenger zusammenhängt.

Zurzeit antworten die meisten Apps vollständig auf die Zertifizierungen des Betriebssystems und bestimmen nicht, welches Zertifikat zu vertrauen ist oder nicht. Angreifer, die den Vertrauensspeicher des Betriebssystems beschädigen oder eine Root-CA hacken, können einen Man-in-the-Middle-Angriff durchführen und die übermittelten Daten zwischen der App und dem Server erfassen.

Mixin Team und Pando Team sind nicht verantwortlich für die Sicherheit des lokalen Betriebssystems und der Root-CA. Nachdem wir uns mit dem Mixin Team unterhielten, haben wir uns entschlossen, dieses Thema vorerst zu ignorieren.

**MP-02: Unzureichende JailBreak Erkennung**

Dies ist ein Problem im Zusammenhang mit dem Mixin Messenger iOS.

Das Mixin Team ist nicht verantwortlich für die Sicherheit des lokalen Betriebssystems der Benutzer, daher entschied man sich vorerst dieses Problem zu ignorieren.

**MP-03: App Transport-Sicherheit deaktiviert**

Dies ist ein Problem im Zusammenhang mit dem Mixin Messenger iOS.

In dem Bericht wird erwähnt, dass ATS für Anfragen von WebView deaktiviert ist. Es ist kein Fehler der App, da die Benutzer die WebView benutzen dürfen, um HTTP-Webseiten zu besuchen.

**MP-04: RPATH Set in Binärdatei**

Dieses Problem ist sehr schwer auszunutzen, deshalb hat sich das Mixin Team entschieden, dieses Problem vorerst zu ignorieren.

**MP-05: Binärbenutzer unsichere APIs**

Dieses Problem ist sehr schwer auszunutzen, deshalb hat sich das Mixin Team entschieden, dieses Problem vorerst zu ignorieren.

## Prüfungsberichte von LeastAuthority

### Bericht Herunterladen

[Prüfbericht von der geringsten Autorität](//docs.pando.im/reports/least-authority-report.pdf)


### Findungen und Remediation Status

| ID    | Titel                                                                           | Stand           |
| ----- | ------------------------------------------------------------------------------- | --------------- |
| A     | Keine Bereitstellung zum Umgang mit dem Kompromiss des geteilten MTG-Schlüssels | Nicht repariert |
| B     | Sicherheits-Roadmap existiert nicht                                             | Nicht repariert |
| C     | Protokollspezifikationen nicht vorhanden                                        |                 |
| D     | Geheimnisse werden geteilt und bleiben im reinen Text erhalten                  | Nicht repariert |
| Osten | Verwendung von nicht authentifizierten Verschlüsselungsmodus                    | Nicht repariert |
| F     | Eingabe beim Hinzufügen oder Entfernen von PKCS #7 Padding nicht geprüft        | Nicht repariert |
| G     | Übermäßige Zentralisierung                                                      |                 |

### Antworten auf Befunde

**Suche A: Keine Bereitstellung für die Handhabung eines gemeinsamen MTG-Schlüssels**

Am Anfang dient der gemeinsame Schlüssel dazu, die Memo zu verschlüsseln. In der vorherigen Version setzen Pando Leaf und Ringe `user_id` in die Memo, und der Shared Key wird verwendet, um ihn zu verschlüsseln.

Um jedoch die Privatsphäre des Benutzers besser zu schützen, aktualisieren wir das Mixin Netzwerk, das `user_id` direkt in UTXO einfügt. Jetzt hat Pando die `user_id` bereits aus der Memo entfernt, so dass es keine sensiblen Informationen in der Memo gibt.

Um das Protokoll Campatibel zu machen, behalten wir die Unterstützung der verschlüsselten Memo. Aber es ist völlig in Ordnung, Klartext in Memo zu verwenden und es unverschlüsselt zu lassen. Mit einem anderen Wort, der gemeinsame Schlüssel ist nicht mehr wichtig.

**B: Sicherheits-Roadmap existiert nicht**

Eigentlich haben wir eine Roadmap mit sicherheitsrelevanten Plänen. Wir werden den Fahrplan in Zukunft aktualisieren.

**Protokollspezifikationen nicht vorhanden**

Wir haben bereits einige Spezifikationen für das Protokoll vorgelegt. Bitte überprüfe sie https://docs.pando.im/developer/intro.

In Zukunft werden wir hier mehr Dokumentation zur Verfügung stellen.

**Suche D: Geheimnisse werden geteilt und bleiben im reinen Text erhalten**

Wir haben eine eigene Art, die Geheimnisse zu verwalten und die Einsatzumgebung sicher zu halten.

**Suche E: Verwendung des nicht authentifizierten Verschlüsselungsmodus**

Wir benutzen AES-CBC in der Memo-Verschlüsselung. Es ist besser, zu AES-GCM zu wechseln. Aufgrund der Erklärung des **Finding A**hat sich Pando jedoch entschieden, dieses Problem zu ignorieren.

**F: Eingabe beim Hinzufügen oder Entfernen von PKCS #7 Padding nicht geprüft**

Wie oben.

**Suche G: Übermäßige Zentralisierung**

Ja, im Moment ist es schwierig, neue Mitglieder zum MTG hinzuzufügen oder das Bestehende zu entfernen.

Wir arbeiten an einem neuen Governance-System, um MTG-Mitglieder hinzuzufügen und zu entfernen. Das neue Governance-System wird in Zukunft freigegeben.

