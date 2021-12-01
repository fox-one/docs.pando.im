---
title: 감사 보고서
---

import { Improvement, } from "@site/src/components/admonitions";

<Improvement />

## IOActive의 감사 보고서

### 보고서 다운받기

[IOActive의 감사 보고서](//docs.pando.im/reports/ioactive-report.pdf)

### 발견 사항 및 수정 상태

| ID    | 제목                                                                            | 총 리스크 | 상태  |
| ----- | ----------------------------------------------------------------------------- | ----- | --- |
| MP-07 | Rings - Borrow Repayment Transactions May Fail After Modifying Borrow Balance | 높음    | 수정됨 |
| MP-06 | General - Outdated Web Server with Multiple Vulnerabilities                   | 높음    | 수정됨 |
| MP-01 | Lack of Certificate Pinning                                                   | 중간    |     |
| MP-02 | Insufficient JailBreak Detection                                              | 중간    |     |
| MP-03 | App Transport Security Disabled                                               | 낮음    |     |
| MP-04 | RPATH Set in Binary                                                           | 낮음    |     |
| MP-05 | Binary Users Insecure APIs                                                    | 낮음    |     |

### 문제 분석

**MP-07: Rings - Borrow Repayment Transactions May Fail After Modifying Borrow Balance**

이 문제는 `Payee.handleRepayEvent()`의 잘못된 논리로 인해 발생합니다. 자세한 내용은 IOActive 감사 보고서(3~8페이지) 를 참조하십시오.

**MP-07: General - Outdated Web Server with Multiple Vulnerabilities**

이 문제는 API 엔드포인트를 제공하는 오래된 웹 서버로 인해 발생합니다. 자세한 내용은 IOActive 감사 보고서(3~8페이지) 를 참조하십시오.

**MP-01: Lack of Certificate Pinning**

이것은 Mixin Messenger 관련 문제입니다.

현재 대부분의 앱은 스스로 신뢰할 수 있는 인증서를 결정하는 대신 운영 체제의 모든 유효한 인증서를 완전히 신뢰하게 되 있습니다.. 운영 체제의 신뢰 저장소를 파괴하거나 루트 인증서를 해독하는 공격자는 메시지 가로채기(man-in-the-middle) 공격을 설정하고 애플리케이션과 서버 간에 전송되는 데이터를 캡처할 수 있습니다.

Mixin 팀과 Pando 팀은 사용자의 로컬 운영 체제 및 CA 시스템의 보안을 보장할 책임이 없습니다. Mixin Team과 논의 끝에 지금은 이 문제를 무시하기로 결정했습니다.

**MP-02: Insufficient JailBreak Detection**

이것은 Mixin Messenger iOS 관련 문제입니다.

Mixin Team은 사용자의 로컬 운영 체제의 보안을 보장할 책임이 없으므로 이제 이 문제를 무시하기로 결정했습니다.

**MP-03: App Transport Security Disabled**

이것은 Mixin Messenger iOS 관련 문제입니다.

보고서는 WebView의 요청에 대해 ATS 옵션이 비활성화되어 있다고 언급했습니다. 사용자가 WebView를 사용하여 HTTP 웹 페이지에 액세스할 수 있기 때문에 이것은 애플리케이션의 결함이 아닙니다.

**MP-04: RPATH Set in Binary**

이 문제는 활용하기 어렵기 때문에 Mixin Team은 이제 이 문제를 무시하기로 결정했습니다.

**MP-05: Binary Users Insecure APIs**

이 문제는 활용하기 어렵기 때문에 Mixin Team은 이제 이 문제를 무시하기로 결정했습니다.

## LeastAuthority의 감사 보고서

### 보고서 다운받기

[LeastAuthority의 감사 보고서](//docs.pando.im/reports/least-authority-report.pdf)


### 발견 사항 및 수정 상태

| ID | 제목                                                        | 상태       |
| -- | --------------------------------------------------------- | -------- |
| A  | No Provision to Handle Compromise of Shared MTG Key       | 수정 계획 없음 |
| B  | Security Roadmap Nonexistent                              | 수정 계획 없음 |
| C  | Protocol Specifications Nonexistent                       |          |
| D  | Secrets Are Shared and Persist in Plain Text              | 수정 계획 없음 |
| E  | Use of Unauthenticated Encryption Mode                    | 수정 계획 없음 |
| F  | Input Not Checked When Adding or Removing PKCS #7 Padding | 수정 계획 없음 |
| G  | Excess Centralization                                     |          |

### 설문조사 결과에 대한 응답

**Finding A: No Provision to Handle Compromise of Shared MTG Key**

초기에 공유 키의 목적은 메모를 암호화하는 것이었습니다. 이전 버전에서는 Pando Leaf와 Rings가 메모에`user_id`를 배치하고 공유 키를 사용하여 암호화했습니다.

하지만 사용자의 개인정보를 보다 잘 보호하기 위해 Mixin Network를 업그레이드하고 UTXO에 `user_id`를 직접 추가했습니다. 이제 Pando는 메모에서 `user_id`를 삭제하여 메모에 민감한 정보가 없습니다.

프로토콜 호환성을 유지하기 위해 암호화된 메모에 대한 지원을 계속 유지합니다. 그러나 메모에 암호화되지 않은 텍스트를 사용하면 문제가 없습니다. 즉, 공유 키는 더 이상 중요하지 않습니다.

**Finding B: Security Roadmap Nonexistent**

실제로 우리는 안전 관련 계획이 포함된 로드맵을 가지고 있습니다. 향후 로드맵을 업데이트할 예정입니다.

**Finding C: Protocol Specifications Nonexistent**

프로토콜에 대한 몇 가지 사양을 제공했습니다. https://docs.pando.im/developer/intro를 확인하세요.

앞으로 여기에서 더 많은 문서를 제공할 것입니다.

**Finding D: Secrets Are Shared and Persist in Plain Text**

키를 관리하고 배포 환경을 안전하게 유지하는 자체 방법이 있습니다.

**Finding E: Use of Unauthenticated Encryption Mode**

우리는 메모 암호화에 AES-CBC를 사용합니다. 이론적으로 AES-GCM으로 전환하는 것이 좋습니다. 하지만 Pando는 **Finding A**의 해명으로 이 문제를 무시하기로 했습니다.

**Finding F: Input Not Checked When Adding or Removing PKCS #7 Padding**

위와 같습니다

**Finding G: Excess Centralization**

예, MTG에 새 회원을 추가하거나 기존 회원을 제거하는 것은 어렵습니다.

MTG 구성원을 추가 및 삭제할 수 있는 새로운 관리 시스템을 구축하기 위해 열심히 노력하고 있습니다. 앞으로 새로운 거버넌스 시스템이 도입될 것입니다.

