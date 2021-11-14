---
title: Info lesen
sidebar_position: zwei
date: 30-09-2021 23:18:01
---

import { APIMetaPanel, APIRequest, APIEndpoint, APIParams, APIPayload, } von "@site/src/components/api";


## MTG Info lesen

### GET /info

Diese API wird die MTG-Informationen von Pando Leaf beantworten.

````mdx-code-block
:::info
Du kannst die Antwort speichern, um sie später zu verwenden, da sich die MTG-Informationen nicht oft ändern würden.
:::
````

<APIEndpoint base="https://leaf-api.pando.im/api" url="/info" />

<APIMetaPanel />

<APIRequest title="MTG Info lesen" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/info' />

```json title="Response"
{
  "ts": 1633139812299,
  "data": {
    "oauth_client_id": "75f18fe8-b056-46d6-9c48-0214425e58ce",
    "members": [
      "75f18fe8-b056-46d6-9c48-0214425e58ce",
      "e96c26ca-666a-417b-9731-112d48725cca",
      "1265e53d-3642-484c-9f3d-b8616606fd6d",
      "db33b0c9-2e64-4aed-98b4-4d0b1d6a2826",
      "04601cb1-6691-4666-b4d8-720172c3a7d9",
      "d2d4399d-669d-4448-89f6-d65805e62fb7"
    ],
    "threshold": 4,
    "public_key": "mCNrmLpdwJ9zk5GsNL/ot9YXOSrCndx1ZFAiLHZxnMI="
  }
}
```

## Serverzeit lesen

### GET /time

Diese API reagiert die Serverzeit von Pando Leaf.

<APIEndpoint base="https://leaf-api.pando.im/api" url="/time" />

<APIMetaPanel />

<APIRequest title="Serverzeit lesen" method="GET" isPublic base="https://leaf-api.pando.im/api" url='/time' />

```json title="Response"
{
  "ts": 1633139971226,
  "data": {
    "iso": "2021-10-02T01:59:31Z",
    "epoch": 1633139971
  }
}
```