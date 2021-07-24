const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Pando Docs',
  tagline: 'Pando are cool',
  url: 'https://docs.pando.im',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'fox-one', // Usually your GitHub org/user name.
  projectName: 'docs.pando.im', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Pando Docs',
      logo: {
        alt: 'Pando Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'User Manual',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Development',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/fox-one/pando',
          label: 'GitHub',
          position: 'right',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'User Manual',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/CNS4QQ6w5u',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.pando.im',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/fox-one/pando',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pando`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [
    // '@docusaurus/plugin-google-gtag',
    // [
    //   '@docusaurus/plugin-sitemap',
    //   {
    //     changefreq: 'daily',
    //     priority: 0.5,
    //     trailingSlash: false,
    //   },
    // ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          // You can also use your "G-" Measurement ID here.
          trackingId: 'G-2MWG0DMS9R',
          // Optional fields.
          anonymizeIP: false, // Should IPs be anonymized?
        },
      },
    ],
  ],
};
