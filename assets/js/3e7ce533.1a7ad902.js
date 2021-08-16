"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[6063],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9167:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={title:"Technical Design",sidebar_position:2,date:new Date("2021-03-20T12:38:07.000Z")},s="Design",l={unversionedId:"rings/design",id:"rings/design",isDocsHomePage:!1,title:"Technical Design",description:"Architecture",source:"@site/developer/rings/design.md",sourceDirName:"rings",slug:"/rings/design",permalink:"/developer/rings/design",version:"current",lastUpdatedAt:1628761665,formattedLastUpdatedAt:"8/12/2021",sidebarPosition:2,frontMatter:{title:"Technical Design",sidebar_position:2,date:"2021-03-20T12:38:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/developer/rings/overview"},next:{title:"SDK",permalink:"/developer/resources/sdk"}},c=[{value:"Architecture",id:"architecture",children:[]},{value:"Code struct",id:"code-struct",children:[{value:"configuration template",id:"configuration-template",children:[]},{value:"Market Trade-Curbing Mechanism",id:"market-trade-curbing-mechanism",children:[]}]},{value:"The implementation of compound protocol",id:"the-implementation-of-compound-protocol",children:[]}],m={toc:c};function u(e){var t=e.components,p=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design"},"Design"),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"Rings is an implementation of MTG and a parachain of Mixin network."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4712).Z})),(0,o.kt)("h4",{id:"mixin-mtg-struct"},"Mixin MTG struct"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(201).Z})),(0,o.kt)("h4",{id:"mtg-system-data-flow"},"MTG system data flow"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The user transfers a payment(UTXO) that carries business data to the Mixin network."),(0,o.kt)("li",{parentName:"ul"},"Rings syncs the outputs(UTXO) by parsing the business data(in output.memo)"),(0,o.kt)("li",{parentName:"ul"},"Rings dispatchs the business action(included in business data) and processes each action(supply, borrow...)")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5640).Z})),(0,o.kt)("p",null,"In MTG system, There are two main roles, one is ",(0,o.kt)("inlineCode",{parentName:"p"},"Payee"),", and the another is ",(0,o.kt)("inlineCode",{parentName:"p"},"cashier"),", All business logic is implemented based on these two roles."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Payee")," receiving the outputs(transactions), decoding the business data from ",(0,o.kt)("inlineCode",{parentName:"p"},"Output.Memo"),", dispatching ",(0,o.kt)("inlineCode",{parentName:"p"},"actions"),"\n",(0,o.kt)("img",{src:n(3484).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"cashier")," spending the token, transfering the token to user\n",(0,o.kt)("img",{src:n(9744).Z})))),(0,o.kt)("h4",{id:"rings-actions"},"Rings actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Supply"),", Suppose users supply the underlying token ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH")," and gain the equity token ",(0,o.kt)("inlineCode",{parentName:"p"},"rETH"),"\n",(0,o.kt)("img",{src:n(1561).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Pledge"),", Suppose users pledge the equity token ",(0,o.kt)("inlineCode",{parentName:"p"},"rETH"),", meains that users should pay ",(0,o.kt)("inlineCode",{parentName:"p"},"rETH")," to the Rings system\n",(0,o.kt)("img",{src:n(8418).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Unpledge"),", Suppose users unpledge the equity token ",(0,o.kt)("inlineCode",{parentName:"p"},"rETH"),", meains that users should pay some gas ",(0,o.kt)("inlineCode",{parentName:"p"},"CNB")," and will get the equity token ",(0,o.kt)("inlineCode",{parentName:"p"},"rETH")," back\n",(0,o.kt)("img",{src:n(7869).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Redeem"),", Suppose users redeem the underlying token ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH")," from the system, means that users should pay equity token ",(0,o.kt)("inlineCode",{parentName:"p"},"rETH")," and whill get the quivalent underlying token ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH")," back\n",(0,o.kt)("img",{src:n(2770).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Borrow"),", Suppose users need to borrow the underlying token ",(0,o.kt)("inlineCode",{parentName:"p"},"USDT"),", means that users should pay some gas ",(0,o.kt)("inlineCode",{parentName:"p"},"CNB")," and will gain the expected underlying token ",(0,o.kt)("inlineCode",{parentName:"p"},"USDT"),"\n",(0,o.kt)("img",{src:n(8466).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Repay"),", Suppose users repay ",(0,o.kt)("inlineCode",{parentName:"p"},"USDT"),", means that users pay ",(0,o.kt)("inlineCode",{parentName:"p"},"USDT")," and the users' debt will be reduced\n",(0,o.kt)("img",{src:n(8695).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"quick_pledge"),", Suppose users supply the underlying token ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH")," and no equity token ",(0,o.kt)("inlineCode",{parentName:"p"},"rETH")," returns to users\n",(0,o.kt)("img",{src:n(7741).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"qick_redeem"),", Suppose users redeem ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH"),", users only pay some gas ",(0,o.kt)("inlineCode",{parentName:"p"},"CNB"),", and will get the underlying token ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH")," back\n",(0,o.kt)("img",{src:n(50).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"quick_borrow"),", Suppose users can supply ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"rETH")," and can borrow ",(0,o.kt)("inlineCode",{parentName:"p"},"USDT")," directory\n",(0,o.kt)("img",{src:n(2165).Z})))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Liquidation"),", Suppose User A has Pledged ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH")," and Borrowed ",(0,o.kt)("inlineCode",{parentName:"p"},"USDT"),", once The liquidity of user A's account less than or equal zero, it can be liquidated by other users\n",(0,o.kt)("img",{src:n(6890).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Proposal actions"),", all governance work produces effects through proposal voting, the current proposals include these: "),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"market")," for creating market or updating market"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"open-market")," for opening market"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"close-market")," for closing market"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"allowlist")," whether to allow liquidation"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"add-oracle-signer")," add the price oracle signer that provides market price"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"rm-oracle-signer")," remove the price oracle signer"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"withdraw")," withdraw the reserves from the market\n",(0,o.kt)("img",{src:n(5105).Z}))))),(0,o.kt)("h2",{id:"code-struct"},"Code struct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n---\n|-cmd      \n|-config  \n|-deploy  \n|-docs    \n|-core \n|-pkg     \n|-service \n|-store   \n|-worker  \n|-handler    \n|-Dockerfile \n|-Makefile\n|-main.go \n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/cmd"},"cmd")," command entry, including start api server and worker and governance tools"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/config"},"config")," default config directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/docs"},"docs")," project documents"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/core"},"core")," directory of project's models"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/pkg"},"pkg")," project packages that can be exported"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/service"},"service")," directory of business codes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/store"},"store")," data repository(data may be stored in database or redis or memory cache)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker"},"worker")," directory for jobs that processing data in background"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/handler"},"handler")," just for exported apis"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/Dockerfile"},"Dockerfile")," for deployment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/deploy"},"deploy")," store configs and tools of deployment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/main.go"},"main.go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/Makefile"},"Makefile"))),(0,o.kt)("h3",{id:"configuration-template"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/fox-one/compound/tree/master/deploy/config.node.yaml.tpl"},"configuration template")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Fixed value : 1603382400 \ngenesis: 1603382400\n# time localtion\nlocation: Asia/Shanghai\n\n# data base config\ndb:\n  dialect: mysql\n  host: ~\n  read_host: ~\n  port: 3306\n  user: ~\n  password: ~\n  database: ~\n  location: Asia%2FShanghai\n  Debug: true\n\n# mixin dapp config\ndapp:\n  num: 7000103159\n  client_id: ~\n  session_id: ~\n  client_secret: ~\n  pin_token: ~\n  pin: ""\n  private_key: ~\n\n# nodes group config\ngroup:\n# private key shared by all nodes, that generated by the command: ./compound keys --cipher ed25519\n  private_key: ~\n  # The private key used by the current node for user data signing\n  sign_key: ~\n  # administratories of thie node\n  admins:\n    - ~\n    - ~\n    - ~ \n  # Node member\n  members:\n    - client_id: ~\n    # The public key used by the current node to verify the signature\n      verify_key: ~\n  threshold: 2\n  vote:\n    asset: 965e5c6e-434c-3fa9-b780-c50f43cd955c\n    amount: 0.00000001\n')),(0,o.kt)("h4",{id:"rest-apis-exported-for-application-layer-including"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/fox-one/compound/tree/master/handler/rest/rest.go"},"Rest APIs")," exported for application layer, including:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/markets/all   //response all markets\n/transactions  //response compound transactions\n/price-requests // for price oracle calling\n")),(0,o.kt)("h4",{id:"worker"},"Worker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/cashier/cashier.go"},"cashier")," Processes the pending transfers. prepare for transfering a transaction to Mixin network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/syncer/syncer.go"},"syncer")," Syncs the outputs(UTXO) from Mixin network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/txsender/sender.go"},"txsender")," Transfers raw transaction to Mixin network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/spentsync/spentsync.go"},"spentsync")," syncs and updates the transfer state."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/priceoracle/priceoracle.go"},"priceoracle")," Fetches a price and put the price on the chain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/snapshot/payee.go"},"payee")," processes outputs and dispatches business actions.")),(0,o.kt)("h4",{id:"action-processing"},"Action processing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/snapshot/borrow.go"},"borrow")," handles the borrow action event."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/snapshot/supply.go"},"supply")," handles the supply action event."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/snapshot/supply_pledge.go"},"pledge")," handles the pledge action event."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/snapshot/supply_unpledge.go"},"unpledge")," handles the unpledge action event."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/snapshot/supply_redeem.go"},"redeem")," handles the redeem action event."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/snapshot/borrow_repay.go"},"repay")," handles the repay action event."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/snapshot/liquidation.go"},"liquidation")," handles the liquidation action event"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/snapshot/proposal.go"},"proposal")," handles and dispatches the proposal actions, include: adding market, updating market, closing or opening market, adding or removing allowlist, withdraw"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fox-one/compound/tree/master/worker/snapshot/price.go"},"price")," handles the price protocal action event.")),(0,o.kt)("h3",{id:"market-trade-curbing-mechanism"},"Market Trade-Curbing Mechanism"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Close the market when the price of a certain market is abnormal.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When the price of a market is maliciously attacked, managers have the right to execute the ",(0,o.kt)("inlineCode",{parentName:"li"},"close-market")," order and apply for a closed-market vote. If the request is approved, the market will be closed."),(0,o.kt)("li",{parentName:"ul"},"Trades are prohibited in closed markets."),(0,o.kt)("li",{parentName:"ul"},"However, as long as there are closed markets, liquidation of all markets will be prohibited, because liquidation will affect the liquidity of all market accounts of users.")),(0,o.kt)("h2",{id:"the-implementation-of-compound-protocol"},"The implementation of compound protocol"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fox-one/compound/tree/master/internal/compound/interest_rate_model.go"},"Interest rate model")," is The core implementation of compound protocol.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fox-one/compound/tree/master/core/borrow.go"},"Borrow balance")," user borrow balance contains borrow principal and borrow interest. ",(0,o.kt)("inlineCode",{parentName:"p"},"balance = borrow.principal * market.borrow_index / borrow.interest_index"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fox-one/compound/tree/master/service/market/market.go"},"Accrue interest")," Accruing interest only occurs when there is a behavior that causes changes in market transaction data, such as supply, borrow, pledge, unpledge, redeem, repay, price updating. And Only calculated once in the same block."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    blockNumberPrior := market.BlockNumber\n\n    blockNum, e := s.blockSrv.GetBlock(ctx, time)\n    if e != nil {\n        return e\n    }\n\n    blockDelta := blockNum - blockNumberPrior\n    if blockDelta > 0 {\n        borrowRate, e := s.curBorrowRatePerBlockInternal(ctx, market)\n        if e != nil {\n            return e\n        }\n\n        if market.BorrowIndex.LessThanOrEqual(decimal.Zero) {\n            market.BorrowIndex = borrowRate\n        }\n\n        timesBorrowRate := borrowRate.Mul(decimal.NewFromInt(blockDelta))\n        interestAccumulated := market.TotalBorrows.Mul(timesBorrowRate)\n        totalBorrowsNew := interestAccumulated.Add(market.TotalBorrows)\n        totalReservesNew := interestAccumulated.Mul(market.ReserveFactor).Add(market.Reserves)\n        borrowIndexNew := market.BorrowIndex.Add(timesBorrowRate.Mul(market.BorrowIndex))\n\n        market.BlockNumber = blockNum\n        market.TotalBorrows = totalBorrowsNew.Truncate(16)\n        market.Reserves = totalReservesNew.Truncate(16)\n        market.BorrowIndex = borrowIndexNew.Truncate(16)\n    }\n\n")))}u.isMDXComponent=!0},4712:function(e,t,n){t.Z=n.p+"assets/images/architecture-88d129bf61876553bcfc4c85988c0073.jpg"},9744:function(e,t,n){t.Z=n.p+"assets/images/f_cashier-1c013255ecb7ac0e75bcf47d9a152988.jpg"},3484:function(e,t,n){t.Z=n.p+"assets/images/f_payee-0748049317ecf2b34686e2d25e127c56.jpg"},5105:function(e,t,n){t.Z=n.p+"assets/images/f_proposal-6996eabc125c8d69586b09f1e3207b8e.jpg"},201:function(e,t,n){t.Z=n.p+"assets/images/mixin_mtg_struct-7844ca4970459c25090f0d0348ef94a9.jpg"},8466:function(e,t,n){t.Z=n.p+"assets/images/tl_borrow-1b2c2e9f3955f1a82fd4c989a4c52655.jpg"},6890:function(e,t,n){t.Z=n.p+"assets/images/tl_liquidation-ee671a843b7cb1c98cbb1ae00c22f44b.jpg"},8418:function(e,t,n){t.Z=n.p+"assets/images/tl_pledge-e3869d621d50563cb20a457adb37f8d8.jpg"},2165:function(e,t,n){t.Z=n.p+"assets/images/tl_quick_borrow-96b1278df1d26c21067cec5c598f7b9e.jpg"},7741:function(e,t,n){t.Z=n.p+"assets/images/tl_quick_pledge-48343470a8258df535a01df78debed23.jpg"},50:function(e,t,n){t.Z=n.p+"assets/images/tl_quick_redeem-b19f65d0b9134e8e4999bc3074bfbd54.jpg"},2770:function(e,t,n){t.Z=n.p+"assets/images/tl_redeem-0c36f6ca33716c1f5943ea29ef0cdacc.jpg"},8695:function(e,t,n){t.Z=n.p+"assets/images/tl_repay-51ddcd8988be563c42ddb698622f3921.jpg"},1561:function(e,t,n){t.Z=n.p+"assets/images/tl_supply-097b56462cb6c547754f71d221029725.jpg"},7869:function(e,t,n){t.Z=n.p+"assets/images/tl_unpledge-b0a74dc5cafdc08f6a21a1effcd46ee1.jpg"},5640:function(e,t,n){t.Z=n.p+"assets/images/workflow-3f127a082cd5a3030903a19d2fc2dc55.jpg"}}]);