"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9312],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4973:function(e,t,n){n.d(t,{Z:function(){return p},I:function(){return s}});var r=n(7294),o=/{\w+}/g,a="{}";function i(e,t){var n=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){var l=r.isValidElement(i)?i:String(i);return n.push(l),a}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?i.split(a).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):i.split(a).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function l(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(t,n)}var c=n(7529);function u(e){var t,n=e.id,r=e.message;return null!==(t=c[null!=n?n:r])&&void 0!==t?t:r}function s(e,t){var n,r=e.message;return i(null!==(n=u({message:r,id:e.id}))&&void 0!==n?n:r,t)}function p(e){var t,n=e.children,o=e.id,a=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(t=u({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(l,{values:a},i)}},2008:function(e,t,n){n.d(t,{M:function(){return u}});var r=n(7294),o="container_2Pz7",a="title_24BA",i="subtitle_2vvR",l="msg_3ZE1",c=n(4973);function u(e){var t=e.msg,n="";return t&&(n=r.createElement("div",{className:l},t)),r.createElement("div",{className:o},r.createElement("div",{className:a},r.createElement(c.Z,null,"This Article needs additional information.")),r.createElement("div",{className:i},r.createElement(c.Z,null,"Please help improve it by "),r.createElement("a",{href:"https://docs.pando.im/docs/community/contribute"},r.createElement(c.Z,null,"polishing the content"))),n)}},9034:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(2008),l=["components"],c={title:"Participating in the Auction",sidebar_position:8,date:new Date("2021-08-13T12:33:07.000Z")},u=void 0,s={unversionedId:"leaf/tutorials/auction-participation",id:"leaf/tutorials/auction-participation",isDocsHomePage:!1,title:"Participating in the Auction",description:"Improvement,",source:"@site/docs/leaf/tutorials/auction-participation.md",sourceDirName:"leaf/tutorials",slug:"/leaf/tutorials/auction-participation",permalink:"/docs/leaf/tutorials/auction-participation",version:"current",sidebarPosition:8,frontMatter:{title:"Participating in the Auction",sidebar_position:8,date:"2021-08-13T12:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Withdrawing Collateral",permalink:"/docs/leaf/tutorials/withdraw"},next:{title:"Vaults",permalink:"/docs/leaf/key-concepts/vaults"}},p=[],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.M,{mdxType:"Improvement"}),(0,a.kt)("p",null,'You can go to "Auction" page to participate in auctions and check on the information of the past auctions.'),(0,a.kt)("p",null,'Ongoing auctions are in the "Ongoing" tab.'),(0,a.kt)("p",null,"If there are no auctions in progress, you will see (pic of blank state)"),(0,a.kt)("p",null,"For an active auction, there are two phases."),(0,a.kt)("p",null,"For Phase 1, participants bid at an increment of not less than 3% of the previous bidding amount to cover the highest amount of the outstanding debt."),(0,a.kt)("p",null,"If within the limit of 12 hours, no one is willing to cover the total debt, the auction is over and the bidder who is willing to cover the highest amount of the debt will take all of the collateral home. Or if there is someone who bids to cover the total debt, then the auction will move to the second phase."),(0,a.kt)("p",null,"(pic of first stage page and explanation of the elements)"),(0,a.kt)("p",null,"For Phase 2, participants bid at a decrement of no less than 3% of the previous bidding amount on accepting the smallest part of the collateral for the payment of the total debt."),(0,a.kt)("p",null,"The winner will need to pay off all the debt in exchange for the smallest amount of the collateral that (s)he subtmits the bid for."),(0,a.kt)("p",null,"(pic of second stage page and explanation of the elements)"))}d.isMDXComponent=!0}}]);