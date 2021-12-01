---
title: LP token의 아이콘을 업데이트하는 방법
date: 2021-11-13 22:33:07
---

LP 토큰의 아이콘은 [`4swap-icon-gen`](https://github.com/fox-one/4swap-icon-gen)에 의해 생성됩니다.

LP 토큰 아이콘을 업데이트하려면 아래 단계를 따르세요.

## 1. 최신 자산 아이콘을 Mixin 메인넷에 제출

아직 제출하지 않으셨다면 [이 튜토리얼](../tutorials/listing)을 참고하여 머티리얼 아이콘을 제출해주세요.

새 LP 토큰 아이콘을 생성하기 전에 Mixin 메인넷에 새 자산 아이콘이 추가되었는지 확인해야 합니다.

새 자산 아이콘의 상태를 확인하려면 브라우저에서 `https://mixin.one/snapshots/YOUR_ASSET_SYMBOL_NAME`을 방문하십시오. 웹 페이지에는 자산 아이콘을 포함한 자산 정보가 표시됩니다.

## 2. LP 토큰 아이콘 생성

최신 버전의[`4swap-icon-gen`](https://github.com/fox-one/4swap-icon-gen) 을 다운로드하고 컴파일하십시오.

```bash
go build
```

그런 다음 실행

```bash
./4swap-icon-gen -config YOUR_KEYSTORE_FILE -a0 LP_ASSET_ID -a1 1ST_ASSET_ID -a2 2ND_ASSET_ID
```

그 중,

- `YOUR_KEYSTORE_FILE`은 계정의 키 저장 파일이며 [Mixin 개발자 패널](https://developers.mixin.one/dashboard)에서 받을 수 있습니다.
- `LP_ASSET_ID`는 LP 토큰의 자산 ID입니다.
- `1ST_ASSET_ID` 및 `2ND_ASSET_ID` 는 생성하려는 LP 토큰의 자산 ID입니다 브라우저에서 `https://mixin.one/snapshots/YOUR_ASSET_SYMBOL_NAME`을 열어 가져올 수 있습니다. 링크 주소가 기호에서 자산 ID로 변경됩니다.

이 명령은 Mixin 네트워크에서 최신 아이콘을 가져오고 `output`디렉터리에 LP 토큰 아이콘을 생성합니다.

예를 들어, `sRUM-XIN`에 대한 새 아이콘을 생성하려면 다음을 실행할 수 있습니다.

```bash
./4swap-icon-gen -config YOUR_KEYSTORE_FILE -a0 a53872c5-b1a3-32da-bbc4-230a7ced69cb -a1 4f2ec12c-22f4-3a9e-b757-c84b6415ea8f -a2 c94ac88f-4671-3976-b60a-09064f1811e8
```

## 3. 새로운 LP 토큰 아이콘을 Mixin 네트워크에 제출

다른 머티리얼 아이콘과 마찬가지로 새로운 LP 토큰 아이콘을 Mixin 네트워크에 제출해야 합니다. 제출하려면 브라우저에서 [https://github.com/MixinNetwork/asset-profile/](https://github.com/MixinNetwork/asset-profile/)을 방문하세요.

````mdx-code-block
:::info
완료되면 풀 리퀘스트를 생성하십시오. Mixin Network에서 pull request를 처리하는 데는 보통 1~2일 정도 소요됩니다.
:::
````