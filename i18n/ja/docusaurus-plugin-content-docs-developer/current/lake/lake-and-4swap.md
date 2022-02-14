---
title: Lakeと4swapを比較する
date: 2021年7月31日15時44分07秒
---

**4swap** は、Mixin TrustedGroupによる分散型流動性およびスワッピングサービスの基盤を提供するオープンプロトコルです。

## 4swap

**4swap Broker** は、ユーザが 4swap プロトコルと対話するためのインターフェイスです。

デフォルトのブローカーは、4swap Mixin Messengerボット(id: 7000103537) です。 リクエストにブローカーIDを指定しない場合、資産、ペア、市場に関するすべての情報、注文はこのブローカーによって応答されます。

https://4swap.orgにアクセスすると、このブローカーのWebインターフェースにアクセスできます。

## Pando Lake

**Pando Lake** は、Pando が主催する 4swap ブローカーです。

Pando Lakeは市場情報をフィルタリングして、流動性が高く、堅実なコミュニティに支えられている選択されたペアと市場のみを表示します。

PandoLakeには個別のMixinMessengerボット（id：7000103937）があり、https：//lake.pando.imにアクセスして、Webインターフェイスにアクセスすることもできます。

LPトークンは、Pando Lakeと4swapの間で共有されます。

### Pando Lakeと統合

Pando Lake のブローカーID は `5db169-d56d-4b5b066-9b0780691b14`で、リクエストで使用されます。

**Lakeに認証する**

`POST /api/oauth`を呼び出してウォレットを承認するときは、2つのパラメーター`broker_id` と `label` を指定する必要があります。`label` は文字列「lake」である必要があります。

**その他のAPI**

パラメータ `broker_id` は、次のAPIリクエストのクエリまたはペイロードに追加する必要があります。

- POST / api / actionsは、PandoLakeに送信できる転送を生成します。
- / api / pairを取得すると、PandoLakeでサポートされているアセットIDを含む whitelists </ code>フィールドで応答します。 </li>
</ul>


