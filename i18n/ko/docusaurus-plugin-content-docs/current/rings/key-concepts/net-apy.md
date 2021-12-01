---
title: 연간 순 수익률(Net APY)
date: 2021-09-04 12:33:07
---

import { Improvement, } from "@site/src/components/admonitions";

<Improvement msg="better math formula: https://docusaurus.io/docs/markdown-features/math-equations"/>

Net APY(연간 순 수익률) 는 현재[연간 공급 수익률](./glossary) 및 [연간 차입 수익률](./glossary)기반으로 한 추정 연간 순 수익률을 반영합니다. 현재 연간 수익률로 수익을 창출하고 있는지 아니면 손실을 보고 있는지를 반영합니다.

연간 순 수익률 = [ ∑(자산의 공급량 x 자산의 연간 공급 수익률) - ∑(자산의 차입량 x 자산의 연간 차입 수익률) ] / 총 공급량

예를 들어, BTC와 ETH라는 두 가지 자산을 제공하여 [pUSD](/docs/leaf/pusd) 및 USDC의 두 자산을 빌렸습니다. 현재 연간 순 수익률은 다음과 같습니다.
   {[(BTC 공급량 * BTC 연간 공급 수익률) + (ETH 공급량 * ETH 연간 공급 수익률)] - [(pUSD 차입량 * pUSD 연간 차입 수익률) + (USDC 차입량 * USDC 연간 차입 수익률)]} / (BTC 공급량 + ETH 공급량)
