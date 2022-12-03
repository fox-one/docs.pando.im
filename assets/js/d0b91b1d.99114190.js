"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[6842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),y=n,h=p["".concat(l,".").concat(y)]||p[y]||d[y]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={title:"What's Pando Rings",date:new Date("2021-07-22T22:33:07.000Z")},i=void 0,s={unversionedId:"rings/intro",id:"rings/intro",title:"What's Pando Rings",description:"Pando Rings is an algorithmic, autonomous interest rate protocol built with Mixin MTG (Mixin Trusted Group) technology. It is a place where you can lend or borrow cryptocurrencies. You can think of it as an open market for money. It lets users deposit cryptocurrencies and earn interest, or borrow other cryptoassets against them.",source:"@site/docs/rings/intro.md",sourceDirName:"rings",slug:"/rings/intro",permalink:"/docs/rings/intro",draft:!1,tags:[],version:"current",frontMatter:{title:"What's Pando Rings",date:"2021-07-22T22:33:07.000Z"},sidebar:"docs",previous:{title:"Glossary",permalink:"/docs/leaf/key-concepts/glossary"},next:{title:"Get Started",permalink:"/docs/rings/tutorials/rings-get-started"}},l={},c=[{value:"How does Pando Rings work?",id:"how-does-pando-rings-work",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pando Rings is an algorithmic, autonomous interest rate protocol built with Mixin MTG (Mixin Trusted Group) technology. It is a place where you can lend or borrow cryptocurrencies. You can think of it as an open market for money. It lets users deposit cryptocurrencies and earn interest, or borrow other cryptoassets against them."),(0,n.kt)("p",null,"The interest rates for supplying and borrowing are adjusted algorithmically based on supply and demand."),(0,n.kt)("h2",{id:"how-does-pando-rings-work"},"How does Pando Rings work?"),(0,n.kt)("p",null,"Supplied assets in Pando Rings are tracked in tokens called rTokens, Pando Rings' native tokens. rTokens are ERC-20 tokens that represent claims to a portion of an asset pool in Pando Rings."),(0,n.kt)("p",null,"For example, if you deposit BTC into Pando Rings, it is converted to rBTC. If you deposit ETH, it will be converted to rETH. rTokens are available in the connected wallet for further transactional purposes."),(0,n.kt)("p",null,"As the money market earns interest (borrowing increases), rTokens earn interest and become convertible to more of the underlying assets. If you deposit multiple coins, they'll each earn interest based on their individual rToken interest rates. You earn interest on Pando Rings by holding the rTokens."),(0,n.kt)("p",null,"Lending in Pando Rings is straightforward. After selecting the asset you wish to supply liquidity for and signing the transaction through your wallet, you instantly add the asset to the pool and start earning interest in real-time. At the same time, the assets are converted to rTokens."),(0,n.kt)("p",null,"Borrowing is a bit more complicated. To borrow, supplying is not enough - you have to make sure that you also have pledged, locking your rTokens into the system as collateral to earn the Borrowing Power (Borrow Balance). Every asset that is available for supply will add a different amount of borrowing power based on its collateral factor. Users can then borrow according to the Total Borrowing Power (Borrow Limit) they have."),(0,n.kt)("p",null,"There are shortcuts if your goal is to borrow - Quick Supply function is for you to quickly get the borrow balance as it enables you pledge when you supply the asset. Quick Borrow enables you to get the loan right away when you supply an asset."),(0,n.kt)("p",null,"Similar to many other DeFi projects, Pando Rings works with the concept of overcollateralization. This means that borrowers have to supply more value than they wish to borrow to avoid liquidation."))}p.isMDXComponent=!0}}]);