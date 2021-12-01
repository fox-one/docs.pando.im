---
title: 지갑
---

## Mixin Messenger

[Mixin Messenger](https://mixin.one/messenger)는 거의 모든 인기 있는 암호화폐를 지원하는 오픈 소스 암호화폐 지갑입니다.

Mixin Messenger는 GPL-3.0 라이선스로 배포하는 Mixin Core Team에 의해 개발되었습니다.

사용자의 경우 공식 웹사이트 [mixin.one](https://mixin.one/messenger)에서 앱을 다운로드하세요.

개발자의 경우 다음에서 소스 코드를 확인하십시오. [Android 앱](https://github.com/MixinNetwork/android-app), [iOS 앱](https://github.com/MixinNetwork/ios-app) 및 [데스크톱 앱](https://github.com/MixinNetwork/desktop-app).


## Fennec


[Fennec](https://github.com/fox-one/fennec)는 Mixin Network의 암호화 자산 지갑을 쉽게 관리할 수 있는 오픈 소스 브라우저 확장 프로그램입니다.

Chrome web store 또는 Firefox Add-ons에서 Fennec을 설치할 수 있습니다.

- [Chrome Store](https://chrome.google.com/webstore/detail/fennec/eincngenkhohbbfpkohipekcmnkfamjp)
- [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/fennec/)

Fennec은 Mixin Network의 키 저장 파일을 사용하여 자산을 식별하고 지갑을 관리합니다. 키 저장 파일을 만드는 방법에는 두 가지가 있습니다.

첫 번째 옵션은 [Mixin 개발자 대시보드](https://developers.mixin.one/dashboard)에서 dApp을 만드는 것입니다. Dapp을 생성한 후 키 저장 파일을 생성할 수 있습니다.

````mdx-code-block
:::info
**Mixin 개발자 대시보드**는 Mixin Core Team에서 호스팅하는 서비스입니다. 이를 사용하여 2개의 무료 dApp을 만들 수 있지만 더 많은 dApp에 대해서는 요금을 지불해야 합니다.
:::
````

두 번째 옵션은 [계정 서비스 제공자](https://github.com/fox-one/fennec-asp)를 사용하여 키 저장 파일을 생성하는 것입니다.

```mdx-code-block
:::info
**계정 서비스 제공자**는 유효한 키 저장소 파일을 생성하는 오픈 소스 프로그램이기도 합니다.
 인스턴스를 직접 호스팅하거나 타사 호스팅 업체의 인스턴스를 사용할 수 있습니다.

호스트는 지갑의 거래 및 자산을 볼 수 있는 권한이 있습니다(그러나 지갑을 운영할 수 있는 권한은 없음). 사용하기 전에 타사 호스팅 업체를 신뢰하는지 확인하십시오.
:::
```

자세한 내용은[Fennec repo](https://github.com/fox-one/fennec) 및 [Fennec-asp repo](https://github.com/fox-one/fennec-asp)을 참조하세요.