---
title: Autorisierung
sidebar_position: zwei
date: 31-07-2021 11:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } from "@site/src/components/api";

Die meisten APIs sind öffentlichen Zugang, aber einige sind nur für authentifizierte Benutzer verfügbar.

Pando Lake und 4swap verwenden das Standard OAuth Protokoll, um Benutzer zu autorisieren.

## POST /oauth

Rufen Sie diese API anstelle von [Mixin Messenger's OAuth API](https://developers.mixin.one/docs/api/oauth/oauth#get-access-token) auf, um das Zugriffstoken mit Code auszutauschen.

<APIEndpoint base="https://api.4swap.org/api" url="/oauth" />

<APIMetaPanel /><APIPayload>{`{ // the code from Mixin Messenger's OAuth "code":       "28fefbf1284d90ceb10bddd517fab2a716f4713ebe3f3299a9fd4d881b4c8b54", // leave "broker_id" and "label" to empty if you don't want to use other brokers. "broker_id":  "", "label":      "" } `}</APIPayload>

<APIRequest title="Zugangs-Token austauschen" method="POST" isPublic base="https://api.4swap.org/api" url='/oauth --data PAYLOAD' />

```json title="Response"
{
  "ts": 1627697766645,
  "data": {
    "scope": "PROFILE:READ ASSETS:READ",
    // the OAuth token
    "token": "..."
  }
}
```

Das Token ist kompatibel mit [Mixin API](https://developers.mixin.one/docs/api/guide). Es ist in Ordnung, Informationen von Mixin API zu erhalten.

