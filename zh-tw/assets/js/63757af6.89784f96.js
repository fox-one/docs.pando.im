"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[6263],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,h=c["".concat(l,".").concat(k)]||c[k]||u[k]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1700:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={title:"Compare Lake and 4swap",sidebar_position:5,date:new Date("2021-07-31T15:44:07.000Z")},l=void 0,s={unversionedId:"lake/lake-and-4swap",id:"lake/lake-and-4swap",isDocsHomePage:!1,title:"Compare Lake and 4swap",description:"4swap is an open protocol that provides the basis of the decentralized liquidity and swapping service with a Mixin Trusted Group.",source:"@site/developer/lake/lake-and-4swap.md",sourceDirName:"lake",slug:"/lake/lake-and-4swap",permalink:"/zh-tw/developer/lake/lake-and-4swap",version:"current",lastUpdatedAt:1628155388,formattedLastUpdatedAt:"8/5/2021",sidebarPosition:5,frontMatter:{title:"Compare Lake and 4swap",sidebar_position:5,date:"2021-07-31T15:44:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Action Protocol",permalink:"/zh-tw/developer/lake/action-protocol"},next:{title:"Examples",permalink:"/zh-tw/developer/lake/examples"}},d=[{value:"4swap",id:"4swap",children:[]},{value:"Pando Lake",id:"pando-lake",children:[{value:"Integrate with Pando Lake",id:"integrate-with-pando-lake",children:[]}]}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4swap")," is an open protocol that provides the basis of the decentralized liquidity and swapping service with a Mixin Trusted Group."),(0,o.kt)("h2",{id:"4swap"},"4swap"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4swap Broker")," is the interface that users interact with 4swap protocol."),(0,o.kt)("p",null,"The default broker is the 4swap Mixin Messenger bot (id: 7000103537). If you don't specify a broker ID in the requests, all information about assets, pairs, market, orders will be responded by this broker."),(0,o.kt)("p",null,"You can access this broker's web interface by visiting ",(0,o.kt)("a",{parentName:"p",href:"https://4swap.org"},"https://4swap.org"),"."),(0,o.kt)("h2",{id:"pando-lake"},"Pando Lake"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pando Lake")," is a 4swap broker that is hosted by Pando."),(0,o.kt)("p",null,"Pando Lake filters the market information to only display the chosen pairs and markets that have good liquidity and are backed by solid communities."),(0,o.kt)("p",null,"Pando Lake has an individual Mixin Messenger bot (id: 7000103937), you can also access its web interface by visiting ",(0,o.kt)("a",{parentName:"p",href:"https://lake.pando.im"},"https://lake.pando.im"),"."),(0,o.kt)("p",null,"The LP-Tokens are shared between Pando Lake and 4swap."),(0,o.kt)("h3",{id:"integrate-with-pando-lake"},"Integrate with Pando Lake"),(0,o.kt)("p",null,"The broker id of Pando Lake is ",(0,o.kt)("inlineCode",{parentName:"p"},"5dbdb169-d56d-4b5b-b066-9b0780691b14"),", which is used in requests."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Authorize to Lake")),(0,o.kt)("p",null,"When call ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/oauth")," to authorize the wallet, two parameters ",(0,o.kt)("inlineCode",{parentName:"p"},"broker_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," must be specified, in which ",(0,o.kt)("inlineCode",{parentName:"p"},"label"),' should be a string "lake".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Other APIs")),(0,o.kt)("p",null,"The parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"broker_id")," should be appended to the query or payload of following API requests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"POST /api/actions, it generates a transfer that could be sent to Pando Lake."),(0,o.kt)("li",{parentName:"ul"},"GET /api/pairs, it will respond with a ",(0,o.kt)("inlineCode",{parentName:"li"},"whitelists")," field which includes asset ids that are supported by Pando Lake.")))}c.isMDXComponent=!0}}]);