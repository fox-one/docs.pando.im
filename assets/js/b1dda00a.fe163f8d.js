"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[7737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,d=p["".concat(l,".").concat(h)]||p[h]||f[h]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={title:"Auction Process",date:new Date("2021-07-28T22:33:07.000Z")},i=void 0,c={unversionedId:"leaf/key-concepts/liquidation/leaf-auction-process",id:"leaf/key-concepts/liquidation/leaf-auction-process",title:"Auction Process",description:"When a vault breaches the minimum required collateralization ratio, it will be liquidated and the collateral will be on auction. Anyone can participate in the auction. The ongoing auction can be found in the Ongoing section on the Auctions page.",source:"@site/docs/leaf/key-concepts/liquidation/leaf-auction-process.md",sourceDirName:"leaf/key-concepts/liquidation",slug:"/leaf/key-concepts/liquidation/leaf-auction-process",permalink:"/docs/leaf/key-concepts/liquidation/leaf-auction-process",draft:!1,tags:[],version:"current",frontMatter:{title:"Auction Process",date:"2021-07-28T22:33:07.000Z"}},l={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When a vault breaches the minimum required collateralization ratio, it will be liquidated and the collateral will be on auction. Anyone can participate in the auction. The ongoing auction can be found in the Ongoing section on the Auctions page."),(0,r.kt)("p",null,"There are TWO phases of the auction."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Phase 1"),", participants bid at an increment of not less than 3% of the previous bidding amount to cover the highest amount of the outstanding debt. If within the limit of 12 hours, no one is willing to cover the total debt, the auction is over and the bidder who is willing to cover the highest amount of the debt will take all of the collateral home. Or if there is someone who bids to cover the total debt, then the auction will move to the second phase."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Phase 2"),", participants bid at a decrement of no less than 3% of the previous bidding amount on accepting the smallest part of the collateral for the payment of the total debt. The winner will need to pay off all the debt in exchange for the smallest amount of the collateral that (s)he subtmits the bid for."))}p.isMDXComponent=!0}}]);