---
title: 기여하기
date: 2021-09-15 22:33:07
---

Pando 문서는 오픈 소스입니다. 더 많은 사람들이 사용할 수 있도록 다른 언어로 번역하는 것을 환영합니다!

## 준비

Pando 문서는 React.js용 정적 사이트 생성기인 [Docusaurus](https://docusaurus.io/docs/en/latest/)를 기반으로 합니다.

- Yarn이 설치되어 있는지 확인해야 합니다.
- 문서의 저장소 복제
- 저장소의 루트에서 `yarn` 실행
- `yarn start`를 실행하여 문서를 미리 봅니다.

## 문서 구조

문서는 다음과 같은 방식으로 구성됩니다.

- 모든 소스는 `docs` 디렉토리와 `developer` 디렉토리에 있습니다.
- `docs` 디렉토리에는 다음 하위 디렉토리가 있습니다.
  - `lake`에는 모든 Pando Lake 및 4swap 문서가 포함되어 있습니다.
  - `leaf`는 모든 Pando Leaf 문서가 포함되어 있습니다.
  - `rings`에는 모든 Pando Rings 문서가 포함되어 있습니다.
  - `wallets`에는 Mixin 네트워크의 지갑에 대한 모든 문서가 포함되어 있습니다.
  - `3rd-party-apps`는 Pando를 기반으로 구축된 애플리케이션이 나열되어 있습니다.
  - `security`에는 보안 문제에 관한 문서가 포함되어 있습니다.
  - `community`는 모든 커뮤니티 문서가 포함되어 있습니다.
- `developer` 디렉토리에는 다음 하위 디렉토리가 있습니다.
  - `lake`에는 Pando Lake 및 4swap의 개발 문서가 포함되어 있습니다.
  - `leaf`에는 Pando Leaf의 개발 문서가 포함되어 있습니다.
  - `rings`에는 Pando Rings의 개발 문서가 포함되어 있습니다.
  - `resources`에는 리소스가 포함됩니다.
- `docs`의 사이드바는 `sidebar.docs.js`에 정의되어 있고, `developer`의 사이드바는 `sidebar.developer.js`에 정의되어 있습니다.

## 번역 참여

### Crowdin에서 번역하기

Github 및 Pando의 i18n에 익숙하지 않은 경우 Crowdin을 사용하여 문서 번역을 지원하는 것이 좋습니다.

1. Crowdin 계정에 가입하려면 [여기를 탭하세요](https://pando.crowdin.com/u/signup).
2. [Crwodin의 Pando 페이지](https://pando.crowdin.com/)에서 번역 상태 및 진행 상황을 찾아보세요.
3. JSON 및 Markdown 파일을 번역하는 데 사용해야 하므로 Crowdin 번역 UI에 익숙해지세요.

````mdx-code-block
:::info
Please note that all the code in the documentation should not be translated.
:::
````

### Initialize the Translation

#### 새 언어에 대한 새 번역 파일 생성

이 프로젝트의 관리자인 경우 [i18n 튜토리얼](https://docusaurus.io/docs/i18n/tutorial)의 지침에 따라 새 언어를 추가하세요.


**인덱스 페이지 번역**

인덱스 페이지와 반응 모듈을 번역하려면 [여기](https://docusaurus.io/docs/i18n/tutorial#use-the-translation-apis) 지침을 따르세요.

**Json 파일 생성/업데이트**

```bash
yarn run write-translations --locale $LANG_CODE
```

`$LANG_CODE`는 생성하려는 언어의 언어 코드입니다. 예를 들어 프랑스어에 대한 번역 파일을 생성하려면 `fr`를 사용해야 합니다.

번역 파일은 `i18n/$LANG_CODE/` 디렉토리에 생성됩니다.

**Markdown파일 생성**

문서의 마크다운 파일을 `i18n/$LANG_CODE/docusaurus-plugin-content-docs/current`에 복사하고 번역합니다.

```bash
mkdir -p i18n/$LANG_CODE/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/$LANG_CODE/docusaurus-plugin-content-docs/current
```

#### 문서 번역하기

모든 문서는 언어에 따라 `i18n/$LANG_CODE/`에 배치됩니다.

- `i18n/$LANG_CODE/code.json`: docusaurus에서 사용하는 인덱스 ​​페이지 및 텍스트의 번역.
- `i18n/$LANG_CODE/docusaurus-theme-classic/footer.json`: 페이지푸터의 번역
- `i18n/$LANG_CODE/docusaurus-theme-classic/navbar.json`: navbar의 번역
- `i18n/$LANG_CODE/docusaurus-plugin-content-docs/current.json`: 사이드바의 카테고리 레이블
- `i18n/$LANG_CODE/docusaurus-plugin-content-docs/current/**`: 문서의 markdown파일

**번역 미리보기**

```bash
yarn run start --locale $LANG_CODE
```



