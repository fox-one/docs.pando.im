"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5993],{1637:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var n=a(7462),s=a(3366),i=(a(7294),a(3905)),l=a(5532),r=["components"],c={title:"List Transactions",date:new Date("2021-12-30T23:18:01.000Z")},o=void 0,d={unversionedId:"lake/apis/transactions",id:"lake/apis/transactions",isDocsHomePage:!1,title:"List Transactions",description:"APIMetaPanel,",source:"@site/developer/lake/apis/transactions.md",sourceDirName:"lake/apis",slug:"/lake/apis/transactions",permalink:"/ja/developer/lake/apis/transactions",version:"current",lastUpdatedAt:1641308929,formattedLastUpdatedAt:"1/4/2022",frontMatter:{title:"List Transactions",date:"2021-12-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Order Detail",permalink:"/ja/developer/lake/apis/orders"},next:{title:"Design",permalink:"/ja/developer/lake/design"}},u=[{value:"GET /transactions",id:"get-transactions",children:[]},{value:"GET /transactions/{base_asset_id}/{quote_asset_id}",id:"get-transactionsbase_asset_idquote_asset_id",children:[]},{value:"GET /transactions/{base_asset_id}/{quote_asset_id}/mine",id:"get-transactionsbase_asset_idquote_asset_idmine",children:[]}],p={toc:u};function m(e){var t=e.components,a=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-transactions"},"GET /transactions"),(0,i.kt)("p",null,"This API will respond a list of transactions."),(0,i.kt)(l.jI,{base:"https://api.4swap.org/api",url:"/transactions",mdxType:"APIEndpoint"}),(0,i.kt)(l.Yk,{mdxType:"APIMetaPanel"}),(0,i.kt)(l.Xv,{title:"Read transactions",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/transactions?cursor={next_cursor}&limit={limit}",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1640871682322,\n  "data": {\n    "transactions": [\n      {\n        "id": "c5002520-2e63-587e-96ec-0f5af779a08b",\n        "created_at": "2021-12-30T13:41:21Z",\n        "type": "Swap", // transaction types, Swap, Withdraw, Deposit\n        "base_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "quote_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "base_amount": "0.47768255",\n        "quote_amount": "-553.26863537",\n        "fee_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "fee_amount": "0.00143304",\n        "pay_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "filled_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "funds": "0.47768255",\n        "amount": "553.26863537",\n        "value": "0.48",\n        "fee_value": "0",\n        "follow_id": "45432f10-d5b9-41dd-88fc-2cc92c736b19",\n        "liquidity": "0"\n      }\n    ],\n    "pagination": {\n      "next_cursor": "13982534",\n      "has_next": true\n    }\n  }\n}\n\n')),(0,i.kt)("h2",{id:"get-transactionsbase_asset_idquote_asset_id"},"GET /transactions/{base_asset_id}/{quote_asset_id}"),(0,i.kt)("p",null,"This API will respond a list of transactions of the specified pair."),(0,i.kt)(l.jI,{base:"https://api.4swap.org/api",url:"/transactions/{base_asset_id}/{quote_asset_id}",mdxType:"APIEndpoint"}),(0,i.kt)(l.Yk,{mdxType:"APIMetaPanel"}),(0,i.kt)(l.Xv,{title:"Read transactions of the specified pair",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/transactions/{base_asset_id}/{quote_asset_id}?cursor={next_cursor}&limit={limit}",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1640871682322,\n  "data": {\n    "transactions": [\n      {\n        "id": "c5002520-2e63-587e-96ec-0f5af779a08b",\n        "created_at": "2021-12-30T13:41:21Z",\n        "type": "Swap", // transaction types, Swap, Withdraw, Deposit\n        "base_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "quote_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "base_amount": "0.47768255",\n        "quote_amount": "-553.26863537",\n        "fee_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "fee_amount": "0.00143304",\n        "pay_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "filled_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "funds": "0.47768255",\n        "amount": "553.26863537",\n        "value": "0.48",\n        "fee_value": "0",\n        "follow_id": "45432f10-d5b9-41dd-88fc-2cc92c736b19",\n        "liquidity": "0"\n      }\n    ],\n    "pagination": {\n      "next_cursor": "13982534",\n      "has_next": true\n    }\n  }\n}\n\n')),(0,i.kt)("h2",{id:"get-transactionsbase_asset_idquote_asset_idmine"},"GET /transactions/{base_asset_id}/{quote_asset_id}/mine"),(0,i.kt)("p",null,"This API will respond a list of transactions of the specified pair releated to me."),(0,i.kt)(l.jI,{base:"https://api.4swap.org/api",url:"/transactions/{base_asset_id}/{quote_asset_id}/mine",mdxType:"APIEndpoint"}),(0,i.kt)(l.Yk,{mdxType:"APIMetaPanel"}),(0,i.kt)(l.Xv,{title:"Read transactions of the specified pair",method:"GET",base:"https://api.4swap.org/api",url:"/transactions/{base_asset_id}/{quote_asset_id}?cursor={next_cursor}&limit={limit}",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1640871682322,\n  "data": {\n    "transactions": [\n      {\n        "id": "c5002520-2e63-587e-96ec-0f5af779a08b",\n        "created_at": "2021-12-30T13:41:21Z",\n        "type": "Swap", // transaction types, Swap, Withdraw, Deposit\n        "base_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "quote_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "base_amount": "0.47768255",\n        "quote_amount": "-553.26863537",\n        "fee_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "fee_amount": "0.00143304",\n        "pay_asset_id": "4d8c508b-91c5-375b-92b0-ee702ed2dac5",\n        "filled_asset_id": "8b79271e-b8b1-3782-8b4b-b8cf6cf10881",\n        "funds": "0.47768255",\n        "amount": "553.26863537",\n        "value": "0.48",\n        "fee_value": "0",\n        "follow_id": "45432f10-d5b9-41dd-88fc-2cc92c736b19",\n        "liquidity": "0"\n      }\n    ],\n    "pagination": {\n      "next_cursor": "13982534",\n      "has_next": true\n    }\n  }\n}\n\n')))}m.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return E},Yk:function(){return m},kH:function(){return A},so:function(){return R},Xv:function(){return b}});var n=a(7294),s=a(6010),i="title_sZG8",l="panel_2t5Q",r="table_3oTh",c="tbody_2SpR",o="tr_2EbQ",d="td_W9xC",u="th_3VyX",p=a(4973);function m(e){var t=e.scope,a=e.scopeNote,m=e.limitation,_=null;return _=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,s.Z)("meta-panel",l)},n.createElement("h3",{className:i},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,s.Z)("meta-panel-table",r)},n.createElement("tbody",{className:c},n.createElement("tr",{className:o},n.createElement("th",{className:(0,s.Z)("meta-panel-cell",d,u)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,s.Z)("meta-panel-cell",d)},_)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,s.Z)("meta-panel-cell",d,u)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,s.Z)("meta-panel-cell",d)},m||"No limitation")))))}var _=a(3958);function b(e){e.title;var t=e.url,a=e.method,s=e.isPublic,i=e.base,l=e.data,r=i||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(_.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+r+t+'"',' -H "Content-Type: application/json"',s?" ":' -H "Authorization: Bearer $TOKEN"',l?" "+l:""))}var f="container_2R7I";function E(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:f},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(_.Z,{className:"language-sass"},""+a+t))}var h=a(7462),v="title_37bC",k="panel_1nCE",g="table_1ccU",N="tbody_2YH9",T="tr_122g",y="td_2Fkc",q="th_3Lc3",Z="required_13Y0",w="name_NWXV",P=/p-([a-zA-Z_]+)/;function x(e){var t=e.name,a=e.value,i="";return e.required&&(i=n.createElement("div",{className:Z},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:T},n.createElement("th",{className:(0,s.Z)(y,q)},n.createElement("code",{className:w},t),i),n.createElement("td",{className:y},a))}function I(e,t){var a={},n=P.exec(e);if(null!==n&&n.length>1){var s=n[1],i=e.slice(s.length+3);return a.name=s,0===i.length?a.value=t:"required"===i&&(a.required=t),a}return null}function A(e){var t=[],a={};for(var i in e)if(Object.hasOwnProperty.call(e,i)){var l=I(i,e[i]);if(null!==l)for(var r in Object.hasOwnProperty.call(a,l.name)||(a[l.name]={}),l)Object.hasOwnProperty.call(l,r)&&(a[l.name][r]=l[r])}for(var c in a)t.push({name:c,value:a[c].value||"",required:!!a[c].required});return n.createElement("section",{className:(0,s.Z)("meta-panel",k)},n.createElement("h3",{className:v},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,s.Z)("meta-panel-table",g)},n.createElement("tbody",{className:N},t.map((function(e,t){return n.createElement(x,(0,h.Z)({key:t},e))})))))}var j="container_1Yme";function R(e){return n.createElement("div",{className:j},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(_.Z,{className:"language-json"},e.children))}}}]);