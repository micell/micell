import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'

export const shared = defineConfig({
  title: 'Micell',

  rewrites: {
    'en/:rest*': ':rest*',
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        },
      },
    ],
  },

  sitemap: {
    hostname: 'https://micell.org',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    },
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['script', { src: '//cdn.jsdelivr.net/npm/micell@latest' }],
    ['meta', { name: 'theme-color', content: '#4db350' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Micell | A collection of functions for frontend development' }],
    ['meta', { property: 'og:site_name', content: 'Micell' }],
    ['meta', { property: 'og:image', content: 'https:/micell.org/images/logo_48x48.png' }],
    ['meta', { property: 'og:url', content: 'https://micell.org/' }],

    // Google Analytics
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-8VWNLHG1B8' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8VWNLHG1B8');`
    ]
  ],

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },

    socialLinks: [{ icon: 'github', link: 'https://github.com/micell/micell' }],

    search: {
      provider: 'algolia',
      options: {
        appId: '16IKHJK8YM',
        apiKey: '5b8d8fdc6d6d25f7099a757153628df6',
        indexName: 'micell',
        locales: {
          ...zhSearch,
        },
      },
    },
  },
})
