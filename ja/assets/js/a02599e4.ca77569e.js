"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9626],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(n),d=i,m=f["".concat(a,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:i,c[1]=u;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4213:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),c=["components"],u={title:"Mixin\u306f\u4fe1\u983c\u3067\u304d\u308b\u30b0\u30eb\u30fc\u30d7",sidebar_position:2},a=void 0,p={unversionedId:"security/mtg",id:"security/mtg",isDocsHomePage:!1,title:"Mixin\u306f\u4fe1\u983c\u3067\u304d\u308b\u30b0\u30eb\u30fc\u30d7",description:"Mixin Network",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/security/mtg.md",sourceDirName:"security",slug:"/security/mtg",permalink:"/ja/docs/security/mtg",version:"current",sidebarPosition:2,frontMatter:{title:"Mixin\u306f\u4fe1\u983c\u3067\u304d\u308b\u30b0\u30eb\u30fc\u30d7",sidebar_position:2},sidebar:"docs",previous:{title:"\u6982\u8981",permalink:"/ja/docs/security/overview"},next:{title:"\u76e3\u67fb\u5831\u544a\u66f8",permalink:"/ja/docs/security/audit-reports"}},l=[{value:"Mixin Network",id:"mixin-network",children:[]},{value:"Mixin\u306f\u4fe1\u983c\u3067\u304d\u308b\u30b0\u30eb\u30fc\u30d7",id:"mixin\u306f\u4fe1\u983c\u3067\u304d\u308b\u30b0\u30eb\u30fc\u30d7",children:[]}],s={toc:l};function f(e){var t=e.components,u=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},s,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"mixin-network"},"Mixin Network"),(0,o.kt)("p",null,"Mixin Network\u306f\u3001aBFT\u3092\u5099\u3048\u305fDAG\u306b\u57fa\u3065\u304fTEE\uff08Trusted Execution Environment\uff09\u306b\u3088\u3063\u3066\u99c6\u52d5\u3055\u308c\u308b\u30d1\u30d6\u30ea\u30c3\u30af\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u3067\u3059\u3002 \u512a\u308c\u305f\u7406\u8ad6\u3092\u6301\u3063\u3066\u3044\u308b\u304c\u3001\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u969b\u306e\u5b9f\u88c5\u304c\u307b\u3068\u3093\u3069\u306a\u3044\u4ed6\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u306f\u7570\u306a\u308a\u3001Mixin Network\u306f\u3001\u3088\u308a\u5b89\u5168\u3067\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a0\u306e\u6599\u91d1\u3067\u3001\u958b\u767a\u8005\u3084\u30e6\u30fc\u30b6\u30fc\u306b\u512a\u3057\u3044\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u8d85\u9ad8\u901f\u3067\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"mixin\u306f\u4fe1\u983c\u3067\u304d\u308b\u30b0\u30eb\u30fc\u30d7"},"Mixin\u306f\u4fe1\u983c\u3067\u304d\u308b\u30b0\u30eb\u30fc\u30d7"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developers.mixin.one/document/mainnet/mtg"},"Mixin Trusted Group")," MixinNetwork\u306e\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30bf\u30af\u30c8\u306e\u4ee3\u66ff\u624b\u6bb5\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8946).Z})),(0,o.kt)("p",null,"\u57fa\u672c\u7684\u306b\u3001MTG\u306f\u30de\u30eb\u30c1\u30b7\u30b0\u30cd\u30c1\u30e3\u30fb\u30ab\u30b9\u30c8\u30c7\u30a3\u30a2\u30f3\u30fb\u30b3\u30f3\u30bb\u30f3\u30b5\u30b9\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002 Pando\u306e\u300c\u4fe1\u983c\u3067\u304d\u308b\u30b0\u30eb\u30fc\u30d7\u300d\u3068\u3057\u3066\u3044\u304f\u3064\u304b\u306e\u30c1\u30fc\u30e0\u304c\u9078\u3070\u308c\u3001\u914d\u7f6e\u3055\u308c\u3001\u300c\u30ce\u30fc\u30c9\u300d\u306b\u306a\u308a\u307e\u3059\u3002 \u7279\u5b9a\u306e\u7ba1\u7406\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u30ce\u30fc\u30c9\u9593\u3067\u30b3\u30f3\u30bb\u30f3\u30b5\u30b9\u306b\u9054\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u305d\u306e\u7d50\u679c\u3001\u5b89\u5b9a\u3057\u305f\u30b5\u30fc\u30d3\u30b9\u3068\u8cc7\u7523\u306e\u5b89\u5168\u6027\u304c\u4fdd\u8a3c\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u305f\u3068\u3048\u3070\u3001M\u304c\u30ce\u30fc\u30c9\u306e\u6570\u3092\u8868\u3059M / N\u30de\u30eb\u30c1\u30b7\u30b0\u30b0\u30eb\u30fc\u30d7\u304c\u3042\u308a\u3001\u30b0\u30eb\u30fc\u30d7\u304c\u30de\u30eb\u30c1\u30b7\u30b0\u30a2\u30c9\u30ec\u30b9\u5185\u306e\u3044\u304f\u3064\u304b\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u7ba1\u7406\u3057\u3066\u3044\u308b\u3068\u3057\u307e\u3059\u3002 \u30ce\u30fc\u30c9\u306e1\u3064\u304c\u4e00\u90e8\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u8ee2\u9001\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u3001\u30ce\u30fc\u30c9\u306f\u4ed6\u306e\u30ce\u30fc\u30c9\u304b\u3089\u5c11\u306a\u304f\u3068\u3082N\u500b\u306e\u7f72\u540d\u3092\u53ce\u96c6\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"MTG\u306f\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u3059\u3002 Pando\u306f\u3001MixinNetwork\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u4f7f\u7528\u3057\u3066\u8a2d\u8a08\u3055\u308c\u305f\u4e00\u9023\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002"))}f.isMDXComponent=!0},8946:function(e,t,n){t.Z=n.p+"assets/images/overview-architecture-b344f0603dce64466cc31db0b18347f3.svg"}}]);