(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[743],{4128:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={title:"Using 4swap SDK",sidebar_position:1,date:new Date("2021-07-22T22:33:07.000Z")},l=void 0,p={unversionedId:"lake/using-sdk",id:"lake/using-sdk",isDocsHomePage:!1,title:"Using 4swap SDK",description:"By default, Pando Lake uses 4swap as the liquidity provider. It's easy to exchange assets at Pando Lake by 4swap's SDK.",source:"@site/developer/lake/using-sdk.md",sourceDirName:"lake",slug:"/lake/using-sdk",permalink:"/developer/lake/using-sdk",version:"current",lastUpdatedAt:1627123560,formattedLastUpdatedAt:"7/24/2021",sidebarPosition:1,frontMatter:{title:"Using 4swap SDK",sidebar_position:1,date:"2021-07-22T22:33:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Development Overview",permalink:"/developer/intro"},next:{title:"Technical Overview",permalink:"/developer/leaf/overview"}},u=[{value:"Import 4swap SDK in your project",id:"import-4swap-sdk-in-your-project",children:[]},{value:"Get the multisig group information",id:"get-the-multisig-group-information",children:[]},{value:"Get all tradable pairs",id:"get-all-tradable-pairs",children:[]},{value:"Calculate the best route to trade",id:"calculate-the-best-route-to-trade",children:[]},{value:"Construct a real order",id:"construct-a-real-order",children:[]},{value:"Place an order programmatically",id:"place-an-order-programmatically",children:[]},{value:"Place an order via Mixin Messenger",id:"place-an-order-via-mixin-messenger",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, Pando Lake uses 4swap as the liquidity provider. It's easy to exchange assets at Pando Lake by 4swap's SDK."),(0,i.kt)("h2",{id:"import-4swap-sdk-in-your-project"},"Import 4swap SDK in your project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    fswap "github.com/fox-one/4swap-sdk-go"\n    mtg "github.com/fox-one/4swap-sdk-go/mtg"\n    "github.com/fox-one/mixin-sdk-go"\n    "github.com/shopspring/decimal"\n)\n')),(0,i.kt)("h2",{id:"get-the-multisig-group-information"},"Get the multisig group information"),(0,i.kt)("p",null,"When you perform operations at Pando Lake, such as swapping crypto, adding liquidity, removing liquidity, you must create multisig transactions and interact with Mixin Network."),(0,i.kt)("p",null,"The participants of each multisig are also the members of MTG. So please read them first and save them for later using."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"ctx := context.TODO()\n\n// use the 4swap's MTG api endpoint\nfswap.UseEndpoint(fswap.MtgEndpoint)\n\n// read the mtg group\n// the group information would change frequently\n// it's recommended to save it for later using\ngroup, err := fswap.ReadGroup(ctx)\nif err != nil {\n    return err\n}\n...\n")),(0,i.kt)("h2",{id:"get-all-tradable-pairs"},"Get all tradable pairs"),(0,i.kt)("p",null,"To get all supported asset pairs is easy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"pairs, err := fswap.ListPairs(ctx)\nif err != nil {\n    return err\n}\n...\n")),(0,i.kt)("h2",{id:"calculate-the-best-route-to-trade"},"Calculate the best route to trade"),(0,i.kt)("p",null,"Before swapping crypto, we need to specify the swapping route."),(0,i.kt)("p",null,"At present, you may let's Lake to decide the route, but it has the performance issues and may slow down the bot. Because of that, it is recommended to calculate the a swapping route yourself."),(0,i.kt)("p",null,"To calculate route is easy. Sort the pairs according to the liquidity and call ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ReverseRoute")," methods, which will return an ",(0,i.kt)("inlineCode",{parentName:"p"},"order")," object that includes the result of calculation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// sort first\nsort.Slice(pairs, func(i, j int) bool {\n    aLiquidity := pairs[i].BaseValue.Add(pairs[i].QuoteValue)\n    bLiquidity := pairs[j].BaseValue.Add(pairs[j].QuoteValue)\n    return aLiquidity.GreaterThan(bLiquidity)\n})\n\n// calculate the route\n// InputAssetID - the id of the asset you want to paid\n// OutputAssetID - the id of the asset you trade for\n// InputAmount - the amount to calucate the route, for example, 1000\npreOrder, err := fswap.Route(pairs, InputAssetID, OutputAssetID, InputAmount)\nif err != nil {\n    return err\n}\n\n// you can read the best route from Order.RouteAssets, which is an array of asset_id\nlog.Printf("Route: %v", preOrder.RouteAssets)\nlog.Printf("Price: %v", preOrder.FillAmount.Div(InputAmount))\n...\n')),(0,i.kt)("h2",{id:"construct-a-real-order"},"Construct a real order"),(0,i.kt)("p",null,"All required information about an order are store in the transaction memo, in JSON format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "1,{receiver_id},{follow_id},{asset_id},{slippage},{timeout}"\n}\n')),(0,i.kt)("p",null,"in which,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{receiver_id}")," is the id of user who will receive the crypto from swapping"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{follow_id}")," is a UUID to trace the order"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{asset_id}")," is the asset's ID you are swapping for"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{slippage}")," is the slippage ratio, e.g. 0.01 = 1%"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{timeout}")," is the timeout in sec")),(0,i.kt)("p",null,"If you are using 4swap SDK, you can also use the method ",(0,i.kt)("inlineCode",{parentName:"p"},"mtg.SwapAction")," to simplify the process:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// the ID to trace the orders\nfollowID, _ := uuid.NewV4()\n\n// build a swap action, specified the parameters\naction := mtg.SwapAction(\n    receiverID,\n    followID.String(),\n    OutputAssetID,\n    preOrder.Routes,\n    // the minimum amount of asset you will get.\n    // you may want to change this value to a number which less than preOrder.FillAmount\n    preOrder.FillAmount.Div(decimal.NewFromFloat(0.005)),\n)\n\n// generate the memo\nmemo, err := action.Encode(group.PublicKey)\nif err != nil {\n    return err\n}\nlog.Println("memo", memo)\n...\n\n')),(0,i.kt)("h2",{id:"place-an-order-programmatically"},"Place an order programmatically"),(0,i.kt)("p",null,"If you want the bot to place an order, send a multisig transaction from the bot."),(0,i.kt)("p",null,"This is a common scene for arbitrage bot. Please make sure the bot have enough crypto in the bot's wallet."),(0,i.kt)("p",null,"We need to use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fox-one/mixin-sdk-go"},"mixin-sdk-go")," client to create and send the transaction to the kenerl nodes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// send a transaction to a multi-sign address which specified by `OpponentMultisig`\n// the OpponentMultisig.Receivers are the MTG group members\ntx, err := client.Transaction(ctx, &mixin.TransferInput{\n    AssetID: payAssetID,\n    Amount:  decimal.RequireFromString(amount),\n    TraceID: mixin.RandomTraceID(),\n    Memo:    memo,\n    OpponentMultisig: struct {\n        Receivers []string `json:"receivers,omitempty"`\n        Threshold uint8    `json:"threshold,omitempty"`\n    }{\n        Receivers: group.Members,\n        Threshold: uint8(group.Threshold),\n    },\n}, *pin)\n')),(0,i.kt)("h2",{id:"place-an-order-via-mixin-messenger"},"Place an order via Mixin Messenger"),(0,i.kt)("p",null,"If you want to place an order via Mixin Messenger, generate a payment scheme to invoke Messenger from the webview."),(0,i.kt)("p",null,"This is a common scene for a webapp which provide swapping service to users, like ",(0,i.kt)("a",{parentName:"p",href:"https://lake.pando.im"},"Lake's webpage"),"."),(0,i.kt)("p",null,"We need to post ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.mixin.one/payments")," to get a payment object which contains ",(0,i.kt)("inlineCode",{parentName:"p"},"code_id")," to create the scheme:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'function getPayments(asset_id, amount, memo, receivers, threshold): Promise<any> {\n    const params = {\n        asset_id,\n        amount,\n        memo,\n        trace_id: uuid(),\n        opponent_multisig: { receivers, threshold },\n    };\n    // use your http request lib here\n    return http.post("/payments", { data: params });\n}\n\n...\n\nconst resp = await getPayments(\n    asset_id,  // the input asset id\n    value,     // the input amount\n    memo,      // create by `SwapAction`\n    members,   // read from the mulitsig group\n    threshold, // read from the mulitsig group\n);\n\nwindow.location.href = `https://mixin.one/codes/${resp.coded}`;\n')))}m.isMDXComponent=!0}}]);