module.exports = {
  title: 'Micell',
  description: 'A collection of functions for web development',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
      {
        text: 'Languages',
        items: [
          { text: 'English', link: '/' },
          { text: '简体中文', link: '/cn/' }
        ]
      },
      { text: 'Github', link: 'https://github.com/Alex1990/micell' }
    ],
    serviceWorker: {
      updatePopup: true
    }
  },
  sidebar: [
    '/',
    '/docs'
  ],
  sidebarDepth: 3,
  serviceWorker: true
}
