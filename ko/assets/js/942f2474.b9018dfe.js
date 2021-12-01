"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[6825],{265:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),r=a(5532),s=["components"],c={title:"Read Auctions",date:new Date("2021-10-01T23:18:01.000Z")},o=void 0,p={unversionedId:"leaf/apis/flips",id:"leaf/apis/flips",isDocsHomePage:!1,title:"Read Auctions",description:"Read All Auctions",source:"@site/i18n/ko/docusaurus-plugin-content-docs-developer/current/leaf/apis/flips.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/flips",permalink:"/ko/developer/leaf/apis/flips",version:"current",lastUpdatedAt:1637593920,formattedLastUpdatedAt:"11/22/2021",frontMatter:{title:"Read Auctions",date:"2021-10-01T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Collaterals",permalink:"/ko/developer/leaf/apis/cats"},next:{title:"Read Vaults",permalink:"/ko/developer/leaf/apis/vaults"}},d=[{value:"Read All Auctions",id:"read-all-auctions",children:[{value:"GET /flips",id:"get-flips",children:[]}]},{value:"Read Single Auctions",id:"read-single-auctions",children:[{value:"GET /flips/:id",id:"get-flipsid",children:[]}]},{value:"Read Auction Events",id:"read-auction-events",children:[{value:"GET /flips/:id/events",id:"get-flipsidevents",children:[]}]}],u={toc:d};function m(e){var t=e.components,a=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"read-all-auctions"},"Read All Auctions"),(0,i.kt)("h3",{id:"get-flips"},"GET /flips"),(0,i.kt)("p",null,"\uc774 API\ub294 \ubaa8\ub4e0 \uacbd\ub9e4\uc5d0 \uc751\ub2f5\ud569\ub2c8\ub2e4."),(0,i.kt)(r.jI,{base:"https://leaf-api.pando.im/api",url:"/flips",mdxType:"APIEndpoint"}),(0,i.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,i.kt)(r.kH,{"p-cursor":"the cursor to start from","p-limit":"the limitation of items in response",mdxType:"APIParams"}),(0,i.kt)(r.Xv,{title:"Read all auctions",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/flips",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "flips": [\n    {\n      // ActionKick: \uacbd\ub9e4\uac00 \uc2dc\uc791\ub418\uba74 \ubaa8\ub4e0 \uc785\ucc30\uac00\uac00 \uc218\ub77d\ub429\ub2c8\ub2e4.\n      // ActionBid: \uacbd\ub9e4 \uc785\ucc30\n      // ActionDeal: \uacbd\ub9e4 \uc885\ub8cc\n      "action": 0,\n      "art": "string",\n      // \ud604\uc7ac \uc785\ucc30 \uae08\uc561\n      "bid": "string",\n      "collateral_id": "string",\n      "created_at": "2021-10-02",\n      // \uacbd\ub9e4 \uc885\ub8cc \uc2dc\uac04\n      "end": "2021-10-02",\n      "guy": "string",\n      "id": "string",\n      // \uacbd\ub9e4 \ub2f4\ubcf4 \uae08\uc561\n      "lot": "100",\n      // \ub099\ucc30 \ucd5c\uace0\uc561\n      "tab": "2",\n      // \uc785\ucc30 \uc885\ub8cc \uc2dc\uac04\n      "tic": "2021-10-02",\n      "vault_id": "string"\n    }\n  ],\n  "pagination": {\n    "has_next": true,\n    "next_cursor": "string"\n  }\n}\n')),(0,i.kt)("h2",{id:"read-single-auctions"},"Read Single Auctions"),(0,i.kt)("h3",{id:"get-flipsid"},"GET /flips/:id"),(0,i.kt)("p",null,"\uc774 API\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},":id"),"\ub85c \ud558\ub098\uc758 \uacbd\ub9e4\uc5d0 \uc751\ub2f5\ud569\ub2c8\ub2e4."),(0,i.kt)(r.jI,{base:"https://leaf-api.pando.im/api",url:"/flips/:id",mdxType:"APIEndpoint"}),(0,i.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,i.kt)(r.Xv,{title:"Read one auction",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/flips/4ce8a961-4b90-34e8-9780-6ce46a8205a6",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633139399005,\n  "data": {\n    "id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",\n    "created_at": "2021-06-22T13:00:42Z",\n    "tic": "2021-06-22T14:01:13Z",\n    "end": "2021-06-23T01:00:42Z",\n    "bid": "1859.30248633",\n    "lot": "1.07",\n    "tab": "1859.30248633",\n    "art": "1631.9052992207771378",\n    "collateral_id": "686cb137-b5e6-586c-bece-926736ffc583",\n    "vault_id": "754a82aa-6f9a-3ddc-aa4e-985f6e1b7687",\n    "guy": "",\n    "action": "FlipDeal"\n  }\n}\n')),(0,i.kt)("h2",{id:"read-auction-events"},"Read Auction Events"),(0,i.kt)("h3",{id:"get-flipsidevents"},"GET /flips/:id/events"),(0,i.kt)("p",null,"\uc774 API\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},":id"),"\ub85c \ud55c \uacbd\ub9e4\uc758 \ubaa8\ub4e0 \uc774\ubca4\ud2b8\uc5d0 \uc751\ub2f5\ud569\ub2c8\ub2e4."),(0,i.kt)(r.jI,{base:"https://leaf-api.pando.im/api",url:"/flips/:id/events",mdxType:"APIEndpoint"}),(0,i.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,i.kt)(r.Xv,{title:"Read all events of one auction",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/flips/4ce8a961-4b90-34e8-9780-6ce46a8205a6/events",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633139503820,\n  "data": {\n    "events": [\n      {\n        "flip_id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",\n        "created_at": "2021-06-22T13:00:42Z",\n        "action": "FlipKick",\n        "bid": "0",\n        "lot": "1.358"\n      },\n      {\n        "flip_id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",\n        "created_at": "2021-06-22T13:01:55Z",\n        "action": "FlipBid",\n        "bid": "5",\n        "lot": "1.358"\n      },\n      {\n        "flip_id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",\n        "created_at": "2021-06-22T13:02:49Z",\n        "action": "FlipBid",\n        "bid": "1859.30248633",\n        "lot": "1.358"\n      },\n      // ...\n    ]\n  }\n}\n')))}m.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return h},Yk:function(){return m},kH:function(){return j},so:function(){return G},Xv:function(){return v}});var n=a(7294),l=a(6010),i="title_sZG8",r="panel_2t5Q",s="table_3oTh",c="tbody_2SpR",o="tr_2EbQ",p="td_W9xC",d="th_3VyX",u=a(4973);function m(e){var t=e.scope,a=e.scopeNote,m=e.limitation,f=null;return f=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(u.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",r)},n.createElement("h3",{className:i},n.createElement(u.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",s)},n.createElement("tbody",{className:c},n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",p,d)},n.createElement(u.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",p)},f)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",p,d)},n.createElement(u.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",p)},m||"No limitation")))))}var f=a(2489);function v(e){e.title;var t=e.url,a=e.method,l=e.isPublic,i=e.base,r=e.data,s=i||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_request")),n.createElement(f.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+s+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',r?" "+r:""))}var E="container_2R7I";function h(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:E},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_endpoint")),n.createElement(f.Z,{className:"language-sass"},""+a+t))}var b=a(7462),k="title_37bC",_="panel_1nCE",g="table_1ccU",N="tbody_2YH9",Z="tr_122g",T="td_2Fkc",A="th_3Lc3",R="required_13Y0",y="name_NWXV",P=/p-([a-zA-Z_]+)/;function I(e){var t=e.name,a=e.value,i="";return e.required&&(i=n.createElement("div",{className:R},n.createElement(u.Z,null,"com.api_params.required"))),n.createElement("tr",{className:Z},n.createElement("th",{className:(0,l.Z)(T,A)},n.createElement("code",{className:y},t),i),n.createElement("td",{className:T},a))}function x(e,t){var a={},n=P.exec(e);if(null!==n&&n.length>1){var l=n[1],i=e.slice(l.length+3);return a.name=l,0===i.length?a.value=t:"required"===i&&(a.required=t),a}return null}function j(e){var t=[],a={};for(var i in e)if(Object.hasOwnProperty.call(e,i)){var r=x(i,e[i]);if(null!==r)for(var s in Object.hasOwnProperty.call(a,r.name)||(a[r.name]={}),r)Object.hasOwnProperty.call(r,s)&&(a[r.name][s]=r[s])}for(var c in a)t.push({name:c,value:a[c].value||"",required:!!a[c].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",_)},n.createElement("h3",{className:k},n.createElement(u.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",g)},n.createElement("tbody",{className:N},t.map((function(e,t){return n.createElement(I,(0,b.Z)({key:t},e))})))))}var q="container_1Yme";function G(e){return n.createElement("div",{className:q},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_payload")),n.createElement(f.Z,{className:"language-json"},e.children))}}}]);