---
title: Compare Lake and 4swap
sidebar_position: 5
date: 2021-07-31 15:44:07
---

**4swap** is an open protocol that privodes the basis of the decentrialized liquidity and swapping service based on a Mixin Trusted Group.

## 4swap

**4swap Broker** is the interface that users interact with 4swap protocol.

The default broker is the 4swap Mixin Messenger bot (id: 7000103537). If you don't specify a broker ID in the requests, all information about assets, pairs, market, orders will be responded by this broker.

You can access this broker's web interface by visiting https://4swap.org.

## Pando Lake

**Pando Lake** is a 4swap broker that hosted by Pando, which named Pando Lake.

Pando Lake filters the market information that only display the chosen pairs and markets, which have good liquidity and backed by solid communities.

Pando Lake has an individual Mixin Messenger bot (id: 7000103937), you can also access itsweb interface by visiting https://lake.pando.im.

The LP-Tokens are shared between Pando Lake and 4swap.

### Integrate with Pando Lake

The broker id of Pando Lake is `5dbdb169-d56d-4b5b-b066-9b0780691b14`, which is used in requests.

**Authorize to Lake**

When call `POST /api/oauth` to authorize the wallet, two parameters `broker_id` and `label` must be specified, in which `label` should be a string "lake".

**Other APIs**

The parameter `broker_id` should be appended to the query or payload of following API requests:

- POST /api/actions, it generate a transfer that could be sent to Pando Lake.
- GET /api/pairs, it will respond with a `whitelists` field which includes asset ids that supported by Pando Lake.


