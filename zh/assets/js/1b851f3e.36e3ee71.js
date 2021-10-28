"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[3486],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7242:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"\u8c03\u7528\u94b1\u5305",sidebar_position:2,date:new Date("2021-07-22T22:33:07.000Z")},c=void 0,d={unversionedId:"lake/guide/invoke-wallets",id:"lake/guide/invoke-wallets",isDocsHomePage:!1,title:"\u8c03\u7528\u94b1\u5305",description:"\u76ee\u524d\u6709\u4e24\u79cd\u94b1\u5305\u4e0e 4swap/Lake \u517c\u5bb9\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs-developer/current/lake/guide/invoke-wallets.md",sourceDirName:"lake/guide",slug:"/lake/guide/invoke-wallets",permalink:"/zh/developer/lake/guide/invoke-wallets",version:"current",lastUpdatedAt:1635436598,formattedLastUpdatedAt:"10/28/2021",sidebarPosition:2,frontMatter:{title:"\u8c03\u7528\u94b1\u5305",sidebar_position:2,date:"2021-07-22T22:33:07.000Z"},sidebar:"docs",previous:{title:"\u4f7f\u7528 SDK \u8fdb\u884c\u4ea4\u6613",permalink:"/zh/developer/lake/guide/using-sdk"},next:{title:"API\u6982\u8ff0",permalink:"/zh/developer/lake/apis/overview"}},p=[{value:"\u8c03\u7528Mixin Messenger",id:"\u8c03\u7528mixin-messenger",children:[{value:"\u65b9\u5f0f1",id:"\u65b9\u5f0f1",children:[]},{value:"\u65b9\u5f0f2",id:"\u65b9\u5f0f2",children:[]}]},{value:"\u8c03\u7528Fennec",id:"\u8c03\u7528fennec",children:[]}],s={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u76ee\u524d\u6709\u4e24\u79cd\u94b1\u5305\u4e0e 4swap/Lake \u517c\u5bb9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/apps/wallets#mixin-messenger"},"Mixin Messenger"),": Mixin \u6838\u5fc3\u56e2\u961f\u521b\u5efa\u7684\u79fb\u52a8\u7aef\u94b1\u5305\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/apps/wallets#fennec"},"Fennec"),": Fox.ONE \u56e2\u961f\u521b\u5efa\u7684\u6d4f\u89c8\u5668\u6269\u5c55\u94b1\u5305\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u8981\u63d0\u4f9b\u4e00\u4e2a\u652f\u6301\u8fd9\u4e9b\u94b1\u5305\u7684\u5e94\u7528\uff0c \u60a8\u9700\u8981\u5c06\u60a8\u7684\u5e94\u7528\u4e0e\u94b1\u5305\u6574\u5408\u8d77\u6765\uff0c\u5e76\u5728\u9700\u8981\u7684\u65f6\u5019\u8c03\u7528\u5b83\u4eec\u6765\u5904\u7406\u4ed8\u6b3e\u3002"),(0,a.kt)("h2",{id:"\u8c03\u7528mixin-messenger"},"\u8c03\u7528Mixin Messenger"),(0,a.kt)("p",null,"\u8c03\u7528Mixin Messenger\u7684\u4ed8\u6b3e\u63a5\u53e3\u975e\u5e38\u7b80\u5355\uff1a"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"code_url")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," \u6765\u8868\u793a\u591a\u7b7e\u8f6c\u8d26\u9700\u8981\u88ab\u786e\u8ba4\u3002"),(0,a.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u6765\u83b7\u53d6\u5b83:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6309\u7167API ",(0,a.kt)("a",{parentName:"li",href:"../apis/actions"},'"/api/actions"')," \u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"li",href:"../action-protocol#swap-crypto"},"swap action")),(0,a.kt)("li",{parentName:"ol"},"\u8c03\u7528  ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api.mixin.one/payments")," API \u6765\u83b7\u53d6\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"code_id")," \u7684\u4ed8\u6b3e\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u60a8\u7684\u540e\u7aef\u751f\u6210\u4ea4\u6613\uff0c\u5e76\u5c06code/code_url\u4f20\u9012\u5230\u524d\u7aef\u3002")),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u5c06\u5411\u60a8\u5c55\u793a\u7b2c\u4e00\u79cd\u65b9\u6cd5\uff1a"),(0,a.kt)("h3",{id:"\u65b9\u5f0f1"},"\u65b9\u5f0f1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';\nconst ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';\n\nasync function pay() {\n  const follow_id = uuid.v4();\n\n  // \u6784\u9020memo\n  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;\n\n  // \u4ece BTC swap \u5230 ETH\n  const resp = await http.post(`/actions`, {\n    data: {\n      action: memo,\n      amount: \"0.0001\",\n      asset_id: BTC_ASSET_ID,\n      // \u6216\u7559\u7a7a broker_id\n      broker_id: '5dbdb169-d56d-4b5b-b066-9b0780691b14',\n    }\n  });\n\n  // \u5982\u679c\u60a8\u7684 web app \u5728 Messenger\u7684 webview \u91cc\u8fd0\u884c\n  // \u5b83\u5c06\u8c03\u7528 payment UI\n  window.location.href = `https://mixin.one/codes/${resp.code}`;\n\n  // \u5982\u679c\u60a8\u7684 web app \u540c\u65f6\u652f\u6301\u684c\u9762\u7aef\u8fd0\u884c\n  // \u60a8\u53ef\u80fd\u9700\u8981\u5411\u60a8\u7684\u7528\u6237\u5c55\u793a\u8fd9\u6837\u7684\u4e8c\u7ef4\u7801:\n  // const qrCode = generateQrCode(`https://mixin.one/codes/${resp.coded}`)\n  // showQrCodeDialog();\n}\n")),(0,a.kt)("h3",{id:"\u65b9\u5f0f2"},"\u65b9\u5f0f2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';\nconst ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';\n\nasync function pay() {\n  const follow_id = uuid.v4();\n\n  // \u6784\u9020memo\n  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;\n\n  // \u4ece BTC swap \u5230 ETH\n  const resp = await http.post(`https://api.mixin.one/payments`, {\n    data: {\n      BTC_ASSET_ID,\n      '0.0001',\n      memo,\n      trace_id: follow_id,\n      // read receivers and threshold from API `/api/information`\n      opponent_multisig: { receivers, threshold },\n    }\n  });\n\n  // \u5982\u679c\u60a8\u7684 web app \u5728 Messenger\u7684 webview \u91cc\u8fd0\u884c\n  // \u5b83\u5c06\u8c03\u7528 payment UI\n  window.location.href = resp.data.code_url;\n\n  // \u5982\u679c\u60a8\u7684 web app \u540c\u65f6\u652f\u6301\u684c\u9762\u7aef\u8fd0\u884c\n  // \u60a8\u53ef\u80fd\u9700\u8981\u5411\u60a8\u7684\u7528\u6237\u5c55\u793a\u8fd9\u6837\u7684\u4e8c\u7ef4\u7801:\n  // const qrCode = generateQrCode(`https://mixin.one/codes/${resp.coded}`)\n  // showQrCodeDialog();\n}\n")),(0,a.kt)("h2",{id:"\u8c03\u7528fennec"},"\u8c03\u7528Fennec"),(0,a.kt)("p",null,"Fennec \u662f\u5728\u6d4f\u89c8\u5668\u4e2d\u50a8\u5b58\u52a0\u5bc6\u5bc6\u94a5\u7684\u6d4f\u89c8\u5668\u6269\u5c55\u94b1\u5305\u3002"),(0,a.kt)("p",null,"\u60a8\u4e0d\u9700\u8981\u8c03\u7528 Mixin API \u6765\u52a0\u8f7d\u8d44\u4ea7\u3001\u8bfb\u53d6\u4e2a\u4eba\u8d44\u6599\u6216\u51c6\u5907\u4ed8\u6b3e\u3002 \u76f8\u53cd\uff0cFennec \u63d0\u4f9b\u81ea\u5df1\u7684 API \u6765\u505a\u6240\u6709\u7684\u4e8b\u60c5\u3002"),(0,a.kt)("p",null,"\u6b32\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fox-one/fennec#4-interact-with-your-mixin-dapp"},"demo\u7684\u6e90\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// fennec ext\nlet ext = null;\n// fennec context\nlet ctx = null;\n// token\nlet token = null;\n\nasync function load() {\n  // check the ext and get the context\n  if (window.__MIXIN__ && window.__MIXIN__.mixin_ext) {\n    ext = window.__MIXIN__.mixin_ext;\n    ctx = await ext.enable(\"demo\");\n    if (ctx) {\n      token = await ctx.wallet.signToken({\n        payload: { from: \"demo\" }\n      });\n    }\n  }\n}\n\nconst BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';\nconst ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';\n\nfunction pay() {\n  const follow_id = uuid.v4();\n\n  // \u6784\u9020memo\n  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;\n\n  // \u4ece BTC swap \u5230 ETH\n  const resp = await http.post(`/actions`, {\n    data: {\n      action: memo,\n      amount: \"0.0001\",\n      asset_id: BTC_ASSET_ID,\n      // or leave broker_id empty\n      broker_id: '5dbdb169-d56d-4b5b-b066-9b0780691b14',\n    }\n  });\n\n  ctx.wallet.multisigsPayment({ code: resp.code });\n}\n")))}u.isMDXComponent=!0}}]);