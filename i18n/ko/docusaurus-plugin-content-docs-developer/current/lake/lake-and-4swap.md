---
title: Lake와 4swap의 비교
date: 2021-07-31 15:44:07
---

**4swap**은 Mixin Trusted Group과의 탈중앙화 유동성 및 스와핑 서비스의 기반을 제공하는 개방형 프로토콜입니다.

## 4swap

**4swap Broker**는 사용자가 4swap 프로토콜과 상호 작용하는 인터페이스입니다.

기본 broker는 4swap Mixin Messenger 봇(id: 7000103537) 입니다. 요청에 브로커 ID를 지정하지 않으면 자산 유형, 거래 페어, 시장 데이터, 주문 데이터에 대한 모든 정보가 이 broker에 의해 응답됩니다.

https://4swap.org를 방문하여 이 broker의 웹 인터페이스에 액세스할 수 있습니다.

## Pando Lake

**Pando Lake**는 Pando에서 호스팅하는 4swap broker입니다.

Pando Lake는 시장 정보를 필터링하여 유동성이 좋고 견고한 커뮤니티의 지원을 받는 페어와 시장만 표시합니다.

Pando Lake에는 개별 Mixin Messenger 봇(id: 7000103937)이 있으며 https://lake.pando.im을 방문하여 웹 인터페이스에 액세스할 수도 있습니다.

LP 토큰은 Pando Lake와 4swap 간에 공유됩니다.

### Pando Lake와 통합

Pando Lake의 broker 아이디는 `5dbdb169-d56d-4b5b-b066-9b0780691b14`로 요청에 사용됩니다.

**Lake에 권한 부여**

`POST /api/oauth`를 호출하여 지갑을 인증할 때 `broker_id` 및 `label` 매개변수 두 개를 지정해야 합니다. 여기서 `label`는 "lake" 문자열이어야 합니다.

**기타 API**

`broker_id` 매개변수는 다음 API 요청의 쿼리 또는 페이로드에 추가되어야 합니다.

- POST /api/actions, Pando Lake로 보낼 수 있는 송금을 생성합니다.
- GET /api/pairs, Pando Lake에서 지원하는 자산 ID를 포함하는 `whitelists` 필드로 응답합니다.


