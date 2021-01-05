module.exports = {
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['script', { src: '//cdn.jsdelivr.net/npm/micell@latest' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Micell',
      description: 'A collection of functions for frontend development'
    },
    '/cn/': {
      lang: 'zh-CN',
      title: 'Micell',
      description: '前端开发实用函数集'
    }
  },
  themeConfig: {
    algolia: {
      apiKey: '29617a193d9f9251776d9ac3ac419b27',
      indexName: 'micell'
    },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on Github',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Docs', link: '/docs/' },
          { text: 'Github', link: 'https://github.com/micell/micell' }
        ]
      },
      '/cn/': {
        label: '简体中文',
        selectText: '语言',
        editLinkText: '在 Github 上编辑此页面',
        lastUpdated: '上次更新',
        nav: [
          { text: '首页', link: '/cn/' },
          { text: '文档', link: '/cn/docs/' },
          { text: 'Github', link: 'https://github.com/micell/micell' }
        ]
      }
    }
  },
  sidebar: [
    '/',
    '/docs'
  ],
  sidebarDepth: 3,
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-144169082-1'
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
}
