---
title: Technical Design
date: 2021-07-12 23:33:07
---

# Pando Leaf Design Document

## Interact with Pando

Pando의 모든 참가자는 토큰을 다중 서명 지갑으로 전송하여 상호 작용을 완료합니다. 노드 작업자 **Syncer**는 지불을 mixin multisig 출력으로 동기화합니다. 다른 작업자 **Payee**는 모든 출력을 순서대로 처리합니다.

![Pando Design](design/mtg_design.png)

### Mixin Multisig Output

**Output:**

| 필드        | 설명         |
| --------- | ---------- |
| Sender    | 믹스인 사용자 Id |
| CreatedAt | 결제 시간      |
| AssetID   | 결제 자산 Id   |
| Amount    | 결제 금액      |
| Memo      | 추가 메시지     |

**Output Memo:**

메모에는 **TransactionAction** 정보가 포함되어 있습니다. 자세한 내용은 [DecodeTransactionAction](https://github.com/fox-one/pando/blob/main/core/action.go)을 참조하세요.

메모는 AES로 암호화되어 있으며, 복합 AES 키/iv에 사용되는 ed25519 공개 키는 처음 32바이트에 있습니다.

### TransactionAction Definition

| 필드       | 설명                      | 유형    |
| -------- | ----------------------- | ----- |
| FollowID | 이 트랜잭션에 대한 사용자 정의 추적 Id | uuid  |
| Body     | 액션 유형 & 관련 매개변수         | bytes |

## Workers

1. **Syncer**는 Mixin Messenger Api를 사용하여 처리되지 않은 utxo를 **outputs**으로 동기화하고 업데이트된 asc순으로 WalletStore에 저장합니다.
2. **Payee**는 WalletStore에서 처리되지 않은 utxo를 순서대로 가져오고 메모를 분석하여 작업을 가져온 다음 처리합니다. 처리 중에 송금이 생성될 수 있습니다.
3. **Assigner**는 사용하지 않은 UTXO를 충분히 선택하고 보류 중인 송금에 할당합니다.
4. **Cashier**는 WalletStore에서 처리되지 않은 송금을 순서대로 가져온 다음 다중서명송금을 요청하고 서명합니다. 충분한 서명이 수집되면 새 트랜잭션이 생성됩니다.
5. **TxSender**는 Mixin Network에 새 트랜잭션을 커밋합니다.

### Syncer Workflow

![Syncer Workflow](design/pando-syncer.png)

### Payee Workflow

![Payee Workflow](design/pando-payee.png)

### Assigner & Cashier & TxSender Workflow

![Assigner & Cashier Workflow](design/pando-cashier.png)

## Actions

Pando에서 지원하는 모든 작업은 cat,flip,oracle,proposal,sys 및 vat 그룹으로 구성됩니다. 자세한 내용은 [core/action](https://github.com/fox-one/pando/blob/main/core/action.go)을 참조하세요.

### Sys - 시스템 운영

#### #1 Withdraw

> pkg/maker/sys/withdraw.go

다중서명 지갑에서 자산을 인출하려면 제안서가 필요합니다.

**매개 변수:**

| 이름 | 유형   | 설명            |
| -- | ---- | ------------- |
| 자산 | uuid | 자산 출금 Id      |
| 수량 | uuid | 출금 금액         |
| 상대 | uuid | 수취인의 mixin Id |

### 제안 - 거버넌스 시스템

#### #11 Make

> pkg/maker/proposal/make.go

새 제안 생성

**매개 변수:**

| 이름   | 유형    | 설명                        |
| ---- | ----- | ------------------------- |
| data | bytes | 액션 유형 & 매개변수가 전달되면 실행됩니다. |

#### #12 Shout

> pkg/maker/proposal/shout.go

노드 관리자에게 이 제안에 투표하도록 요청

**매개 변수:**

| 이름 | 유형   | 설명       |
| -- | ---- | -------- |
| id | uuid | 제안 추적 Id |

#### #13 Vote

> pkg/maker/proposal/vote.go

노드만 제안에 투표가능합니다. 충분한 투표가 수집되면 첨부된 작업이 모든 노드에서 자동으로 실행됩니다.

**매개 변수:**

| 이름 | 유형   | 설명       |
| -- | ---- | -------- |
| id | uuid | 제안 추적 Id |

### Cat - 관리자 담보

#### #21 Create

> pkg/maker/cat/create.go

새로운 담보 유형 생성, 제안이 필요합니다.

**매개 변수:**

| 이름   | 유형     | 설명       |
| ---- | ------ | -------- |
| gem  | uuid   | 담보 자산 Id |
| dai  | uuid   | 부채 자산 Id |
| name | string | 담보 유형 이름 |

#### #22 Supply

> pkg/maker/cat/supply.go

dai 토큰을 공급하여 이 담보 유형의 총 부채 한도를 높입니다. 지불 자산 Id는 부채 자산 Id와 같아야 합니다.

**매개 변수:**

| 이름 | 유형   | 설명       |
| -- | ---- | -------- |
| id | uuid | 담보 추적 Id |

#### #23 Edit

> pkg/maker/cat/edit.go

담보의 하나 혹은 이상의 속성을 수정하려면 제안이 필요합니다.

**매개 변수:**

| 이름    | 유형     | 설명       |
| ----- | ------ | -------- |
| id    | uuid   | 담보 추적 Id |
| key   | string | 속성 이름    |
| value | string | 속성 값     |

#### #24 Fold

> pkg/maker/cat/fold.go

부채 승수(비율) 를 수정하여 해당 부채를 생성/소멸 합니다.

**매개 변수:**

| 이름 | 유형   | 설명       |
| -- | ---- | -------- |
| id | uuid | 담보 추적 Id |

### Vat - 관리자 볼트

#### #31 Open

> pkg/maker/vat/open.go

특별 담보 유형으로 새 볼트 열기

**매개 변수:**

| 이름   | 유형      | 설명       |
| ---- | ------- | -------- |
| id   | uuid    | 담보 추적 Id |
| debt | decimal | 초기 부채    |

#### #32 Deposit

> pkg/maker/vat/deposit.go

담보를 볼트로 이전합니다.

**매개 변수:**

| 이름 | 유형   | 설명       |
| -- | ---- | -------- |
| id | uuid | 볼트 추적 Id |

#### #33 Withdraw

> pkg/maker/vat/withdraw.go

볼트에서 담보물을 인출할 수 있습니다. 볼트 소유자만 해당됩니다.

**매개 변수:**

| 이름   | 유형      | 설명       |
| ---- | ------- | -------- |
| id   | uuid    | 볼트 추적 Id |
| dink | decimal | 담보물의 변경  |

#### #34 Payback

> pkg/maker/vat/payback.go

볼트 부채를 줄입니다.

**매개 변수:**

| 이름 | 유형   | 설명       |
| -- | ---- | -------- |
| id | uuid | 볼트 추적 Id |

#### #35 Generate

> pkg/maker/vat/generate.go

볼트 부채 증가, 볼트 소유자만 해당합니다.

**매개 변수:**

| 이름   | 유형      | 설명       |
| ---- | ------- | -------- |
| id   | uuid    | 볼트 추적 Id |
| debt | decimal | 부채의 변화   |

### Flip - 관리자 경매

#### #41 Kick

> pkg/maker/flip/kick.go

청산 볼트에 보관된 담보물을 경매에 올립니다.

**매개 변수:**

| 이름 | 유형   | 설명       |
| -- | ---- | -------- |
| id | uuid | 볼트 추적 Id |

#### #42 Bid

> pkg/maker/flip/bid.go

경매에 참여하기 위해 dai를 지불합니다.

> 입찰 단계에서 입찰자는 dai의 입찰 금액을 늘리면서 일정 수량의 gem을 놓고 경쟁합니다. dai 수가 증가하면 경매가 dent 단계로 진입합니다. 경향 단계의 요점은 시스템의 부채를 충당하기 위해 Dai를 올리는 것입니다. dent 단계에서 입찰자는 고정 수량의 dai에 입찰하는 gem 수량을 줄이기 위해 경쟁합니다. 몰수된 gem은 소유자가 회수할 수 있도록 청산된 볼트로 반환됩니다. dent 단계의 요점은 시장이 허용하는 한 많은 담보물을 볼트 소유자에게 반환하는 것입니다.

**매개 변수:**

| 이름  | 유형      | 설명       |
| --- | ------- | -------- |
| id  | uuid    | 경매 추적 Id |
| lot | decimal | 담보 금액    |

#### #43 Deal

> pkg/maker/flip/deal.go

낙찰 청구 / 완료된 경매 정산

**매개 변수:**

| 이름 | 유형   | 설명       |
| -- | ---- | -------- |
| id | uuid | 경매 추적 Id |

### Oracle - manager price oracle

#### #51 Create

> pkg/maker/oracle/create.go

자산에 대한 새 오라클을 등록하십시오. 제안이 필요합니다.

**매개 변수:**

| 이름        | 유형        | 설명                          |
| --------- | --------- | --------------------------- |
| id        | uuid      | 자산 Id                       |
| price     | decimal   | 초기 가격                       |
| hop       | int64     | poke calls사이에 몇초의 지연이 있습니다. |
| threshold | int64     | poke할때 필요한 지배자의 수량          |
| ts        | timestamp | 타임스탬프 요청                    |

#### #52 Edit

> pkg/maker/oracle/edit.go

oracle의 다음 값, hop & 한계값 수정, 제안이 필요합니다.

**매개 변수:**

| 이름    | 유형     | 설명    |
| ----- | ------ | ----- |
| id    | uuid   | 자산 Id |
| key   | string | 속성 이름 |
| value | string | 속성 값  |

#### #53 Poke

> pkg/maker/oracle/poke.go

현재 피드 값을 업데이트하고 다음 피드 값을 대기열에 넣습니다.

**매개 변수:**

| 이름    | 유형        | 설명        |
| ----- | --------- | --------- |
| id    | uuid      | 자산 Id     |
| price | decimal   | 새로운 다음 가격 |
| ts    | timestamp | 타임스탬프 요청  |

#### #54 Rely

> pkg/maker/oracle/rely.go

화이트리스트에 새 가격 피드 추가, 제안이 필요합니다.

**매개 변수:**

| 이름  | 유형    | 설명            |
| --- | ----- | ------------- |
| id  | uuid  | feed mixin id |
| key | bytes | 공개 키          |

#### #55 Deny

> pkg/maker/oracle/deny.go

화이트리스트에서 가격 피드 제거, 제안이 필요합니다.

**매개 변수:**

| 이름 | 유형   | 설명            |
| -- | ---- | ------------- |
| id | uuid | feed mixin id |
