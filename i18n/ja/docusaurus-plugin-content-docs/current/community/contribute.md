---
title: 助ける
date: 2021年9月15日22時33分07秒
---

Pando のドキュメントはオープンソースです。 より多くの人々が利用できるように、他の言語に翻訳することを歓迎します。

## 準備

Pandoのドキュメントは、React.jsの静的サイトジェネレーターである[ Docusaurus ](https://docusaurus.io/docs/en/latest/)に基づいています。

- Yarnがインストールされていることを確認する必要があります
- ドキュメントのリポジトリのクローンを作成します
- リポジトリのルートで` yarn </ code>を実行します </li>
<li><code> yarn start </ code>を実行して、ドキュメントをプレビューします </li>
</ul>

<h2 spaces-before="0">ドキュメント構造</h2>

<p spaces-before="0">ドキュメントは次のように構成されています。</p>

<ul>
<li>すべてのソースは<code> docs </ code>ディレクトリと<code> developer </ code>ディレクトリにあります </li>
<li><code> docs </ code>ディレクトリには、次のサブディレクトリが含まれています。 

<ul>
<li><code> lake </ code>には、すべてのPando Lake＆amp;が含まれています。 4スワップドキュメント </li>
<li><code> leaf </ code>には、すべてのPandoLeafドキュメントが含まれています </li>
<li><code> ring </ code>には、すべてのPandoRingsのドキュメントが含まれています </li>
<li><code> wallets </ code>には、MixinNetworkのウォレットに関するすべてのドキュメントが含まれています </li>
<li>
<code> third-party-apps </ code>は、Pando上に構築されたアプリケーションを一覧表示します </li>
<li>
<code> security </ code>には、セキュリティの問題に関するドキュメントが含まれています </li>
<li><code> community </ code>には、すべてのコミュニティドキュメントが含まれています </li>
</ul></li>
<li><code> developer </ code>ディレクトリには次のサブディレクトリが含まれています。 

<ul>
<li><code> lake </ code>には、PandoLakeと4swapの開発ドキュメントが含まれています </li>
<li><code> leaf </ code>には、PandoLeafの開発ドキュメントが含まれています </li>
<li>
<code> ring </ code>には、PandoRingsの開発ドキュメントが含まれています </li>
<li><code> resources </ code>にはリソースが含まれています </li>
</ul></li>
<li><code> docs </ code>のサイドバーは<code> sidebar.docs.js </ code>で定義され、<code> developer </ code>のサイドバーは<code> sidebar.developer.js <で定義されます。 / code> </li>
</ul>

<h2 spaces-before="0">翻訳</h2>

<h3 spaces-before="0">Crowdinで翻訳</h3>

<p spaces-before="0">GithubとPandoのi18nに慣れていない場合は、Crowdinを使用してドキュメントの翻訳を支援することをお勧めします。</p>

<ol start="1">
<li><ahref = "https://pando.crowdin.com/u/signup">ここをタップ</a>して、Crowdinのアカウントにサインアップします </li>
<li><a href="https://pando.crowdin.com/"> CrwodinのPandoのページ</a>で翻訳のステータスと進捗状況を確認します </li>
<li>JSONおよびMarkdownファイルを翻訳するためにCrowdinを使用する必要があるため、Crowdin翻訳UIをよく理解してください。</li>
</ol>

<pre><code class="mdx-code-block">:::情報
ドキュメント内のすべてのコードを翻訳する必要はないことに注意してください。
:::
`</pre>

### 翻訳を初期化する

#### 新しい言語の新しい翻訳ファイルを生成する

このプロジェクトの保守者である場合は、[ i18nチュートリアル](https://docusaurus.io/docs/i18n/tutorial)の指示に従って新しい言語を追加してください。


**このページを翻訳します**

<ahref = "https://docusaurus.io/docs/i18n/tutorial#use-the-translation-apis">こちら</a>の手順に従って、インデックスページを翻訳し、コンポーネントを反応させてください。

**jsonファイルの生成/更新 **

```bash
ヤーンラン 書く-翻訳 --locale $LANG_CODE
```

` $ LANG_CODE </ code>は、生成する言語の言語コードです。  たとえば、フランス語の翻訳ファイルを生成する場合は、 <code>fr`を使用する必要があります。

翻訳ファイルは、` i18n / $ LANG_CODE / </ code>ディレクトリに生成されます。 </p>

<p spaces-before="0"><strong x-id="1">Markdown ファイルを生成する</strong></p>

<p spaces-before="0">ドキュメント内のマークダウンファイルを<code> i18n / $ LANG_CODE / docusaurus-plugin-content-docs / current </ code>にコピーし、翻訳します。 </p>

<pre><code class="bash">mkdir -p i18n/$LANG_CODE/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/$LANG_CODE/docusaurus-plugin-content-docs/current
`</pre>

#### ドキュメントを翻訳する

すべてのドキュメントは、言語に応じて` i18n / $ LANG_CODE / </ code>に配置されます。 </p>

<ul>
<li><code> i18n / $ LANG_CODE / code.json </ code>：インデックスページの翻訳とdocusaurusで使用されるテキスト。 </li>
<li><code> i18n / $ LANG_CODE / docusaurus-theme-classic / footer.json </ code>：フッターの翻訳。 </li>
<li><code> i18n / $ LANG_CODE / docusaurus-theme-classic / navbar.json </ code>：navbarの翻訳。 </li>
<li><code> i18n / $ LANG_CODE / docusaurus-plugin-content-docs / current.json </ code>：サイドバーのカテゴリのラベル。 </li>
<li><code> i18n / $ LANG_CODE / docusaurus-plugin-content-docs / current / ** </ code>：ドキュメントのマークダウンファイル。 </li>
</ul>

<p spaces-before="0"><strong x-id="1">翻訳をプレビューする</strong></p>

<pre><code class="bash">ヤーンランスタート--locale $ LANG_CODE 
`</pre>



