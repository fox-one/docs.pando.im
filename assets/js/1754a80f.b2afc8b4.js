"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[3209],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8834:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Design",date:new Date("2021-07-31T14:38:07.000Z")},s=void 0,p={unversionedId:"lake/design",id:"lake/design",isDocsHomePage:!1,title:"Design",description:"4swap Design Document",source:"@site/developer/lake/design.md",sourceDirName:"lake",slug:"/lake/design",permalink:"/developer/lake/design",version:"current",lastUpdatedAt:1643366569,formattedLastUpdatedAt:"1/28/2022",frontMatter:{title:"Design",date:"2021-07-31T14:38:07.000Z"},sidebar:"docs",previous:{title:"List Transactions",permalink:"/developer/lake/apis/transactions"},next:{title:"Action Protocol",permalink:"/developer/lake/action-protocol"}},d=[{value:"4swap Design Document",id:"4swap-design-document",children:[]},{value:"Interact with 4swap",id:"interact-with-4swap",children:[{value:"Mixin Multisig Output",id:"mixin-multisig-output",children:[]},{value:"TransactionAction Definition",id:"transactionaction-definition",children:[]}]},{value:"Workers",id:"workers",children:[{value:"Syncer Workflow",id:"syncer-workflow",children:[]},{value:"Payee Workflow",id:"payee-workflow",children:[]},{value:"Assigner &amp; Cashier &amp; TxSender Workflow",id:"assigner--cashier--txsender-workflow",children:[]}]},{value:"Actions",id:"actions",children:[{value:"Deposit",id:"deposit",children:[]},{value:"Swap",id:"swap",children:[]},{value:"Withdraw",id:"withdraw",children:[]}]}],u={toc:d};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"4swap-design-document"},"4swap Design Document"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pando Lake is a MTG implementation on Mixin Network of Uniswap V2")),(0,i.kt)("p",null,"Pando Lake is an automated liquidity protocol powered by a constant product formula and implemented in ",(0,i.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/mainnet/mtg/overview"},"Mixin Trusted Group"),". It obviates the need for single Mixin Dapp, prioritizing decentralization, censorship resistance, and security."),(0,i.kt)("p",null,"Anyone can become a liquidity provider (LP) for a pool by depositing an equivalent value of each underlying token in return for pool tokens. These tokens track pro-rata LP shares of the total reserves, and can be redeemed for the underlying assets at any time."),(0,i.kt)("p",null,"Pairs act as automated market makers, standing ready to accept one token for the other as long as the \u201cconstant product\u201d formula is preserved. This formula, most simply expressed as ",(0,i.kt)("strong",{parentName:"p"},"x * y = k"),", states that trades must not change the product (k) of a pair\u2019s reserve balances (x and y). Because k remains unchanged from the reference frame of a trade, it is often referred to as the invariant. This formula has the desirable property that larger trades (relative to reserves) execute at exponentially worse rates than smaller ones."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A modified ",(0,i.kt)("a",{parentName:"p",href:"https://curve.fi"},"Curve")," formula used on the stablecoin pools like USDT/USDC.")),(0,i.kt)("h2",{id:"interact-with-4swap"},"Interact with 4swap"),(0,i.kt)("p",null,"All participants of 4swap complete the interaction by transferring tokens to the multisig wallet.\nNode worker ",(0,i.kt)("strong",{parentName:"p"},"Syncer")," syncs the payments as mixin multisig outputs; another worker ",(0,i.kt)("strong",{parentName:"p"},"Payee")," processes all outputs in order."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MTG Design",src:n(196).Z})),(0,i.kt)("h3",{id:"mixin-multisig-output"},"Mixin Multisig Output"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"field"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CreatedAt"),(0,i.kt)("td",{parentName:"tr",align:null},"payment time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AssetID"),(0,i.kt)("td",{parentName:"tr",align:null},"payment asset id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Amount"),(0,i.kt)("td",{parentName:"tr",align:null},"payment amount")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Memo"),(0,i.kt)("td",{parentName:"tr",align:null},"extra message")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output Memo:")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Memo")," contain the ",(0,i.kt)("strong",{parentName:"p"},"TransactionAction")," information."),(0,i.kt)("p",null,"The memo is AES-encrypted, an ed25519 public key used for compound AES key/iv will be in the first 32 bytes."),(0,i.kt)("h3",{id:"transactionaction-definition"},"TransactionAction Definition"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"field"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Action"),(0,i.kt)("td",{parentName:"tr",align:null},"swap, deposit or withdraw"),(0,i.kt)("td",{parentName:"tr",align:null},"number")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UserID"),(0,i.kt)("td",{parentName:"tr",align:null},"mixin id used for receipt"),(0,i.kt)("td",{parentName:"tr",align:null},"uuid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FollowID"),(0,i.kt)("td",{parentName:"tr",align:null},"user defined trace id for this transaction"),(0,i.kt)("td",{parentName:"tr",align:null},"uuid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("td",{parentName:"tr",align:null},"relevant parameters"),(0,i.kt)("td",{parentName:"tr",align:null},"bytes")))),(0,i.kt)("h2",{id:"workers"},"Workers"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Syncer")," sync unhanded utxo by mixin messenger api & store into WalletStore as ",(0,i.kt)("strong",{parentName:"li"},"outputs")," in created asc order."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Payee")," pull unhanded utxo from WalletStore in order and parse memo to get the action then handle it. Transfers may be created during handling."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Assigner")," select enough unspent UTXO and assign to a pending transfer."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Cashier")," pull unhandled transfers from WalletStore in order, then request & sign multisig transfer. If enough signatures collected, generate a raw transaction."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"TxSender")," commit raw transactions to Mixin Network.")),(0,i.kt)("h3",{id:"syncer-workflow"},"Syncer Workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Syncer Workflow",src:n(6042).Z})),(0,i.kt)("h3",{id:"payee-workflow"},"Payee Workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Payee Workflow",src:n(7586).Z})),(0,i.kt)("h3",{id:"assigner--cashier--txsender-workflow"},"Assigner & Cashier & TxSender Workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Assigner &amp; Cashier Workflow",src:n(778).Z})),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("h3",{id:"deposit"},"Deposit"),(0,i.kt)("p",null,"Each Pando Lake liquidity pool is a trading venue for a pair of Mixin Mainnet tokens. When a pool is created by the governance, its balances of each token are 0; in order for the pool to begin facilitating trades, someone must seed it with an initial deposit of each token. This first liquidity provider is the one who sets the initial price of the pool."),(0,i.kt)("p",null,"The number of liquidity tokens This first liquidity provider will receive would equal ",(0,i.kt)("inlineCode",{parentName:"p"},"sqrt(x*y)"),", where x and y represent the amount of each token provided. For the following providers, the number will be ",(0,i.kt)("inlineCode",{parentName:"p"},"min(x/reserve_x,y/reserve_y)*liquidity_shares"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AssetID"),(0,i.kt)("td",{parentName:"tr",align:null},"uuid"),(0,i.kt)("td",{parentName:"tr",align:null},"opposite asset id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Slippage"),(0,i.kt)("td",{parentName:"tr",align:null},"decimal"),(0,i.kt)("td",{parentName:"tr",align:null},"max slippage allowed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Expire"),(0,i.kt)("td",{parentName:"tr",align:null},"int64"),(0,i.kt)("td",{parentName:"tr",align:null},"deposit timeout in seconds")))),(0,i.kt)("h3",{id:"swap"},"Swap"),(0,i.kt)("p",null,"From the constant product formula it follows that the price of that token A is simply price_token_A = reserve_token_B / reserve_token_A. The market price only moves as the reserve ratio of the tokens in the pool changes, which happens when someone trades against it."),(0,i.kt)("p",null,"The swapping rule is the constant product formula. When either token is withdrawn, a proportional amount of the other must be deposited, in order to make the constant(",(0,i.kt)("inlineCode",{parentName:"p"},"k"),") unchange."),(0,i.kt)("p",null,"Pando Lake applies a 0.3% fee (0.04% for stablecoin pools) to trades, which is added to reserves to increases ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," actually as a payout to liquidation providers."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AssetID"),(0,i.kt)("td",{parentName:"tr",align:null},"uuid"),(0,i.kt)("td",{parentName:"tr",align:null},"target asset id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Route"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"swap routes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"minimum"),(0,i.kt)("td",{parentName:"tr",align:null},"decimal"),(0,i.kt)("td",{parentName:"tr",align:null},"minimum amount acceptable, refund otherwise")))),(0,i.kt)("h3",{id:"withdraw"},"Withdraw"),(0,i.kt)("p",null,"To retrieve the underlying liquidity, plus any fees accrued, liquidity providers must give back their liquidity tokens, effectively exchanging them for their portion of the liquidity pool, plus the proportional fee allocation."),(0,i.kt)("p",null,"The number of tokens retrieved will be ",(0,i.kt)("inlineCode",{parentName:"p"},"lp_token/liquidity_shares*reserve_x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lp_token/liquidity_shares*reserve_y"),"."))}m.isMDXComponent=!0},196:function(e,t,n){t.Z=n.p+"assets/images/mtg_design-b5a4e38168678833d0cbbe57fec681e0.png"},778:function(e,t,n){t.Z=n.p+"assets/images/pando-cashier-2407e240d3cb5adce8e34ca6c1b91cbd.png"},7586:function(e,t,n){t.Z=n.p+"assets/images/pando-payee-877afe881733d4161e818cddae2c1945.png"},6042:function(e,t,n){t.Z=n.p+"assets/images/pando-syncer-03302bf2ea6a75a6e5ac1f9b297a962f.png"}}]);