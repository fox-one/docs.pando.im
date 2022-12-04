---
title: 价格预言机
date: 2021-08-13 12:33:07
---

每个交易对的 `Oracle Price` 被用于以下方面。

- 确保每个账户在每次交易后都有充足的抵押
- 确定何时账户会被清算

### 计算

预言价格在得到6个节点中4个以上的确认后才会生效。

> 目前，这是一个4/6的多重签名。 
> 
> 如果有任何调整，文件会被更新。

### 节点提供方

| 节点名称       | 第一选择     | 第二选择     | 第三选择     |
| ---------- | -------- | -------- | -------- |
| Pando      | coinbase | 4swap    |          |
| Pando Girl | binance  | ftx      | exinswap |
| Mixin      | bitstamp | bitfinex | 4swap    |
| BigONE     | bittrex  | ftx      | exinswap |
| Poolin     | okex     | 4swap    |          |
| Exin       | huobi    | ftx      |          |

> 特别的是，
> 
> - FTX、4swap、Exinswap是取价的替代性交易所，只有在其他六个交易所不读取预言价格的情况下，才会从上述三个交易所取价。
> - 在4swap上取的价不会生效，直到交易1000 Pusd时的价格影响低于2%。
> - 在Exinswap上取的价不会生效，直到交易100 Pusd时的价格影响低于2%。

## 指数价格

每个交易对的 `指数价格` 用于以下方面:

- 计算筹资率
- 触发 "清算"，并进入拍卖环节

### 计算

指数价格等于几个交易所现货价格中位数。

每个交易所的现货价格是以其现货交易对的最佳卖价、最佳买价和最后交易价格的中位数计算。

我们会通过4swap将价格指数调整为Pusd计价。

### 价格延迟机制

为了避免币价在短时间内迅速下跌，导致抵押物不足，多签节点确认的币价不会立即应用于Panduoye，有30分钟的延迟。

### 交易所来源

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
- CoinbasePro: `DOT-USD`
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
