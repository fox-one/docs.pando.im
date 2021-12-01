---
title: Mixin Trusted Group
---

## Mixin Network

Mixin 네트워크는 TEE(Trusted Execution Environment) 에서 실행되는 BFT 합의 메커니즘 및 DAG 데이터 구조 모델을 기반으로 하는 퍼블릭 체인입니다. 이론은 훌륭하지만 실제 블록체인 거래 솔루션이 거의 없는 다른 프로젝트와 달리 Mixing Network는 보다 안전하고 프라이빗하며 수수료가 없는 개발자 및 사용자 친화적인 거래 솔루션을 라이트닝 같은 속도로 제공합니다.

## Mixin Trusted Group

[Mixin Trusted Group](https://developers.mixin.one/document/mainnet/mtg)은 Mixin 네트워크의 스마트 계약에 대한 대안입니다.

![](./assets/overview-architecture.svg)

기본적으로 MTG는 다중 서명 체계입니다. Pando의 '신뢰받는 팀'으로 여러 팀이 선정, 편성되어 '노드'가 됩니다. 노드는 특정 작업을 수행하기 위해 합의에 도달해야 합니다. 따라서 안정적인 서비스와 자산의 안전성이 보장됩니다.

예를 들어 M/N 다중 서명 그룹이 있다고 가정하면 M는 노드 수를 나타내며 이 그룹은 다중 서명 주소의 일부 자산을 관리합니다. 노드 중 하나가 일부 자산을 전송해야 하는 경우 이 작업을 수행하기 위해 다른 노드에서 최소 N개의 서명을 수집해야 합니다.

MTG는 프레임워크입니다. Pando는 Mixin Network의 프레임워크를 사용하여 설계된 일련의 응용 프로그램입니다.

