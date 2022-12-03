"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[7367],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>w});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=u(n),h=o,w=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return n?r.createElement(w,i(i({ref:e},d),{},{components:n})):r.createElement(w,i({ref:e},d))}));function w(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2650:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Withdrawing assets from Pando Rings",date:new Date("2021-09-04T12:33:07.000Z")},i=void 0,s={unversionedId:"rings/tutorials/how-to-withdraw",id:"rings/tutorials/how-to-withdraw",title:"Withdrawing assets from Pando Rings",description:"When you want to get back the asset you supplied to the market, you will need to withdraw. After withdrawing, you will stop earning supply interest.",source:"@site/docs/rings/tutorials/how-to-withdraw.md",sourceDirName:"rings/tutorials",slug:"/rings/tutorials/how-to-withdraw",permalink:"/docs/rings/tutorials/how-to-withdraw",draft:!1,tags:[],version:"current",frontMatter:{title:"Withdrawing assets from Pando Rings",date:"2021-09-04T12:33:07.000Z"},sidebar:"docs",previous:{title:"Repaying your borrow in Pando Rings",permalink:"/docs/rings/tutorials/how-to-repay"},next:{title:"Checking market statistics",permalink:"/docs/rings/tutorials/check-market-stats"}},l={},u=[],d={toc:u};function p(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you want to get back the asset you supplied to the market, you will need to withdraw. After withdrawing, you will stop earning supply interest. "),(0,o.kt)("p",null,'Click on the supplied asset card on the Me page, then click on "Withdraw", you will then land on the Withdraw page. '),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Available to withdraw")," shows the amount you can withdraw. It is the sum of your unpledged asset amount and the pledged amount that is not covering borrows. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Unpledged")," shows your supplied but unpledged amount of a specific rToken. And ",(0,o.kt)("strong",{parentName:"p"},"Supplying")," shows your supply amount of the asset.  "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5234).Z,width:"2336",height:"1588"})),(0,o.kt)("p",null,"The system prioritizes withdrawing from the unpledged amount. "),(0,o.kt)("p",null,"If the amount you intend to withdraw is not more than your unpledged amount, the system will withdraw directly from the unpledged amount. "),(0,o.kt)("p",null,"If you do have unpledged amount and the amount you intend to withdraw is more than the unpledged, you will need to first unpledge certain amount then withdraw all the the unpledged amount to receive it in your wallet. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2888).Z,width:"2336",height:"1568"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You may need ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/leaf/key-concepts/pando-seed"},"pando seed")," to assist in this operation.")),(0,o.kt)("p",null,"If you don't have any unpledged amount left and your pledged amount is not fully covering borrows, the system will directly withdraw for you from your pledged amount, finishing withdrawing in just one step."),(0,o.kt)("p",null,"If you have outstanding borrow, it is possible that you cannot withdraw the same amount you have supplied. In this case, please return part or total amount of your borrow first. "),(0,o.kt)("p",null,"Please be noted that, if you have outstanding borrow, withdrawing from your pledged amount, or in other words, unpledging rTokens, will reduce your borrow capacity (borrow limit), affecting your loan risk level. The reasoning behind is, because your borrow stays the same, when your borrow limit decreases, your borrow will take a bigger percentage of your borrow limit. Please be cautious with your withdrawing and avoid ",(0,o.kt)("a",{parentName:"p",href:"../key-concepts/liquidation"},"liquidation")," of your pledged assets."))}p.isMDXComponent=!0},5234:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/withdraw1-09247b03d670eff4df6959d9dabd58af.jpg"},2888:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/withdraw2-0d041f2b4dc5f17d72b7c8130d256c89.jpg"}}]);