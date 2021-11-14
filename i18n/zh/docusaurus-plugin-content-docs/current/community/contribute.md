---
title: 贡献
date: 2021-09-15 22:33:07
---

Pando 的文档是开源的。 非常欢迎您将其翻译成其他语言，让更多的人能够使用它！

## 准备

Pando 文档是基于 [Docusaurus](https://docusaurus.io/docs/en/latest/) 生成的，Docusaurus 是一种基于 React 的静态网站生成器。

- 确保你已经安装了Yarn
- 克隆文档的仓库
- 在仓库的根目录下运行 ` yarn `
- 运行 `yarn start` 来预览文档

## 文档结构

Pando 文档是按以下的方式组织编排的：

- 所有源文件都在 `docs` 和 `developer` 文件夹下
- `docs` 文件夹下包含以下几个子文件夹
  - `lake` 包含所有 Pando Lake & 4swap 的文档
  - `leaf` 包含所有 Pando Leaf 的文档
  - `rings` 包含所有 Pando Rings 的文档
  - `wallets` 包含所有关于 Mixin 网络钱包的文档
  - `3rd-party-apps` 列出了一些基于 Pando 构建的第三方应用程序
  - `security` 包含了与安全有关的文档
  - `community` 包含了所有社区相关的文档
- `developer` 文件夹下包含以下几个子文件夹
  - `lake` 包含 Pando Lake 和 4swap 的开发文档
  - `leaf` 包含 Pando Leaf 的开发文档
  - `rings` 包含 Pando Rings 的开发文档
  - `resources` 包含一些相关资源文件
- `docs` 的侧边栏在 `sidebar.docs.js` 代码文件中定义，`developer` 的侧边栏在 `sidebar.developer.js` 代码文件中定义

## 翻译

### 在 Crowdin 进行翻译

如果你不熟悉 Github 和 Pando 的 i18n，我们推荐你使用 Crowdin 来帮助我们翻译文档。

1. [点击这里](https://pando.crowdin.com/u/signup)来注册一个 Crowdin 账户
2. 在[Crwodin的Pando页面](https://pando.crowdin.com/) 查看翻译状态和进度
3. 熟悉 Crowdin 翻译界面，因为你将会需要使用它来翻译 JSON 和 Markdown 格式的文件

````mdx-code-block
:::info
Please note that all the code in the documentation should not be translated.
:::
````

### 启动翻译

#### 为新的语言生成新的翻译文件

如果你是这个项目的维护者，请按照[ i18n 教程](https://docusaurus.io/docs/i18n/tutorial) 中的指示来添加一种新的语言。


**翻译索引页面**

请按照 [此处](https://docusaurus.io/docs/i18n/tutorial#use-the-translation-apis) 的指示来翻译索引页面和 React 组件。

**生成/更新 json 文件**

```bash
yarn run write-translations --locale $LANG_CODE
```

`$LANG_CODE` 是你想要生成的语言的代码。 例如，如果想生成法语的翻译文件，就应该使用`fr`。

翻译文件生成在 `i18n/$LANG_CODE/` 文件夹下。

**生成 Markdown 文件**

将文档中的Markdown文件复制到`i18n/$LANG_CODE/docusaurus-plugin-content-docs/current`，并翻译它们：

```bash
mkdir -p i18n/$LANG_CODE/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/$LANG_CODE/docusaurus-plugin-content-docs/current
```

#### 翻译文档

所有文档都根据语言被放置在 `i18n/$LANG_CODE/` 文件夹内。

- `i18n/$LANG_CODE/code.json`: 索引页面和被 docusaurus 使用的文本的翻译
- `i18n/$LANG_CODE/docusaurus-theme-classic/footer.json` 页脚的翻译
- `i18n/$LANG_CODE/docusaurus-theme-classic/navbar.json`: 导航栏的翻译
- `i18n/$LANG_CODE/docusaurus-plugin-content-docs/current.json`: 侧边栏的类别标签
- `i18n/$LANG_CODE/docusaurus-plugin-content-docs/current/**`：文档的markdown文件

**翻译预览**

```bash
yarn run start --locale $LANG_CODE
```



