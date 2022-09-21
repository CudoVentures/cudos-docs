// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to Cudos Docs',
  tagline: 'Single source of truth for Cudos products and services',
  url: 'https://docs.cudos.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  plugins: [
    [require.resolve("@cmfcmf/docusaurus-search-local")],
    [
      '@docusaurus-terminology/parser',
      { termsDir: '.docs/terms',
        glossaryFilepath: '.docs/glossary.md',
      }
    ]  
  ]

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Cudos', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Cudo-ventures/cudo-docs/tree/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    // Redocusaurus config
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'docs/build/api/openapi.yaml',
            route: '/api',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Cudos Logo',
          src: 'img/logo.svg',
        },
        items: [
              {
                type: 'doc',
                label: '💻 Node',
                docId: 'node/overview/introduction',
                position: "left",
              },  
              {
                type: 'doc',
                label: '🛠 Build',
                docId: 'build/intro',
                position: "left",
              }, 
              {
                type: 'doc',
                label: '📚 Learn',
                docId: 'learn/introduction/overview',
                position: "left",
               },
               {
                type: 'doc',
                label: '🏦 Governance',
                docId: 'governance/tokens',
                position: "left",
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
                label: 'Telegram',
                href: 'https://t.me/cudostelegram',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/t397SKqf4u',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/CUDOS_',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/cudos'
              },
            ],
          },
        ],
        
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        additionalLanguages: ['rust'],
      },
    }),
};

module.exports = config;
