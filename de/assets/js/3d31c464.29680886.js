"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[4866],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),f=n,y=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return a?r.createElement(y,l(l({ref:t},p),{},{components:a})):r.createElement(y,l({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2078:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={title:"Paying Back pUSD",date:new Date("2021-08-13T12:33:07.000Z")},l=void 0,i={unversionedId:"leaf/tutorials/payback",id:"leaf/tutorials/payback",title:"Paying Back pUSD",description:"Paying back pUSD is useful when wanting to save a Vault from being liquidated, or the Vault owner wants to decrease the size of their position or to free up the collateral.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/leaf/tutorials/payback.md",sourceDirName:"leaf/tutorials",slug:"/leaf/tutorials/payback",permalink:"/de/docs/leaf/tutorials/payback",draft:!1,tags:[],version:"current",frontMatter:{title:"Paying Back pUSD",date:"2021-08-13T12:33:07.000Z"},sidebar:"docs",previous:{title:"Add Collateral",permalink:"/de/docs/leaf/tutorials/add-collateral"},next:{title:"Withdrawing Collateral",permalink:"/de/docs/leaf/tutorials/withdraw"}},c={},s=[],p={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Paying back pUSD is useful when wanting to save a Vault from being liquidated, or the Vault owner wants to decrease the size of their position or to free up the collateral."),(0,n.kt)("p",null,'To pay back, click on "Pay back" to land on the Pay Back page. Fill in the amount you intend to pay back manually or click "Set Max" to pay off all the debts.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6359).Z,width:"2440",height:"1380"})),(0,n.kt)("p",null,"The debt reduce from 13000 to 12000 pusd after repaying the pusd, and you can also see the details of this repayment in the chat window."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1130).Z,width:"2440",height:"1380"})),(0,n.kt)("p",null,'Please be noted that when you click "Set Max", you will be charged slightly higher than the outstanding debt amount to successfully pay off the debt because the interests are calculated and added to the debt real-time. Any excess amount after the payment will be returned to your wallet.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7898).Z,width:"2440",height:"1380"})))}u.isMDXComponent=!0},6359:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/leaf-payback-p1-824e19000434428ffa49e99c323a2a5c.png"},1130:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/leaf-payback-p2-6c2aecf69dd7a0cce54808f100890bdd.png"},7898:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/payback-p2-b1941e84d9eb4b49e379ddfa80a611f3.png"}}]);