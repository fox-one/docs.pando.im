"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9483],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,f=p["".concat(c,".").concat(h)]||p[h]||s[h]||a;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7422:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],l={title:"Liquidation",date:new Date("2021-07-28T22:33:07.000Z")},c=void 0,u={unversionedId:"leaf/key-concepts/liquidation",id:"leaf/key-concepts/liquidation",isDocsHomePage:!1,title:"Liquidation",description:"Auction Process",source:"@site/docs/leaf/key-concepts/liquidation.md",sourceDirName:"leaf/key-concepts",slug:"/leaf/key-concepts/liquidation",permalink:"/docs/leaf/key-concepts/liquidation",version:"current",frontMatter:{title:"Liquidation",date:"2021-07-28T22:33:07.000Z"},sidebar:"docs",previous:{title:"Generate rules",permalink:"/docs/leaf/key-concepts/generate-rules"},next:{title:"Price Oracles",permalink:"/docs/leaf/key-concepts/price-oracles"}},d=[{value:"Auction Process",id:"auction-process",children:[]},{value:"Liquidation Ratio",id:"liquidation-ratio",children:[]},{value:"Liquidation Price",id:"liquidation-price",children:[]},{value:"Liquidation Penalty",id:"liquidation-penalty",children:[]}],s={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"auction-process"},"Auction Process"),(0,a.kt)("p",null,"When a vault breaches the minimum required collateralization ratio, it will be liquidated and the collateral will be on auction. Anyone can participate in the auction. The ongoing auction can be found in the Ongoing section on the Auctions page."),(0,a.kt)("p",null,"There are TWO phases of the auction."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Phase 1"),", participants bid at an increment of not less than 3% of the previous bidding amount to cover the highest amount of the outstanding debt. If within the limit of 12 hours, no one is willing to cover the total debt, the auction is over and the bidder who is willing to cover the highest amount of the debt will take all of the collateral home. Or if there is someone who bids to cover the total debt, then the auction will move to the second phase."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Phase 2"),", participants bid at a decrement of no less than 3% of the previous bidding amount on accepting the smallest part of the collateral for the payment of the total debt. The winner will need to pay off all the debt in exchange for the smallest amount of the collateral that (s)he subtmits the bid for."),(0,a.kt)("h2",{id:"liquidation-ratio"},"Liquidation Ratio"),(0,a.kt)("p",null,"The Liquidation Ratio is the minimum required collateralization level for each Vault type before it is considered undercollateralized and subject to liquidation."),(0,a.kt)("p",null,"Each Vault type\u2019s Liquidation Ratio is determined by a combination of the collateral\u2019s risk profile and the Stability Fee. There may be multiple Vault types for each collateral, with varying Liquidation Ratios and Stability Fees."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Liquidation Ratio = (Collateral Amount x Collateral Price) \xf7 Generated pUSD \xd7 100\n")),(0,a.kt)("h2",{id:"liquidation-price"},"Liquidation Price"),(0,a.kt)("p",null,"The Liquidation Price is the price at which a Vault becomes vulnerable to liquidation."),(0,a.kt)("p",null,"Vault owners can lower their liquidation price by adding more collateral or returning pUSD to the Vault."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Liquidation Price = (Generated pUSD * Liquidation Ratio) / (Amount of Collateral)\n")),(0,a.kt)("h2",{id:"liquidation-penalty"},"Liquidation Penalty"),(0,a.kt)("p",null,"A Liquidation Penalty is a fee paid by Vault owners when the value of their collateral reaches the Vault's Liquidation Price."),(0,a.kt)("p",null,"The Liquidation Penalty is added to the Vault\u2019s total outstanding generated pUSD when liquidation occurs, which results in more collateral being sold at auction."))}p.isMDXComponent=!0}}]);