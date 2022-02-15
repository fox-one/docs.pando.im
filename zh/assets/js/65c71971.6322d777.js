"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[8854],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4699:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"\u8bbe\u8ba1",date:new Date("2021-07-31T14:38:07.000Z")},p=void 0,s={unversionedId:"lake/design",id:"lake/design",isDocsHomePage:!1,title:"\u8bbe\u8ba1",description:"4swap Design Document",source:"@site/i18n/zh/docusaurus-plugin-content-docs-developer/current/lake/design.md",sourceDirName:"lake",slug:"/lake/design",permalink:"/zh/developer/lake/design",version:"current",lastUpdatedAt:1644813256,formattedLastUpdatedAt:"2/14/2022",frontMatter:{title:"\u8bbe\u8ba1",date:"2021-07-31T14:38:07.000Z"},sidebar:"docs",previous:{title:"List Transactions",permalink:"/zh/developer/lake/apis/transactions"},next:{title:"\u64cd\u4f5c\u534f\u8bae",permalink:"/zh/developer/lake/action-protocol"}},d=[{value:"4swap Design Document",id:"4swap-design-document",children:[]},{value:"Interact with 4swap",id:"interact-with-4swap",children:[{value:"Mixin Multisig Output",id:"mixin-multisig-output",children:[]},{value:"TransactionAction Definition",id:"transactionaction-definition",children:[]}]},{value:"Workers",id:"workers",children:[{value:"Syncer Workflow",id:"syncer-workflow",children:[]},{value:"Payee Workflow",id:"payee-workflow",children:[]},{value:"Assigner &amp; Cashier &amp; TxSender Workflow",id:"assigner--cashier--txsender-workflow",children:[]}]},{value:"Actions",id:"actions",children:[{value:"Deposit",id:"deposit",children:[]},{value:"Swap",id:"swap",children:[]},{value:"Withdraw",id:"withdraw",children:[]}]}],u={toc:d};function m(t){var e=t.components,o=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"4swap-design-document"},"4swap Design Document"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pando Lake \u662f\u5728Uniswap V2 \u5728 Mixin\u7f51\u7edc\u4e0a\u7684\u5b9e\u73b0")),(0,i.kt)("p",null,"Pando Lake\u662f\u7531\u6052\u5b9a\u4ea7\u91cf\u516c\u5f0f\u9a71\u52a8\u7684\u81ea\u52a8\u5316\u6d41\u52a8\u6027\u534f\u8bae\uff0c\u90e8\u7f72\u5728",(0,i.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/mainnet/mtg/overview"},"Mixin Trusted Group"),"\u3002 \u5b83\u6d88\u9664\u4e86\u5bf9\u5355\u4e00 Mixin Dapp \u7684\u9700\u6c42\uff0c\u4f18\u5148\u8003\u8651\u53bb\u4e2d\u5fc3\u5316\u3001\u5ba1\u67e5\u963b\u529b\u548c\u5b89\u5168\u6027\u3002"),(0,i.kt)("p",null,"\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u901a\u8fc7\u5b58\u5165\u6bcf\u4e2a\u7b49\u503c\u4ef7\u503c\u7684\u57fa\u7840\u4ee3\u5e01\u6765\u6362\u53d6\u77ff\u6c60\u4ee3\u5e01\uff0c\u4ece\u800c\u6210\u4e3a\u77ff\u6c60\u7684\u6d41\u52a8\u6027\u63d0\u4f9b\u8005 (LP)\u3002 \u8fd9\u4e9b\u4ee3\u5e01\u6309\u6bd4\u4f8b\u8ddf\u8e2a\u603b\u50a8\u5907\u4e2d\u7684 LP \u4efd\u989d\uff0c\u5e76\u4e14\u53ef\u4ee5\u968f\u65f6\u8d4e\u56de\u76f8\u5173\u8d44\u4ea7\u3002"),(0,i.kt)("p",null,"\u4ea4\u6613\u5bf9\u5145\u5f53\u81ea\u52a8\u5316\u505a\u5e02\u5546\uff0c\u5e76\u5728\u4fdd\u7559\u201c\u6052\u5b9a\u4e58\u79ef\u201d\u516c\u5f0f\u7684\u524d\u63d0\u4e0b\uff0c\u968f\u65f6\u51c6\u5907\u63a5\u53d7\u4e00\u79cd\u4ee3\u5e01\u5151\u6362\u53e6\u4e00\u79cd\u4ee3\u5e01\u3002 \u8fd9\u4e2a\u516c\u5f0f\uff0c\u6700\u7b80\u5355\u7684\u8868\u793a\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"x * y = k"),"\uff0c\u89c4\u5b9a\u4ea4\u6613\u4e0d\u5f97\u6539\u53d8\u4e00\u5bf9\u51c6\u5907\u91d1\u4f59\u989d\uff08x \u548c y\uff09\u7684\u4ed6\u4eec\u7684\u4e58\u79ef (k)\u3002 \u56e0\u4e3a k \u76f8\u5bf9\u4e8e\u4ea4\u6613\u7684\u53c2\u8003\u7cfb\u4fdd\u6301\u4e0d\u53d8\uff0c\u6240\u4ee5\u5b83\u901a\u5e38\u88ab\u79f0\u4e3a\u4e0d\u53d8\u91cf\u3002 \u8fd9\u4e2a\u516c\u5f0f\u6709\u4e00\u4e2a\u7406\u60f3\u7684\u7279\u6027\uff0c\u5373\u8f83\u5927\u989d\u7684\u4ea4\u6613\uff08\u76f8\u5bf9\u4e8e\u50a8\u5907\uff09\u7684\u6267\u884c\u901f\u5ea6\u6bd4\u8f83\u5c0f\u989d\u7684\u4ea4\u6613\u8981\u5dee\u5f97\u591a\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u7528\u4e8e\u7a33\u5b9a\u5e01\u6c60\uff08\u5982 USDT/USDC\uff09\u7684\u4fee\u6539\u540e\u7684",(0,i.kt)("a",{parentName:"p",href:"https://curve.fi"},"Curve"),"\u516c\u5f0f\u3002")),(0,i.kt)("h2",{id:"interact-with-4swap"},"Interact with 4swap"),(0,i.kt)("p",null,"All participants of 4swap complete the interaction by transferring tokens to the multisig wallet. Node worker ",(0,i.kt)("strong",{parentName:"p"},"Syncer")," syncs the payments as mixin multisig outputs; another worker ",(0,i.kt)("strong",{parentName:"p"},"Payee")," processes all outputs in order."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MTG Design",src:n(3716).Z})),(0,i.kt)("h3",{id:"mixin-multisig-output"},"Mixin Multisig Output"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"field"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CreatedAt"),(0,i.kt)("td",{parentName:"tr",align:null},"payment time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AssetID"),(0,i.kt)("td",{parentName:"tr",align:null},"payment asset id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Amount"),(0,i.kt)("td",{parentName:"tr",align:null},"payment amount")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Memo"),(0,i.kt)("td",{parentName:"tr",align:null},"extra message")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output Memo:")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Memo")," contain the ",(0,i.kt)("strong",{parentName:"p"},"TransactionAction")," information."),(0,i.kt)("p",null,"The memo is AES-encrypted, an ed25519 public key used for compound AES key/iv will be in the first 32 bytes."),(0,i.kt)("h3",{id:"transactionaction-definition"},"TransactionAction Definition"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"field"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Action"),(0,i.kt)("td",{parentName:"tr",align:null},"swap, deposit or withdraw"),(0,i.kt)("td",{parentName:"tr",align:null},"number")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UserID"),(0,i.kt)("td",{parentName:"tr",align:null},"mixin id used for receipt"),(0,i.kt)("td",{parentName:"tr",align:null},"uuid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FollowID"),(0,i.kt)("td",{parentName:"tr",align:null},"user defined trace id for this transaction"),(0,i.kt)("td",{parentName:"tr",align:null},"uuid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("td",{parentName:"tr",align:null},"relevant parameters"),(0,i.kt)("td",{parentName:"tr",align:null},"bytes")))),(0,i.kt)("h2",{id:"workers"},"Workers"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Syncer")," sync unhanded utxo by mixin messenger api & store into WalletStore as ",(0,i.kt)("strong",{parentName:"li"},"outputs")," in created asc order."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Payee")," pull unhanded utxo from WalletStore in order and parse memo to get the action then handle it. Transfers may be created during handling."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Assigner")," select enough unspent UTXO and assign to a pending transfer."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Cashier")," pull unhandled transfers from WalletStore in order, then request & sign multisig transfer. If enough signatures collected, generate a raw transaction."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"TxSender")," commit raw transactions to Mixin Network.")),(0,i.kt)("h3",{id:"syncer-workflow"},"Syncer Workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Syncer Workflow",src:n(9436).Z})),(0,i.kt)("h3",{id:"payee-workflow"},"Payee Workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Payee Workflow",src:n(663).Z})),(0,i.kt)("h3",{id:"assigner--cashier--txsender-workflow"},"Assigner & Cashier & TxSender Workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Assigner &amp; Cashier Workflow",src:n(4935).Z})),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("h3",{id:"deposit"},"Deposit"),(0,i.kt)("p",null,"Each Pando Lake liquidity pool is a trading venue for a pair of Mixin Mainnet tokens. When a pool is created by the governance, its balances of each token are 0; in order for the pool to begin facilitating trades, someone must seed it with an initial deposit of each token. This first liquidity provider is the one who sets the initial price of the pool."),(0,i.kt)("p",null,"The number of liquidity tokens This first liquidity provider will receive would equal ",(0,i.kt)("inlineCode",{parentName:"p"},"sqrt(x*y)"),", where x and y represent the amount of each token provided. For the following providers, the number will be ",(0,i.kt)("inlineCode",{parentName:"p"},"min(x/reserve_x,y/reserve_y)*liquidity_shares"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AssetID"),(0,i.kt)("td",{parentName:"tr",align:null},"uuid"),(0,i.kt)("td",{parentName:"tr",align:null},"opposite asset id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Slippage"),(0,i.kt)("td",{parentName:"tr",align:null},"decimal"),(0,i.kt)("td",{parentName:"tr",align:null},"max slippage allowed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Expire"),(0,i.kt)("td",{parentName:"tr",align:null},"int64"),(0,i.kt)("td",{parentName:"tr",align:null},"deposit timeout in seconds")))),(0,i.kt)("h3",{id:"swap"},"Swap"),(0,i.kt)("p",null,"From the constant product formula it follows that the price of that token A is simply price_token_A = reserve_token_B / reserve_token_A. The market price only moves as the reserve ratio of the tokens in the pool changes, which happens when someone trades against it."),(0,i.kt)("p",null,"The swapping rule is the constant product formula. When either token is withdrawn, a proportional amount of the other must be deposited, in order to make the constant(",(0,i.kt)("inlineCode",{parentName:"p"},"k"),") unchange."),(0,i.kt)("p",null,"Pando Lake applies a 0.3% fee (0.04% for stablecoin pools) to trades, which is added to reserves to increases ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," actually as a payout to liquidation providers."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AssetID"),(0,i.kt)("td",{parentName:"tr",align:null},"uuid"),(0,i.kt)("td",{parentName:"tr",align:null},"target asset id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Route"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"swap routes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"minimum"),(0,i.kt)("td",{parentName:"tr",align:null},"decimal"),(0,i.kt)("td",{parentName:"tr",align:null},"minimum amount acceptable, refund otherwise")))),(0,i.kt)("h3",{id:"withdraw"},"Withdraw"),(0,i.kt)("p",null,"To retrieve the underlying liquidity, plus any fees accrued, liquidity providers must give back their liquidity tokens, effectively exchanging them for their portion of the liquidity pool, plus the proportional fee allocation."),(0,i.kt)("p",null,"The number of tokens retrieved will be ",(0,i.kt)("inlineCode",{parentName:"p"},"lp_token/liquidity_shares*reserve_x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lp_token/liquidity_shares*reserve_y"),"."))}m.isMDXComponent=!0},3716:function(t,e,n){e.Z=n.p+"assets/images/mtg_design-b5a4e38168678833d0cbbe57fec681e0.png"},4935:function(t,e,n){e.Z=n.p+"assets/images/pando-cashier-2407e240d3cb5adce8e34ca6c1b91cbd.png"},663:function(t,e,n){e.Z=n.p+"assets/images/pando-payee-877afe881733d4161e818cddae2c1945.png"},9436:function(t,e,n){e.Z=n.p+"assets/images/pando-syncer-03302bf2ea6a75a6e5ac1f9b297a962f.png"}}]);