---
title: 技術設計
date: 2021年03月20日　12時38分07秒
---

# デザイン

## 建築

Ringsは、MTGの実装であり、Mixinネットワークのパラチェーンです。

![](design/architecture.jpg)

#### Mixin MTG構造体

![](design/mixin_mtg_struct.jpg)


#### MTGシステムのデータフロー
* ユーザーは、ビジネス データを Mixin ネットワークに転送する支払い(UTXO) を行います。
* Ringsは、ビジネスデータ(output.memo内)を解析することにより、出力(UTXO)を同期します
* Ringsは、ビジネスアクション（ビジネスデータに含まれる）をディスパッチし、各アクション（供給、借用...）を処理します。

![](design/workflow.jpg)

MTGシステムには、2つの主要な役割があります。1つは` Payee </ code>で、もう1つは<code> cashier </ code>です。すべてのビジネスロジックは、これら2つの役割に基づいて実装されます。 </p>

<ul>
<li><p spaces-before="0"><code> Payee </ code>は出力（トランザクション）を受信し、<code> Output.Memo </ code>からビジネスデータをデコードし、<code>アクション</ code>をディスパッチします 
<img src="design/f_payee.jpg" alt="" /></p></li>
<li><p spaces-before="0"><code> cashier </ code>がトークンを使い、トークンをユーザーに転送する 
<img src="design/f_cashier.jpg" alt="" /></p></li>
</ul>

<h4 spaces-before="0">アラート設定</h4>

<ul>
<li><p spaces-before="0"><code> Supply </ code>、ユーザーが基になるトークン<code> ETH </ code>を提供し、エクイティトークン<code> rETH </ code>を取得するとします。 
<img src="design/tl_supply.jpg" alt="" /></p></li>
<li><p spaces-before="0">
<code> Pledge </ code>、ユーザーがエクイティトークン<code> rETH </ code>を誓約するとします。これは、ユーザーがRingsシステムに<code> rETH </ code>を支払う必要があることを意味します 
<img src="design/tl_pledge.jpg" alt="" /></p></li>
<li><p spaces-before="0"><code> Unpledge </ code>、ユーザーがエクイティトークン<code> rETH </ code>の誓約を解除するとします。これは、ユーザーがいくつかのトークンを支払う必要があり、エクイティトークン<code> rETH </ code>を取り戻すことを意味します 
<img src="design/tl_unpledge.jpg" alt="" /></p></li>
<li><p spaces-before="0"><code> Redeem </ code>、ユーザーがシステムから基礎となるトークン<code> ETH </ code>を償還するとします。つまり、ユーザーはエクイティトークン<code> rETH </ code>を支払い、同等の基礎となるトークンを取得する必要があります< code> ETH </ code>戻る 
<img src="design/tl_redeem.jpg" alt="" /></p></li>
<li><p spaces-before="0"><code>借りる</ code>、ユーザーが基になるトークン<code> USDT </ code>を借りる必要があると仮定します。つまり、ユーザーはいくつかのトークンを支払う必要があり、予想される基になるトークン<code> USDT </ code>を取得します。 
<img src="design/tl_borrow.jpg" alt="" /></p></li>
<li><p spaces-before="0"><code> Repay </ code>、ユーザーが<code> USDT </ code>を返済するとします。これは、ユーザーが<code> USDT </ code>を支払うことを意味し、ユーザーの債務が削減されます。 
<img src="design/tl_repay.jpg" alt="" /></p></li>
<li><p spaces-before="0"><code> quick_pledge </ code>、ユーザーが基になるトークン<code> ETH </ code>を提供し、エクイティトークン<code> rETH </ code>がユーザーに返されないとします。 
<img src="design/tl_quick_pledge.jpg" alt="" /></p></li>
<li><p spaces-before="0"><code> quick_pledge </ code>、ユーザーが<code> ETH </ code>を利用し、ユーザーは一部のトークンのみを支払い、基になるトークン<code> ETH </ code>を取り戻すとします。
<img src="design/tl_quick_redeem.jpg" alt="" /></p></li>
<li><p spaces-before="0">
<code> quick_borrow </ code>、ユーザーが<code> ETH </ code>または<code> rETH </ code>を提供し、<code> USDT </ code>ディレクトリを借りることができるとします。 
<img src="design/tl_quick_borrow.jpg" alt="" /></p></li>
<li><p spaces-before="0"><code>清算</ code>、ユーザーAが<code> ETH </ code>を誓約して<code> USDT </ code>を借りたとすると、ユーザーAのアカウントの流動性がゼロ以下になると 他のユーザーにより清算できます 
<img src="design/tl_liquidation.jpg" alt="" /></p></li>
<li><p spaces-before="0"><code>提案アクション</ code>、すべてのガバナンス作業は提案投票を通じて効果を生み出します。現在の提案には次のものが含まれます。 </p>

<ol start="1">
<li>マーケットを作成または更新するための<code> market </ code> </li>
<li>市場を開くための<code> open-market </ code> </li>
<li>市場を閉じるための<code> close-market </ code> </li>
<li><code> allowlist </ code>清算を許可するかどうか </li>
<li><code> add-oracle-signer </ code>市場価格を提供する価格オラクル署名者を追加します </li>
<li><code> rm-oracle-signer </ code>価格のオラクル署名者を削除します </li>
<li>
<code> withdraw </ code>は市場から準備金を引き出します 
<img src="design/f_proposal.jpg" alt="" /></li>
</ol></li>
</ul>

<h2 spaces-before="0">
コード構造体 </h2>

<pre><code>
| -cmd
| -config
|-デプロイ
| -docs
|-コア
| -pkg
|-サービス
|-ストア
|-労働者
|-ハンドラー
| -Dockerfile
| -Makefile
| -main.go  

`</pre>

* [ cmd ](https://github.com/fox-one/compound/tree/master/cmd)コマンドエントリ（APIサーバーとワーカーおよびガバナンスツールの開始を含む）
* [ config ](https://github.com/fox-one/compound/tree/master/config)のデフォルトの設定ディレクトリ
* <ahref = "https://github.com/fox-one/compound/tree/master/docs">ドキュメント</a>プロジェクトドキュメント
* プロジェクトのモデルの<ahref = "https://github.com/fox-one/compound/tree/master/core">コア</a>ディレクトリ
* エクスポート可能な<ahref = "https://github.com/fox-one/compound/tree/master/pkg"> pkg </a>プロジェクトパッケージ
* ビジネスコードの<ahref = "https://github.com/fox-one/compound/tree/master/service">サービス</a>ディレクトリ
* <ahref = "https://github.com/fox-one/compound/tree/master/store">ストア</a>データリポジトリ（データはデータベース、Redis、またはメモリキャッシュに保存される場合があります）
* バックグラウンドでデータを処理するジョブの<ahref = "https://github.com/fox-one/compound/tree/master/worker"> worker </a>ディレクトリ
* エクスポートされたAPI専用の<ahref = "https://github.com/fox-one/compound/tree/master/handler">ハンドラー</a>
* デプロイ用の<ahref = "https://github.com/fox-one/compound/tree/master/Dockerfile"> Dockerfile </a>
* <ahref = "https://github.com/fox-one/compound/tree/master/deploy">デプロイ</a>ストアの設定とデプロイのツール
* [main.go](https://github.com/fox-one/compound/tree/master/main.go)
* [ファイルを 作る](https://github.com/fox-one/compound/tree/master/Makefile)

### [構成テンプレート ](https://github.com/fox-one/compound/tree/master/deploy/config.node.yaml.tpl)

```
＃固定値：1603382400
創世記：1603382400
＃時間のローカリゼーション
場所：アジア/上海

＃データベース構成
db：
   方言：mysql
   ホスト：〜
   read_host：〜
   ポート：3306
   ユーザー：〜
   パスワード：〜
   データベース：〜
   場所：Asia％2FShanghai
   デバッグ：true

＃mixin dapp config
dapp：
   番号：7000103159
   client_id：〜
   session_id：〜
   client_secret：〜
   pin_token：〜
   ピン： ""
   private_key：〜

＃ノードグループ構成
グループ：
＃コマンドによって生成された、すべてのノードで共有される秘密鍵：./ compound keys --cipher ed25519
   private_key：〜
   ＃現在のノードがユーザーデータの署名に使用する秘密鍵
   sign_key：〜
   ＃このノードの管理者
   管理者：
     -〜
     -〜
     -〜
   ＃ノードメンバー
   メンバー：
     --client_id：〜
     ＃現在のノードが署名を検証するために使用する公開鍵
       verify_key：〜
   しきい値：2
   投票：
     アセット：965e5c6e-434c-3fa9-b780-c50f43cd955c
     金額：0.00000001 
```

#### <ahref = "https://github.com/fox-one/compound/tree/master/handler/rest/rest.go">残りのAPI </a>は、次のようなアプリケーション層にエクスポートされます。

```

/ market / all //すべての市場に対応
/ transactions //応答複合トランザクション
/ price-requests //価格オラクルの呼び出し 
```

#### 働き手
* <ahref = "https://github.com/fox-one/compound/tree/master/worker/cashier/cashier.go">キャッシャー</a>保留中の転送を処理します。  トランザクションをMixinネットワークに転送する準備をします。
* <ahref = "https://github.com/fox-one/compound/tree/master/worker/syncer/syncer.go"> syncer </a> Mixinネットワークからの出力（UTXO）を同期します。
* [ txsender ](https://github.com/fox-one/compound/tree/master/worker/txsender/sender.go)生のトランザクションをMixinネットワークに転送します。
* [ spentsync ](https://github.com/fox-one/compound/tree/master/worker/spentsync/spentsync.go)は、転送状態を同期して更新します。
* [ priceoracle ](https://github.com/fox-one/compound/tree/master/worker/priceoracle/priceoracle.go)価格を取得し、チェーンに価格を設定します。
* <ahref = "https://github.com/fox-one/compound/tree/master/worker/snapshot/payee.go">受取人</a>は出力を処理し、ビジネスアクションをディスパッチします。

#### アクション処理
* <ahref = "https://github.com/fox-one/compound/tree/master/worker/snapshot/borrow.go">借入</a>は借入アクションイベントを処理します。
* <ahref = "https://github.com/fox-one/compound/tree/master/worker/snapshot/supply.go">供給</a>は供給アクションイベントを処理します。
* <ahref = "https://github.com/fox-one/compound/tree/master/worker/snapshot/supply_pledge.go">誓約</a>は誓約アクションイベントを処理します。
* [ unpledge ](https://github.com/fox-one/compound/tree/master/worker/snapshot/supply_unpledge.go)は、unpledgeアクションイベントを処理します。
* <ahref = "https://github.com/fox-one/compound/tree/master/worker/snapshot/supply_redeem.go">引き換え</a>は引き換えアクションイベントを処理します。
* <ahref = "https://github.com/fox-one/compound/tree/master/worker/snapshot/borrow_repay.go">返済</a>は返済アクションイベントを処理します。
* <ahref = "https://github.com/fox-one/compound/tree/master/worker/snapshot/liquidation.go">清算</a>は清算アクションイベントを処理します
* <ahref = "https://github.com/fox-one/compound/tree/master/worker/snapshot/proposal.go">プロポーザル</a>は、プロポーザルアクションを処理およびディスパッチします。これには、市場の追加、更新が含まれます。 市場、市場の閉鎖または開放、許可リストの追加または削除、撤回
* [ price ](https://github.com/fox-one/compound/tree/master/worker/snapshot/price.go)は、価格プロトコルアクションイベントを処理します。


### 市場貿易-抑制メカニズム

> 特定の市場の価格が異常な場合は、市場を閉じます。

* 市場の価格が悪意を持って攻撃された場合、マネージャーは` close-market </ code>注文を実行し、クローズドマーケット投票を申請する権利があります。  リクエストが承認されると、市場は閉鎖されます。</li>
<li>閉鎖された市場での取引は禁止されています。</li>
<li>ただし、閉鎖された市場がある限り、清算はユーザーのすべての市場口座の流動性に影響を与えるため、すべての市場の清算は禁止されます。</li>
</ul>

<h2 spaces-before="0">複合プロトコルの実装</h2>

<ul>
<li><p spaces-before="0">
<ahref = "https://github.com/fox-one/compound/tree/master/internal/compound/interest_rate_model.go">金利モデル</a>は、複利プロトコルのコア実装です。 </p></li>
<li><p spaces-before="0"><ahref = "https://github.com/fox-one/compound/tree/master/core/borrow.go">借入残高</a>のユーザー借入残高には、借入元本と借入利息が含まれます。  <code>balance = 借り入れ.principal * market.借り入れ_index / 借り入れ.interest_index`</p>

* <ahref = "https://github.com/fox-one/compound/tree/master/service/market/market.go">利息の発生</a>利息の発生は、変化を引き起こす行動がある場合にのみ発生します 供給、借入、誓約、誓約解除、償還、返済、価格更新などの市場取引データ。  そして、同じブロックで一度だけ計算されます。

```
    blockNumberPrior：= market.BlockNumber

    blockNum、e：= s.blockSrv.GetBlock（ctx、time）
    if e！= nil {
        eを返す
    }

    blockDelta：= blockNum-blockNumberPrior
    blockDelta＆gt;の場合0 {
        BorrowRate、e：= s.curBorrowRatePerBlockInternal（ctx、market）
        if e！= nil {
            eを返す
        }

        if market.BorrowIndex.LessThanOrEqual（decimal.Zero）{
            market.BorrowIndex = BorrowRate
        }

        timesBorrowRate：= BorrowRate.Mul（decimal.NewFromInt（blockDelta））
        InterestAccumulated：= market.TotalBorrows.Mul（timesBorrowRate）
        totalBorrowsNew：= InterestAccumulated.Add（market.TotalBorrows）
        totalReservesNew：= InterestAccumulated.Mul（market.ReserveFactor）.Add（market.Reserves）
        BorrowIndexNew：= market.BorrowIndex.Add（timesBorrowRate.Mul（market.BorrowIndex））

        market.BlockNumber = blockNum
        market.TotalBorrows = totalBorrowsNew.Truncate（16）
        market.Reserves = totalReservesNew.Truncate（16）
        market.BorrowIndex = BorrowIndexNew.Truncate（16）
    } 

```