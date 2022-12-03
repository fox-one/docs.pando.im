"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9645],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(i),f=r,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return i?n.createElement(h,o(o({ref:t},u),{},{components:i})):n.createElement(h,o({ref:t},u))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},6001:(e,t,i)=>{i.d(t,{M:()=>s});var n=i(7294);const r="container_oto8",a="title_XJuy",o="subtitle_okvE",l="msg_gTVA";var c=i(5999);function s(e){let{msg:t}=e,i="";return t&&(i=n.createElement("div",{className:l},t)),n.createElement("div",{className:r},n.createElement("div",{className:a},n.createElement(c.Z,null,"This Article needs additional information.")),n.createElement("div",{className:o},n.createElement(c.Z,null,"Please help improve it by "),n.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},n.createElement(c.Z,null,"polishing the content"))),i)}},5009:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=i(7462),r=(i(7294),i(3905)),a=i(6001);const o={title:"Why did I fail in providing liquidity?",date:new Date("2021-08-15T22:33:07.000Z")},l=void 0,c={unversionedId:"lake/faqs/why-providing-liquidity-fail",id:"lake/faqs/why-providing-liquidity-fail",title:"Why did I fail in providing liquidity?",description:"The common failure of liquidity injection is caused by exceeding slippage. Please refresh the page to get the latest trading pair data.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/lake/faqs/why-providing-liquidity-fail.md",sourceDirName:"lake/faqs",slug:"/lake/faqs/why-providing-liquidity-fail",permalink:"/de/docs/lake/faqs/why-providing-liquidity-fail",draft:!1,tags:[],version:"current",frontMatter:{title:"Why did I fail in providing liquidity?",date:"2021-08-15T22:33:07.000Z"}},s={},u=[],d={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.M,{mdxType:"Improvement"}),(0,r.kt)("p",null,"The common failure of liquidity injection is caused by exceeding slippage. Please refresh the page to get the latest trading pair data."),(0,r.kt)("p",null,"When injecting liquidity, there is a very important principle: the injection behavior should not change the current trading pair price."),(0,r.kt)("p",null,"Therefore, there is also the concept of slippage when injecting liquidity. When injecting liquidity, the proportion of assets in the liquidity pool is changed due to the trading behavior of others, or in a more general sense, the price of the liquidity pool occurs due to the transaction. Big change. There is a difference between the injected assets and the current liquidity pool ratio. If the difference exceeds a certain ratio, the liquidity injection will fail. That is, slippage is exceeded."),(0,r.kt)("p",null,"There is also a situation where the injection fails, that is, the two assets injected are too small to obtain the minimum amount of LP shares. It will also lead to failure to inject liquidity."),(0,r.kt)("p",null,"If you encounter other situations in the transaction that cause the transaction to fail, please contact our community manager-Chris (ID: 37160854) or ask questions in the Pando Lakeofficial community (ID: 7000103578)"))}p.isMDXComponent=!0}}]);