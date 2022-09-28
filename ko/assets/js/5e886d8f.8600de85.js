"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[6374],{8944:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=a(5532),s=["components"],o={title:"\uad8c\ud55c \ubd80\uc5ec",date:new Date("2021-07-31T11:18:01.000Z")},c=void 0,m={unversionedId:"lake/apis/auth",id:"lake/apis/auth",isDocsHomePage:!1,title:"\uad8c\ud55c \ubd80\uc5ec",description:"\ub300\ubd80\ubd84\uc758 API\ub294 \uacf5\uc6a9 \uc561\uc138\uc2a4\uc774\uc9c0\ub9cc \uc77c\ubd80\ub294 \uc778\uc99d\ub41c \uc0ac\uc6a9\uc790\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs-developer/current/lake/apis/auth.md",sourceDirName:"lake/apis",slug:"/lake/apis/auth",permalink:"/ko/developer/lake/apis/auth",version:"current",lastUpdatedAt:1664291639,formattedLastUpdatedAt:"9/27/2022",frontMatter:{title:"\uad8c\ud55c \ubd80\uc5ec",date:"2021-07-31T11:18:01.000Z"},sidebar:"docs",previous:{title:"Lake API \uac1c\uc694",permalink:"/ko/developer/lake/apis/overview"},next:{title:"Read MTG Info",permalink:"/ko/developer/lake/apis/info"}},u=[{value:"POST /oauth",id:"post-oauth",children:[]},{value:"Sign /me with keystores",id:"sign-me-with-keystores",children:[]}],p={toc:u};function d(e){var t=e.components,a=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ub300\ubd80\ubd84\uc758 API\ub294 \uacf5\uc6a9 \uc561\uc138\uc2a4\uc774\uc9c0\ub9cc \uc77c\ubd80\ub294 \uc778\uc99d\ub41c \uc0ac\uc6a9\uc790\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"Pando Lake \ubc0f 4swap\uc740 \ud45c\uc900 OAuth \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790\ub97c \uc778\uc99d\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"post-oauth"},"POST /oauth"),(0,r.kt)("p",null,"\uc561\uc138\uc2a4 \ud1a0\ud070\uc744 \ucf54\ub4dc\uc640 \uad50\ud658\ud558\ub824\uba74 ",(0,r.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/oauth/oauth#get-access-token"},"Mixin Messenger\uc758 OAuth API")," \ub300\uc2e0 \uc774 API\ub97c \ud638\ucd9c\ud558\uc138\uc694."),(0,r.kt)("p",null,"The code must be issued by 4swap."),(0,r.kt)(i.jI,{base:"https://api.4swap.org/api",url:"/oauth",mdxType:"APIEndpoint"}),(0,r.kt)(i.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(i.so,{mdxType:"APIPayload"},'{ // Mixin Messenger\uc758 OAuth \ucf54\ub4dc "code":       "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54", // \ub2e4\ub978 brokers\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\ub824\uba74 "broker_id"\uc640 "label"\uc744 \ube44\uc6cc \ub450\uc2ed\uc2dc\uc624. "broker_id":  "", "label":      "" } '),(0,r.kt)(i.Xv,{title:"Exchange an access token",method:"POST",isPublic:!0,base:"https://api.4swap.org/api",url:"/oauth --data PAYLOAD",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766645,\n  "data": {\n    "scope": "PROFILE:READ ASSETS:READ",\n    // OAuth \ud1a0\ud070\n    "token": "..."\n  }\n}\n')),(0,r.kt)("p",null,"The token is compatible with ",(0,r.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/guide"},"Mixin API"),". It's fine to use it to get information from Mixin API."),(0,r.kt)("h2",{id:"sign-me-with-keystores"},"Sign /me with keystores"),(0,r.kt)("p",null,"Mixin authentication token for ",(0,r.kt)("inlineCode",{parentName:"p"},"GET https://api.mixin.one/me"),' with scope "FULL" is supported.'),(0,r.kt)("p",null,"visit ",(0,r.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/guide#signing"},"mixin developers doc")," for more details."))}d.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return f},Yk:function(){return d},kH:function(){return O},so:function(){return q},Xv:function(){return k}});var n=a(7294),l=a(6010),r="title_sZG8",i="panel_2t5Q",s="table_3oTh",o="tbody_2SpR",c="tr_2EbQ",m="td_W9xC",u="th_3VyX",p=a(4973);function d(e){var t=e.scope,a=e.scopeNote,d=e.limitation,h=null;return h=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",i)},n.createElement("h3",{className:r},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",s)},n.createElement("tbody",{className:o},n.createElement("tr",{className:c},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,u)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},h)),n.createElement("tr",{className:c},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,u)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},d||"No limitation")))))}var h=a(2489);function k(e){e.title;var t=e.url,a=e.method,l=e.isPublic,r=e.base,i=e.data,s=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(h.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+s+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Authorization: Bearer $TOKEN"',i?" "+i:""))}var E="container_2R7I";function f(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:E},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(h.Z,{className:"language-sass"},""+a+t))}var v=a(7462),b="title_37bC",N="panel_1nCE",g="table_1ccU",_="tbody_2YH9",Z="tr_122g",P="td_2Fkc",A="th_3Lc3",y="required_13Y0",x="name_NWXV",T=/p-([a-zA-Z_]+)/;function w(e){var t=e.name,a=e.value,r="";return e.required&&(r=n.createElement("div",{className:y},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:Z},n.createElement("th",{className:(0,l.Z)(P,A)},n.createElement("code",{className:x},t),r),n.createElement("td",{className:P},a))}function I(e,t){var a={},n=T.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return a.name=l,0===r.length?a.value=t:"required"===r&&(a.required=t),a}return null}function O(e){var t=[],a={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var i=I(r,e[r]);if(null!==i)for(var s in Object.hasOwnProperty.call(a,i.name)||(a[i.name]={}),i)Object.hasOwnProperty.call(i,s)&&(a[i.name][s]=i[s])}for(var o in a)t.push({name:o,value:a[o].value||"",required:!!a[o].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",N)},n.createElement("h3",{className:b},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",g)},n.createElement("tbody",{className:_},t.map((function(e,t){return n.createElement(w,(0,v.Z)({key:t},e))})))))}var M="container_1Yme";function q(e){return n.createElement("div",{className:M},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(h.Z,{className:"language-json"},e.children))}}}]);