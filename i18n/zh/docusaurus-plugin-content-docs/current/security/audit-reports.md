---
title: 审计报告
---

import { Improvement, } from "@site/src/components/admonitions";

<Improvement />

## IOActive 的审计报告

### 下载报告

[IOActive 的审计报告](//docs.pando.im/reports/ioactive-report.pdf)

### 调查结果和补救措施状况

| ID    | 标题                                                                            | 总风险 | 状态  |
| ----- | ----------------------------------------------------------------------------- | --- | --- |
| MP-07 | Rings - Borrow Repayment Transactions May Fail After Modifying Borrow Balance | 高   | 已修复 |
| MP-06 | General - Outdated Web Server with Multiple Vulnerabilities                   | 高   | 已修复 |
| MP-01 | Lack of Certificate Pinning                                                   | 中等  |     |
| MP-02 | Insufficient JailBreak Detection                                              | 中等  |     |
| MP-03 | App Transport Security Disabled                                               | 低   |     |
| MP-04 | RPATH Set in Binary                                                           | 低   |     |
| MP-05 | Binary Users Insecure APIs                                                    | 低   |     |

### 问题分析

**MP-07: Rings - Borrow Repayment Transactions May Fail After Modifying Borrow Balance**

这个问题是由 `Payee.handleRepayEvent()` 的不正确逻辑引起的。 详情请参阅 IOActive 审计报告（第3页至第8页）。

**MP-07: General - Outdated Web Server with Multiple Vulnerabilities**

这个问题是由一个提供API端点的过时Web服务器引起的。 详情请参阅 IOActive 审计报告（第3页至第8页）。

**MP-01: Lack of Certificate Pinning**

这是一个与 Mixin Messenger 相关的问题。

目前，大多数 App 完全信任操作系统的所有有效证书，而不是自行决定是否信任哪个证书。 破坏操作系统信任存储或破解根证书的攻击者可以设置中间人攻击，并捕获应用程序和服务器之间传送的数据。

Mixin团队和Pando团队不负责确保用户的本地操作系统和CA系统的安全。 在与 Mixin Team 讨论之后，我们决定现在忽视这个问题。

**MP-02: Insufficient JailBreak Detection**

这是一个与 Mixin Messenger iOS 相关的问题。

Mixin 团队不负责确保用户的本地操作系统的安全，因此他们现在决定忽略这个问题。

**MP-03: App Transport Security Disabled**

这是一个与 Mixin Messenger iOS 相关的问题。

报告中提到，对于 WebView 中的请求，ATS 选项是禁用的。 这不是应用程序的缺陷，因为用户可以使用 WebView 访问 HTTP 网页。

**MP-04: RPATH Set in Binary**

这个问题很难加以利用，所以 Mixin Team 现在决定无视这个问题。

**MP-05: Binary Users Insecure APIs**

这个问题很难加以利用，所以 Mixin Team 现在决定无视这个问题。

## LeastAuthority 的审计报告

### 下载报告

[LeastAuthority 的审计报告](//docs.pando.im/reports/least-authority-report.pdf)


### 调查结果和补救措施状况

| ID | 标题                                                        | 状态        |
| -- | --------------------------------------------------------- | --------- |
| A  | No Provision to Handle Compromise of Shared MTG Key       | Won't fix |
| B  | Security Roadmap Nonexistent                              | Won't fix |
| C  | Protocol Specifications Nonexistent                       |           |
| D  | Secrets Are Shared and Persist in Plain Text              | Won't fix |
| E  | Use of Unauthenticated Encryption Mode                    | Won't fix |
| F  | Input Not Checked When Adding or Removing PKCS #7 Padding | Won't fix |
| G  | Excess Centralization                                     |           |

### 对调查结果的回应

**Finding A: No Provision to Handle Compromise of Shared MTG Key**

在开始时，共享密钥的目的是加密 memo。 在之前版本中，Pando Leaf 和 Rings 在 memo 中放置 `user_id` ，共享密钥用于加密它。

然而，为了更好地保护用户的隐私，我们升级了 Mixin Network，直接在 UTXO 中添加 `user_id`。 现在 Pando 已经从 memo 中删除了 `user_id` ，因此 memo 中没有敏感信息了。

为了使协议保持兼容，我们依然保持对加密 memo 的支持。 但如果在 memo 中使用不加密的文本，也没有问题。 也就是说，共享密钥不再重要。

**Finding B: Security Roadmap Nonexistent**

实际上，我们有一份带有安全相关计划的路线图。 我们今后将更新路线图。

**Finding C: Protocol Specifications Nonexistent**

我们已经为协议提供了一些 specifications。 请查看 https://docs.pando.im/developer/intro 。

今后，我们将在这里提供更多文档。

**Finding D: Secrets Are Shared and Persist in Plain Text**

我们有自己的方法来管理密钥和保持部署环境的安全。

**Finding E: Use of Unauthenticated Encryption Mode**

我们在 memo 加密中使用了 AES-CBC。 理论上说最好切换到 AES-GCM。 然而，由于 **Finding A**的解释，Pando 决定忽略这个问题。

**Finding F: Input Not Checked When Adding or Removing PKCS #7 Padding**

同上所述

**Finding G: Excess Centralization**

是的，现在很难为 MTG 添加新成员或删除现有成员。

我们正在努力建立一个新的管理制度，以便能够增加和删除 MTG 成员。 今后将推出新的治理制度。

