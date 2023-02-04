"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5086],{3066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=a(7462),l=(a(7294),a(3905)),c=a(6084);const r={title:"\u8bfb\u53d6 MTG \u4fe1\u606f",date:new Date("2021-09-30T23:18:01.000Z")},s=void 0,i={unversionedId:"lake/apis/info",id:"lake/apis/info",title:"\u8bfb\u53d6 MTG \u4fe1\u606f",description:"GET /info",source:"@site/i18n/zh/docusaurus-plugin-content-docs-developer/current/lake/apis/info.md",sourceDirName:"lake/apis",slug:"/lake/apis/info",permalink:"/zh/developer/lake/apis/info",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8bfb\u53d6 MTG \u4fe1\u606f",date:"2021-09-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"\u6388\u6743",permalink:"/zh/developer/lake/apis/auth"},next:{title:"\u8bfb\u53d6\u5e02\u573a",permalink:"/zh/developer/lake/apis/stat"}},m={},o=[{value:"GET /info",id:"get-info",level:2}],p={toc:o};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"get-info"},"GET /info"),(0,l.kt)("p",null,"\u6b64 API \u5c06\u8fd4\u56de\u5173\u4e8e4swap\u548cLake\u7684 MTG\u4fe1\u606f\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u56e0\u4e3a MTG \u4fe1\u606f\u4e0d\u4f1a\u9891\u7e41\u66f4\u6539\uff0c\u60a8\u53ef\u4ee5\u4fdd\u5b58\u8fd4\u56de\u503c\u4ee5\u4fbf\u4e4b\u540e\u4f7f\u7528\u3002")),(0,l.kt)(c.jI,{base:"https://api.4swap.org/api",url:"/info",mdxType:"APIEndpoint"}),(0,l.kt)(c.Yk,{mdxType:"APIMetaPanel"}),(0,l.kt)(c.Xv,{title:"\u8bfb\u53d6 MTG \u4fe1\u606f",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/info",mdxType:"APIRequest"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u54cd\u5e94")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ts": 1627697766645,\n  "data": {\n    // MTG members \u7684 user id \n    "members": [\n      "a753e0eb-3010-4c4a-a7b2-a7bda4063f62",\n      "099627f8-4031-42e3-a846-006ee598c56e",\n      "aefbfd62-727d-4424-89db-ae41f75d2e04",\n      "d68ca71f-0e2c-458a-bb9c-1d6c2eed2497",\n      "e4bc0740-f8fe-418c-ae1b-32d9926f5863"\n    ],\n    "public_key": "dt351xp3KjNlVCMqBYUeUSF45upCEiReSZAqcjcP/Lc=",\n    // \u591a\u7b7e threshold\n    "threshold": 3\n  }\n}\n')))}u.isMDXComponent=!0},6084:(e,t,a)=>{a.d(t,{jI:()=>k,Yk:()=>d,kH:()=>P,so:()=>x,Xv:()=>f});var n=a(7294),l=a(6010);const c="title_yRZ_",r="panel_zdgl",s="table_CSyr",i="tbody_TiJw",m="tr_Y4gG",o="td_nN29",p="th_yzq_";var u=a(5999);function d(e){let{scope:t,scopeNote:a,limitation:d}=e,E=null;return E=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(u.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",r)},n.createElement("h3",{className:c},n.createElement(u.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",s)},n.createElement("tbody",{className:i},n.createElement("tr",{className:m},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",o,p)},n.createElement(u.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",o)},E)),n.createElement("tr",{className:m},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",o,p)},n.createElement(u.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",o)},d||"No limitation")))))}var E=a(814);function f(e){let{title:t,url:a,method:l,isPublic:c,base:r,data:s}=e;const i=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_request")),n.createElement(E.Z,{className:"language-bash"},"curl -X ",l||"GET"," ",`"${i}${a}"`,' -H "Content-Type: application/json"',c?" ":' -H "Authorization: Bearer $TOKEN"',s?` ${s}`:""))}const h="container_cWQZ";function k(e){let{url:t,base:a}=e;const l=a||"https://api.mixin.one";return n.createElement("div",{className:h},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_endpoint")),n.createElement(E.Z,{className:"language-sass"},`${l}${t}`))}var b=a(7462);const N="title_cB6u",_="panel_uK6e",Z="table_n4jr",v="tbody_UsRV",g="tr_ikU_",T="td_kkZj",y="th_WMgK",M="required_sY8k",q="name_79af",G=/p-([a-zA-Z_]+)/;function j(e){let{name:t,value:a,required:c}=e,r="";return c&&(r=n.createElement("div",{className:M},n.createElement(u.Z,null,"com.api_params.required"))),n.createElement("tr",{className:g},n.createElement("th",{className:(0,l.Z)(T,y)},n.createElement("code",{className:q},t),r),n.createElement("td",{className:T},a))}function w(e,t){const a={},n=G.exec(e);if(null!==n&&n.length>1){const l=n[1],c=e.slice(l.length+3);return a.name=l,0===c.length?a.value=t:"required"===c&&(a.required=t),a}return null}function P(e){const t=[],a={};for(const n in e)if(Object.hasOwnProperty.call(e,n)){const t=w(n,e[n]);if(null!==t){Object.hasOwnProperty.call(a,t.name)||(a[t.name]={});for(const e in t)Object.hasOwnProperty.call(t,e)&&(a[t.name][e]=t[e])}}for(const n in a)t.push({name:n,value:a[n].value||"",required:!!a[n].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",_)},n.createElement("h3",{className:N},n.createElement(u.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",Z)},n.createElement("tbody",{className:v},t.map(((e,t)=>n.createElement(j,(0,b.Z)({key:t},e)))))))}const z="container_IDiZ";function x(e){return n.createElement("div",{className:z},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_payload")),n.createElement(E.Z,{className:"language-json"},e.children))}}}]);