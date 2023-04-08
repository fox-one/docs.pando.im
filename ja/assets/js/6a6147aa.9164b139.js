"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[3135],{5640:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),i=a(6084);const r={title:"Read Info",date:new Date("2021-09-30T23:18:01.000Z")},s=void 0,c={unversionedId:"leaf/apis/info",id:"leaf/apis/info",title:"Read Info",description:"Read MTG Info",source:"@site/i18n/ja/docusaurus-plugin-content-docs-developer/current/leaf/apis/info.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/info",permalink:"/ja/developer/leaf/apis/info",draft:!1,tags:[],version:"current",frontMatter:{title:"Read Info",date:"2021-09-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"Leaf API Overview",permalink:"/ja/developer/leaf/apis/overview"},next:{title:"Authorization",permalink:"/ja/developer/leaf/apis/auth"}},o={},m=[{value:"Read MTG Info",id:"read-mtg-info",level:2},{value:"GET /info",id:"get-info",level:3},{value:"Read Server Time",id:"read-server-time",level:2},{value:"GET /time",id:"get-time",level:3}],d={toc:m};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"read-mtg-info"},"Read MTG Info"),(0,l.kt)("h3",{id:"get-info"},"GET /info"),(0,l.kt)("p",null,"This API will respond the MTG information of Pando Leaf."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"You can save the response to use it later because the MTG information wouldn't change frequently.")),(0,l.kt)(i.jI,{base:"https://leaf-api.pando.im/api",url:"/info",mdxType:"APIEndpoint"}),(0,l.kt)(i.Yk,{mdxType:"APIMetaPanel"}),(0,l.kt)(i.Xv,{title:"Read MTG info",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/info",mdxType:"APIRequest"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633139812299,\n  "data": {\n    "oauth_client_id": "75f18fe8-b056-46d6-9c48-0214425e58ce",\n    "members": [\n      "75f18fe8-b056-46d6-9c48-0214425e58ce",\n      "e96c26ca-666a-417b-9731-112d48725cca",\n      "1265e53d-3642-484c-9f3d-b8616606fd6d",\n      "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826",\n      "04601cb1-6691-4666-b4d8-720172c3a7d9",\n      "d2d4399d-669d-4448-89f6-d65805e62fb7"\n    ],\n    "threshold": 4,\n    "public_key": "mCNrmLpdwJ9zk5GsNL/ot9YXOSrCndx1ZFAiLHZxnMI="\n  }\n}\n')),(0,l.kt)("h2",{id:"read-server-time"},"Read Server Time"),(0,l.kt)("h3",{id:"get-time"},"GET /time"),(0,l.kt)("p",null,"This API will respond the server time of Pando Leaf."),(0,l.kt)(i.jI,{base:"https://leaf-api.pando.im/api",url:"/time",mdxType:"APIEndpoint"}),(0,l.kt)(i.Yk,{mdxType:"APIMetaPanel"}),(0,l.kt)(i.Xv,{title:"Read the server time",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/time",mdxType:"APIRequest"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633139971226,\n  "data": {\n    "iso": "2021-10-02T01:59:31Z",\n    "epoch": 1633139971\n  }\n}\n')))}p.isMDXComponent=!0},6084:(e,t,a)=>{a.d(t,{jI:()=>v,Yk:()=>u,kH:()=>G,so:()=>q,Xv:()=>E});var n=a(7294),l=a(6010);const i="title_yRZ_",r="panel_zdgl",s="table_CSyr",c="tbody_TiJw",o="tr_Y4gG",m="td_nN29",d="th_yzq_";var p=a(5999);function u(e){let{scope:t,scopeNote:a,limitation:u}=e,f=null;return f=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",r)},n.createElement("h3",{className:i},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",s)},n.createElement("tbody",{className:c},n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,d)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},f)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,d)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},u||"No limitation")))))}var f=a(814);function E(e){let{title:t,url:a,method:l,isPublic:i,base:r,data:s}=e;const c=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(f.Z,{className:"language-bash"},"curl -X ",l||"GET"," ",`"${c}${a}"`,' -H "Content-Type: application/json"',i?" ":' -H "Authorization: Bearer $TOKEN"',s?` ${s}`:""))}const h="container_cWQZ";function v(e){let{url:t,base:a}=e;const l=a||"https://api.mixin.one";return n.createElement("div",{className:h},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(f.Z,{className:"language-sass"},`${l}${t}`))}var b=a(7462);const k="title_cB6u",N="panel_uK6e",_="table_n4jr",Z="tbody_UsRV",T="tr_ikU_",g="td_kkZj",y="th_WMgK",I="required_sY8k",P="name_79af",R=/p-([a-zA-Z_]+)/;function j(e){let{name:t,value:a,required:i}=e,r="";return i&&(r=n.createElement("div",{className:I},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:T},n.createElement("th",{className:(0,l.Z)(g,y)},n.createElement("code",{className:P},t),r),n.createElement("td",{className:g},a))}function w(e,t){const a={},n=R.exec(e);if(null!==n&&n.length>1){const l=n[1],i=e.slice(l.length+3);return a.name=l,0===i.length?a.value=t:"required"===i&&(a.required=t),a}return null}function G(e){const t=[],a={};for(const n in e)if(Object.hasOwnProperty.call(e,n)){const t=w(n,e[n]);if(null!==t){Object.hasOwnProperty.call(a,t.name)||(a[t.name]={});for(const e in t)Object.hasOwnProperty.call(t,e)&&(a[t.name][e]=t[e])}}for(const n in a)t.push({name:n,value:a[n].value||"",required:!!a[n].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",N)},n.createElement("h3",{className:k},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",_)},n.createElement("tbody",{className:Z},t.map(((e,t)=>n.createElement(j,(0,b.Z)({key:t},e)))))))}const M="container_IDiZ";function q(e){return n.createElement("div",{className:M},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(f.Z,{className:"language-json"},e.children))}}}]);