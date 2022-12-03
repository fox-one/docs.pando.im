"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(m,p(p({ref:t},s),{},{components:n})):a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"\u521b\u5efa\u91d1\u5e93",date:new Date("2021-08-13T12:33:07.000Z")},p=void 0,l={unversionedId:"leaf/tutorials/open-vault",id:"leaf/tutorials/open-vault",title:"\u521b\u5efa\u91d1\u5e93",description:"\u5728Pando Leaf\u201d\u4e2a\u4eba\u9875\u9762\u201c\u4e2d\uff0c\u70b9\u51fb\u6dfb\u52a0\u91d1\u5e93\u6765\u521b\u5efa\u4e00\u4e2a\u91d1\u5e93\uff0c\u7136\u540e\u6839\u636e\u60a8\u7684\u9700\u6c42\u4ece\u53ef\u9009\u91d1\u5e93\u7c7b\u578b\u4e2d\u8fdb\u884c\u9009\u62e9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/leaf/tutorials/open-vault.md",sourceDirName:"leaf/tutorials",slug:"/leaf/tutorials/open-vault",permalink:"/zh/docs/leaf/tutorials/open-vault",draft:!1,tags:[],version:"current",frontMatter:{title:"\u521b\u5efa\u91d1\u5e93",date:"2021-08-13T12:33:07.000Z"},sidebar:"docs",previous:{title:"\u5f00\u59cb\u4f7f\u7528",permalink:"/zh/docs/leaf/tutorials/get-started"},next:{title:"\u7ba1\u7406\u91d1\u5e93",permalink:"/zh/docs/leaf/tutorials/manage-vault"}},i={},c=[],s={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728Pando Leaf\u201d\u4e2a\u4eba\u9875\u9762\u201c\u4e2d\uff0c\u70b9\u51fb\u6dfb\u52a0",(0,r.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/leaf/key-concepts/vaults"},"\u91d1\u5e93"),"\u6765\u521b\u5efa\u4e00\u4e2a\u91d1\u5e93\uff0c\u7136\u540e\u6839\u636e\u60a8\u7684\u9700\u6c42\u4ece\u53ef\u9009\u91d1\u5e93\u7c7b\u578b\u4e2d\u8fdb\u884c\u9009\u62e9\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(196).Z,width:"2440",height:"1380"})),(0,r.kt)("p",null,'\u70b9\u51fb"+"\uff0c\u60a8\u5c06\u8df3\u8f6c\u5230\u53ef\u4ee5\u521b\u5efa\u6307\u5b9a\u91d1\u5e93\u7684\u9875\u9762\u3002'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3448).Z,width:"2440",height:"1380"})),(0,r.kt)("p",null,"\u5728\u76f8\u5e94\u7684\u94f8\u5e01\u9875\u9762\uff0c \u5206\u522b\u586b\u5165\u4f60\u6253\u7b97\u5b58\u5165\u7684\u8d44\u4ea7\u6570\u91cf\u548c\u60f3\u8981\u751f\u6210\u7684\u8d44\u4ea7\u6570\u91cf"),(0,r.kt)("p",null,":::\u63d0\u793a\n\u9996\u6b21\u521b\u5efa\u91d1\u5e93\u65f6\uff0c\u6700\u5c11\u9700\u8981\u751f\u6210100 pUSD\u3002\n::::"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4649).Z,width:"2440",height:"1380"})),(0,r.kt)("p",null,'\u70b9\u51fb\u6309\u94ae"\u5b58\u5165\u8d44\u4ea7\u4ee5\u751f\u6210"\uff0c\u53d1\u8d77\u652f\u4ed8\uff0c\u7b49\u5f85\u673a\u5668\u4eba\u5904\u7406\u3002'),(0,r.kt)("p",null,"\u5982\u679c\u6210\u529f\u521b\u5efa\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/leaf/key-concepts/vaults"},"\u91d1\u5e93"),"\uff0c\u4f60\u5c06\u5728\u673a\u5668\u4eba\u5bf9\u8bdd\u6846\u4e2d\u6536\u5230\u901a\u77e5\u6d88\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7288).Z,width:"2440",height:"1380"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u52a1\u5fc5\u6ce8\u610f\u98ce\u9669\u63d0\u793a\u6761\u3002")),(0,r.kt)("p",null,"\u60a8\u5fc5\u987b\u5c06\u60a8\u7684\u62b5\u62bc\u7387\u4fdd\u6301\u5728\u4e00\u4e2a\u5b89\u5168\u8303\u56f4\u5185\uff08\u8d85\u8fc7150%\uff09\uff0c\u624d\u80fd\u907f\u514d ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/leaf/key-concepts/liquidation"},"\u88ab\u6e05\u7b97"),"\u3002 \u5f53\u4f60\u7684\u62b5\u62bc\u7387\u4f8b\u89e6\u53ca",(0,r.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/leaf/key-concepts/liquidation"},"\u6e05\u7b97\u7387")," \u4f60\u7684\u62b5\u62bc\u7269\u5c06\u88ab",(0,r.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/leaf/tutorials/auction-participation"},"\u62cd\u5356")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9113).Z,width:"2440",height:"1380"})))}u.isMDXComponent=!0},3448:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-a-vault-p2-27de54bd96f44a3a05e6392cb6da9918.png"},7288:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-a-vault-p4-7872bc355fe5cdf007774e25e61cf374.png"},9113:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-a-vault-p5-400f2785515ee9ee89b0357fe0f0a474.png"},196:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/leaf-open-vault-p1-cb53cae3b9d4d0752fba039ec26a4e4f.png"},4649:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/leaf-open-vault-p3-88ee17aede161e11586e94b8574efe75.png"}}]);