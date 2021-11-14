---
title: Mitwirken
date: 15-09-2021 22:33:07
---

Die Pando-Dokumentation ist als Open Source verfügbar. Sie sind herzlich eingeladen, sie in andere Sprachen zu übersetzen, um sie einer breiteren Öffentlichkeit zugänglich zu machen!

## Vorbereitung

Pando Dokumentation basiert auf [Docusaurus](https://docusaurus.io/docs/en/latest/), einem statischen Site-Generator für React.js.

- Sie müssen sicherstellen, dass Yarn installiert ist
- Das Repository des Dokuments klonen
- `yarn` im Stammverzeichnis des Repos ausführen
- Führe `yarn start` aus, um eine Vorschau der Dokumentation anzuzeigen

## Aufbau der Dokumentation

Die Dokumentation ist folgendermaßen gegliedert:

- alle Quellen befinden sich im `docs` Verzeichnis und `developer` Verzeichnis
- das Verzeichnis `docs` enthält die folgenden Unterverzeichnisse:
  - `lake` enthält die gesamte Dokumentation von Pando Lake & 4swap
  - `leaf` enthält die gesamte Pando Leaf Dokumentation
  - `rings` enthält die gesamte Pando Rings Dokumentation
  - `wallets` enthält die gesamte Dokumentation über Wallets im Mixin-Netzwerk
  - `3rd-party-apps` listet Anwendungen auf, die auf Pando aufgebaut sind
  - `security` enthält Dokumentation zu Sicherheitsthemen
  - `community` enthält die gesamte Community-Dokumentation
- das Verzeichnis `developer` enthält die folgenden Unterverzeichnisse:
  - `lake` enthält die Entwicklerdokumentation von Pando Lake und 4swap
  - `leaf` enthält die Entwicklerdokumentation von Pando Leaf
  - `rings` enthält die Entwicklerdokumentation von Pando Rings
  - `resources` enthält die Ressourcen
- die Seitenleiste von `docs` ist in `sidebar.docs.js` definiert, die Seitenleiste von `developer` ist in `sidebar.developer.js` definiert

## Übersetzung

### Übersetzen bei Crowdin

Wenn Sie mit Github und dem i18n von Pando nicht vertraut sind, empfehlen wir Ihnen, Crowdin zu verwenden, um uns bei der Übersetzung der Dokumente zu helfen.

1. [Tippen Sie hier](https://pando.crowdin.com/u/signup), um ein Konto bei Crowdin zu registrieren
2. Den Stand und Fortschritt der Übersetzung finden Sie auf [Pandos Seite bei Crwodin](https://pando.crowdin.com/)
3. Lernen Sie die Crowdin-Übersetzungsoberfläche kennen, da Sie sie für die Übersetzung von JSON- und Markdown-Dateien benötigen

````mdx-code-block
:::info
Bitte beachten Sie, dass der ganze Code in der Dokumentation nicht übersetzt werden sollte.
:::
````

### Die Übersetzung initialisieren

#### Neue Übersetzungsdateien für neue Sprachen erstellen

Wenn Sie der Betreuer dieses Projekts sind, folgen Sie bitte den Anweisungen im [i18n-Tutorial](https://docusaurus.io/docs/i18n/tutorial), um eine neue Sprache hinzuzufügen.


**Übersetzung der Indexseite**

Bitte folgen Sie den Anweisungen [hier](https://docusaurus.io/docs/i18n/tutorial#use-the-translation-apis), um Ihre Index-Seite und die React-Komponenten zu übersetzen.

**Json-Dateien erstellen/aktualisieren**

```bash
yarn run write-translations --locale $LANG_CODE
```

Der `$LANG_CODE` ist der Sprachencode der zu generierenden Sprache. Wenn Sie zum Beispiel die Übersetzungsdateien für die französische Sprache erstellen wollen, sollten Sie `fr` verwenden.

Die Übersetzungsdateien werden in dem Verzeichnis `i18n/$LANG_CODE/` erstellt.

**Markdown-Dateien erstellen**

Kopieren Sie die Markdown-Dateien in docs nach `i18n/$LANG_CODE/docusaurus-plugin-content-docs/current`, und übersetzen Sie sie:

```bash
mkdir -p i18n/$LANG_CODE/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/$LANG_CODE/docusaurus-plugin-content-docs/current
```

#### Die Dokumente übersetzen

Alle Dokumente werden nach Sprachen geordnet im `i18n/$LANG_CODE/` abgelegt.

- `i18n/$LANG_CODE/code.json`: die Übersetzung der Indexseite und des von docusaurus verwendeten Textes.
- `i18n/$LANG_CODE/docusaurus-theme-classic/footer.json`: die Übersetzung der Fußzeile.
- `i18n/$LANG_CODE/docusaurus-theme-classic/navbar.json`: die Übersetzung der Navigationleiste.
- `i18n/$LANG_CODE/docusaurus-plugin-content-docs/current.json`: das Label der Kategorie in der Seitenleiste.
- `i18n/$LANG_CODE/docusaurus-plugin-content-docs/current/**`: die Markdown-Dateien der Dokumente.

**Vorschau der Übersetzungen anzeigen**

```bash
yarn run start --locale $LANG_CODE
```



