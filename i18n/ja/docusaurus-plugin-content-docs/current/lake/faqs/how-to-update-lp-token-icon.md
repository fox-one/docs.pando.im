---
title: LPトークンのアイコンを更新する方法
date: 2021年11月13日　22時33分07秒
---

LPトークンのアイコンは [`4swap-icon-gen`](https://github.com/fox-one/4swap-icon-gen) によって作成されます。

LPトークンのアイコンを更新するには、以下の手順に従ってください。

## 1. 最新のアセットアイコンをMixinNetworkに送信する

そうでない場合は、[この指導](../tutorials/listing)を参照して、アセットアイコンを送信してください。

LPトークンのアイコンを生成する前に、新しいアセットアイコンが Mixin ネットワークに配置されていることを確認する必要があります。

新しいアセットアイコンのステータスを確認するには、ブラウザで` https://mixin.one/snapshots/YOUR_ASSET_SYMBOL_NAME </ code>にアクセスしてください。 ウェブページには、アセットのアイコンが含まれているアセットの情報が表示されます。</p>

<h2 spaces-before="0">2. LPトークンのアイコンを作成します</h2>

<p spaces-before="0"><a href="https://github.com/fox-one/4swap-icon-gen"> <code> 4swap-icon-gen </ code> </a>の最新バージョンをダウンロードし、次のコマンドでビルドします。</p>

<pre><code class="bash">構築する
`</pre>

次に、次のコマンドで実行します。

```bash
./4swap-icon-gen -config YOUR_KEYSTORE_FILE -a0 LP_ASSET_ID -a1 1ST_ASSET_ID -a2 2ND_ASSET_ID
```

その中で

- ` YOUR_KEYSTORE_FILE </ code>は、アカウントのキーストアファイルです。
<ahref = "https://developers.mixin.one/dashboard">Mixin開発者ダッシュボード</a>から入手できます。</p></li>
<li><p spaces-before="0"><code>LP_ASSET_ID` は、LPトークンの資産IDである。
- ` 1ST_ASSET_ID </ code>と<code> 2ND_ASSET_ID </ code>は、LPトークンのアイコンを生成するアセットのアセットIDです。
ブラウザで<code> https://mixin.one/snapshots/YOUR_ASSET_SYMBOL_NAME </ code>にアクセスすると入手できます。 URLがシンボルからアセットIDに変わります。</li>
</ul>

<p spaces-before="0">このコマンドは、Mixin Networkから最新のアイコンをフェッチし、<code> output </ code>ディレクトリにLPトークンのアイコンを生成します。</p>

<p spaces-before="0">たとえば、<code> sRUM-XIN </ code>の新しいアイコンを生成する場合は、次のコマンドを実行できます。</p>

<pre><code class="bash">./4swap-icon-gen -config YOUR_KEYSTORE_FILE -a0 a53872c5-b1a3-32da-bbc4-230a7ced69cb -a1 4f2ec12c-22f4-3a9e-b757-c84b6415ea8f -a2 c94ac88f-4671-3976-b60a-09064f1811e8
`</pre>

## 3. 新しいLPトークンのアイコンをMixin ネットワークに登録します

他のアセットのアイコンと同じ、新しいLPトークンのアイコンを Mixin ネットワークに登録する必要があります ブラウザで<ahref = "https://github.com/MixinNetwork/asset-profile/"> https://github.com/MixinNetwork/asset-profile/ </a>にアクセスして送信してください。

````mdx-code-block
:::情報
終了したら、プルリクエストを作成してください。  Mixin Networkがプルリクエストを処理するのに通常約1〜2日かかります。 
:::
````