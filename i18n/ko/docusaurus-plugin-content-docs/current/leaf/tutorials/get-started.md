---
title: 시작하기
date: 2021-08-13 12:33:07
---

Pando leaf supports [mixin messenger](https://docs.pando.im/docs/wallets/mixin-messenger) wallet and [fennec](https://pando.im/fennec/) (web wallet) and the following content takes mixin messenger wallet as an example.

[Pando Leaf](https://leaf.pando.im)를 방문하거나 Mixin Messenger 앱에서 Mixin ID **7000103924**를 검색하고 파란색 숫자를 클릭합니다. 그런 다음 봇을 추가하고 작은 로봇 아바타를 클릭하여 Pando leaf를 엽니다.

![](../assets/leaf-get-started-p1.png)


"지갑 연결"을 클릭하여 시작해야 합니다. 그렇지 않으면 자산과 관련된 데이터가 인터페이스에 표시될 수 없으므로 꼭 승인을 해줘야 합니다

![](../assets/leaf-get-started-p2.png)

````mdx-code-block
:::tip
모두 확인하고 승인합니다. 승인은 당신의 자산을 볼 수만 있고 사용할 수 없습니다. 안전하니 걱정 안 하셔도 됩니다.
:::
````

Pando leaf의 홈페이지를 알아봅시다.

![](../assets/leaf-get-start-p3.png)

처음 사용할 때 [볼트 추가](https://docs.pando.im/docs/leaf/tutorials/open-vault)를 해야 합니다.  오른쪽의 스크린샷에 집중해 보겠습니다.

잠긴 BTC는 볼트에 있는 당신의 담보물 입니다. 1btc를 볼 수 있다는 것은 pando leaf에 1btc를 저당했다는 의미입니다.

주의해야 할 것은 담보 비율, [청산가격](https://docs.pando.im/docs/leaf/key-concepts/liquidation/liquidation-ratio), [현재 가격 및 다음 가격](https://docs.pando.im/docs/leaf/key-concepts/price-oracles)입니다.

위의 그림을 예로 들면 현재 모기지 이자율이 4414.4%이고 청산 가격이 1500 pusd 인데, 이는 BTC 가격이 1500 pusd까지 떨어지면 강제로 청산 절차에 진입한다는 의미입니다.

현재 가격과 다음 가격을 고려할 때 이는 안전하다고 볼 수 있습니다.

````mdx-code-block
:::caution
모기지 이자율이 안전한 범위 내인지 확인하시기 바라며, 150% 미만인 경우 담보 자산은 전액 청산 될 수 있습니다.
:::
````

한번 직접 시도해보세요.


