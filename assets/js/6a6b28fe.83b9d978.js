"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9411],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=o,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},135:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={title:"What's Pando Leaf",date:new Date("2021-07-22T22:33:07.000Z")},i=void 0,l={unversionedId:"leaf/intro",id:"leaf/intro",title:"What's Pando Leaf",description:"Pando Leaf is a decentralized financial network built with the Mixin MTG (Mixin Trusted Group) technology, a place where you can deposit collateral to generate and destory Pando USD(pUSD) and destroy it when repaying the generated pUSD balance.",source:"@site/docs/leaf/intro.md",sourceDirName:"leaf",slug:"/leaf/intro",permalink:"/docs/leaf/intro",draft:!1,tags:[],version:"current",frontMatter:{title:"What's Pando Leaf",date:"2021-07-22T22:33:07.000Z"},sidebar:"docs",previous:{title:"Glossary",permalink:"/docs/lake/key-concepts/glossary"},next:{title:"Pando USD",permalink:"/docs/leaf/pusd"}},c={},s=[{value:"How does Pando Leaf work?",id:"how-does-pando-leaf-work",level:2},{value:"Auction",id:"auction",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leaf.pando.im"},"Pando Leaf")," is a decentralized financial network built with the Mixin MTG (",(0,o.kt)("a",{parentName:"p",href:"https://developers.mixin.one/document/mainnet/mtg/exchange"},"Mixin Trusted Group"),") technology, a place where you can deposit collateral to generate and destory ",(0,o.kt)("a",{parentName:"p",href:"./pusd"},"Pando USD(pUSD)")," and destroy it when repaying the generated pUSD balance."),(0,o.kt)("h2",{id:"how-does-pando-leaf-work"},"How does Pando Leaf work?"),(0,o.kt)("p",null,"Depositing collaterals and repaying the generated pUSD balance both happen in a ",(0,o.kt)("strong",{parentName:"p"},"vault"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vaults are not free. Generating the stablecoin requires the payment of stability fee. To reclaim collateral, users must repay the previously generated stablecoin and the accumulated stability fee."),(0,o.kt)("li",{parentName:"ul"},"Vaults are required to be overcollateralized. Vault owners should uphold the liquidation price/liquidation ratio (which is the minimum collateralization ratio) to avoid the ",(0,o.kt)("strong",{parentName:"li"},"liquidation")," of their positions.")),(0,o.kt)("p",null,"When a vault is liquidated, a liquidation penalty is applied and collateral is sold to repay the vault\u2019s outstanding stablecoin balance."),(0,o.kt)("p",null,"For more techincal details, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/developer/leaf/design"},"Pando Leaf Technical Design")),(0,o.kt)("h2",{id:"auction"},"Auction"),(0,o.kt)("p",null,"Anyone can participate in the auction if a vault breaches the minimum required collateralization ratio and becomes liquidated."),(0,o.kt)("p",null,"There are two phases of the auction - For the first phase, participants bid at an increment of not less than 3% of the previous bidding amount to cover the highest amount of the outstanding debt. If within the limit of 12 hours, no one is willing to cover the total debt, the auction is over and the bidder who is willing to cover the highest amount of the debt will take all of the collateral home. Or if there is someone who bids to cover the total debt, then the auction will move to the second phase."),(0,o.kt)("p",null,"For the second phase, participants bid at a decrement of no less than 3% of the previous bidding amount on accepting the smallest part of the collateral for the payment of the total debt."))}d.isMDXComponent=!0}}]);