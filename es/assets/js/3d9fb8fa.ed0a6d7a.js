"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[8508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Lake API Overview",date:new Date("2021-09-30T23:18:01.000Z")},o=void 0,s={unversionedId:"lake/apis/overview",id:"lake/apis/overview",title:"Lake API Overview",description:"Pando Lake and 4swap provide a simple, developer-friendly APIs for 3rd-party developers.",source:"@site/i18n/es/docusaurus-plugin-content-docs-developer/current/lake/apis/overview.md",sourceDirName:"lake/apis",slug:"/lake/apis/overview",permalink:"/es/developer/lake/apis/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1636868787,formattedLastUpdatedAt:"14 nov 2021",frontMatter:{title:"Lake API Overview",date:"2021-09-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"Invoke Wallets",permalink:"/es/developer/lake/guide/invoke-wallets"},next:{title:"Authorization",permalink:"/es/developer/lake/apis/auth"}},l={},p=[{value:"API Endpoints",id:"api-endpoints",level:2},{value:"Entities",id:"entities",level:2},{value:"Pair Entity",id:"pair-entity",level:3},{value:"Asset Entity",id:"asset-entity",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pando Lake and 4swap provide a simple, developer-friendly APIs for 3rd-party developers."),(0,a.kt)("h2",{id:"api-endpoints"},"API Endpoints"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Primary"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://api.4swap.org/api"},"https://api.4swap.org/api"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Alternative"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mtgswap-api.fox.one/api"},"https://mtgswap-api.fox.one/api"))))),(0,a.kt)("p",null,"You can use any of them to construct your API requests in form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HTTP_METHOD ${API_BASE}/${API_PATH}\n")),(0,a.kt)("h2",{id:"entities"},"Entities"),(0,a.kt)("p",null,"Some entities are widely used in the API responses."),(0,a.kt)("h3",{id:"pair-entity"},"Pair Entity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // the asset id of base and quote assets\n  "base_asset_id": "c94ac88f-4671-3976-b60a-09064f1811e8",\n  "quote_asset_id": "f5ef6b5d-cc5a-3d90-b2c0-a2fd386e7a3c",\n  // the amount of base and quote assets\n  "base_amount": "827.7243632",\n  "quote_amount": "57701.51287515",\n  // the liquidity of this pair\n  "liquidity": "6588.04146863",\n  // the asset id of LP-Token of this pair\n  "liquidity_asset_id": "b34633de-4012-38e3-88a9-1f41eafdf45a",\n  // the route id of this pair\n  "route_id": 1,\n  // fee 0.3%\n  "fee_percent": "0.003",\n  "max_liquidity": "100000000",\n  "base_value": "301753.29",\n  "quote_value": "300856.63",\n  "volume_24h": "9552.48",\n  "fee_24h": "28.63",\n  "transaction_count_24h": 165,\n  "version": 7503628,\n  "base_volume_24h": "27.23252371",\n  "quote_volume_24h": "1895.88436236"\n}\n')),(0,a.kt)("h3",{id:"asset-entity"},"Asset Entity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // asset id\n  "id": "159648dc-eba7-3d0e-82ea-06995bee0537",\n  // displayed name, symbol and icon\n  "name": "4swap LP Token BTC-wBTC",\n  "symbol": "sBTC-wBTC",\n  "logo": "https://mixin-images.zeromesh.net/kVAd-goGIX7OAFruP_gcT04yXomO4BfTFEyeroKPl38Ypc6KQnQZBdeVzp8VCOiDyD-4-A8Wyh_HiFztViJxjrSZezrlRl6Up5SCWw=s128",\n  // asset id of chain asset\n  "chain_id": "43d61dcd-e413-450d-80b8-101d5e903357",\n  // chain asset entity\n  "chain": {Asset Entity},\n  // price in US Dollar\n  "price": "84447.541565189134",\n  // extra information of this assets\n  "extra": {"circulation":"109542949","name":"Ethereum","explorer":"https://etherscan.io/","intro":{"en":["Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.","Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014 and officially launched the blockchain on July 30, 2015.","Ethereum\u2019s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud."]},"website":"https://www.ethereum.org/","issue":"2014/7/24","total":"109542949"}\n}\n')))}c.isMDXComponent=!0}}]);