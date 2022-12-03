"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"\uc2ac\ub9ac\ud53c\uc9c0(Slippage) \uc640 \ube44\uc601\uad6c\uc801 \uc190\uc2e4(Impermanent loss)",date:new Date("2021-08-15T22:33:07.000Z")},p=void 0,l={unversionedId:"lake/key-concepts/slippage-impernament-loss",id:"lake/key-concepts/slippage-impernament-loss",title:"\uc2ac\ub9ac\ud53c\uc9c0(Slippage) \uc640 \ube44\uc601\uad6c\uc801 \uc190\uc2e4(Impermanent loss)",description:"\uc2ac\ub9ac\ud53c\uc9c0(Slippage)",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/lake/key-concepts/slippage-impernament-loss.md",sourceDirName:"lake/key-concepts",slug:"/lake/key-concepts/slippage-impernament-loss",permalink:"/ko/docs/lake/key-concepts/slippage-impernament-loss",draft:!1,tags:[],version:"current",frontMatter:{title:"\uc2ac\ub9ac\ud53c\uc9c0(Slippage) \uc640 \ube44\uc601\uad6c\uc801 \uc190\uc2e4(Impermanent loss)",date:"2021-08-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"\uc790\ub3d9 \ub9c8\ucf13 \uba54\uc774\ucee4(AMM)",permalink:"/ko/docs/lake/key-concepts/amm-mechanism"},next:{title:"4swap MTG",permalink:"/ko/docs/lake/key-concepts/mtg"}},i={},c=[{value:"\uc2ac\ub9ac\ud53c\uc9c0(Slippage)",id:"\uc2ac\ub9ac\ud53c\uc9c0slippage",level:3},{value:"\ube44\uc601\uad6c\uc801 \uc190\uc2e4(Impermanent Loss)",id:"\ube44\uc601\uad6c\uc801-\uc190\uc2e4impermanent-loss",level:3}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\uc2ac\ub9ac\ud53c\uc9c0slippage"},"\uc2ac\ub9ac\ud53c\uc9c0(Slippage)"),(0,o.kt)("p",null,"\uae08\uc735 \uac70\ub798\uc5d0\uc11c \uc2ac\ub9ac\ud53c\uc9c0\ub294 \uac70\ub798\uc758 \uc608\uc0c1 \uac00\uaca9\uacfc \uac70\ub798\uac00 \uc2e4\ud589\ub418\ub294 \uc2e4\uc81c \uac00\uaca9\uc758 \ucc28\uc774\ub97c \ub098\ud0c0\ub0b4\ub294 \uc6a9\uc5b4\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"\ube44\uc601\uad6c\uc801-\uc190\uc2e4impermanent-loss"},"\ube44\uc601\uad6c\uc801 \uc190\uc2e4(Impermanent Loss)"),(0,o.kt)("p",null,"\uc720\ub3d9\uc131\uc744 \uc81c\uacf5\ud558\ub294 \uac83\uc740 \ube44\uc601\uad6c\uc801 \uc190\uc2e4\uc5d0 \ub178\ucd9c\ub420 \uc218 \uc788\uc73c\ubbc0\ub85c \uc704\ud5d8\uc774 \uc5c6\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.bancor.network/beginners-guide-to-getting-rekt-by-impermanent-loss-7c9510cb2f22"},'"\uac04\ub2e8\ud788 \ub9d0\ud574\uc11c \ube44\uc601\uad6c\uc801 \uc190\uc2e4\uc740 AMM\uc5d0 \ud1a0\ud070\uc744 \ubcf4\uc720\ud558\ub294 \uac83\uacfc \uc9c0\uac11\uc5d0 \ubcf4\uc720\ud558\ub294 \uac83\uc758 \ucc28\uc774\uc785\ub2c8\ub2e4." - Nate Hindman')))}m.isMDXComponent=!0}}]);