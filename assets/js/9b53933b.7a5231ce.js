"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[1345],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9128:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Using SDK to Trade",sidebar_position:1,date:new Date("2021-07-22T22:33:07.000Z")},l=void 0,u={unversionedId:"lake/guide/using-sdk",id:"lake/guide/using-sdk",isDocsHomePage:!1,title:"Using SDK to Trade",description:"By default, Pando Lake uses 4swap as the liquidity provider. It's easy to exchange assets at Pando Lake by 4swap's SDK.",source:"@site/developer/lake/guide/using-sdk.md",sourceDirName:"lake/guide",slug:"/lake/guide/using-sdk",permalink:"/developer/lake/guide/using-sdk",version:"current",lastUpdatedAt:1634562135,formattedLastUpdatedAt:"10/18/2021",sidebarPosition:1,frontMatter:{title:"Using SDK to Trade",sidebar_position:1,date:"2021-07-22T22:33:07.000Z"},sidebar:"docs",previous:{title:"Overview",permalink:"/developer/lake/overview"},next:{title:"Invoke Wallets",permalink:"/developer/lake/guide/invoke-wallets"}},p=[{value:"Import 4swap SDK into your project",id:"import-4swap-sdk-into-your-project",children:[]},{value:"Get the multisig group information",id:"get-the-multisig-group-information",children:[]},{value:"Get all tradable pairs",id:"get-all-tradable-pairs",children:[]},{value:"Calculate the best route to trade",id:"calculate-the-best-route-to-trade",children:[]},{value:"Construct a real order",id:"construct-a-real-order",children:[]},{value:"Place an order programmatically",id:"place-an-order-programmatically",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, Pando Lake uses 4swap as the liquidity provider. It's easy to exchange assets at Pando Lake by 4swap's SDK."),(0,o.kt)("h2",{id:"import-4swap-sdk-into-your-project"},"Import 4swap SDK into your project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    fswap "github.com/fox-one/4swap-sdk-go"\n    mtg "github.com/fox-one/4swap-sdk-go/mtg"\n    "github.com/fox-one/mixin-sdk-go"\n    "github.com/shopspring/decimal"\n)\n')),(0,o.kt)("h2",{id:"get-the-multisig-group-information"},"Get the multisig group information"),(0,o.kt)("p",null,"When you perform operations at Pando Lake, such as swapping crypto, adding liquidity, and removing liquidity, you must create multisig transactions and interact with Mixin Network."),(0,o.kt)("p",null,"The participants of each multisig are also the members of MTG. So please read them first and save them for later use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"ctx := context.TODO()\n\n// use the 4swap's MTG api endpoint\nfswap.UseEndpoint(fswap.MtgEndpoint)\n\n// read the mtg group\n// the group information would change frequently\n// it's recommended to save it for later use\ngroup, err := fswap.ReadGroup(ctx)\nif err != nil {\n    return err\n}\n...\n")),(0,o.kt)("h2",{id:"get-all-tradable-pairs"},"Get all tradable pairs"),(0,o.kt)("p",null,"To get all supported asset pairs is easy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"pairs, err := fswap.ListPairs(ctx)\nif err != nil {\n    return err\n}\n...\n")),(0,o.kt)("h2",{id:"calculate-the-best-route-to-trade"},"Calculate the best route to trade"),(0,o.kt)("p",null,"Before swapping cryptos, we need to specify the swapping route."),(0,o.kt)("p",null,"At present, you may let Lake decide the route, but it may cause the performance issues and slow down the bot. Because of that, it is recommended to calculate a swapping route yourself."),(0,o.kt)("p",null,"To calculate route is easy. Sort the pairs according to the liquidity and call ",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ReverseRoute")," methods, which will return an ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," object that includes the result of calculation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// sort first\nsort.Slice(pairs, func(i, j int) bool {\n    aLiquidity := pairs[i].BaseValue.Add(pairs[i].QuoteValue)\n    bLiquidity := pairs[j].BaseValue.Add(pairs[j].QuoteValue)\n    return aLiquidity.GreaterThan(bLiquidity)\n})\n\n// calculate the route\n// InputAssetID - the id of the asset you want to paid\n// OutputAssetID - the id of the asset you trade for\n// InputAmount - the amount to calucate the route, for example, 1000\npreOrder, err := fswap.Route(pairs, InputAssetID, OutputAssetID, InputAmount)\nif err != nil {\n    return err\n}\n\n// you can read the best route from Order.RouteAssets, which is an array of asset_id\nlog.Printf("Route: %v", preOrder.RouteAssets)\nlog.Printf("Price: %v", preOrder.FillAmount.Div(InputAmount))\n...\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you don't use 4swap SDK, you can implement your own best route algorithm (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fox-one/4swap-sdk-go/blob/master/route.go"},"golang version"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fox-one/4swap-web/blob/develop/src/utils/pair/route.ts"},"javascript version"),")."))),(0,o.kt)("h2",{id:"construct-a-real-order"},"Construct a real order"),(0,o.kt)("p",null,"All required information about an order is stored in the transaction memo, in JSON format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"\n}\n')),(0,o.kt)("p",null,"in which,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"{receiver_id} is the id of user who will receive the LP-Token"),(0,o.kt)("li",{parentName:"ul"},"{follow_id} is a UUID to trace the transfer"),(0,o.kt)("li",{parentName:"ul"},"{fill_asset_id} is the asset's ID you are going to use for swapping"),(0,o.kt)("li",{parentName:"ul"},"{routes} is a route ids' sequence, which indicates which route you want to use."),(0,o.kt)("li",{parentName:"ul"},"{minimum} is the minimum amount of asset you will get")),(0,o.kt)("p",null,"If you are using 4swap SDK, you can also use the method ",(0,o.kt)("inlineCode",{parentName:"p"},"mtg.SwapAction")," to simplify the process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// the ID to trace the orders\nfollowID, _ := uuid.NewV4()\n\n// build a swap action, specified the parameters\naction := mtg.SwapAction(\n    receiverID,\n    followID.String(),\n    OutputAssetID,\n    preOrder.Routes,\n    // the minimum amount of asset you will get.\n    // you may want to change this value to a number which less than preOrder.FillAmount\n    preOrder.FillAmount.Div(decimal.NewFromFloat(0.005)),\n)\n\n// generate the memo\nmemo, err := action.Encode(group.PublicKey)\nif err != nil {\n    return err\n}\nlog.Println("memo", memo)\n...\n\n')),(0,o.kt)("h2",{id:"place-an-order-programmatically"},"Place an order programmatically"),(0,o.kt)("p",null,"If you want the bot to place an order, send a multisig transaction from the bot."),(0,o.kt)("p",null,"This is a common scene for arbitrage bot. Please make sure the bot has enough crypto in the bot's wallet."),(0,o.kt)("p",null,"We need to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fox-one/mixin-sdk-go"},"mixin-sdk-go")," client to create and send the transaction to the kernel nodes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// send a transaction to a multi-sign address which specified by `OpponentMultisig`\n// the OpponentMultisig.Receivers are the MTG group members\ntx, err := client.Transaction(ctx, &mixin.TransferInput{\n    AssetID: payAssetID,\n    Amount:  decimal.RequireFromString(amount),\n    TraceID: mixin.RandomTraceID(),\n    Memo:    memo,\n    OpponentMultisig: struct {\n        Receivers []string `json:"receivers,omitempty"`\n        Threshold uint8    `json:"threshold,omitempty"`\n    }{\n        Receivers: group.Members,\n        Threshold: uint8(group.Threshold),\n    },\n}, *pin)\n')))}d.isMDXComponent=!0}}]);