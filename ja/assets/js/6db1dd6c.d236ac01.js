"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[8408],{5648:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var l=a(7462),n=(a(7294),a(3905)),s=a(6084);const r={title:"Read Assets",date:new Date("2021-09-30T23:18:01.000Z")},c=void 0,i={unversionedId:"lake/apis/assets",id:"lake/apis/assets",title:"Read Assets",description:"GET /assets",source:"@site/i18n/ja/docusaurus-plugin-content-docs-developer/current/lake/apis/assets.md",sourceDirName:"lake/apis",slug:"/lake/apis/assets",permalink:"/ja/developer/lake/apis/assets",draft:!1,tags:[],version:"current",frontMatter:{title:"Read Assets",date:"2021-09-30T23:18:01.000Z"},sidebar:"docs",previous:{title:"Read Pairs",permalink:"/ja/developer/lake/apis/pairs"},next:{title:"Create Actions",permalink:"/ja/developer/lake/apis/actions"}},m={},o=[{value:"GET /assets",id:"get-assets",level:2}],p={toc:o};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-assets"},"GET /assets"),(0,n.kt)("p",null,"This API will respond all supported crypto assets."),(0,n.kt)(s.jI,{base:"https://api.4swap.org/api",url:"/assets",mdxType:"APIEndpoint"}),(0,n.kt)(s.Yk,{mdxType:"APIMetaPanel"}),(0,n.kt)(s.Xv,{title:"Read supported assets",method:"GET",isPublic:!0,base:"https://api.4swap.org/api",url:"/assets",mdxType:"APIRequest"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766503,\n  "data": {\n    "assets": [\n      {Asset Entity},\n      {Asset Entity},\n      ...\n    ]\n  }\n}\n')))}u.isMDXComponent=!0},6084:(e,t,a)=>{a.d(t,{jI:()=>N,Yk:()=>d,kH:()=>R,so:()=>x,Xv:()=>_});var l=a(7294),n=a(6010);const s="title_yRZ_",r="panel_zdgl",c="table_CSyr",i="tbody_TiJw",m="tr_Y4gG",o="td_nN29",p="th_yzq_";var u=a(5999);function d(e){let{scope:t,scopeNote:a,limitation:d}=e,E=null;return E=t?l.createElement("div",null,l.createElement("code",null,t||"-"),a&&l.createElement("span",null,"; ",a)):l.createElement("span",null,l.createElement(u.Z,null,"com.api_metapanel.public")),l.createElement("section",{className:(0,n.Z)("meta-panel",r)},l.createElement("h3",{className:s},l.createElement(u.Z,null,"com.api_metapanel")),l.createElement("table",{className:(0,n.Z)("meta-panel-table",c)},l.createElement("tbody",{className:i},l.createElement("tr",{className:m},l.createElement("th",{className:(0,n.Z)("meta-panel-cell",o,p)},l.createElement(u.Z,null,"com.api_metapanel.authorization")),l.createElement("td",{className:(0,n.Z)("meta-panel-cell",o)},E)),l.createElement("tr",{className:m},l.createElement("th",{className:(0,n.Z)("meta-panel-cell",o,p)},l.createElement(u.Z,null,"com.api_metapanel.limitation")),l.createElement("td",{className:(0,n.Z)("meta-panel-cell",o)},d||"No limitation")))))}var E=a(814);function _(e){let{title:t,url:a,method:n,isPublic:s,base:r,data:c}=e;const i=r||"https://api.4swap.org";return l.createElement("div",{className:"request"},l.createElement("h3",null,l.createElement(u.Z,null,"com.api_request")),l.createElement(E.Z,{className:"language-bash"},"curl -X ",n||"GET"," ",`"${i}${a}"`,' -H "Content-Type: application/json"',s?" ":' -H "Authorization: Bearer $TOKEN"',c?` ${c}`:""))}const h="container_cWQZ";function N(e){let{url:t,base:a}=e;const n=a||"https://api.mixin.one";return l.createElement("div",{className:h},l.createElement("h3",null,l.createElement(u.Z,null,"com.api_endpoint")),l.createElement(E.Z,{className:"language-sass"},`${n}${t}`))}var k=a(7462);const Z="title_cB6u",v="panel_uK6e",b="table_n4jr",g="tbody_UsRV",f="tr_ikU_",y="td_kkZj",T="th_WMgK",j="required_sY8k",w="name_79af",A=/p-([a-zA-Z_]+)/;function q(e){let{name:t,value:a,required:s}=e,r="";return s&&(r=l.createElement("div",{className:j},l.createElement(u.Z,null,"com.api_params.required"))),l.createElement("tr",{className:f},l.createElement("th",{className:(0,n.Z)(y,T)},l.createElement("code",{className:w},t),r),l.createElement("td",{className:y},a))}function P(e,t){const a={},l=A.exec(e);if(null!==l&&l.length>1){const n=l[1],s=e.slice(n.length+3);return a.name=n,0===s.length?a.value=t:"required"===s&&(a.required=t),a}return null}function R(e){const t=[],a={};for(const l in e)if(Object.hasOwnProperty.call(e,l)){const t=P(l,e[l]);if(null!==t){Object.hasOwnProperty.call(a,t.name)||(a[t.name]={});for(const e in t)Object.hasOwnProperty.call(t,e)&&(a[t.name][e]=t[e])}}for(const l in a)t.push({name:l,value:a[l].value||"",required:!!a[l].required});return l.createElement("section",{className:(0,n.Z)("meta-panel",v)},l.createElement("h3",{className:Z},l.createElement(u.Z,null,"com.api_params.parameters")),l.createElement("table",{className:(0,n.Z)("meta-panel-table",b)},l.createElement("tbody",{className:g},t.map(((e,t)=>l.createElement(q,(0,k.Z)({key:t},e)))))))}const I="container_IDiZ";function x(e){return l.createElement("div",{className:I},l.createElement("h3",null,l.createElement(u.Z,null,"com.api_payload")),l.createElement(E.Z,{className:"language-json"},e.children))}}}]);