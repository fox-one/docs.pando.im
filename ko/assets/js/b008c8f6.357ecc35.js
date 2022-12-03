"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9385],{4782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),s=a(6084);const i={title:"\uad8c\ud55c \ubd80\uc5ec",date:new Date("2021-07-31T11:18:01.000Z")},r=void 0,c={unversionedId:"leaf/apis/auth",id:"leaf/apis/auth",title:"\uad8c\ud55c \ubd80\uc5ec",description:"\ub300\ubd80\ubd84\uc758 API\ub294 \uacf5\uc6a9 \uc561\uc138\uc2a4\uc774\uc9c0\ub9cc \uc77c\ubd80\ub294 \uc778\uc99d\ub41c \uc0ac\uc6a9\uc790\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs-developer/current/leaf/apis/auth.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/auth",permalink:"/ko/developer/leaf/apis/auth",draft:!1,tags:[],version:"current",lastUpdatedAt:1644907039,formattedLastUpdatedAt:"2022\ub144 2\uc6d4 15\uc77c",frontMatter:{title:"\uad8c\ud55c \ubd80\uc5ec",date:"2021-07-31T11:18:01.000Z"},sidebar:"docs",previous:{title:"Read Info",permalink:"/ko/developer/leaf/apis/info"},next:{title:"Read Assets",permalink:"/ko/developer/leaf/apis/assets"}},o={},m=[{value:"POST /login",id:"post-login",level:2},{value:"Sign /me with keystores",id:"sign-me-with-keystores",level:2}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ub300\ubd80\ubd84\uc758 API\ub294 \uacf5\uc6a9 \uc561\uc138\uc2a4\uc774\uc9c0\ub9cc \uc77c\ubd80\ub294 \uc778\uc99d\ub41c \uc0ac\uc6a9\uc790\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"Pando Lake \ubc0f 4swap\uc740 \ud45c\uc900 OAuth \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790\ub97c \uc778\uc99d\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"post-login"},"POST /login"),(0,l.kt)("p",null,"\uc561\uc138\uc2a4 \ud1a0\ud070\uc744 \ucf54\ub4dc\uc640 \uad50\ud658\ud558\ub824\uba74 ",(0,l.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/oauth/oauth#get-access-token"},"Mixin Messenger\uc758 OAuth API")," \ub300\uc2e0 \uc774 API\ub97c \ud638\ucd9c\ud558\uc138\uc694."),(0,l.kt)(s.jI,{base:"https://leaf-api.pando.im/api",url:"/login",mdxType:"APIEndpoint"}),(0,l.kt)(s.Yk,{mdxType:"APIMetaPanel"}),(0,l.kt)(s.so,{mdxType:"APIPayload"},'{ // Mixin Messenger\uc758 OAuth \ucf54\ub4dc "code": "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54", } '),(0,l.kt)(s.Xv,{title:"Exchange an access token",method:"POST",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/oauth --data PAYLOAD",mdxType:"APIRequest"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766645,\n  "data": {\n    "scope": "PROFILE:READ ASSETS:READ",\n    // OAuth \ud1a0\ud070\n    "token": "..."\n  }\n}\n')),(0,l.kt)("p",null,"\ud1a0\ud070\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/guide"},"Mixin API"),"\uc640 \ud638\ud658\ub429\ub2c8\ub2e4. Mixin API\uc5d0\uc11c \uc815\ubcf4\ub97c \uc5bb\ub294 \ub370 \uc0ac\uc6a9\ud574\ub3c4 \uad1c\ucc2e\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"sign-me-with-keystores"},"Sign /me with keystores"),(0,l.kt)("p",null,"Mixin authentication token for ",(0,l.kt)("inlineCode",{parentName:"p"},"GET https://api.mixin.one/me"),' with scope "FULL" is supported.'),(0,l.kt)("p",null,"visit ",(0,l.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/guide#signing"},"mixin developers doc")," for more details."))}u.isMDXComponent=!0},6084:(e,t,a)=>{a.d(t,{jI:()=>f,Yk:()=>d,kH:()=>w,so:()=>q,Xv:()=>E});var n=a(7294),l=a(6010);const s="title_yRZ_",i="panel_zdgl",r="table_CSyr",c="tbody_TiJw",o="tr_Y4gG",m="td_nN29",p="th_yzq_";var u=a(5999);function d(e){let{scope:t,scopeNote:a,limitation:d}=e,h=null;return h=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(u.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",i)},n.createElement("h3",{className:s},n.createElement(u.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",r)},n.createElement("tbody",{className:c},n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,p)},n.createElement(u.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},h)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,p)},n.createElement(u.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},d||"No limitation")))))}var h=a(814);function E(e){let{title:t,url:a,method:l,isPublic:s,base:i,data:r}=e;const c=i||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_request")),n.createElement(h.Z,{className:"language-bash"},"curl -X ",l||"GET"," ",`"${c}${a}"`,' -H "Content-Type: application/json"',s?" ":' -H "Authorization: Bearer $TOKEN"',r?` ${r}`:""))}const k="container_cWQZ";function f(e){let{url:t,base:a}=e;const l=a||"https://api.mixin.one";return n.createElement("div",{className:k},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_endpoint")),n.createElement(h.Z,{className:"language-sass"},`${l}${t}`))}var g=a(7462);const N="title_cB6u",v="panel_uK6e",_="table_n4jr",b="tbody_UsRV",Z="tr_ikU_",y="td_kkZj",A="th_WMgK",P="required_sY8k",x="name_79af",T=/p-([a-zA-Z_]+)/;function I(e){let{name:t,value:a,required:s}=e,i="";return s&&(i=n.createElement("div",{className:P},n.createElement(u.Z,null,"com.api_params.required"))),n.createElement("tr",{className:Z},n.createElement("th",{className:(0,l.Z)(y,A)},n.createElement("code",{className:x},t),i),n.createElement("td",{className:y},a))}function O(e,t){const a={},n=T.exec(e);if(null!==n&&n.length>1){const l=n[1],s=e.slice(l.length+3);return a.name=l,0===s.length?a.value=t:"required"===s&&(a.required=t),a}return null}function w(e){const t=[],a={};for(const n in e)if(Object.hasOwnProperty.call(e,n)){const t=O(n,e[n]);if(null!==t){Object.hasOwnProperty.call(a,t.name)||(a[t.name]={});for(const e in t)Object.hasOwnProperty.call(t,e)&&(a[t.name][e]=t[e])}}for(const n in a)t.push({name:n,value:a[n].value||"",required:!!a[n].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",v)},n.createElement("h3",{className:N},n.createElement(u.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",_)},n.createElement("tbody",{className:b},t.map(((e,t)=>n.createElement(I,(0,g.Z)({key:t},e)))))))}const M="container_IDiZ";function q(e){return n.createElement("div",{className:M},n.createElement("h3",null,n.createElement(u.Z,null,"com.api_payload")),n.createElement(h.Z,{className:"language-json"},e.children))}}}]);