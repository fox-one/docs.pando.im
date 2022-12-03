"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[1456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||k[d]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"How to update the icon of LP token",date:new Date("2021-11-13T22:33:07.000Z")},i=void 0,s={unversionedId:"FAQs/lake/how-to-update-lp-token-icon",id:"FAQs/lake/how-to-update-lp-token-icon",title:"How to update the icon of LP token",description:"The icon of LP token is generated by 4swap-icon-gen.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/FAQs/lake/how-to-update-lp-token-icon.md",sourceDirName:"FAQs/lake",slug:"/FAQs/lake/how-to-update-lp-token-icon",permalink:"/es/docs/FAQs/lake/how-to-update-lp-token-icon",draft:!1,tags:[],version:"current",frontMatter:{title:"How to update the icon of LP token",date:"2021-11-13T22:33:07.000Z"},sidebar:"docs",previous:{title:'How to deal with "Mixin server encounters errors" problem',permalink:"/es/docs/FAQs/general/how-to-deal-with-mixin-server-encounters-errors-problem"},next:{title:"What's the difference between Lake and 4swap",permalink:"/es/docs/FAQs/lake/lake-vs-4swap"}},l={},p=[{value:"1. Submit latest asset icon to Mixin Network",id:"1-submit-latest-asset-icon-to-mixin-network",level:2},{value:"2. Generate the icon of LP token",id:"2-generate-the-icon-of-lp-token",level:2},{value:"3. Submit new LP token icon to Mixin Network",id:"3-submit-new-lp-token-icon-to-mixin-network",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The icon of LP token is generated by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fox-one/4swap-icon-gen"},(0,a.kt)("inlineCode",{parentName:"a"},"4swap-icon-gen")),"."),(0,a.kt)("p",null,"Please follow the steps below to update the icon of LP token."),(0,a.kt)("h2",{id:"1-submit-latest-asset-icon-to-mixin-network"},"1. Submit latest asset icon to Mixin Network"),(0,a.kt)("p",null,"If not, please refer ",(0,a.kt)("a",{parentName:"p",href:"https://docs.pando.im/docs/lake/tutorials/listing"},"this tutorial")," to submit the asset icon."),(0,a.kt)("p",null,"Before you can generate the icon of LP token, you need to make sure new asset icon has been deployed to Mixin Network."),(0,a.kt)("p",null,"To check the status of new asset icon, please visit ",(0,a.kt)("inlineCode",{parentName:"p"},"https://mixin.one/snapshots/YOUR_ASSET_SYMBOL_NAME")," in browser. The webpage will display the asset's information, include the asset's icon."),(0,a.kt)("h2",{id:"2-generate-the-icon-of-lp-token"},"2. Generate the icon of LP token"),(0,a.kt)("p",null,"Download the latest version of  ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fox-one/4swap-icon-gen"},(0,a.kt)("inlineCode",{parentName:"a"},"4swap-icon-gen"))," and build it with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go build\n")),(0,a.kt)("p",null,"then run it with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./4swap-icon-gen -config YOUR_KEYSTORE_FILE -a0 LP_ASSET_ID -a1 1ST_ASSET_ID -a2 2ND_ASSET_ID\n")),(0,a.kt)("p",null,"in which,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"YOUR_KEYSTORE_FILE")," is the keystore file of your account. You can get it from ",(0,a.kt)("a",{parentName:"li",href:"https://developers.mixin.one/dashboard"},"Mixin Developer Dashboard"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LP_ASSET_ID")," is the asset ID of LP token."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1ST_ASSET_ID")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"2ND_ASSET_ID")," are the asset IDs of the assets you want to generate the icon of LP token. You can get it by visiting ",(0,a.kt)("inlineCode",{parentName:"li"},"https://mixin.one/snapshots/YOUR_ASSET_SYMBOL_NAME")," in browser. The url will change from the symbol to the asset ID.")),(0,a.kt)("p",null,"This command will fetch the latest icons from Mixin Network and generate the icon of LP token in the ",(0,a.kt)("inlineCode",{parentName:"p"},"output")," directory."),(0,a.kt)("p",null,"for example, if you want to generate a new icon for ",(0,a.kt)("inlineCode",{parentName:"p"},"sRUM-XIN"),", you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./4swap-icon-gen -config YOUR_KEYSTORE_FILE -a0 a53872c5-b1a3-32da-bbc4-230a7ced69cb -a1 4f2ec12c-22f4-3a9e-b757-c84b6415ea8f -a2 c94ac88f-4671-3976-b60a-09064f1811e8\n")),(0,a.kt)("h2",{id:"3-submit-new-lp-token-icon-to-mixin-network"},"3. Submit new LP token icon to Mixin Network"),(0,a.kt)("p",null,"Like other assets' icons, you need to submit the new LP token icon to Mixin Network. Visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MixinNetwork/asset-profile/"},"https://github.com/MixinNetwork/asset-profile/")," in browser to submit it."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please create a pull request when you have finished. It usually takes about 1~2 days for Mixin Network to process your pull request.")))}u.isMDXComponent=!0}}]);