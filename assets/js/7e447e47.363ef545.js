"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9307],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,y=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],l={title:"Glossary",sidebar_position:8,date:new Date("2021-09-04T12:33:07.000Z")},i=void 0,p={unversionedId:"rings/key-concepts/glossary",id:"rings/key-concepts/glossary",isDocsHomePage:!1,title:"Glossary",description:"Key Processes",source:"@site/docs/rings/key-concepts/glossary.md",sourceDirName:"rings/key-concepts",slug:"/rings/key-concepts/glossary",permalink:"/docs/rings/key-concepts/glossary",version:"current",sidebarPosition:8,frontMatter:{title:"Glossary",sidebar_position:8,date:"2021-09-04T12:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Liquidation",permalink:"/docs/rings/key-concepts/liquidation"},next:{title:"Mixin Messenger",permalink:"/docs/wallets/mixin-messenger"}},u=[{value:"Key Processes",id:"key-processes",children:[]},{value:"Market",id:"market",children:[]},{value:"Key Personal Metrics",id:"key-personal-metrics",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"key-processes"},"Key Processes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Suppling"),"\nThe process of putting an asset into Pando Rings. As a result, you get rTokens in return, and will earn interest as long as you are supplying the asset. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pledging"),"\nThe process of locking rTokens into the system as collateral to get borrowing power. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Unpledging"),"\nThe process of unlocking rTokens from the system and as a result, reducing the borrowing power. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Withdrawing"),"\nThe process of getting back an asset from Pando Rings and have it back to your wallet. You will stop earning interest after you withdraw an asset."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Borrowing"),"\nThe process of getting a loan in Pando Rings. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Repaying"),"\nThe process of paying back your borrowed asset plus the accrued borrow interest. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"rToken"),"\nrToken is an ERC-20 token that is essentially a tokenized supply position and can be used as collateral in other liquidity pool or exchanged for other crypto assets. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Liquidation"),"\nWhen a user's maximum borrow capacity rendered by the total collateral value cannot cover the total loan value, liquidation will happen. In the process, others repay some or all of the user's outstanding borrow on behalf of the borrower and in return receive a discounted amount of collateral held by the borrower. "),(0,a.kt)("h3",{id:"market"},"Market"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Total Supply"),"\nIt stands for the total supplied amount of all assets in the markets of the very moment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supply Volume"),"\nIt stands for the total supplied amount of a specific asset in the market of the very moment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Total Borrow"),"\nIt stands for the total borrowed amount of all assets in the markets of the very moment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"liquidity"),"\nIt stands for the net amount available to borrow of all the markets of the very moment. It equals to Total Supply minus Total Borrow."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Maximum Market Availability"),"\nThe amount available to borrow of a specific asset. It equals to the Total Supply of an asset minus the Total Borrow of the same asset. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"24h Supply"),"\nIt stands for the total supplied amount of all assets in the markets within the last 24 hours."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"24h Borrow"),"\nIt stands for the total borrowed amount of all assets in the markets within the last 24 hours."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supply APY"),"\nThe estimated annual percentage yield for supplying an asset. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Borrow APY"),"\nThe estimated annual interest rate of an asset a borrower need to pay. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Collateral Factor"),"\nIt represents the maximum percentage you can borrow of the value of your pledged asset. It may vary for different assets. An asset that has a more solid community base and higher market recognition tends to have higher collateral factor. "),(0,a.kt)("h3",{id:"key-personal-metrics"},"Key Personal Metrics"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Net APY"),"\nNet APY(annual percentage yield) reflects the estimatd annual net yield based on the Supply APY and Borrow APY of the very moment. It indicates whether you are making money or losing money at the current APYS. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Borrow Limit"),"\nThe maximum amount you can borrow. You can increase your borrow limit by increasing the collateral (pledging more assets)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Borrow Balance"),"\nBorrow Balance = Borrow Limit - Your Borrow. It is the amount you can yet to borrow. If your Borrow Balance is 0, you cannot borrow any asset anymore. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Borrow/Borrow Limit"),"\nIt is the percentage of a user's Borrow against the maximum borrow capacity. Itis used to indicate your loan risk. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"My Supply"),"\nThe total amount of all the assets you have supplied (principal plus the accrued interests)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"My Borrow"),"\nThe total amount of all the assets you have borrowed (principal plus the accrued interests)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Total Pledge"),"\nThe total amount you have pledged as collateral."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Total Unpledged"),"\nThe total amount you haven't pledged as collateral."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Available to Withdraw"),"\nThe amount of a specific asset you can withdraw. It is the sum of your unpledged asset amount and the pledged amount that is not covering borrows"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Available to Unpledge"),"\nThe amount of a specific asset you can unpledge. It is your total pledged amount of the asset minus the part covering the outstanding borrow."))}m.isMDXComponent=!0}}]);