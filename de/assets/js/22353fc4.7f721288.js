"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[192],{381:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var l=a(7462),n=(a(7294),a(3905)),r=a(6084);const s={title:"Read Collaterals",date:new Date("2021-10-01T23:18:01.000Z")},i=void 0,c={unversionedId:"leaf/apis/cats",id:"leaf/apis/cats",title:"Read Collaterals",description:"Read All Collaterals",source:"@site/i18n/de/docusaurus-plugin-content-docs-developer/current/leaf/apis/cats.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/cats",permalink:"/de/developer/leaf/apis/cats",draft:!1,tags:[],version:"current",lastUpdatedAt:1637041308,formattedLastUpdatedAt:"16. Nov. 2021",frontMatter:{title:"Read Collaterals",date:"2021-10-01T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Assets",permalink:"/de/developer/leaf/apis/assets"},next:{title:"Read Auctions",permalink:"/de/developer/leaf/apis/flips"}},o={},m=[{value:"Read All Collaterals",id:"read-all-collaterals",level:2},{value:"GET /cats",id:"get-cats",level:3},{value:"Read Single Collateral",id:"read-single-collateral",level:2},{value:"GET /cats/:id",id:"get-catsid",level:3}],d={toc:m};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"read-all-collaterals"},"Read All Collaterals"),(0,n.kt)("h3",{id:"get-cats"},"GET /cats"),(0,n.kt)("p",null,"This API will respond all supported collaterals."),(0,n.kt)(r.jI,{base:"https://leaf-api.pando.im/api",url:"/cats",mdxType:"APIEndpoint"}),(0,n.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,n.kt)(r.Xv,{title:"Read supported assets",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/cats",mdxType:"APIRequest"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "collaterals": [\n    {\n      // normalized debt\n      "art": "number",\n      // minimum bid increase\n      "beg": "number",\n      // max pUSD out for liquidation \n      "box": "number",\n      // the liquidation penalty\n      "chop": "number",\n      "created_at": "2021-10-02",\n      // the asset id of debt\n      "dai": "string",\n      // total pUSD issued\n      "debt": "number",\n      // max liquidation Quantity per auction\n      "dunk": "number",\n      // debt floor per vault\n      "dust": "number",\n      // stability fee\n      "duty": "number",\n      // the asset id of collateral\n      "gem": "string",\n      // id of this collateral type\n      "id": "string",\n      // locked Collateral\n      "ink": "number",\n      // debt Ceiling \n      "line": "number",\n      // balance of pUSD out for liquidation\n      "litter": "number",\n      // status of this collateral type\n      "live": true,\n      // liquidation ratio, eg 150%\n      "mat": "number",\n      // name of this collateral type\n      "name": "string",\n      // number of vaults belong to this collateral type\n      "number_of_vaults": 0,\n      // current price of gem/dai\n      "price": "number",\n      // accumulated Rates\n      "rate": "number",\n      // the update date of `rate`\n      "rho": "2021-10-02",\n      // total debt supplied\n      "supply": "number",\n      // total auction length\n      "tau": 0,\n      // single bid lifetime\n      "ttl": 0\n    }\n  ]\n}\n')),(0,n.kt)("h2",{id:"read-single-collateral"},"Read Single Collateral"),(0,n.kt)("h3",{id:"get-catsid"},"GET /cats/:id"),(0,n.kt)("p",null,"This API will respond one collateral with ",(0,n.kt)("inlineCode",{parentName:"p"},":id")),(0,n.kt)(r.jI,{base:"https://leaf-api.pando.im/api",url:"/cats/:id",mdxType:"APIEndpoint"}),(0,n.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,n.kt)(r.kH,{"p-id":"the collateral id","p-id-required":"{true}",mdxType:"APIParams"}),(0,n.kt)(r.Xv,{title:"Read one collateral by ID",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/cats/d0ec4cc7-edf6-5359-bf23-41fc9d26444e",mdxType:"APIRequest"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633138872979,\n  "data": {\n    "id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",\n    "created_at": "2021-04-27T07:02:55Z",\n    "name": "BTC",\n    "gem": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n    "dai": "31d2ea9c-95eb-3355-b65b-ba096853bc18",\n    "ink": "717.09020133",\n    "art": "9463539.4478672014194987",\n    "rate": "1.0192090425079456",\n    "rho": "2021-10-02T01:40:26Z",\n    "debt": "9530560.48933399",\n    "line": "19000000",\n    "dust": "100",\n    "price": "47815.83",\n    "mat": "1.5",\n    "duty": "1.045",\n    "chop": "1.13",\n    "dunk": "5000",\n    "beg": "1.03",\n    "ttl": 1800,\n    "tau": 43200,\n    "live": true,\n    "number_of_vaults": "407",\n    "box": "500000",\n    "litter": "0",\n    "supply": "19000000"\n  }\n}\n')))}u.isMDXComponent=!0},6084:(e,t,a)=>{a.d(t,{jI:()=>E,Yk:()=>p,kH:()=>x,so:()=>j,Xv:()=>f});var l=a(7294),n=a(6010);const r="title_yRZ_",s="panel_zdgl",i="table_CSyr",c="tbody_TiJw",o="tr_Y4gG",m="td_nN29",d="th_yzq_";var u=a(5999);function p(e){let{scope:t,scopeNote:a,limitation:p}=e,b=null;return b=t?l.createElement("div",null,l.createElement("code",null,t||"-"),a&&l.createElement("span",null,"; ",a)):l.createElement("span",null,l.createElement(u.Z,null,"com.api_metapanel.public")),l.createElement("section",{className:(0,n.Z)("meta-panel",s)},l.createElement("h3",{className:r},l.createElement(u.Z,null,"com.api_metapanel")),l.createElement("table",{className:(0,n.Z)("meta-panel-table",i)},l.createElement("tbody",{className:c},l.createElement("tr",{className:o},l.createElement("th",{className:(0,n.Z)("meta-panel-cell",m,d)},l.createElement(u.Z,null,"com.api_metapanel.authorization")),l.createElement("td",{className:(0,n.Z)("meta-panel-cell",m)},b)),l.createElement("tr",{className:o},l.createElement("th",{className:(0,n.Z)("meta-panel-cell",m,d)},l.createElement(u.Z,null,"com.api_metapanel.limitation")),l.createElement("td",{className:(0,n.Z)("meta-panel-cell",m)},p||"No limitation")))))}var b=a(814);function f(e){let{title:t,url:a,method:n,isPublic:r,base:s,data:i}=e;const c=s||"https://api.4swap.org";return l.createElement("div",{className:"request"},l.createElement("h3",null,l.createElement(u.Z,null,"com.api_request")),l.createElement(b.Z,{className:"language-bash"},"curl -X ",n||"GET"," ",`"${c}${a}"`,' -H "Content-Type: application/json"',r?" ":' -H "Authorization: Bearer $TOKEN"',i?` ${i}`:""))}const h="container_cWQZ";function E(e){let{url:t,base:a}=e;const n=a||"https://api.mixin.one";return l.createElement("div",{className:h},l.createElement("h3",null,l.createElement(u.Z,null,"com.api_endpoint")),l.createElement(b.Z,{className:"language-sass"},`${n}${t}`))}var g=a(7462);const k="title_cB6u",v="panel_uK6e",_="table_n4jr",N="tbody_UsRV",y="tr_ikU_",Z="td_kkZj",T="th_WMgK",R="required_sY8k",q="name_79af",A=/p-([a-zA-Z_]+)/;function P(e){let{name:t,value:a,required:r}=e,s="";return r&&(s=l.createElement("div",{className:R},l.createElement(u.Z,null,"com.api_params.required"))),l.createElement("tr",{className:y},l.createElement("th",{className:(0,n.Z)(Z,T)},l.createElement("code",{className:q},t),s),l.createElement("td",{className:Z},a))}function C(e,t){const a={},l=A.exec(e);if(null!==l&&l.length>1){const n=l[1],r=e.slice(n.length+3);return a.name=n,0===r.length?a.value=t:"required"===r&&(a.required=t),a}return null}function x(e){const t=[],a={};for(const l in e)if(Object.hasOwnProperty.call(e,l)){const t=C(l,e[l]);if(null!==t){Object.hasOwnProperty.call(a,t.name)||(a[t.name]={});for(const e in t)Object.hasOwnProperty.call(t,e)&&(a[t.name][e]=t[e])}}for(const l in a)t.push({name:l,value:a[l].value||"",required:!!a[l].required});return l.createElement("section",{className:(0,n.Z)("meta-panel",v)},l.createElement("h3",{className:k},l.createElement(u.Z,null,"com.api_params.parameters")),l.createElement("table",{className:(0,n.Z)("meta-panel-table",_)},l.createElement("tbody",{className:N},t.map(((e,t)=>l.createElement(P,(0,g.Z)({key:t},e)))))))}const I="container_IDiZ";function j(e){return l.createElement("div",{className:I},l.createElement("h3",null,l.createElement(u.Z,null,"com.api_payload")),l.createElement(b.Z,{className:"language-json"},e.children))}}}]);