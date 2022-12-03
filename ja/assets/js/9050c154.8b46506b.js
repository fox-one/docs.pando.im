"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[118],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(a),f=r,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||l;return a?n.createElement(y,i(i({ref:t},u),{},{components:a})):n.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={title:"Vaults",date:new Date("2021-08-13T12:33:07.000Z")},i=void 0,o={unversionedId:"leaf/key-concepts/vaults",id:"leaf/key-concepts/vaults",title:"Vaults",description:"What is a Vault",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/leaf/key-concepts/vaults.md",sourceDirName:"leaf/key-concepts",slug:"/leaf/key-concepts/vaults",permalink:"/ja/docs/leaf/key-concepts/vaults",draft:!1,tags:[],version:"current",frontMatter:{title:"Vaults",date:"2021-08-13T12:33:07.000Z"},sidebar:"docs",previous:{title:"Participating in the Auction",permalink:"/ja/docs/leaf/tutorials/auction-participation"},next:{title:"Generate rules",permalink:"/ja/docs/leaf/key-concepts/generate-rules"}},c={},s=[{value:"What is a Vault",id:"what-is-a-vault",level:3},{value:"Vault Types",id:"vault-types",level:3},{value:"Collateralization",id:"collateralization",level:3},{value:"Debt Ceiling",id:"debt-ceiling",level:3},{value:"Stability Fees",id:"stability-fees",level:3}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"what-is-a-vault"},"What is a Vault"),(0,r.kt)("p",null,"A Vault is where the owner deposit collateral and generate stable cyptocurrency pUSD."),(0,r.kt)("h3",{id:"vault-types"},"Vault Types"),(0,r.kt)("p",null,"Vaults are categorized by the type of collateral used to generated pUSD. Users create pUSD by generating it against their collateral and destroy pUSD when repaying their generated pUSD balance."),(0,r.kt)("h3",{id:"collateralization"},"Collateralization"),(0,r.kt)("p",null,"Vaults are required to be overcollateralized and have a Liquidation Ratio that Vault owners need to uphold to avoid the Liquidation of their positions."),(0,r.kt)("h3",{id:"debt-ceiling"},"Debt Ceiling"),(0,r.kt)("p",null,"The Vault-specific Debt Ceiling is the maximum amount of pUSD that can be generated of each Vault type."),(0,r.kt)("p",null,"The Global Debt Ceiling limits the amount of pUSD that can be generated across the entire system."),(0,r.kt)("h3",{id:"stability-fees"},"Stability Fees"),(0,r.kt)("p",null,"The Stability Fee is a variable-rate fee continuously added to a Vault owner\u2019s generated pUSD balance. It can be understood as the interests you pay for the loan (generated pUSD)."))}p.isMDXComponent=!0}}]);