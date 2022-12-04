---
title: 如何更新 LP Token 的图标
date: 2021-11-13 22:33:07
---

LP代币的图标是由[`4swap-icon-gen`](https://github.com/fox-one/4swap-icon-gen)生成.

请按照下面的步骤来更新 LP Token 的图标。

## 1. 提交最新的资产图标到Mixin主网

如果没有，请参考[本教程](https://docs.pando.im/docs/lake/tutorials/listing)来提交资产图标。

在生成新的LP代币图标之前，你需要确保新的资产图标已经添加到Mixin主网中。

要查看新资产图标的状态，请用浏览器访问 `https://mixin.one/snapshots/YOUR_ASSET_SYMBOL_NAME`. 网页将展示资产的信息，包括资产图标。

## 2. 生成 LP Token 图标

下载最新版本的 [`4swap-icon-gen`](https://github.com/fox-one/4swap-icon-gen)并且编译:

```bash
go build
```

然后运行

```bash
./4swap-icon-gen -config YOUR_KEYSTORE_FILE -a0 LP_ASSET_ID -a1 1ST_ASSET_ID -a2 2ND_ASSET_ID
```

其中：

- `YOUR_KEYSTORE_FILE`是你账户的密钥储存文件. 你可以从[Mixin开发者面板](https://developers.mixin.one/dashboard)获取.
- `LP_ASSET_ID` 是 LP Token 的资产ID。
- `1ST_ASSET_ID` 和`2ND_ASSET_ID` 是你想生成的LP代币的资产ID。 你可以用浏览器打开`https://mixin.one/snapshots/YOUR_ASSET_SYMBOL_NAME` 来获取。 链接地址会从符号变为资产 ID。

此命令将从 Mixin 网络获取最新图标，并在 `output` 目录中生成 LP Token 的图标。

例如, 如果你想为 `sRUM-XIN`生成一个新图标, 你可以运行:

```bash
./4swap-icon-gen -config YOUR_KEYSTORE_FILE -a0 a53872c5-b1a3-32da-bbc4-230a7ced69cb -a1 4f2ec12c-22f4-3a9e-b757-c84b6415ea8f -a2 c94ac88f-4671-3976-b60a-09064f1811e8
```

## 3. 将新 LP Token 图标提交到 Mixin 网络

像其他素材图标一样，您需要将新的 LP Token 图标提交到 Mixin 网络。 在浏览器中访问[https://github.com/MixinNetwork/asset-profile/](https://github.com/MixinNetwork/asset-profile/) 来提交.

````mdx-code-block
:::info
当你完成后，请创建一个pull request。 Mixin网络通常需要大约 1~2 天的时间来处理您的Pull Request。
:::  
````