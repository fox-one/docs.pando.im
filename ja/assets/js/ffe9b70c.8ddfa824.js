"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[4574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={title:"Overview",date:new Date("2021-09-30T14:38:07.000Z")},i=void 0,l={unversionedId:"lake/overview",id:"lake/overview",title:"Overview",description:"Pando Lake is an Uniswap v2 implementation built with the MTG technology on Mixin Network. Benefit by Mixin's amazing TPS, Pando Lake has outstanding performance on tradings, most transactions can be confirmed in seconds.",source:"@site/i18n/ja/docusaurus-plugin-content-docs-developer/current/lake/overview.md",sourceDirName:"lake",slug:"/lake/overview",permalink:"/ja/developer/lake/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1644907039,formattedLastUpdatedAt:"2022\u5e742\u670815\u65e5",frontMatter:{title:"Overview",date:"2021-09-30T14:38:07.000Z"},sidebar:"docs",previous:{title:"Introducation",permalink:"/ja/developer/intro"},next:{title:"SDK\u3092\u5229\u7528\u3057\u305f\u53d6\u5f15",permalink:"/ja/developer/lake/guide/using-sdk"}},s={},d=[{value:"An Intro to Pando Lake",id:"an-intro-to-pando-lake",level:2},{value:"Governance",id:"governance",level:3},{value:"Pool",id:"pool",level:3},{value:"LP Token",id:"lp-token",level:3},{value:"Actions",id:"actions",level:2},{value:"Deposit",id:"deposit",level:3},{value:"Withdraw",id:"withdraw",level:3},{value:"Trade",id:"trade",level:3},{value:"Summary",id:"summary",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pando Lake is an ",(0,a.kt)("a",{parentName:"p",href:"https://uniswap.org"},"Uniswap")," v2 implementation built with the MTG technology on Mixin Network. Benefit by Mixin's amazing TPS, Pando Lake has outstanding performance on tradings, most transactions can be confirmed in seconds."),(0,a.kt)("h2",{id:"an-intro-to-pando-lake"},"An Intro to Pando Lake"),(0,a.kt)("h3",{id:"governance"},"Governance"),(0,a.kt)("p",null,"Pando lake is maintained by five trusted nodes. Proposals such as create new pools must be approved by at least three nodes."),(0,a.kt)("h3",{id:"pool"},"Pool"),(0,a.kt)("p",null,"Each Pool holds two tokens, which together represent a trading pair for those assets. Liquidity providers deposit tokens into pool to let traders trade\uff1bIn return, the trade fees are all given to the liquidity provider according to the liquidity contribution ratio."),(0,a.kt)("h3",{id:"lp-token"},"LP Token"),(0,a.kt)("p",null,"Each pool has a unique token (LP Token) to represent circulating liquidity. Holding LP Token is a proof of liquidity providing, and the withdrawal of liquidity also requires payment of LP Token."),(0,a.kt)("p",null,"The total market value of LP Token is equal to the sum of the market value of the two tokens in the Pool."),(0,a.kt)("h2",{id:"actions"},"Actions"),(0,a.kt)("h3",{id:"deposit"},"Deposit"),(0,a.kt)("p",null,"Increase the reserves of a Pool to become liquidity provider."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"deposit action",src:n(2515).Z,width:"411",height:"236"})),(0,a.kt)("h3",{id:"withdraw"},"Withdraw"),(0,a.kt)("p",null,"Pay LP Token back to the Pool to withdraw tokens inside. The reserves of the Pool will be decreased."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"withdraw action",src:n(5905).Z,width:"411",height:"236"})),(0,a.kt)("h3",{id:"trade"},"Trade"),(0,a.kt)("p",null,"Pools are always take the initiative to deal with traders automatically. Users can trade through the pools at any side, Pando Lake supports up to 4 pools for one transaction."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"trade action",src:n(6403).Z,width:"611",height:"311"})),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Pando Lake has achieved the goal that decentralized the consensus among trusted nodes, bringing the dex service with multiple AMM formula to all users of the Mixin Network."),(0,a.kt)("p",null,"Pando Lake has performed well but is far from enough. We are working some new pools to make the liquidity more flexible and efficient. The management of trusted nodes needs to be more open to attract more participants too."))}p.isMDXComponent=!0},2515:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pando_lake_deposit_action-5f0f41dc629b4ed403249515302b16fc.png"},6403:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pando_lake_trade_action-d848c836845355e61f7ad9b662ae7da1.png"},5905:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pando_lake_withdraw_action-70455055e5ce2e9ac84b314f3350df34.png"}}]);