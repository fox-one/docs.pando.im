"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[1583],{8352:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var n=t(7462),l=t(3366),r=(t(7294),t(3905)),c=t(5532),s=["components"],i={title:"Read Order Detail",date:new Date("2021-11-15T14:18:01.000Z")},o=void 0,d={unversionedId:"lake/apis/orders",id:"lake/apis/orders",isDocsHomePage:!1,title:"Read Order Detail",description:"APIMetaPanel,",source:"@site/developer/lake/apis/orders.md",sourceDirName:"lake/apis",slug:"/lake/apis/orders",permalink:"/developer/lake/apis/orders",version:"current",lastUpdatedAt:1636958083,formattedLastUpdatedAt:"11/15/2021",frontMatter:{title:"Read Order Detail",date:"2021-11-15T14:18:01.000Z"},sidebar:"docs",previous:{title:"Create Actions",permalink:"/developer/lake/apis/actions"},next:{title:"List Transactions",permalink:"/developer/lake/apis/transactions"}},m=[{value:"GET /orders/:follow_id",id:"get-ordersfollow_id",children:[]}],u={toc:m};function p(e){var a=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-ordersfollow_id"},"GET /orders/:follow_id"),(0,r.kt)("p",null,"This API will respond the order detail related to the follow id."),(0,r.kt)(c.jI,{base:"https://api.4swap.org/api",url:"/orders/:follow_id",mdxType:"APIEndpoint"}),(0,r.kt)(c.Yk,{scope:"Authorized",mdxType:"APIMetaPanel"}),(0,r.kt)(c.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(c.Xv,{title:"Read order detail",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/orders/:follow_id",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "data": {\n    "id": "87ae5014-d20f-4cf1-b530-8771137e4e0e",\n    "created_at": "2020-09-15T03:35:34Z",\n    "user_id": "8017d200-7870-4b82-b53f-74bae1d2dad7",\n    "state": "Done", // order status Trading/Rejected/Done\n    "pay_asset_id": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",\n    "fill_asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n    "pay_amount": "1",\n    "fill_amount": "00025725", \n    "min_amount": "0.0002521",\n    "routes": "1bv",\n    "route_assets": [\n      "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",\n      "c6d0c728-2624-429b-8e0d-d9d19b6592fa"\n    ],\n    "transactions": [\n      {\n        "id": "87ae5014-d20f-4cf1-b530-8771137e4e0e",\n        "created_at": "2020-09-15T03:35:34Z",\n        "user_id": "8017d200-7870-4b82-b53f-74bae1d2dad7",\n        "type": "Swap",\n        "base_asset_id": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",\n        "quote_asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n        "base_amount": "1",\n        "quote_amount": "-0.00025725",\n        "fee_asset_id": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",\n        "fee_amount": "0.003",\n        "pay_asset_id": "6cfe566e-4aad-470b-8c9a-2fd35b49c68d",\n        "filled_asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n        "funds": "1",\n        "amount": "0.00025725"\n      }\n    ]\n  }\n}\n')))}p.isMDXComponent=!0},5532:function(e,a,t){t.d(a,{jI:function(){return E},Yk:function(){return p},kH:function(){return I},so:function(){return R},Xv:function(){return _}});var n=t(7294),l=t(6010),r="title_sZG8",c="panel_2t5Q",s="table_3oTh",i="tbody_2SpR",o="tr_2EbQ",d="td_W9xC",m="th_3VyX",u=t(4973);function p(e){var a=e.scope,t=e.scopeNote,p=e.limitation,f=null;return f=a?n.createElement("div",null,n.createElement("code",null,a||"-"),t&&n.createElement("span",null,"; ",t)):n.createElement("span",null,n.createElement(u.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",c)},n.createElement("h3",{className:r},n.createElement(u.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",s)},n.createElement("tbody",{className:i},n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",d,m)},n.createElement(u.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",d)},f)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",d,m)},n.createElement(u.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",d)},p||"No limitation")))))}var f=t(3958);function _(e){e.title;var a=e.url,t=e.method,l=e.isPublic,r=e.base,c=e.data,s=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_request")),n.createElement(f.Z,{className:"language-bash"},"curl -X ",t||"GET"," ",'"'+s+a+'"',' -H "Content-Type: application/json"',l?" ":' -H "Authorization: Bearer $TOKEN"',c?" "+c:""))}var b="container_2R7I";function E(e){var a=e.url,t=e.base||"https://api.mixin.one";return n.createElement("div",{className:b},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_endpoint")),n.createElement(f.Z,{className:"language-sass"},""+t+a))}var v=t(7462),h="title_37bC",N="panel_1nCE",k="table_1ccU",Z="tbody_2YH9",g="tr_122g",y="td_2Fkc",T="th_3Lc3",w="required_13Y0",P="name_NWXV",q=/p-([a-zA-Z_]+)/;function A(e){var a=e.name,t=e.value,r="";return e.required&&(r=n.createElement("div",{className:w},n.createElement(u.Z,null,"com.api_params.required"))),n.createElement("tr",{className:g},n.createElement("th",{className:(0,l.Z)(y,T)},n.createElement("code",{className:P},a),r),n.createElement("td",{className:y},t))}function D(e,a){var t={},n=q.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return t.name=l,0===r.length?t.value=a:"required"===r&&(t.required=a),t}return null}function I(e){var a=[],t={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var c=D(r,e[r]);if(null!==c)for(var s in Object.hasOwnProperty.call(t,c.name)||(t[c.name]={}),c)Object.hasOwnProperty.call(c,s)&&(t[c.name][s]=c[s])}for(var i in t)a.push({name:i,value:t[i].value||"",required:!!t[i].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",N)},n.createElement("h3",{className:h},n.createElement(u.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",k)},n.createElement("tbody",{className:Z},a.map((function(e,a){return n.createElement(A,(0,v.Z)({key:a},e))})))))}var O="container_1Yme";function R(e){return n.createElement("div",{className:O},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_payload")),n.createElement(f.Z,{className:"language-json"},e.children))}}}]);