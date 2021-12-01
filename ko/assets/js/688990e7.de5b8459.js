"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[3103],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4973:function(e,n,t){t.d(n,{Z:function(){return p},I:function(){return s}});var r=t(7294),i=/{\w+}/g,o="{}";function a(e,n){var t=[],a=e.replace(i,(function(e){var i=e.substr(1,e.length-2),a=null==n?void 0:n[i];if(void 0!==a){var l=r.isValidElement(a)?a:String(a);return t.push(l),o}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?a.split(o).reduce((function(e,n,r){var i;return e.concat(n).concat(null!==(i=t[r])&&void 0!==i?i:"")}),""):a.split(o).reduce((function(e,n,i){return[].concat(e,[r.createElement(r.Fragment,{key:i},n,t[i])])}),[])}function l(e){var n=e.children,t=e.values;if("string"!=typeof n)throw console.warn("Illegal <Interpolate> children",n),new Error("The Docusaurus <Interpolate> component only accept simple string values");return a(n,t)}var c=t(7529);function u(e){var n,t=e.id,r=e.message;return null!==(n=c[null!=t?t:r])&&void 0!==n?n:r}function s(e,n){var t,r=e.message;return a(null!==(t=u({message:r,id:e.id}))&&void 0!==t?t:r,n)}function p(e){var n,t=e.children,i=e.id,o=e.values;if("string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");var a=null!==(n=u({message:t,id:i}))&&void 0!==n?n:t;return r.createElement(l,{values:o},a)}},2008:function(e,n,t){t.d(n,{M:function(){return u}});var r=t(7294),i="container_2Pz7",o="title_24BA",a="subtitle_2vvR",l="msg_3ZE1",c=t(4973);function u(e){var n=e.msg,t="";return n&&(t=r.createElement("div",{className:l},n)),r.createElement("div",{className:i},r.createElement("div",{className:o},r.createElement(c.Z,null,"This Article needs additional information.")),r.createElement("div",{className:a},r.createElement(c.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(c.Z,null,"polishing the content"))),t)}},1178:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=t(2008),l=["components"],c={title:"\uc720\ub3d9\uc131 \uacf5\uae09\uc5d0 \uc2e4\ud328\ud55c \uc774\uc720\ub294 \ubb34\uc5c7\uc785\ub2c8\uae4c?",date:new Date("2021-08-15T22:33:07.000Z")},u=void 0,s={unversionedId:"lake/faqs/why-providing-liquidity-fail",id:"lake/faqs/why-providing-liquidity-fail",isDocsHomePage:!1,title:"\uc720\ub3d9\uc131 \uacf5\uae09\uc5d0 \uc2e4\ud328\ud55c \uc774\uc720\ub294 \ubb34\uc5c7\uc785\ub2c8\uae4c?",description:"\uc720\ub3d9\uc131 \uc8fc\uc785\uc758 \uc77c\ubc18\uc801\uc778 \uc2e4\ud328\ub294 \ucd08\uacfc \uc2ac\ub9ac\ud53c\uc9c0(exceeding slippage) \uc5d0 \uc758\ud574 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ucd5c\uc2e0 \uac70\ub798 \ud398\uc5b4 \ub370\uc774\ud130\ub97c \uc5bb\uc73c\ub824\uba74 \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce68\ud558\uc138\uc694.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/lake/faqs/why-providing-liquidity-fail.md",sourceDirName:"lake/faqs",slug:"/lake/faqs/why-providing-liquidity-fail",permalink:"/ko/docs/lake/faqs/why-providing-liquidity-fail",version:"current",frontMatter:{title:"\uc720\ub3d9\uc131 \uacf5\uae09\uc5d0 \uc2e4\ud328\ud55c \uc774\uc720\ub294 \ubb34\uc5c7\uc785\ub2c8\uae4c?",date:"2021-08-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"\ub0b4 \uac70\ub798\uac00 \uc2e4\ud328\ud55c \uc774\uc720\ub294 \ubb34\uc5c7\uc785\ub2c8\uae4c?",permalink:"/ko/docs/lake/faqs/why-transaction-fail"},next:{title:"\uc720\ub3d9\uc131 \ubcf4\uc0c1\uc740 \uc5b4\ub514\uc11c \ubcfc \uc218 \uc788\ub098\uc694?",permalink:"/ko/docs/lake/faqs/where-can-I-see-liquidity-reward"}},p=[],f={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(a.M,{mdxType:"Improvement"}),(0,o.kt)("p",null,"\uc720\ub3d9\uc131 \uc8fc\uc785\uc758 \uc77c\ubc18\uc801\uc778 \uc2e4\ud328\ub294 \ucd08\uacfc \uc2ac\ub9ac\ud53c\uc9c0(exceeding slippage) \uc5d0 \uc758\ud574 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ucd5c\uc2e0 \uac70\ub798 \ud398\uc5b4 \ub370\uc774\ud130\ub97c \uc5bb\uc73c\ub824\uba74 \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce68\ud558\uc138\uc694."),(0,o.kt)("p",null,"\uc720\ub3d9\uc131\uc744 \uc8fc\uc785\ud560 \ub54c \ub9e4\uc6b0 \uc911\uc694\ud55c \uc6d0\uce59\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc8fc\uc785 \ud589\ub3d9\uc774 \ud604\uc7ac \uac70\ub798 \ud398\uc5b4\uc758 \uac00\uaca9\uc744 \ubcc0\uacbd\ud574\uc11c\ub294 \uc548 \ub41c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub530\ub77c\uc11c \uc720\ub3d9\uc131\uc744 \uc8fc\uc785\ud560 \ub54c\ub3c4 \uc2ac\ub9ac\ud53c\uc9c0(slippage) \ub77c\ub294 \uac1c\ub150\uc774 \uc791\ub3d9\ud569\ub2c8\ub2e4. \uc720\ub3d9\uc131\uc744 \uc8fc\uc785\ud560 \ub54c \ub2e4\ub978 \uc0ac\ub78c\uc758 \uac70\ub798 \ud589\uc704\uc5d0 \ub530\ub77c \uc720\ub3d9\uc131 \ud480\uc5d0 \uc788\ub294 \uc790\uc0b0\uc758 \ube44\uc728\uc774 \ubcc0\uacbd\ub429\ub2c8\ub2e4. \ud639\uc740 \ub354 \uc77c\ubc18\uc801\uc778 \uc758\ubbf8\uc5d0\uc11c \ub9d0\ud558\uc790\uba74 \uac70\ub798\ub85c \uc778\ud574 \uc720\ub3d9\uc131 \ud480\uc758 \uac00\uaca9 \ubcc0\uacbd\uc774 \ubc1c\uc0dd\ud55c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \uadf8\uac83\ub3c4 \uc544\uc8fc \ud06c\uac8c \ub9d0\uc785\ub2c8\ub2e4. \uc8fc\uc785\ub41c \uc790\uc0b0\uacfc \ud604\uc7ac \uc720\ub3d9\uc131 \ud480 \ube44\uc728 \uc0ac\uc774\uc5d0\ub294 \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ucc28\uc774\uac00 \uc77c\uc815 \ube44\uc728\uc744 \ucd08\uacfc\ud558\uba74 \uc720\ub3d9\uc131 \uc8fc\uc785\uc774 \uc2e4\ud328\ud569\ub2c8\ub2e4. \uc989, \uc2ac\ub9ac\ud53c\uc9c0 \ucd08\uacfc\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc720\ub3d9\uc131 \uc8fc\uc785\uc5d0 \uc2e4\ud328\ud558\ub294 \ub610 \ub2e4\ub978 \uc0c1\ud669\uc740 \ud22c\uc785\ub41c \ub450 \uc790\uc0b0\uc774 \ub108\ubb34 \uc791\uc544\uc11c \ucd5c\uc18c LP \uc8fc\uc2dd\uc744 \uc5bb\uc744 \uc218 \uc5c6\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774 \ub610\ud55c \uc720\ub3d9\uc131 \uc8fc\uc785 \uc2e4\ud328\ub85c \uc774\uc5b4\uc9c8 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uac70\ub798\uac00 \uc2e4\ud328\ud558\ub294 \ub2e4\ub978 \uc0c1\ud669\uc774 \ubc1c\uc0dd\ud558\uba74 \ucee4\ubba4\ub2c8\ud2f0 \uad00\ub9ac\uc790-Chris(ID: 37160854) \uc5d0\uac8c \uc5f0\ub77d\ud558\uac70\ub098 Pando Lake official \ucee4\ubba4\ub2c8\ud2f0(ID: 7000103578) \uc5d0 \uc9c8\ubb38\ud558\uc2ed\uc2dc\uc624."))}d.isMDXComponent=!0}}]);