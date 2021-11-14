---
title: Compare Lake and 4swap
date: 2021-07-31 15:44:07
---

**4swap** is an open protocol that provides the basis of the decentralized liquidity and swapping service with a Mixin Trusted Group.

## 4swap

**4swap Broker** is the interface that users interact with 4swap protocol.

The default broker is the 4swap Mixin Messenger bot (id: 7000103537). If you don't specify a broker ID in the requests, all information about assets, pairs, market, orders will be responded by this broker.

You can access this broker's web interface by visiting https://4swap.org.

## Pando Lake

**Pando Lake** is a 4swap broker that is hosted by Pando.

Pando Lake filters the market information to only display the chosen pairs and markets that have good liquidity and are backed by solid communities.

Pando Lake has an individual Mixin Messenger bot (id: 7000103937), you can also access its web interface by visiting https://lake.pando.im.

LPトークンは、Pando Lakeと4swapの間で共有されます。

### Pando Lakeと統合

The broker id of Pando Lake is `5dbdb169-d56d-4b5b-b066-9b0780691b14`, which is used in requests.

**Authorize to Lake**

When call `POST /api/oauth` to authorize the wallet, two parameters `broker_id` and `label` must be specified, in which `label` should be a string "lake".

**Other APIs**

The parameter `broker_id` should be appended to the query or payload of following API requests:

- POST /api/actions, it generates a transfer that could be sent to Pando Lake.
- GET /api/pairs, it will respond with a `whitelists` field which includes asset ids that are supported by Pando Lake.


