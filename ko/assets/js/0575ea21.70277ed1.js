"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[6140],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5995:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={title:"What's Pando Lake",sidebar_position:1,date:new Date("2021-07-22T22:33:07.000Z")},c=void 0,p={unversionedId:"lake/intro",id:"lake/intro",isDocsHomePage:!1,title:"What's Pando Lake",description:"Pando Lake is a decentralized protocol for automated liquidity provision built with the Mixin MTG (Mixin Trusted Group) technology, an alternative to smart contracts on Mixin Network.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/lake/intro.md",sourceDirName:"lake",slug:"/lake/intro",permalink:"/ko/docs/lake/intro",version:"current",sidebarPosition:1,frontMatter:{title:"What's Pando Lake",sidebar_position:1,date:"2021-07-22T22:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"User Manuals",permalink:"/ko/docs/intro"},next:{title:"Get Started",permalink:"/ko/docs/lake/tutorials/get-started"}},s=[],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://lake.pando.im"},"Pando Lake")," is a decentralized protocol for automated liquidity provision built with the Mixin MTG (Mixin Trusted Group) technology, an alternative to smart contracts on Mixin Network."),(0,i.kt)("p",null,"It uses combined algorithms - functioning on a Curve-like, bespoke low slippage, low trading fee algorithm specifically for swapping between stablecoins and on the constant product formula x*y=k for the rest of pairs."),(0,i.kt)("p",null,"Each pair manages a liquidity pool made up of reserves of two tokens. The prices of the pair tokens are directly determined by the reserve balances."),(0,i.kt)("p",null,"Users can swap at a specific crypto assets market(pair) and/or become liquidity providers."),(0,i.kt)("p",null,"For the pairs pUSD-USDT(ERC-20), pUSD-USDT(TRC-20), pUSD-USDC, pUSD-DAI, and BTC-wBTC, the swapping fee is 0.04%. For the rest of pairs, the swapping fee is 0.3%."),(0,i.kt)("p",null,"The trading fee is paid to all liquidity providers proportional to their shares of the liquidity pool."))}d.isMDXComponent=!0}}]);