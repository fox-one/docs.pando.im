---
title: Contribute
sidebar_position: 2
date: 2021-09-15 22:33:07
---

Pando documentation is open source. You are very welcomed to translate it into other languages to make it accessible to greater population!

## Preparation

Pando documentation is based on [Docusaurus](https://docusaurus.io/docs/en/latest/), a static site generator for React.js.

- You need to ensure that you have Yarn installed
- Clone the repository of the document
- Run `yarn` in the root of the `developer-docs`
- Run `yarn start` to preview the documentation

## Document Structure

The documentation is organized in the following way:

- all source is in the `docs` directory
- the `docs` directory contains the following subdirectories:
  - `lake` contains all the Pando Lake documentation
  - `leaf` contains all the Pando Leaf documentation
  - `rings` contains all the Pando Rings documentation
  - `wallets` contains all documentation about wallets on Mixin Network
  - `3rd-party-apps` lists applications built on top of Pando
  - `security` contains documentation concerning security issues
  - `community` contains all the community documentation


## Translation

### Generate new translation files for new languages

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

Copy the docs Markdown files to `i18n/$LANG_CODE/docusaurus-plugin-content-docs/current`, and translate them:

```bash
mkdir -p i18n/$LANG_CODE/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/$LANG_CODE/docusaurus-plugin-content-docs/current
```

### Translate the documents

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



