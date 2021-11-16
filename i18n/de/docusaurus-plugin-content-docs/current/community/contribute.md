---
title: Mitwirken
date: 2021-09-15 22:33:07
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

### Initialize the Translation

#### Generate new translation files for new languages

If you're the maintainer of this project, please follow the instructions in the [i18n tutorial](https://docusaurus.io/docs/i18n/tutorial) to add a new language.


**Translate the index page**

Please follow the instructions [here](https://docusaurus.io/docs/i18n/tutorial#use-the-translation-apis) to translate your index page and react components.

**Generate/Update json files**

```bash
yarn run write-translations --locale $LANG_CODE
```

The `$LANG_CODE` is the language code of the language you want to generate. For example, if you want to generate the translation files for the French language, you should use `fr`.

The translation files are generated in the `i18n/$LANG_CODE/` directory.

**Generate Markdown files**

Copy Markdown files in docs to `i18n/$LANG_CODE/docusaurus-plugin-content-docs/current`, and translate them:

```bash
mkdir -p i18n/$LANG_CODE/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/$LANG_CODE/docusaurus-plugin-content-docs/current
```

#### Translate the documents

All the documents are placed in the `i18n/$LANG_CODE/` according to the languages.

- `i18n/$LANG_CODE/code.json`: the translation of the index page and the text used by docusaurus.
- `i18n/$LANG_CODE/docusaurus-theme-classic/footer.json`: the translation of footer.
- `i18n/$LANG_CODE/docusaurus-theme-classic/navbar.json`: the translation of navbar.
- `i18n/$LANG_CODE/docusaurus-plugin-content-docs/current.json`: the label of category on sidebar.
- `i18n/$LANG_CODE/docusaurus-plugin-content-docs/current/**`: the markdown files of documents.

**Preview the translation**

```bash
yarn run start --locale $LANG_CODE
```



