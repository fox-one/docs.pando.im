---
title: 監査報告書
---

import { Improvement, } from "@site/src/components/admonitions";

<Improvement />

## IOActiveからの監査レポート

### レポートをダウンロードする

[IOActiveからの監査レポート](//docs.pando.im/reports/ioactive-report.pdf)

### 調査結果と修復ステータス

| ID    | タイトル                                        | 総リスク | ステータス |
| ----- | ------------------------------------------- | ---- | ----- |
| MP-07 | Rings - 借入返済取引は、借入残高を変更した後に行うと、失敗する可能性があります | 高    | 修正済   |
| MP-06 | 全般 - 複数の脆弱性を持つ古いWebサーバー                     | 高    | 修正済   |
| MP-01 | 証明書のピン留め不足                                  | 中    |       |
| MP-02 | JailBreakの検出が不足しています                        | 中    |       |
| MP-03 | アプリトランスポートのセキュリティが無効になっています。                | 低    |       |
| MP-04 | バイナリに設定された RPATH                            | 低    |       |
| MP-05 | バイナリユーザーの安全でない API                          | 低    |       |

### 問題分析

**MP-07: Rings -借入残高の変更後、借入返済取引が失敗する場合があります**

この問題は、`Payee.handleRepayEvent()` ロジックが正しくないことが原因で発生します。 詳細については、IOActive監査レポート（p3からp8）をお読みください。

**MP-07: 全般 - 複数の脆弱性を持つ古いWebサーバー**

この問題は、APIエンドポイントを提供する古いWebサーバーが原因で発生します。 詳細については、IOActive監査レポート（p3からp8）をお読みください。

**MP-01: 証明書のピン留め不足**

これは、Mixin Messengerに関連する問題です。

At present, most Apps reply entirely to the certifications that operating system maintains and do not determine which certificate to trust or not. Attackers who break the operating system's trust storage or hack a root CA can set up a man-in-the-middle attack and capture the transmitted data between the App and the server.

Mixin Team and Pando Team are not responsible for ensuring the safety of user's local operating system and the root CA. After discussing with the Mixin Team, we decided to ignore this issue for now.

**MP-02: Insufficient JailBreak Detection**

This is an issue related to the Mixin Messenger iOS.

Mixin Team is not responsible for ensuring the safety of user's local operating system, so they decided to ignore this issue for now.

**MP-03: App Transport Security Disabled**

これは、Mixin MessengerのiOSに関連する問題です。

レポートには、WebViewからの要求に対してATSが無効になっていることが記載されています。 ユーザーはWebViewを使用してHTTPWebページにアクセスできるため、これはアプリの欠陥ではありません。

**MP-04: バイナリで設定されたRPATH**

This issue is very hard to exploit, so the Mixin Team decided to ignore this issue for now.

**MP-05: Binary Users Insecure APIs**

This issue is very hard to exploit, so the Mixin Team decided to ignore this issue for now.

## Audit Reports from LeastAuthority

### レポートをダウンロードする

[最低権限からの監査レポート](//docs.pando.im/reports/least-authority-report.pdf)


### 調査結果と修復ステータス

| ID | タイトル                                                      | ステータス     |
| -- | --------------------------------------------------------- | --------- |
| A  | No Provision to Handle Compromise of Shared MTG Key       | Won't fix |
| B  | セキュリティロードマップは存在しません                                       | 修正されません   |
| C  | プロトコルの仕様がありません                                            |           |
| D  | Secrets Are Shared and Persist in Plain Text              | 修正されません   |
| E  | 認証されていない暗号化モードの使用                                         | 修正されません   |
| F  | Input Not Checked When Adding or Removing PKCS #7 Padding | 修正されません   |
| G  | Excess Centralization                                     |           |

### Responses to Findings

**Finding A: No Provision to Handle Compromise of Shared MTG Key**

In the begining, the purpose of the shared key is to encrypt the memo. In the previous version, Pando Leaf and Rings put `user_id` in the memo, and the shared key is used to encrypt it.

However, to better protect the user's privacy, we upgrade the Mixin Network, that adding `user_id` in the UTXO directly. Now Pando has already remove the `user_id` from the memo so there is no sensitive information in the memo.

プロトコルをより寛容にするために、私たちは暗号化されたメモのサポートを維持します。 ただし、メモにプレーンテキストを使用し、暗号化しないでおくのはまったく問題ありません。 言い換えれば、共有キーはもはや重要ではありません。

**調査結果B：セキュリティロードマップが存在しません**

実際には、セキュリティ関連の計画を含むロードマップがあります。 将来的にロードマップを更新します。

**調査結果C：プロトコル仕様が存在しません**

プロトコルのいくつかの仕様はすでに提供されています。 https://docs.pando.im/developer/intro を確認してください。

将来的には、ここでより多くのドキュメントを提供する予定です。

**調査結果D：秘密は共有され、プレーンテキストで存続します。**

シークレットを管理し、展開環境を安全に保つ独自の方法があります。

**Finding E: Use of Unauthenticated Encryption Mode**

メモの暗号化にはAES-CBCを使用しています。 AES-GCMに切り替えることをお勧めします。 However, because of the explanation of the **Finding A**, Pando decided to ignore this issue.

**Finding F: Input Not Checked When Adding or Removing PKCS #7 Padding**

Same as above.

**Finding G: Excess Centralization**

はい、現時点では、MTGに新しいメンバーを追加したり、既存のメンバーを削除したりすることは困難です。

MTGメンバーの追加と削除を可能にする新しいガバナンスシステムに取り組んでいます。 新しいガバナンス体制は今後も公開される予定です。

