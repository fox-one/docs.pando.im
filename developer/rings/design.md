---
title: Technical Design

date: 2021-03-20 12:38:07
---

# Design

## Architecture

Rings is an implementation of MTG and a parachain of Mixin network.

![](design/architecture.jpg)

#### Mixin MTG struct

![](design/mixin_mtg_struct.jpg)


#### MTG system data flow
* The user transfers a payment(UTXO) that carries business data to the Mixin network.
* Rings syncs the outputs(UTXO) by parsing the business data(in output.memo)
* Rings dispatchs the business action(included in business data) and processes each action(supply, borrow...)

![](design/workflow.jpg)

In MTG system, There are two main roles, one is `Payee`, and the another is `cashier`, All business logic is implemented based on these two roles.

* `Payee` receiving the outputs(transactions), decoding the business data from `Output.Memo`, dispatching `actions`
![](design/f_payee.jpg)

* `cashier` spending the token, transfering the token to user
![](design/f_cashier.jpg)

#### Rings actions

* `Supply`, Suppose users supply the underlying token `ETH` and gain the equity token `rETH`
  ![](design/tl_supply.jpg)

* `Pledge`, Suppose users pledge the equity token `rETH`, meains that users should pay `rETH` to the Rings system
  ![](design/tl_pledge.jpg)

* `Unpledge`, Suppose users unpledge the equity token `rETH`, meains that users should pay some tokens and will get the equity token `rETH` back
  ![](design/tl_unpledge.jpg)

* `Redeem`, Suppose users redeem the underlying token `ETH` from the system, means that users should pay equity token `rETH` and whill get the quivalent underlying token `ETH` back
  ![](design/tl_redeem.jpg)

* `Borrow`, Suppose users need to borrow the underlying token `USDT`, means that users should pay some tokens and will gain the expected underlying token `USDT`
  ![](design/tl_borrow.jpg)

* `Repay`, Suppose users repay `USDT`, means that users pay `USDT` and the users' debt will be reduced
  ![](design/tl_repay.jpg)

* `quick_pledge`, Suppose users supply the underlying token `ETH` and no equity token `rETH` returns to users
  ![](design/tl_quick_pledge.jpg)
* `qick_redeem`, Suppose users redeem `ETH`, users only pay some tokens, and will get the underlying token `ETH` back
  ![](design/tl_quick_redeem.jpg)
* `quick_borrow`, Suppose users can supply `ETH` or `rETH` and can borrow `USDT` directory
  ![](design/tl_quick_borrow.jpg)
  

* `Liquidation`, Suppose User A has Pledged `ETH` and Borrowed `USDT`, once The liquidity of user A's account less than or equal zero, it can be liquidated by other users
  ![](design/tl_liquidation.jpg)

* `Proposal actions`, all governance work produces effects through proposal voting, the current proposals include these: 
    1. `market` for creating market or updating market
    2. `open-market` for opening market
    3. `close-market` for closing market
    4. `allowlist` whether to allow liquidation
    5. `add-oracle-signer` add the price oracle signer that provides market price
    6. `rm-oracle-signer` remove the price oracle signer
    7. `withdraw` withdraw the reserves from the market
   ![](design/f_proposal.jpg)

## Code struct

```

---
|-cmd      
|-config  
|-deploy  
|-docs    
|-core 
|-pkg     
|-service 
|-store   
|-worker  
|-handler    
|-Dockerfile 
|-Makefile
|-main.go 

```

* [cmd](https://github.com/fox-one/compound/tree/master/cmd) command entry, including start api server and worker and governance tools
* [config](https://github.com/fox-one/compound/tree/master/config) default config directory
* [docs](https://github.com/fox-one/compound/tree/master/docs) project documents
* [core](https://github.com/fox-one/compound/tree/master/core) directory of project's models
* [pkg](https://github.com/fox-one/compound/tree/master/pkg) project packages that can be exported
* [service](https://github.com/fox-one/compound/tree/master/service) directory of business codes
* [store](https://github.com/fox-one/compound/tree/master/store) data repository(data may be stored in database or redis or memory cache)
* [worker](https://github.com/fox-one/compound/tree/master/worker) directory for jobs that processing data in background
* [handler](https://github.com/fox-one/compound/tree/master/handler) just for exported apis
* [Dockerfile](https://github.com/fox-one/compound/tree/master/Dockerfile) for deployment
* [deploy](https://github.com/fox-one/compound/tree/master/deploy) store configs and tools of deployment
* [main.go](https://github.com/fox-one/compound/tree/master/main.go)
* [Makefile](https://github.com/fox-one/compound/tree/master/Makefile)

### [configuration template](https://github.com/fox-one/compound/tree/master/deploy/config.node.yaml.tpl)

```
# Fixed value : 1603382400 
genesis: 1603382400
# time localtion
location: Asia/Shanghai

# data base config
db:
  dialect: mysql
  host: ~
  read_host: ~
  port: 3306
  user: ~
  password: ~
  database: ~
  location: Asia%2FShanghai
  Debug: true

# mixin dapp config
dapp:
  num: 7000103159
  client_id: ~
  session_id: ~
  client_secret: ~
  pin_token: ~
  pin: ""
  private_key: ~

# nodes group config
group:
# private key shared by all nodes, that generated by the command: ./compound keys --cipher ed25519
  private_key: ~
  # The private key used by the current node for user data signing
  sign_key: ~
  # administratories of this node
  admins:
    - ~
    - ~
    - ~ 
  # Node member
  members:
    - client_id: ~
    # The public key used by the current node to verify the signature
      verify_key: ~
  threshold: 2
  vote:
    asset: 965e5c6e-434c-3fa9-b780-c50f43cd955c
    amount: 0.00000001
```

#### [Rest APIs](https://github.com/fox-one/compound/tree/master/handler/rest/rest.go) exported for application layer, including:

```
/markets/all   //response all markets
/transactions  //response compound transactions
/price-requests // for price oracle calling
```

#### Worker
* [cashier](https://github.com/fox-one/compound/tree/master/worker/cashier/cashier.go) Processes the pending transfers. prepare for transfering a transaction to Mixin network.
* [syncer](https://github.com/fox-one/compound/tree/master/worker/syncer/syncer.go) Syncs the outputs(UTXO) from Mixin network.
* [txsender](https://github.com/fox-one/compound/tree/master/worker/txsender/sender.go) Transfers raw transaction to Mixin network.
* [spentsync](https://github.com/fox-one/compound/tree/master/worker/spentsync/spentsync.go) syncs and updates the transfer state.
* [priceoracle](https://github.com/fox-one/compound/tree/master/worker/priceoracle/priceoracle.go) Fetches a price and put the price on the chain.
* [payee](https://github.com/fox-one/compound/tree/master/worker/snapshot/payee.go) processes outputs and dispatches business actions.

#### Action processing
* [borrow](https://github.com/fox-one/compound/tree/master/worker/snapshot/borrow.go) handles the borrow action event.
* [supply](https://github.com/fox-one/compound/tree/master/worker/snapshot/supply.go) handles the supply action event.
* [pledge](https://github.com/fox-one/compound/tree/master/worker/snapshot/supply_pledge.go) handles the pledge action event.
* [unpledge](https://github.com/fox-one/compound/tree/master/worker/snapshot/supply_unpledge.go) handles the unpledge action event.
* [redeem](https://github.com/fox-one/compound/tree/master/worker/snapshot/supply_redeem.go) handles the redeem action event.
* [repay](https://github.com/fox-one/compound/tree/master/worker/snapshot/borrow_repay.go) handles the repay action event.
* [liquidation](https://github.com/fox-one/compound/tree/master/worker/snapshot/liquidation.go) handles the liquidation action event
* [proposal](https://github.com/fox-one/compound/tree/master/worker/snapshot/proposal.go) handles and dispatches the proposal actions, include: adding market, updating market, closing or opening market, adding or removing allowlist, withdraw
* [price](https://github.com/fox-one/compound/tree/master/worker/snapshot/price.go) handles the price protocal action event.


### Market Trade-Curbing Mechanism

> Close the market when the price of a certain market is abnormal.

* When the price of a market is maliciously attacked, managers have the right to execute the `close-market` order and apply for a closed-market vote. If the request is approved, the market will be closed.
* Trades are prohibited in closed markets.
* However, as long as there are closed markets, liquidation of all markets will be prohibited, because liquidation will affect the liquidity of all market accounts of users.

## The implementation of compound protocol 

* [Interest rate model](https://github.com/fox-one/compound/tree/master/internal/compound/interest_rate_model.go) is The core implementation of compound protocol.

* [Borrow balance](https://github.com/fox-one/compound/tree/master/core/borrow.go) user borrow balance contains borrow principal and borrow interest. `balance = borrow.principal * market.borrow_index / borrow.interest_index`

* [Accrue interest](https://github.com/fox-one/compound/tree/master/service/market/market.go) Accruing interest only occurs when there is a behavior that causes changes in market transaction data, such as supply, borrow, pledge, unpledge, redeem, repay, price updating. And Only calculated once in the same block.

```
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