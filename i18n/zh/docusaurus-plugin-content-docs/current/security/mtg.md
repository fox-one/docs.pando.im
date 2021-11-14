---
title: Mixin Trusted Group
---

## Mixin Network

Mixin Network是一个基于 aBFT共识机制 和 DAG数据结构模型 运行在 TEE (可信的执行环境) 的公链。 与其他具有伟大理论但几乎没有区块链实际交易解决方案的项目不同，Mixing Network以闪电般的速度提供了更安全、私密、零费用、开发人员和用户友好的交易解决方案。

## Mixin Trusted Group

[Mixin Trusted Group](https://developers.mixin.one/document/mainnet/mtg) 是智能合约在Mixin Network的替代。

![](./assets/overview-architecture.svg)

基本上，MTG是一种多签方案。 将挑选和安排好几个团队作为Pando的“受信任团队”，成为“节点”。 节点之间必须协商一致才能进行具体的操作。 因此，稳定服务和资产安全得到保障。

举个例子，比如说有一个M/N多签组，M代表节点的数量，这个组管理着这个多签地址里面的一些资产。 当其中一个节点需要将某些资产转移出去时，它需要从其他节点收集至少N签名来执行此操作。

MTG是框架。 Pando 是在 Mixin Network 上使用框架设计的一系列应用程序。

