"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[1975],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),p=a,h=f["".concat(l,".").concat(p)]||f[p]||d[p]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4973:function(e,t,n){n.d(t,{Z:function(){return d},I:function(){return u}});var r=n(7294),a=/{\w+}/g,i="{}";function o(e,t){var n=[],o=e.replace(a,(function(e){var a=e.substr(1,e.length-2),o=null==t?void 0:t[a];if(void 0!==o){var c=r.isValidElement(o)?o:String(o);return n.push(c),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?o.split(i).reduce((function(e,t,r){var a;return e.concat(t).concat(null!==(a=n[r])&&void 0!==a?a:"")}),""):o.split(i).reduce((function(e,t,a){return[].concat(e,[r.createElement(r.Fragment,{key:a},t,n[a])])}),[])}function c(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return o(t,n)}var l=n(7529);function s(e){var t,n=e.id,r=e.message;return null!==(t=l[null!=n?n:r])&&void 0!==t?t:r}function u(e,t){var n,r=e.message;return o(null!==(n=s({message:r,id:e.id}))&&void 0!==n?n:r,t)}function d(e){var t,n=e.children,a=e.id,i=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var o=null!==(t=s({message:n,id:a}))&&void 0!==t?t:n;return r.createElement(c,{values:i},o)}},2008:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(7294),a="container_2Pz7",i="title_24BA",o="subtitle_2vvR",c="msg_3ZE1",l=n(4973);function s(e){var t=e.msg,n="";return t&&(n=r.createElement("div",{className:c},t)),r.createElement("div",{className:a},r.createElement("div",{className:i},r.createElement(l.Z,null,"This Article needs additional information.")),r.createElement("div",{className:o},r.createElement(l.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(l.Z,null,"polishing the content"))),n)}},4756:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(2008),c=["components"],l={title:"Why did my transaction fail?",sidebar_position:3,date:new Date("2021-08-15T22:33:07.000Z")},s=void 0,u={unversionedId:"lake/faqs/why-transaction-fail",id:"lake/faqs/why-transaction-fail",isDocsHomePage:!1,title:"Why did my transaction fail?",description:"Common transaction failures are caused by the transaction exceeding slippage. Please refresh the page to obtain the latest transaction pair data.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/lake/faqs/why-transaction-fail.md",sourceDirName:"lake/faqs",slug:"/lake/faqs/why-transaction-fail",permalink:"/de/docs/lake/faqs/why-transaction-fail",version:"current",sidebarPosition:3,frontMatter:{title:"Why did my transaction fail?",sidebar_position:3,date:"2021-08-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"Wie werden die Preise ermittelt?",permalink:"/de/docs/lake/faqs/price"},next:{title:"Why did I fail in providing liquidity?",permalink:"/de/docs/lake/faqs/why-providing-liquidity-fail"}},d=[],f={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.M,{mdxType:"Improvement"}),(0,i.kt)("p",null,"Common transaction failures are caused by the transaction exceeding slippage. Please refresh the page to obtain the latest transaction pair data."),(0,i.kt)("p",null,"The information displayed by Pando Lakeon the web page is the estimated information at the moment you enter the quantity. When you actually pay, it may happen that due to the transaction behavior of others, the actual amount of assets you will get when you pay is different from the estimated amount. There is a large difference in quantity, Pando Lakewill actively reject this kind of transaction with a large difference between the expected and actual results to reduce the loss caused by the difference between the estimated and the actual value."),(0,i.kt)("p",null,"We provide a parameter name slippage, which can be set on the gear \u2699 icon button on the right side of the transaction button. The slippage is the difference between the estimated information and the actual transaction result during Pando Laketransactions."),(0,i.kt)("p",null,"The greater the slippage, the higher the tolerance for the expected difference in the transaction, and the success rate of the transaction will increase, but it may also result in greater losses. The smaller the slippage, the lower the tolerance for the expected difference of the transaction, the lower the transaction success rate, but each order will be more in line with the estimated situation you see on the web page. The default value of slippage is 1%, that is, when the actual transaction differs from the estimated transaction amount you see on the webpage by more than 1%, the Pando Lake engine will reject the transaction."))}p.isMDXComponent=!0}}]);