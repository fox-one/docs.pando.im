"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9929],{2800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),s=a(6084);const r={title:"\u6388\u6743",date:new Date("2021-07-31T11:18:01.000Z")},o=void 0,i={unversionedId:"lake/apis/auth",id:"lake/apis/auth",title:"\u6388\u6743",description:"\u5927\u591a\u6570API\u662f\u516c\u5f00\u8bbf\u95ee\u7684\uff0c\u4f46\u6709\u4e9b\u4ec5\u4f9b\u8ba4\u8bc1\u7528\u6237\u4f7f\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-developer/current/lake/apis/auth.md",sourceDirName:"lake/apis",slug:"/lake/apis/auth",permalink:"/zh/developer/lake/apis/auth",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6388\u6743",date:"2021-07-31T11:18:01.000Z"},sidebar:"docs",previous:{title:"API\u6982\u8ff0",permalink:"/zh/developer/lake/apis/overview"},next:{title:"\u8bfb\u53d6 MTG \u4fe1\u606f",permalink:"/zh/developer/lake/apis/info"}},c={},m=[{value:"Sign /me with keystores",id:"sign-me-with-keystores",level:2},{value:"POST /oauth",id:"post-oauth",level:2}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5927\u591a\u6570API\u662f\u516c\u5f00\u8bbf\u95ee\u7684\uff0c\u4f46\u6709\u4e9b\u4ec5\u4f9b\u8ba4\u8bc1\u7528\u6237\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"sign-me-with-keystores"},"Sign /me with keystores"),(0,l.kt)("p",null,"Usually, you can use the a regular Mixin authentication token for ",(0,l.kt)("inlineCode",{parentName:"p"},"GET https://api.mixin.one/me"),' with scope "FULL".'),(0,l.kt)("p",null,"The token should be generated by ",(0,l.kt)("strong",{parentName:"p"},"your own Mixn Application"),". Please visit ",(0,l.kt)("a",{parentName:"p",href:"https://developers.mixin.one/dashboard"},"Developer Dashboard")," to create an application, and visit ",(0,l.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/guide#signing"},"Mixin Developers Docs")," for the signing procedure."),(0,l.kt)("h2",{id:"post-oauth"},"POST /oauth"),(0,l.kt)("p",null,"In merely cases, for example, you want to provide user a customized swap GUI, you can use the OAuth to get a token for the user."),(0,l.kt)("p",null,"Call this API instead of ",(0,l.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/oauth/oauth#get-access-token"},"Mixin Messenger's OAuth API")," to exchange the access token with code."),(0,l.kt)("p",null,"The code must be issued by 4swap."),(0,l.kt)(s.jI,{base:"https://api.4swap.org/api",url:"/oauth",mdxType:"APIEndpoint"}),(0,l.kt)(s.Yk,{mdxType:"APIMetaPanel"}),(0,l.kt)(s.so,{mdxType:"APIPayload"},'{ // \u6765\u81ea Mixin Messenger\'s OAuth \u7684 code "code":       "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54", // leave "broker_id" and "label" to empty if you don\'t want to use other brokers. "broker_id":  "", "label":      "" } '),(0,l.kt)(s.Xv,{title:"Exchange an access token",method:"POST",isPublic:!0,base:"https://api.4swap.org/api",url:"/oauth --data PAYLOAD",mdxType:"APIRequest"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766645,\n  "data": {\n    "scope": "PROFILE:READ ASSETS:READ",\n    // OAuth \u7684 token\n    "token": "..."\n  }\n}\n')),(0,l.kt)("p",null,"The token is compatible with ",(0,l.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/guide"},"Mixin API"),". It's fine to use it to get information from Mixin API."))}u.isMDXComponent=!0},6084:(e,t,a)=>{a.d(t,{jI:()=>b,Yk:()=>d,kH:()=>M,so:()=>D,Xv:()=>k});var n=a(7294),l=a(6010);const s="title_yRZ_",r="panel_zdgl",o="table_CSyr",i="tbody_TiJw",c="tr_Y4gG",m="td_nN29",p="th_yzq_";var u=a(5999);function d(e){let{scope:t,scopeNote:a,limitation:d}=e,h=null;return h=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(u.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",r)},n.createElement("h3",{className:s},n.createElement(u.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",o)},n.createElement("tbody",{className:i},n.createElement("tr",{className:c},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,p)},n.createElement(u.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},h)),n.createElement("tr",{className:c},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,p)},n.createElement(u.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},d||"No limitation")))))}var h=a(814);function k(e){let{title:t,url:a,method:l,isPublic:s,base:r,data:o}=e;const i=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_request")),n.createElement(h.Z,{className:"language-bash"},"curl -X ",l||"GET"," ",`"${i}${a}"`,' -H "Content-Type: application/json"',s?" ":' -H "Authorization: Bearer $TOKEN"',o?` ${o}`:""))}const E="container_cWQZ";function b(e){let{url:t,base:a}=e;const l=a||"https://api.mixin.one";return n.createElement("div",{className:E},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_endpoint")),n.createElement(h.Z,{className:"language-sass"},`${l}${t}`))}var f=a(7462);const g="title_cB6u",v="panel_uK6e",N="table_n4jr",_="tbody_UsRV",y="tr_ikU_",Z="td_kkZj",w="th_WMgK",P="required_sY8k",x="name_79af",A=/p-([a-zA-Z_]+)/;function T(e){let{name:t,value:a,required:s}=e,r="";return s&&(r=n.createElement("div",{className:P},n.createElement(u.Z,null,"com.api_params.required"))),n.createElement("tr",{className:y},n.createElement("th",{className:(0,l.Z)(Z,w)},n.createElement("code",{className:x},t),r),n.createElement("td",{className:Z},a))}function I(e,t){const a={},n=A.exec(e);if(null!==n&&n.length>1){const l=n[1],s=e.slice(l.length+3);return a.name=l,0===s.length?a.value=t:"required"===s&&(a.required=t),a}return null}function M(e){const t=[],a={};for(const n in e)if(Object.hasOwnProperty.call(e,n)){const t=I(n,e[n]);if(null!==t){Object.hasOwnProperty.call(a,t.name)||(a[t.name]={});for(const e in t)Object.hasOwnProperty.call(t,e)&&(a[t.name][e]=t[e])}}for(const n in a)t.push({name:n,value:a[n].value||"",required:!!a[n].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",v)},n.createElement("h3",{className:g},n.createElement(u.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",N)},n.createElement("tbody",{className:_},t.map(((e,t)=>n.createElement(T,(0,f.Z)({key:t},e)))))))}const O="container_IDiZ";function D(e){return n.createElement("div",{className:O},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_payload")),n.createElement(h.Z,{className:"language-json"},e.children))}}}]);