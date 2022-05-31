"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5842],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,k=c["".concat(u,".").concat(m)]||c[m]||p[m]||r;return t?i.createElement(k,o(o({ref:n},d),{},{components:t})):i.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9993:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],l={title:"Mitwirken",date:new Date("2021-09-15T22:33:07.000Z")},u=void 0,s={unversionedId:"community/contribute",id:"community/contribute",isDocsHomePage:!1,title:"Mitwirken",description:"Die Pando-Dokumentation ist als Open Source verf\xfcgbar. Sie sind herzlich eingeladen, sie in andere Sprachen zu \xfcbersetzen, um sie einer breiteren \xd6ffentlichkeit zug\xe4nglich zu machen!",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/community/contribute.md",sourceDirName:"community",slug:"/community/contribute",permalink:"/de/docs/community/contribute",version:"current",frontMatter:{title:"Mitwirken",date:"2021-09-15T22:33:07.000Z"},sidebar:"docs",previous:{title:"Support",permalink:"/de/docs/community/support"},next:{title:"Artikel",permalink:"/de/docs/community/articles"}},d=[{value:"Vorbereitung",id:"vorbereitung",children:[]},{value:"Aufbau der Dokumentation",id:"aufbau-der-dokumentation",children:[]},{value:"\xdcbersetzung",id:"\xfcbersetzung",children:[{value:"\xdcbersetzen bei Crowdin",id:"\xfcbersetzen-bei-crowdin",children:[]},{value:"Initialize the Translation",id:"initialize-the-translation",children:[]}]}],p={toc:d};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Die Pando-Dokumentation ist als Open Source verf\xfcgbar. Sie sind herzlich eingeladen, sie in andere Sprachen zu \xfcbersetzen, um sie einer breiteren \xd6ffentlichkeit zug\xe4nglich zu machen!"),(0,r.kt)("h2",{id:"vorbereitung"},"Vorbereitung"),(0,r.kt)("p",null,"Pando Dokumentation basiert auf ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/en/latest/"},"Docusaurus"),", einem statischen Site-Generator f\xfcr React.js."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sie m\xfcssen sicherstellen, dass Yarn installiert ist"),(0,r.kt)("li",{parentName:"ul"},"Das Repository des Dokuments klonen"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn")," im Stammverzeichnis des Repos ausf\xfchren"),(0,r.kt)("li",{parentName:"ul"},"F\xfchre ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn start")," aus, um eine Vorschau der Dokumentation anzuzeigen")),(0,r.kt)("h2",{id:"aufbau-der-dokumentation"},"Aufbau der Dokumentation"),(0,r.kt)("p",null,"Die Dokumentation ist folgenderma\xdfen gegliedert:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"alle Quellen befinden sich im ",(0,r.kt)("inlineCode",{parentName:"li"},"docs")," Verzeichnis und ",(0,r.kt)("inlineCode",{parentName:"li"},"developer")," Verzeichnis"),(0,r.kt)("li",{parentName:"ul"},"das Verzeichnis ",(0,r.kt)("inlineCode",{parentName:"li"},"docs")," enth\xe4lt die folgenden Unterverzeichnisse:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lake")," enth\xe4lt die gesamte Dokumentation von Pando Lake & 4swap"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"leaf")," enth\xe4lt die gesamte Pando Leaf Dokumentation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rings")," enth\xe4lt die gesamte Pando Rings Dokumentation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wallets")," enth\xe4lt die gesamte Dokumentation \xfcber Wallets im Mixin-Netzwerk"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3rd-party-apps")," listet Anwendungen auf, die auf Pando aufgebaut sind"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"security")," enth\xe4lt Dokumentation zu Sicherheitsthemen"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"community")," enth\xe4lt die gesamte Community-Dokumentation"))),(0,r.kt)("li",{parentName:"ul"},"das Verzeichnis ",(0,r.kt)("inlineCode",{parentName:"li"},"developer")," enth\xe4lt die folgenden Unterverzeichnisse:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lake")," enth\xe4lt die Entwicklerdokumentation von Pando Lake und 4swap"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"leaf")," enth\xe4lt die Entwicklerdokumentation von Pando Leaf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rings")," enth\xe4lt die Entwicklerdokumentation von Pando Rings"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resources")," enth\xe4lt die Ressourcen"))),(0,r.kt)("li",{parentName:"ul"},"die Seitenleiste von ",(0,r.kt)("inlineCode",{parentName:"li"},"docs")," ist in ",(0,r.kt)("inlineCode",{parentName:"li"},"sidebar.docs.js")," definiert, die Seitenleiste von ",(0,r.kt)("inlineCode",{parentName:"li"},"developer")," ist in ",(0,r.kt)("inlineCode",{parentName:"li"},"sidebar.developer.js")," definiert")),(0,r.kt)("h2",{id:"\xfcbersetzung"},"\xdcbersetzung"),(0,r.kt)("h3",{id:"\xfcbersetzen-bei-crowdin"},"\xdcbersetzen bei Crowdin"),(0,r.kt)("p",null,"Wenn Sie mit Github und dem i18n von Pando nicht vertraut sind, empfehlen wir Ihnen, Crowdin zu verwenden, um uns bei der \xdcbersetzung der Dokumente zu helfen."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pando.crowdin.com/u/signup"},"Tippen Sie hier"),", um ein Konto bei Crowdin zu registrieren"),(0,r.kt)("li",{parentName:"ol"},"Den Stand und Fortschritt der \xdcbersetzung finden Sie auf ",(0,r.kt)("a",{parentName:"li",href:"https://pando.crowdin.com/"},"Pandos Seite bei Crwodin")),(0,r.kt)("li",{parentName:"ol"},"Lernen Sie die Crowdin-\xdcbersetzungsoberfl\xe4che kennen, da Sie sie f\xfcr die \xdcbersetzung von JSON- und Markdown-Dateien ben\xf6tigen")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Bitte beachten Sie, dass der ganze Code in der Dokumentation nicht \xfcbersetzt werden sollte."))),(0,r.kt)("h3",{id:"initialize-the-translation"},"Initialize the Translation"),(0,r.kt)("h4",{id:"generate-new-translation-files-for-new-languages"},"Generate new translation files for new languages"),(0,r.kt)("p",null,"If you're the maintainer of this project, please follow the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/i18n/tutorial"},"i18n tutorial")," to add a new language."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translate the index page")),(0,r.kt)("p",null,"Please follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/i18n/tutorial#use-the-translation-apis"},"here")," to translate your index page and react components."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Generate/Update json files")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run write-translations --locale $LANG_CODE\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"$LANG_CODE")," is the language code of the language you want to generate. For example, if you want to generate the translation files for the French language, you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"fr"),"."),(0,r.kt)("p",null,"The translation files are generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/$LANG_CODE/")," directory."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Generate Markdown files")),(0,r.kt)("p",null,"Copy Markdown files in docs to ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/$LANG_CODE/docusaurus-plugin-content-docs/current"),", and translate them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/$LANG_CODE/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/$LANG_CODE/docusaurus-plugin-content-docs/current\n")),(0,r.kt)("h4",{id:"translate-the-documents"},"Translate the documents"),(0,r.kt)("p",null,"All the documents are placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/$LANG_CODE/")," according to the languages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/code.json"),": the translation of the index page and the text used by docusaurus."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/docusaurus-theme-classic/footer.json"),": the translation of footer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/docusaurus-theme-classic/navbar.json"),": the translation of navbar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/docusaurus-plugin-content-docs/current.json"),": the label of category on sidebar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"i18n/$LANG_CODE/docusaurus-plugin-content-docs/current/**"),": the markdown files of documents.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Preview the translation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run start --locale $LANG_CODE\n")))}c.isMDXComponent=!0}}]);