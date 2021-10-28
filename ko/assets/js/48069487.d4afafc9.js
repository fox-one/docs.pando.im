"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[701],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1599:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"SDK\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac70\ub798\ud558\uae30",sidebar_position:1,date:new Date("2021-07-22T22:33:07.000Z")},p=void 0,u={unversionedId:"lake/guide/using-sdk",id:"lake/guide/using-sdk",isDocsHomePage:!1,title:"SDK\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac70\ub798\ud558\uae30",description:"\uae30\ubcf8\uc801\uc73c\ub85c Pando Lake\ub294 \uc720\ub3d9\uc131 \uacf5\uae09\uc790\ub85c 4swap\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. 4swap\uc758 SDK\ub85c Pando Lake\uc5d0\uc11c \uc27d\uac8c \uc790\uc0b0\uc744 \uad50\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs-developer/current/lake/guide/using-sdk.md",sourceDirName:"lake/guide",slug:"/lake/guide/using-sdk",permalink:"/ko/developer/lake/guide/using-sdk",version:"current",lastUpdatedAt:1635085985,formattedLastUpdatedAt:"10/24/2021",sidebarPosition:1,frontMatter:{title:"SDK\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac70\ub798\ud558\uae30",sidebar_position:1,date:"2021-07-22T22:33:07.000Z"},sidebar:"docs",previous:{title:"\uac1c\uc694",permalink:"/ko/developer/lake/overview"},next:{title:"\uc9c0\uac11 \ubd88\ub7ec\uc624\uae30",permalink:"/ko/developer/lake/guide/invoke-wallets"}},s=[{value:"\ud504\ub85c\uc81d\ud2b8\uc5d0 4swap SDK \uac00\uc838\uc624\uae30",id:"\ud504\ub85c\uc81d\ud2b8\uc5d0-4swap-sdk-\uac00\uc838\uc624\uae30",children:[]},{value:"\ub2e4\uc911\uc11c\uba85 \uadf8\ub8f9 \uc815\ubcf4 \uac00\uc838\uc624\uae30",id:"\ub2e4\uc911\uc11c\uba85-\uadf8\ub8f9-\uc815\ubcf4-\uac00\uc838\uc624\uae30",children:[]},{value:"\uac70\ub798 \uac00\ub2a5\ud55c \ubaa8\ub4e0 \ud398\uc5b4 \uac00\uc838\uc624\uae30",id:"\uac70\ub798-\uac00\ub2a5\ud55c-\ubaa8\ub4e0-\ud398\uc5b4-\uac00\uc838\uc624\uae30",children:[]},{value:"\ucd5c\uc801\uc758 \uac70\ub798 \uacbd\ub85c \uacc4\uc0b0",id:"\ucd5c\uc801\uc758-\uac70\ub798-\uacbd\ub85c-\uacc4\uc0b0",children:[]},{value:"\uc2e4\uc81c \uac70\ub798 \uad6c\ucd95",id:"\uc2e4\uc81c-\uac70\ub798-\uad6c\ucd95",children:[]},{value:"\ud504\ub85c\uadf8\ub798\ubc0d \ubc29\uc2dd\uc73c\ub85c \uc8fc\ubb38\ud558\uae30",id:"\ud504\ub85c\uadf8\ub798\ubc0d-\ubc29\uc2dd\uc73c\ub85c-\uc8fc\ubb38\ud558\uae30",children:[]}],d={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c Pando Lake\ub294 \uc720\ub3d9\uc131 \uacf5\uae09\uc790\ub85c 4swap\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. 4swap\uc758 SDK\ub85c Pando Lake\uc5d0\uc11c \uc27d\uac8c \uc790\uc0b0\uc744 \uad50\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\ud504\ub85c\uc81d\ud2b8\uc5d0-4swap-sdk-\uac00\uc838\uc624\uae30"},"\ud504\ub85c\uc81d\ud2b8\uc5d0 4swap SDK \uac00\uc838\uc624\uae30"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    fswap "github.com/fox-one/4swap-sdk-go"\n    mtg "github.com/fox-one/4swap-sdk-go/mtg"\n    "github.com/fox-one/mixin-sdk-go"\n    "github.com/shopspring/decimal"\n)\n')),(0,i.kt)("h2",{id:"\ub2e4\uc911\uc11c\uba85-\uadf8\ub8f9-\uc815\ubcf4-\uac00\uc838\uc624\uae30"},"\ub2e4\uc911\uc11c\uba85 \uadf8\ub8f9 \uc815\ubcf4 \uac00\uc838\uc624\uae30"),(0,i.kt)("p",null,"Pando Lake\uc5d0\uc11c \uc554\ud638\ud654\ud3d0 \uad50\ud658, \uc720\ub3d9\uc131 \ucd94\uac00, \uc720\ub3d9\uc131 \uc81c\uac70 \ub4f1\uc758 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \ub54c \ub2e4\uc911\uc11c\uba85 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\uace0 Mixin \ub124\ud2b8\uc6cc\ud06c\uc640 \uc0c1\ud638 \uc791\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uac01 \ub2e4\uc911 \uc11c\uba85\uc758 \ucc38\uac00\uc790\ub294 MTG\uc758 \uad6c\uc131\uc6d0\uc774\uae30\ub3c4 \ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \uba3c\uc800 \uc77d\uace0 \ub098\uc911\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc800\uc7a5\ud574 \ub450\uc2ed\uc2dc\uc624."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"ctx := context.TODO()\n\n// 4swap\uc758 MTG API \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc0ac\uc6a9\nfswap.UseEndpoint(fswap.MtgEndpoint)\n\n//  mtg \uadf8\ub8f9 \uc77d\uae30\n// \uadf8\ub8f9 \uc815\ubcf4\ub294 \uc790\uc8fc \ubcc0\uacbd\ub420 \uac83\uc785\ub2c8\ub2e4.\n// \ub098\uc911\uc5d0 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \uc800\uc7a5\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.\ngroup, err := fswap.ReadGroup(ctx)\nif err != nil {\n    return err\n}\n...\n")),(0,i.kt)("h2",{id:"\uac70\ub798-\uac00\ub2a5\ud55c-\ubaa8\ub4e0-\ud398\uc5b4-\uac00\uc838\uc624\uae30"},"\uac70\ub798 \uac00\ub2a5\ud55c \ubaa8\ub4e0 \ud398\uc5b4 \uac00\uc838\uc624\uae30"),(0,i.kt)("p",null,"\uc9c0\uc6d0\ub418\ub294 \ubaa8\ub4e0 \uc790\uc0b0 \ud398\uc5b4\ub97c \uc27d\uac8c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"pairs, err := fswap.ListPairs(ctx)\nif err != nil {\n    return err\n}\n...\n")),(0,i.kt)("h2",{id:"\ucd5c\uc801\uc758-\uac70\ub798-\uacbd\ub85c-\uacc4\uc0b0"},"\ucd5c\uc801\uc758 \uac70\ub798 \uacbd\ub85c \uacc4\uc0b0"),(0,i.kt)("p",null,"\uc554\ud638\ud654\ud3d0\ub97c \uc2a4\uc640\ud551\ud558\uae30 \uc804\uc5d0 \uc2a4\uc640\ud551 \uacbd\ub85c\ub97c \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud604\uc7ac Lake\uac00 \uacbd\ub85c\ub97c \uacb0\uc815\ud558\ub3c4\ub85d \ud560 \uc218 \uc788\uc9c0\ub9cc \uc131\ub2a5 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uace0 \ubd07\uc774 \ub290\ub824\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc2a4\uc640\ud551 \uacbd\ub85c\ub97c \uc9c1\uc811 \uacc4\uc0b0\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uacbd\ub85c\ub97c \uacc4\uc0b0\ud558\ub294 \uac83\uc740 \uc27d\uc2b5\ub2c8\ub2e4. \uc720\ub3d9\uc131\uc5d0 \ub530\ub77c \ud398\uc5b4\ub97c \uc815\ub82c\ud558\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Route")," \ub610\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"ReverseRoute")," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uba74 \uacc4\uc0b0 \uacb0\uacfc\uac00 \ud3ec\ud568\ub41c ",(0,i.kt)("inlineCode",{parentName:"p"},"order")," \uac1c\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// \uba3c\uc800 \uc815\ub82c\ud558\uc138\uc694\nsort.Slice(pairs, func(i, j int) bool {\n    aLiquidity := pairs[i].BaseValue.Add(pairs[i].QuoteValue)\n    bLiquidity := pairs[j].BaseValue.Add(pairs[j].QuoteValue)\n    return aLiquidity.GreaterThan(bLiquidity)\n})\n\n// \uacbd\ub85c\ub97c \uacc4\uc0b0\ud558\uc138\uc694.\n// InputAssetID - \uc9c0\ubd88\ud558\ub824\ub294 \uc790\uc0b0\uc758 Id\n// OutputAssetID - \uac70\ub798\ud558\ub294 \uc790\uc0b0\uc758 Id\n// InputAmount - \uacbd\ub85c\ub97c \uacc4\uc0b0\ud560 \uae08\uc561(\uc608: 1000)\npreOrder, err := fswap.Route(pairs, InputAssetID, OutputAssetID, InputAmount)\nif err != nil {\n    return err\n}\n\n// asset_id\uc758 \ubc30\uc5f4\uc778 Order.RouteAssets\uc5d0\uc11c \ucd5c\uc801\uc758 \uacbd\ub85c\ub97c \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nlog.Printf("Route: %v", preOrder.RouteAssets)\nlog.Printf("Price: %v", preOrder.FillAmount.Div(InputAmount))\n...\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"4swap SDK\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc790\uc2e0\ub9cc\uc758 \ucd5c\uc801\uc758 \uacbd\ub85c \uc54c\uace0\ub9ac\uc998\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fox-one/4swap-sdk-go/blob/master/route.go"},"golang version"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fox-one/4swap-web/blob/develop/src/utils/pair/route.ts"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubc84\uc804"),")."))),(0,i.kt)("h2",{id:"\uc2e4\uc81c-\uac70\ub798-\uad6c\ucd95"},"\uc2e4\uc81c \uac70\ub798 \uad6c\ucd95"),(0,i.kt)("p",null,"\uc8fc\ubb38\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \ud544\uc218 \uc815\ubcf4\ub294 JSON \ud615\uc2dd\uc73c\ub85c \ud2b8\ub79c\uc7ad\uc158 \uba54\ubaa8\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "3,${receiver_id},${follow_id},${fill_asset_id},${routes},${minimum}"\n}\n')),(0,i.kt)("p",null,"\uadf8 \uc911,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"{receiver_id} \ub294 LP-Token\uc744 \ubc1b\uc744 \uc0ac\uc6a9\uc790\uc758 ID\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"{follow_id} \ub294 \uc804\uc1a1\uc744 \ucd94\uc801\ud558\ub294 UUID\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"{fill_asset_id} \ub294 \uad50\ud658\uc5d0 \uc0ac\uc6a9\ud560 \uc790\uc0b0\uc758 ID\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"{routes} \ub294 \uc0ac\uc6a9\ud558\ub824\ub294 \uacbd\ub85c\ub97c \ub098\ud0c0\ub0b4\ub294 \uacbd\ub85c Id\uc758 \uc2dc\ud000\uc2a4\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"{minimum} \ub294 \ub2f9\uc2e0\uc774 \uc5bb\uc744 \uc218 \uc788\ub294 \ucd5c\uc18c \uae08\uc561 \uc785\ub2c8\ub2e4.")),(0,i.kt)("p",null,"4swap SDK\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"mtg.SwapAction")," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud504\ub85c\uc138\uc2a4\ub97c \ub2e8\uc21c\ud654\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// \uc8fc\ubb38\uc744 \ucd94\uc801\ud558\ub294 ID\nfollowID, _ := uuid.NewV4()\n\n// \uc2a4\uc651 \uc791\uc5c5 \ube4c\ub4dc, \ub9e4\uac1c \ubcc0\uc218 \uc9c0\uc815\naction := mtg.SwapAction(\n    receiverID,\n    followID.String(),\n    OutputAssetID,\n    preOrder.Routes,\n    // \ub2f9\uc2e0\uc774 \uc5bb\uc744 \uc218 \uc788\ub294 \ucd5c\uc18c \uae08\uc561 \uc785\ub2c8\ub2e4.\n    // \uc774 \uac12\uc744 \ub2e4\uc74c\ubcf4\ub2e4 \uc791\uc740 \uc22b\uc790\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\npreOrder.FillAmount\n    preOrder.FillAmount.Div(decimal.NewFromFloat(0.005)),\n)\n\n// \uba54\ubaa8 \uc0dd\uc131\nmemo, err := action.Encode(group.PublicKey)\nif err != nil {\n    return err\n}\nlog.Println("memo", memo)\n...\n\n')),(0,i.kt)("h2",{id:"\ud504\ub85c\uadf8\ub798\ubc0d-\ubc29\uc2dd\uc73c\ub85c-\uc8fc\ubb38\ud558\uae30"},"\ud504\ub85c\uadf8\ub798\ubc0d \ubc29\uc2dd\uc73c\ub85c \uc8fc\ubb38\ud558\uae30"),(0,i.kt)("p",null,"\ubd07\uc774 \uc8fc\ubb38\uc744 \ud558\ub3c4\ub85d \ud558\ub824\uba74 \ubd07\uc5d0\uc11c \ub2e4\uc911\uc11c\uba85 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0b4\uc2ed\uc2dc\uc624."),(0,i.kt)("p",null,"\uc774\uac83\uc740 \ucc28\uc775 \uac70\ub798 \ubd07\uc758 \uc77c\ubc18\uc801\uc778 \uc7a5\uba74\uc785\ub2c8\ub2e4. \ubd07\uc758 \uc9c0\uac11\uc5d0 \ucda9\ubd84\ud55c \uc554\ud638\ud654\ud3d0\uac00 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uc2ed\uc2dc\uc624."),(0,i.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\uace0 \ucee4\ub110 \ub178\ub4dc\ub85c \uc804\uc1a1\ud558\ub824\uba74 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fox-one/mixin-sdk-go"},"mixin-sdk-go")," \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// \'OpponentMultisig\'\ub85c \uc9c0\uc815\ub41c \ub2e4\uc911 \uc11c\uba85 \uc8fc\uc18c\ub85c \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0c5\ub2c8\ub2e4.\n// OpponentMultisig.Receivers\ub294 MTG \uadf8\ub8f9 \uad6c\uc131\uc6d0\uc785\ub2c8\ub2e4.\ntx, err := client.Transaction(ctx, &mixin.TransferInput{\n    AssetID: payAssetID,\n    Amount:  decimal.RequireFromString(amount),\n    TraceID: mixin.RandomTraceID(),\n    Memo:    memo,\n    OpponentMultisig: struct {\n        Receivers []string `json:"receivers,omitempty"`\n        Threshold uint8    `json:"threshold,omitempty"`\n    }{\n        Receivers: group.Members,\n        Threshold: uint8(group.Threshold),\n    },\n}, *pin)\n')))}c.isMDXComponent=!0}}]);