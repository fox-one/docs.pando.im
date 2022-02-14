---
title: 資産一覧表示と保管先の追加
date: 2021年08月15日　22時33分07秒
---

輸入 { 改善、 } from "@ site / src / components / admonitions";

<Improvement />

** <ahref = "https://lake.pando.im">パンドレイク</a> </ strong>では、証明された資格情報を持つ選択されたプールのみが許可されます。  パブリックからの新しいプールは受け入れません。 </p>

** [ 4swap ](https://4swap.org) </ strong>はコミュニティ主導のプロジェクトであり、現在、任意のプールを追加できます。 </p>

## Mixinネットワークに資産情報を追加する

Mixinの<ahref = "https://github.com/MixinNetwork/asset-profile"> Asset-profile </a>ページにアクセスし、` README.md </ code>の指示に従ってMixinNetworkにアクセスします。 </p>

<p spaces-before="0">たとえば、「RUM」という名前のERC-20トークンがある場合は、それをMixinNetworkに追加できます。 </p>

<ol start="1">
<li>「icon.png」という名前のアイコンファイル。520px* 520pxである必要があります。 </li>
<li>「index.json」という名前のjsonファイル。これは有効なjsonファイルであり、次の情報が含まれている必要があります。 </li>
</ol>

<pre><code class="json">{{
   // MixinNetworkのRUMのアセットID
   "asset_id"： "4f2ec12c-22f4-3a9e-b757-c84b6415ea8f"、
   // RUMはERC-20トークンであり、チェーンIDはETHのアセットIDです
   "chain_id"： "43d61dcd-e413-450d-80b8-101d5e903357"、
   // RUMはCoinMarketCapにリストされていないため、空の文字列を使用します
   "cmc_id"： ""
} 
`</pre>

上記の例のコミットは、<ahref = "https://github.com/MixinNetwork/asset-profile/commit/437d378f899c5837598bdb8c4e9c18ae8f21ad27">ここ</a>です。

````mdx-code-block
：：：情報
終了したら、プルリクエストを作成してください。  Mixin Networkがプルリクエストを処理するのに通常約1〜2日かかります。 
:::
````

## 4swapでプールを作成します

プールを作成するには、

 Mixin Messenger </ 0>または Fennec </ 1>に向かう必要があります。</p> 

1. 2つの資産のウォレット残高が最小額の0.00000001を超えていることを確認してください。 そうでない場合は、ウォレットに入金してください。
2. ウォレットの最低限の0.02 ETHを超えていることを確認してください そうでない場合は、ウォレットに入金するか、 [4swap](https://app.4swap.org) で交換してください。
3. <ahref = "https://app.4swap.org/#/me">このページ</a>にアクセスし、[接続]をタップしてウォレットに接続します。 

![](../assets/lake-get-started-p2.png)

4. <ahref = "https://app.4swap.org/#/liquidity/create">このページ</a>にアクセスし、プールに追加するアセットを2つ選択して、[` Pay </ code>]をタップします プールを作成します。 </li>
</ol>

<p spaces-before="0">コインマーケットキャップのランキングや取引量、取引所のサポート状況などから、上場するかどうかを総合的に検討します。</p>

<p spaces-before="0">リーフ/リングのリストについては、mixinメッセンジャーの37160854に問い合わせることもできます。 </p>

<pre><code class="mdx-code-block">:::情報
プールが作成され、[MTGノード]（../ key-concepts / mtg）によって承認されるまで、通常1〜3日かかります。 リクエストが3日以内に処理されない場合は、払い戻しが行われます。
:::
`</pre>