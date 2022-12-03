"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,d=p["".concat(c,".").concat(h)]||p[h]||f[h]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6001:(e,t,n)=>{n.d(t,{M:()=>l});var a=n(7294);const r="container_oto8",o="title_XJuy",i="subtitle_okvE",s="msg_gTVA";var c=n(5999);function l(e){let{msg:t}=e,n="";return t&&(n=a.createElement("div",{className:s},t)),a.createElement("div",{className:r},a.createElement("div",{className:o},a.createElement(c.Z,null,"This Article needs additional information.")),a.createElement("div",{className:i},a.createElement(c.Z,null,"Please help improve it by "),a.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},a.createElement(c.Z,null,"polishing the content"))),n)}},4336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(6001);const i={title:"Why did my transaction fail?",date:new Date("2021-08-15T22:33:07.000Z")},s=void 0,c={unversionedId:"lake/faqs/why-transaction-fail",id:"lake/faqs/why-transaction-fail",title:"Why did my transaction fail?",description:"Common transaction failures are caused by the transaction exceeding slippage. Please refresh the page to obtain the latest transaction pair data.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/lake/faqs/why-transaction-fail.md",sourceDirName:"lake/faqs",slug:"/lake/faqs/why-transaction-fail",permalink:"/es/docs/lake/faqs/why-transaction-fail",draft:!1,tags:[],version:"current",frontMatter:{title:"Why did my transaction fail?",date:"2021-08-15T22:33:07.000Z"}},l={},u=[],p={toc:u};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.M,{mdxType:"Improvement"}),(0,r.kt)("p",null,"Common transaction failures are caused by the transaction exceeding slippage. Please refresh the page to obtain the latest transaction pair data."),(0,r.kt)("p",null,"The information displayed by Pando Lake on the web page is the estimated information at the moment you enter the quantity. When you actually pay, it may happen that due to the transaction behavior of others, the actual amount of assets you will get when you pay is different from the estimated amount. There is a large difference in quantity, Pando Lake will actively reject this kind of transaction with a large difference between the expected and actual results to reduce the loss caused by the difference between the estimated and the actual value."),(0,r.kt)("p",null,"We provide a parameter name slippage, which can be set on the gear \u2699 icon button on the right side of the transaction button. The slippage is the difference between the estimated information and the actual transaction result during Pando Lake transactions."),(0,r.kt)("p",null,"The greater the slippage, the higher the tolerance for the expected difference in the transaction, and the success rate of the transaction will increase, but it may also result in greater losses. The smaller the slippage, the lower the tolerance for the expected difference of the transaction, the lower the transaction success rate, but each order will be more in line with the estimated situation you see on the web page. The default value of slippage is 1%, that is, when the actual transaction differs from the estimated transaction amount you see on the webpage by more than 1%, the Pando Lake engine will reject the transaction."))}f.isMDXComponent=!0}}]);