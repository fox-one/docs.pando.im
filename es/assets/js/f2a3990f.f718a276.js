"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[2775],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=p(n),c=a,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4973:function(t,e,n){n.d(e,{Z:function(){return u},I:function(){return d}});var r=n(7294),a=/{\w+}/g,i="{}";function o(t,e){var n=[],o=t.replace(a,(function(t){var a=t.substr(1,t.length-2),o=null==e?void 0:e[a];if(void 0!==o){var l=r.isValidElement(o)?o:String(o);return n.push(l),i}return t}));return 0===n.length?t:n.every((function(t){return"string"==typeof t}))?o.split(i).reduce((function(t,e,r){var a;return t.concat(e).concat(null!==(a=n[r])&&void 0!==a?a:"")}),""):o.split(i).reduce((function(t,e,a){return[].concat(t,[r.createElement(r.Fragment,{key:a},e,n[a])])}),[])}function l(t){var e=t.children,n=t.values;if("string"!=typeof e)throw console.warn("Illegal <Interpolate> children",e),new Error("The Docusaurus <Interpolate> component only accept simple string values");return o(e,n)}var s=n(7529);function p(t){var e,n=t.id,r=t.message;return null!==(e=s[null!=n?n:r])&&void 0!==e?e:r}function d(t,e){var n,r=t.message;return o(null!==(n=p({message:r,id:t.id}))&&void 0!==n?n:r,e)}function u(t){var e,n=t.children,a=t.id,i=t.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var o=null!==(e=p({message:n,id:a}))&&void 0!==e?e:n;return r.createElement(l,{values:i},o)}},2008:function(t,e,n){n.d(e,{M:function(){return p}});var r=n(7294),a="container_2Pz7",i="title_24BA",o="subtitle_2vvR",l="msg_3ZE1",s=n(4973);function p(t){var e=t.msg,n="";return e&&(n=r.createElement("div",{className:l},e)),r.createElement("div",{className:a},r.createElement("div",{className:i},r.createElement(s.Z,null,"This Article needs additional information.")),r.createElement("div",{className:o},r.createElement(s.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(s.Z,null,"polishing the content"))),n)}},6763:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(2008),l=["components"],s={title:"Audit Reports",sidebar_position:3},p=void 0,d={unversionedId:"security/audit-reports",id:"security/audit-reports",isDocsHomePage:!1,title:"Audit Reports",description:"Audit Reports from IOActive",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/security/audit-reports.md",sourceDirName:"security",slug:"/security/audit-reports",permalink:"/es/docs/security/audit-reports",version:"current",sidebarPosition:3,frontMatter:{title:"Audit Reports",sidebar_position:3},sidebar:"docs",previous:{title:"Mixin Trusted Group",permalink:"/es/docs/security/mtg"},next:{title:"Support",permalink:"/es/docs/community/support"}},u=[{value:"Audit Reports from IOActive",id:"audit-reports-from-ioactive",children:[{value:"Download Report",id:"download-report",children:[]},{value:"Findings and Remediation Status",id:"findings-and-remediation-status",children:[]},{value:"Issue Analysis",id:"issue-analysis",children:[]}]},{value:"Audit Reports from LeastAuthority",id:"audit-reports-from-leastauthority",children:[{value:"Download Report",id:"download-report-1",children:[]},{value:"Findings and Remediation Status",id:"findings-and-remediation-status-1",children:[]},{value:"Responses to Findings",id:"responses-to-findings",children:[]}]}],m={toc:u};function c(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(o.M,{mdxType:"Improvement"}),(0,i.kt)("h2",{id:"audit-reports-from-ioactive"},"Audit Reports from IOActive"),(0,i.kt)("h3",{id:"download-report"},"Download Report"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"//docs.pando.im/reports/ioactive-report.pdf"},"Audit report from IOActive")),(0,i.kt)("h3",{id:"findings-and-remediation-status"},"Findings and Remediation Status"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Total Risk"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MP-07"),(0,i.kt)("td",{parentName:"tr",align:null},"Rings - Borrow Repayment Transactions May Fail After Modifying Borrow Balance"),(0,i.kt)("td",{parentName:"tr",align:null},"High"),(0,i.kt)("td",{parentName:"tr",align:null},"Fixed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MP-06"),(0,i.kt)("td",{parentName:"tr",align:null},"General - Outdated Web Server with Multiple Vulnerabilities"),(0,i.kt)("td",{parentName:"tr",align:null},"High"),(0,i.kt)("td",{parentName:"tr",align:null},"Fixed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MP-01"),(0,i.kt)("td",{parentName:"tr",align:null},"Lack of Certificate Pinning"),(0,i.kt)("td",{parentName:"tr",align:null},"Medium"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MP-02"),(0,i.kt)("td",{parentName:"tr",align:null},"Insufficient JailBreak Detection"),(0,i.kt)("td",{parentName:"tr",align:null},"Medium"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MP-03"),(0,i.kt)("td",{parentName:"tr",align:null},"App Transport Security Disabled"),(0,i.kt)("td",{parentName:"tr",align:null},"Low"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MP-04"),(0,i.kt)("td",{parentName:"tr",align:null},"RPATH Set in Binary"),(0,i.kt)("td",{parentName:"tr",align:null},"Low"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MP-05"),(0,i.kt)("td",{parentName:"tr",align:null},"Binary Users Insecure APIs"),(0,i.kt)("td",{parentName:"tr",align:null},"Low"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"issue-analysis"},"Issue Analysis"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MP-07: Rings - Borrow Repayment Transactions May Fail After Modifying Borrow Balance")),(0,i.kt)("p",null,"This issue is caused by an incorrect logic in ",(0,i.kt)("inlineCode",{parentName:"p"},"Payee.handleRepayEvent()"),". Please read IOActive audit report (from p3 to p8) for more details."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MP-07: General - Outdated Web Server with Multiple Vulnerabilities")),(0,i.kt)("p",null,"This issue is caused by an outdated web server that provides API endpoints. Please read IOActive audit report (from p3 to p8) for more details."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MP-01: Lack of Certificate Pinning")),(0,i.kt)("p",null,"This is an issue related to the Mixin Messenger."),(0,i.kt)("p",null,"At present, most Apps reply entirely to the certifications that operating system maintains and do not determine which certificate to trust or not. Attackers who break the operating system's trust storage or hack a root CA can set up a man-in-the-middle attack and capture the transmitted data between the App and the server."),(0,i.kt)("p",null,"Mixin Team and Pando Team are not responsible for ensuring the safety of user's local operating system and the root CA. After discussing with the Mixin Team, we decided to ignore this issue for now."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MP-02: Insufficient JailBreak Detection")),(0,i.kt)("p",null,"This is an issue related to the Mixin Messenger iOS."),(0,i.kt)("p",null,"Mixin Team is not responsible for ensuring the safety of user's local operating system, so they decided to ignore this issue for now."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MP-03: App Transport Security Disabled")),(0,i.kt)("p",null,"This is an issue related to the Mixin Messenger iOS."),(0,i.kt)("p",null,"In the report, it mentions that ATS is disabled for requests from WebView. It's not a flaw of App because the users are allowed to use the WebView to visit HTTP webpages."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MP-04: RPATH Set in Binary")),(0,i.kt)("p",null,"This issue is very hard to exploit, so the Mixin Team decided to ignore this issue for now."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MP-05: Binary Users Insecure APIs")),(0,i.kt)("p",null,"This issue is very hard to exploit, so the Mixin Team decided to ignore this issue for now."),(0,i.kt)("h2",{id:"audit-reports-from-leastauthority"},"Audit Reports from LeastAuthority"),(0,i.kt)("h3",{id:"download-report-1"},"Download Report"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"//docs.pando.im/reports/least-authority-report.pdf"},"Audit Report from Least Authority")),(0,i.kt)("h3",{id:"findings-and-remediation-status-1"},"Findings and Remediation Status"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A"),(0,i.kt)("td",{parentName:"tr",align:null},"No Provision to Handle Compromise of Shared MTG Key"),(0,i.kt)("td",{parentName:"tr",align:null},"Won't fix")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"B"),(0,i.kt)("td",{parentName:"tr",align:null},"Security Roadmap Nonexistent"),(0,i.kt)("td",{parentName:"tr",align:null},"Won't fix")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"C"),(0,i.kt)("td",{parentName:"tr",align:null},"Protocol Specifications Nonexistent"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"D"),(0,i.kt)("td",{parentName:"tr",align:null},"Secrets Are Shared and Persist in Plain Text"),(0,i.kt)("td",{parentName:"tr",align:null},"Won't fix")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"E"),(0,i.kt)("td",{parentName:"tr",align:null},"Use of Unauthenticated Encryption Mode"),(0,i.kt)("td",{parentName:"tr",align:null},"Won't fix")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F"),(0,i.kt)("td",{parentName:"tr",align:null},"Input Not Checked When Adding or Removing PKCS #7 Padding"),(0,i.kt)("td",{parentName:"tr",align:null},"Won't fix")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"G"),(0,i.kt)("td",{parentName:"tr",align:null},"Excess Centralization"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"responses-to-findings"},"Responses to Findings"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finding A: No Provision to Handle Compromise of Shared MTG Key")),(0,i.kt)("p",null,"In the begining, the purpose of the shared key is to encrypt the memo. In the previous version, Pando Leaf and Rings put ",(0,i.kt)("inlineCode",{parentName:"p"},"user_id")," in the memo, and the shared key is used to encrypt it."),(0,i.kt)("p",null,"However, to better protect the user's privacy, we upgrade the Mixin Network, that adding ",(0,i.kt)("inlineCode",{parentName:"p"},"user_id")," in the UTXO directly. Now Pando has already remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_id")," from the memo so there is no sensitive information in the memo."),(0,i.kt)("p",null,"To make the protocol more campatible, we keep the support of the encrypted memo. But it's totally fine to use plain-text in memo and leave it unencrypted. In another word, the shared key is not important anymore."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finding B: Security Roadmap Nonexistent")),(0,i.kt)("p",null,"Actually we have a Roadmap with security related plans. We will update the roadmap in the future."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finding C: Protocol Specifications Nonexistent")),(0,i.kt)("p",null,"We have already provided some specifications for the protocol. Please check them out ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pando.im/developer/intro"},"https://docs.pando.im/developer/intro"),"."),(0,i.kt)("p",null,"In the future, we will provide more documentation here."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finding D: Secrets Are Shared and Persist in Plain Text")),(0,i.kt)("p",null,"We have own way to manage the secrets and keep the deployment environment secure."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finding E: Use of Unauthenticated Encryption Mode")),(0,i.kt)("p",null,"We are using AES-CBC in the memo encryption. It's better to switch to AES-GCM. However, because of the explanation of the ",(0,i.kt)("strong",{parentName:"p"},"Finding A"),", Pando decided to ignore this issue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finding F: Input Not Checked When Adding or Removing PKCS #7 Padding")),(0,i.kt)("p",null,"Same as above."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finding G: Excess Centralization")),(0,i.kt)("p",null,"Yes, right now, it is hard to add new members to the MTG or remove the existed."),(0,i.kt)("p",null,"We are working on a new governance system to make it possible to add and remove MTG members. The new governance system will be released in the future."))}c.isMDXComponent=!0}}]);