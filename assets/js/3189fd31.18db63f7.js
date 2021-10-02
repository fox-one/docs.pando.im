"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[3145],{6557:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),s=a(5532),i=["components"],c={title:"Read Collaterals",sidebar_position:4,date:new Date("2021-10-01T23:18:01.000Z")},o=void 0,m={unversionedId:"leaf/apis/cats",id:"leaf/apis/cats",isDocsHomePage:!1,title:"Read Collaterals",description:"APIMetaPanel,",source:"@site/developer/leaf/apis/cats.md",sourceDirName:"leaf/apis",slug:"/leaf/apis/cats",permalink:"/developer/leaf/apis/cats",version:"current",lastUpdatedAt:1633142068,formattedLastUpdatedAt:"10/2/2021",sidebarPosition:4,frontMatter:{title:"Read Collaterals",sidebar_position:4,date:"2021-10-01T23:18:01.000Z"},sidebar:"tutorialSidebar",previous:{title:"Read Assets",permalink:"/developer/leaf/apis/assets"},next:{title:"Read Auctions",permalink:"/developer/leaf/apis/flips"}},d=[{value:"Read All Collaterals",id:"read-all-collaterals",children:[{value:"GET /cats",id:"get-cats",children:[]}]},{value:"Read Single Collateral",id:"read-single-collateral",children:[{value:"GET /cats/:id",id:"get-catsid",children:[]}]}],p={toc:d};function u(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"read-all-collaterals"},"Read All Collaterals"),(0,r.kt)("h3",{id:"get-cats"},"GET /cats"),(0,r.kt)("p",null,"This API will respond all supported collaterals."),(0,r.kt)(s.jI,{base:"https://leaf-api.pando.im/api",url:"/cats",mdxType:"APIEndpoint"}),(0,r.kt)(s.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(s.Xv,{title:"Read supported assets",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/cats",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "collaterals": [\n    {\n      "art": "string",\n      "beg": "string",\n      "box": "string",\n      "chop": "string",\n      "created_at": "2021-10-02",\n      "dai": "string",\n      "debt": "string",\n      "dunk": "string",\n      "dust": "string",\n      "duty": "string",\n      "gem": "string",\n      "id": "string",\n      "ink": "string",\n      "line": "string",\n      "litter": "string",\n      "live": true,\n      "mat": "string",\n      "name": "string",\n      "number_of_vaults": 0,\n      "price": "string",\n      "rate": "string",\n      "rho": "2021-10-02",\n      "supply": "string",\n      "tau": 0,\n      "ttl": 0\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"read-single-collateral"},"Read Single Collateral"),(0,r.kt)("h3",{id:"get-catsid"},"GET /cats/:id"),(0,r.kt)("p",null,"This API will respond one collateral with ",(0,r.kt)("inlineCode",{parentName:"p"},":id")),(0,r.kt)(s.jI,{base:"https://leaf-api.pando.im/api",url:"/cats/:id",mdxType:"APIEndpoint"}),(0,r.kt)(s.Yk,{mdxType:"APIMetaPanel"}),(0,r.kt)(s.kH,{"p-id":"the collateral id","p-id-required":"{true}",mdxType:"APIParams"}),(0,r.kt)(s.Xv,{title:"Read one collateral by ID",method:"GET",isPublic:!0,base:"https://leaf-api.pando.im/api",url:"/cats/d0ec4cc7-edf6-5359-bf23-41fc9d26444e",mdxType:"APIRequest"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "ts": 1633138872979,\n  "data": {\n    "id": "d0ec4cc7-edf6-5359-bf23-41fc9d26444e",\n    "created_at": "2021-04-27T07:02:55Z",\n    "name": "BTC",\n    "gem": "c6d0c728-2624-429b-8e0d-d9d19b6592fa",\n    "dai": "31d2ea9c-95eb-3355-b65b-ba096853bc18",\n    "ink": "717.09020133",\n    "art": "9463539.4478672014194987",\n    "rate": "1.0192090425079456",\n    "rho": "2021-10-02T01:40:26Z",\n    "debt": "9530560.48933399",\n    "line": "19000000",\n    "dust": "100",\n    "price": "47815.83",\n    "mat": "1.5",\n    "duty": "1.045",\n    "chop": "1.13",\n    "dunk": "5000",\n    "beg": "1.03",\n    "ttl": 1800,\n    "tau": 43200,\n    "live": true,\n    "number_of_vaults": "407",\n    "box": "500000",\n    "litter": "0",\n    "supply": "19000000"\n  }\n}\n')))}u.isMDXComponent=!0},5532:function(e,t,a){a.d(t,{jI:function(){return g},Yk:function(){return u},kH:function(){return x},so:function(){return w},Xv:function(){return E}});var n=a(7294),l=a(6010),r="title_sZG8",s="panel_2t5Q",i="table_3oTh",c="tbody_2SpR",o="tr_2EbQ",m="td_W9xC",d="th_3VyX",p=a(4973);function u(e){var t=e.scope,a=e.scopeNote,u=e.limitation,f=null;return f=t?n.createElement("div",null,n.createElement("code",null,t||"-"),a&&n.createElement("span",null,"; ",a)):n.createElement("span",null,n.createElement(p.Z,null,"com.api_metapanel.public")),n.createElement("section",{className:(0,l.Z)("meta-panel",s)},n.createElement("h3",{className:r},n.createElement(p.Z,null,"com.api_metapanel")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",i)},n.createElement("tbody",{className:c},n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,d)},n.createElement(p.Z,null,"com.api_metapanel.authorization")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},f)),n.createElement("tr",{className:o},n.createElement("th",{className:(0,l.Z)("meta-panel-cell",m,d)},n.createElement(p.Z,null,"com.api_metapanel.limitation")),n.createElement("td",{className:(0,l.Z)("meta-panel-cell",m)},u||"No limitation")))))}var f=a(3958);function E(e){e.title;var t=e.url,a=e.method,l=e.isPublic,r=e.base,s=e.data,i=r||"https://api.4swap.org";return n.createElement("div",{className:"request"},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_request")),n.createElement(f.Z,{className:"language-bash"},"curl -X ",a||"GET"," ",'"'+i+t+'"',' -H "Content-Type: application/json"',l?" ":' -H "Bearer: $TOKEN"',s?" "+s:""))}var b="container_2R7I";function g(e){var t=e.url,a=e.base||"https://api.mixin.one";return n.createElement("div",{className:b},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_endpoint")),n.createElement(f.Z,{className:"language-sass"},""+a+t))}var h=a(7462),v="title_37bC",_="panel_1nCE",k="table_1ccU",N="tbody_2YH9",Z="tr_122g",T="td_2Fkc",y="th_3Lc3",P="required_13Y0",R="name_NWXV",A=/p-([a-zA-Z_]+)/;function C(e){var t=e.name,a=e.value,r="";return e.required&&(r=n.createElement("div",{className:P},n.createElement(p.Z,null,"com.api_params.required"))),n.createElement("tr",{className:Z},n.createElement("th",{className:(0,l.Z)(T,y)},n.createElement("code",{className:R},t),r),n.createElement("td",{className:T},a))}function I(e,t){var a={},n=A.exec(e);if(null!==n&&n.length>1){var l=n[1],r=e.slice(l.length+3);return a.name=l,0===r.length?a.value=t:"required"===r&&(a.required=t),a}return null}function x(e){var t=[],a={};for(var r in e)if(Object.hasOwnProperty.call(e,r)){var s=I(r,e[r]);if(null!==s)for(var i in Object.hasOwnProperty.call(a,s.name)||(a[s.name]={}),s)Object.hasOwnProperty.call(s,i)&&(a[s.name][i]=s[i])}for(var c in a)t.push({name:c,value:a[c].value||"",required:!!a[c].required});return n.createElement("section",{className:(0,l.Z)("meta-panel",_)},n.createElement("h3",{className:v},n.createElement(p.Z,null,"com.api_params.parameters")),n.createElement("table",{className:(0,l.Z)("meta-panel-table",k)},n.createElement("tbody",{className:N},t.map((function(e,t){return n.createElement(C,(0,h.Z)({key:t},e))})))))}var q="container_1Yme";function w(e){return n.createElement("div",{className:q},n.createElement("h3",null,n.createElement(p.Z,null,"com.api_payload")),n.createElement(f.Z,{className:"language-json"},e.children))}}}]);