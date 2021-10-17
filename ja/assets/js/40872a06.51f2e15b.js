"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[2355],{5023:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),o=a(5532),s=["components"],i={title:"Authorization",sidebar_position:2,date:new Date("2021-07-31T11:18:01.000Z")},c=void 0,u={unversionedId:"lake/apis/auth",id:"lake/apis/auth",isDocsHomePage:!1,title:"Authorization",description:"APIMetaPanel,",source:"@site/developer/lake/apis/auth.md",sourceDirName:"lake/apis",slug:"/lake/apis/auth",permalink:"/ja/developer/lake/apis/auth",version:"current",lastUpdatedAt:1633747023,formattedLastUpdatedAt:"10/9/2021",sidebarPosition:2,frontMatter:{title:"Authorization",sidebar_position:2,date:"2021-07-31T11:18:01.000Z"},sidebar:"docs",previous:{title:"Lake API Overview",permalink:"/ja/developer/lake/apis/overview"},next:{title:"Read MTG Info",permalink:"/ja/developer/lake/apis/info"}},m=[{value:"POST /oauth",id:"post-oauth",children:[]}],p={toc:m};function d(e){var t=e.components,a=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Most APIs are public access, but some are only available to authenticated users."),(0,r.kt)("p",null,"Pando Lake and 4swap use standard OAuth protocol to authorize users."),(0,r.kt)("h2",{id:"post-oauth"},"POST /oauth"),(0,r.kt)("p",null,"Call this API instead of ",(0,r.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/oauth/oauth#get-access-token"},"Mixin Messenger's OAuth API")," to exchange the access token with code."),(0,r.kt)(o.jI,{base:"https://api.4swap.org/api",url:"/oauth",mdxType:"APIEndpoint"}),(0,r.kt)(o.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(o.so,{mdxType:"APIPayload"},'{\n  // the code from Mixin Messenger\'s OAuth\n  "code":       "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54",\n  // leave "broker_id" and "label" to empty if you don\'t want to use other brokers.\n  "broker_id":  "",\n  "label":      ""\n}\n'),(0,r.kt)(o.Xv,{title:"Exchange an access token",method:"POST",isPublic:!0,base:"https://api.4swap.org/api",url:"/oauth --data PAYLOAD",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1627697766645,\n  "data": {\n    "scope": "PROFILE:READ ASSETS:READ",\n    // the OAuth token\n    "token": "..."\n  }\n}\n')),(0,r.kt)("p",null,"The token is compatible with ",(0,r.kt)("a",{parentName:"p",href:"https://developers.mixin.one/docs/api/guide"},"Mixin API"),". It's fine to use it to get information from Mixin API."))}d.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return v},Yk:function(){return d},kH:function(){return w},so:function(){return j},Xv:function(){return E}});var n=a(7294),l=a(6010),r="title_sZG8",o="panel_2t5Q",s="table_3oTh",i="tbody_2SpR",c="tr_2EbQ",u="td_W9xC",m="th_3VyX",p=a(4973);function d(e){var t=e.scope,a=e.scopeNote,d=e.limitation,h=null;return h=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",o)},n.createElement("h3",{className:r},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",s)},n.createElement("tbody",{className:i},n.createElement("tr",{className:c},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",u,m)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",u)},h)),n.createElement("tr",{className:c},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",u,m)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",u)},d||"No limitation")))))}var h=a(3958);function E(e){e.title;var t=e.url,a=e.method,l=e.isPublic,r=e.base,o=e.data,s=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(h.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+s+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',o?" "+o:""))}var f="container_2R7I";function v(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:f},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(h.Z,{className:"language-sass"},""+a+t))}var b=a(7462),k="title_37bC",N="panel_1nCE",_="table_1ccU",Z="tbody_2YH9",P="tr_122g",A="td_2Fkc",g="th_3Lc3",y="required_13Y0",I="name_NWXV",T=/p-([a-zA-Z_]+)/;function x(e){var t=e.name,a=e.value,r="";return e.required&&(r=n.createElement("div",{className:y},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:P},n.createElement("th",{className:(0,l.Z)(A,g)},n.createElement("code",{className:I},t),r),n.createElement("td",{className:A},a))}function O(e,t){var a={},n=T.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return a.name=l,0===r.length?a.value=t:"required"===r&&(a.required=t),a}return null}function w(e){var t=[],a={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var o=O(r,e[r]);if(null!==o)for(var s in Object.hasOwnProperty.call(a,o.name)||(a[o.name]={}),o)Object.hasOwnProperty.call(o,s)&&(a[o.name][s]=o[s])}for(var i in a)t.push({name:i,value:a[i].value||"",required:!!a[i].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",N)},n.createElement("h3",{className:k},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",_)},n.createElement("tbody",{className:Z},t.map((function(e,t){return n.createElement(x,(0,b.Z)({key:t},e))})))))}var M="container_1Yme";function j(e){return n.createElement("div",{className:M},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(h.Z,{className:"language-json"},e.children))}}}]);