import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GOWRI K',
  // Enhanced tagline with a more "dynamic" feel
  tagline: 'Crafting the future with Code, Intelligence, and Connected Things.',
  favicon: 'OIP.png',

  url: 'https://docusaurus-fork-main-5838d8b.kuberns.cloud',
  baseUrl: '/',

  organizationName: 'Gowri456456', 
  projectName: 'Gowri-Portfolio',

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
          // Added an "edit this page" feel for a more open-source vibe
          editUrl: 'https://github.com/Gowri456456/Gowri-Portfolio/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Tech Insights',
          blogDescription: 'Thoughts on AI, IoT, and Web Development',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Custom metadata for better SEO and social sharing
    metadata: [
      {name: 'keywords', content: 'fullstack, AI, IoT, developer, portfolio, BE CSE'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    // High-tech color mode defaults
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'GOWRI.DEV', // Short, punchy brand name
      hideOnScroll: true, // Unique UX behavior
      logo: {
        alt: 'Gowri Logo',
        src: 'OIP.png',
        style: { borderRadius: '50%' }, // Circle logo looks more modern
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '🚀 Projects',
        },
        {to: '/blog', label: '✍️ Blog', position: 'left'},
        {
          href: 'https://github.com/Gowri456456',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          label: 'GitHub',
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
          title: 'Connect',
          items: [
            { label: 'Email', href: 'mailto:gowri456k@gmail.com' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gowri-k-456gowri' },
            { label: 'GitHub', href: 'https://github.com/Gowri456456' },
          ],
        },
        {
          title: 'Academic Path',
          items: [
            { label: 'Jai Shriram Engineering College', to: '#' },
            { label: 'BE CSE | 2023 - 2027', to: '#' },
          ],
        },
        {
          title: 'Focus Areas',
          items: [
            { label: 'Artificial Intelligence', to: '#' },
            { label: 'Internet of Things', to: '#' },
            { label: 'Full Stack Dev', to: '#' },
          ],
        },
      ],
      // Use a template literal for a cleaner copyright
      copyright: `// ${new Date().getFullYear()} • Handcrafted by Gowri K using Docusaurus`,
    },
    prism: {
      // Using 'Night Owl' or 'Dracula' for that "Hacker" aesthetic
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
