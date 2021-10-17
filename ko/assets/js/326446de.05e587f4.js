"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[6261],{7901:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=a(5532),i=["components"],s={title:"Create Actions",sidebar_position:9,date:new Date("2021-09-30T23:18:01.000Z")},c=void 0,m={unversionedId:"lake/apis/actions",id:"lake/apis/actions",isDocsHomePage:!1,title:"Create Actions",description:"APIMetaPanel,",source:"@site/developer/lake/apis/actions.md",sourceDirName:"lake/apis",slug:"/lake/apis/actions",permalink:"/ko/developer/lake/apis/actions",version:"current",lastUpdatedAt:1633747023,formattedLastUpdatedAt:"10/9/2021",sidebarPosition:9,frontMatter:{title:"Create Actions",sidebar_position:9,date:"2021-09-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Assets",permalink:"/ko/developer/lake/apis/assets"},next:{title:"Action Protocol",permalink:"/ko/developer/lake/action-protocol"}},p=[{value:"POST /actions",id:"post-actions",children:[]}],u={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"post-actions"},"POST /actions"),(0,l.kt)("p",null,"This is an API to generate an encrypted transfer by provided ",(0,l.kt)("a",{parentName:"p",href:"../action-protocol"},"action protocol")," data. It's useful if you don't want to sign and encrypt the transfer yourself."),(0,l.kt)(o.jI,{base:"https://api.4swap.org/api",url:"/actions",mdxType:"APIEndpoint"}),(0,l.kt)(o.Yk,{scope:"Authorized",mdxType:"APIMetaPanel"}),(0,l.kt)(o.so,{mdxType:"APIPayload"},'{\n  // Action protocol data\n  "action":     "3,dfa655ef-55db-4e18-bdd7-29a7c576a223,92779607-e478-4f66-95a6-b2ae47f69d55,c6d0c728-2624-429b-8e0d-d9d19b6592fa,e2nUv,0.0000042669",\n  // amount of crypto\n  "amount":     "123",\n  // asset id of crypto\n  "asset_id":   "2566bf58-c4de-3479-8c55-c137bb7fe2ae",\n  // optional, broker id, leave it empty to use 4swap\'s default broker\n  "broker_id":  "",\n  // optional, an UUID to trace the transfer\n  "trace_id":   ""\n}\n'),(0,l.kt)(o.Xv,{title:"Create an action",method:"POST",base:"https://api.4swap.org/api",url:"/actions --data PAYLOAD",mdxType:"APIRequest"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766503,\n  "data": {\n    // the encrypted action data\n    "action": "...",\n    // the code and the code url.\n    // they could be used to invoke Mixin Network compatible wallet, like Messenger and Fennec.\n    "code": "d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx",\n    "code_url": "mixin://codes/d294380f-xxxx-xxxx-xxxx-xxxxxxxxxxxx",\n    // an UUID to trace the transfer\n    "follow_id": "yyyyyyyy-xxxx-xxxx-xxxx-xxxxxxxxxxxx"\n  }\n}\n')),(0,l.kt)("p",null,"If you are using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/fox-one/mixin-sdk-go"},"mixin-sdk-go")," client, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"action")," as the parameter for ",(0,l.kt)("inlineCode",{parentName:"p"},"client.Transaction")," to create and send the transaction to the Mainnet address:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// send a transaction to a multi-sign address which specified by `OpponentMultisig`\n// the OpponentMultisig.Receivers are the MTG group members\ntx, err := client.Transaction(ctx, &mixin.TransferInput{\n    AssetID: assetID,\n    Amount:  decimal.RequireFromString(amount),\n    TraceID: mixin.RandomTraceID(),\n  // the `action` field in the response\n    Memo:    resp.Action,\n  // the MTG members from `/api/information`\n    OpponentMultisig: struct {\n        Receivers []string `json:"receivers,omitempty"`\n        Threshold uint8    `json:"threshold,omitempty"`\n    }{\n        Receivers: group.Members,\n        Threshold: uint8(group.Threshold),\n    },\n}, *pin)\n')),(0,l.kt)("p",null,"If you want to integrate a web app with Mixin Network compatible wallets, for example, ",(0,l.kt)("a",{parentName:"p",href:"/docs/apps/wallets#mixin-messenger"},"Mixin Messenger")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/apps/wallets#fennec"},"Fennec"),", please read ",(0,l.kt)("a",{parentName:"p",href:"../guide/invoke-wallets"},"Guide / Invoking Wallets"),"."))}d.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return k},Yk:function(){return d},kH:function(){return M},so:function(){return C},Xv:function(){return f}});var n=a(7294),r=a(6010),l="title_sZG8",o="panel_2t5Q",i="table_3oTh",s="tbody_2SpR",c="tr_2EbQ",m="td_W9xC",p="th_3VyX",u=a(4973);function d(e){var t=e.scope,a=e.scopeNote,d=e.limitation,x=null;return x=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(u.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,r.Z)("meta-panel",o)},n.createElement("h3",{className:l},n.createElement(u.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,r.Z)("meta-panel-table",i)},n.createElement("tbody",{className:s},n.createElement("tr",{className:c},n.createElement("th",{className:(0,r.Z)("meta-panel-cell",m,p)},n.createElement(u.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,r.Z)("meta-panel-cell",m)},x)),n.createElement("tr",{className:c},n.createElement("th",{className:(0,r.Z)("meta-panel-cell",m,p)},n.createElement(u.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,r.Z)("meta-panel-cell",m)},d||"No limitation")))))}var x=a(3958);function f(e){e.title;var t=e.url,a=e.method,r=e.isPublic,l=e.base,o=e.data,i=l||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_request")),n.createElement(x.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+i+t+'"',' -H "Content-Type: application/json"',r?" ":' -H "Bearer: $TOKEN"',o?" "+o:""))}var h="container_2R7I";function k(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:h},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_endpoint")),n.createElement(x.Z,{className:"language-sass"},""+a+t))}var b=a(7462),v="title_37bC",E="panel_1nCE",N="table_1ccU",g="tbody_2YH9",y="tr_122g",_="td_2Fkc",Z="th_3Lc3",T="required_13Y0",w="name_NWXV",A=/p-([a-zA-Z_]+)/;function I(e){var t=e.name,a=e.value,l="";return e.required&&(l=n.createElement("div",{className:T},n.createElement(u.Z,null,"com.api_params.required"))),n.createElement("tr",{className:y},n.createElement("th",{className:(0,r.Z)(_,Z)},n.createElement("code",{className:w},t),l),n.createElement("td",{className:_},a))}function P(e,t){var a={},n=A.exec(e);if(null!==n&&n.length>1){var r=n[1],l=e.slice(r.length+3);return a.name=r,0===l.length?a.value=t:"required"===l&&(a.required=t),a}return null}function M(e){var t=[],a={};for(var l in e)if(Object.hasOwnProperty.call(e,l)){var o=P(l,e[l]);if(null!==o)for(var i in Object.hasOwnProperty.call(a,o.name)||(a[o.name]={}),o)Object.hasOwnProperty.call(o,i)&&(a[o.name][i]=o[i])}for(var s in a)t.push({name:s,value:a[s].value||"",required:!!a[s].required});return n.createElement("section",{className:(0,r.Z)("meta-panel",E)},n.createElement("h3",{className:v},n.createElement(u.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,r.Z)("meta-panel-table",N)},n.createElement("tbody",{className:g},t.map((function(e,t){return n.createElement(I,(0,b.Z)({key:t},e))})))))}var O="container_1Yme";function C(e){return n.createElement("div",{className:O},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_payload")),n.createElement(x.Z,{className:"language-json"},e.children))}}}]);