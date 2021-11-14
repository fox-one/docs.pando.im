---
title: Mixin Trusted Group

---

## Mixin Network

Mixin Network is a public blockchain driven by TEE (Trusted Execution Environment) based on the DAG with aBFT. Unlike other projects which have great theories but hardly any actual implementations of blockchain transaction solution, Mixin Network provides a more secure, private, 0 fees, developer-friendly and user-friendly transaction solution with lightning speed.

## Mixin Trusted Group

[Mixin Trusted Group](https://developers.mixin.one/document/mainnet/mtg) is an alternative to smart contacts on Mixin Network.

![](./assets/overview-architecture.svg)

Basically, MTG is a Multi-signature custodian consensus solution. Several teams will be selected and arranged as the “Trusted Group” in Pando, becoming the “Nodes”.
Concensus has to be reached among the nodes to perform certain administrative actions. As a result, stable services and asset safety are guaranteed.

For example, let’s say there is a M/N multi-sig group where M represents the number of nodes, and the group manages some assets in the multi-sig address. When one of the nodes needs to transfer some assets out, it needs to collect at least N signatures from others to perform the action.

MTG is the framework. Pando is a series of application designed using the framework on Mixin Network.

