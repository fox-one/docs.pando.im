"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[6026],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8789:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={title:"\u64cd\u4f5c\u534f\u8bae",date:new Date("2021-07-31T11:18:01.000Z")},p=void 0,u={unversionedId:"lake/action-protocol",id:"lake/action-protocol",isDocsHomePage:!1,title:"\u64cd\u4f5c\u534f\u8bae",description:"4swap \u548c Lake \u662fMTG \u5e94\u7528\u7a0b\u5e8f\uff0c\u4ece Mixin \u7f51\u7edc\u8bfb\u53d6 \u591a\u91cd\u7b7e\u540d\u4ea4\u6613\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-developer/current/lake/action-protocol.md",sourceDirName:"lake",slug:"/lake/action-protocol",permalink:"/zh/developer/lake/action-protocol",version:"current",lastUpdatedAt:1640610474,formattedLastUpdatedAt:"12/27/2021",frontMatter:{title:"\u64cd\u4f5c\u534f\u8bae",date:"2021-07-31T11:18:01.000Z"},sidebar:"docs",previous:{title:"List Transactions",permalink:"/zh/developer/lake/apis/transactions"},next:{title:"\u6bd4\u8f83 Lake \u548c 4swap",permalink:"/zh/developer/lake/lake-and-4swap"}},c=[{value:"\u751f\u6210\u64cd\u4f5c",id:"\u751f\u6210\u64cd\u4f5c",children:[]},{value:"\u89c4\u8303",id:"\u89c4\u8303",children:[{value:"\u6dfb\u52a0\u6d41\u52a8\u6027",id:"\u6dfb\u52a0\u6d41\u52a8\u6027",children:[]},{value:"\u79fb\u9664\u6d41\u52a8\u6027",id:"\u79fb\u9664\u6d41\u52a8\u6027",children:[]},{value:"Swap \u4ea4\u6362\u52a0\u5bc6\u8d27\u5e01",id:"swap-\u4ea4\u6362\u52a0\u5bc6\u8d27\u5e01",children:[]}]},{value:"\u89e3\u6790 4swap \u6216 Lake \u7684\u8f6c\u8d26 memo",id:"\u89e3\u6790-4swap-\u6216-lake-\u7684\u8f6c\u8d26-memo",children:[]}],d={toc:c};function s(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"4swap \u548c Lake \u662fMTG \u5e94\u7528\u7a0b\u5e8f\uff0c\u4ece Mixin \u7f51\u7edc\u8bfb\u53d6 ",(0,l.kt)("a",{parentName:"p",href:"https://developers.mixin.one/document/wallet/api/multisigs/tutorial"},"\u591a\u91cd\u7b7e\u540d\u4ea4\u6613"),"\u3002"),(0,l.kt)("p",null,"\u8981\u53d1\u9001\u8f6c\u8d26\u5230 4swap \u6216 Lake\uff0c\u5f00\u53d1\u4eba\u5458\u5fc5\u987b\u521b\u5efa\u591a\u7b7e\u8f6c\u8d26\u3002"),(0,l.kt)("p",null,"4swap \u548c Lake \u8bbe\u8ba1\u4e86 ",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u534f\u8bae (Action Protocol)")," \u6765\u9610\u8ff0\u6bcf\u6b21\u4ea4\u6613\u7684\u884c\u4e3a\u3002 \u64cd\u4f5c\u534f\u8bae\u662f\u57fa\u4e8e JSON \u7684\u534f\u8bae\uff0c\u5b83\u4f7f\u7528\u52a0\u5bc6memo\u6765\u5b58\u50a8\u6307\u4ee4\u548c\u53c2\u6570\u3002"),(0,l.kt)("h2",{id:"\u751f\u6210\u64cd\u4f5c"},"\u751f\u6210\u64cd\u4f5c"),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u529e\u6cd5\u6765\u751f\u6210\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528 SDK")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/fox-one/4swap-sdk-go"},"4swap SDK"),"\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 SDK \u7684\u65b9\u6cd5\u6765\u7b80\u5316\u8fc7\u7a0b\u3002 \u4e0b\u9762\u7684\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u7531  ",(0,l.kt)("inlineCode",{parentName:"p"},"mtg.SwapAction")," \u751f\u6210\u4e00\u4e2a Swap \u64cd\u4f5c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// \u8ffd\u8e2a\u8ba2\u5355\nfollowID, _ := uuid.NewV4()\n\n// \u6784\u5efa\u4ea4\u6362\u52a8\u4f5c\uff0c\u6307\u5b9a\u53c2\u6570\naction := mtg\u3002 wapAction(\n    receiverID,\n    followID.String(),\n    OutputAssetID,\n    preorder. outes,\n    // \u60a8\u5c06\u83b7\u5f97\u7684\u8d44\u4ea7\u7684\u6700\u4f4e\u6570\u91cf\u3002\n    // \u60a8\u53ef\u80fd\u4f1a\u5e0c\u671b\u5c06\u8fd9\u4e2a\u6570\u503c\u6539\u6210\u7a0d\u5c0f\u4e8e preOrder.FillAmount \u7684\u6570\u503c\n    preOrder.FillAmount.Div(decimal.NewFromFloat(0.005)),\n)\n\n// \u751f\u6210 memo\nmemo, err := action.Encode(group.PublicKey)\nif err != nil {\n    return err\n}\nlog.Println("memo", memo)\n)\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528 API")),(0,l.kt)("p",null,"\u8c03\u7528 API ",(0,l.kt)("a",{parentName:"p",href:"./apis/actions"},'"/api/actions"')," \u6765\u83b7\u53d6\u7b7e\u540d\u4f20\u8f93\u8bf7\u6c42\uff0c\u8be5\u8bf7\u6c42\u53ef\u4ee5\u8ba9\u60a8\u76f4\u63a5\u8c03\u7528\u94b1\u5305\u63d0\u4f9b\u7684\u670d\u52a1\u3002"),(0,l.kt)("p",null,"\u8fd9\u5c06\u6bd4SDK\u65b9\u6cd5\u6162\uff0c\u4f46\u4f60\u4e0d\u9700\u8981\u81ea\u5df1\u53d1\u8d77\u884c\u52a8(generate actions)\u5e76\u7b7e\u540d\u3002"),(0,l.kt)("h2",{id:"\u89c4\u8303"},"\u89c4\u8303"),(0,l.kt)("h3",{id:"\u6dfb\u52a0\u6d41\u52a8\u6027"},"\u6dfb\u52a0\u6d41\u52a8\u6027"),(0,l.kt)("p",null,"\u5f53\u60a8\u8981\u6dfb\u52a0\u6d41\u52a8\u6027\u5230\u73b0\u6709\u7684\u4ea4\u6613\u5bf9\u65f6\uff0c \u60a8\u9700\u8981\u5c06\u8fd9\u4e24\u79cd\u8d44\u4ea7\u5206\u4e24\u6b21\u8f6c\u8d26\u53d1\u9001\u7ed94swap\u7684Mainnet\u5730\u5740\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u6b21\u8f6c\u8d26\uff0cmemo\u5e94\u4ee5\u4ee5\u4e0b\u5f62\u5f0f\u6784\u9020\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "1,{receiver_id},{follow_id},{asset_id},{slippage},{timeout}"\n}\n')),(0,l.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{receiver_id}")," \u662f LP-Token \u63a5\u53d7\u8005\u7684user id"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{follow_id}")," \u662f\u7528\u6765\u8ffd\u8e2a\u8f6c\u8d26\u7684 UUID \uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"UUID.v4()")," \u6765\u521b\u5efa\u4e00\u4e2a"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{asset_id}")," \u662f\u60a8\u5c06\u8981\u5b58\u5165\u7684\u5bf9\u5e94\u8d44\u4ea7 ID\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u60a8\u8981\u5c06\u6d41\u52a8\u6027\u6dfb\u52a0\u5230 ",(0,l.kt)("a",{parentName:"li",href:"https://app.4swap.org/#/pair-info?base=43d61dcd-e413-450d-80b8-101d5e903357&quote=c6d0c728-2624-429b-8e0d-d9d19b6592fa"},"ETH/BTC \u4ea4\u6613\u5bf9"),"\uff0c asset_id\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"43d61dcd-e413-450d-80b8-101d5e903357"),"\uff0c\u5f53\u60a8\u4ed8\u6b3e ",(0,l.kt)("inlineCode",{parentName:"li"},"BTC"),"\u65f6\uff0c \u5bf9\u5e94asset_id\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"c6d0c728-2224-429b-8e0d-9d19b6592fa")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{slippage}")," \u662f\u6ed1\u70b9\u7684\u6bd4\u7387\uff0c\u4f8b\u5982\uff1a0.001 = 0.1%\u3002 \u5982\u679c\u5f53\u5e02\u573a\u53d1\u751f\u53d8\u52a8\u65f6\uff0c\u6307\u5b9a\u4e86\u4e00\u4e2a\u5c0f\u7684\u6ed1\u70b9\u503c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5931\u8d25"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{timeout}")," \u662f\u4ee5\u79d2\u4e3a\u5355\u4f4d\u7684\u8d85\u65f6\u3002 \u5982\u679c\u60a8\u6ca1\u6709\u53ca\u65f6\u5b8c\u6210\u8fd9\u4e24\u7b14\u8f6c\u8d26\uff0c\u8d44\u4ea7\u5c06\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),"\u65f6\u95f4\u9000\u8fd8\u7ed9\u60a8\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u8fd9\u4e24\u9879\u8f6c\u8d26\u5728\u8d85\u65f6\u4e4b\u524d\u6210\u529f\u75314swap\u6216Lake\u5904\u7406\uff0c \u60a8\u5728 memo\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"receiver_id")," \u4e2d\u6307\u5b9a\u7684\u7528\u6237\u5c06\u6536\u5230\u6b64\u5bf9\u5e94\u7684 LP-Token\u3002"),(0,l.kt)("h3",{id:"\u79fb\u9664\u6d41\u52a8\u6027"},"\u79fb\u9664\u6d41\u52a8\u6027"),(0,l.kt)("p",null,"\u5f53\u60a8\u8981\u79fb\u9664\u5bf9\u5e94\u7684\u6d41\u52a8\u6027\u65f6\uff0c\u60a8\u9700\u8981\u5c06LP-Token\u8f6c\u8d26\u52304swap\u7684Mainnet\u5730\u5740\u3002 \u5b83\u7684Memo\u5e94\u91c7\u53d6\u8fd9\u6837\u7684\u5f62\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "2,{receiver_id},{follow_id}"\n}\n')),(0,l.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{receiver_id}")," \u662f\u8fd4\u56de\u8d44\u4ea7\u63a5\u53d7\u8005\u7684user id"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{follow_id}")," \u662f\u7528\u6765\u8ddf\u8e2a\u8f6c\u8d26\u8bb0\u5f55\u7684UUID")),(0,l.kt)("p",null,"\u5982\u679c\u8f6c\u8d26\u5df2\u88ab\u5904\u7406\uff0c\u60a8\u5728 memo\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"receiver_id")," \u4e2d\u6307\u5b9a\u7684\u7528\u6237\u5c06\u6536\u5230\u7b49\u91cf\u7684\u52a0\u5bc6\u8d44\u4ea7\u3002"),(0,l.kt)("h3",{id:"swap-\u4ea4\u6362\u52a0\u5bc6\u8d27\u5e01"},"Swap \u4ea4\u6362\u52a0\u5bc6\u8d27\u5e01"),(0,l.kt)("p",null,"\u5f53\u4f60\u8981\u4ea4\u6362\u4e00\u4e2a\u8d44\u4ea7\u5230\u53e6\u4e00\u4e2a\u8d44\u4ea7\u65f6\u3002 \u60a8\u9700\u8981\u5c06\u60a8\u6253\u7b97\u63d0\u4f9b\u7684\u8d44\u4ea7\u8f6c\u8d26\u7ed94swap\u7684Mainnet\u5730\u5740\u3002 \u5b83\u7684Memo\u5e94\u91c7\u53d6\u8fd9\u6837\u7684\u5f62\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"\n}\n')),(0,l.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{receiver_id}")," \u662f LP-Token \u63a5\u53d7\u8005\u7684user id"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{follow_id}")," \u662f\u7528\u6765\u8ddf\u8e2a\u8f6c\u8d26\u8bb0\u5f55\u7684UUID"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{fill_asset_id}")," \u662f\u60a8\u51c6\u5907\u7528\u4e8e\u4ea4\u6362\u7684\u8d44\u4ea7\u7684 ID"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{routes}")," \u662f\u8def\u7531ID\u7684\u5e8f\u5217\uff0c\u5b83\u8868\u660e\u60a8\u60f3\u4f7f\u7528\u54ea\u4e2a\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{minimum}")," \u662f\u60a8\u671f\u671b\u5f97\u5230\u7684\u8d44\u4ea7\u7684\u6700\u5c0f\u6570\u91cf")),(0,l.kt)("p",null,"\u5982\u679c4swap \u6216 Lake \u65e0\u6cd5\u53d6\u5f97\u6700\u5c0f\u6570\u91cf\u7684\u76ee\u6807\u8d44\u4ea7\uff0c \u4ea4\u6362\u5c06\u88ab\u4e2d\u6b62\uff0c\u60a8\u53d1\u9001\u5230Mainnet\u5730\u5740\u7684\u8d44\u4ea7\u5c06\u88ab\u9000\u6b3e\u3002"),(0,l.kt)("h2",{id:"\u89e3\u6790-4swap-\u6216-lake-\u7684\u8f6c\u8d26-memo"},"\u89e3\u6790 4swap \u6216 Lake \u7684\u8f6c\u8d26 memo"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8f6c\u8d26Memo\u662f\u4e00\u4e2a base64 \u89e3\u7801\u7684 json \u5b57\u7b26\u4e32")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "s": "4swapTrade|4swapRefund", // 4swapTrade: swap Successful, 4swapRefund: swap failed\n  "t": "bf0c984d-7f8a-424e-bddd-473fcf5f7020", // follow id\n}\n')))}s.isMDXComponent=!0}}]);