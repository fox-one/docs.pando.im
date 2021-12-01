"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[1193],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5145:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"\uc720\ub3d9\uc131 \uc81c\uacf5",date:new Date("2021-08-15T22:33:07.000Z")},c=void 0,p={unversionedId:"lake/tutorials/providing-liquidity",id:"lake/tutorials/providing-liquidity",isDocsHomePage:!1,title:"\uc720\ub3d9\uc131 \uc81c\uacf5",description:"\uc720\ub3d9\uc131\uc744 \ucd94\uac00\ud558\ub294 \uc138 \uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/lake/tutorials/providing-liquidity.md",sourceDirName:"lake/tutorials",slug:"/lake/tutorials/providing-liquidity",permalink:"/ko/docs/lake/tutorials/providing-liquidity",version:"current",frontMatter:{title:"\uc720\ub3d9\uc131 \uc81c\uacf5",date:"2021-08-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"\uc2dc\uc791\ud558\uae30",permalink:"/ko/docs/lake/tutorials/get-started"},next:{title:"\uc2a4\uc640\ud551(Swapping)",permalink:"/ko/docs/lake/tutorials/swapping"}},u=[],s={toc:u};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc720\ub3d9\uc131\uc744 \ucd94\uac00\ud558\ub294 \uc138 \uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,'\ubc29\ubc95 1: \ud480 \ud398\uc774\uc9c0--\ud2b9\uc815 \ud480 \ud074\ub9ad-- "+"\ud074\ub9ad'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4430).Z})),(0,a.kt)("p",null,'\ubc29\ubc95 2: \uc774\ubbf8 \uc2a4\uc651 \ud398\uc774\uc9c0\uc5d0 \uc788\ub294 \uacbd\uc6b0 \uc790\uc0b0 \ud480 \uc139\uc158\uc5d0\uc11c "\uc720\ub3d9\uc131 \ucd94\uac00"\ub97c \ucc3e\uc73c\uc2ed\uc2dc\uc624.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5976).Z})),(0,a.kt)("p",null,"\ubc29\ubc95 3: \uc774\uc804\uc5d0 \uc720\ub3d9\uc131\uc744 \uc81c\uacf5\ud55c \uacbd\uc6b0 Me \ud398\uc774\uc9c0\uc5d0\uc11c \ud480\uc744 \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud480\uc744 \ud074\ub9ad\ud558\uba74 \"+'\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5249).Z})),(0,a.kt)("p",null,"\uc720\ub3d9\uc131\uc744 \ucd94\uac00\ud558\uba74 \ub300\ud654\ucc3d\uc5d0\uc11c \ud574\ub2f9 lp \ud1a0\ud070\uc744 \ubc1b\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7262).Z})),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc720\ub3d9\uc131\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uace0 LP \ud1a0\ud070\uc744 \uc5bb\uc73c\ub824\uba74 \ub450 \uac00\uc9c0 \uc720\ud615\uc758 \uc554\ud638 \ud654\ud3d0\ub97c \ub3d9\uc2dc\uc5d0 \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4. \ud558\ub098\ub9cc \ucd94\uac00\ud55c \ud6c4 \ud398\uc774\uc9c0\ub97c \uc885\ub8cc\ud558\uac70\ub098 \ucd94\uac00 \ud6c4\uc5d0\ub3c4 LP \ud1a0\ud070\uc744 \ubc1b\uc9c0 \ubabb\ud558\ub354\ub77c\ub3c4 \uac71\uc815\ud558\uc9c0 \ub9c8\uc2ed\uc2dc\uc624. \uc9c0\ubd88\ud55c \ud654\ud3d0\ub294 10\ubd84 \uc774\ub0b4\uc5d0 \ud658\ubd88\ub429\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc720\ub3d9\uc131 \ucd94\uac00\uc5d0 \ub300\ud55c \uc218\uc218\ub8cc\ub294 \uc5c6\uc2b5\ub2c8\ub2e4."))))))}d.isMDXComponent=!0},4430:function(e,t,n){t.Z=n.p+"assets/images/add-liquidity-p1-10cda9107d18b7a443dee042b147d60a.png"},5976:function(e,t,n){t.Z=n.p+"assets/images/add-liquidity-p2-4c30c1cfa6bd91dea857a14bfbe22758.png"},5249:function(e,t,n){t.Z=n.p+"assets/images/add-liquidity-p3-40f90f3f60671d40053943fbd0494d21.png"},7262:function(e,t,n){t.Z=n.p+"assets/images/add-liquidity-p4-f705b4fa9aa3d4411e435347c5a2b318.png"}}]);