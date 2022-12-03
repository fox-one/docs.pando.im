"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:'How to deal with "Mixin server encounters errors" problem',date:new Date("2022-09-21T12:33:07.000Z")},i=void 0,s={unversionedId:"FAQs/general/how-to-deal-with-mixin-server-encounters-errors-problem",id:"FAQs/general/how-to-deal-with-mixin-server-encounters-errors-problem",title:'How to deal with "Mixin server encounters errors" problem',description:'When you see "Mixin server encounters errors" in Pando product, one possible situation is that the crypto currency you are going to pay has too much utxo, which quantity has exceeded 256, is not enough to complete the payment of the transaction. In other words, you need to combine the change into whole money before paying.',source:"@site/docs/FAQs/general/how-to-deal-with-mixin-server-encounters-errors-problem.md",sourceDirName:"FAQs/general",slug:"/FAQs/general/how-to-deal-with-mixin-server-encounters-errors-problem",permalink:"/docs/FAQs/general/how-to-deal-with-mixin-server-encounters-errors-problem",draft:!1,tags:[],version:"current",frontMatter:{title:'How to deal with "Mixin server encounters errors" problem',date:"2022-09-21T12:33:07.000Z"},sidebar:"docs",previous:{title:"Audit Reports",permalink:"/docs/security/audit-reports"},next:{title:"How to update the icon of LP token",permalink:"/docs/FAQs/lake/how-to-update-lp-token-icon"}},c={},l=[],p={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'When you see "Mixin server encounters errors" in Pando product, one possible situation is that the crypto currency you are going to pay has too much utxo, which quantity has exceeded 256, is not enough to complete the payment of the transaction. In other words, you need to combine the change into whole money before paying.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(7335).Z,width:"4230",height:"2392"})),(0,o.kt)("p",null,"You can combine the change by paying more times until has enough whole money to pay. Also you can transfer the crypto currency you are going to pay to a new Mixin wallet, and then transfer it back and pay to Pando again. This is the equivalent of converting change to whole money."),(0,o.kt)("p",null,"You can establish a new Mixin Wallet easily by ",(0,o.kt)("a",{parentName:"p",href:"https://pando.im/wallet/"},"fennec"),". "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/apps/wallets/#fennec"},"Learn more details about fennec")))}u.isMDXComponent=!0},7335:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bug-4473d2c157b3176e4a5c112fe717e7c2.png"}}]);