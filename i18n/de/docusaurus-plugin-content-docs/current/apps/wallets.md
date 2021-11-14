---
title: Wallets
---

## Mixin Messenger

[Mixin Messenger](https://mixin.one/messenger) ist eine Open-Source-Kryptowährungs-Wallet, die fast alle gängigen Kryptowährungen unterstützt.

Mixin Messenger wird vom Mixin Core Team entwickelt, das es unter der GPL-3.0-Lizenz veröffentlicht.

Benutzer können die App von der offiziellen Website [mixin.one](https://mixin.one/messenger) herunterladen.

Entwickler können den Quellcode unter folgender Adresse einsehen: [Android-App](https://github.com/MixinNetwork/android-app), [iOS-App](https://github.com/MixinNetwork/ios-app) und [Desktop-App](https://github.com/MixinNetwork/desktop-app).


## Fennec


[Fennec](https://github.com/fox-one/fennec) ist eine Open-Source-Browser-Erweiterung, mit der Sie Ihre eigene Brieftasche für Krypto-Assets von Mixin Network einfach verwalten können.

Sie können Fennec über den Chrome Web Store oder Firefox Add-ons installieren:

- [Chrome Store](https://chrome.google.com/webstore/detail/fennec/eincngenkhohbbfpkohipekcmnkfamjp)
- [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/fennec/)

Fennec verwendet Mixin Network's Keystore-Dateien, um Ihre Assets zu identifizieren und Ihre Wallet zu verwalten. Es gibt zwei Möglichkeiten, Ihre Keystore-Dateien zu erstellen.

Die erste Option ist, eine dApp aus [Mixin Developer Dashboard](https://developers.mixin.one/dashboard) zu erstellen. Nach dem Erstellen der dApp können Sie eine Keystore-Datei generieren.

````mdx-code-block
:::info
**Mixin Developer Dashboard** ist ein Dienst, der vom Mixin Core Team bereitgestellt wird. Sie können damit kostenlos zwei dApps erstellen, aber für weitere dApps müssen Sie eine Gebühr bezahlen.
:::
````

Die zweite Option besteht darin, die [Account Service providers](https://github.com/fox-one/fennec-asp) zu verwenden, um eine Keystore-Datei zu erstellen.

```mdx-code-block
:::info
**Account Service Provider** ist auch ein Open-Source-Programm, das gültige Keystore-Dateien für Sie erstellt.
 Sie können eine Instanz selbst hosten oder eine von einem Drittanbieter verwenden.

Der Hoster hat die Berechtigung, die Transaktionen und das Asset Ihrer Wallet einzusehen (aber keine Berechtigung, Ihre Wallet zu betreiben). Bitte stellen Sie sicher, dass Sie dem Drittanbieter vertrauen, bevor Sie ihn verwenden.
:::
```

Weitere Informationen finden Sie unter [Fennec repo](https://github.com/fox-one/fennec) und [Fennec-asp repo](https://github.com/fox-one/fennec-asp).