module.exports = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Pando Lake & 4swap",
      items: [
        'lake/intro',
        {
          type: "category",
          label: "Tutorials",
          items: [
            'lake/tutorials/get-started',
            'lake/tutorials/connect-to-fourswap-using-metamask',
            'lake/tutorials/how-to-use-4swap-by-onekey-wallet',
            'lake/tutorials/providing-liquidity',
            'lake/tutorials/swapping',
            'lake/tutorials/removing-liquidity',
            'lake/tutorials/asset-info-page',
            'lake/tutorials/listing',
          ]
        },
        {
          type: "category",
          label: "Key Concepts",
          items: [
            'lake/key-concepts/lp-token',
            'lake/key-concepts/amm-mechanism',
            'lake/key-concepts/slippage-impernament-loss',
            'lake/key-concepts/mtg',
            'lake/key-concepts/trading-fee',
            'lake/key-concepts/glossary',
          ]
        },
        
      ],
    },
    {
      type: "category",
      label: "Pando Leaf",
      items: [
        'leaf/intro',
        'leaf/pusd',
        {
          type: "category",
          label: "Tutorials",
          items: [
            'leaf/tutorials/get-started',
            'leaf/tutorials/open-vault',
            'leaf/tutorials/manage-vault',
            'leaf/tutorials/generate-more',
            'leaf/tutorials/add-collateral',
            'leaf/tutorials/payback',
            'leaf/tutorials/withdraw',
            'leaf/tutorials/auction-participation',
          ]
        },
        {
          type: "category",
          label: "Key Concepts",
          items: [
            'leaf/key-concepts/vaults',
            'leaf/key-concepts/generate-rules',
            'leaf/key-concepts/liquidation',
            'leaf/key-concepts/price-oracles',
            'leaf/key-concepts/mtg',
            'leaf/key-concepts/pando-seed',
            'leaf/key-concepts/glossary',
          ]
        },
        
      ]
    },
    {
      type: "category",
      label: "Pando Rings",
      items: [
        'rings/intro',
        {
          type: "category",
          label: "Tutorials",
          items: [
            'rings/tutorials/rings-get-started',
            'rings/tutorials/how-to-supply',
            'rings/tutorials/how-to-pledge',
            'rings/tutorials/how-to-unpledge',
            'rings/tutorials/how-to-borrow',
            'rings/tutorials/how-to-repay',
            'rings/tutorials/how-to-withdraw',
            'rings/tutorials/check-market-stats',
            'rings/tutorials/check-tx-history',
            'rings/tutorials/how-to-connect-by-metamask',
          ]
        },
        {
          type: "category",
          label: "Key Concepts",
          items: [
            'rings/key-concepts/rtoken',
            'rings/key-concepts/net-apy',
            'rings/key-concepts/loan-risk-indicator',
            'rings/key-concepts/interest-model',
            'rings/key-concepts/liquidation',
            'rings/key-concepts/supported-crypto',
            'rings/key-concepts/glossary',
          ]
        },
        
      ]
    },
    {
      type: "category",
      label: "Applications",
      items: [
        'apps/wallets',
        'apps/3rd-party',
      ]
    },
    {
      type: "category",
      label: "Security",
      items: [
        'security/overview',
        'security/mtg',
        'security/audit-reports',
      ]
    },

    {
      type: "category",
      label: "FAQs",
      items: [
        {
          type: "category",
          label: "General",
          items: [
              'FAQs/general/how-to-deal-with-mixin-server-encounters-errors-problem',
          ]
        },

        {
          type: "category",
          label: "Pando Lake & 4swap",
          items: [
            'FAQs/lake/how-to-update-lp-token-icon',
            'FAQs/lake/lake-vs-4swap',
            'FAQs/lake/price',
            'FAQs/lake/supported-tokens',
            'FAQs/lake/why-transaction-fail',
            'FAQs/lake/why-providing-liquidity-fail',
            'FAQs/lake/where-can-I-see-liquidity-reward',
          ]
        },

        {
          type: "category",
          label: "Pando Rings",
          items: [
            'FAQs/rings/will-i-lose-supplied-asset',
          ]
        },
      ]
    },
    
    {
      type: "category",
      label: "Community",
      items: [
        'community/support',
        'community/contribute',
        'community/articles',
      ]
    },
  ]
};
    