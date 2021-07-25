(self.webpackChunkpando_docs=self.webpackChunkpando_docs||[]).push([[675],{4860:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return h},default:function(){return c}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=["components"],s={title:"Technical Overview",sidebar_position:1,date:new Date("2021-03-20T12:38:07.000Z")},l=void 0,d={unversionedId:"leaf/overview",id:"leaf/overview",isDocsHomePage:!1,title:"Technical Overview",description:"Pando is a decentralized financial network built with the MTG technology, and its underlying financial algorithm is inspired by MakerDao and Synthetix.",source:"@site/developer/leaf/overview.md",sourceDirName:"leaf",slug:"/leaf/overview",permalink:"/developer/leaf/overview",version:"current",lastUpdatedAt:1627204423,formattedLastUpdatedAt:"7/25/2021",sidebarPosition:1,frontMatter:{title:"Technical Overview",sidebar_position:1,date:"2021-03-20T12:38:07.000Z"},sidebar:"tutorialSidebar",previous:{title:"Using 4swap SDK",permalink:"/developer/lake/using-sdk"},next:{title:"Technical Design",permalink:"/developer/leaf/design"}},h=[{value:"Mixin Network &amp; MTG",id:"mixin-network--mtg",children:[{value:"Mixin Network",id:"mixin-network",children:[]},{value:"Mixin Trusted Group",id:"mixin-trusted-group",children:[]}]},{value:"An intro to Pando",id:"an-intro-to-pando",children:[{value:"pUSD",id:"pusd",children:[]},{value:"Pledge",id:"pledge",children:[]},{value:"Vaults",id:"vaults",children:[]},{value:"Interact with Pando",id:"interact-with-pando",children:[]},{value:"Liquidate high-risk vaults",id:"liquidate-high-risk-vaults",children:[]},{value:"Price Oracle",id:"price-oracle",children:[]},{value:"Summary and future works",id:"summary-and-future-works",children:[]}]}],u={toc:h};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pando is a decentralized financial network built with the MTG technology, and its underlying financial algorithm is inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://makerdao.com"},"MakerDao")," and Synthetix."),(0,o.kt)("p",null,"Pando takes multiple over-collateralized assets and grows multiple Pando assets, which(the grown Pando assets), e.g. pUSD, can also be used as a pledge."),(0,o.kt)("h2",{id:"mixin-network--mtg"},"Mixin Network & MTG"),(0,o.kt)("h3",{id:"mixin-network"},"Mixin Network"),(0,o.kt)("p",null,"Mixin Network is a public blockchain driven by TEE (Trusted Execution Environment) based on the DAG with aBFT. Unlike other projects which have great theories but hardly any actual implementations of blockchain transaction solution, Mixin Network provides a more secure, private, 0 fees, developer-friendly and user-friendly transaction solution with lightning speed."),(0,o.kt)("h3",{id:"mixin-trusted-group"},"Mixin Trusted Group"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developers.mixin.one/document/mainnet/mtg"},"Mixin Trusted Group")," is an alternative to smart contacts on Mixin Network."),(0,o.kt)("p",null,"Basically, MTG is a Multi-signature custodian consensus solution. Several teams will be selected and arranged as the \u201cTrusted Group\u201d in Pando, becoming the \u201cNodes\u201d.\nConcensus has to be reached among the nodes to perform certain administrative actions. As a result, stable services and asset safety are guaranteed."),(0,o.kt)("p",null,"For example, let\u2019s say there is a M/N multi-sig group where M represents the number of nodes, and the group manages some assets in the multi-sig address. When one of the nodes needs to transfer some assets out, it needs to collect at least N signatures from others to perform the action."),(0,o.kt)("p",null,"MTG is the framework. Pando is an application designed using the framework on Mixin Network."),(0,o.kt)("h2",{id:"an-intro-to-pando"},"An intro to Pando"),(0,o.kt)("h3",{id:"pusd"},"pUSD"),(0,o.kt)("p",null,"pUSD is a stable coin launched on Dec 25, 2020. Since the launch, the backing ratio of pUSD has always been higher than 200%."),(0,o.kt)("h3",{id:"pledge"},"Pledge"),(0,o.kt)("p",null,"Nodes have the ability to add any asset as a pledge by voting. Once nodes vote one asset to be a pledge, anybody can borrow pUSD by providing enough specified asset."),(0,o.kt)("p",null,"Nodes also have the ability to adjust various parameters of pledges by voting."),(0,o.kt)("p",null,"All assets supported by Mixin Network, including BTC, ETH, etc, are potential pledges for Pando."),(0,o.kt)("h3",{id:"vaults"},"Vaults"),(0,o.kt)("p",null,"All approved pledges can be deposited in the Pando multi-signature address to create a vault to generate pUSD for any Pando user."),(0,o.kt)("p",null,"As long as the price of the pledge is higher than the minimum requirement, the creators have the complete control of their vaults."),(0,o.kt)("h3",{id:"interact-with-pando"},"Interact with Pando"),(0,o.kt)("p",null,"Both users and node administrators must use multi-signature transactions to interact with Pando."),(0,o.kt)("p",null,"The methods and parameters of the transactions are all written in the memo which contains extra information of each transfer."),(0,o.kt)("p",null,"Currently, in order to protect user privacy, all information in the memo must be encrypted by the following algorithm:"),(0,o.kt)("p",null,"Pando will generate a pair of ed25519 public and private keys at first, and publish the public key."),(0,o.kt)("p",null,"For each transaction, the user generates a pair of temporary ed25519 public and private keys, and generates a string of 32-bit bytes."),(0,o.kt)("p",null,"The first 16 bits of these bytes will be the key for AES encryption, and the last 16 bits will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"iv")," of AES encryption."),(0,o.kt)("p",null,"These bytes must encrypt the original memo and generate a result we call it encrypted bytes. The client should put encrypted bytes and the user\u2019s public key \u200b\u200btogether and encode in base64 as the final memo for the transfer."),(0,o.kt)("p",null,"The nodes of Pando synchronize all transfers from the Mixin Network. When a node recognizes a valid transfer, it performs a reverse operation to restore the key and iv encrypted by AES, and then decrypts the parameters of the action."),(0,o.kt)("p",null,"The nodes need to ensure that they process the user interaction in the same order to ensure that the data stored in the database is completely consistent with other nodes; It should follow the same order when transferring money to ensure that all nodes choose when completing the transfer in the same utxo."),(0,o.kt)("h3",{id:"liquidate-high-risk-vaults"},"Liquidate high-risk vaults"),(0,o.kt)("p",null,"In order to ensure that there is always enough pledge in Pando to endorse the loaned pUSD, all vaults will require an excess mortgage such as 150%."),(0,o.kt)("p",null,"When the value of the mortgaged assets is insufficient due to market price fluctuations, the vault will enter a high-risk state and be open for liquidation to redeem the pUSD.The liquidation is carried out as auction:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the pUSD got by the auction is enough to pay off the debt in the vault and the liquidation penalty, the auction will sell just the enough amount of pledge to cover the debt and the remaining pledge will be returned to the original owner."),(0,o.kt)("li",{parentName:"ul"},"If the pUSD got from the auction of the pledge is not enough to pay off the debt and the liquidation penalty, the loss will become Pando\u2019s liability and be shared by all nodes.")),(0,o.kt)("h3",{id:"price-oracle"},"Price Oracle"),(0,o.kt)("p",null,"Pando needs to synchronize the prices of the pledged assets to update the collateral rate of the vaults and liquidate the high-risk vaults."),(0,o.kt)("p",null,"The price data of Pando relies on an external decentralized price service. Pando will not use the price data directly."),(0,o.kt)("p",null,"Pando adds an one-hour delay to all price data. During this period, if someone attacks a price service, the nodes can vote to change the state of the pledge to be frozen urgently. Nodes can also vote for new prices."),(0,o.kt)("h3",{id:"summary-and-future-works"},"Summary and future works"),(0,o.kt)("p",null,"Pando has achieved the goal that decentralized the consensus among trusted nodes, bringing the stable coin minting service to all users of the Mixin Network."),(0,o.kt)("p",null,"Pando also reserves the ability to extend the lending to non-stable assets. For example, it can issue a 1:1 token pTesla against Tesla stock on the Mixin network, and then plege the Bitcoin on Pando to generate pTesla, which will build connections between the assets in the Mixin Network and the external assets of outside world."))}c.isMDXComponent=!0}}]);