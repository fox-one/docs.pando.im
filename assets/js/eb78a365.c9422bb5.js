"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[509],{9831:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return u},default:function(){return p}});var n=t(7462),l=t(3366),r=(t(7294),t(3905)),c=t(5532),i=["components"],o={title:"Create Actions",sidebar_position:9,date:new Date("2021-10-01T23:18:01.000Z")},s=void 0,m={unversionedId:"leaf/apis/actions",id:"leaf/apis/actions",isDocsHomePage:!1,title:"Create Actions",description:"APIMetaPanel,",source:"@site/developer/leaf/apis/actions.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/actions",permalink:"/developer/leaf/apis/actions",version:"current",lastUpdatedAt:1633747159,formattedLastUpdatedAt:"10/9/2021",sidebarPosition:9,frontMatter:{title:"Create Actions",sidebar_position:9,date:"2021-10-01T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Transactions",permalink:"/developer/leaf/apis/transactions"},next:{title:"Overview",permalink:"/developer/rings/overview"}},u=[{value:"Create an Action",id:"create-an-action",children:[{value:"POST /actions",id:"post-actions",children:[]}]}],d={toc:u};function p(e){var a=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-an-action"},"Create an Action"),(0,r.kt)("h3",{id:"post-actions"},"POST /actions"),(0,r.kt)("p",null,"Create an action with the parameters."),(0,r.kt)(c.jI,{base:"https://leaf-api.pando.im/api",url:"/actions",mdxType:"APIEndpoint"}),(0,r.kt)(c.Yk,{scope:"Authorized",mdxType:"APIMetaPanel"}),(0,r.kt)(c.so,{mdxType:"APIPayload"},'\n{\n  // the payment amount, optional\n  "amount": "1.014",\n  // the payment asset id, optional\n  "asset_id": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n  // an uuid to trace the transaction\n  "follow_id": "17d836d0-8b15-4cba-91d4-d343ed0ad737",\n  // action parameters (string array)\n  // Open a new vault:\n  // [\n  //    "31",\n  //    "d0ec4cc7-edf6-5359-bf23-41fc9d26444e", // collateral id\n  //    "100" // amount of pUSD generated\n  // ]\n  // Deposit collateral to vault:\n  // [\n  //    "32",\n  //    "b829e5f4-b452-4521-a0eb-ad65588ae91a" // vault id\n  // ]\n  // Withdraw collateral from vault:\n  // [\n  //    "33",\n  //    "b829e5f4-b452-4521-a0eb-ad65588ae91a", // vault id\n  //    "0.23" // amount of collateral to be withdrawed\n  // ]\n  // Payback pUSD:\n  // [\n  //    "34",\n  //    "b829e5f4-b452-4521-a0eb-ad65588ae91a" // vault id\n  // ]\n  // Generate more pUSD:\n  // [\n  //    "35",\n  //    "b829e5f4-b452-4521-a0eb-ad65588ae91a", // vault id\n  //    "100" // amount of pUSD generated\n  // ]\n  // Bid for an auction:\n  // [\n  //    "42",\n  //    "870c9719-0677-415f-981f-685546175e14", // auction id\n  //    "0.2" // amount of collateral wanted\n  // ]\n  "parameters": ["string"]\n}'),(0,r.kt)(c.Xv,{title:"Create an action",method:"POST",base:"https://leaf-api.pando.im/api",url:"/actions",data:"--data PAYLOAD",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  // the code and the code url.\n  // they could be used to invoke Mixin Network compatible wallet, like Messenger and Fennec.  "code": "string",\n  "code_url": "string",\n  "memo": "string"\n}\n')))}p.isMDXComponent=!0},5532:function(e,a,t){t.d(a,{jI:function(){return E},Yk:function(){return p},kH:function(){return D},so:function(){return x},Xv:function(){return v}});var n=t(7294),l=t(6010),r="title_sZG8",c="panel_2t5Q",i="table_3oTh",o="tbody_2SpR",s="tr_2EbQ",m="td_W9xC",u="th_3VyX",d=t(4973);function p(e){var a=e.scope,t=e.scopeNote,p=e.limitation,f=null;return f=a?n.createElement("div",null,n.createElement("code",null,a||"-"),t&&n.createElement("span",null,"; ",t)):n.createElement("span",null,n.createElement(d.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",c)},n.createElement("h3",{className:r},n.createElement(d.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",i)},n.createElement("tbody",{className:o},n.createElement("tr",{className:s},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,u)},n.createElement(d.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},f)),n.createElement("tr",{className:s},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,u)},n.createElement(d.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},p||"No limitation")))))}var f=t(3958);function v(e){e.title;var a=e.url,t=e.method,l=e.isPublic,r=e.base,c=e.data,i=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(d.Z,null,"com.api_request")),n.createElement(f.Z,{className:"language-bash"},"curl -X ",t||"GET"," ",'"'+i+a+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',c?" "+c:""))}var b="container_2R7I";function E(e){var a=e.url,t=e.base||"https://api.mixin.one";return n.createElement("div",{className:b},n.createElement("h3",null,n.createElement(d.Z,null,"com.api_endpoint")),n.createElement(f.Z,{className:"language-sass"},""+t+a))}var h=t(7462),_="title_37bC",N="panel_1nCE",Z="table_1ccU",k="tbody_2YH9",g="tr_122g",y="td_2Fkc",w="th_3Lc3",P="required_13Y0",A="name_NWXV",T=/p-([a-zA-Z_]+)/;function C(e){var a=e.name,t=e.value,r="";return e.required&&(r=n.createElement("div",{className:P},n.createElement(d.Z,null,"com.api_params.required"))),n.createElement("tr",{className:g},n.createElement("th",{className:(0,l.Z)(y,w)},n.createElement("code",{className:A},a),r),n.createElement("td",{className:y},t))}function O(e,a){var t={},n=T.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return t.name=l,0===r.length?t.value=a:"required"===r&&(t.required=a),t}return null}function D(e){var a=[],t={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var c=O(r,e[r]);if(null!==c)for(var i in Object.hasOwnProperty.call(t,c.name)||(t[c.name]={}),c)Object.hasOwnProperty.call(c,i)&&(t[c.name][i]=c[i])}for(var o in t)a.push({name:o,value:t[o].value||"",required:!!t[o].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",N)},n.createElement("h3",{className:_},n.createElement(d.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",Z)},n.createElement("tbody",{className:k},a.map((function(e,a){return n.createElement(C,(0,h.Z)({key:a},e))})))))}var q="container_1Yme";function x(e){return n.createElement("div",{className:q},n.createElement("h3",null,n.createElement(d.Z,null,"com.api_payload")),n.createElement(f.Z,{className:"language-json"},e.children))}}}]);