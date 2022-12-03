"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={title:"Apply for a community",date:new Date("2022-12-03T14:38:07.000Z")},l=void 0,s={unversionedId:"lots/apply",id:"lots/apply",title:"Apply for a community",description:"To apply a community, please follow the steps below:",source:"@site/developer/lots/apply.md",sourceDirName:"lots",slug:"/lots/apply",permalink:"/es/developer/lots/apply",draft:!1,tags:[],version:"current",lastUpdatedAt:1670042147,formattedLastUpdatedAt:"3 dic 2022",frontMatter:{title:"Apply for a community",date:"2022-12-03T14:38:07.000Z"},sidebar:"docs",previous:{title:"Pando Lots Overview",permalink:"/es/developer/lots/overview"},next:{title:"Talkee Overview",permalink:"/es/developer/talkee/overview"}},i={},p=[{value:"Pricing",id:"pricing",level:2},{value:"Integrate Pando Lots",id:"integrate-pando-lots",level:2},{value:"Vue",id:"vue",level:3},{value:"Vanilla JS",id:"vanilla-js",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To apply a community, please follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sign up a Mixin Messenger account. Download Messenger from ",(0,r.kt)("a",{parentName:"li",href:"https://mixin.one/mm"},"https://mixin.one/mm")," and sign up."),(0,r.kt)("li",{parentName:"ol"},"Leave a message to ",(0,r.kt)("a",{parentName:"li",href:"mailto:contact@pando.im"},"contact@pando.im"),", and tell us your Mixin Messenger ID."),(0,r.kt)("li",{parentName:"ol"},"We will contact you personally and help you create a community.")),(0,r.kt)("h2",{id:"pricing"},"Pricing"),(0,r.kt)("p",null,"Pando Lots is free for eligible public communities. For private communities, we charge a monthly fee based on the number of members. Please contact us for details."),(0,r.kt)("h2",{id:"integrate-pando-lots"},"Integrate Pando Lots"),(0,r.kt)("h3",{id:"vue"},"Vue"),(0,r.kt)("p",null,"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    import PandoLots from '@foxone/pando-lots-vue';\n    import \"@foxone/pando-lots-vue/lib/index.css\";\n\n    Vue.use(PandoLots);\n")),(0,r.kt)("p",null,"In any **.vue file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<pando-lots\n  type="card"\n  group-id="7000103XX1"\n  theme-color="#88E108"\n  @error="handleError"\n  api-base="https://dev-courses-api.firesbox.com/v1"\n  ws-base="wss://dev-courses-ws.firesbox.com"\n/>\n\n<pando-lots\n  type="button"\n  group-id="7000103XX2"\n  theme-color="#EE4596"\n  @error="handleError"\n  api-base="https://dev-courses-api.firesbox.com/v1"\n  ws-base="wss://dev-courses-ws.firesbox.com"\n/>\n\n<pando-lots\n  group-id="7000103XX3"\n  theme-color="#88E108"\n  api-base="https://dev-courses-api.firesbox.com/v1"\n  ws-base="wss://dev-courses-ws.firesbox.com"\n>\n  <template #activator="{ on }">\n    <button v-on="on">\n      Custom Entry\n    </button>\n  </template>\n</pando-lots>\n')),(0,r.kt)("h3",{id:"vanilla-js"},"Vanilla JS"),(0,r.kt)("p",null,"Please contact us for the setup guide."))}u.isMDXComponent=!0}}]);