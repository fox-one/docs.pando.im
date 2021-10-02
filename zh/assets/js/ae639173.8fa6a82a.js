"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[4530],{4583:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=a(5532),s=["components"],o={title:"Read Info",sidebar_position:2,date:new Date("2021-09-30T23:18:01.000Z")},c=void 0,m={unversionedId:"leaf/apis/info",id:"leaf/apis/info",isDocsHomePage:!1,title:"Read Info",description:"APIMetaPanel,",source:"@site/developer/leaf/apis/info.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/info",permalink:"/zh/developer/leaf/apis/info",version:"current",lastUpdatedAt:1633142068,formattedLastUpdatedAt:"10/2/2021",sidebarPosition:2,frontMatter:{title:"Read Info",sidebar_position:2,date:"2021-09-30T23:18:01.000Z"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/zh/developer/leaf/apis/intro"},next:{title:"Read Assets",permalink:"/zh/developer/leaf/apis/assets"}},d=[{value:"Read MTG Info",id:"read-mtg-info",children:[{value:"GET /info",id:"get-info",children:[]}]},{value:"Read Server Time",id:"read-server-time",children:[{value:"GET /time",id:"get-time",children:[]}]}],p={toc:d};function u(e){var t=e.components,a=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"read-mtg-info"},"Read MTG Info"),(0,r.kt)("h3",{id:"get-info"},"GET /info"),(0,r.kt)("p",null,"This API will respond the MTG information of Pando Leaf."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can save the response to use it later because the MTG information wouldn't change frequently."))),(0,r.kt)(i.jI,{base:"https://leaf-api.pando.im/api",url:"/info",mdxType:"APIEndpoint"}),(0,r.kt)(i.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(i.Xv,{title:"Read MTG info",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/info",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633139812299,\n  "data": {\n    "oauth_client_id": "75f18fe8-b056-46d6-9c48-0214425e58ce",\n    "members": [\n      "75f18fe8-b056-46d6-9c48-0214425e58ce",\n      "e96c26ca-666a-417b-9731-112d48725cca",\n      "1265e53d-3642-484c-9f3d-b8616606fd6d",\n      "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826",\n      "04601cb1-6691-4666-b4d8-720172c3a7d9",\n      "d2d4399d-669d-4448-89f6-d65805e62fb7"\n    ],\n    "threshold": 4,\n    "public_key": "mCNrmLpdwJ9zk5GsNL/ot9YXOSrCndx1ZFAiLHZxnMI="\n  }\n}\n')),(0,r.kt)("h2",{id:"read-server-time"},"Read Server Time"),(0,r.kt)("h3",{id:"get-time"},"GET /time"),(0,r.kt)("p",null,"This API will respond the server time of Pando Leaf."),(0,r.kt)(i.jI,{base:"https://leaf-api.pando.im/api",url:"/time",mdxType:"APIEndpoint"}),(0,r.kt)(i.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(i.Xv,{title:"Read the server time",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/time",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633139971226,\n  "data": {\n    "iso": "2021-10-02T01:59:31Z",\n    "epoch": 1633139971\n  }\n}\n')))}u.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return E},Yk:function(){return u},kH:function(){return A},so:function(){return G},Xv:function(){return h}});var n=a(7294),l=a(6010),r="title_sZG8",i="panel_2t5Q",s="table_3oTh",o="tbody_2SpR",c="tr_2EbQ",m="td_W9xC",d="th_3VyX",p=a(4973);function u(e){var t=e.scope,a=e.scopeNote,u=e.limitation,f=null;return f=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",i)},n.createElement("h3",{className:r},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",s)},n.createElement("tbody",{className:o},n.createElement("tr",{className:c},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,d)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},f)),n.createElement("tr",{className:c},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,d)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},u||"No limitation")))))}var f=a(3958);function h(e){e.title;var t=e.url,a=e.method,l=e.isPublic,r=e.base,i=e.data,s=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(f.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+s+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',i?" "+i:""))}var v="container_2R7I";function E(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:v},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(f.Z,{className:"language-sass"},""+a+t))}var b=a(7462),N="title_37bC",k="panel_1nCE",_="table_1ccU",g="tbody_2YH9",Z="tr_122g",T="td_2Fkc",P="th_3Lc3",y="required_13Y0",I="name_NWXV",R=/p-([a-zA-Z_]+)/;function w(e){var t=e.name,a=e.value,r="";return e.required&&(r=n.createElement("div",{className:y},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:Z},n.createElement("th",{className:(0,l.Z)(T,P)},n.createElement("code",{className:I},t),r),n.createElement("td",{className:T},a))}function x(e,t){var a={},n=R.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return a.name=l,0===r.length?a.value=t:"required"===r&&(a.required=t),a}return null}function A(e){var t=[],a={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var i=x(r,e[r]);if(null!==i)for(var s in Object.hasOwnProperty.call(a,i.name)||(a[i.name]={}),i)Object.hasOwnProperty.call(i,s)&&(a[i.name][s]=i[s])}for(var o in a)t.push({name:o,value:a[o].value||"",required:!!a[o].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",k)},n.createElement("h3",{className:N},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",_)},n.createElement("tbody",{className:g},t.map((function(e,t){return n.createElement(w,(0,b.Z)({key:t},e))})))))}var M="container_1Yme";function G(e){return n.createElement("div",{className:M},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(f.Z,{className:"language-json"},e.children))}}}]);