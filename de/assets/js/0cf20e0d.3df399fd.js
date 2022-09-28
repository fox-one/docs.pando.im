"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[4500],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),h=o,m=f["".concat(s,".").concat(h)]||f[h]||p[h]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4680:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={title:'How to deal with "Mixin server encounters errors" problem',date:new Date("2022-09-21T12:33:07.000Z")},s=void 0,u={unversionedId:"rings/faqs/how-to-deal-with-mixin-server-encounters-errors-problem",id:"rings/faqs/how-to-deal-with-mixin-server-encounters-errors-problem",isDocsHomePage:!1,title:'How to deal with "Mixin server encounters errors" problem',description:'When you see "Mixin server encounters errors" in Pando product, one possible situation is that the crypto currency you are going to pay has too much utxo, which quantity has exceeded 256, is not enough to complete the payment of the transaction. In other words, you need to combine the change into whole money before paying.',source:"@site/i18n/de/docusaurus-plugin-content-docs/current/rings/faqs/how-to-deal-with-mixin-server-encounters-errors-problem.md",sourceDirName:"rings/faqs",slug:"/rings/faqs/how-to-deal-with-mixin-server-encounters-errors-problem",permalink:"/de/docs/rings/faqs/how-to-deal-with-mixin-server-encounters-errors-problem",version:"current",frontMatter:{title:'How to deal with "Mixin server encounters errors" problem',date:"2022-09-21T12:33:07.000Z"}},l=[],p={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'When you see "Mixin server encounters errors" in Pando product, one possible situation is that the crypto currency you are going to pay has too much utxo, which quantity has exceeded 256, is not enough to complete the payment of the transaction. In other words, you need to combine the change into whole money before paying.'),(0,a.kt)("p",null,"You can combine the change by paying more times until has enough whole money to pay. Also you can transfer the crypto currency you are going to pay to a new Mixin wallet, and then transfer it back and pay to Pando again. This is the equivalent of converting change to whole money."),(0,a.kt)("p",null,"You can establish a new Mixin Wallet easily by ",(0,a.kt)("a",{parentName:"p",href:"https://pando.im/wallet/"},"fennec"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/apps/wallets/#fennec"},"Learn more details about fennec")))}f.isMDXComponent=!0}}]);