import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes } from 'prism-react-renderer';

const config: Config = {
  title: 'CS Demo Manager',
  tagline: 'Companion application for your Counter-Strike demos.',
  favicon: 'img/favicon.ico',

  url: 'https://cs-demo-manager.com',
  baseUrl: '/',

  organizationName: 'akiver',
  projectName: 'cs-demo-manager',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sidebarItems.filter((item) => {
              // @ts-ignore
              return item.id !== 'introduction';
            });
          },
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'CS Demo Manager',
      logo: {
        alt: 'CS Demo Manager',
        src: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'download/',
          activeBasePath: 'download',
          label: 'Download',
          position: 'left',
        },
        {
          to: 'changelog',
          label: 'Changelog',
          position: 'left',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/akiver/cs-demo-manager',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://twitter.com/CSGODemoManager',
          position: 'right',
          className: 'header-twitter-link',
          'aria-label': 'CS:DM Twitter account',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {},
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
    metadata: [
      {
        name: 'keywords',
        content:
          'CS, CSGO, CS:GO, CS2, demos, manager, dem, .dem, replay, replays, Counter-Strike, Global Offensive, Counter-Strike 2, GO, counter strike, software, application, app, ESEA, eBot, FaceIt, CEVO, PopFlash',
      },
      {
        name: 'author',
        content: 'AkiVer',
      },
    ],

    algolia: {
      appId: 'BS3WMY8SEV',
      apiKey: '1d35305514314e630daabcda039559d3',
      indexName: 'crawler_cs-demo-manager',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
