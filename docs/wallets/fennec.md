---
title: Fennec
sidebar_position: 2
---

[Fennec](https://github.com/fox-one/fennec) is an open source browser extension that allows you to easily manage your own crypto assets wallet of Mixin Network.

You can install Fennec from Chrome web store or Firefox Add-ons:

- [Chrome Store](https://chrome.google.com/webstore/detail/fennec/eincngenkhohbbfpkohipekcmnkfamjp)
- [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/fennec/)

Fennec uses Mixin Network's keystore files to identify your assets and manage your wallet. There are two ways to create your keystore files.

The first option is to create a  dApp from [Mixin Developer Dashboard](https://developers.mixin.one/dashboard). After creating the dApp, you can generate a keystore file.

:::info
**Mixin Developer Dashboard** is a service hosted by Mixin Core Team. You can use it to create two free dApps, but you will need to pay a fee for more dApps.
:::

The second option is to use the [Account Service providers](https://github.com/fox-one/fennec-asp) to generate a keystore file.

:::info
**Account Service Provider** is also an open source program that creating valid keystore files for you.
 You can host an instance yourself or use one from the 3rd party hoster.

The hoster has the permission to view the transactions and assets of your wallet (but no permission to operate your wallet). Please make sure you trust the 3rd party hoster before using it.
:::

For more information, please refer to [Fennec repo](https://github.com/fox-one/fennec) and [Fennec-asp repo](https://github.com/fox-one/fennec-asp).