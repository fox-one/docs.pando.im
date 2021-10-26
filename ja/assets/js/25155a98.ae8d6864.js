"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[1348],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6911:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={title:"Leaf API\u306e\u6982\u8981",sidebar_position:1,date:new Date("2021-10-01T23:18:01.000Z")},l=void 0,c={unversionedId:"leaf/apis/overview",id:"leaf/apis/overview",isDocsHomePage:!1,title:"Leaf API\u306e\u6982\u8981",description:"Pando Lake\u30684swap\u306f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u958b\u767a\u8005\u5411\u3051\u306b\u30b7\u30f3\u30d7\u30eb\u3067\u958b\u767a\u8005\u306b\u512a\u3057\u3044API\u306e\u30bb\u30c3\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs-developer/current/leaf/apis/overview.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/overview",permalink:"/ja/developer/leaf/apis/overview",version:"current",lastUpdatedAt:1635264830,formattedLastUpdatedAt:"10/26/2021",sidebarPosition:1,frontMatter:{title:"Leaf API\u306e\u6982\u8981",sidebar_position:1,date:"2021-10-01T23:18:01.000Z"},sidebar:"docs",previous:{title:"Technical Design",permalink:"/ja/developer/leaf/design"},next:{title:"Read Info",permalink:"/ja/developer/leaf/apis/info"}},u=[{value:"API \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",id:"api-\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",children:[]}],f={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pando Lake\u30684swap\u306f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u958b\u767a\u8005\u5411\u3051\u306b\u30b7\u30f3\u30d7\u30eb\u3067\u958b\u767a\u8005\u306b\u512a\u3057\u3044API\u306e\u30bb\u30c3\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"api-\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"},"API \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Primary"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://leaf-api.pando.im/api"},"https://leaf-api.pando.im/api"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HTTP_METHOD ${API_BASE}/${API_PATH}\n")))}s.isMDXComponent=!0}}]);