---
title: Mixin Trusted Group
sidebar_position: 2
---

## Mixin Network

Mixin Network是一个基于 aBFT 的 DAG技术由TEE (可信的执行环境) 驱动的公开区块链。 与其他具有伟大理论但几乎没有区块链实际交易解决方案的项目不同，Mixing Network以闪电般的速度提供了更安全、私密、零费用、开发人员和用户友好的交易解决方案。

## Mixin可信群组

[Mixin 可信群组](https://developers.mixin.one/document/mainnet/mtg) 是Mixin Network智能合约的替代。

![](./assets/overview-architecture.svg)

从根本上讲，MTG是一种多签名协商一致保管的解决方案。 将挑选和安排好几个团队作为Pando的“受信任团队”，成为“节点”。 节点之间必须协商一致才能进行具体的操作。 因此，稳定服务和资产安全得到保障。

举个例子，比如说有一个M/N多签组，M代表节点的数量，这个组管理着这个多签地址里面的一些资产。 当其中一个节点需要将某些资产转移出去时，它需要从其他节点收集至少N签名来执行此操作。

MTG是框架。 Pando 是在 Mixin Network 上使用框架设计的一系列应用程序。

