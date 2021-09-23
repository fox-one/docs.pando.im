"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[8951],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),y=s(n),d=o,f=y["".concat(c,".").concat(d)]||y[d]||l[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3602:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return y}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={title:"Net APY",sidebar_position:2,date:new Date("2021-09-04T12:33:07.000Z")},c=void 0,s={unversionedId:"rings/key-concepts/net-apy",id:"rings/key-concepts/net-apy",isDocsHomePage:!1,title:"Net APY",description:"Net APY(annual percentage yield) reflects the estimatd annual net yield based on the Supply APY and Borrow APY of the very moment. It indicates whether you are making money or losing money at the current APYS.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/rings/key-concepts/net-apy.md",sourceDirName:"rings/key-concepts",slug:"/rings/key-concepts/net-apy",permalink:"/zh/docs/rings/key-concepts/net-apy",version:"current",sidebarPosition:2,frontMatter:{title:"Net APY",sidebar_position:2,date:"2021-09-04T12:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"rToken",permalink:"/zh/docs/rings/key-concepts/rtoken"},next:{title:"Loan Risk Indicator",permalink:"/zh/docs/rings/key-concepts/loan-risk-indicator"}},u=[],l={toc:u};function y(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Net APY(annual percentage yield) reflects the estimatd annual net yield based on the ",(0,a.kt)("a",{parentName:"p",href:"./glossary"},"Supply APY")," and ",(0,a.kt)("a",{parentName:"p",href:"./glossary"},"Borrow APY")," of the very moment. It indicates whether you are making money or losing money at the current APYS."),(0,a.kt)("p",null,"Net APY = ","[ \u2211(an asset's Supply x its Supply APY) - \u2211(an asset's Borrow x its Borrow APY) ]"," / Total Supply"),(0,a.kt)("p",null,"For example, you have supplied two assets: BTC and ETH; and you have borrowed two assets: ",(0,a.kt)("a",{parentName:"p",href:"/docs/leaf/pusd"},"pUSD")," and USDC. Your Net APY of the moment will be:\n{","[(BTC Supply ",(0,a.kt)("em",{parentName:"p"}," BTC Supply APY) + (ETH Supply ")," ETH Supply APY)]"," - ","[(pUSD Borrow ",(0,a.kt)("em",{parentName:"p"}," pUSD Borrow APY) + (USDC Borrow ")," USDC Borrow APY)]","}(BTC Supply + EtH Supply)"))}y.isMDXComponent=!0}}]);