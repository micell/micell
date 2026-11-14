import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('../../../package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'A collection of functions for frontend development',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/docs/': { base: '/docs/', items: sidebarDocs() },
    },

    editLink: {
      pattern: 'https://github.com/micell/micell/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2017-present Alex Chao',
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Docs',
      link: '/docs/getting-started',
      activeMatch: '/docs/',
    },
    {
      text: 'Utility Libraries',
      link: '/utility-libraries/commonly-used',
      activeMatch: '/utility-libraries/',
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/micell/micell/releases',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/micell/micell/blob/main/.github/CONTRIBUTING.md',
        },
      ],
    },
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is Micell?', link: 'what-is-micell' },
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Upgrading from 0.x', link: 'upgrading' },
      ],
    },
    {
      text: 'API Reference',
      collapsed: false,
      items: [
        { text: 'base64', link: 'base64' },
        { text: 'char', link: 'char' },
        { text: 'cookie', link: 'cookie' },
        { text: 'date', link: 'date' },
        { text: 'dom', link: 'dom' },
        { text: 'easing', link: 'easing' },
        { text: 'emitter', link: 'emitter' },
        { text: 'lang', link: 'lang' },
        { text: 'path', link: 'path' },
        { text: 'qs', link: 'qs' },
        { text: 'string', link: 'string' },
        { text: 'ua', link: 'ua' },
        { text: 'url', link: 'url' },
        { text: 'global', link: 'global' },
      ],
    },
  ]
}
