---
title: API Reference
sidebar_position: 3
date: 2021-07-31 11:18:01
---

import Tabs from "@theme/Tabs";

import TabItem from "@theme/TabItem";

## API Endpoints

| Name       | Endpoint                    |
| ---------- | --------------------------- |
| 4swap      | https://mtgswap-api.fox.one |
| Pando Lake | https://mtgswap-api.fox.one |

You can use any of them to construct your API requests in form:

```
HTTP_METHOD ${API_BASE}/${API_PATH}
```

## Entities

### Pair Entity

```json
{
  // the asset id of base and quote assets
  "base_asset_id": "c94ac88f-4671-3976-b60a-09064f1811e8",
  "quote_asset_id": "f5ef6b5d-cc5a-3d90-b2c0-a2fd386e7a3c",
  // the amount of base and quote assets
  "base_amount": "827.7243632",
  "quote_amount": "57701.51287515",
  // the liquidity of this pair
  "liquidity": "6588.04146863",
  // the asset id of LP-Token of this pair
  "liquidity_asset_id": "b34633de-4012-38e3-88a9-1f41eafdf45a",
  // the route id of this pair
  "route_id": 1,
  // fee 0.3%
  "fee_percent": "0.003",
  "max_liquidity": "100000000",
  "base_value": "301753.29",
  "quote_value": "300856.63",
  "volume_24h": "9552.48",
  "fee_24h": "28.63",
  "transaction_count_24h": 165,
  "version": 7503628,
  "base_volume_24h": "27.23252371",
  "quote_volume_24h": "1895.88436236"
}
```

### Asset Entity

```json
{
  // asset id
  "id": "159648dc-eba7-3d0e-82ea-06995bee0537",
  // displayed name, symbol and icon
  "name": "4swap LP Token BTC-wBTC",
  "symbol": "sBTC-wBTC",
  "logo": "https://mixin-images.zeromesh.net/kVAd-goGIX7OAFruP_gcT04yXomO4BfTFEyeroKPl38Ypc6KQnQZBdeVzp8VCOiDyD-4-A8Wyh_HiFztViJxjrSZezrlRl6Up5SCWw=s128",
  // asset id of chain asset
  "chain_id": "43d61dcd-e413-450d-80b8-101d5e903357",
  // chain asset entity
  "chain": {Asset Entity},
  // price in US Dollar
  "price": "84447.541565189134",
  // extra information of this assets
  "extra": {"circulation":"109542949","name":"Ethereum","explorer":"https://etherscan.io/","intro":{"en":["Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.","Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014 and officially launched the blockchain on July 30, 2015.","Ethereum’s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud."]},"website":"https://www.ethereum.org/","issue":"2014/7/24","total":"109542949"}
}
```

## Authorize

```mdx-code-block
<Tabs
  groupId="operating-systems"
  defaultValue="http"
  values={[
    {label: 'HTTP', value: 'http'},
    {label: 'cURL', value: 'curl'},
  ]
}>
<TabItem value="http">
  <pre><code>POST /api/oauth</code></pre>
</TabItem>
<TabItem value="curl">
  <pre lang="bash">
  curl --header "Content-Type: application/json" \
    --request POST \
    --data 'JSON PAYLOAD' \
    https://mtgswap-api.fox.one/api/oauth
  </pre>
</TabItem>
</Tabs>
```

Call this API instead of [Mixin Messenger's OAuth API](https://developers.mixin.one/document/bot/getting-started/oauth) to exchange the access token with code.

**Payload**

```json
{
  // the code from Mixin Messenger's OAuth
  "code": "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54",
  // leave `broker_id` and `label` to empty if you don't want to use pando Lake broker.
  "broker_id": "5dbdb169-d56d-4b5b-b066-9b0780691b14",
  "label": "lake"
}
```

**Response**

```json
{
  "ts": 1627697766645,
  "data": {
    "scope": "PROFILE:READ ASSETS:READ",
    // the OAuth token
    "token": "..."
  }
}
```

The token is compatible with [Mixin API](https://developers.mixin.one/document/wallet/overview). It's fine to use it to get information from Mixin API.

## Get Information

```mdx-code-block
<Tabs
  groupId="operating-systems"
  defaultValue="http"
  values={[
    {label: 'HTTP', value: 'http'},
    {label: 'cURL', value: 'curl'},
  ]
}>
<TabItem value="http">
  <pre><code>GET /api/info</code></pre>
</TabItem>
<TabItem value="curl">
  <pre lang="bash">
  curl --header "Content-Type: application/json" https://mtgswap-api.fox.one/api/info
  </pre>
</TabItem>
</Tabs>
```

Responds [MTG](https://developers.mixin.one/document/mainnet/mtg/overview) information about 4swap and Lake.

You can save the response to use it later because the MTG information wouldn't change frequently.

**Response**

```json
{
  "ts": 1627697766645,
  "data": {
    // user id of MTG members
    "members": [
      "a753e0eb-3010-4c4a-a7b2-a7bda4063f62",
      "099627f8-4031-42e3-a846-006ee598c56e",
      "aefbfd62-727d-4424-89db-ae41f75d2e04",
      "d68ca71f-0e2c-458a-bb9c-1d6c2eed2497",
      "e4bc0740-f8fe-418c-ae1b-32d9926f5863"
    ],
    "public_key": "dt351xp3KjNlVCMqBYUeUSF45upCEiReSZAqcjcP/Lc=",
    // multisig threshold
    "threshold": 3
  }
}
```

## List Assets

```mdx-code-block
<Tabs
  groupId="operating-systems"
  defaultValue="http"
  values={[
    {label: 'HTTP', value: 'http'},
    {label: 'cURL', value: 'curl'},
  ]
}>
<TabItem value="http">
  <pre><code>GET /api/assets</code></pre>
</TabItem>
<TabItem value="curl">
  <pre lang="bash">
  curl --header "Content-Type: application/json" https://mtgswap-api.fox.one/api/assets
  </pre>
</TabItem>
</Tabs>
```

Responds supported assets of 4swap or Lake.

**Response**

```json
{
  "ts": 1627697766503,
  "data": {
    "assets": [
      {Asset Entity},
      {Asset Entity},
      ...
    ]
  }
}
```

## List Pairs

```mdx-code-block
<Tabs
  groupId="operating-systems"
  defaultValue="http"
  values={[
    {label: 'HTTP', value: 'http'},
    {label: 'cURL', value: 'curl'},
  ]
}>
<TabItem value="http">
  <pre><code>GET /api/pairs</code></pre>
</TabItem>
<TabItem value="curl">
  <pre lang="bash">
  curl --header "Content-Type: application/json" https://mtgswap-api.fox.one/api/pairs
  </pre>
</TabItem>
</Tabs>
```

Responds all supported pairs of 4swap's pairs pool.

**Response**

```json
{
  "ts": 1627697766503,
  "data": {
    "pairs": [
      {Pair Entity},
      {Pair Entity},
      ...
    ],
    "pair_count": 75,
    "transaction_count_24h": 25134,
    "volume_24h": "5189724.64904556",
    "fee_24h": "13687.38904891",
    "ts": 1627697766503,
  }
}
```

## Read Volume and Liquidity

```mdx-code-block
<Tabs
  groupId="operating-systems"
  defaultValue="http"
  values={[
    {label: 'HTTP', value: 'http'},
    {label: 'cURL', value: 'curl'},
  ]
}>
<TabItem value="http">
  <pre><code>GET /api/stats/markets/BASE_ASSET_ID/QUOTE_ASSET_ID</code></pre>
</TabItem>
<TabItem value="curl">
  <pre lang="bash">
  curl --header "Content-Type: application/json" https://mtgswap-api.fox.one/api/stats/markets/BASE_ASSET_ID/QUOTE_ASSET_ID
  </pre>
</TabItem>
</Tabs>
```

Responds market stat information about two asset ids specified in the URL.

**Response**

```json
{
  "ts": 1627697766503,
  "data": [
    {
      "ts": 1612224000,
      "date": "2021-02-02T00:00:00Z",
      // liquidity in US dollar
      "value": "15796065.69038667",
      // volume in US dollar
      "volume": "656098.59481682"
    }
    // ...
  ]
}
```

## Read Candlestick Data

```mdx-code-block
<Tabs
  groupId="operating-systems"
  defaultValue="http"
  values={[
    {label: 'HTTP', value: 'http'},
    {label: 'cURL', value: 'curl'},
  ]
}>
<TabItem value="http">
  <pre><code>GET /api/stats/markets/BASE_ASSET_ID/QUOTE_ASSET_ID/kline/v2?dur=4320h</code></pre>
</TabItem>
<TabItem value="curl">
  <pre lang="bash">
  curl --header "Content-Type: application/json" https://mtgswap-api.fox.one/api/stats/markets/BASE_ASSET_ID/QUOTE_ASSET_ID/kline/v2?dur=4320h
  </pre>
</TabItem>
</Tabs>
```

Responds market K-line data about two asset ids specified in the URL.

**Response**

```json
{
  "ts": 1627697766503,
  "data": [
    [
      // timestamp
      1612148400,
      // price of base / quote
      "0.039304863681",
      // price of quote / base
      "25.442131511901"
    ]
    ...
  ]
}
```

## Create Action

```mdx-code-block
<Tabs
  groupId="operating-systems"
  defaultValue="http"
  values={[
    {label: 'HTTP', value: 'http'},
    {label: 'cURL', value: 'curl'},
  ]
}>
<TabItem value="http">
  <pre><code>POST /api/actions</code></pre>
</TabItem>
<TabItem value="curl">
  <pre lang="bash">
  curl --header "Content-Type: application/json" \
    --request POST \
    --data 'JSON PAYLOAD' \
    https://mtgswap-api.fox.one/api/actions
  </pre>
</TabItem>
</Tabs>
```

This is an API to generate an encrypted transfer by provided [action protocol](action-protocol) data. It's useful if you don't want to sign and encrypt the transfer yourself.

**Payload**

```json
{
  // Action protocol data
  "action": "3,dfa655ef-55db-4e18-bdd7-29a7c576a223,92779607-e478-4f66-95a6-b2ae47f69d55,c6d0c728-2624-429b-8e0d-d9d19b6592fa,e2nUv,0.0000042669",
  // amount of crypto
  "amount": "123",
  // asset id of crypto
  "asset_id": "2566bf58-c4de-3479-8c55-c137bb7fe2ae",
  // optional, broker id, leave it empty to use 4swap's default broker
  "broker_id": "",
  // optional, an UUID to trace the transfer
  "trace_id": ""
}
```

**Response**

```json
{
  "ts": 1627697766503,
  "data": {
    // the encrypted action data
    "action": "...",
    // the code and the code url.
    // they could be used to invoke Mixin Network compatible wallet, like Messenger and Fennec.
    "code": "d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "code_url": "mixin://codes/d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    // an UUID to trace the transfer
    "follow_id": "yyyyyyyy-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  }
}
```

If you are using [mixin-sdk-go](https://github.com/fox-one/mixin-sdk-go) client, use the `action` as the parameter for `client.Transaction` to create and send the transaction to the Mainnet address:

```go
// send a transaction to a multi-sign address which specified by `OpponentMultisig`
// the OpponentMultisig.Receivers are the MTG group members
tx, err := client.Transaction(ctx, &mixin.TransferInput{
	AssetID: assetID,
	Amount:  decimal.RequireFromString(amount),
	TraceID: mixin.RandomTraceID(),
  // the `action` field in the response
	Memo:    resp.Action,
  // the MTG members from `/api/information`
	OpponentMultisig: struct {
		Receivers []string `json:"receivers,omitempty"`
		Threshold uint8    `json:"threshold,omitempty"`
	}{
		Receivers: group.Members,
		Threshold: uint8(group.Threshold),
	},
}, *pin)
```

If you want to integrate a web app with Mixin Network compatible wallets, for example, [Mixin Messenger](/docs/wallets/mixin-messenger) and [Fennec](/docs/wallets/fennec), please read [Guide / Invoking Wallets](guide/invoke-wallets).
