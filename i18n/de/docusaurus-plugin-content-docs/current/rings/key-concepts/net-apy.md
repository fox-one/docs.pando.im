---
title: Net APY
sidebar_position: zwei
date: 04-09-2021 12:33:07
---

import { Verbesserung, } von "@site/src/components/admonitions";

<Improvement msg="better math formula: https://docusaurus.io/docs/markdown-features/math-equations"/>

Die Netto-APY(jährliche prozentuale Rendite) reflektiert die geschätzte jährliche Nettorendite basierend auf der [Versorgungs-APY](./glossary) und [Kredit-APY](./glossary) des Augenblicks. Es zeigt an, ob Sie im aktuellen APYS Geld verdienen oder Geld verlieren.

Net APY = [ ∑(an asset's Supply x its Supply APY) - ∑(an asset's Borrow x its Borrow APY) ] / Total Supply

Zum Beispiel haben Sie zwei Vermögenswerte bereitgestellt: BTC und ET; und Sie haben zwei Vermögenswerte geborgt: [pUSD](/docs/leaf/pusd) und USDC. Ihre Netto-APY des Augenblicks ist:
  {[(BTC Supply * BTC Supply APY) + (ETH Supply * ETH Supply APY)] - [(pUSD Borrow * pUSD Borrow APY) + (USDC Borrow * USDC Borrow APY)]} / (BTC Supply + EtH Supply)
