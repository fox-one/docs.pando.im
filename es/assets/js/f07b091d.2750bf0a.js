"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[3346],{3319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var s=a(7462),l=(a(7294),a(3905)),n=a(6084);const r={title:"Read Market",date:new Date("2021-09-30T23:18:01.000Z")},i=void 0,d={unversionedId:"lake/apis/stat",id:"lake/apis/stat",title:"Read Market",description:"Read Global Statistics",source:"@site/i18n/es/docusaurus-plugin-content-docs-developer/current/lake/apis/stat.md",sourceDirName:"lake/apis",slug:"/lake/apis/stat",permalink:"/es/developer/lake/apis/stat",draft:!1,tags:[],version:"current",lastUpdatedAt:1636868787,formattedLastUpdatedAt:"14 nov 2021",frontMatter:{title:"Read Market",date:"2021-09-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read MTG Info",permalink:"/es/developer/lake/apis/info"},next:{title:"Read Pairs",permalink:"/es/developer/lake/apis/pairs"}},c={},m=[{value:"Read Global Statistics",id:"read-global-statistics",level:2},{value:"GET /states/markets",id:"get-statesmarkets",level:3},{value:"Read Pair Statistics",id:"read-pair-statistics",level:2},{value:"GET /states/markets/:base/:quote",id:"get-statesmarketsbasequote",level:3},{value:"Read Candlestick Data",id:"read-candlestick-data",level:2},{value:"GET /states/markets/:base/:quote/kline/v2?dur=:dur",id:"get-statesmarketsbasequoteklinev2durdur",level:3}],o={toc:m};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,s.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"read-global-statistics"},"Read Global Statistics"),(0,l.kt)("h3",{id:"get-statesmarkets"},"GET /states/markets"),(0,l.kt)("p",null,"This API will respond historical market statistics"),(0,l.kt)(n.jI,{base:"https://api.4swap.org/api",url:"/stats/markets/?dur=:dur",mdxType:"APIEndpoint"}),(0,l.kt)(n.Yk,{mdxType:"APIMetaPanel"}),(0,l.kt)(n.kH,{"p-dur":"The duration. for example, 4320h means latest 180 days",mdxType:"APIParams"}),(0,l.kt)(n.Xv,{title:"Read market statistics",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/stats/markets/?dur=4320h",mdxType:"APIRequest"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766503,\n  "data": [\n    {\n      "ts": 1617408000,\n      "date": "2021-04-03T00:00:00Z",\n      // liquidity in US dollar\n      "value": "88919122.02992768",\n      // liquidity in US dollar\n      "volume": "10727320.64681277"\n    },\n    ...\n  ]\n}\n')),(0,l.kt)("h2",{id:"read-pair-statistics"},"Read Pair Statistics"),(0,l.kt)("h3",{id:"get-statesmarketsbasequote"},"GET /states/markets/:base/:quote"),(0,l.kt)("p",null,"This API will respond historical market statistics specified by base and quote asset."),(0,l.kt)(n.jI,{base:"https://api.4swap.org/api",url:"/stats/markets/:base/:quote/?dur=:dur",mdxType:"APIEndpoint"}),(0,l.kt)(n.Yk,{mdxType:"APIMetaPanel"}),(0,l.kt)(n.kH,{"p-base":"The base asset id","p-base-required":"{true}","p-quote":"The quote asset id","p-quote-required":"{true}","p-dur":"The duration. for example, 4320h means latest 180 days",mdxType:"APIParams"}),(0,l.kt)(n.Xv,{title:"Read market statistics of ETH-BTC",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/stats/markets/43d61dcd-e413-450d-80b8-101d5e903357/c6d0c728-2624-429b-8e0d-d9d19b6592fa?dur=4320h",mdxType:"APIRequest"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766503,\n  "data": [\n    {\n      "ts": 1617408000,\n      "date": "2021-04-03T00:00:00Z",\n      // liquidity in US dollar\n      "value": "88919122.02992768",\n      // liquidity in US dollar\n      "volume": "10727320.64681277"\n    },\n    ...\n  ]\n}\n')),(0,l.kt)("h2",{id:"read-candlestick-data"},"Read Candlestick Data"),(0,l.kt)("h3",{id:"get-statesmarketsbasequoteklinev2durdur"},"GET /states/markets/:base/:quote/kline/v2?dur=:dur"),(0,l.kt)("p",null,"This API will respond the candlestick data specified by base and quote asset."),(0,l.kt)(n.jI,{base:"https://api.4swap.org/api",url:"/stats/markets/:base/:quote/kline/v2?dur=:dur",mdxType:"APIEndpoint"}),(0,l.kt)(n.Yk,{mdxType:"APIMetaPanel"}),(0,l.kt)(n.kH,{"p-base":"The base asset id","p-base-required":"{true}","p-quote":"The quote asset id","p-quote-required":"{true}","p-dur":"The duration. for example, 4320h means latest 180 days",mdxType:"APIParams"}),(0,l.kt)(n.Xv,{title:"Read market statistics of ETH-BTC",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/stats/markets/43d61dcd-e413-450d-80b8-101d5e903357/c6d0c728-2624-429b-8e0d-d9d19b6592fa/kline/v2?dur=4320h",mdxType:"APIRequest"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766503,\n  "data": [\n    [\n      // timestamp\n      1612148400,\n      // price of base / quote\n      "0.039304863681",\n      // price of quote / base\n      "25.442131511901"\n    ]\n    ...\n  ]\n}\n')))}u.isMDXComponent=!0},6084:(e,t,a)=>{a.d(t,{jI:()=>E,Yk:()=>p,kH:()=>A,so:()=>G,Xv:()=>b});var s=a(7294),l=a(6010);const n="title_yRZ_",r="panel_zdgl",i="table_CSyr",d="tbody_TiJw",c="tr_Y4gG",m="td_nN29",o="th_yzq_";var u=a(5999);function p(e){let{scope:t,scopeNote:a,limitation:p}=e,k=null;return k=t?s.createElement("div",null,s.createElement("code",null,t||"-"),a&&s.createElement("span",null,"; ",a)):s.createElement("span",null,s.createElement(u.Z,null,"com.api_metapanel.public")),s.createElement("section",{className:(0,l.Z)("meta-panel",r)},s.createElement("h3",{className:n},s.createElement(u.Z,null,"com.api_metapanel")),s.createElement("table",{className:(0,l.Z)("meta-panel-table",i)},s.createElement("tbody",{className:d},s.createElement("tr",{className:c},s.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,o)},s.createElement(u.Z,null,"com.api_metapanel.authorization")),s.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},k)),s.createElement("tr",{className:c},s.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,o)},s.createElement(u.Z,null,"com.api_metapanel.limitation")),s.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},p||"No limitation")))))}var k=a(814);function b(e){let{title:t,url:a,method:l,isPublic:n,base:r,data:i}=e;const d=r||"https://api.4swap.org";return s.createElement("div",{className:"request"},s.createElement("h3",null,s.createElement(u.Z,null,"com.api_request")),s.createElement(k.Z,{className:"language-bash"},"curl -X ",l||"GET"," ",`"${d}${a}"`,' -H "Content-Type: application/json"',n?" ":' -H "Authorization: Bearer $TOKEN"',i?` ${i}`:""))}const h="container_cWQZ";function E(e){let{url:t,base:a}=e;const l=a||"https://api.mixin.one";return s.createElement("div",{className:h},s.createElement("h3",null,s.createElement(u.Z,null,"com.api_endpoint")),s.createElement(k.Z,{className:"language-sass"},`${l}${t}`))}var v=a(7462);const T="title_cB6u",q="panel_uK6e",g="table_n4jr",y="tbody_UsRV",N="tr_ikU_",f="td_kkZj",_="th_WMgK",Z="required_sY8k",P="name_79af",R=/p-([a-zA-Z_]+)/;function I(e){let{name:t,value:a,required:n}=e,r="";return n&&(r=s.createElement("div",{className:Z},s.createElement(u.Z,null,"com.api_params.required"))),s.createElement("tr",{className:N},s.createElement("th",{className:(0,l.Z)(f,_)},s.createElement("code",{className:P},t),r),s.createElement("td",{className:f},a))}function x(e,t){const a={},s=R.exec(e);if(null!==s&&s.length>1){const l=s[1],n=e.slice(l.length+3);return a.name=l,0===n.length?a.value=t:"required"===n&&(a.required=t),a}return null}function A(e){const t=[],a={};for(const s in e)if(Object.hasOwnProperty.call(e,s)){const t=x(s,e[s]);if(null!==t){Object.hasOwnProperty.call(a,t.name)||(a[t.name]={});for(const e in t)Object.hasOwnProperty.call(t,e)&&(a[t.name][e]=t[e])}}for(const s in a)t.push({name:s,value:a[s].value||"",required:!!a[s].required});return s.createElement("section",{className:(0,l.Z)("meta-panel",q)},s.createElement("h3",{className:T},s.createElement(u.Z,null,"com.api_params.parameters")),s.createElement("table",{className:(0,l.Z)("meta-panel-table",g)},s.createElement("tbody",{className:y},t.map(((e,t)=>s.createElement(I,(0,v.Z)({key:t},e)))))))}const w="container_IDiZ";function G(e){return s.createElement("div",{className:w},s.createElement("h3",null,s.createElement(u.Z,null,"com.api_payload")),s.createElement(k.Z,{className:"language-json"},e.children))}}}]);