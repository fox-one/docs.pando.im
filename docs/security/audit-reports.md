---
title: Audit Reports

---

import {
  Improvement,
} from "@site/src/components/admonitions";

<Improvement />

## Audit Reports from IOActive

### Download Report

[Audit report from IOActive](//docs.pando.im/reports/ioactive-report.pdf)

### Findings and Remediation Status

| ID | Title | Total Risk | Status |
| --- | --- | --- | --- |
| MP-07 | Rings - Borrow Repayment Transactions May Fail After Modifying Borrow Balance | High | Fixed |
| MP-06 | General - Outdated Web Server with Multiple Vulnerabilities | High | Fixed |
| MP-01 | Lack of Certificate Pinning | Medium |  |
| MP-02 | Insufficient JailBreak Detection | Medium |  |
| MP-03 | App Transport Security Disabled | Low |  |
| MP-04 | RPATH Set in Binary | Low |  |
| MP-05 | Binary Users Insecure APIs | Low |  |

### Issue Analysis

**MP-07: Rings - Borrow Repayment Transactions May Fail After Modifying Borrow Balance**

This issue is caused by an incorrect logic in `Payee.handleRepayEvent()`. Please read IOActive audit report (from p3 to p8) for more details.

**MP-07: General - Outdated Web Server with Multiple Vulnerabilities**

This issue is caused by an outdated web server that provides API endpoints. Please read IOActive audit report (from p3 to p8) for more details.

**MP-01: Lack of Certificate Pinning**

This is an issue related to the Mixin Messenger.

At present, most Apps reply entirely to the certifications that operating system maintains and do not determine which certificate to trust or not. Attackers who break the operating system's trust storage or hack a root CA can set up a man-in-the-middle attack and capture the transmitted data between the App and the server.

Mixin Team and Pando Team are not responsible for ensuring the safety of user's local operating system and the root CA. After discussing with the Mixin Team, we decided to ignore this issue for now.

**MP-02: Insufficient JailBreak Detection**

This is an issue related to the Mixin Messenger iOS.

Mixin Team is not responsible for ensuring the safety of user's local operating system, so they decided to ignore this issue for now.

**MP-03: App Transport Security Disabled**

This is an issue related to the Mixin Messenger iOS.

In the report, it mentions that ATS is disabled for requests from WebView. It's not a flaw of App because the users are allowed to use the WebView to visit HTTP webpages.

**MP-04: RPATH Set in Binary**

This issue is very hard to exploit, so the Mixin Team decided to ignore this issue for now.

**MP-05: Binary Users Insecure APIs**

This issue is very hard to exploit, so the Mixin Team decided to ignore this issue for now.

## Audit Reports from LeastAuthority

### Download Report

[Audit Report from Least Authority](//docs.pando.im/reports/least-authority-report.pdf)


### Findings and Remediation Status

| ID   | Title                                                     | Status     |
| ---- | --------------------------------------------------------- | ---------- |
| A    | No Provision to Handle Compromise of Shared MTG Key       | Won't fix |
| B    | Security Roadmap Nonexistent                              | Won't fix |
| C    | Protocol Specifications Nonexistent                       |        |
| D    | Secrets Are Shared and Persist in Plain Text              | Won't fix |
| E    | Use of Unauthenticated Encryption Mode                    | Won't fix |
| F    | Input Not Checked When Adding or Removing PKCS #7 Padding | Won't fix |
| G    | Excess Centralization                                     |  |

### Responses to Findings

**Finding A: No Provision to Handle Compromise of Shared MTG Key**

In the begining, the purpose of the shared key is to encrypt the memo. In the previous version, Pando Leaf and Rings put `user_id` in the memo, and the shared key is used to encrypt it.

However, to better protect the user's privacy, we upgrade the Mixin Network, that adding `user_id` in the UTXO directly. Now Pando has already remove the `user_id` from the memo so there is no sensitive information in the memo.

To make the protocol more campatible, we keep the support of the encrypted memo. But it's totally fine to use plain-text in memo and leave it unencrypted. In another word, the shared key is not important anymore.

**Finding B: Security Roadmap Nonexistent** 

Actually we have a Roadmap with security related plans. We will update the roadmap in the future.

**Finding C: Protocol Specifications Nonexistent** 

We have already provided some specifications for the protocol. Please check them out https://docs.pando.im/developer/intro.

In the future, we will provide more documentation here.

**Finding D: Secrets Are Shared and Persist in Plain Text**

We have own way to manage the secrets and keep the deployment environment secure.

**Finding E: Use of Unauthenticated Encryption Mode**

We are using AES-CBC in the memo encryption. It's better to switch to AES-GCM. However, because of the explanation of the **Finding A**, Pando decided to ignore this issue.

**Finding F: Input Not Checked When Adding or Removing PKCS #7 Padding**

Same as above.

**Finding G: Excess Centralization** 

Yes, right now, it is hard to add new members to the MTG or remove the existed. 

We are working on a new governance system to make it possible to add and remove MTG members. The new governance system will be released in the future.

