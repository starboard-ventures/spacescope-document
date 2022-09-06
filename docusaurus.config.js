// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SpaceScope',
  tagline: 'SpaceScope are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'StarBoard', // Usually your GitHub org/user name.
  projectName: 'SpaceScope Document', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'fa'],
  //   path: 'i18n',
  //   localeConfigs: {
  //     en: {
  //       label: 'English',
  //       direction: 'ltr',
  //       htmlLang: 'en-US',
  //       calendar: 'gregory',
  //       path: 'en',
  //     },
  //     fa: {
  //       label: 'فارسی',
  //       direction: 'rtl',
  //       htmlLang: 'fa-IR',
  //       calendar: 'persian',
  //       path: 'fa',
  //     },

  //   },
  // },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      // '@docusaurus/preset-classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/starboard-ventures/spacescope-document/tree/main',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: false, // 可选：禁用博客插件
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SpaceScope',
        hideOnScroll: true,
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'API Documentation',
          },
          {
            href: 'https://github.com/starboard-ventures/spacescope-document/tree/main',
            className: "sign-in-link",
            position: 'right',
          },
          {
            href: 'https://github.com/starboard-ventures/spacescope-document/tree/main',
            className: "header-github-link",
            "title": "GitHub",
            position: 'right',
          },
          {
            href: 'https://twitter.com/Starboard_V',
            className: "header-twitter-link",
            "title": "Twitter",
            position: 'right',
          },
          {
            href: 'https://observablehq.com/@starboard/starboard-filecoin-data-index',
            className: "header-observable-link",
            "title": "ObservableHQ",
            position: 'right',
          },
          {
            href: 'https://dashboard.starboard.ventures/',
            className: "header-dashboard-link",
            "title": "Network Health Dashboard",
            position: 'right',
          },
          {
            href: 'https://filecoinproject.slack.com/archives/C03Q3K96BQU',
            className: "header-slack-link",
            "title": "Slack",
            position: 'right',
          },
        ],
      },
      // 
      footer: {
        // style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} SpaceScope, Inc. Built with <a href='https://www.starboard.ventures/' target='blank'>Starboard</a>.`,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        // respectPrefersColorScheme: true,

      }
    }),
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/'
      },
    ],
  ],

};

module.exports = config;
