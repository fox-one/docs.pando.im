"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[3497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),y=o,m=p["".concat(c,".").concat(y)]||p[y]||h[y]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:'How to deal with "Mixin server encounters errors" problem',date:new Date("2022-09-21T12:33:07.000Z")},i=void 0,s={unversionedId:"rings/faqs/how-to-deal-with-mixin-server-encounters-errors-problem",id:"rings/faqs/how-to-deal-with-mixin-server-encounters-errors-problem",title:'How to deal with "Mixin server encounters errors" problem',description:'When you see "Mixin server encounters errors" in Pando product, one possible situation is that the crypto currency you are going to pay has too much utxo, which quantity has exceeded 256, is not enough to complete the payment of the transaction. In other words, you need to combine the change into whole money before paying.',source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/rings/faqs/how-to-deal-with-mixin-server-encounters-errors-problem.md",sourceDirName:"rings/faqs",slug:"/rings/faqs/how-to-deal-with-mixin-server-encounters-errors-problem",permalink:"/zh/docs/rings/faqs/how-to-deal-with-mixin-server-encounters-errors-problem",draft:!1,tags:[],version:"current",frontMatter:{title:'How to deal with "Mixin server encounters errors" problem',date:"2022-09-21T12:33:07.000Z"}},c={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'When you see "Mixin server encounters errors" in Pando product, one possible situation is that the crypto currency you are going to pay has too much utxo, which quantity has exceeded 256, is not enough to complete the payment of the transaction. In other words, you need to combine the change into whole money before paying.'),(0,o.kt)("p",null,"You can combine the change by paying more times until has enough whole money to pay. Also you can transfer the crypto currency you are going to pay to a new Mixin wallet, and then transfer it back and pay to Pando again. This is the equivalent of converting change to whole money."),(0,o.kt)("p",null,"You can establish a new Mixin Wallet easily by ",(0,o.kt)("a",{parentName:"p",href:"https://pando.im/wallet/"},"fennec"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/apps/wallets/#fennec"},"Learn more details about fennec")))}p.isMDXComponent=!0}}]);