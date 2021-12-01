"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[6162],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4973:function(e,t,n){n.d(t,{Z:function(){return p},I:function(){return s}});var r=n(7294),o=/{\w+}/g,a="{}";function c(e,t){var n=[],c=e.replace(o,(function(e){var o=e.substr(1,e.length-2),c=null==t?void 0:t[o];if(void 0!==c){var i=r.isValidElement(c)?c:String(c);return n.push(i),a}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?c.split(a).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):c.split(a).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function i(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return c(t,n)}var l=n(7529);function u(e){var t,n=e.id,r=e.message;return null!==(t=l[null!=n?n:r])&&void 0!==t?t:r}function s(e,t){var n,r=e.message;return c(null!==(n=u({message:r,id:e.id}))&&void 0!==n?n:r,t)}function p(e){var t,n=e.children,o=e.id,a=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var c=null!==(t=u({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(i,{values:a},c)}},2008:function(e,t,n){n.d(t,{M:function(){return u}});var r=n(7294),o="container_2Pz7",a="title_24BA",c="subtitle_2vvR",i="msg_3ZE1",l=n(4973);function u(e){var t=e.msg,n="";return t&&(n=r.createElement("div",{className:i},t)),r.createElement("div",{className:o},r.createElement("div",{className:a},r.createElement(l.Z,null,"This Article needs additional information.")),r.createElement("div",{className:c},r.createElement(l.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(l.Z,null,"polishing the content"))),n)}},3054:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=n(2008),i=["components"],l={title:"\uc5f0\uac04 \uc21c \uc218\uc775\ub960(Net APY)",date:new Date("2021-09-04T12:33:07.000Z")},u=void 0,s={unversionedId:"rings/key-concepts/net-apy",id:"rings/key-concepts/net-apy",isDocsHomePage:!1,title:"\uc5f0\uac04 \uc21c \uc218\uc775\ub960(Net APY)",description:"Net APY(\uc5f0\uac04 \uc21c \uc218\uc775\ub960) \ub294 \ud604\uc7ac\uc5f0\uac04 \uacf5\uae09 \uc218\uc775\ub960 \ubc0f \uc5f0\uac04 \ucc28\uc785 \uc218\uc775\ub960\uae30\ubc18\uc73c\ub85c \ud55c \ucd94\uc815 \uc5f0\uac04 \uc21c \uc218\uc775\ub960\uc744 \ubc18\uc601\ud569\ub2c8\ub2e4. \ud604\uc7ac \uc5f0\uac04 \uc218\uc775\ub960\ub85c \uc218\uc775\uc744 \ucc3d\ucd9c\ud558\uace0 \uc788\ub294\uc9c0 \uc544\ub2c8\uba74 \uc190\uc2e4\uc744 \ubcf4\uace0 \uc788\ub294\uc9c0\ub97c \ubc18\uc601\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/rings/key-concepts/net-apy.md",sourceDirName:"rings/key-concepts",slug:"/rings/key-concepts/net-apy",permalink:"/ko/docs/rings/key-concepts/net-apy",version:"current",frontMatter:{title:"\uc5f0\uac04 \uc21c \uc218\uc775\ub960(Net APY)",date:"2021-09-04T12:33:07.000Z"},sidebar:"docs",previous:{title:"rToken",permalink:"/ko/docs/rings/key-concepts/rtoken"},next:{title:"\ub300\ucd9c \uc704\ud5d8 \uc9c0\ud45c",permalink:"/ko/docs/rings/key-concepts/loan-risk-indicator"}},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.M,{msg:"better math formula: https://docusaurus.io/docs/markdown-features/math-equations",mdxType:"Improvement"}),(0,a.kt)("p",null,"Net APY(\uc5f0\uac04 \uc21c \uc218\uc775\ub960) \ub294 \ud604\uc7ac",(0,a.kt)("a",{parentName:"p",href:"./glossary"},"\uc5f0\uac04 \uacf5\uae09 \uc218\uc775\ub960")," \ubc0f ",(0,a.kt)("a",{parentName:"p",href:"./glossary"},"\uc5f0\uac04 \ucc28\uc785 \uc218\uc775\ub960"),"\uae30\ubc18\uc73c\ub85c \ud55c \ucd94\uc815 \uc5f0\uac04 \uc21c \uc218\uc775\ub960\uc744 \ubc18\uc601\ud569\ub2c8\ub2e4. \ud604\uc7ac \uc5f0\uac04 \uc218\uc775\ub960\ub85c \uc218\uc775\uc744 \ucc3d\ucd9c\ud558\uace0 \uc788\ub294\uc9c0 \uc544\ub2c8\uba74 \uc190\uc2e4\uc744 \ubcf4\uace0 \uc788\ub294\uc9c0\ub97c \ubc18\uc601\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc5f0\uac04 \uc21c \uc218\uc775\ub960 = ","[ \u2211(\uc790\uc0b0\uc758 \uacf5\uae09\ub7c9 x \uc790\uc0b0\uc758 \uc5f0\uac04 \uacf5\uae09 \uc218\uc775\ub960) - \u2211(\uc790\uc0b0\uc758 \ucc28\uc785\ub7c9 x \uc790\uc0b0\uc758 \uc5f0\uac04 \ucc28\uc785 \uc218\uc775\ub960) ]"," / \ucd1d \uacf5\uae09\ub7c9"),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, BTC\uc640 ETH\ub77c\ub294 \ub450 \uac00\uc9c0 \uc790\uc0b0\uc744 \uc81c\uacf5\ud558\uc5ec ",(0,a.kt)("a",{parentName:"p",href:"/docs/leaf/pusd"},"pUSD")," \ubc0f USDC\uc758 \ub450 \uc790\uc0b0\uc744 \ube4c\ub838\uc2b5\ub2c8\ub2e4. \ud604\uc7ac \uc5f0\uac04 \uc21c \uc218\uc775\ub960\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n{","[(BTC \uacf5\uae09\ub7c9 ",(0,a.kt)("em",{parentName:"p"}," BTC \uc5f0\uac04 \uacf5\uae09 \uc218\uc775\ub960) + (ETH \uacf5\uae09\ub7c9 ")," ETH \uc5f0\uac04 \uacf5\uae09 \uc218\uc775\ub960)]"," - ","[(pUSD \ucc28\uc785\ub7c9 ",(0,a.kt)("em",{parentName:"p"}," pUSD \uc5f0\uac04 \ucc28\uc785 \uc218\uc775\ub960) + (USDC \ucc28\uc785\ub7c9 ")," USDC \uc5f0\uac04 \ucc28\uc785 \uc218\uc775\ub960)]","} / (BTC \uacf5\uae09\ub7c9 + ETH \uacf5\uae09\ub7c9)"))}m.isMDXComponent=!0}}]);