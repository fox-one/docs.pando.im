"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9736],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>w});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),p=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(r),f=n,w=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return r?a.createElement(w,i(i({ref:e},u),{},{components:r})):a.createElement(w,i({ref:e},u))}));function w(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5412:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Withdrawing Collateral",date:new Date("2021-08-13T12:33:07.000Z")},i=void 0,l={unversionedId:"leaf/tutorials/withdraw",id:"leaf/tutorials/withdraw",title:"Withdrawing Collateral",description:'To withdraw collateral from a Vault and return it to the wallet, click "Withdraw" to proceed.',source:"@site/docs/leaf/tutorials/withdraw.md",sourceDirName:"leaf/tutorials",slug:"/leaf/tutorials/withdraw",permalink:"/docs/leaf/tutorials/withdraw",draft:!1,tags:[],version:"current",frontMatter:{title:"Withdrawing Collateral",date:"2021-08-13T12:33:07.000Z"},sidebar:"docs",previous:{title:"Paying Back pUSD",permalink:"/docs/leaf/tutorials/payback"},next:{title:"Participating in the Auction",permalink:"/docs/leaf/tutorials/auction-participation"}},c={},p=[],u={toc:p};function s(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'To withdraw collateral from a Vault and return it to the wallet, click "Withdraw" to proceed. '),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(2033).Z,width:"2440",height:"1380"})),(0,n.kt)("p",null,"Enter the amount you want to\nwithdraw, click withdarw, and\nEnter PIN, the ETH collateral reduce from 4.7947 to 1.7947. You can also see details about this withdraw in chat window."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(8682).Z,width:"2440",height:"1380"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please be noted that withdrawing collateral without first paying back your generated pUSD will result in a lower collateralization ratio and putting the Vault at higher risk for liquidation.")))}s.isMDXComponent=!0},2033:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/leaf-withdraw-p1-eb0237f6b2445ab6572c47ff9b94643f.png"},8682:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/leaf-withdraw-p2-d09052f54da4616702387ec75a49893f.png"}}]);