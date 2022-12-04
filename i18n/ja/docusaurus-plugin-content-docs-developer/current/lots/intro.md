---
title: Pando Lots Overview
date: 2022-12-03 14:38:07
---

Pando Lots provides APIs to access communities and conversations based on Mixin Messenger's messages service.

A community is a group of users who share the same interests. A community is identified by a Mixin Digital ID. A community can be public or private. A public community can be joined by anyone. A private community can be joined by invitation or payment.

## How to engage with a community

There are two ways to engage with a community:

### 1. Use Mixin Messenger

- Sign up a Mixin Messenger account. Download Messenger from https://mixin.one/mm and sign up.
- Search the community ID in Mixin Messenger. For example, Pando's community ID is 7000104110, and you can search it by entering 7000104110 in Mixin Messenger.

### 2. Web Access

If the community is public and the owner has enabled the web access, people can access the community via web browsers. [This example](https://fox-one.github.io/pando-lots/?path=/story/pandolots--default) shows how it works.

## Pricing

Pando Lots is free for eligible public communities. For private communities, we charge a monthly fee based on the number of members. Please contact us for details.

## Apply for a community

To apply a community, please follow the steps below:

1. Sign up a Mixin Messenger account. Download Messenger from https://mixin.one/mm and sign up.
2. Leave a message to contact@pando.im, and tell us your Mixin Messenger ID.
3. We will contact you personally and help you create a community.

## Integrate Pando Lots

### Vue

Import

```js
import PandoLots from '@foxone/pando-lots-vue';
import "@foxone/pando-lots-vue/lib/index.css";

Vue.use(PandoLots);
```

In any **.vue file

```html
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
