---
title: Price Oracles 

date: 2021-08-13 12:33:07
---

The `Oracle Price` for each trading pair is used for the following:

- Ensuring that each account is well-collateralized after each trade
- Determining when an account should be liquidated

### Calculation

Oracle prices will not take effect until it is confirmed by more than 4 of the 6 nodes.

> At present, it is a 4/6 multi-signature. 
>
> If there is any adjustment, the document will be updated.

### Node Providers

| Node name  | First choice | Second choice | Third choice |
| ---------- | ------------ | ------------- | ------------ |
| Pando      | coinbase     | 4swap         |              |
| Pando Girl | binance      | ftx           | exinswap     |
| Mixin      | bitstamp     | bitfinex      | 4swap        |
| BigONE     | bittrex      | ftx           | exinswap     |
| Poolin     | okex         | 4swap         |              |
| Exin       | huobi        | ftx           |              |

> Specially,
>
> - FTX, 4swap, Exinswap is an alternative exchange for taking prices, and prices will be taken from the above three exchanges only if the other six exchanges do not read oracle prices.
> - The price taken on 4swap will not take effect until the price impact of transaction 1000 Pusd is less than 2%.
> - The price taken on Exinswap will not take effect until the price impact of the transaction 100 Pusd is less than 2%.

## Index Prices

The `Index Price` for each trading pair is used for the following:

- Calculating the funding rate
- Trigger "liquidation" and enter the auction

### Calculation

Index prices are equal to the median of several exchanges' spot prices.

Each exchange's spot price is calculated as the median of the best-ask, best-bid, and last-traded prices of its spot pair.

We will adjust the price index to Pusd through 4swap.

### Price Delay Mechanism

In order to avoid the rapid decline in currency prices in a short period of time, which will lead to insufficient settlement of collateral, the currency prices confirmed by multi-signature nodes will not be immediately applied to Panduoye, there is a 30-minute delay.

### Exchange Sources

#### BTC-PUSD

- Binance: `BTC-BUSD`
- Bitstamp: `BTC-USD`
- Bittrex: `BTC-USD`
- Bitfinex: `BTC-USD`
- CoinbasePro: `BTC-USD`
- FTX: `BTC-USD`
- OKEx: `BTC-USDC`
- Huobi: `BTC-USDC`
- Exinswap: `BTC-PUSD`
- 4swap: `BTC-PUSD`

#### ETH-PUSD

- Binance: `ETH-BUSD`
- Bitstamp: `ETH-USD`
- Bitfinex: `ETH-USD`
- Bittrex: `ETH-USD`
- Coinbase: `ETH-USD`
- FTX: `ETH-USD`
- OKEx: `ETH-USDC`
- Huobi: `ETH-USDC`
- Exinswap: `ETH-PUSD`
- 4swap: `ETH-PUSD`

#### EOS-PUSD

- Binance: `EOS-BUSD`
- Bitfinex: `EOS-USD`
- Bittrex: `EOS-USD`
- CoinbasePro: `EOS-USD`
- Huobi: `EOS-USDC`
- FTX: `EOS-USD`
- OKEx: `EOS-USDC`
- Exinswap: `EOS-PUSD`
- 4swap: `EOS-PUSD`

#### XIN-PUSD

- Exinswap: `XIN-PUSD`
- 4swap: `XIN-PUSD`

#### DOGE-PUSD

- Binance: `DOGE-BUSD`
- Bitfinex: `DOGE-USD`
- Bittrex: `DOGE-USD`
- CoinbasePro: `DOGE-USD`
- Huobi: `DOGE-USDC`
- FTX: `DOGE-USD`
- OKEx: `DOGE-USDC`
- Exinswap: `DOGE-PUSD`
- 4swap: `DOGE-PUSD`

#### BCH-PUSD

- Binance: `BCH-BUSD`
- Bitstamp: `BCH-USD`
- Bittrex: `BCH-USD`
- Coinbase: `BCH-USD`
- FTX: `BCH-USD`
- OKEx: `BCH-USDC`
- Huobi: `BCH-USDC`
- 4swap: `BCH-PUSD`

#### LTC-PUSD

- Binance: `LTC-BUSD`
- Bitstamp: `LTC-USD`
- Bitfinex: `LTC-USD`
- Bittrex: `LTC-USD`
- Coinbase: `LTC-USD`
- FTX: `LTC-USD`
- OKEx: `LTC-USDC`
- Huobi: `LTC-USDC`
- Exinswap: `LTC-PUSD`
- 4swap: `LTC-PUSD`

#### FIL-PUSD

- Binance: `FIL-BUSD`
- Bitfinex: `FIL-USD`
- Bittrex: `FIL-USD`
- CoinbasePro: `FIL-USD`
- Huobi: `FIL-USDC`
- FTX: `FIL-USD`
- OKEx: `FIL-USDC`
- Exinswap: `FIL-PUSD`
- 4swap: `FIL-PUSD`

#### ZEC-PUSD

- Binance: `ZEC-BUSD`
- Bitfinex: `ZEC-USD`
- Bittrex: `ZEC-USD`
- CoinbasePro: `ZEC-USD`
- Huobi: `ZEC-USDC`
- FTX: `ZEC-USD`
- OKEx: `ZEC-USDC`
- 4swap: `ZEC-PUSD`

#### DOT-PUSD

- Binance: `DOT-BUSD`
- Bitfinex: `DOT-USD`
- Bittrex: `DOT-USD`
- CoinbasePro: `DOT-USD`
- Huobi: `DOT-USDC`
- FTX: `DOT-USD`
- OKEx: `DOT-USDC`
- Exinswap: `DOT-PUSD`
- 4swap: `DOT-PUSD`

#### UNI-PUSD

- Binance: `UNI-BUSD`
- Bitstamp: `UNI-USD`
- Bitfinex: `UNI-USD`
- Bittrex: `UNI-USD`
- Coinbase: `UNI-USD`
- FTX: `UNI-USD`
- OKEx: `UNI-USDC`
- Huobi: `UNI-USDC`
- Exinswap: `UNI-PUSD`
- 4swap: `UNI-PUSD`

#### MOB-PUSD

- Bitfinex: `MOB-USD`
- FTX: `MOB-USD`
- Exinswap: `MOB-PUSD`
- 4swap: `MOB-PUSD`