"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[1774],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(a),d=r,c=s["".concat(p,".").concat(d)]||s[d]||k[d]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7984:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={title:"Interest Rate Determination",date:new Date("2021-10-16T12:33:07.000Z")},i=void 0,o={unversionedId:"rings/key-concepts/interest-model",id:"rings/key-concepts/interest-model",title:"Interest Rate Determination",description:"All interest rates in Pando Rings are determined as a function of utilization rate. With the changes in the utilization rate, interest rates continuously fluctuate.",source:"@site/docs/rings/key-concepts/interest-model.md",sourceDirName:"rings/key-concepts",slug:"/rings/key-concepts/interest-model",permalink:"/docs/rings/key-concepts/interest-model",draft:!1,tags:[],version:"current",frontMatter:{title:"Interest Rate Determination",date:"2021-10-16T12:33:07.000Z"},sidebar:"docs",previous:{title:"Loan Risk Indicator",permalink:"/docs/rings/key-concepts/loan-risk-indicator"},next:{title:"Liquidation",permalink:"/docs/rings/key-concepts/liquidation"}},p={},u=[{value:"The Utilization Rate",id:"the-utilization-rate",level:3},{value:"Borrow rate",id:"borrow-rate",level:3},{value:"Supply rate",id:"supply-rate",level:3},{value:"Parameters of all Pando Rings&#39; money markets",id:"parameters-of-all-pando-rings-money-markets",level:3}],m={toc:u};function s(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All interest rates in Pando Rings are determined as a function of ",(0,r.kt)("strong",{parentName:"p"},"utilization rate"),". ",(0,r.kt)("strong",{parentName:"p"},"With the changes in the utilization rate, interest rates continuously fluctuate.")),(0,r.kt)("h3",{id:"the-utilization-rate"},"The Utilization Rate"),(0,r.kt)("p",null,"The utilization rate for a money market is defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Utilization_rate = market.total_borrows/(market.total_cash + market.borrows - market.reserves)\n")),(0,r.kt)("p",null,"Where "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"market.total_borrows refers to the amount of total borrow of a certain money market"),(0,r.kt)("li",{parentName:"ul"},"market.total_cash refers to the amount left in the system of a certain money market "),(0,r.kt)("li",{parentName:"ul"},"market.reserves refers to the amount that is kept as profit of a certain money market ")),(0,r.kt)("p",null,"The formula can be interpreted roughly as the percentage of money borrowed out of the total money supplied."),(0,r.kt)("p",null,"A high utilization rate signifies that demand is high and a lot of borrowing is taking place, so interest rates go up as an incentive to get more people to inject cash into the system. A low utilization rate signifies that demand for borrowing is low, so interest rates go down to encourage more people to borrow cash from the system."),(0,r.kt)("h3",{id:"borrow-rate"},"Borrow rate"),(0,r.kt)("p",null,"Currently, the borrow rate model of all money markets on Rings follow the Jump Rate model. "),(0,r.kt)("p",null,"In this model, there is a key parameter defined as ",(0,r.kt)("strong",{parentName:"p"},"Kink"),", which is a value of the utilization rate and creates a sharp turning point where the interest rates spike.   "),(0,r.kt)("p",null,"The borrow rate of the jump rate model is defined as:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"When the utilization rate \u2264 Kink:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Borrow_interest_rate = multiplier * market.utilization_rate + base_rate\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"When the utilization rate > Kink:")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Borrow_interest_rate = multiplier * Kink + jump_multiplier * (market.utilization_rate - Kink) + base_rate\n")),(0,r.kt)("p",null,"Where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"base_rate per year is the minimum borrowing rate "),(0,r.kt)("li",{parentName:"ul"},"multiplier per year is the rate of increase in interest rate with respect to utilization"),(0,r.kt)("li",{parentName:"ul"},"Kink is the point in the model in which the model follows the jump multiplier"),(0,r.kt)("li",{parentName:"ul"},"jump_multiplier per year is the rate of increase in interest rate with respect to utilization after the Kink")),(0,r.kt)("h3",{id:"supply-rate"},"Supply rate"),(0,r.kt)("p",null,"The supply rate is calculated as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Supply_interest_rate = Borrow_interest_rate * market.utilization_rate * (1 - market.reserve_factor)\n")),(0,r.kt)("p",null,"Where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"market.utilization_rate is the utilization rate of a certain market "),(0,r.kt)("li",{parentName:"ul"},"market.reserve_factor controls what percentage of the interest borrowers pay for a certain market is kept within the system to protect lenders against borrow default and liquidation malfunction"),(0,r.kt)("li",{parentName:"ul"},"Borrow_interest_rate is the interest rate that borrowers pay for a certian market ")),(0,r.kt)("h3",{id:"parameters-of-all-pando-rings-money-markets"},"Parameters of all Pando Rings' money markets"),(0,r.kt)("p",null,"(last updated on Oct 18, 2021)"),(0,r.kt)("p",null,"Currently, all money markets has a Kink of 80%, meaning, when utilization ratio reaches 80%, both the supply and borrow interest rates will have a sudden jump. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"base_rate"),(0,r.kt)("th",{parentName:"tr",align:null},"reserve_factor"),(0,r.kt)("th",{parentName:"tr",align:null},"multiplier"),(0,r.kt)("th",{parentName:"tr",align:null},"jump_multiplier"),(0,r.kt)("th",{parentName:"tr",align:null},"kink"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pUSD"),(0,r.kt)("td",{parentName:"tr",align:null},"Pando USD"),(0,r.kt)("td",{parentName:"tr",align:null},"0%"),(0,r.kt)("td",{parentName:"tr",align:null},"15%"),(0,r.kt)("td",{parentName:"tr",align:null},"5.8%"),(0,r.kt)("td",{parentName:"tr",align:null},"1.476"),(0,r.kt)("td",{parentName:"tr",align:null},"80%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USDT"),(0,r.kt)("td",{parentName:"tr",align:null},"Tether USD"),(0,r.kt)("td",{parentName:"tr",align:null},"0%"),(0,r.kt)("td",{parentName:"tr",align:null},"15%"),(0,r.kt)("td",{parentName:"tr",align:null},"5.8%"),(0,r.kt)("td",{parentName:"tr",align:null},"1.476"),(0,r.kt)("td",{parentName:"tr",align:null},"80%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BTC"),(0,r.kt)("td",{parentName:"tr",align:null},"Bitcoin"),(0,r.kt)("td",{parentName:"tr",align:null},"0%"),(0,r.kt)("td",{parentName:"tr",align:null},"20%"),(0,r.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,r.kt)("td",{parentName:"tr",align:null},"80%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ETH"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,r.kt)("td",{parentName:"tr",align:null},"0%"),(0,r.kt)("td",{parentName:"tr",align:null},"20%"),(0,r.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,r.kt)("td",{parentName:"tr",align:null},"80%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LTC"),(0,r.kt)("td",{parentName:"tr",align:null},"Litecoin"),(0,r.kt)("td",{parentName:"tr",align:null},"0%"),(0,r.kt)("td",{parentName:"tr",align:null},"20%"),(0,r.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,r.kt)("td",{parentName:"tr",align:null},"80%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EOS"),(0,r.kt)("td",{parentName:"tr",align:null},"EOS"),(0,r.kt)("td",{parentName:"tr",align:null},"0%"),(0,r.kt)("td",{parentName:"tr",align:null},"20%"),(0,r.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,r.kt)("td",{parentName:"tr",align:null},"80%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOT"),(0,r.kt)("td",{parentName:"tr",align:null},"Polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"0%"),(0,r.kt)("td",{parentName:"tr",align:null},"20%"),(0,r.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,r.kt)("td",{parentName:"tr",align:null},"80%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"XIN"),(0,r.kt)("td",{parentName:"tr",align:null},"Mixin"),(0,r.kt)("td",{parentName:"tr",align:null},"0%"),(0,r.kt)("td",{parentName:"tr",align:null},"20%"),(0,r.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,r.kt)("td",{parentName:"tr",align:null},"80%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MOB"),(0,r.kt)("td",{parentName:"tr",align:null},"MoblieCoin"),(0,r.kt)("td",{parentName:"tr",align:null},"0%"),(0,r.kt)("td",{parentName:"tr",align:null},"20%"),(0,r.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,r.kt)("td",{parentName:"tr",align:null},"80%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOX"),(0,r.kt)("td",{parentName:"tr",align:null},"BoxToken"),(0,r.kt)("td",{parentName:"tr",align:null},"0%"),(0,r.kt)("td",{parentName:"tr",align:null},"20%"),(0,r.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,r.kt)("td",{parentName:"tr",align:null},"80%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOGE"),(0,r.kt)("td",{parentName:"tr",align:null},"DogeCoin"),(0,r.kt)("td",{parentName:"tr",align:null},"0%"),(0,r.kt)("td",{parentName:"tr",align:null},"20%"),(0,r.kt)("td",{parentName:"tr",align:null},"29.13%"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6255"),(0,r.kt)("td",{parentName:"tr",align:null},"80%")))),(0,r.kt)("p",null,"For pUSD and USDT:\n",(0,r.kt)("img",{src:a(5886).Z,width:"1542",height:"792"})),(0,r.kt)("p",null,"For BTC, ETH, LTC, EOS. DOT, XIN, MOB, BOX and DOGE:\n",(0,r.kt)("img",{src:a(6799).Z,width:"1582",height:"790"})),(0,r.kt)("p",null,"It is important to understand the interest rate model of your selected money markets and monitor the changes in the interest rates for the profitability and safety of your assets."))}s.isMDXComponent=!0},6799:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/othercoins-model-9cc030eab9c124084d42af282139ab53.png"},5886:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/stablecoin-model-9c2f63bd88ef29e56b98cde2687147b1.png"}}]);