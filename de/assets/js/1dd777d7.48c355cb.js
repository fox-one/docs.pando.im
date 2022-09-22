"use strict";(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[7568],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return N}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),d=u(n),N=i,c=d["".concat(o,".").concat(N)]||d[N]||m[N]||l;return n?a.createElement(c,r(r({ref:t},k),{},{components:n})):a.createElement(c,r({ref:t},k))}));function N(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7281:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return k},default:function(){return d}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],p={title:"Price Oracles",date:new Date("2021-08-13T12:33:07.000Z")},o=void 0,u={unversionedId:"leaf/key-concepts/price-oracles",id:"leaf/key-concepts/price-oracles",isDocsHomePage:!1,title:"Price Oracles",description:"The Oracle Price for each trading pair is used for the following:",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/leaf/key-concepts/price-oracles.md",sourceDirName:"leaf/key-concepts",slug:"/leaf/key-concepts/price-oracles",permalink:"/de/docs/leaf/key-concepts/price-oracles",version:"current",frontMatter:{title:"Price Oracles",date:"2021-08-13T12:33:07.000Z"},sidebar:"docs",previous:{title:"Liquidation",permalink:"/de/docs/leaf/key-concepts/liquidation"},next:{title:"Pando Leaf MTG",permalink:"/de/docs/leaf/key-concepts/mtg"}},k=[{value:"Calculation",id:"calculation",children:[]},{value:"Node Providers",id:"node-providers",children:[]},{value:"Index Prices",id:"index-prices",children:[{value:"Calculation",id:"calculation-1",children:[]},{value:"Price Delay Mechanism",id:"price-delay-mechanism",children:[]},{value:"Exchange Sources",id:"exchange-sources",children:[]}]}],m={toc:k};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Oracle Price")," for each trading pair is used for the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ensuring that each account is well-collateralized after each trade"),(0,l.kt)("li",{parentName:"ul"},"Determining when an account should be liquidated")),(0,l.kt)("h3",{id:"calculation"},"Calculation"),(0,l.kt)("p",null,"Oracle prices will not take effect until it is confirmed by more than 4 of the 6 nodes."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"At present, it is a 4/6 multi-signature. "),(0,l.kt)("p",{parentName:"blockquote"},"If there is any adjustment, the document will be updated.")),(0,l.kt)("h3",{id:"node-providers"},"Node Providers"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Node name"),(0,l.kt)("th",{parentName:"tr",align:null},"First choice"),(0,l.kt)("th",{parentName:"tr",align:null},"Second choice"),(0,l.kt)("th",{parentName:"tr",align:null},"Third choice"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pando"),(0,l.kt)("td",{parentName:"tr",align:null},"coinbase"),(0,l.kt)("td",{parentName:"tr",align:null},"4swap"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pando Girl"),(0,l.kt)("td",{parentName:"tr",align:null},"binance"),(0,l.kt)("td",{parentName:"tr",align:null},"ftx"),(0,l.kt)("td",{parentName:"tr",align:null},"exinswap")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mixin"),(0,l.kt)("td",{parentName:"tr",align:null},"bitstamp"),(0,l.kt)("td",{parentName:"tr",align:null},"bitfinex"),(0,l.kt)("td",{parentName:"tr",align:null},"4swap")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BigONE"),(0,l.kt)("td",{parentName:"tr",align:null},"bittrex"),(0,l.kt)("td",{parentName:"tr",align:null},"ftx"),(0,l.kt)("td",{parentName:"tr",align:null},"exinswap")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Poolin"),(0,l.kt)("td",{parentName:"tr",align:null},"okex"),(0,l.kt)("td",{parentName:"tr",align:null},"4swap"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Exin"),(0,l.kt)("td",{parentName:"tr",align:null},"huobi"),(0,l.kt)("td",{parentName:"tr",align:null},"ftx"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specially,"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"FTX, 4swap, Exinswap is an alternative exchange for taking prices, and prices will be taken from the above three exchanges only if the other six exchanges do not read oracle prices."),(0,l.kt)("li",{parentName:"ul"},"The price taken on 4swap will not take effect until the price impact of transaction 1000 Pusd is less than 2%."),(0,l.kt)("li",{parentName:"ul"},"The price taken on Exinswap will not take effect until the price impact of the transaction 100 Pusd is less than 2%."))),(0,l.kt)("h2",{id:"index-prices"},"Index Prices"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Index Price")," for each trading pair is used for the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Calculating the funding rate"),(0,l.kt)("li",{parentName:"ul"},'Trigger "liquidation" and enter the auction')),(0,l.kt)("h3",{id:"calculation-1"},"Calculation"),(0,l.kt)("p",null,"Index prices are equal to the median of several exchanges' spot prices."),(0,l.kt)("p",null,"Each exchange's spot price is calculated as the median of the best-ask, best-bid, and last-traded prices of its spot pair."),(0,l.kt)("p",null,"We will adjust the price index to Pusd through 4swap."),(0,l.kt)("h3",{id:"price-delay-mechanism"},"Price Delay Mechanism"),(0,l.kt)("p",null,"In order to avoid the rapid decline in currency prices in a short period of time, which will lead to insufficient settlement of collateral, the currency prices confirmed by multi-signature nodes will not be immediately applied to Panduoye, there is a 30-minute delay."),(0,l.kt)("h3",{id:"exchange-sources"},"Exchange Sources"),(0,l.kt)("h4",{id:"btc-pusd"},"BTC-PUSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binance: ",(0,l.kt)("inlineCode",{parentName:"li"},"BTC-BUSD")),(0,l.kt)("li",{parentName:"ul"},"Bitstamp: ",(0,l.kt)("inlineCode",{parentName:"li"},"BTC-USD")),(0,l.kt)("li",{parentName:"ul"},"Bittrex: ",(0,l.kt)("inlineCode",{parentName:"li"},"BTC-USD")),(0,l.kt)("li",{parentName:"ul"},"Bitfinex: ",(0,l.kt)("inlineCode",{parentName:"li"},"BTC-USD")),(0,l.kt)("li",{parentName:"ul"},"CoinbasePro: ",(0,l.kt)("inlineCode",{parentName:"li"},"BTC-USD")),(0,l.kt)("li",{parentName:"ul"},"FTX: ",(0,l.kt)("inlineCode",{parentName:"li"},"BTC-USD")),(0,l.kt)("li",{parentName:"ul"},"OKEx: ",(0,l.kt)("inlineCode",{parentName:"li"},"BTC-USDC")),(0,l.kt)("li",{parentName:"ul"},"Huobi: ",(0,l.kt)("inlineCode",{parentName:"li"},"BTC-USDC")),(0,l.kt)("li",{parentName:"ul"},"Exinswap: ",(0,l.kt)("inlineCode",{parentName:"li"},"BTC-PUSD")),(0,l.kt)("li",{parentName:"ul"},"4swap: ",(0,l.kt)("inlineCode",{parentName:"li"},"BTC-PUSD"))),(0,l.kt)("h4",{id:"eth-pusd"},"ETH-PUSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binance: ",(0,l.kt)("inlineCode",{parentName:"li"},"ETH-BUSD")),(0,l.kt)("li",{parentName:"ul"},"Bitstamp: ",(0,l.kt)("inlineCode",{parentName:"li"},"ETH-USD")),(0,l.kt)("li",{parentName:"ul"},"Bitfinex: ",(0,l.kt)("inlineCode",{parentName:"li"},"ETH-USD")),(0,l.kt)("li",{parentName:"ul"},"Bittrex: ",(0,l.kt)("inlineCode",{parentName:"li"},"ETH-USD")),(0,l.kt)("li",{parentName:"ul"},"Coinbase: ",(0,l.kt)("inlineCode",{parentName:"li"},"ETH-USD")),(0,l.kt)("li",{parentName:"ul"},"FTX: ",(0,l.kt)("inlineCode",{parentName:"li"},"ETH-USD")),(0,l.kt)("li",{parentName:"ul"},"OKEx: ",(0,l.kt)("inlineCode",{parentName:"li"},"ETH-USDC")),(0,l.kt)("li",{parentName:"ul"},"Huobi: ",(0,l.kt)("inlineCode",{parentName:"li"},"ETH-USDC")),(0,l.kt)("li",{parentName:"ul"},"Exinswap: ",(0,l.kt)("inlineCode",{parentName:"li"},"ETH-PUSD")),(0,l.kt)("li",{parentName:"ul"},"4swap: ",(0,l.kt)("inlineCode",{parentName:"li"},"ETH-PUSD"))),(0,l.kt)("h4",{id:"eos-pusd"},"EOS-PUSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binance: ",(0,l.kt)("inlineCode",{parentName:"li"},"EOS-BUSD")),(0,l.kt)("li",{parentName:"ul"},"Bitfinex: ",(0,l.kt)("inlineCode",{parentName:"li"},"EOS-USD")),(0,l.kt)("li",{parentName:"ul"},"Bittrex: ",(0,l.kt)("inlineCode",{parentName:"li"},"EOS-USD")),(0,l.kt)("li",{parentName:"ul"},"CoinbasePro: ",(0,l.kt)("inlineCode",{parentName:"li"},"EOS-USD")),(0,l.kt)("li",{parentName:"ul"},"Huobi: ",(0,l.kt)("inlineCode",{parentName:"li"},"EOS-USDC")),(0,l.kt)("li",{parentName:"ul"},"FTX: ",(0,l.kt)("inlineCode",{parentName:"li"},"EOS-USD")),(0,l.kt)("li",{parentName:"ul"},"OKEx: ",(0,l.kt)("inlineCode",{parentName:"li"},"EOS-USDC")),(0,l.kt)("li",{parentName:"ul"},"Exinswap: ",(0,l.kt)("inlineCode",{parentName:"li"},"EOS-PUSD")),(0,l.kt)("li",{parentName:"ul"},"4swap: ",(0,l.kt)("inlineCode",{parentName:"li"},"EOS-PUSD"))),(0,l.kt)("h4",{id:"xin-pusd"},"XIN-PUSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Exinswap: ",(0,l.kt)("inlineCode",{parentName:"li"},"XIN-PUSD")),(0,l.kt)("li",{parentName:"ul"},"4swap: ",(0,l.kt)("inlineCode",{parentName:"li"},"XIN-PUSD"))),(0,l.kt)("h4",{id:"doge-pusd"},"DOGE-PUSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binance: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOGE-BUSD")),(0,l.kt)("li",{parentName:"ul"},"Bitfinex: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOGE-USD")),(0,l.kt)("li",{parentName:"ul"},"Bittrex: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOGE-USD")),(0,l.kt)("li",{parentName:"ul"},"CoinbasePro: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOGE-USD")),(0,l.kt)("li",{parentName:"ul"},"Huobi: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOGE-USDC")),(0,l.kt)("li",{parentName:"ul"},"FTX: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOGE-USD")),(0,l.kt)("li",{parentName:"ul"},"OKEx: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOGE-USDC")),(0,l.kt)("li",{parentName:"ul"},"Exinswap: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOGE-PUSD")),(0,l.kt)("li",{parentName:"ul"},"4swap: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOGE-PUSD"))),(0,l.kt)("h4",{id:"bch-pusd"},"BCH-PUSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binance: ",(0,l.kt)("inlineCode",{parentName:"li"},"BCH-BUSD")),(0,l.kt)("li",{parentName:"ul"},"Bitstamp: ",(0,l.kt)("inlineCode",{parentName:"li"},"BCH-USD")),(0,l.kt)("li",{parentName:"ul"},"Bittrex: ",(0,l.kt)("inlineCode",{parentName:"li"},"BCH-USD")),(0,l.kt)("li",{parentName:"ul"},"Coinbase: ",(0,l.kt)("inlineCode",{parentName:"li"},"BCH-USD")),(0,l.kt)("li",{parentName:"ul"},"FTX: ",(0,l.kt)("inlineCode",{parentName:"li"},"BCH-USD")),(0,l.kt)("li",{parentName:"ul"},"OKEx: ",(0,l.kt)("inlineCode",{parentName:"li"},"BCH-USDC")),(0,l.kt)("li",{parentName:"ul"},"Huobi: ",(0,l.kt)("inlineCode",{parentName:"li"},"BCH-USDC")),(0,l.kt)("li",{parentName:"ul"},"4swap: ",(0,l.kt)("inlineCode",{parentName:"li"},"BCH-PUSD"))),(0,l.kt)("h4",{id:"ltc-pusd"},"LTC-PUSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binance: ",(0,l.kt)("inlineCode",{parentName:"li"},"LTC-BUSD")),(0,l.kt)("li",{parentName:"ul"},"Bitstamp: ",(0,l.kt)("inlineCode",{parentName:"li"},"LTC-USD")),(0,l.kt)("li",{parentName:"ul"},"Bitfinex: ",(0,l.kt)("inlineCode",{parentName:"li"},"LTC-USD")),(0,l.kt)("li",{parentName:"ul"},"Bittrex: ",(0,l.kt)("inlineCode",{parentName:"li"},"LTC-USD")),(0,l.kt)("li",{parentName:"ul"},"Coinbase: ",(0,l.kt)("inlineCode",{parentName:"li"},"LTC-USD")),(0,l.kt)("li",{parentName:"ul"},"FTX: ",(0,l.kt)("inlineCode",{parentName:"li"},"LTC-USD")),(0,l.kt)("li",{parentName:"ul"},"OKEx: ",(0,l.kt)("inlineCode",{parentName:"li"},"LTC-USDC")),(0,l.kt)("li",{parentName:"ul"},"Huobi: ",(0,l.kt)("inlineCode",{parentName:"li"},"LTC-USDC")),(0,l.kt)("li",{parentName:"ul"},"Exinswap: ",(0,l.kt)("inlineCode",{parentName:"li"},"LTC-PUSD")),(0,l.kt)("li",{parentName:"ul"},"4swap: ",(0,l.kt)("inlineCode",{parentName:"li"},"LTC-PUSD"))),(0,l.kt)("h4",{id:"fil-pusd"},"FIL-PUSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binance: ",(0,l.kt)("inlineCode",{parentName:"li"},"FIL-BUSD")),(0,l.kt)("li",{parentName:"ul"},"Bitfinex: ",(0,l.kt)("inlineCode",{parentName:"li"},"FIL-USD")),(0,l.kt)("li",{parentName:"ul"},"Bittrex: ",(0,l.kt)("inlineCode",{parentName:"li"},"FIL-USD")),(0,l.kt)("li",{parentName:"ul"},"CoinbasePro: ",(0,l.kt)("inlineCode",{parentName:"li"},"FIL-USD")),(0,l.kt)("li",{parentName:"ul"},"Huobi: ",(0,l.kt)("inlineCode",{parentName:"li"},"FIL-USDC")),(0,l.kt)("li",{parentName:"ul"},"FTX: ",(0,l.kt)("inlineCode",{parentName:"li"},"FIL-USD")),(0,l.kt)("li",{parentName:"ul"},"OKEx: ",(0,l.kt)("inlineCode",{parentName:"li"},"FIL-USDC")),(0,l.kt)("li",{parentName:"ul"},"Exinswap: ",(0,l.kt)("inlineCode",{parentName:"li"},"FIL-PUSD")),(0,l.kt)("li",{parentName:"ul"},"4swap: ",(0,l.kt)("inlineCode",{parentName:"li"},"FIL-PUSD"))),(0,l.kt)("h4",{id:"zec-pusd"},"ZEC-PUSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binance: ",(0,l.kt)("inlineCode",{parentName:"li"},"ZEC-BUSD")),(0,l.kt)("li",{parentName:"ul"},"Bitfinex: ",(0,l.kt)("inlineCode",{parentName:"li"},"ZEC-USD")),(0,l.kt)("li",{parentName:"ul"},"Bittrex: ",(0,l.kt)("inlineCode",{parentName:"li"},"ZEC-USD")),(0,l.kt)("li",{parentName:"ul"},"CoinbasePro: ",(0,l.kt)("inlineCode",{parentName:"li"},"ZEC-USD")),(0,l.kt)("li",{parentName:"ul"},"Huobi: ",(0,l.kt)("inlineCode",{parentName:"li"},"ZEC-USDC")),(0,l.kt)("li",{parentName:"ul"},"FTX: ",(0,l.kt)("inlineCode",{parentName:"li"},"ZEC-USD")),(0,l.kt)("li",{parentName:"ul"},"OKEx: ",(0,l.kt)("inlineCode",{parentName:"li"},"ZEC-USDC")),(0,l.kt)("li",{parentName:"ul"},"4swap: ",(0,l.kt)("inlineCode",{parentName:"li"},"ZEC-PUSD"))),(0,l.kt)("h4",{id:"dot-pusd"},"DOT-PUSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binance: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOT-BUSD")),(0,l.kt)("li",{parentName:"ul"},"Bitfinex: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOT-USD")),(0,l.kt)("li",{parentName:"ul"},"Bittrex: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOT-USD")),(0,l.kt)("li",{parentName:"ul"},"CoinbasePro: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOT-USD")),(0,l.kt)("li",{parentName:"ul"},"Huobi: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOT-USDC")),(0,l.kt)("li",{parentName:"ul"},"FTX: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOT-USD")),(0,l.kt)("li",{parentName:"ul"},"OKEx: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOT-USDC")),(0,l.kt)("li",{parentName:"ul"},"Exinswap: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOT-PUSD")),(0,l.kt)("li",{parentName:"ul"},"4swap: ",(0,l.kt)("inlineCode",{parentName:"li"},"DOT-PUSD"))),(0,l.kt)("h4",{id:"uni-pusd"},"UNI-PUSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binance: ",(0,l.kt)("inlineCode",{parentName:"li"},"UNI-BUSD")),(0,l.kt)("li",{parentName:"ul"},"Bitstamp: ",(0,l.kt)("inlineCode",{parentName:"li"},"UNI-USD")),(0,l.kt)("li",{parentName:"ul"},"Bitfinex: ",(0,l.kt)("inlineCode",{parentName:"li"},"UNI-USD")),(0,l.kt)("li",{parentName:"ul"},"Bittrex: ",(0,l.kt)("inlineCode",{parentName:"li"},"UNI-USD")),(0,l.kt)("li",{parentName:"ul"},"Coinbase: ",(0,l.kt)("inlineCode",{parentName:"li"},"UNI-USD")),(0,l.kt)("li",{parentName:"ul"},"FTX: ",(0,l.kt)("inlineCode",{parentName:"li"},"UNI-USD")),(0,l.kt)("li",{parentName:"ul"},"OKEx: ",(0,l.kt)("inlineCode",{parentName:"li"},"UNI-USDC")),(0,l.kt)("li",{parentName:"ul"},"Huobi: ",(0,l.kt)("inlineCode",{parentName:"li"},"UNI-USDC")),(0,l.kt)("li",{parentName:"ul"},"Exinswap: ",(0,l.kt)("inlineCode",{parentName:"li"},"UNI-PUSD")),(0,l.kt)("li",{parentName:"ul"},"4swap: ",(0,l.kt)("inlineCode",{parentName:"li"},"UNI-PUSD"))),(0,l.kt)("h4",{id:"mob-pusd"},"MOB-PUSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bitfinex: ",(0,l.kt)("inlineCode",{parentName:"li"},"MOB-USD")),(0,l.kt)("li",{parentName:"ul"},"FTX: ",(0,l.kt)("inlineCode",{parentName:"li"},"MOB-USD")),(0,l.kt)("li",{parentName:"ul"},"Exinswap: ",(0,l.kt)("inlineCode",{parentName:"li"},"MOB-PUSD")),(0,l.kt)("li",{parentName:"ul"},"4swap: ",(0,l.kt)("inlineCode",{parentName:"li"},"MOB-PUSD"))))}d.isMDXComponent=!0}}]);