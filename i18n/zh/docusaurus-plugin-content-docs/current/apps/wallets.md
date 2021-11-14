---
title: 钱包
---

## Mixin Messenger

[Mixin Messenger](https://mixin.one/messenger)是一个开源加密货币钱包，支持几乎所有流行的加密货币。

Mixin Messenger由Mixin核心团队开发，并基于GPL-3.0许可发布。

对于用户，请从其官方网站[mixin.one](https://mixin.one/messenger)下载该应用程序。

对于开发人员，请在下列网站查看其源代码： [Android App](https://github.com/MixinNetwork/android-app)，[iOS App](https://github.com/MixinNetwork/ios-app)和[桌面应用程序](https://github.com/MixinNetwork/desktop-app)。


## Fennec


[Fennec](https://github.com/fox-one/fennec)是一个开源浏览器扩展，允许您轻松管理自己的Mixin Network加密资产钱包。

您可以从Chrome网页商店或Firefox插件入口进行Fennec的安装：

- [Chrome商店](https://chrome.google.com/webstore/detail/fennec/eincngenkhohbbfpkohipekcmnkfamjp)
- [Firefox 插件](https://addons.mozilla.org/en-US/firefox/addon/fennec/)

Fennec使用Mixin Network的密钥存储文件来识别您的资产和管理您的钱包。 有两种方法来创建您的密钥存储文件。

第一种方式是从[Mixin开发者仪表板](https://developers.mixin.one/dashboard)创建dApp。 创建 dAppp 后，您可以生成一个密钥存储文件。

````mdx-code-block
:::info
**Mixin 开发者仪表盘** 是由 Mixin 核心团队托管的服务。 您可以使用它创建两个免费的dApp，但您需要创建更多dApp则需要支付费用。
:::
````

第二个方法是使用[帐户服务提供商](https://github.com/fox-one/fennec-asp)生成密钥存储文件。

```mdx-code-block
:::info

**Account Service Provider**也是一个开源程序，为您创建有效的密钥存储文件。
 您可以自己托管实例或使用第三方主机中的实例。

主机有权查看钱包的交易和资产(但无权操作钱包)。 在使用它之前，请确保您信任第三方主持人。
:::
```

欲了解更多信息，请参阅 [Fennec repo](https://github.com/fox-one/fennec) and [Fennec-asp repo](https://github.com/fox-one/fennec-asp)。