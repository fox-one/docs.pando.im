---
title: Technical Design
sidebar_position: 2
date: 2021-03-20 12:38:07
---

Compound is an implementation of MTG and a parachain of Mixin network.

![](design/architecture.jpg)

* The user transfers a payment(UTXO) that carries business data to the Mixin network.
* Compound syncs the outputs(UTXO) by parsing the business data(in output.memo)
* Compound dispatchs the business action(included in business data) and processes each action(supply, borrow...)

![](design/workflow.jpg)

## APIs

[Rest APIs](https://github.com/fox-one/compound/blob/master/handler/rest/rest.go) exported for application layer, including:

```
/markets                // response of all markets
/markets/{asset}        // response of the market info of the specified asset
/liquidities/{address}  // response of user liquidities
/supplies               // response of supply datas
/borrows                // response of borrow datas
/transactions           // response of transactions
```

## Workers

* [cashier](https://github.com/fox-one/compound/blob/master/worker/cashier/cashier.go) Processes the pending transfers. prepare for transfering a transaction to Mixin network.
* [syncer](https://github.com/fox-one/compound/blob/master/worker/syncer/syncer.go) Syncs the outputs(UTXO) from Mixin network.
* [txsender](https://github.com/fox-one/compound/blob/master/worker/txsender/sender.go) Transfers raw transaction to Mixin network.
* [spentsync](https://github.com/fox-one/compound/blob/master/worker/spentsync/spentsync.go) syncs and updates the transfer state.
* [priceoracle](https://github.com/fox-one/compound/blob/master/worker/priceoracle/priceoracle.go) Fetches a price and put the price on the chain.
* [payee](https://github.com/fox-one/compound/blob/master/worker/snapshot/payee.go) processes outputs and dispatches business actions.

## Action processing

* [borrow](https://github.com/fox-one/compound/blob/master/worker/snapshot/borrow.go) handles the borrow action event.
* [supply](https://github.com/fox-one/compound/blob/master/worker/snapshot/supply.go) handles the supply action event.
* [pledge](https://github.com/fox-one/compound/blob/master/worker/snapshot/supply_pledge.go) handles the pledge action event.
* [unpledge](https://github.com/fox-one/compound/blob/master/worker/snapshot/supply_unpledge.go) handles the unpledge action event.
* [redeem](https://github.com/fox-one/compound/blob/master/worker/snapshot/supply_redeem.go) handles the redeem action event.
* [repay](https://github.com/fox-one/compound/blob/master/worker/snapshot/borrow_repay.go) handles the repay action event.
* [liquidation](https://github.com/fox-one/compound/blob/master/worker/snapshot/liquidation.go) handles the liquidation action event
* [proposal](https://github.com/fox-one/compound/blob/master/worker/snapshot/proposal.go) handles and dispatches the proposal actions, include: adding market, updating market, closing or opening market, adding or removing allowlist, withdraw
* [price](https://github.com/fox-one/compound/blob/master/worker/snapshot/price.go) handles the price protocal action event.


## Market Trade-Curbing Mechanism

> Close the market when the price of a certain market is abnormal.

* When the price of a market is maliciously attacked, managers have the right to execute the `close-market` order and apply for a closed-market vote. If the request is approved, the market will be closed.
* Trades are prohibited in closed markets.
* However, as long as there are closed markets, liquidation of all markets will be prohibited, because liquidation will affect the liquidity of all market accounts of users.

## The implementation of compound protocol

* [Interest rate model](../internal/compound/interest_rate_model.go) is The core implementation of compound protocol.
* [Borrow balance](../core/borrow.go) user borrow balance contains borrow principal and borrow interest. `balance = borrow.principal * market.borrow_index / borrow.interest_index`
* [Accrue interest](../service/market/market.go) Accruing interest only occurs when there is a behavior that causes changes in market transaction data, such as supply, borrow, pledge, unpledge, redeem, repay, price updating. And Only calculated once in the same block.

```go
	blockNumberPrior := market.BlockNumber

	blockNum, e := s.blockSrv.GetBlock(ctx, time)
	if e != nil {
		return e
	}

	blockDelta := blockNum - blockNumberPrior
	if blockDelta > 0 {
		borrowRate, e := s.curBorrowRatePerBlockInternal(ctx, market)
		if e != nil {
			return e
		}

		if market.BorrowIndex.LessThanOrEqual(decimal.Zero) {
			market.BorrowIndex = borrowRate
		}

		timesBorrowRate := borrowRate.Mul(decimal.NewFromInt(blockDelta))
		interestAccumulated := market.TotalBorrows.Mul(timesBorrowRate)
		totalBorrowsNew := interestAccumulated.Add(market.TotalBorrows)
		totalReservesNew := interestAccumulated.Mul(market.ReserveFactor).Add(market.Reserves)
		borrowIndexNew := market.BorrowIndex.Add(timesBorrowRate.Mul(market.BorrowIndex))

		market.BlockNumber = blockNum
		market.TotalBorrows = totalBorrowsNew.Truncate(16)
		market.Reserves = totalReservesNew.Truncate(16)
		market.BorrowIndex = borrowIndexNew.Truncate(16)
	}

```
