"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[1427],{9888:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var n=a(7462),s=(a(7294),a(3905)),l=a(6084);const c={title:"\u5217\u8868\u4ea4\u6613",date:new Date("2021-12-30T23:18:01.000Z")},i=void 0,r={unversionedId:"lake/apis/transactions",id:"lake/apis/transactions",title:"\u5217\u8868\u4ea4\u6613",description:"GET /transactions",source:"@site/i18n/zh/docusaurus-plugin-content-docs-developer/current/lake/apis/transactions.md",sourceDirName:"lake/apis",slug:"/lake/apis/transactions",permalink:"/zh/developer/lake/apis/transactions",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5217\u8868\u4ea4\u6613",date:"2021-12-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"\u9605\u8bfb\u8ba2\u5355\u8be6\u60c5",permalink:"/zh/developer/lake/apis/orders"},next:{title:"\u8bbe\u8ba1",permalink:"/zh/developer/lake/design"}},o={},d=[{value:"GET /transactions",id:"get-transactions",level:2},{value:"GET /\u4ea4\u6613/{base_asset_id}/{quote_asset_id}",id:"get-\u4ea4\u6613base_asset_idquote_asset_id",level:2},{value:"GET /\u4ea4\u6613/{base_asset_id}/{quote_asset_id}/\u6211\u7684",id:"get-\u4ea4\u6613base_asset_idquote_asset_id\u6211\u7684",level:2}],u={toc:d};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-transactions"},"GET /transactions"),(0,s.kt)("p",null,"\u8be5API\u5c06\u54cd\u5e94\u4e00\u4e2a\u4ea4\u6613\u5217\u8868\u3002"),(0,s.kt)(l.jI,{base:"https://api.4swap.org/api",url:"/transactions",mdxType:"APIEndpoint"}),(0,s.kt)(l.Yk,{mdxType:"APIMetaPanel"}),(0,s.kt)(l.Xv,{title:"\u9605\u8bfb\u4ea4\u6613",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/transactions?cursor={next_cursor}&limit={limit}",mdxType:"APIRequest"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1640871682322,\n  "data": {\n    "transactions": [\n      {\n        "id": "c5002520-2e63-587e-96ec-0f5af779a08b",\n        "created_at": "2021-12-30T13:41:21Z",\n        "type": "Swap", // transaction types, Swap, Withdraw, Deposit\n        "base_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "quote_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "base_amount": "0.47768255",\n        "quote_amount": "-553.26863537",\n        "fee_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "fee_amount": "0.00143304",\n        "pay_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "filled_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "funds": "0.47768255",\n        "amount": "553.26863537",\n        "value": "0.48",\n        "fee_value": "0",\n        "follow_id": "45432f10-d5b9-41dd-88fc-2cc92c736b19",\n        "liquidity": "0"\n      }\n    ],\n    "pagination": {\n      "next_cursor": "13982534",\n      "has_next": true\n    }\n  }\n}\n\n')),(0,s.kt)("h2",{id:"get-\u4ea4\u6613base_asset_idquote_asset_id"},"GET /\u4ea4\u6613/{base_asset_id}/{quote_asset_id}"),(0,s.kt)("p",null,"\u8be5API\u5c06\u54cd\u5e94\u6307\u5b9a\u4ea4\u6613\u5bf9\u7684\u4ea4\u6613\u5217\u8868\u3002"),(0,s.kt)(l.jI,{base:"https://api.4swap.org/api",url:"/transactions/{base_asset_id}/{quote_asset_id}",mdxType:"APIEndpoint"}),(0,s.kt)(l.Yk,{mdxType:"APIMetaPanel"}),(0,s.kt)(l.Xv,{title:"\u8bfb\u53d6\u6307\u5b9a\u7684\u4ea4\u6613\u5bf9\u7684\u4ea4\u6613",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/transactions/{base_asset_id}/{quote_asset_id}?cursor={next_cursor}&limit={limit}",mdxType:"APIRequest"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1640871682322,\n  "data": {\n    "transactions": [\n      {\n        "id": "c5002520-2e63-587e-96ec-0f5af779a08b",\n        "created_at": "2021-12-30T13:41:21Z",\n        "type": "Swap", // transaction types, Swap, Withdraw, Deposit\n        "base_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "quote_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "base_amount": "0.47768255",\n        "quote_amount": "-553.26863537",\n        "fee_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "fee_amount": "0.00143304",\n        "pay_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "filled_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "funds": "0.47768255",\n        "amount": "553.26863537",\n        "value": "0.48",\n        "fee_value": "0",\n        "follow_id": "45432f10-d5b9-41dd-88fc-2cc92c736b19",\n        "liquidity": "0"\n      }\n    ],\n    "pagination": {\n      "next_cursor": "13982534",\n      "has_next": true\n    }\n  }\n}\n\n')),(0,s.kt)("h2",{id:"get-\u4ea4\u6613base_asset_idquote_asset_id\u6211\u7684"},"GET /\u4ea4\u6613/{base_asset_id}/{quote_asset_id}/\u6211\u7684"),(0,s.kt)("p",null,"\u8be5API\u5c06\u54cd\u5e94\u4e00\u4e2a\u4e0e\u6211\u6709\u5173\u7684\u6307\u5b9a\u4ea4\u6613\u5bf9\u7684\u4ea4\u6613\u5217\u8868\u3002"),(0,s.kt)(l.jI,{base:"https://api.4swap.org/api",url:"/transactions/{base_asset_id}/{quote_asset_id}/mine",mdxType:"APIEndpoint"}),(0,s.kt)(l.Yk,{mdxType:"APIMetaPanel"}),(0,s.kt)(l.Xv,{title:"\u8bfb\u53d6\u6307\u5b9a\u7684\u4ea4\u6613\u5bf9\u7684\u4ea4\u6613",method:"GET",base:"https://api.4swap.org/api",url:"/transactions/{base_asset_id}/{quote_asset_id}?cursor={next_cursor}&limit={limit}",mdxType:"APIRequest"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1640871682322,\n  "data": {\n    "transactions": [\n      {\n        "id": "c5002520-2e63-587e-96ec-0f5af779a08b",\n        "created_at": "2021-12-30T13:41:21Z",\n        "type": "Swap", // transaction types, Swap, Withdraw, Deposit\n        "base_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "quote_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "base_amount": "0.47768255",\n        "quote_amount": "-553.26863537",\n        "fee_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "fee_amount": "0.00143304",\n        "pay_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "filled_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "funds": "0.47768255",\n        "amount": "553.26863537",\n        "value": "0.48",\n        "fee_value": "0",\n        "follow_id": "45432f10-d5b9-41dd-88fc-2cc92c736b19",\n        "liquidity": "0"\n      }\n    ],\n    "pagination": {\n      "next_cursor": "13982534",\n      "has_next": true\n    }\n  }\n}\n\n')))}m.isMDXComponent=!0},6084:(e,t,a)=>{a.d(t,{jI:()=>E,Yk:()=>p,kH:()=>j,so:()=>G,Xv:()=>b});var n=a(7294),s=a(6010);const l="title_yRZ_",c="panel_zdgl",i="table_CSyr",r="tbody_TiJw",o="tr_Y4gG",d="td_nN29",u="th_yzq_";var m=a(5999);function p(e){let{scope:t,scopeNote:a,limitation:p}=e,_=null;return _=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(m.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,s.Z)("meta-panel",c)},n.createElement("h3",{className:l},n.createElement(m.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,s.Z)("meta-panel-table",i)},n.createElement("tbody",{className:r},n.createElement("tr",{className:o},n.createElement("th",{className:(0,s.Z)("meta-panel-cell",d,u)},n.createElement(m.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,s.Z)("meta-panel-cell",d)},_)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,s.Z)("meta-panel-cell",d,u)},n.createElement(m.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,s.Z)("meta-panel-cell",d)},p||"No limitation")))))}var _=a(814);function b(e){let{title:t,url:a,method:s,isPublic:l,base:c,data:i}=e;const r=c||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(m.Z,null,"com.api_request")),n.createElement(_.Z,{className:"language-bash"},"curl -X ",s||"GET"," ",`"${r}${a}"`,' -H "Content-Type: application/json"',l?" ":' -H "Authorization: Bearer $TOKEN"',i?` ${i}`:""))}const f="container_cWQZ";function E(e){let{url:t,base:a}=e;const s=a||"https://api.mixin.one";return n.createElement("div",{className:f},n.createElement("h3",null,n.createElement(m.Z,null,"com.api_endpoint")),n.createElement(_.Z,{className:"language-sass"},`${s}${t}`))}var h=a(7462);const k="title_cB6u",g="panel_uK6e",v="table_n4jr",y="tbody_UsRV",N="tr_ikU_",q="td_kkZj",Z="th_WMgK",T="required_sY8k",w="name_79af",x=/p-([a-zA-Z_]+)/;function P(e){let{name:t,value:a,required:l}=e,c="";return l&&(c=n.createElement("div",{className:T},n.createElement(m.Z,null,"com.api_params.required"))),n.createElement("tr",{className:N},n.createElement("th",{className:(0,s.Z)(q,Z)},n.createElement("code",{className:w},t),c),n.createElement("td",{className:q},a))}function I(e,t){const a={},n=x.exec(e);if(null!==n&&n.length>1){const s=n[1],l=e.slice(s.length+3);return a.name=s,0===l.length?a.value=t:"required"===l&&(a.required=t),a}return null}function j(e){const t=[],a={};for(const n in e)if(Object.hasOwnProperty.call(e,n)){const t=I(n,e[n]);if(null!==t){Object.hasOwnProperty.call(a,t.name)||(a[t.name]={});for(const e in t)Object.hasOwnProperty.call(t,e)&&(a[t.name][e]=t[e])}}for(const n in a)t.push({name:n,value:a[n].value||"",required:!!a[n].required});return n.createElement("section",{className:(0,s.Z)("meta-panel",g)},n.createElement("h3",{className:k},n.createElement(m.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,s.Z)("meta-panel-table",v)},n.createElement("tbody",{className:y},t.map(((e,t)=>n.createElement(P,(0,h.Z)({key:t},e)))))))}const A="container_IDiZ";function G(e){return n.createElement("div",{className:A},n.createElement("h3",null,n.createElement(m.Z,null,"com.api_payload")),n.createElement(_.Z,{className:"language-json"},e.children))}}}]);