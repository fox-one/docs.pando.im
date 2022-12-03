---
title: Apply for a community
date: 2022-12-03 14:38:07
---

To apply a community, please follow the steps below:

1. Sign up a Mixin Messenger account. Download Messenger from https://mixin.one/mm and sign up.
2. Leave a message to contact@pando.im, and tell us your Mixin Messenger ID.
3. We will contact you personally and help you create a community.

## Pricing

Pando Lots is free for eligible public communities. For private communities, we charge a monthly fee based on the number of members. Please contact us for details.

## Integrate Pando Lots

### Vue

Import

```js
import PandoLots from '@foxone/pando-lots-vue';
import "@foxone/pando-lots-vue/lib/index.css";

Vue.use(PandoLots);
```

In any **.vue file

```js
<pando-lots
  type="card"
  group-id="7000103XX1"
  theme-color="#88E108"
  @error="handleError"
  api-base="https://dev-courses-api.firesbox.com/v1"
  ws-base="wss://dev-courses-ws.firesbox.com"
/>

<pando-lots
  type="button"
  group-id="7000103XX2"
  theme-color="#EE4596"
  @error="handleError"
  api-base="https://dev-courses-api.firesbox.com/v1"
  ws-base="wss://dev-courses-ws.firesbox.com"
/>

<pando-lots
  group-id="7000103XX3"
  theme-color="#88E108"
  api-base="https://dev-courses-api.firesbox.com/v1"
  ws-base="wss://dev-courses-ws.firesbox.com"
>
  <template #activator="{ on }">
    <button v-on="on">
      Custom Entry
    </button>
  </template>
</pando-lots>
```

### Vanilla JS

Please contact us for the setup guide.
