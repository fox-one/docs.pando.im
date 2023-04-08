"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[f]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u4ec0\u4e48\u662f Pando Leaf",date:new Date("2021-07-22T22:33:07.000Z")},l=void 0,p={unversionedId:"leaf/intro",id:"leaf/intro",title:"\u4ec0\u4e48\u662f Pando Leaf",description:"Pando Leaf \u662f\u4e00\u4e2a\u57fa\u4e8e Mixin MTG (Mixin Trusted Group) \u6280\u672f\u6784\u5efa\u7684\u53bb\u4e2d\u5fc3\u5316\u91d1\u878d\u7f51\u7edc\uff0c \u60a8\u53ef\u4ee5\u5728\u6b64\u5b58\u5165\u62b5\u62bc\u54c1\u4ee5\u751f\u6210 Pando USD(pUSD) \u4ee5\u53ca\u5728\u507f\u8fd8pUSD\u4f59\u989d\u65f6\u9500\u6bc1\u5b83\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/leaf/intro.md",sourceDirName:"leaf",slug:"/leaf/intro",permalink:"/zh/docs/leaf/intro",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4ec0\u4e48\u662f Pando Leaf",date:"2021-07-22T22:33:07.000Z"},sidebar:"docs",previous:{title:"\u8bcd\u6c47\u8868",permalink:"/zh/docs/lake/key-concepts/glossary"},next:{title:"Pando USD",permalink:"/zh/docs/leaf/pusd"}},i={},c=[{value:"Pando Leaf\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",id:"pando-leaf\u662f\u5982\u4f55\u5de5\u4f5c\u7684",level:2},{value:"\u62cd\u5356",id:"\u62cd\u5356",level:2}],u={toc:c};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leaf.pando.im"},"Pando Leaf")," \u662f\u4e00\u4e2a\u57fa\u4e8e Mixin MTG (",(0,a.kt)("a",{parentName:"p",href:"https://developers.mixin.one/document/mainnet/mtg/exchange"},"Mixin Trusted Group"),") \u6280\u672f\u6784\u5efa\u7684\u53bb\u4e2d\u5fc3\u5316\u91d1\u878d\u7f51\u7edc\uff0c \u60a8\u53ef\u4ee5\u5728\u6b64\u5b58\u5165\u62b5\u62bc\u54c1\u4ee5\u751f\u6210 ",(0,a.kt)("a",{parentName:"p",href:"./pusd"},"Pando USD(pUSD)")," \u4ee5\u53ca\u5728\u507f\u8fd8pUSD\u4f59\u989d\u65f6\u9500\u6bc1\u5b83\u3002"),(0,a.kt)("h2",{id:"pando-leaf\u662f\u5982\u4f55\u5de5\u4f5c\u7684"},"Pando Leaf\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f"),(0,a.kt)("p",null,"\u5b58\u5165\u62b5\u62bc\u54c1\u548c\u507f\u8fd8\u751f\u6210\u7684 pUSD \u4f59\u989d\u90fd\u53d1\u751f\u5728",(0,a.kt)("strong",{parentName:"p"},"\u91d1\u5e93"),"\u4e2d\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91d1\u5e93\u4e0d\u662f\u514d\u8d39\u7684\u3002 \u751f\u6210\u7a33\u5b9a\u5e01\u9700\u8981\u652f\u4ed8\u7a33\u5b9a\u6027\u8d39\u7528\u3002 \u8981\u60f3\u6536\u56de\u62b5\u62bc\u54c1\uff0c\u7528\u6237\u5fc5\u987b\u652f\u4ed8\u4e4b\u524d\u751f\u6210\u7684\u7a33\u5b9a\u5e01\u548c\u56e0\u6b64\u7d2f\u79ef\u7684\u7a33\u5b9a\u8d39\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u91d1\u5e93\u9700\u8981\u8d85\u989d\u62b5\u62bc\u3002 \u91d1\u5e93\u6240\u6709\u8005\u5e94\u7ef4\u6301\u6e05\u7b97\u4ef7\u683c/\u6e05\u7b97\u7387\uff08\u5373\u6700\u4f4e\u62b5\u62bc\u7387\uff09\uff0c\u4ee5\u907f\u514d\u5176\u5934\u5bf8\u88ab",(0,a.kt)("strong",{parentName:"li"},"\u6e05\u7b97"),"\u3002")),(0,a.kt)("p",null,"\u5f53\u91d1\u5e93\u88ab\u6e05\u7b97\u65f6\uff0c\u5c06\u65bd\u52a0\u6e05\u7b97\u7f5a\u6b3e\u5e76\u4e14\u62b5\u62bc\u54c1\u5c06\u88ab\u51fa\u552e\u4ee5\u507f\u8fd8\u91d1\u5e93\u7684\u672a\u507f\u8fd8\u7a33\u5b9a\u5e01\u4f59\u989d\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u7684\u6280\u672f\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/developer/leaf/design"},"Pando Leaf \u6280\u672f\u8bbe\u8ba1"),"\u3002"),(0,a.kt)("h2",{id:"\u62cd\u5356"},"\u62cd\u5356"),(0,a.kt)("p",null,"\u5982\u679c\u91d1\u5e93\u8fdd\u53cd\u6700\u4f4e\u8981\u6c42\u7684\u62b5\u62bc\u7387\u5e76\u88ab\u6e05\u7b97\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u53c2\u4e0e\u62cd\u5356\u3002"),(0,a.kt)("p",null,"\u62cd\u5356\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5 \u2014\u2014 \u5728\u7b2c\u4e00\u9636\u6bb5\uff0c\u53c2\u4e0e\u8005\u4ee5\u4e0d\u4f4e\u4e8e\u524d\u4e00\u6b21\u7ade\u62cd\u91d1\u989d 3% \u7684\u589e\u91cf\u51fa\u4ef7\uff0c\u4ee5\u652f\u4ed8\u672a\u507f\u503a\u52a1\u7684\u6700\u9ad8\u91d1\u989d\u3002 \u5982\u679c\u5728 12 \u5c0f\u65f6\u5185\u6ca1\u6709\u4eba\u613f\u610f\u627f\u62c5\u5168\u90e8\u503a\u52a1\uff0c\u5219\u62cd\u5356\u7ed3\u675f\uff0c\u613f\u610f\u627f\u62c5\u6700\u9ad8\u503a\u52a1\u7684\u7ade\u62cd\u4eba\u5c06\u7ade\u5f97\u6240\u6709\u62b5\u62bc\u54c1\u3002 \u5982\u679c\u6709\u4eba\u51fa\u4ef7\u652f\u4ed8\u603b\u503a\u52a1\uff0c\u5219\u62cd\u5356\u5c06\u8fdb\u5165\u7b2c\u4e8c\u9636\u6bb5\u3002"),(0,a.kt)("p",null,"\u5728\u7b2c\u4e8c\u9636\u6bb5\uff0c\u7ade\u62cd\u8005\u4ee5\u4e0d\u4f4e\u4e8e\u524d\u4e00\u6b21\u7ade\u6807\u6570\u91cf\u7684 3% \u9012\u51cf\u7ade\u62cd\uff0c\u63a5\u53d7\u83b7\u5f97\u6700\u5c11\u7684\u62b5\u62bc\u54c1\u5e76\u652f\u4ed8\u5168\u90e8\u503a\u52a1\u3002"))}f.isMDXComponent=!0}}]);