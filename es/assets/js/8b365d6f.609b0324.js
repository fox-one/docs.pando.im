"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[1644],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),s=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=s(n),h=a,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(f,i(i({ref:e},p),{},{components:n})):o.createElement(f,i({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[u]="string"==typeof t?t:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8024:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={title:"Participating in the Auction",date:new Date("2021-08-13T12:33:07.000Z")},i=void 0,c={unversionedId:"leaf/tutorials/auction-participation",id:"leaf/tutorials/auction-participation",title:"Participating in the Auction",description:'You can go to "Auction" page to participate in auctions and check on the information of the past auctions.',source:"@site/i18n/es/docusaurus-plugin-content-docs/current/leaf/tutorials/auction-participation.md",sourceDirName:"leaf/tutorials",slug:"/leaf/tutorials/auction-participation",permalink:"/es/docs/leaf/tutorials/auction-participation",draft:!1,tags:[],version:"current",frontMatter:{title:"Participating in the Auction",date:"2021-08-13T12:33:07.000Z"},sidebar:"docs",previous:{title:"Withdrawing Collateral",permalink:"/es/docs/leaf/tutorials/withdraw"},next:{title:"Vaults",permalink:"/es/docs/leaf/key-concepts/vaults"}},l={},s=[],p={toc:s};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'You can go to "Auction" page to participate in auctions and check on the information of the past auctions.'),(0,a.kt)("p",null,'Ongoing auctions are in the "Ongoing"(at Auction) tab.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2793).Z,width:"2440",height:"1380"})),(0,a.kt)("p",null,"If there are no auctions in progress, you will see pic of blank state."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9745).Z,width:"2440",height:"1380"})),(0,a.kt)("p",null,"For an active auction, there are two phases."),(0,a.kt)("p",null,"For Phase 1, participants bid at an increment of not less than 3% of the previous bidding amount to cover the highest amount of the outstanding debt."),(0,a.kt)("p",null,"If within the limit of 12 hours, no one is willing to cover the total debt, or within half an hour after one bid, no one else bid, the auction is over and the bidder who is willing to cover the highest amount of the debt will take all of the collateral home. Or if there is someone who bids to cover the total debt, then the auction will move to the second phase."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2912).Z,width:"2440",height:"1380"})),(0,a.kt)("p",null,"For Phase 2, participants bid at a decrement of no less than 3% of the previous bidding amount on accepting the smallest part of the collateral for the payment of the total debt."),(0,a.kt)("p",null,"The winner will need to pay off all the debt in exchange for the smallest amount of the collateral that (s)he subtmits the bid for."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7078).Z,width:"2440",height:"1380"})))}u.isMDXComponent=!0},2793:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/auction-p1-208772297d71cb1b2e29e6caa7128e5c.png"},9745:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/auction-p2-6a3e19149e0d4e0dbac43e24f07d39c4.png"},2912:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/auction-p3-22137bc5ec23e509dd2eaa0bd99d115c.png"},7078:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/auction-p4-71d3a083797a82d5b8a5c226ba631f90.png"}}]);