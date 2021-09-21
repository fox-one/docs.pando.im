---
title: Audit Reports
sidebar_position: 3
---

import {
  Improvement,
} from "@site/src/components/admonitions";

<Improvement />


## Audit Reports from IOActive

### Download Report

[Audit report from IOActive](//docs.pando.im/reports/V1.2%20Pando%20Code%20Review%20and%20Penetration%20Test%20with%20Remediation%20Status.pdf)

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

WIP

### Findings and Remediation Status

| ID | Title | Total Risk | Status |
| --- | --- | --- | --- |


### Issue Analysis

WIP

