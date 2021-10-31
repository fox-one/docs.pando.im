---
title: 개요(Overview)
sidebar_position: 1
date: 2021-03-20 12:38:07
---

Pando는 MTG 기술로 구축된 탈중앙화 금융네트워크이며 기본 금융 알고리즘은 [MakerDao](https://makerdao.com) 및 Synthetix에서 영감을 받았습니다.

Pando는 여러 개의 초과 저당 자산을 취득해 Pando 다중서명자산을 증가 시키고, 그중 (증가된 Pando 자산), 예를 들어 pUSD도 담보물로 사용할수 있습니다.

## Pando 소개

### pUSD

pUSD는 2020년 12월 25일에 출시된 스테이블 코인입니다. 출시 이후 pUSD의 담보율은 항상 200% 이상이었습니다.

### 담보(Pledge)

노드는 투표를 통해 모든 자산을 담보물로 추가할 수 있습니다. 노드가 하나의 자산을 담보물로 의결하면, 누구나 충분한 특정 자산을 제공함으로써 pUSD를 빌릴 수 있습니다.

노드는 또한 투표를 통해 다양한 스테이킹 매개변수를 조정할 수 있습니다.

BTC, ETH 등을 포함하여 Mixin Network에서 지원하는 모든 자산은 Pando의 잠재적인 담보물입니다.

### 볼트(Vaults)

모든 승인된 담보물은 Pando 다중 서명 주소에 예치되어 (모든 Pando 사용자를 위한) pUSD를 생성하기 위한 볼트를 생성할 수 있습니다.

저당잡힌 자산의 청산 가격이 최소 요건보다 높은 한, 볼트 생성자는 자신의 볼트에 대한 완전한 통제를 갖게 됩니다.

### Pando와의 상호작용(Interact with Pando)

사용자와 노드 관리자 모두 Pando와 상호 작용하려면 다중 서명 트랜잭션을 사용해야 합니다.

메모에는 트랜잭션의 방법과 매개변수가 모두 기재되어 있으며, 각 송금에 대한 추가 정보가 포함되어 있습니다.

현재 사용자의 개인 정보를 보호하기 위해 메모의 모든 정보는 다음 알고리즘으로 암호화되어야 합니다.

Pando will generate a pair of ed25519 public and private keys at first, and publish the public key.

For each transaction, the user generates a pair of temporary ed25519 public and private keys, and generates a string of 32-bit bytes.

The first 16 bits of these bytes will be the key for AES encryption, and the last 16 bits will be the `iv` of AES encryption.

These bytes must encrypt the original memo and generate a result we call it encrypted bytes. The client should put encrypted bytes and the user’s public key ​​together and encode in base64 as the final memo for the transfer.

The nodes of Pando synchronize all transfers from the Mixin Network. When a node recognizes a valid transfer, it performs a reverse operation to restore the key and iv encrypted by AES, and then decrypts the parameters of the action.

The nodes need to ensure that they process the user interaction in the same order to ensure that the data stored in the database is completely consistent with other nodes; It should follow the same order when transferring money to ensure that all nodes choose when completing the transfer in the same utxo.

### Liquidate high-risk vaults

In order to ensure that there is always enough pledge in Pando to endorse the loaned pUSD, all vaults will require an excess mortgage such as 150%.

When the value of the mortgaged assets is insufficient due to market price fluctuations, the vault will enter a high-risk state and be open for liquidation to redeem the pUSD.The liquidation is carried out as auction:

- If the pUSD got by the auction is enough to pay off the debt in the vault and the liquidation penalty, the auction will sell just the enough amount of pledge to cover the debt and the remaining pledge will be returned to the original owner.
- If the pUSD got from the auction of the pledge is not enough to pay off the debt and the liquidation penalty, the loss will become Pando’s liability and be shared by all nodes.

### Price Oracle

Pando needs to synchronize the prices of the pledged assets to update the collateral rate of the vaults and liquidate the high-risk vaults.

The price data of Pando relies on an external decentralized price service. Pando will not use the price data directly.

Pando adds an one-hour delay to all price data. During this period, if someone attacks a price service, the nodes can vote to change the state of the pledge to be frozen urgently. Nodes can also vote for new prices.

### Summary and future works

Pando has achieved the goal that decentralized the consensus among trusted nodes, bringing the stable coin minting service to all users of the Mixin Network.

Pando also reserves the ability to extend the lending to non-stable assets. For example, it can issue a 1:1 token pTesla against Tesla stock on the Mixin network, and then plege the Bitcoin on Pando to generate pTesla, which will build connections between the assets in the Mixin Network and the external assets of outside world.
