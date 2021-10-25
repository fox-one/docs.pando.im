"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[5457],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(f,i(i({ref:n},d),{},{components:t})):o.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5569:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"Invoke Wallets",sidebar_position:2,date:new Date("2021-07-22T22:33:07.000Z")},c=void 0,s={unversionedId:"lake/guide/invoke-wallets",id:"lake/guide/invoke-wallets",isDocsHomePage:!1,title:"Invoke Wallets",description:"\u73fe\u5728\u30014swap/Lake\u3068\u4e92\u63db\u6027\u306e\u3042\u308b\u30a6\u30a9\u30ec\u30c3\u30c8\u306f2\u7a2e\u985e\u3042\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs-developer/current/lake/guide/invoke-wallets.md",sourceDirName:"lake/guide",slug:"/lake/guide/invoke-wallets",permalink:"/ja/developer/lake/guide/invoke-wallets",version:"current",lastUpdatedAt:1635085985,formattedLastUpdatedAt:"10/24/2021",sidebarPosition:2,frontMatter:{title:"Invoke Wallets",sidebar_position:2,date:"2021-07-22T22:33:07.000Z"},sidebar:"docs",previous:{title:"SDK\u3092\u5229\u7528\u3057\u305f\u53d6\u5f15",permalink:"/ja/developer/lake/guide/using-sdk"},next:{title:"Lake API \u6982\u8981",permalink:"/ja/developer/lake/apis/overview"}},d=[{value:"Invoke Messenger",id:"invoke-messenger",children:[{value:"\u65b9\u6cd51",id:"\u65b9\u6cd51",children:[]},{value:"\u65b9\u6cd52",id:"\u65b9\u6cd52",children:[]}]},{value:"Invoke Fennec",id:"invoke-fennec",children:[]}],p={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u73fe\u5728\u30014swap/Lake\u3068\u4e92\u63db\u6027\u306e\u3042\u308b\u30a6\u30a9\u30ec\u30c3\u30c8\u306f2\u7a2e\u985e\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/apps/wallets#mixin-messenger"},"Mixin Messenger"),": Mixin\u30b3\u30a2\u30c1\u30fc\u30e0\u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u305f\u30e2\u30d0\u30a4\u30eb\u30a6\u30a9\u30ec\u30c3\u30c8\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/apps/wallets#fennec"},"Fennec"),": Fox.ONE\u30c1\u30fc\u30e0\u304c\u4f5c\u6210\u3057\u305f\u30d6\u30e9\u30a6\u30b6\u62e1\u5f35\u30a6\u30a9\u30ec\u30c3\u30c8\u3002")),(0,a.kt)("p",null,"\u3053\u308c\u3089\u3044\u305a\u308c\u304b\u306e\u30a6\u30a9\u30ec\u30c3\u30c8\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u30a6\u30a7\u30d6\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u63d0\u4f9b\u3059\u308b\u5834\u5408\u3001\u30a6\u30a9\u30ec\u30c3\u30c8\u3092\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u306b\u7d71\u5408\u3057\u3001\u6240\u671b\u6642\u9593\u306b\u652f\u6255\u3046\u3088\u3046\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"invoke-messenger"},"Invoke Messenger"),(0,a.kt)("p",null,"Mixin Messenger\u306e\u6c7a\u6e08\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u547c\u3073\u51fa\u3059\u65b9\u6cd5\u306f\u3068\u3066\u3082\u30b7\u30f3\u30d7\u30eb\u3067\u3059:"),(0,a.kt)("p",null,"\u307e\u305a\u6700\u521d\u306b\u3001\u627f\u8a8d\u3059\u308b\u5fc5\u8981\u306e\u3042\u308b\u30de\u30eb\u30c1\u30b7\u30b0\u8ee2\u9001\u3092\u793a\u3059",(0,a.kt)("inlineCode",{parentName:"p"},"code_url"),"\u304b",(0,a.kt)("inlineCode",{parentName:"p"},"code"),"\u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u53d6\u5f97\u65b9\u6cd5\u306f\u4e8c\u3064\u3042\u308a\u307e\u3059:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"API ",(0,a.kt)("a",{parentName:"li",href:"../apis/actions"},'"/api/actions"')," \u306b\u5f93\u3044\u3001 ",(0,a.kt)("a",{parentName:"li",href:"../action-protocol#swap-crypto"},"\u30b9\u30ef\u30c3\u30d7\u30a2\u30af\u30b7\u30e7\u30f3")," \u3092\u4f5c\u6210\u3057\u307e\u3059"),(0,a.kt)("li",{parentName:"ol"},"API ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api.mixin.one/payments")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001 ",(0,a.kt)("inlineCode",{parentName:"li"},"code_id")," \u3092\u542b\u3080\u652f\u6255\u3044\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u81ea\u8eab\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3067\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u751f\u6210\u3057\u3001code/code_url\u3092\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306b\u6e21\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("p",null,"\u4e00\u3064\u76ee\u306e\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059:"),(0,a.kt)("h3",{id:"\u65b9\u6cd51"},"\u65b9\u6cd51"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';\nconst ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';\n\nasync function pay() {\n  const follow_id = uuid.v4();\n\n  // construct the memo\n  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;\n\n  // create action to swap from BTC to ETH\n  const resp = await http.post(`/actions`, {\n    data: {\n      action: memo,\n      amount: \"0.0001\",\n      asset_id: BTC_ASSET_ID,\n      // or leave broker_id empty\n      broker_id: '5dbdb169-d56d-4b5b-b066-9b0780691b14',\n    }\n  });\n\n  // if your web app is running in Messenger's webview\n  // it will invoke the payment UI\n  window.location.href = `https://mixin.one/codes/${resp.code}`;\n\n  // if your web also support to visit on desktop\n  // you may need to show the QrCode to the users like this:\n  // const qrCode = generateQrCode(`https://mixin.one/codes/${resp.coded}`)\n  // showQrCodeDialog();\n}\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd52"},"\u65b9\u6cd52"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';\nconst ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';\n\nasync function pay() {\n  const follow_id = uuid.v4();\n\n  // construct the memo\n  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;\n\n  // create action to swap from BTC to ETH\n  const resp = await http.post(`https://api.mixin.one/payments`, {\n    data: {\n      BTC_ASSET_ID,\n      '0.0001',\n      memo,\n      trace_id: follow_id,\n      // read receivers and threshold from API `/api/information`\n      opponent_multisig: { receivers, threshold },\n    }\n  });\n\n  // if your web app is running in Messenger's webview\n  // it will invoke the payment UI\n  window.location.href = resp.data.code_url;\n\n  // if your web also support to visit on desktop\n  // you may need to show the QrCode to the users like this:\n  // const qrCode = generateQrCode(`https://mixin.one/codes/${resp.coded}`)\n  // showQrCodeDialog();\n}\n")),(0,a.kt)("h2",{id:"invoke-fennec"},"Invoke Fennec"),(0,a.kt)("p",null,"Fennec \u306f\u30d6\u30e9\u30a6\u30b6\u62e1\u5f35\u30a6\u30a9\u30ec\u30c3\u30c8\u3067\u3001\u30d6\u30e9\u30a6\u30b6\u306b\u6697\u53f7\u5316\u3055\u308c\u305f\u30ad\u30fc\u30b9\u30c8\u30a2\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30a2\u30bb\u30c3\u30c8\b\u306e\u30ed\u30fc\u30c9\u3084\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u306e\u8aad\u307f\u8fbc\u307f\u3001\u652f\u6255\u3044\u6e96\u5099\u306e\u3068\u305f\u3081\u306b Mixin API\u3092\u547c\u3073\u51fa\u3059\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u305d\u306e\u4ee3\u308f\u308a\u306b\u3001Fennec\u306f\u305d\u308c\u3089\u5168\u3066\u3092\u5b9f\u884c\u3059\u308b\u72ec\u81eaAPI\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fox-one/fennec#4-interact-with-your-mixin-dapp"},"\u30c7\u30e2\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// fennec ext\nlet ext = null;\n// fennec context\nlet ctx = null;\n// token\nlet token = null;\n\nasync function load() {\n  // check the ext and get the context\n  if (window.__MIXIN__ && window.__MIXIN__.mixin_ext) {\n    ext = window.__MIXIN__.mixin_ext;\n    ctx = await ext.enable(\"demo\");\n    if (ctx) {\n      token = await ctx.wallet.signToken({\n        payload: { from: \"demo\" }\n      });\n    }\n  }\n}\n\nconst BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';\nconst ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';\n\nfunction pay() {\n  const follow_id = uuid.v4();\n\n  // construct the memo\n  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;\n\n  // create action to swap from BTC to ETH\n  const resp = await http.post(`/actions`, {\n    data: {\n      action: memo,\n      amount: \"0.0001\",\n      asset_id: BTC_ASSET_ID,\n      // or leave broker_id empty\n      broker_id: '5dbdb169-d56d-4b5b-b066-9b0780691b14',\n    }\n  });\n\n  ctx.wallet.multisigsPayment({ code: resp.code });\n}\n")))}u.isMDXComponent=!0}}]);