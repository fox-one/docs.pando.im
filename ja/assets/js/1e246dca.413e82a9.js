"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5483],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),f=r,y=s["".concat(u,".").concat(f)]||s[f]||d[f]||o;return n?i.createElement(y,a(a({ref:t},p),{},{components:n})):i.createElement(y,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},572:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"Liquidation Price",sidebar_position:3,date:new Date("2021-08-13T14:33:07.000Z")},u=void 0,l={unversionedId:"leaf/key-concepts/liquidation/liquidation-price",id:"leaf/key-concepts/liquidation/liquidation-price",isDocsHomePage:!1,title:"Liquidation Price",description:"The Liquidation Price is the price at which a Vault becomes vulnerable to liquidation.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/leaf/key-concepts/liquidation/liquidation-price.md",sourceDirName:"leaf/key-concepts/liquidation",slug:"/leaf/key-concepts/liquidation/liquidation-price",permalink:"/ja/docs/leaf/key-concepts/liquidation/liquidation-price",version:"current",sidebarPosition:3,frontMatter:{title:"Liquidation Price",sidebar_position:3,date:"2021-08-13T14:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Liquidation Ratio",permalink:"/ja/docs/leaf/key-concepts/liquidation/liquidation-ratio"},next:{title:"Liquidation Penalty",permalink:"/ja/docs/leaf/key-concepts/liquidation/liquidation-penalty"}},p=[],d={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Liquidation Price is the price at which a Vault becomes vulnerable to liquidation."),(0,o.kt)("p",null,"Vault owners can lower their liquidation price by adding more collateral or returning pUSD to the Vault."),(0,o.kt)("p",null,"Liquidation Price = (Generated pUSD * Liquidation Ratio) / (Amount of Collateral)"))}s.isMDXComponent=!0}}]);