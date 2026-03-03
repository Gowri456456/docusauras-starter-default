import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GOWRI K',
  tagline: 'Full Stack Developer | AI & IoT Enthusiast',
  favicon: 'img/favicon.ico',

  url: 'https://docusaurus-fork-main-5838d8b.kuberns.cloud',
  baseUrl: '/',

  // GitHub configuration
  organizationName: 'Gowri456456', 
  projectName: 'docusauras-starter-default',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'GOWRI K',
      logo: {
        alt: 'Gowri Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Projects & Skills',
        },
        {to: '/blog', label: 'Experience', position: 'left'},
        {
          href: 'https://github.com/Gowri456456',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/gowri-k-456gowri',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contact Me',
          items: [
            {
              label: 'Email: gowri456k@gmail.com',
              to: 'mailto:gowri456k@gmail.com',
            },
            {
              label: 'Phone: 8015370241',
              to: 'tel:8015370241',
            },
          ],
        },
        {
          title: 'Profiles',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/gowri-k-456gowri',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Gowri456456',
            },
          ],
        },
        {
          title: 'Education',
          items: [
            {
              label: 'Jai Shriram Engineering College',
              to: '#',
            },
            {
              label: 'BE CSE (2023-2027)',
              to: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gowri K. Built with Docusaurus & Kuberns AI.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
