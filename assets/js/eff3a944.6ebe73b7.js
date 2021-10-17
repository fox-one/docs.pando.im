"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[7696],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4973:function(e,t,n){n.d(t,{Z:function(){return d},I:function(){return u}});var i=n(7294),r=/{\w+}/g,a="{}";function o(e,t){var n=[],o=e.replace(r,(function(e){var r=e.substr(1,e.length-2),o=null==t?void 0:t[r];if(void 0!==o){var l=i.isValidElement(o)?o:String(o);return n.push(l),a}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?o.split(a).reduce((function(e,t,i){var r;return e.concat(t).concat(null!==(r=n[i])&&void 0!==r?r:"")}),""):o.split(a).reduce((function(e,t,r){return[].concat(e,[i.createElement(i.Fragment,{key:r},t,n[r])])}),[])}function l(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return o(t,n)}var c=n(7529);function s(e){var t,n=e.id,i=e.message;return null!==(t=c[null!=n?n:i])&&void 0!==t?t:i}function u(e,t){var n,i=e.message;return o(null!==(n=s({message:i,id:e.id}))&&void 0!==n?n:i,t)}function d(e){var t,n=e.children,r=e.id,a=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var o=null!==(t=s({message:n,id:r}))&&void 0!==t?t:n;return i.createElement(l,{values:a},o)}},2008:function(e,t,n){n.d(t,{M:function(){return s}});var i=n(7294),r="container_2Pz7",a="title_24BA",o="subtitle_2vvR",l="msg_3ZE1",c=n(4973);function s(e){var t=e.msg,n="";return t&&(n=i.createElement("div",{className:l},t)),i.createElement("div",{className:r},i.createElement("div",{className:a},i.createElement(c.Z,null,"This Article needs additional information.")),i.createElement("div",{className:o},i.createElement(c.Z,null,"Please help improve it by "),i.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},i.createElement(c.Z,null,"polishing the content"))),n)}},2336:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=n(2008),l=["components"],c={title:"Why did I fail in providing liquidity?",sidebar_position:4,date:new Date("2021-08-15T22:33:07.000Z")},s=void 0,u={unversionedId:"lake/faqs/why-providing-liquidity-fail",id:"lake/faqs/why-providing-liquidity-fail",isDocsHomePage:!1,title:"Why did I fail in providing liquidity?",description:"Improvement,",source:"@site/docs/lake/faqs/why-providing-liquidity-fail.md",sourceDirName:"lake/faqs",slug:"/lake/faqs/why-providing-liquidity-fail",permalink:"/docs/lake/faqs/why-providing-liquidity-fail",version:"current",sidebarPosition:4,frontMatter:{title:"Why did I fail in providing liquidity?",sidebar_position:4,date:"2021-08-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"Why did my transaction fail?",permalink:"/docs/lake/faqs/why-transaction-fail"},next:{title:"Where can I see liquidity reward\uff1f",permalink:"/docs/lake/faqs/where-can-I-see-liquidity-reward"}},d=[],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.M,{mdxType:"Improvement"}),(0,a.kt)("p",null,"The common failure of liquidity injection is caused by exceeding slippage. Please refresh the page to get the latest trading pair data."),(0,a.kt)("p",null,"When injecting liquidity, there is a very important principle: the injection behavior should not change the current trading pair price."),(0,a.kt)("p",null,"Therefore, there is also the concept of slippage when injecting liquidity. When injecting liquidity, the proportion of assets in the liquidity pool is changed due to the trading behavior of others, or in a more general sense, the price of the liquidity pool occurs due to the transaction. Big change. There is a difference between the injected assets and the current liquidity pool ratio. If the difference exceeds a certain ratio, the liquidity injection will fail. That is, slippage is exceeded."),(0,a.kt)("p",null,"There is also a situation where the injection fails, that is, the two assets injected are too small to obtain the minimum amount of LP shares. It will also lead to failure to inject liquidity."),(0,a.kt)("p",null,"If you encounter other situations in the transaction that cause the transaction to fail, please contact our community manager-Chris (ID: 37160854) or ask questions in the Pando Lakeofficial community (ID: 7000103578)"))}f.isMDXComponent=!0}}]);