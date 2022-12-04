module.exports = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Pando Lake & 4swap",
      items: [
        "lake/overview",
        {
          type: "category",
          label: "Guide",
          items: ["lake/guide/using-sdk", "lake/guide/invoke-wallets"],
        },
        {
          type: "category",
          label: "API Reference",
          items: [
            "lake/apis/overview",
            "lake/apis/auth",
            "lake/apis/info",
            "lake/apis/stat",
            "lake/apis/pairs",
            "lake/apis/assets",
            "lake/apis/actions",
            "lake/apis/orders",
            "lake/apis/transactions",
          ],
        },
        "lake/design",
        "lake/action-protocol",
        "lake/lake-and-4swap",
      ],
    },
    {
      type: "category",
      label: "Pando Leaf",
      items: [
        "leaf/overview",
        "leaf/design",
        {
          type: "category",
          label: "API Reference",
          items: [
            "leaf/apis/overview",
            "leaf/apis/info",
            "leaf/apis/auth",
            "leaf/apis/assets",
            "leaf/apis/cats",
            "leaf/apis/flips",
            "leaf/apis/vaults",
            "leaf/apis/oracles",
            "leaf/apis/transactions",
            "leaf/apis/actions",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Pando Rings",
      items: ["rings/overview", "rings/design", "rings/guide", "rings/apis"],
    },
    {
      type: "doc",
      label: "Pando Lots",
      id: "lots/intro",
    },
    {
      type: "doc",
      label: "Talkee",
      id:"talkee/intro",
    },
    {
      type: "category",
      label: "Resources",
      items: ["resources/open-source", "resources/examples", "resources/sdk"],
    },
  ],
};
