"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[9908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={title:"Action Protocol",date:new Date("2021-07-31T11:18:01.000Z")},r=void 0,l={unversionedId:"lake/action-protocol",id:"lake/action-protocol",title:"Action Protocol",description:"4swap and Lake are MTG applications, which read multisig transactions from Mixin Network.",source:"@site/developer/lake/action-protocol.md",sourceDirName:"lake",slug:"/lake/action-protocol",permalink:"/developer/lake/action-protocol",draft:!1,tags:[],version:"current",frontMatter:{title:"Action Protocol",date:"2021-07-31T11:18:01.000Z"},sidebar:"docs",previous:{title:"Design",permalink:"/developer/lake/design"},next:{title:"Compare Lake and 4swap",permalink:"/developer/lake/lake-and-4swap"}},s={},p=[{value:"Generate Actions",id:"generate-actions",level:2},{value:"Specification",id:"specification",level:2},{value:"Add Liquidity",id:"add-liquidity",level:3},{value:"Remove Liquidity",id:"remove-liquidity",level:3},{value:"Swap Crypto",id:"swap-crypto",level:3},{value:"Parsing 4swap or Lake transfer memo",id:"parsing-4swap-or-lake-transfer-memo",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"4swap and Lake are MTG applications, which read ",(0,i.kt)("a",{parentName:"p",href:"https://developers.mixin.one/document/wallet/api/multisigs/tutorial"},"multisig transactions")," from Mixin Network."),(0,i.kt)("p",null,"To send transfers to 4swap or Lake, the developers must create multisig transfers."),(0,i.kt)("p",null,"4swap and Lake design the ",(0,i.kt)("strong",{parentName:"p"},"Action Protocol")," to illustrate behaviors of each transaction. The Action Protocol is a JSON based protocol, which uses the encrypted memo to store instruction and parameters."),(0,i.kt)("h2",{id:"generate-actions"},"Generate Actions"),(0,i.kt)("p",null,"There are two approaches to generate the actions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Using SDK")),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fox-one/4swap-sdk-go"},"4swap SDK"),", you can use the SDK's methods to simplify the process. The following example showcases how to generate a swap action by  ",(0,i.kt)("inlineCode",{parentName:"p"},"mtg.SwapAction"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// the ID to trace the orders\nfollowID, _ := uuid.NewV4()\n\n// build a swap action, specified the parameters\naction := mtg.SwapAction(\n    receiverID,\n    followID.String(),\n    OutputAssetID,\n    preOrder.Routes,\n    // the minimum amount of asset you will get.\n    // you may want to change this value to a number which is less than preOrder.FillAmount\n    preOrder.FillAmount.Div(decimal.NewFromFloat(0.005)),\n)\n\n// generate the memo\nmemo, err := action.Encode(group.PublicKey)\nif err != nil {\n    return err\n}\nlog.Println("memo", memo)\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Using API")),(0,i.kt)("p",null,"Call the API ",(0,i.kt)("a",{parentName:"p",href:"./apis/actions"},'"/api/actions"')," to get a signed transfer request that you can use to invoke the wallet service directly."),(0,i.kt)("p",null,"It would be slower than the SDK approach, however you would not need to generate actions and sign them yourself."),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("h3",{id:"add-liquidity"},"Add Liquidity"),(0,i.kt)("p",null,"When you are going to add liquidity to an existing pair, you need to send two transfers of these two assets in the pair to 4swap's Mainnet address."),(0,i.kt)("p",null,"For each transfer, the memo should be constructed in the following form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "1,{receiver_id},{follow_id},{asset_id},{slippage},{timeout}"\n}\n')),(0,i.kt)("p",null,"in which,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{receiver_id}")," is the id of user who will receive the LP-Token"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{follow_id}")," is a UUID to trace the transfer, you can use ",(0,i.kt)("inlineCode",{parentName:"li"},"UUID.v4()")," to create one"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{asset_id}")," is the opposite asset's ID of the pair you are going to deposit. For example, if you are going to add liquidity to ",(0,i.kt)("a",{parentName:"li",href:"https://app.4swap.org/#/pair-info?base=43d61dcd-e413-450d-80b8-101d5e903357&quote=c6d0c728-2624-429b-8e0d-d9d19b6592fa"},"ETH/BTC pair"),", the asset id is ",(0,i.kt)("inlineCode",{parentName:"li"},"43d61dcd-e413-450d-80b8-101d5e903357")," when you pay ",(0,i.kt)("inlineCode",{parentName:"li"},"BTC")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"c6d0c728-2624-429b-8e0d-d9d19b6592fa")," otherwise."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{slippage}")," is the slippage ratio, e.g. 0.001 = 0.1%. It may fail if you specified a small slippage value when the market is volatile"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{timeout}")," is the timeout in sec. If you don't complete the two transfers in time, the crypto will be refunded to you in ",(0,i.kt)("inlineCode",{parentName:"li"},"timeout"),".")),(0,i.kt)("p",null,"If the two transfers have been handled by the 4swap or Lake before timeout, the user you specified in the memo ",(0,i.kt)("inlineCode",{parentName:"p"},"receiver_id")," will receive some LP-Tokens of this pair."),(0,i.kt)("h3",{id:"remove-liquidity"},"Remove Liquidity"),(0,i.kt)("p",null,"When you are going to remove liquidity of a pair, you need to transfer the LP-Tokens to the 4swap's Mainnet address. Its memo should be in such a form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "2,{receiver_id},{follow_id}"\n}\n')),(0,i.kt)("p",null,"in which,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{receiver_id}")," is the id of user who will receive the crypto"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{follow_id}")," is a UUID to trace the transfer")),(0,i.kt)("p",null,"If the transfer has been handled, the user you specified in the memo ",(0,i.kt)("inlineCode",{parentName:"p"},"receiver_id")," will receive the equivalent crypto assets."),(0,i.kt)("h3",{id:"swap-crypto"},"Swap Crypto"),(0,i.kt)("p",null,"When you are going to swap one crypto to another, you need to transfer the crypto which you intend to provide to the 4swap's Mainnet address. The transfer memo should be in such a form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"\n}\n')),(0,i.kt)("p",null,"in which,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{receiver_id}")," is the id of user who will receive the LP-Token"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{follow_id}")," is a UUID to trace the transfer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{fill_asset_id}")," is the asset's ID you are going to use for swapping"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{routes}")," is a route ids' sequence, which indicate which route you want to use."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{minimum}")," is the minimum amount of asset you will get")),(0,i.kt)("p",null,"If 4swap or Lake can't get the minimun destination crypto, the swapping will be aborted and the crypto you send to the Mainnet address will be refunded."),(0,i.kt)("h2",{id:"parsing-4swap-or-lake-transfer-memo"},"Parsing 4swap or Lake transfer memo"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The transfer memo is a base64 decoded json string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "s": "4swapTrade|4swapRefund", // 4swapTrade: swap Successful, 4swapRefund: swap failed\n  "t": "bf0c984d-7f8a-424e-bddd-473fcf5f7020", // follow id\n}\n')))}c.isMDXComponent=!0}}]);