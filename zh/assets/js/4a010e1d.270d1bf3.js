"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[3227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u62b5\u62bcrTokens\u4ee5\u83b7\u5f97\u501f\u6b3e\u80fd\u529b\u3002",date:new Date("2021-09-04T12:33:07.000Z")},i=void 0,p={unversionedId:"rings/tutorials/how-to-pledge",id:"rings/tutorials/how-to-pledge",title:"\u62b5\u62bcrTokens\u4ee5\u83b7\u5f97\u501f\u6b3e\u80fd\u529b\u3002",description:"\u5982\u679c\u60a8\u60f3\u501f\u6b3e\uff0c\u60a8\u9700\u8981\u5728\u62b5\u62bc\u652f\u6301\u673a\u5236\u7684\u57fa\u7840\u4e0a\u5728Pando Rings\u4e2d\u501f\u6b3e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/rings/tutorials/how-to-pledge.md",sourceDirName:"rings/tutorials",slug:"/rings/tutorials/how-to-pledge",permalink:"/zh/docs/rings/tutorials/how-to-pledge",draft:!1,tags:[],version:"current",frontMatter:{title:"\u62b5\u62bcrTokens\u4ee5\u83b7\u5f97\u501f\u6b3e\u80fd\u529b\u3002",date:"2021-09-04T12:33:07.000Z"},sidebar:"docs",previous:{title:"\u5411Pando Rings\u4f9b\u5e94\u8d44\u4ea7",permalink:"/zh/docs/rings/tutorials/how-to-supply"},next:{title:"\u53d6\u6d88\u62b5\u62bc\u4ee5\u51cf\u5c11\u62b5\u62bc\u54c1",permalink:"/zh/docs/rings/tutorials/how-to-unpledge"}},l={},s=[],c={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u501f\u6b3e\uff0c\u60a8\u9700\u8981\u5728\u62b5\u62bc\u652f\u6301\u673a\u5236\u7684\u57fa\u7840\u4e0a\u5728Pando Rings\u4e2d\u501f\u6b3e\u3002"),(0,o.kt)("p",null,"\u62b5\u62bc\u540e\uff0c\u60a8\u4ece\u4f9b\u5e94\u4e2d\u83b7\u5f97\u7684rTokens\u5c06\u88ab\u9501\u5b9a\u5728\u7cfb\u7edf\u4e2d\u3002 \u60a8\u5c06\u65e0\u6cd5\u5c06\u60a8\u62b5\u62bc\u7684rToken\u8f6c\u8ba9\u7ed9\u5176\u4ed6\u4eba\uff0c\u4f46\u60a8\u4ecd\u7136\u53ef\u4ee5\u4ece\u60a8\u62b5\u62bc\u7684\u76f8\u5e94\u4ee4\u724c\u4e2d\u83b7\u5f97\u4f9b\u5e94\u6743\u76ca\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},'\u624b\u52a8"\u62b5\u62bc"\u548c\u4e00\u7ad9\u5f0f"\u4f9b\u5e94\u548c\u62b5\u62bc"\u4e4b\u95f4\u7684\u5dee\u5f02')),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u624b\u52a8\u62b5\u62bc\uff0c\u60a8\u53ef\u4ee5\u51b3\u5b9a\u8981\u62b5\u62bc\u7684\u4f9b\u5e94\u8d44\u4ea7\u7684\u767e\u5206\u6bd4\u3002 \u76f8\u6bd4\u4e4b\u4e0b\uff0c\u5982\u679c\u60a8\u9009\u62e9\u4f7f\u7528\u4e00\u7ad9\u5f0f\u4f9b\u5e94\u548c\u62b5\u62bc\u529f\u80fd(\u53ef\u4ee5\u4ece\u4f9b\u5e94\u9875\u9762\u548c\u501f\u6b3e\u9875\u9762\u8bbf\u95ee)\uff0c\u7cfb\u7edf\u5c06\u5728\u60a8\u4f9b\u5e94\u7684\u540c\u65f6\u62b5\u62bc100%\u7684rTokens\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u53d1\u751f\u4e0d\u5e78\u65f6\u60a8\u62b5\u62bc\u7684\u8d44\u4ea7\u4ef7\u503c\u65e0\u6cd5\u8986\u76d6\u60a8\u7684\u501f\u6b3e\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u60a8\u7684"),"\u6240\u6709**\u8d28\u62bc\u8d44\u4ea7\u90fd\u5c06\u53d7\u5230\u6e05\u7b97",(0,o.kt)("a",{parentName:"p",href:"../key-concepts/liquidation"},"liquidation"),"\uff0c\u800c\u60a8\u672a\u62b5\u62bc\u7684\u8d44\u4ea7\u5c06\u4fdd\u6301\u4e0d\u53d8\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u662f\u901a\u8fc7\u62b5\u62bc\u66f4\u591a\u62b5\u62bc\u7269\u83b7\u5f97\u66f4\u591a\u501f\u8d37\u80fd\u529b\uff0c\u8fd8\u662f\u53ea\u62b5\u62bc\u90e8\u5206\u62b5\u62bc\u7269\u8fdb\u884c\u98ce\u9669\u9694\u79bb\uff0c\u8fd9\u53d6\u51b3\u4e8e\u60a8\u5728\u4e24\u8005\u4e4b\u95f4\u7684\u6743\u8861\u3002")),(0,o.kt)("p",null,"\u8fdb\u884c\u62b5\u62bc\u65f6\uff0c\u60a8\u53ef\u4ee5\u5355\u51fb\u201c\u6211\u7684\u201d\u9875\u9762\u4e0a\u201c\u4f9b\u5e94\u201d\u90e8\u5206\u7684\u5df2\u4f9b\u5e94\u8d44\u4ea7\u5361\u3002"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u62d6\u52a8\u8fdb\u5ea6\u6761\u6765\u51b3\u5b9a\u8981\u62b5\u62bc\u7684\u767e\u5206\u6bd4\u3002 \u968f\u7740\u91d1\u989d\u7684\u53d8\u5316\uff0c\u8d37\u6b3e\u98ce\u9669\u6307\u6807\u72b6\u6001\u4e5f\u4f1a\u76f8\u5e94\u53d1\u751f\u53d8\u5316\u3002 \u5efa\u8bae\u60a8\u5728\u62b5\u62bc\u540e\u5bc6\u5207\u5173\u6ce8\u76f8\u5173\u6307\u6807\uff0c\u4ee5\u76d1\u63a7\u8d37\u6b3e\u7684\u98ce\u9669\u9884\u6d4b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5347).Z,width:"2336",height:"1568"})))}u.isMDXComponent=!0},5347:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pledge1-248a233152ab2e21b0f43ce4699ecde7.jpg"}}]);