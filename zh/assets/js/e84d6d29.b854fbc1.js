"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9112],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4973:function(e,t,n){n.d(t,{Z:function(){return u},I:function(){return p}});var r=n(7294),a=/{\w+}/g,o="{}";function l(e,t){var n=[],l=e.replace(a,(function(e){var a=e.substr(1,e.length-2),l=null==t?void 0:t[a];if(void 0!==l){var i=r.isValidElement(l)?l:String(l);return n.push(i),o}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?l.split(o).reduce((function(e,t,r){var a;return e.concat(t).concat(null!==(a=n[r])&&void 0!==a?a:"")}),""):l.split(o).reduce((function(e,t,a){return[].concat(e,[r.createElement(r.Fragment,{key:a},t,n[a])])}),[])}function i(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return l(t,n)}var c=n(7529);function s(e){var t,n=e.id,r=e.message;return null!==(t=c[null!=n?n:r])&&void 0!==t?t:r}function p(e,t){var n,r=e.message;return l(null!==(n=s({message:r,id:e.id}))&&void 0!==n?n:r,t)}function u(e){var t,n=e.children,a=e.id,o=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var l=null!==(t=s({message:n,id:a}))&&void 0!==t?t:n;return r.createElement(i,{values:o},l)}},2008:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(7294),a="container_2Pz7",o="title_24BA",l="subtitle_2vvR",i="msg_3ZE1",c=n(4973);function s(e){var t=e.msg,n="";return t&&(n=r.createElement("div",{className:i},t)),r.createElement("div",{className:a},r.createElement("div",{className:o},r.createElement(c.Z,null,"This Article needs additional information.")),r.createElement("div",{className:l},r.createElement(c.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(c.Z,null,"polishing the content"))),n)}},2995:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(2008),i=["components"],c={title:"\u8bcd\u6c47\u8868",sidebar_position:5,date:new Date("2021-08-13T12:33:07.000Z")},s=void 0,p={unversionedId:"leaf/key-concepts/glossary",id:"leaf/key-concepts/glossary",isDocsHomePage:!1,title:"\u8bcd\u6c47\u8868",description:"\u57fa\u672c\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/leaf/key-concepts/glossary.md",sourceDirName:"leaf/key-concepts",slug:"/leaf/key-concepts/glossary",permalink:"/zh/docs/leaf/key-concepts/glossary",version:"current",sidebarPosition:5,frontMatter:{title:"\u8bcd\u6c47\u8868",sidebar_position:5,date:"2021-08-13T12:33:07.000Z"},sidebar:"docs",previous:{title:"Pando Seed",permalink:"/zh/docs/leaf/key-concepts/pando-seed"},next:{title:"\u4ec0\u4e48\u662f Pando Rings\uff1f",permalink:"/zh/docs/rings/intro"}},u=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",children:[]},{value:"\u91d1\u5e93\u76f8\u5173",id:"\u91d1\u5e93\u76f8\u5173",children:[]},{value:"\u6e05\u7b97\u76f8\u5173",id:"\u6e05\u7b97\u76f8\u5173",children:[]},{value:"\u5e02\u573a\u6570\u636e\u76f8\u5173",id:"\u5e02\u573a\u6570\u636e\u76f8\u5173",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.M,{mdxType:"Improvement"}),(0,o.kt)("h3",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.pando.im/docs/leaf/key-concepts/vaults"},"\u91d1\u5e93")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.pando.im/docs/leaf/tutorials/add-collateral"},"\u62b5\u62bc\u54c1")),(0,o.kt)("li",{parentName:"ol"},"\u94f8\u5e01"),(0,o.kt)("li",{parentName:"ol"},"\u503a\u52a1")),(0,o.kt)("h3",{id:"\u91d1\u5e93\u76f8\u5173"},"\u91d1\u5e93\u76f8\u5173"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.pando.im/docs/leaf/tutorials/add-collateral"},"\u5b58\u5165")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.pando.im/docs/leaf/tutorials/withdraw"},"\u53d6\u56de")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.pando.im/docs/leaf/tutorials/generate-more"},"\u94f8\u5e01")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.pando.im/docs/leaf/tutorials/payback"},"\u8fd8\u6b3e")),(0,o.kt)("li",{parentName:"ol"},"\u62b5\u62bc\u7387"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.pando.im/docs/leaf/key-concepts/liquidation/liquidation-ratio"},"\u6700\u4f4e\u62b5\u62bc\u7387\uff08\u6e05\u7b97\u7387\uff09")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.pando.im/docs/leaf/key-concepts/liquidation/liquidation-price"},"\u6e05\u7b97\u4ef7\u683c")),(0,o.kt)("li",{parentName:"ol"},"\u7a33\u5b9a\u8d39")),(0,o.kt)("h3",{id:"\u6e05\u7b97\u76f8\u5173"},"\u6e05\u7b97\u76f8\u5173"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.pando.im/docs/leaf/key-concepts/liquidation/leaf-auction-process"},"\u62cd\u5356")),(0,o.kt)("li",{parentName:"ol"},"\u7ade\u62cd\u503a\u52a1"),(0,o.kt)("li",{parentName:"ol"},"\u7ade\u62cd\u62b5\u62bc\u7269"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.pando.im/docs/leaf/key-concepts/liquidation/liquidation-penalty"},"\u6e05\u7b97\u5904\u7f5a"))),(0,o.kt)("h3",{id:"\u5e02\u573a\u6570\u636e\u76f8\u5173"},"\u5e02\u573a\u6570\u636e\u76f8\u5173"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u603b\u62b5\u62bc\u7269"),(0,o.kt)("li",{parentName:"ol"},"\u603b\u4f9b\u5e94\u91cf"),(0,o.kt)("li",{parentName:"ol"},"\u603b\u62b5\u62bc\u7387"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.pando.im/docs/leaf/key-concepts/price-oracles"},"\u4e0b\u4e00\u4e2a\u4ef7\u683c")),(0,o.kt)("li",{parentName:"ol"},"\u6700\u5927\u53ef\u4f9b\u5e94\u91cf")))}m.isMDXComponent=!0}}]);