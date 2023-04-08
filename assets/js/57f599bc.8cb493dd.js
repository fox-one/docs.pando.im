"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[8940],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=r,d=p["".concat(c,".").concat(h)]||p[h]||f[h]||o;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6001:(e,t,a)=>{a.d(t,{M:()=>l});var n=a(7294);const r="container_oto8",o="title_XJuy",i="subtitle_okvE",s="msg_gTVA";var c=a(5999);function l(e){let{msg:t}=e,a="";return t&&(a=n.createElement("div",{className:s},t)),n.createElement("div",{className:r},n.createElement("div",{className:o},n.createElement(c.Z,null,"This Article needs additional information.")),n.createElement("div",{className:i},n.createElement(c.Z,null,"Please help improve it by "),n.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},n.createElement(c.Z,null,"polishing the content"))),a)}},647:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=a(6001);const i={title:"Why did my transaction fail?",date:new Date("2021-08-15T22:33:07.000Z")},s=void 0,c={unversionedId:"lake/faqs/why-transaction-fail",id:"lake/faqs/why-transaction-fail",title:"Why did my transaction fail?",description:"Common transaction failures are caused by the transaction exceeding slippage. Please refresh the page to obtain the latest transaction pair data.",source:"@site/docs/lake/faqs/why-transaction-fail.md",sourceDirName:"lake/faqs",slug:"/lake/faqs/why-transaction-fail",permalink:"/docs/lake/faqs/why-transaction-fail",draft:!1,tags:[],version:"current",frontMatter:{title:"Why did my transaction fail?",date:"2021-08-15T22:33:07.000Z"}},l={},u=[],p={toc:u};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.M,{mdxType:"Improvement"}),(0,r.kt)("p",null,"Common transaction failures are caused by the transaction exceeding slippage. Please refresh the page to obtain the latest transaction pair data."),(0,r.kt)("p",null,"The information displayed by Pando Lake on the web page is the estimated information at the moment you enter the quantity. When you actually pay, it may happen that due to the transaction behavior of others, the actual amount of assets you will get when you pay is different from the estimated amount. There is a large difference in quantity, Pando Lake will actively reject this kind of transaction with a large difference between the expected and actual results to reduce the loss caused by the difference between the estimated and the actual value."),(0,r.kt)("p",null,"We provide a parameter name slippage, which can be set on the gear \u2699 icon button on the right side of the transaction button. The slippage is the difference between the estimated information and the actual transaction result during Pando Lake transactions."),(0,r.kt)("p",null,"The greater the slippage, the higher the tolerance for the expected difference in the transaction, and the success rate of the transaction will increase, but it may also result in greater losses.\nThe smaller the slippage, the lower the tolerance for the expected difference of the transaction, the lower the transaction success rate, but each order will be more in line with the estimated situation you see on the web page.\nThe default value of slippage is 1%, that is, when the actual transaction differs from the estimated transaction amount you see on the webpage by more than 1%, the Pando Lake engine will reject the transaction."))}f.isMDXComponent=!0}}]);