"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6001:(e,t,n)=>{n.d(t,{M:()=>c});var a=n(7294);const r="container_oto8",i="title_XJuy",o="subtitle_okvE",s="msg_gTVA";var l=n(5999);function c(e){let{msg:t}=e,n="";return t&&(n=a.createElement("div",{className:s},t)),a.createElement("div",{className:r},a.createElement("div",{className:i},a.createElement(l.Z,null,"This Article needs additional information.")),a.createElement("div",{className:o},a.createElement(l.Z,null,"Please help improve it by "),a.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},a.createElement(l.Z,null,"polishing the content"))),n)}},4971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),i=n(6001);const o={title:"Why did my transaction fail?",date:new Date("2021-08-15T22:33:07.000Z")},s=void 0,l={unversionedId:"FAQs/lake/why-transaction-fail",id:"FAQs/lake/why-transaction-fail",title:"Why did my transaction fail?",description:"Common transaction failures are caused by the transaction exceeding slippage. Please refresh the page to obtain the latest transaction pair data.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/FAQs/lake/why-transaction-fail.md",sourceDirName:"FAQs/lake",slug:"/FAQs/lake/why-transaction-fail",permalink:"/de/docs/FAQs/lake/why-transaction-fail",draft:!1,tags:[],version:"current",frontMatter:{title:"Why did my transaction fail?",date:"2021-08-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"Which tokens are supported?",permalink:"/de/docs/FAQs/lake/supported-tokens"},next:{title:"Why did I fail in providing liquidity?",permalink:"/de/docs/FAQs/lake/why-providing-liquidity-fail"}},c={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.M,{mdxType:"Improvement"}),(0,r.kt)("p",null,"Common transaction failures are caused by the transaction exceeding slippage. Please refresh the page to obtain the latest transaction pair data."),(0,r.kt)("p",null,"The information displayed by Pando Lake on the web page is the estimated information at the moment you enter the quantity. When you actually pay, it may happen that due to the transaction behavior of others, the actual amount of assets you will get when you pay is different from the estimated amount. There is a large difference in quantity, Pando Lake will actively reject this kind of transaction with a large difference between the expected and actual results to reduce the loss caused by the difference between the estimated and the actual value."),(0,r.kt)("p",null,"We provide a parameter name slippage, which can be set on the gear \u2699 icon button on the right side of the transaction button. The slippage is the difference between the estimated information and the actual transaction result during Pando Lake transactions."),(0,r.kt)("p",null,"The greater the slippage, the higher the tolerance for the expected difference in the transaction, and the success rate of the transaction will increase, but it may also result in greater losses. The smaller the slippage, the lower the tolerance for the expected difference of the transaction, the lower the transaction success rate, but each order will be more in line with the estimated situation you see on the web page. The default value of slippage is 1%, that is, when the actual transaction differs from the estimated transaction amount you see on the webpage by more than 1%, the Pando Lake engine will reject the transaction."))}p.isMDXComponent=!0}}]);