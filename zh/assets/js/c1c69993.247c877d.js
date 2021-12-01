"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5605],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,f=s["".concat(i,".").concat(k)]||s[k]||d[k]||o;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7341:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],l={title:"\u6bd4\u8f83 Lake \u548c 4swap",date:new Date("2021-07-31T15:44:07.000Z")},i=void 0,u={unversionedId:"lake/lake-and-4swap",id:"lake/lake-and-4swap",isDocsHomePage:!1,title:"\u6bd4\u8f83 Lake \u548c 4swap",description:"4swap \u662f\u4e00\u79cd\u5f00\u653e\u534f\u8bae\uff0c\u4e3a Mixin MTG\u7ec4\u63d0\u4f9b\u53bb\u4e2d\u5fc3\u5316\u6d41\u52a8\u6027\u548c\u4ea4\u6362\u670d\u52a1\u7684\u57fa\u7840\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-developer/current/lake/lake-and-4swap.md",sourceDirName:"lake",slug:"/lake/lake-and-4swap",permalink:"/zh/developer/lake/lake-and-4swap",version:"current",lastUpdatedAt:1636868787,formattedLastUpdatedAt:"11/14/2021",frontMatter:{title:"\u6bd4\u8f83 Lake \u548c 4swap",date:"2021-07-31T15:44:07.000Z"},sidebar:"docs",previous:{title:"\u64cd\u4f5c\u534f\u8bae",permalink:"/zh/developer/lake/action-protocol"},next:{title:"\u603b\u89c8",permalink:"/zh/developer/leaf/overview"}},c=[{value:"4swap",id:"4swap",children:[]},{value:"Pando Lake",id:"pando-lake",children:[{value:"\u4e0e Pando Lake \u6574\u5408",id:"\u4e0e-pando-lake-\u6574\u5408",children:[]}]}],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4swap")," \u662f\u4e00\u79cd\u5f00\u653e\u534f\u8bae\uff0c\u4e3a Mixin MTG\u7ec4\u63d0\u4f9b\u53bb\u4e2d\u5fc3\u5316\u6d41\u52a8\u6027\u548c\u4ea4\u6362\u670d\u52a1\u7684\u57fa\u7840\u3002"),(0,o.kt)("h2",{id:"4swap"},"4swap"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4swap Broker")," \u662f\u7528\u6237\u4e0e 4swap \u534f\u8bae\u4ea4\u4e92\u7684\u63a5\u53e3\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4broker\u662f 4swap Mixin Messenger bot\uff08ID\uff1a7000103537\uff09\u3002 \u5982\u679c\u60a8\u672a\u5728\u8bf7\u6c42\u4e2d\u6307\u5b9abroker ID\uff0c\u5219\u6709\u5173\u8d44\u4ea7\u79cd\u7c7b\u3001\u4ea4\u6613\u5bf9\u3001\u5e02\u573a\u6570\u636e\u3001\u8ba2\u5355\u6570\u636e\u90fd\u5c06\u7531\u8be5broker\u54cd\u5e94\u3002"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"https://4swap.org"},"https://4swap.org")," \u8bbf\u95ee\u8be5broker\u7684 Web \u754c\u9762\u3002"),(0,o.kt)("h2",{id:"pando-lake"},"Pando Lake"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pando Lake")," \u662f\u7531 Pando \u6258\u7ba1\u7684 4swap broker\u3002"),(0,o.kt)("p",null,"Pando Lake \u8fc7\u6ee4\u5e02\u573a\u4fe1\u606f\uff0c\u4ee5\u4ec5\u663e\u793a\u5177\u6709\u826f\u597d\u6d41\u52a8\u6027\u5e76\u6709\u53ef\u9760\u793e\u533a\u652f\u6301\u7684\u4ea4\u6613\u5bf9\u548c\u5e02\u573a\u3002"),(0,o.kt)("p",null,"Pando Lake \u6709\u4e00\u4e2a\u5355\u72ec\u7684 Mixin Messenger bot\uff08id\uff1a7000103937\uff09\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"https://lake.pando.im"},"https://lake.pando.im")," \u8bbf\u95ee\u5176 Web \u754c\u9762\u3002"),(0,o.kt)("p",null,"LP Token\u5728 Pando Lake \u548c 4swap \u4e4b\u95f4\u5171\u4eab\u3002"),(0,o.kt)("h3",{id:"\u4e0e-pando-lake-\u6574\u5408"},"\u4e0e Pando Lake \u6574\u5408"),(0,o.kt)("p",null,"Pando Lake\u7684broker id\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"5dbdb169-d56d-4b5b-b066-9b0780691b14"),"\uff0c\u901a\u5e38\u7528\u4e8e\u8bf7\u6c42\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6388\u6743\u5230 Lake")),(0,o.kt)("p",null,"\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/oauth"),"\u5bf9\u94b1\u5305\u8fdb\u884c\u6388\u6743\u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u4e24\u4e2a\u53c2\u6570",(0,o.kt)("inlineCode",{parentName:"p"},"broker_id"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"label"),"\uff0c\u5176\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"label")," \u5e94\u8be5\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u201clake\u201d\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5176\u4ed6 API")),(0,o.kt)("p",null,"\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"broker_id")," \u5e94\u9644\u52a0\u5230\u4ee5\u4e0b API \u8bf7\u6c42\u7684\u67e5\u8be2\u6216\u8f7d\u8377\u4e2d\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"POST /api/actions\uff0c\u5b83\u4f1a\u751f\u6210\u4e00\u4e2a\u53ef\u4ee5\u53d1\u9001\u5230 Pando Lake \u7684\u8f6c\u8d26\u3002"),(0,o.kt)("li",{parentName:"ul"},"GET /api/pairs\uff0c\u5b83\u5c06\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"li"},"whitelists")," \u5b57\u6bb5\u54cd\u5e94\uff0c\u5176\u4e2d\u5305\u542b Pando Lake \u652f\u6301\u7684\u8d44\u4ea7 ID\u3002")))}s.isMDXComponent=!0}}]);