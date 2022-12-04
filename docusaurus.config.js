const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Pando Docs',
  tagline: 'Pando offers comprehensive easy-to-use Decentralized finance(DeFi) services, built with blockchain-based MTG technology.',
  url: 'https://docs.pando.im',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'fox-one', // Usually your GitHub org/user name.
  projectName: 'docs.pando.im', // Usually your repo name.
  clientModules: [
    require.resolve('./global.js')
  ],
  themeConfig: {
    algolia: {
      appId: '0XB9T9DWRQ',
      apiKey: 'af8efe9519e5a1456dab4d50dc314666',
      indexName: 'pando',
      contextualSearch: true,
    },
    navbar: {
      title: 'Pando Docs',
      hideOnScroll: false,
      logo: {
        alt: 'Pando Docs',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Manuals',
        },
        {
          to: '/developer/intro',
          label: 'Developer',
          position: 'left',
          activeBaseRegex: `/developer/`,
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: '//docs.pando.im/docs/community/contribute#translation',
              label: 'Help us translate',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ek45g3Cymd',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pando_im',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/fox-one/docs.pando.im/',
            },
            {
              href: 'https://pando.im',
              label: 'Pando.im',
            },
          ],
        },
      ],
      copyright: `Copyright © 2020 - Present, Pando`,
    },
    prism: {
      theme: darkCodeTheme,
      darkTheme: darkCodeTheme,
    },
    // not working, so i write script in global.js
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'developer',
        path: 'developer',
        routeBasePath: 'developer',
        editCurrentVersion: false,
        sidebarPath: require.resolve('./sidebar.developer.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
      },
    ],
    'docusaurus-plugin-sass'
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      ja: {
        label: '日本語',
      },
      zh: {
        label: '中文',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebar.docs.js'),
          breadcrumbs: true,
          showLastUpdateTime: false,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/theme.scss'), ],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-YR2JHZK1KK',
        },
      },
    ],
  ],
};
