"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5993],{1637:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var n=a(7462),s=a(3366),l=(a(7294),a(3905)),r=a(5532),c=["components"],i={title:"List Transactions",date:new Date("2021-12-30T23:18:01.000Z")},o=void 0,d={unversionedId:"lake/apis/transactions",id:"lake/apis/transactions",isDocsHomePage:!1,title:"List Transactions",description:"APIMetaPanel,",source:"@site/developer/lake/apis/transactions.md",sourceDirName:"lake/apis",slug:"/lake/apis/transactions",permalink:"/es/developer/lake/apis/transactions",version:"current",lastUpdatedAt:1640872048,formattedLastUpdatedAt:"12/30/2021",frontMatter:{title:"List Transactions",date:"2021-12-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Order Detail",permalink:"/es/developer/lake/apis/orders"},next:{title:"Action Protocol",permalink:"/es/developer/lake/action-protocol"}},u=[{value:"GET /transactions",id:"get-transactions",children:[]},{value:"GET /transactions/{base_asset_id}/{quote_asset_id}",id:"get-transactionsbase_asset_idquote_asset_id",children:[]}],m={toc:u};function p(e){var t=e.components,a=(0,s.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"get-transactions"},"GET /transactions"),(0,l.kt)("p",null,"This API will respond a list of transactions."),(0,l.kt)(r.jI,{base:"https://api.4swap.org/api",url:"/transactions",mdxType:"APIEndpoint"}),(0,l.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,l.kt)(r.Xv,{title:"Read transactions",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/transactions",mdxType:"APIRequest"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1640871682322,\n  "data": {\n    "transactions": [\n      {\n        "id": "c5002520-2e63-587e-96ec-0f5af779a08b",\n        "created_at": "2021-12-30T13:41:21Z",\n        "type": "Swap", // transaction types, Swap, Withdraw, Deposit\n        "base_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "quote_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "base_amount": "0.47768255",\n        "quote_amount": "-553.26863537",\n        "fee_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "fee_amount": "0.00143304",\n        "pay_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "filled_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "funds": "0.47768255",\n        "amount": "553.26863537",\n        "value": "0.48",\n        "fee_value": "0",\n        "follow_id": "45432f10-d5b9-41dd-88fc-2cc92c736b19",\n        "liquidity": "0"\n      }\n    ],\n    "pagination": {\n      "next_cursor": "13982534",\n      "has_next": true\n    }\n  }\n}\n\n')),(0,l.kt)("h2",{id:"get-transactionsbase_asset_idquote_asset_id"},"GET /transactions/{base_asset_id}/{quote_asset_id}"),(0,l.kt)("p",null,"This API will respond a list of transactions of the specified pair."),(0,l.kt)(r.jI,{base:"https://api.4swap.org/api",url:"/transactions/{base_asset_id}/{quote_asset_id}",mdxType:"APIEndpoint"}),(0,l.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,l.kt)(r.Xv,{title:"Read transactions of the specified pair",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/transactions/{base_asset_id}/{quote_asset_id}",mdxType:"APIRequest"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1640871682322,\n  "data": {\n    "transactions": [\n      {\n        "id": "c5002520-2e63-587e-96ec-0f5af779a08b",\n        "created_at": "2021-12-30T13:41:21Z",\n        "type": "Swap", // transaction types, Swap, Withdraw, Deposit\n        "base_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "quote_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "base_amount": "0.47768255",\n        "quote_amount": "-553.26863537",\n        "fee_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "fee_amount": "0.00143304",\n        "pay_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "filled_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "funds": "0.47768255",\n        "amount": "553.26863537",\n        "value": "0.48",\n        "fee_value": "0",\n        "follow_id": "45432f10-d5b9-41dd-88fc-2cc92c736b19",\n        "liquidity": "0"\n      }\n    ],\n    "pagination": {\n      "next_cursor": "13982534",\n      "has_next": true\n    }\n  }\n}\n\n')))}p.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return E},Yk:function(){return p},kH:function(){return I},so:function(){return j},Xv:function(){return b}});var n=a(7294),s=a(6010),l="title_sZG8",r="panel_2t5Q",c="table_3oTh",i="tbody_2SpR",o="tr_2EbQ",d="td_W9xC",u="th_3VyX",m=a(4973);function p(e){var t=e.scope,a=e.scopeNote,p=e.limitation,_=null;return _=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(m.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,s.Z)("meta-panel",r)},n.createElement("h3",{className:l},n.createElement(m.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,s.Z)("meta-panel-table",c)},n.createElement("tbody",{className:i},n.createElement("tr",{className:o},n.createElement("th",{className:(0,s.Z)("meta-panel-cell",d,u)},n.createElement(m.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,s.Z)("meta-panel-cell",d)},_)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,s.Z)("meta-panel-cell",d,u)},n.createElement(m.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,s.Z)("meta-panel-cell",d)},p||"No limitation")))))}var _=a(3958);function b(e){e.title;var t=e.url,a=e.method,s=e.isPublic,l=e.base,r=e.data,c=l||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(m.Z,null,"com.api_request")),n.createElement(_.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+c+t+'"',' -H "Content-Type: application/json"',s?" ":' -H "Authorization: Bearer $TOKEN"',r?" "+r:""))}var f="container_2R7I";function E(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:f},n.createElement("h3",null,n.createElement(m.Z,null,"com.api_endpoint")),n.createElement(_.Z,{className:"language-sass"},""+a+t))}var h=a(7462),v="title_37bC",k="panel_1nCE",N="table_1ccU",Z="tbody_2YH9",g="tr_122g",y="td_2Fkc",T="th_3Lc3",q="required_13Y0",w="name_NWXV",P=/p-([a-zA-Z_]+)/;function x(e){var t=e.name,a=e.value,l="";return e.required&&(l=n.createElement("div",{className:q},n.createElement(m.Z,null,"com.api_params.required"))),n.createElement("tr",{className:g},n.createElement("th",{className:(0,s.Z)(y,T)},n.createElement("code",{className:w},t),l),n.createElement("td",{className:y},a))}function A(e,t){var a={},n=P.exec(e);if(null!==n&&n.length>1){var s=n[1],l=e.slice(s.length+3);return a.name=s,0===l.length?a.value=t:"required"===l&&(a.required=t),a}return null}function I(e){var t=[],a={};for(var l in e)if(Object.hasOwnProperty.call(e,l)){var r=A(l,e[l]);if(null!==r)for(var c in Object.hasOwnProperty.call(a,r.name)||(a[r.name]={}),r)Object.hasOwnProperty.call(r,c)&&(a[r.name][c]=r[c])}for(var i in a)t.push({name:i,value:a[i].value||"",required:!!a[i].required});return n.createElement("section",{className:(0,s.Z)("meta-panel",k)},n.createElement("h3",{className:v},n.createElement(m.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,s.Z)("meta-panel-table",N)},n.createElement("tbody",{className:Z},t.map((function(e,t){return n.createElement(x,(0,h.Z)({key:t},e))})))))}var R="container_1Yme";function j(e){return n.createElement("div",{className:R},n.createElement("h3",null,n.createElement(m.Z,null,"com.api_payload")),n.createElement(_.Z,{className:"language-json"},e.children))}}}]);