import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('../../../package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '前端开发实用函数集',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh/docs/': { base: '/zh/docs/', items: sidebarDocs() },
    },

    editLink: {
      pattern: 'https://github.com/micell/micell/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} Alex Chao`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '文档',
      link: '/zh/docs/getting-started',
      activeMatch: '/zh/docs/',
    },
    {
      text: '工具库',
      link: '/zh/utility-libraries/commonly-used',
      activeMatch: '/zh/utility-libraries/',
    },
    {
      text: pkg.version,
      items: [
        {
          text: '更新日志',
          link: 'https://github.com/micell/micell/releases',
        },
        {
          text: '贡献',
          link: 'https://github.com/micell/micell/blob/main/.github/contributing.md',
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
        { text: 'date', link: 'date' },
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

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消',
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
      },
    },
  },
}
