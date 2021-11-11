---
title: 개요
sidebar_position: 1
date: 2021-09-30 14:38:07
---

Pando Lake는 Mixin Network의 MTG 기술로 구축된 [Uniswap](https://uniswap.org) v2 구현체입니다. Mixin의 놀라운 TPS에 힘입어, Pando Lake는 거래에서 뛰어난 성능을 가지고 있으며, 대부분의 거래를 몇 초 안에 확인할 수 있습니다.

## Pando Lake 소개

### 거버넌스(Governance)

Pando Lake는 5개의 신뢰할 수 있는 노드에 의해 유지 관리됩니다. 새 풀 생성과 같은 제안은 최소 3개 노드의 승인을 받아야 합니다.

### 풀

각 풀은 두 개의 토큰을 보유하며, 두 토큰은 함께 해당 자산에 대한 거래 페어를 나타낸다. 유동성 제공자들은 토큰을 풀장에 넣어 거래자들이 거래할 수 있도록 합니다. 그 대가로 거래 수수료는 모두 유동성 기여 비율에 따라 유동성 제공자에게 지급됩니다.

### LP 토큰

각 풀에는 순환 유동성을 나타내는 고유한 토큰(LP 토큰) 이 있습니다. LP Token을 보유하는 것은 유동성 제공의 증거이며 유동성을 인출하려면 LP Token의 지불도 필요합니다.

LP Token의 총 시장 가치는 Pool에 있는 두 토큰의 시장 가치의 합과 같습니다.

## 액션

### 예금

유동성 제공자가 되기 위해 풀 예치금을 증가시키세요.

![예금 액션](assets/pando_lake_deposit_action.png)

### 출금

LP 토큰을 풀로 다시 지불하시면 안에서 토큰을 인출하실 수 있으며, 이는 풀의 보유량이 감소하는 것을 의미합니다.

![출금 액션](assets/pando_lake_withdraw_action.png)

### 거래

풀은 항상 거래자의 요청을 자동으로 처리합니다. 사용자는 임의의 풀을 통해 거래할 수 있으며 Pando Lake는 하나의 트랜잭션에 대해 최대 4개의 풀을 지원합니다.

![거래 액션](assets/pando_lake_trade_action.png)

## 요약

Pando Lake는 신뢰할 수 있는 노드 간의 합의를 탈중앙화하여 Mixin 네트워크의 모든 사용자에게 다중 AMM 공식을 사용하는 dex 서비스를 제공한다는 목표를 달성했습니다.

Pando Lake는 좋은 성과를 거두었지만 아직 충분하지 않습니다. 우리는 유동성을 보다 유연하고 효율적으로 만들기 위해 몇 가지 새로운 풀을 작업하고 있습니다. 신뢰할 수 있는 노드의 관리는 더 많은 참가자를 유치하기 위해 더 개방적이어야 합니다.

