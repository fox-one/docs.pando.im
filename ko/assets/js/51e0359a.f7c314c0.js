"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[1786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={title:"\uc720\ub3d9\uc131 \uc81c\uac70",date:new Date("2021-08-15T22:33:07.000Z")},a=void 0,l={unversionedId:"lake/tutorials/removing-liquidity",id:"lake/tutorials/removing-liquidity",title:"\uc720\ub3d9\uc131 \uc81c\uac70",description:'\ubc29\ubc95 1: \ud480 \ud398\uc774\uc9c0--\ud2b9\uc815 \ud480 \ud074\ub9ad-- "-"\ud074\ub9ad',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/lake/tutorials/removing-liquidity.md",sourceDirName:"lake/tutorials",slug:"/lake/tutorials/removing-liquidity",permalink:"/ko/docs/lake/tutorials/removing-liquidity",draft:!1,tags:[],version:"current",frontMatter:{title:"\uc720\ub3d9\uc131 \uc81c\uac70",date:"2021-08-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"\uc2a4\uc640\ud551(Swapping)",permalink:"/ko/docs/lake/tutorials/swapping"},next:{title:"\uc790\uc0b0 \uc815\ubcf4 \ud655\uc778",permalink:"/ko/docs/lake/tutorials/asset-info-page"}},c={},p=[],s={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'\ubc29\ubc95 1: \ud480 \ud398\uc774\uc9c0--\ud2b9\uc815 \ud480 \ud074\ub9ad-- "-"\ud074\ub9ad'),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(3505).Z,width:"2440",height:"1380"})),(0,i.kt)("p",null,'\ubc29\ubc95 2: \uc774\ubbf8 \uc2a4\uc651 \ud398\uc774\uc9c0\uc5d0 \uc788\ub294 \uacbd\uc6b0 \uc790\uc0b0 \ud480 \uc139\uc158\uc5d0\uc11c "\uc720\ub3d9\uc131 \uc81c\uac70"\ub97c \ucc3e\uc73c\uc2ed\uc2dc\uc624.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(835).Z,width:"2440",height:"1380"})),(0,i.kt)("p",null,'\ubc29\ubc95 3: \uc774\uc804\uc5d0 \uc720\ub3d9\uc131\uc744 \uc81c\uacf5\ud55c \uacbd\uc6b0 Me \ud398\uc774\uc9c0\uc5d0\uc11c \ud480\uc744 \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud480\uc744 \ud074\ub9ad\ud558\uba74 "-"\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(8719).Z,width:"2440",height:"1380"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\uc720\ub3d9\uc131 \uc81c\uac70\uc5d0 \ub300\ud55c \uc218\uc218\ub8cc\ub294 \uc5c6\uc2b5\ub2c8\ub2e4.")))}u.isMDXComponent=!0},3505:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/remove-liquidity-p1-e69baf7885b37fe2660380760d637d43.png"},835:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/remove-liquidity-p2-1b413b0d0917a21ca9b164a9322138f2.png"},8719:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/remove-liquidity-p3-f1ce981f0be742118b16f2b0f83c030c.png"}}]);