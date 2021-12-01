"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[7006],{1982:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),r=a(5532),s=["components"],c={title:"Read Auctions",date:new Date("2021-10-01T23:18:01.000Z")},o=void 0,p={unversionedId:"leaf/apis/flips",id:"leaf/apis/flips",isDocsHomePage:!1,title:"Read Auctions",description:"APIMetaPanel,",source:"@site/developer/leaf/apis/flips.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/flips",permalink:"/developer/leaf/apis/flips",version:"current",lastUpdatedAt:1636868787,formattedLastUpdatedAt:"11/14/2021",frontMatter:{title:"Read Auctions",date:"2021-10-01T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Collaterals",permalink:"/developer/leaf/apis/cats"},next:{title:"Read Vaults",permalink:"/developer/leaf/apis/vaults"}},d=[{value:"Read All Auctions",id:"read-all-auctions",children:[{value:"GET /flips",id:"get-flips",children:[]}]},{value:"Read Single Auctions",id:"read-single-auctions",children:[{value:"GET /flips/:id",id:"get-flipsid",children:[]}]},{value:"Read Auction Events",id:"read-auction-events",children:[{value:"GET /flips/:id/events",id:"get-flipsidevents",children:[]}]}],u={toc:d};function m(e){var t=e.components,a=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"read-all-auctions"},"Read All Auctions"),(0,i.kt)("h3",{id:"get-flips"},"GET /flips"),(0,i.kt)("p",null,"This API will respond all auctions."),(0,i.kt)(r.jI,{base:"https://leaf-api.pando.im/api",url:"/flips",mdxType:"APIEndpoint"}),(0,i.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,i.kt)(r.kH,{"p-cursor":"the cursor to start from","p-limit":"the limitation of items in response",mdxType:"APIParams"}),(0,i.kt)(r.Xv,{title:"Read all auctions",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/flips",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "flips": [\n    {\n      // ActionKick: the auction begins, any bid are accepted\n      // ActionBid: the auction bidding\n      // ActionDeal: the auction is over\n      "action": 0,\n      "art": "string",\n      // the current amount of bid\n      "bid": "string",\n      "collateral_id": "string",\n      "created_at": "2021-10-02",\n      // auction end time\n      "end": "2021-10-02",\n      "guy": "string",\n      "id": "string",\n      // the amount of auctioned collateral\n      "lot": "100",\n      // the max amount of bid accepted\n      "tab": "2",\n      // bid end time\n      "tic": "2021-10-02",\n      "vault_id": "string"\n    }\n  ],\n  "pagination": {\n    "has_next": true,\n    "next_cursor": "string"\n  }\n}\n')),(0,i.kt)("h2",{id:"read-single-auctions"},"Read Single Auctions"),(0,i.kt)("h3",{id:"get-flipsid"},"GET /flips/:id"),(0,i.kt)("p",null,"This API will respond one auction by ",(0,i.kt)("inlineCode",{parentName:"p"},":id"),"."),(0,i.kt)(r.jI,{base:"https://leaf-api.pando.im/api",url:"/flips/:id",mdxType:"APIEndpoint"}),(0,i.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,i.kt)(r.Xv,{title:"Read one auction",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/flips/4ce8a961-4b90-34e8-9780-6ce46a8205a6",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633139399005,\n  "data": {\n    "id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",\n    "created_at": "2021-06-22T13:00:42Z",\n    "tic": "2021-06-22T14:01:13Z",\n    "end": "2021-06-23T01:00:42Z",\n    "bid": "1859.30248633",\n    "lot": "1.07",\n    "tab": "1859.30248633",\n    "art": "1631.9052992207771378",\n    "collateral_id": "686cb137-b5e6-586c-bece-926736ffc583",\n    "vault_id": "754a82aa-6f9a-3ddc-aa4e-985f6e1b7687",\n    "guy": "",\n    "action": "FlipDeal"\n  }\n}\n')),(0,i.kt)("h2",{id:"read-auction-events"},"Read Auction Events"),(0,i.kt)("h3",{id:"get-flipsidevents"},"GET /flips/:id/events"),(0,i.kt)("p",null,"This API will respond all events of one auction by ",(0,i.kt)("inlineCode",{parentName:"p"},":id"),"."),(0,i.kt)(r.jI,{base:"https://leaf-api.pando.im/api",url:"/flips/:id/events",mdxType:"APIEndpoint"}),(0,i.kt)(r.Yk,{mdxType:"APIMetaPanel"}),(0,i.kt)(r.Xv,{title:"Read all events of one auction",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/flips/4ce8a961-4b90-34e8-9780-6ce46a8205a6/events",mdxType:"APIRequest"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633139503820,\n  "data": {\n    "events": [\n      {\n        "flip_id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",\n        "created_at": "2021-06-22T13:00:42Z",\n        "action": "FlipKick",\n        "bid": "0",\n        "lot": "1.358"\n      },\n      {\n        "flip_id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",\n        "created_at": "2021-06-22T13:01:55Z",\n        "action": "FlipBid",\n        "bid": "5",\n        "lot": "1.358"\n      },\n      {\n        "flip_id": "4ce8a961-4b90-34e8-9780-6ce46a8205a6",\n        "created_at": "2021-06-22T13:02:49Z",\n        "action": "FlipBid",\n        "bid": "1859.30248633",\n        "lot": "1.358"\n      },\n      // ...\n    ]\n  }\n}\n')))}m.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return E},Yk:function(){return m},kH:function(){return j},so:function(){return w},Xv:function(){return v}});var n=a(7294),l=a(6010),i="title_sZG8",r="panel_2t5Q",s="table_3oTh",c="tbody_2SpR",o="tr_2EbQ",p="td_W9xC",d="th_3VyX",u=a(4973);function m(e){var t=e.scope,a=e.scopeNote,m=e.limitation,f=null;return f=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(u.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",r)},n.createElement("h3",{className:i},n.createElement(u.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",s)},n.createElement("tbody",{className:c},n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",p,d)},n.createElement(u.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",p)},f)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",p,d)},n.createElement(u.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",p)},m||"No limitation")))))}var f=a(3958);function v(e){e.title;var t=e.url,a=e.method,l=e.isPublic,i=e.base,r=e.data,s=i||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_request")),n.createElement(f.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+s+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',r?" "+r:""))}var h="container_2R7I";function E(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:h},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_endpoint")),n.createElement(f.Z,{className:"language-sass"},""+a+t))}var b=a(7462),k="title_37bC",g="panel_1nCE",_="table_1ccU",N="tbody_2YH9",T="tr_122g",Z="td_2Fkc",A="th_3Lc3",y="required_13Y0",P="name_NWXV",R=/p-([a-zA-Z_]+)/;function I(e){var t=e.name,a=e.value,i="";return e.required&&(i=n.createElement("div",{className:y},n.createElement(u.Z,null,"com.api_params.required"))),n.createElement("tr",{className:T},n.createElement("th",{className:(0,l.Z)(Z,A)},n.createElement("code",{className:P},t),i),n.createElement("td",{className:Z},a))}function x(e,t){var a={},n=R.exec(e);if(null!==n&&n.length>1){var l=n[1],i=e.slice(l.length+3);return a.name=l,0===i.length?a.value=t:"required"===i&&(a.required=t),a}return null}function j(e){var t=[],a={};for(var i in e)if(Object.hasOwnProperty.call(e,i)){var r=x(i,e[i]);if(null!==r)for(var s in Object.hasOwnProperty.call(a,r.name)||(a[r.name]={}),r)Object.hasOwnProperty.call(r,s)&&(a[r.name][s]=r[s])}for(var c in a)t.push({name:c,value:a[c].value||"",required:!!a[c].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",g)},n.createElement("h3",{className:k},n.createElement(u.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",_)},n.createElement("tbody",{className:N},t.map((function(e,t){return n.createElement(I,(0,b.Z)({key:t},e))})))))}var q="container_1Yme";function w(e){return n.createElement("div",{className:q},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_payload")),n.createElement(f.Z,{className:"language-json"},e.children))}}}]);