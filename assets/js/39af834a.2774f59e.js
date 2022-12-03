"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={title:"Contribute",date:new Date("2021-09-15T22:33:07.000Z")},i=void 0,l={unversionedId:"community/contribute",id:"community/contribute",title:"Contribute",description:"Pando documentation is open source. You are very welcomed to translate it into other languages to make it accessible to greater population!",source:"@site/docs/community/contribute.md",sourceDirName:"community",slug:"/community/contribute",permalink:"/docs/community/contribute",draft:!1,tags:[],version:"current",frontMatter:{title:"Contribute",date:"2021-09-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"Support",permalink:"/docs/community/support"},next:{title:"Articles",permalink:"/docs/community/articles"}},s={},u=[{value:"Preparation",id:"preparation",level:2},{value:"Document Structure",id:"document-structure",level:2},{value:"Translation",id:"translation",level:2},{value:"Translate at Crowdin",id:"translate-at-crowdin",level:3},{value:"Initialize the Translation",id:"initialize-the-translation",level:3},{value:"Generate new translation files for new languages",id:"generate-new-translation-files-for-new-languages",level:4},{value:"Translate the documents",id:"translate-the-documents",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pando documentation is open source. You are very welcomed to translate it into other languages to make it accessible to greater population!"),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("p",null,"Pando documentation is based on ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/en/latest/"},"Docusaurus"),", a static site generator for React.js."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to ensure that you have Yarn installed"),(0,o.kt)("li",{parentName:"ul"},"Clone the repository of the document"),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn")," in the root of the repo"),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn start")," to preview the documentation")),(0,o.kt)("h2",{id:"document-structure"},"Document Structure"),(0,o.kt)("p",null,"The documentation is organized in the following way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"all source is in the ",(0,o.kt)("inlineCode",{parentName:"li"},"docs")," directory and ",(0,o.kt)("inlineCode",{parentName:"li"},"developer")," directory"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"docs")," directory contains the following subdirectories:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lake")," contains all the Pando Lake & 4swap documentation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"leaf")," contains all the Pando Leaf documentation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rings")," contains all the Pando Rings documentation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wallets")," contains all documentation about wallets on Mixin Network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"3rd-party-apps")," lists applications built on top of Pando"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"security")," contains documentation concerning security issues"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"community")," contains all the community documentation"))),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"developer")," directory contains the following subdirectories:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lake")," contains the dev documentation of Pando Lake and 4swap"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"leaf")," contains the dev documentation of Pando Leaf"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rings")," contains the dev documentation of Pando Rings"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resources")," contains the resources"))),(0,o.kt)("li",{parentName:"ul"},"the sidebar of ",(0,o.kt)("inlineCode",{parentName:"li"},"docs")," is defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"sidebar.docs.js"),", the sidebar of ",(0,o.kt)("inlineCode",{parentName:"li"},"developer")," is defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"sidebar.developer.js"))),(0,o.kt)("h2",{id:"translation"},"Translation"),(0,o.kt)("h3",{id:"translate-at-crowdin"},"Translate at Crowdin"),(0,o.kt)("p",null,"If you're not familiar with Github and the i18n of Pando, we recommend you to use Crowdin to help us translate the docs."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://pando.crowdin.com/u/signup"},"Tap here")," to sign-up an account of Crowdin"),(0,o.kt)("li",{parentName:"ol"},"Browse the translation status and progress at ",(0,o.kt)("a",{parentName:"li",href:"https://pando.crowdin.com/"},"Pando's Page at Crwodin")),(0,o.kt)("li",{parentName:"ol"},"Get familiar with the Crowdin translation UI, as you will need to use it to translate JSON and Markdown files")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please note that all the code in the documentation should not be translated.")),(0,o.kt)("h3",{id:"initialize-the-translation"},"Initialize the Translation"),(0,o.kt)("h4",{id:"generate-new-translation-files-for-new-languages"},"Generate new translation files for new languages"),(0,o.kt)("p",null,"If you're the maintainer of this project, please follow the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/i18n/tutorial"},"i18n tutorial")," to add a new language."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Translate the index page")),(0,o.kt)("p",null,"Please follow the instructions ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/i18n/tutorial#use-the-translation-apis"},"here")," to translate your index page and react components."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Generate/Update json files")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run write-translations --locale $LANG_CODE\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"$LANG_CODE")," is the language code of the language you want to generate. For example, if you want to generate the translation files for the French language, you should use ",(0,o.kt)("inlineCode",{parentName:"p"},"fr"),"."),(0,o.kt)("p",null,"The translation files are generated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n/$LANG_CODE/")," directory."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Generate Markdown files")),(0,o.kt)("p",null,"Copy Markdown files in docs to ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n/$LANG_CODE/docusaurus-plugin-content-docs/current"),", and translate them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/$LANG_CODE/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/$LANG_CODE/docusaurus-plugin-content-docs/current\n")),(0,o.kt)("h4",{id:"translate-the-documents"},"Translate the documents"),(0,o.kt)("p",null,"All the documents are placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n/$LANG_CODE/")," according to the languages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/code.json"),": the translation of the index page and the text used by docusaurus."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/docusaurus-theme-classic/footer.json"),": the translation of footer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/docusaurus-theme-classic/navbar.json"),": the translation of navbar."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/docusaurus-plugin-content-docs/current.json"),": the label of category on sidebar."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/docusaurus-plugin-content-docs/current/**"),": the markdown files of documents.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Preview the translation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run start --locale $LANG_CODE\n")))}p.isMDXComponent=!0}}]);