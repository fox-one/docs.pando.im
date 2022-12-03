"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[619],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=l.createContext({}),d=function(t){var e=l.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):k(k({},e),t)),a},u=function(t){var e=d(t.components);return l.createElement(i.Provider,{value:e},t.children)},m="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},N=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=d(a),N=n,g=m["".concat(i,".").concat(N)]||m[N]||o[N]||r;return a?l.createElement(g,k(k({ref:e},u),{},{components:a})):l.createElement(g,k({ref:e},u))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,k=new Array(r);k[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[m]="string"==typeof t?t:n,k[1]=p;for(var d=2;d<r;d++)k[d]=a[d];return l.createElement.apply(null,k)}return l.createElement.apply(null,a)}N.displayName="MDXCreateElement"},2015:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>k,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var l=a(7462),n=(a(7294),a(3905));const r={title:"\uae30\uc220 \ub514\uc790\uc778",date:new Date("2021-07-12T23:33:07.000Z")},k="Pando Leaf \ub514\uc790\uc778 \ubb38\uc11c",p={unversionedId:"leaf/design",id:"leaf/design",title:"\uae30\uc220 \ub514\uc790\uc778",description:"Pando\uc640\uc758 \uc0c1\ud638\uc791\uc6a9",source:"@site/i18n/ko/docusaurus-plugin-content-docs-developer/current/leaf/design.md",sourceDirName:"leaf",slug:"/leaf/design",permalink:"/ko/developer/leaf/design",draft:!1,tags:[],version:"current",lastUpdatedAt:1637593920,formattedLastUpdatedAt:"2021\ub144 11\uc6d4 22\uc77c",frontMatter:{title:"\uae30\uc220 \ub514\uc790\uc778",date:"2021-07-12T23:33:07.000Z"},sidebar:"docs",previous:{title:"\uac1c\uc694",permalink:"/ko/developer/leaf/overview"},next:{title:"Leaf API \uac1c\uc694",permalink:"/ko/developer/leaf/apis/overview"}},i={},d=[{value:"Pando\uc640\uc758 \uc0c1\ud638\uc791\uc6a9",id:"pando\uc640\uc758-\uc0c1\ud638\uc791\uc6a9",level:2},{value:"Mixin \ub2e4\uc911\uc11c\uba85 \ucd9c\ub825",id:"mixin-\ub2e4\uc911\uc11c\uba85-\ucd9c\ub825",level:3},{value:"TransactionAction \uc815\uc758",id:"transactionaction-\uc815\uc758",level:3},{value:"Workers",id:"workers",level:2},{value:"Syncer Workflow",id:"syncer-workflow",level:3},{value:"Payee Workflow",id:"payee-workflow",level:3},{value:"Assigner &amp; Cashier &amp; TxSender Workflow",id:"assigner--cashier--txsender-workflow",level:3},{value:"Actions",id:"actions",level:2},{value:"Sys - \uc2dc\uc2a4\ud15c \uc6b4\uc601",id:"sys---\uc2dc\uc2a4\ud15c-\uc6b4\uc601",level:3},{value:"#1 Withdraw",id:"1-withdraw",level:4},{value:"\uc81c\uc548 - \uac70\ubc84\ub10c\uc2a4 \uc2dc\uc2a4\ud15c",id:"\uc81c\uc548---\uac70\ubc84\ub10c\uc2a4-\uc2dc\uc2a4\ud15c",level:3},{value:"#11 Make",id:"11-make",level:4},{value:"#12 Shout",id:"12-shout",level:4},{value:"#13 Vote",id:"13-vote",level:4},{value:"Cat - \uad00\ub9ac\uc790 \ub2f4\ubcf4",id:"cat---\uad00\ub9ac\uc790-\ub2f4\ubcf4",level:3},{value:"#21 Create",id:"21-create",level:4},{value:"#22 Supply",id:"22-supply",level:4},{value:"#23 Edit",id:"23-edit",level:4},{value:"#24 Fold",id:"24-fold",level:4},{value:"Vat - \uad00\ub9ac\uc790 \ubcfc\ud2b8",id:"vat---\uad00\ub9ac\uc790-\ubcfc\ud2b8",level:3},{value:"#31 Open",id:"31-open",level:4},{value:"#32 Deposit",id:"32-deposit",level:4},{value:"#33 Withdraw",id:"33-withdraw",level:4},{value:"#34 Payback",id:"34-payback",level:4},{value:"#35 Generate",id:"35-generate",level:4},{value:"Flip - \uad00\ub9ac\uc790 \uacbd\ub9e4",id:"flip---\uad00\ub9ac\uc790-\uacbd\ub9e4",level:3},{value:"#41 Kick",id:"41-kick",level:4},{value:"#42 Bid",id:"42-bid",level:4},{value:"#43 Deal",id:"43-deal",level:4},{value:"Oracle - manager price oracle",id:"oracle---manager-price-oracle",level:3},{value:"#51 Create",id:"51-create",level:4},{value:"#52 Edit",id:"52-edit",level:4},{value:"#53 Poke",id:"53-poke",level:4},{value:"#54 Rely",id:"54-rely",level:4},{value:"#55 Deny",id:"55-deny",level:4}],u={toc:d};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,l.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pando-leaf-\ub514\uc790\uc778-\ubb38\uc11c"},"Pando Leaf \ub514\uc790\uc778 \ubb38\uc11c"),(0,n.kt)("h2",{id:"pando\uc640\uc758-\uc0c1\ud638\uc791\uc6a9"},"Pando\uc640\uc758 \uc0c1\ud638\uc791\uc6a9"),(0,n.kt)("p",null,"Pando\uc758 \ubaa8\ub4e0 \ucc38\uac00\uc790\ub294 \ud1a0\ud070\uc744 \ub2e4\uc911 \uc11c\uba85 \uc9c0\uac11\uc73c\ub85c \uc804\uc1a1\ud558\uc5ec \uc0c1\ud638 \uc791\uc6a9\uc744 \uc644\ub8cc\ud569\ub2c8\ub2e4. \ub178\ub4dc \uc791\uc5c5\uc790 ",(0,n.kt)("strong",{parentName:"p"},"Syncer"),"\ub294 \uc9c0\ubd88\uc744 mixin multisig \ucd9c\ub825\uc73c\ub85c \ub3d9\uae30\ud654\ud569\ub2c8\ub2e4. \ub2e4\ub978 \uc791\uc5c5\uc790 ",(0,n.kt)("strong",{parentName:"p"},"Payee"),"\ub294 \ubaa8\ub4e0 \ucd9c\ub825\uc744 \uc21c\uc11c\ub300\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pando Design",src:a(8026).Z,width:"1049",height:"991"})),(0,n.kt)("h3",{id:"mixin-\ub2e4\uc911\uc11c\uba85-\ucd9c\ub825"},"Mixin \ub2e4\uc911\uc11c\uba85 \ucd9c\ub825"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ucd9c\ub825:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\ud544\ub4dc"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sender"),(0,n.kt)("td",{parentName:"tr",align:null},"\ubbf9\uc2a4\uc778 \uc0ac\uc6a9\uc790 Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CreatedAt"),(0,n.kt)("td",{parentName:"tr",align:null},"\uacb0\uc81c \uc2dc\uac04")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AssetID"),(0,n.kt)("td",{parentName:"tr",align:null},"\uacb0\uc81c \uc790\uc0b0 Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Amount"),(0,n.kt)("td",{parentName:"tr",align:null},"\uacb0\uc81c \uae08\uc561")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Memo"),(0,n.kt)("td",{parentName:"tr",align:null},"\ucd94\uac00 \uba54\uc2dc\uc9c0")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ucd9c\ub825 Memo:")),(0,n.kt)("p",null,"\uba54\ubaa8\uc5d0\ub294 ",(0,n.kt)("strong",{parentName:"p"},"TransactionAction")," \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/fox-one/pando/blob/main/core/action.go"},"DecodeTransactionAction"),"\uc744 \ucc38\uc870\ud558\uc138\uc694."),(0,n.kt)("p",null,"\uba54\ubaa8\ub294 AES\ub85c \uc554\ud638\ud654\ub418\uc5b4 \uc788\uc73c\uba70, \ubcf5\ud569 AES \ud0a4/iv\uc5d0 \uc0ac\uc6a9\ub418\ub294 ed25519 \uacf5\uac1c \ud0a4\ub294 \ucc98\uc74c 32\ubc14\uc774\ud2b8\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h3",{id:"transactionaction-\uc815\uc758"},"TransactionAction \uc815\uc758"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\ud544\ub4dc"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FollowID"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc774 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud55c \uc0ac\uc6a9\uc790 \uc815\uc758 \ucd94\uc801 Id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Body"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc561\uc158 \uc720\ud615 & \uad00\ub828 \ub9e4\uac1c\ubcc0\uc218"),(0,n.kt)("td",{parentName:"tr",align:null},"bytes")))),(0,n.kt)("h2",{id:"workers"},"Workers"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Syncer"),"\ub294 Mixin Messenger Api\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucc98\ub9ac\ub418\uc9c0 \uc54a\uc740 utxo& \ub97c ",(0,n.kt)("strong",{parentName:"li"},"outputs"),"\uc73c\ub85c \ub3d9\uae30\ud654\ud558\uace0 \uc5c5\ub370\uc774\ud2b8\ub41c asc\uc21c\uc73c\ub85c WalletStore\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Payee"),"\ub294 WalletStore\uc5d0\uc11c \ucc98\ub9ac\ub418\uc9c0 \uc54a\uc740 utxo\ub97c \uc21c\uc11c\ub300\ub85c \uac00\uc838\uc624\uace0 \uba54\ubaa8\ub97c \ubd84\uc11d\ud558\uc5ec \uc791\uc5c5\uc744 \uac00\uc838\uc628 \ub2e4\uc74c \ucc98\ub9ac\ud569\ub2c8\ub2e4. \ucc98\ub9ac \uc911\uc5d0 \uc1a1\uae08\uc774 \uc0dd\uc131\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Assigner"),"\ub294 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc740 UTXO\ub97c \ucda9\ubd84\ud788 \uc120\ud0dd\ud558\uace0 \ubcf4\ub958 \uc911\uc778 \uc1a1\uae08\uc5d0 \ud560\ub2f9\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Cashier"),"\ub294 WalletStore\uc5d0\uc11c \ucc98\ub9ac\ub418\uc9c0 \uc54a\uc740 \uc1a1\uae08\uc744 \uc21c\uc11c\ub300\ub85c \uac00\uc838\uc628 \ub2e4\uc74c \ub2e4\uc911\uc11c\uba85\uc1a1\uae08\uc744 \uc694\uccad& \uc11c\uba85\ud569\ub2c8\ub2e4. \ucda9\ubd84\ud55c \uc11c\uba85\uc774 \uc218\uc9d1\ub418\uba74 \uc0c8 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"TxSender"),"\ub294 Mixin Network\uc5d0 \uc0c8 \ud2b8\ub79c\uc7ad\uc158\uc744 \ucee4\ubc0b\ud569\ub2c8\ub2e4.")),(0,n.kt)("h3",{id:"syncer-workflow"},"Syncer Workflow"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Syncer Workflow",src:a(343).Z,width:"991",height:"911"})),(0,n.kt)("h3",{id:"payee-workflow"},"Payee Workflow"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Payee Workflow",src:a(6054).Z,width:"1185",height:"911"})),(0,n.kt)("h3",{id:"assigner--cashier--txsender-workflow"},"Assigner & Cashier & TxSender Workflow"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Assigner &amp; Cashier Workflow",src:a(3724).Z,width:"1582",height:"911"})),(0,n.kt)("h2",{id:"actions"},"Actions"),(0,n.kt)("p",null,"Pando\uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 \ubaa8\ub4e0 \uc791\uc5c5\uc740 cat,flip,oracle,proposal,sys \ubc0f vat \uadf8\ub8f9\uc73c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/fox-one/pando/blob/main/core/action.go"},"core/action"),"\uc744 \ucc38\uc870\ud558\uc138\uc694."),(0,n.kt)("h3",{id:"sys---\uc2dc\uc2a4\ud15c-\uc6b4\uc601"},"Sys - \uc2dc\uc2a4\ud15c \uc6b4\uc601"),(0,n.kt)("h4",{id:"1-withdraw"},"#1 Withdraw"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/sys/withdraw.go")),(0,n.kt)("p",null,"\ub2e4\uc911\uc11c\uba85 \uc9c0\uac11\uc5d0\uc11c \uc790\uc0b0\uc744 \uc778\ucd9c\ud558\ub824\uba74 \uc81c\uc548\uc11c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\uc790\uc0b0"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc790\uc0b0 \ucd9c\uae08 Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\uc218\ub7c9"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\ucd9c\uae08 \uae08\uc561")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\uc0c1\ub300"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc218\ucde8\uc778\uc758 mixin Id")))),(0,n.kt)("h3",{id:"\uc81c\uc548---\uac70\ubc84\ub10c\uc2a4-\uc2dc\uc2a4\ud15c"},"\uc81c\uc548 - \uac70\ubc84\ub10c\uc2a4 \uc2dc\uc2a4\ud15c"),(0,n.kt)("h4",{id:"11-make"},"#11 Make"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/proposal/make.go")),(0,n.kt)("p",null,"\uc0c8 \uc81c\uc548 \uc0dd\uc131"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc561\uc158 \uc720\ud615 & \ub9e4\uac1c\ubcc0\uc218\uac00 \uc804\ub2ec\ub418\uba74 \uc2e4\ud589\ub429\ub2c8\ub2e4.")))),(0,n.kt)("h4",{id:"12-shout"},"#12 Shout"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/proposal/shout.go")),(0,n.kt)("p",null,"\ub178\ub4dc \uad00\ub9ac\uc790\uc5d0\uac8c \uc774 \uc81c\uc548\uc5d0 \ud22c\ud45c\ud558\ub3c4\ub85d \uc694\uccad"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc81c\uc548 \ucd94\uc801 Id")))),(0,n.kt)("h4",{id:"13-vote"},"#13 Vote"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/proposal/vote.go")),(0,n.kt)("p",null,"\ub178\ub4dc\ub9cc \uc81c\uc548\uc5d0 \ud22c\ud45c\uac00\ub2a5\ud569\ub2c8\ub2e4. \ucda9\ubd84\ud55c \ud22c\ud45c\uac00 \uc218\uc9d1\ub418\uba74 \ucca8\ubd80\ub41c \uc791\uc5c5\uc774 \ubaa8\ub4e0 \ub178\ub4dc\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc81c\uc548 \ucd94\uc801 Id")))),(0,n.kt)("h3",{id:"cat---\uad00\ub9ac\uc790-\ub2f4\ubcf4"},"Cat - \uad00\ub9ac\uc790 \ub2f4\ubcf4"),(0,n.kt)("h4",{id:"21-create"},"#21 Create"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/cat/create.go")),(0,n.kt)("p",null,"\uc0c8\ub85c\uc6b4 \ub2f4\ubcf4 \uc720\ud615 \uc0dd\uc131, \uc81c\uc548\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gem"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\ub2f4\ubcf4 \uc790\uc0b0 Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dai"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\ubd80\ucc44 \uc790\uc0b0 Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\ub2f4\ubcf4 \uc720\ud615 \uc774\ub984")))),(0,n.kt)("h4",{id:"22-supply"},"#22 Supply"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/cat/supply.go")),(0,n.kt)("p",null,"dai \ud1a0\ud070\uc744 \uacf5\uae09\ud558\uc5ec \uc774 \ub2f4\ubcf4 \uc720\ud615\uc758 \ucd1d \ubd80\ucc44 \ud55c\ub3c4\ub97c \ub192\uc785\ub2c8\ub2e4. \uc9c0\ubd88 \uc790\uc0b0 Id\ub294 \ubd80\ucc44 \uc790\uc0b0 Id\uc640 \uac19\uc544\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\ub2f4\ubcf4 \ucd94\uc801 Id")))),(0,n.kt)("h4",{id:"23-edit"},"#23 Edit"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/cat/edit.go")),(0,n.kt)("p",null,"\ub2f4\ubcf4\uc758 \ud558\ub098 \ud639\uc740 \uc774\uc0c1\uc758 \uc18d\uc131\uc744 \uc218\uc815\ud558\ub824\uba74 \uc81c\uc548\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\ub2f4\ubcf4 \ucd94\uc801 Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc18d\uc131 \uc774\ub984")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc18d\uc131 \uac12")))),(0,n.kt)("h4",{id:"24-fold"},"#24 Fold"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/cat/fold.go")),(0,n.kt)("p",null,"\ubd80\ucc44 \uc2b9\uc218(\ube44\uc728) \ub97c \uc218\uc815\ud558\uc5ec \ud574\ub2f9 \ubd80\ucc44\ub97c \uc0dd\uc131/\uc18c\uba78 \ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\ub2f4\ubcf4 \ucd94\uc801 Id")))),(0,n.kt)("h3",{id:"vat---\uad00\ub9ac\uc790-\ubcfc\ud2b8"},"Vat - \uad00\ub9ac\uc790 \ubcfc\ud2b8"),(0,n.kt)("h4",{id:"31-open"},"#31 Open"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/vat/open.go")),(0,n.kt)("p",null,"\ud2b9\ubcc4 \ub2f4\ubcf4 \uc720\ud615\uc73c\ub85c \uc0c8 \ubcfc\ud2b8 \uc5f4\uae30"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\ub2f4\ubcf4 \ucd94\uc801 Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"debt"),(0,n.kt)("td",{parentName:"tr",align:null},"decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"\ucd08\uae30 \ubd80\ucc44")))),(0,n.kt)("h4",{id:"32-deposit"},"#32 Deposit"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/vat/deposit.go")),(0,n.kt)("p",null,"\ub2f4\ubcf4\ub97c \ubcfc\ud2b8\ub85c \uc774\uc804\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\ubcfc\ud2b8 \ucd94\uc801 Id")))),(0,n.kt)("h4",{id:"33-withdraw"},"#33 Withdraw"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/vat/withdraw.go")),(0,n.kt)("p",null,"\ubcfc\ud2b8\uc5d0\uc11c \ub2f4\ubcf4\ubb3c\uc744 \uc778\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubcfc\ud2b8 \uc18c\uc720\uc790\ub9cc \ud574\ub2f9\ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\ubcfc\ud2b8 \ucd94\uc801 Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dink"),(0,n.kt)("td",{parentName:"tr",align:null},"decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"\ub2f4\ubcf4\ubb3c\uc758 \ubcc0\uacbd")))),(0,n.kt)("h4",{id:"34-payback"},"#34 Payback"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/vat/payback.go")),(0,n.kt)("p",null,"\ubcfc\ud2b8 \ubd80\ucc44\ub97c \uc904\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\ubcfc\ud2b8 \ucd94\uc801 Id")))),(0,n.kt)("h4",{id:"35-generate"},"#35 Generate"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/vat/generate.go")),(0,n.kt)("p",null,"\ubcfc\ud2b8 \ubd80\ucc44 \uc99d\uac00, \ubcfc\ud2b8 \uc18c\uc720\uc790\ub9cc \ud574\ub2f9\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\ubcfc\ud2b8 \ucd94\uc801 Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"debt"),(0,n.kt)("td",{parentName:"tr",align:null},"decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"\ubd80\ucc44\uc758 \ubcc0\ud654")))),(0,n.kt)("h3",{id:"flip---\uad00\ub9ac\uc790-\uacbd\ub9e4"},"Flip - \uad00\ub9ac\uc790 \uacbd\ub9e4"),(0,n.kt)("h4",{id:"41-kick"},"#41 Kick"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/flip/kick.go")),(0,n.kt)("p",null,"\uccad\uc0b0 \ubcfc\ud2b8\uc5d0 \ubcf4\uad00\ub41c \ub2f4\ubcf4\ubb3c\uc744 \uacbd\ub9e4\uc5d0 \uc62c\ub9bd\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\ubcfc\ud2b8 \ucd94\uc801 Id")))),(0,n.kt)("h4",{id:"42-bid"},"#42 Bid"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/flip/bid.go")),(0,n.kt)("p",null,"\uacbd\ub9e4\uc5d0 \ucc38\uc5ec\ud558\uae30 \uc704\ud574 dai\ub97c \uc9c0\ubd88\ud569\ub2c8\ub2e4."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\uc785\ucc30 \ub2e8\uacc4\uc5d0\uc11c \uc785\ucc30\uc790\ub294 dai\uc758 \uc785\ucc30 \uae08\uc561\uc744 \ub298\ub9ac\uba74\uc11c \uc77c\uc815 \uc218\ub7c9\uc758 gem\uc744 \ub193\uace0 \uacbd\uc7c1\ud569\ub2c8\ub2e4. dai \uc218\uac00 \uc99d\uac00\ud558\uba74 \uacbd\ub9e4\uac00 dent \ub2e8\uacc4\ub85c \uc9c4\uc785\ud569\ub2c8\ub2e4. \uacbd\ud5a5 \ub2e8\uacc4\uc758 \uc694\uc810\uc740 \uc2dc\uc2a4\ud15c\uc758 \ubd80\ucc44\ub97c \ucda9\ub2f9\ud558\uae30 \uc704\ud574 Dai\ub97c \uc62c\ub9ac\ub294 \uac83\uc785\ub2c8\ub2e4. dent \ub2e8\uacc4\uc5d0\uc11c \uc785\ucc30\uc790\ub294 \uace0\uc815 \uc218\ub7c9\uc758 dai\uc5d0 \uc785\ucc30\ud558\ub294 gem \uc218\ub7c9\uc744 \uc904\uc774\uae30 \uc704\ud574 \uacbd\uc7c1\ud569\ub2c8\ub2e4. \ubab0\uc218\ub41c gem\uc740 \uc18c\uc720\uc790\uac00 \ud68c\uc218\ud560 \uc218 \uc788\ub3c4\ub85d \uccad\uc0b0\ub41c \ubcfc\ud2b8\ub85c \ubc18\ud658\ub429\ub2c8\ub2e4. dent \ub2e8\uacc4\uc758 \uc694\uc810\uc740 \uc2dc\uc7a5\uc774 \ud5c8\uc6a9\ud558\ub294 \ud55c \ub9ce\uc740 \ub2f4\ubcf4\ubb3c\uc744 \ubcfc\ud2b8 \uc18c\uc720\uc790\uc5d0\uac8c \ubc18\ud658\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\uacbd\ub9e4 \ucd94\uc801 Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lot"),(0,n.kt)("td",{parentName:"tr",align:null},"decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"\ub2f4\ubcf4 \uae08\uc561")))),(0,n.kt)("h4",{id:"43-deal"},"#43 Deal"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/flip/deal.go")),(0,n.kt)("p",null,"\ub099\ucc30 \uccad\uad6c / \uc644\ub8cc\ub41c \uacbd\ub9e4 \uc815\uc0b0"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\uacbd\ub9e4 \ucd94\uc801 Id")))),(0,n.kt)("h3",{id:"oracle---manager-price-oracle"},"Oracle - manager price oracle"),(0,n.kt)("h4",{id:"51-create"},"#51 Create"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/oracle/create.go")),(0,n.kt)("p",null,"\uc790\uc0b0\uc5d0 \ub300\ud55c \uc0c8 \uc624\ub77c\ud074\uc744 \ub4f1\ub85d\ud558\uc2ed\uc2dc\uc624. \uc81c\uc548\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc790\uc0b0 Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price"),(0,n.kt)("td",{parentName:"tr",align:null},"decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"\ucd08\uae30 \uac00\uaca9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hop"),(0,n.kt)("td",{parentName:"tr",align:null},"int64"),(0,n.kt)("td",{parentName:"tr",align:null},"poke calls\uc0ac\uc774\uc5d0 \uba87\ucd08\uc758 \uc9c0\uc5f0\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"int64"),(0,n.kt)("td",{parentName:"tr",align:null},"poke\ud560\ub54c \ud544\uc694\ud55c \uc9c0\ubc30\uc790\uc758 \uc218\ub7c9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ts"),(0,n.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud0c0\uc784\uc2a4\ud0ec\ud504 \uc694\uccad")))),(0,n.kt)("h4",{id:"52-edit"},"#52 Edit"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/oracle/edit.go")),(0,n.kt)("p",null,"oracle\uc758 \ub2e4\uc74c \uac12, hop & \ud55c\uacc4\uac12 \uc218\uc815, \uc81c\uc548\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc790\uc0b0 Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc18d\uc131 \uc774\ub984")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc18d\uc131 \uac12")))),(0,n.kt)("h4",{id:"53-poke"},"#53 Poke"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/oracle/poke.go")),(0,n.kt)("p",null,"\ud604\uc7ac \ud53c\ub4dc \uac12\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \ub2e4\uc74c \ud53c\ub4dc \uac12\uc744 \ub300\uae30\uc5f4\uc5d0 \ub123\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc790\uc0b0 Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price"),(0,n.kt)("td",{parentName:"tr",align:null},"decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"\uc0c8\ub85c\uc6b4 \ub2e4\uc74c \uac00\uaca9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ts"),(0,n.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud0c0\uc784\uc2a4\ud0ec\ud504 \uc694\uccad")))),(0,n.kt)("h4",{id:"54-rely"},"#54 Rely"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/oracle/rely.go")),(0,n.kt)("p",null,"\ud654\uc774\ud2b8\ub9ac\uc2a4\ud2b8\uc5d0 \uc0c8 \uac00\uaca9 \ud53c\ub4dc \ucd94\uac00, \uc81c\uc548\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"feed mixin id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"\uacf5\uac1c \ud0a4")))),(0,n.kt)("h4",{id:"55-deny"},"#55 Deny"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"pkg/maker/oracle/deny.go")),(0,n.kt)("p",null,"\ud654\uc774\ud2b8\ub9ac\uc2a4\ud2b8\uc5d0\uc11c \uac00\uaca9 \ud53c\ub4dc \uc81c\uac70, \uc81c\uc548\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub9e4\uac1c \ubcc0\uc218:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\uc774\ub984"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc720\ud615"),(0,n.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"feed mixin id")))))}m.isMDXComponent=!0},8026:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/mtg_design-95826bb2df4f8340730de945ee2a8b85.png"},3724:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/pando-cashier-2407e240d3cb5adce8e34ca6c1b91cbd.png"},6054:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/pando-payee-436f5df4642e60d011d742d5dbec7c82.png"},343:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/pando-syncer-03302bf2ea6a75a6e5ac1f9b297a962f.png"}}]);