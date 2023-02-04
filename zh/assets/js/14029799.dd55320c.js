"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[3823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"API\u6982\u8ff0",date:new Date("2021-09-30T23:18:01.000Z")},i=void 0,l={unversionedId:"lake/apis/overview",id:"lake/apis/overview",title:"API\u6982\u8ff0",description:"Pando Lake \u548c 4swap \u4e3a\u7b2c\u4e09\u65b9\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u7b80\u6d01\u3001\u5f00\u53d1\u8005\u53cb\u597d\u7684 API.",source:"@site/i18n/zh/docusaurus-plugin-content-docs-developer/current/lake/apis/overview.md",sourceDirName:"lake/apis",slug:"/lake/apis/overview",permalink:"/zh/developer/lake/apis/overview",draft:!1,tags:[],version:"current",frontMatter:{title:"API\u6982\u8ff0",date:"2021-09-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"\u8c03\u7528\u94b1\u5305",permalink:"/zh/developer/lake/guide/invoke-wallets"},next:{title:"\u6388\u6743",permalink:"/zh/developer/lake/apis/auth"}},s={},p=[{value:"\u76ee\u524d\u4f7f\u7528\u7684 API \u7aef\u70b9",id:"\u76ee\u524d\u4f7f\u7528\u7684-api-\u7aef\u70b9",level:2},{value:"\u5b9e\u4f53",id:"\u5b9e\u4f53",level:2},{value:"\u4ea4\u6613\u5bf9\u5b9e\u4f53",id:"\u4ea4\u6613\u5bf9\u5b9e\u4f53",level:3},{value:"\u8d44\u4ea7\u5b9e\u4f53",id:"\u8d44\u4ea7\u5b9e\u4f53",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pando Lake \u548c 4swap \u4e3a\u7b2c\u4e09\u65b9\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u7b80\u6d01\u3001\u5f00\u53d1\u8005\u53cb\u597d\u7684 API."),(0,a.kt)("h2",{id:"\u76ee\u524d\u4f7f\u7528\u7684-api-\u7aef\u70b9"},"\u76ee\u524d\u4f7f\u7528\u7684 API \u7aef\u70b9"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7aef\u70b9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Primary"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://api.4swap.org/api"},"https://api.4swap.org/api"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Alternative"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mtgswap-api.fox.one/api"},"https://mtgswap-api.fox.one/api"))))),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\u6765\u6784\u9020\u60a8\u7684 API \u8bf7\u6c42\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HTTP_METHOD ${API_BASE}/${API_PATH}\n")),(0,a.kt)("h2",{id:"\u5b9e\u4f53"},"\u5b9e\u4f53"),(0,a.kt)("p",null,"\u4e00\u4e9b\u5b9e\u4f53\u5728API\u54cd\u5e94\u4e2d\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"\u4ea4\u6613\u5bf9\u5b9e\u4f53"},"\u4ea4\u6613\u5bf9\u5b9e\u4f53"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // base \u548c quote assets \u7684 asset id\n  "base_asset_id": "c94ac88f-4671-3976-b60a-09064f1811e8",\n  "quote_asset_id": "f5ef6b5d-cc5a-3d90-b2c0-a2fd386e7a3c",\n  //base \u548c quote assets \u7684\u6570\u91cf\n  "base_amount": "827.7243632",\n  "quote_amount": "57701.51287515",\n  // \u6b64\u4ea4\u6613\u5bf9\u7684\u6d41\u52a8\u6027\n  "liquidity": "6588.04146863",\n  // \u6b64\u4ea4\u6613\u5bf9 LP-Token \u7684 asset id\n  "liquidity_asset_id": "b34633de-4012-38e3-88a9-1f41eafdf45a",\n  // \u6b64\u4ea4\u6613\u5bf9\u7684 route id\n  "route_id": 1,\n  // \u624b\u7eed\u8d39 0.3%\n  "fee_percent": "0.003",\n  "max_liquidity": "100000000",\n  "base_value": "301753.29",\n  "quote_value": "300856.63",\n  "volume_24h": "9552.48",\n  "fee_24h": "28.63",\n  "transaction_count_24h": 165,\n  "version": 7503628,\n  "base_volume_24h": "27.23252371",\n  "quote_volume_24h": "1895.88436236"\n}\n')),(0,a.kt)("h3",{id:"\u8d44\u4ea7\u5b9e\u4f53"},"\u8d44\u4ea7\u5b9e\u4f53"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // asset id\n  "id": "159648dc-eba7-3d0e-82ea-06995bee0537",\n  // \u663e\u793a\u540d\u79f0, \u4ee3\u53f7 \u548c\u56fe\u6807\n  "name": "4swap LP Token BTC-wBTC",\n  "symbol": "sBTC-wBTC",\n  "logo": "https://mixin-images.zeromesh.net/kVAd-goGIX7OAFruP_gcT04yXomO4BfTFEyeroKPl38Ypc6KQnQZBdeVzp8VCOiDyD-4-A8Wyh_HiFztViJxjrSZezrlRl6Up5SCWw=s128",\n  // \u4e3b\u94fe\u7684asset id\n  "chain_id": "43d61dcd-e413-450d-80b8-101d5e903357",\n  // \u4e3b\u94fe\u8d44\u4ea7\u5b9e\u4f53\n  "chain": {Asset Entity},\n  // \u7f8e\u5143\u4ef7\u683c\n  "price": "84447.541565189134",\n  // \u5176\u4f59\u4fe1\u606f\n  "extra": {"circulation":"109542949","name":"Ethereum","explorer":"https://etherscan.io/","intro":{"en":["Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.","Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014 and officially launched the blockchain on July 30, 2015.","Ethereum\u2019s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud."]},"website":"https://www.ethereum.org/","issue":"2014/7/24","total":"109542949"}\n}\n')))}u.isMDXComponent=!0}}]);