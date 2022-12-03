"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[1583],{9520:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var n=t(7462),l=(t(7294),t(3905)),r=t(6084);const s={title:"Read Order Detail",date:new Date("2021-11-15T14:18:01.000Z")},c=void 0,d={unversionedId:"lake/apis/orders",id:"lake/apis/orders",title:"Read Order Detail",description:"GET /orders/:follow_id",source:"@site/developer/lake/apis/orders.md",sourceDirName:"lake/apis",slug:"/lake/apis/orders",permalink:"/developer/lake/apis/orders",draft:!1,tags:[],version:"current",lastUpdatedAt:1636958083,formattedLastUpdatedAt:"Nov 15, 2021",frontMatter:{title:"Read Order Detail",date:"2021-11-15T14:18:01.000Z"},sidebar:"docs",previous:{title:"Create Actions",permalink:"/developer/lake/apis/actions"},next:{title:"List Transactions",permalink:"/developer/lake/apis/transactions"}},o={},i=[{value:"GET /orders/:follow_id",id:"get-ordersfollow_id",level:2}],m={toc:i};function p(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"get-ordersfollow_id"},"GET /orders/:follow_id"),(0,l.kt)("p",null,"This API will respond the order detail related to the follow id."),(0,l.kt)(r.jI,{base:"https://api.4swap.org/api",url:"/orders/:follow_id",mdxType:"APIEndpoint"}),(0,l.kt)(r.Yk,{scope:"Authorized",mdxType:"APIMetaPanel"}),(0,l.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,l.kt)(r.Xv,{title:"Read order detail",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/orders/:follow_id",mdxType:"APIRequest"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "data": {\n    "id": "87ae5014-d20f-4cf1-b530-8771137e4e0e",\n    "created_at": "2020-09-15T03:35:34Z",\n    "user_id": "8017d200-7870-4b82-b53f-74bae1d2dad7",\n    "state": "Done", // order status Trading/Rejected/Done\n    "pay_asset_id": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",\n    "fill_asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n    "pay_amount": "1",\n    "fill_amount": "00025725", \n    "min_amount": "0.0002521",\n    "routes": "1bv",\n    "route_assets": [\n      "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",\n      "c6d0c728-2624-429b-8e0d-d9d19b6592fa"\n    ],\n    "transactions": [\n      {\n        "id": "87ae5014-d20f-4cf1-b530-8771137e4e0e",\n        "created_at": "2020-09-15T03:35:34Z",\n        "user_id": "8017d200-7870-4b82-b53f-74bae1d2dad7",\n        "type": "Swap",\n        "base_asset_id": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",\n        "quote_asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n        "base_amount": "1",\n        "quote_amount": "-0.00025725",\n        "fee_asset_id": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",\n        "fee_amount": "0.003",\n        "pay_asset_id": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",\n        "filled_asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n        "funds": "1",\n        "amount": "0.00025725"\n      }\n    ]\n  }\n}\n')))}p.isMDXComponent=!0},6084:(e,a,t)=>{t.d(a,{jI:()=>E,Yk:()=>u,kH:()=>D,so:()=>R,Xv:()=>f});var n=t(7294),l=t(6010);const r="title_yRZ_",s="panel_zdgl",c="table_CSyr",d="tbody_TiJw",o="tr_Y4gG",i="td_nN29",m="th_yzq_";var p=t(5999);function u(e){let{scope:a,scopeNote:t,limitation:u}=e,_=null;return _=a?n.createElement("div",null,n.createElement("code",null,a||"-"),t&&n.createElement("span",null,"; ",t)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",s)},n.createElement("h3",{className:r},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",c)},n.createElement("tbody",{className:d},n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",i,m)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",i)},_)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",i,m)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",i)},u||"No limitation")))))}var _=t(814);function f(e){let{title:a,url:t,method:l,isPublic:r,base:s,data:c}=e;const d=s||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(_.Z,{className:"language-bash"},"curl -X ",l||"GET"," ",`"${d}${t}"`,' -H "Content-Type: application/json"',r?" ":' -H "Authorization: Bearer $TOKEN"',c?` ${c}`:""))}const b="container_cWQZ";function E(e){let{url:a,base:t}=e;const l=t||"https://api.mixin.one";return n.createElement("div",{className:b},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(_.Z,{className:"language-sass"},`${l}${a}`))}var h=t(7462);const k="title_cB6u",N="panel_uK6e",Z="table_n4jr",v="tbody_UsRV",g="tr_ikU_",y="td_kkZj",w="th_WMgK",T="required_sY8k",q="name_79af",P=/p-([a-zA-Z_]+)/;function j(e){let{name:a,value:t,required:r}=e,s="";return r&&(s=n.createElement("div",{className:T},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:g},n.createElement("th",{className:(0,l.Z)(y,w)},n.createElement("code",{className:q},a),s),n.createElement("td",{className:y},t))}function A(e,a){const t={},n=P.exec(e);if(null!==n&&n.length>1){const l=n[1],r=e.slice(l.length+3);return t.name=l,0===r.length?t.value=a:"required"===r&&(t.required=a),t}return null}function D(e){const a=[],t={};for(const n in e)if(Object.hasOwnProperty.call(e,n)){const a=A(n,e[n]);if(null!==a){Object.hasOwnProperty.call(t,a.name)||(t[a.name]={});for(const e in a)Object.hasOwnProperty.call(a,e)&&(t[a.name][e]=a[e])}}for(const n in t)a.push({name:n,value:t[n].value||"",required:!!t[n].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",N)},n.createElement("h3",{className:k},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",Z)},n.createElement("tbody",{className:v},a.map(((e,a)=>n.createElement(j,(0,h.Z)({key:a},e)))))))}const O="container_IDiZ";function R(e){return n.createElement("div",{className:O},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(_.Z,{className:"language-json"},e.children))}}}]);