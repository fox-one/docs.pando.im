(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[2825],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return f}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(i),f=r,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return i?n.createElement(h,a(a({ref:t},u),{},{components:i})):n.createElement(h,a({ref:t},u))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},3567:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=i(2122),r=i(9756),o=(i(7294),i(3905)),a=["components"],l={title:"Why did I fail in providing liquidity?",sidebar_position:5,date:new Date("2021-08-15T22:33:07.000Z")},c=void 0,s={unversionedId:"lake/other-faqs/why-providing-liquidity-fail",id:"lake/other-faqs/why-providing-liquidity-fail",isDocsHomePage:!1,title:"Why did I fail in providing liquidity?",description:"(to be edited)",source:"@site/docs/lake/other-faqs/why-providing-liquidity-fail.md",sourceDirName:"lake/other-faqs",slug:"/lake/other-faqs/why-providing-liquidity-fail",permalink:"/zh-tw/docs/lake/other-faqs/why-providing-liquidity-fail",version:"current",sidebarPosition:5,frontMatter:{title:"Why did I fail in providing liquidity?",sidebar_position:5,date:"2021-08-15T22:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Why did my transaction fail?",permalink:"/zh-tw/docs/lake/other-faqs/why-transaction-fail"},next:{title:"What's Pando Leaf",permalink:"/zh-tw/docs/leaf/intro"}},u=[],d={toc:u};function p(e){var t=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"(to be edited)"),(0,o.kt)("p",null,"The common failure of liquidity injection is caused by exceeding slippage. Please refresh the page to get the latest trading pair data."),(0,o.kt)("p",null,"When injecting liquidity, there is a very important principle: the injection behavior should not change the current trading pair price."),(0,o.kt)("p",null,"Therefore, there is also the concept of slippage when injecting liquidity. When injecting liquidity, the proportion of assets in the liquidity pool is changed due to the trading behavior of others, or in a more general sense, the price of the liquidity pool occurs due to the transaction. Big change. There is a difference between the injected assets and the current liquidity pool ratio. If the difference exceeds a certain ratio, the liquidity injection will fail. That is, slippage is exceeded."),(0,o.kt)("p",null,"There is also a situation where the injection fails, that is, the two assets injected are too small to obtain the minimum amount of LP shares. It will also lead to failure to inject liquidity."),(0,o.kt)("p",null,"If you encounter other situations in the transaction that cause the transaction to fail, please contact our community manager-Chris (ID: 37160854) or ask questions in the Pando Lakeofficial community (ID: 7000103578)"))}p.isMDXComponent=!0}}]);