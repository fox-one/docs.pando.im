"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[4177],{4211:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),s=a(5532),i=["components"],o={title:"Authorization",date:new Date("2021-07-31T11:18:01.000Z")},c=void 0,u={unversionedId:"lake/apis/auth",id:"lake/apis/auth",isDocsHomePage:!1,title:"Authorization",description:"Most APIs are public access, but some are only available to authenticated users.",source:"@site/i18n/ja/docusaurus-plugin-content-docs-developer/current/lake/apis/auth.md",sourceDirName:"lake/apis",slug:"/lake/apis/auth",permalink:"/ja/developer/lake/apis/auth",version:"current",lastUpdatedAt:1664291639,formattedLastUpdatedAt:"9/27/2022",frontMatter:{title:"Authorization",date:"2021-07-31T11:18:01.000Z"},sidebar:"docs",previous:{title:"Lake API Overview",permalink:"/ja/developer/lake/apis/overview"},next:{title:"Read MTG Info",permalink:"/ja/developer/lake/apis/info"}},m=[{value:"POST /oauth",id:"post-oauth",children:[]},{value:"Sign /me with keystores",id:"sign-me-with-keystores",children:[]}],p={toc:m};function d(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Most APIs are public access, but some are only available to authenticated users."),(0,r.kt)("p",null,"Pando Lake and 4swap use standard OAuth protocol to authorize users."),(0,r.kt)("h2",{id:"post-oauth"},"POST /oauth"),(0,r.kt)("p",null,"Call this API instead of ",(0,r.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/oauth/oauth#get-access-token"},"Mixin Messenger's OAuth API")," to exchange the access token with code."),(0,r.kt)("p",null,"The code must be issued by 4swap."),(0,r.kt)(s.jI,{base:"https://api.4swap.org/api",url:"/oauth",mdxType:"APIEndpoint"}),(0,r.kt)(s.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(s.so,{mdxType:"APIPayload"},'{ // the code from Mixin Messenger\'s OAuth "code":       "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54", // leave "broker_id" and "label" to empty if you don\'t want to use other brokers. "broker_id":  "", "label":      "" } '),(0,r.kt)(s.Xv,{title:"Exchange an access token",method:"POST",isPublic:!0,base:"https://api.4swap.org/api",url:"/oauth --data PAYLOAD",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766645,\n  "data": {\n    "scope": "PROFILE:READ ASSETS:READ",\n    // the OAuth token\n    "token": "..."\n  }\n}\n')),(0,r.kt)("p",null,"The token is compatible with ",(0,r.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/guide"},"Mixin API"),". It's fine to use it to get information from Mixin API."),(0,r.kt)("h2",{id:"sign-me-with-keystores"},"Sign /me with keystores"),(0,r.kt)("p",null,"Mixin authentication token for ",(0,r.kt)("inlineCode",{parentName:"p"},"GET https://api.mixin.one/me"),' with scope "FULL" is supported.'),(0,r.kt)("p",null,"visit ",(0,r.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/guide#signing"},"mixin developers doc")," for more details."))}d.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return E},Yk:function(){return d},kH:function(){return O},so:function(){return j},Xv:function(){return k}});var n=a(7294),l=a(6010),r="title_sZG8",s="panel_2t5Q",i="table_3oTh",o="tbody_2SpR",c="tr_2EbQ",u="td_W9xC",m="th_3VyX",p=a(4973);function d(e){var t=e.scope,a=e.scopeNote,d=e.limitation,h=null;return h=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",s)},n.createElement("h3",{className:r},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",i)},n.createElement("tbody",{className:o},n.createElement("tr",{className:c},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",u,m)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",u)},h)),n.createElement("tr",{className:c},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",u,m)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",u)},d||"No limitation")))))}var h=a(3958);function k(e){e.title;var t=e.url,a=e.method,l=e.isPublic,r=e.base,s=e.data,i=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(h.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+i+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Authorization: Bearer $TOKEN"',s?" "+s:""))}var f="container_2R7I";function E(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:f},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(h.Z,{className:"language-sass"},""+a+t))}var v=a(7462),b="title_37bC",N="panel_1nCE",g="table_1ccU",_="tbody_2YH9",Z="tr_122g",y="td_2Fkc",A="th_3Lc3",P="required_13Y0",w="name_NWXV",x=/p-([a-zA-Z_]+)/;function T(e){var t=e.name,a=e.value,r="";return e.required&&(r=n.createElement("div",{className:P},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:Z},n.createElement("th",{className:(0,l.Z)(y,A)},n.createElement("code",{className:w},t),r),n.createElement("td",{className:y},a))}function I(e,t){var a={},n=x.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return a.name=l,0===r.length?a.value=t:"required"===r&&(a.required=t),a}return null}function O(e){var t=[],a={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var s=I(r,e[r]);if(null!==s)for(var i in Object.hasOwnProperty.call(a,s.name)||(a[s.name]={}),s)Object.hasOwnProperty.call(s,i)&&(a[s.name][i]=s[i])}for(var o in a)t.push({name:o,value:a[o].value||"",required:!!a[o].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",N)},n.createElement("h3",{className:b},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",g)},n.createElement("tbody",{className:_},t.map((function(e,t){return n.createElement(T,(0,v.Z)({key:t},e))})))))}var M="container_1Yme";function j(e){return n.createElement("div",{className:M},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(h.Z,{className:"language-json"},e.children))}}}]);