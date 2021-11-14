---
title: Contribute
date: 2021-09-15 22:33:07
---

Pando documentation is open source. You are very welcomed to translate it into other languages to make it accessible to greater population!

## Preparation

Pando documentation is based on [Docusaurus](https://docusaurus.io/docs/en/latest/), a static site generator for React.js.

- You need to ensure that you have Yarn installed
- ドキュメントのリポジトリのクローンを作成します
- Run `yarn` in the root of the repo
- Run `yarn start` to preview the documentation

## ドキュメント構造

ドキュメントは次のように構成されています。

- all source is in the `docs` directory and `developer` directory
- the `docs` directory contains the following subdirectories:
  - `lake` contains all the Pando Lake & 4swap documentation
  - `leaf` contains all the Pando Leaf documentation
  - `rings` contains all the Pando Rings documentation
  - `wallets` contains all documentation about wallets on Mixin Network
  - `3rd-party-apps` lists applications built on top of Pando
  - `security` contains documentation concerning security issues
  - `community` contains all the community documentation
- the `developer` directory contains the following subdirectories:
  - `lake` contains the dev documentation of Pando Lake and 4swap
  - `leaf` contains the dev documentation of Pando Leaf
  - `rings` contains the dev documentation of Pando Rings
  - `resources` contains the resources
- the sidebar of `docs` is defined in `sidebar.docs.js`, the sidebar of `developer` is defined in `sidebar.developer.js`

## Translation

### Translate at Crowdin

If you're not familiar with Github and the i18n of Pando, we recommend you to use Crowdin to help us translate the docs.

1. [Tap here](https://pando.crowdin.com/u/signup) to sign-up an account of Crowdin
2. Browse the translation status and progress at [Pando's Page at Crwodin](https://pando.crowdin.com/)
3. Get familiar with the Crowdin translation UI, as you will need to use it to translate JSON and Markdown files

````mdx-code-block
:::info
Please note that all the code in the documentation should not be translated.
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



