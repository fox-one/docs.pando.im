(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[441],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(f,i(i({ref:n},d),{},{components:t})):o.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8159:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i=["components"],l={title:"Invoke Wallets",sidebar_position:2,date:new Date("2021-07-22T22:33:07.000Z")},s=void 0,c={unversionedId:"lake/guide/invoke-wallets",id:"lake/guide/invoke-wallets",isDocsHomePage:!1,title:"Invoke Wallets",description:"At present, there are two kinds of wallets that are compatible with 4swap/Lake:",source:"@site/developer/lake/guide/invoke-wallets.md",sourceDirName:"lake/guide",slug:"/lake/guide/invoke-wallets",permalink:"/developer/lake/guide/invoke-wallets",version:"current",lastUpdatedAt:1628151198,formattedLastUpdatedAt:"8/5/2021",sidebarPosition:2,frontMatter:{title:"Invoke Wallets",sidebar_position:2,date:"2021-07-22T22:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Using SDK to Trade",permalink:"/developer/lake/guide/using-sdk"},next:{title:"RESTful APIs",permalink:"/developer/lake/apis"}},d=[{value:"Invoke Messenger",id:"invoke-messenger",children:[{value:"Way 1",id:"way-1",children:[]},{value:"Way 2",id:"way-2",children:[]}]},{value:"Invoke Fennec",id:"invoke-fennec",children:[]}],p={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At present, there are two kinds of wallets that are compatible with 4swap/Lake:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mixin.one/messenger"},"Mixin Messenger"),": A mobile wallet that is created by Mixin core team."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fox-one/fennec"},"Fennec"),": A browser extension wallet created by Fox.ONE team.")),(0,a.kt)("p",null,"If you are going to provide a web interface that supports any of these wallets, you need to integrate your web app with the wallets and invoke them to pay at the desired time."),(0,a.kt)("h2",{id:"invoke-messenger"},"Invoke Messenger"),(0,a.kt)("p",null,"To invoke the payment interface of Mixin Messenger is pretty simple:"),(0,a.kt)("p",null,"At first, you need to get the ",(0,a.kt)("inlineCode",{parentName:"p"},"code_url")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," which indicates a multisig transfer need to confirm."),(0,a.kt)("p",null,"There are two ways to get it:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the API ",(0,a.kt)("a",{parentName:"li",href:"../apis#create-action"},'"/api/actions"')," to create a ",(0,a.kt)("a",{parentName:"li",href:"../action-protocol#swap-crypto"},"swap action")),(0,a.kt)("li",{parentName:"ol"},"Call the API ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api.mixin.one/payments")," to get a payment object which contains ",(0,a.kt)("inlineCode",{parentName:"li"},"code_id")),(0,a.kt)("li",{parentName:"ol"},"Generate a transaction at your own backend and pass the code/code_url to the frontend.")),(0,a.kt)("p",null,"Here I will show you the first ways:"),(0,a.kt)("h3",{id:"way-1"},"Way 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';\nconst ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';\n\nasync function pay() {\n  const follow_id = uuid.v4();\n\n  // construct the memo\n  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;\n\n  // create action to swap from BTC to ETH\n  const resp = await http.post(`/actions`, {\n    data: {\n      action: memo,\n      amount: \"0.0001\",\n      asset_id: BTC_ASSET_ID,\n      // or leave broker_id empty\n      broker_id: '5dbdb169-d56d-4b5b-b066-9b0780691b14',\n    }\n  });\n\n  // if your web app is running in Messenger's webview\n  // it will invoke the payment UI\n  window.location.href = `https://mixin.one/codes/${resp.coded}`;\n\n  // if your web also support to visit on desktop\n  // you may need to show the QrCode to the users like this:\n  // const qrCode = generateQrCode(`https://mixin.one/codes/${resp.coded}`)\n  // showQrCodeDialog();\n}\n")),(0,a.kt)("h3",{id:"way-2"},"Way 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';\nconst ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';\n\nasync function pay() {\n  const follow_id = uuid.v4();\n\n  // construct the memo\n  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;\n\n  // create action to swap from BTC to ETH\n  const resp = await http.post(`https://api.mixin.one/payments`, {\n    data: {\n      BTC_ASSET_ID,\n      '0.0001',\n      memo,\n      trace_id: follow_id,\n      // read receivers and threshold from API `/api/information`\n      opponent_multisig: { receivers, threshold },\n    }\n  });\n\n  // if your web app is running in Messenger's webview\n  // it will invoke the payment UI\n  window.location.href = `https://mixin.one/codes/${resp.coded}`;\n\n  // if your web also support to visit on desktop\n  // you may need to show the QrCode to the users like this:\n  // const qrCode = generateQrCode(`https://mixin.one/codes/${resp.coded}`)\n  // showQrCodeDialog();\n}\n")),(0,a.kt)("h2",{id:"invoke-fennec"},"Invoke Fennec"),(0,a.kt)("p",null,"Fennec is browser extension wallet, which stores encrypted keystores in the browser."),(0,a.kt)("p",null,"You don't need to call Mixin API to load assets, read profile or prepare a payment. Instead, Fennec provides its own API to do them all."),(0,a.kt)("p",null,"For more information, please read the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fox-one/fennec#4-interact-with-your-mixin-dapp"},"demo's source code")," to figure out."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// fennec ext\nlet ext = null;\n// fennec context\nlet ctx = null;\n// token\nlet token = null;\n\nasync function load() {\n  // check the ext and get the context\n  if (window.__MIXIN__ && window.__MIXIN__.mixin_ext) {\n    ext = window.__MIXIN__.mixin_ext;\n    ctx = await ext.enable(\"demo\");\n    if (ctx) {\n      token = await ctx.wallet.signToken({\n        payload: { from: \"demo\" }\n      });\n    }\n  }\n}\n\nconst BTC_ASSET_ID = 'c6d0c728-2624-429b-8e0d-d9d19b6592fa';\nconst ETH_ASSET_ID = '43d61dcd-e413-450d-80b8-101d5e903357';\n\nfunction pay() {\n  const follow_id = uuid.v4();\n\n  // construct the memo\n  const memo = `3,${YOUR_USER_ID},${follow_id},${ETH_ASSET_ID},${''},${'0.0001'}`;\n\n  // create action to swap from BTC to ETH\n  const resp = await http.post(`/actions`, {\n    data: {\n      action: memo,\n      amount: \"0.0001\",\n      asset_id: BTC_ASSET_ID,\n      // or leave broker_id empty\n      broker_id: '5dbdb169-d56d-4b5b-b066-9b0780691b14',\n    }\n  });\n\n  ctx.wallet.multisigsPayment({ code: resp.code });\n}\n")))}u.isMDXComponent=!0}}]);