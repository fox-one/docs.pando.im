"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[4038],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=p(t),d=o,f=y["".concat(c,".").concat(d)]||y[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2822:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return y}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"rToken",sidebar_position:1,date:new Date("2021-09-04T12:33:07.000Z")},c=void 0,p={unversionedId:"rings/key-concepts/rtoken",id:"rings/key-concepts/rtoken",isDocsHomePage:!1,title:"rToken",description:"When someone supplies an asset to Pando Rings, they are given rTokens in exchange.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/rings/key-concepts/rtoken.md",sourceDirName:"rings/key-concepts",slug:"/rings/key-concepts/rtoken",permalink:"/ko/docs/rings/key-concepts/rtoken",version:"current",sidebarPosition:1,frontMatter:{title:"rToken",sidebar_position:1,date:"2021-09-04T12:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Checking your transaction history",permalink:"/ko/docs/rings/tutorials/check-tx-history"},next:{title:"Net APY",permalink:"/ko/docs/rings/key-concepts/net-apy"}},l=[],u={toc:l};function y(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When someone supplies an asset to Pando Rings, they are given rTokens in exchange."),(0,a.kt)("p",null,"With the meaning of Rings Token, rToken is an ERC-20 token that is essentially a tokenized supply position and can be used as collateral in other liquidity pool or exchanged for other crypto assets."),(0,a.kt)("p",null,"Every type of cryptocurrency supplied to Pand Rings has a corresponding rToken. For example, if a user supplies ETH, they will receive rETH; if a user supplies BTC, they will receive rBTC."),(0,a.kt)("p",null,"rTokens are used in the process of ",(0,a.kt)("a",{parentName:"p",href:"./glossary"},"supplying"),", ",(0,a.kt)("a",{parentName:"p",href:"./glossary"},"pledging"),", ",(0,a.kt)("a",{parentName:"p",href:"./glossary"},"unpledging")," and ",(0,a.kt)("a",{parentName:"p",href:"./glossary"},"withdrawing"),". And it can be transferred freely to anyone in the same way you transfer any other crypto assets. Please be noted though, ",(0,a.kt)("strong",{parentName:"p"},"once you have transferred the rTokens to others, you are no longer entitled to the corresponding underlying assets"),"."),(0,a.kt)("p",null,"Asset suppliers earn interest through the rToken's exchange rate, which increases in value relative to the underlying asset. Simply by holding rTokens, the suppliers earn interest."),(0,a.kt)("p",null,"You can withdraw the underlying asset from rToken at any time, granted that Pando Rings has enough market ",(0,a.kt)("a",{parentName:"p",href:"./glossary"},"liquidity")," of the asset."))}y.isMDXComponent=!0}}]);