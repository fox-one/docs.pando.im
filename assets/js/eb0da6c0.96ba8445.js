"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[2275],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),k=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=k(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=k(a),s=l,g=u["".concat(o,".").concat(s)]||u[s]||m[s]||r;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:l,i[1]=p;for(var k=2;k<r;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},64:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var n=a(7462),l=(a(7294),a(3905));const r={title:"Technical Design",date:new Date("2021-07-12T23:33:07.000Z")},i="Pando Leaf Design Document",p={unversionedId:"leaf/design",id:"leaf/design",title:"Technical Design",description:"Interact with Pando",source:"@site/developer/leaf/design.md",sourceDirName:"leaf",slug:"/leaf/design",permalink:"/developer/leaf/design",draft:!1,tags:[],version:"current",frontMatter:{title:"Technical Design",date:"2021-07-12T23:33:07.000Z"},sidebar:"docs",previous:{title:"Overview",permalink:"/developer/leaf/overview"},next:{title:"Leaf API Overview",permalink:"/developer/leaf/apis/overview"}},o={},k=[{value:"Interact with Pando",id:"interact-with-pando",level:2},{value:"Mixin Multisig Output",id:"mixin-multisig-output",level:3},{value:"TransactionAction Definition",id:"transactionaction-definition",level:3},{value:"Workers",id:"workers",level:2},{value:"Syncer Workflow",id:"syncer-workflow",level:3},{value:"Payee Workflow",id:"payee-workflow",level:3},{value:"Assigner &amp; Cashier &amp; TxSender Workflow",id:"assigner--cashier--txsender-workflow",level:3},{value:"Actions",id:"actions",level:2},{value:"Sys - system operations",id:"sys---system-operations",level:3},{value:"#1 Withdraw",id:"1-withdraw",level:4},{value:"Proposal - governance system",id:"proposal---governance-system",level:3},{value:"#11 Make",id:"11-make",level:4},{value:"#12 Shout",id:"12-shout",level:4},{value:"#13 Vote",id:"13-vote",level:4},{value:"Cat - manager collaterals",id:"cat---manager-collaterals",level:3},{value:"#21 Create",id:"21-create",level:4},{value:"#22 Supply",id:"22-supply",level:4},{value:"#23 Edit",id:"23-edit",level:4},{value:"#24 Fold",id:"24-fold",level:4},{value:"Vat - manager vaults",id:"vat---manager-vaults",level:3},{value:"#31 Open",id:"31-open",level:4},{value:"#32 Deposit",id:"32-deposit",level:4},{value:"#33 Withdraw",id:"33-withdraw",level:4},{value:"#34 Payback",id:"34-payback",level:4},{value:"#35 Generate",id:"35-generate",level:4},{value:"Flip - manager auctions",id:"flip---manager-auctions",level:3},{value:"#41 Kick",id:"41-kick",level:4},{value:"#42 Bid",id:"42-bid",level:4},{value:"#43 Deal",id:"43-deal",level:4},{value:"Oracle - manager price oracle",id:"oracle---manager-price-oracle",level:3},{value:"#51 Create",id:"51-create",level:4},{value:"#52 Edit",id:"52-edit",level:4},{value:"#53 Poke",id:"53-poke",level:4},{value:"#54 Rely",id:"54-rely",level:4},{value:"#55 Deny",id:"55-deny",level:4}],d={toc:k};function u(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pando-leaf-design-document"},"Pando Leaf Design Document"),(0,l.kt)("h2",{id:"interact-with-pando"},"Interact with Pando"),(0,l.kt)("p",null,"All participants of Pando complete the interaction by transferring tokens to the multisig wallet.\nNode worker ",(0,l.kt)("strong",{parentName:"p"},"Syncer")," syncs the payments as mixin multisig outputs; another worker ",(0,l.kt)("strong",{parentName:"p"},"Payee")," processes all outputs in order."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Pando Design",src:a(5425).Z,width:"1049",height:"991"})),(0,l.kt)("h3",{id:"mixin-multisig-output"},"Mixin Multisig Output"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sender"),(0,l.kt)("td",{parentName:"tr",align:null},"user mixin id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CreatedAt"),(0,l.kt)("td",{parentName:"tr",align:null},"payment time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AssetID"),(0,l.kt)("td",{parentName:"tr",align:null},"payment asset id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amount"),(0,l.kt)("td",{parentName:"tr",align:null},"payment amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Memo"),(0,l.kt)("td",{parentName:"tr",align:null},"extra message")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output Memo:")),(0,l.kt)("p",null,"Memo contain the ",(0,l.kt)("strong",{parentName:"p"},"TransactionAction")," information, see details in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/fox-one/pando/blob/main/core/action.go"},"DecodeTransactionAction"),"."),(0,l.kt)("p",null,"The memo is maybe AES-encrypted, an ed25519 public key used for compound AES key/iv will be in the first 32 bytes."),(0,l.kt)("h3",{id:"transactionaction-definition"},"TransactionAction Definition"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FollowID"),(0,l.kt)("td",{parentName:"tr",align:null},"user defined trace id for this transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Body"),(0,l.kt)("td",{parentName:"tr",align:null},"action type & relevant parameters"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes")))),(0,l.kt)("h2",{id:"workers"},"Workers"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Syncer")," sync unhanded utxo by mixin messenger api & store into WalletStore as ",(0,l.kt)("strong",{parentName:"li"},"outputs")," in updated asc order."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Payee")," pull unhanded utxo from WalletStore in order and parse memo to get the action then handle it. Transfers may be created during handling."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Assigner")," select enough unspent UTXO and assign to a pending transfer."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Cashier")," pull unhandled transfers from WalletStore in order, then request & sign multisig transfer. If enough signatures collected, generate a raw transaction."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"TxSender")," commit raw transactions to Mixin Network.")),(0,l.kt)("h3",{id:"syncer-workflow"},"Syncer Workflow"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Syncer Workflow",src:a(4813).Z,width:"991",height:"911"})),(0,l.kt)("h3",{id:"payee-workflow"},"Payee Workflow"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Payee Workflow",src:a(1962).Z,width:"1185",height:"911"})),(0,l.kt)("h3",{id:"assigner--cashier--txsender-workflow"},"Assigner & Cashier & TxSender Workflow"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Assigner &amp; Cashier Workflow",src:a(8455).Z,width:"1582",height:"911"})),(0,l.kt)("h2",{id:"actions"},"Actions"),(0,l.kt)("p",null,"All actions supported by Pando with groups cat,flip,oracle,proposal,sys and vat. see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/fox-one/pando/blob/main/core/action.go"},"core/action")," for details."),(0,l.kt)("h3",{id:"sys---system-operations"},"Sys - system operations"),(0,l.kt)("h4",{id:"1-withdraw"},"#1 Withdraw"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/sys/withdraw.go")),(0,l.kt)("p",null,"withdraw any assets from the multisig wallet, proposal required."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"asset"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"withdraw asset id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"withdraw amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"opponent"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"receiver's mixin id")))),(0,l.kt)("h3",{id:"proposal---governance-system"},"Proposal - governance system"),(0,l.kt)("h4",{id:"11-make"},"#11 Make"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/proposal/make.go")),(0,l.kt)("p",null,"create a new proposal"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"action type & parameters will be executed if passed")))),(0,l.kt)("h4",{id:"12-shout"},"#12 Shout"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/proposal/shout.go")),(0,l.kt)("p",null,"request node administrator to vote for this proposal"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"proposal trace id")))),(0,l.kt)("h4",{id:"13-vote"},"#13 Vote"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/proposal/vote.go")),(0,l.kt)("p",null,"vote for a proposal, nodes only. If enough votes collected, the attached action will be executed on all nodes automatically."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"proposal trace id")))),(0,l.kt)("h3",{id:"cat---manager-collaterals"},"Cat - manager collaterals"),(0,l.kt)("h4",{id:"21-create"},"#21 Create"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/cat/create.go")),(0,l.kt)("p",null,"create a new collateral type, proposal required."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gem"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"collateral asset id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dai"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"debt asset id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"collateral type name")))),(0,l.kt)("h4",{id:"22-supply"},"#22 Supply"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/cat/supply.go")),(0,l.kt)("p",null,"supply dai token to increase the total debt ceiling for this collateral type.\nPayment asset id must be equal to the debt asset id."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"collateral trace id")))),(0,l.kt)("h4",{id:"23-edit"},"#23 Edit"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/cat/edit.go")),(0,l.kt)("p",null,"modify collateral's one or more attributes, proposal required."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"collateral trace id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"attribute name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"attributes value")))),(0,l.kt)("h4",{id:"24-fold"},"#24 Fold"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/cat/fold.go")),(0,l.kt)("p",null,"modify the debt multiplier(rate), creating / destroying corresponding debt."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"collateral trace id")))),(0,l.kt)("h3",{id:"vat---manager-vaults"},"Vat - manager vaults"),(0,l.kt)("h4",{id:"31-open"},"#31 Open"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/vat/open.go")),(0,l.kt)("p",null,"open a new vault with the special collateral type"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"collateral trace id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debt"),(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"initial debt")))),(0,l.kt)("h4",{id:"32-deposit"},"#32 Deposit"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/vat/deposit.go")),(0,l.kt)("p",null,"transfer collateral into a Vault."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"vault trace id")))),(0,l.kt)("h4",{id:"33-withdraw"},"#33 Withdraw"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/vat/withdraw.go")),(0,l.kt)("p",null,"withdraw collateral from a Vault, vault owner only."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"vault trace id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dink"),(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"change in collateral")))),(0,l.kt)("h4",{id:"34-payback"},"#34 Payback"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/vat/payback.go")),(0,l.kt)("p",null,"decrease Vault debt."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"vault trace id")))),(0,l.kt)("h4",{id:"35-generate"},"#35 Generate"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/vat/generate.go")),(0,l.kt)("p",null,"increase Vault debt, vault owner only."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"vault trace id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debt"),(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"change in debt")))),(0,l.kt)("h3",{id:"flip---manager-auctions"},"Flip - manager auctions"),(0,l.kt)("h4",{id:"41-kick"},"#41 Kick"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/flip/kick.go")),(0,l.kt)("p",null,"put collateral up for auction from an unsafe vault."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"vault trace id")))),(0,l.kt)("h4",{id:"42-bid"},"#42 Bid"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/flip/bid.go")),(0,l.kt)("p",null,"pay dai to participate in the auction."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Starting in the tend-phase, bidders compete for a fixed lot amount of Gem with increasing bid amounts of Dai. Once tab amount of Dai has been raised, the auction moves to the dent-phase. The point of the tend phase is to raise Dai to cover the system's debt.\nDuring the dent-phase bidders compete for decreasing lot amounts of Gem for the fixed tab amount of Dai. Forfeited Gem is returned to the liquidated vault for the owner to retrieve. The point of the dent phase is to return as much collateral to the Vault holder as the market will allow.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"flip trace id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lot"),(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"collateral amount")))),(0,l.kt)("h4",{id:"43-deal"},"#43 Deal"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/flip/deal.go")),(0,l.kt)("p",null,"claim a winning bid / settles a completed auction"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"flip trace id")))),(0,l.kt)("h3",{id:"oracle---manager-price-oracle"},"Oracle - manager price oracle"),(0,l.kt)("h4",{id:"51-create"},"#51 Create"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/oracle/create.go")),(0,l.kt)("p",null,"register a new oracle for the asset, proposal required."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"asset id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"price"),(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"initial price")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hop"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"time delay in seconds between poke calls")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"number of governors required when poke")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ts"),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"request timestamp")))),(0,l.kt)("h4",{id:"52-edit"},"#52 Edit"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/oracle/edit.go")),(0,l.kt)("p",null,"modify an oracle's next price, hop & threshold, proposal required."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"asset id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"attribute name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"attributes value")))),(0,l.kt)("h4",{id:"53-poke"},"#53 Poke"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/oracle/poke.go")),(0,l.kt)("p",null,"updates the current feed value and queue up the next one."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"asset id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"price"),(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"new next price")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ts"),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"request timestamp")))),(0,l.kt)("h4",{id:"54-rely"},"#54 Rely"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/oracle/rely.go")),(0,l.kt)("p",null,"add a new price feed to the whitelist, proposal required"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"feed mixin id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"public key")))),(0,l.kt)("h4",{id:"55-deny"},"#55 Deny"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"pkg/maker/oracle/deny.go")),(0,l.kt)("p",null,"remove a price feed from the whitelist, proposal required"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"feed mixin id")))))}u.isMDXComponent=!0},5425:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mtg_design-95826bb2df4f8340730de945ee2a8b85.png"},8455:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/pando-cashier-2407e240d3cb5adce8e34ca6c1b91cbd.png"},1962:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/pando-payee-436f5df4642e60d011d742d5dbec7c82.png"},4813:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/pando-syncer-03302bf2ea6a75a6e5ac1f9b297a962f.png"}}]);