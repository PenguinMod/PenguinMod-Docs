// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PenguinMod',
    // tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',
    
    // Set the production url of your site here
    url: 'https://docs.penguinmod.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    trailingSlash: true,
    
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'PenguinMod', // Usually your GitHub org/user name.
    projectName: 'PenguinMod-Docs', // Usually your repo name.
    
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    
    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    routeBasePath: '/',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],
    
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        navbar: {
            title: 'PenguinMod',
            logo: {
                alt: 'PenguinMod Logo',
                src: 'img/favicon.png',
            },
            items: [
                {
                    href: '/blocks/',
                    label: 'Help with Blocks',
                    position: 'left'
                },
                {
                    href: '/extensions/',
                    label: 'Help with Extensions',
                    position: 'left'
                },
                {
                    href: '/development/extensions/',
                    label: 'Custom Extensions',
                    position: 'left'
                },
                {
                    href: '/save-format/core-concepts',
                    label: 'Concepting a new Save File Format',
                    position: 'left'
                },
                {
                    href: 'https://penguinmod.com/',
                    label: 'PenguinMod',
                    position: 'right'
                },
                {
                    href: 'https://github.com/PenguinMod/',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    }),
};

export default config;
