/*
 * @Author: WuFeng <763467339@qq.com>
 * @Date: 2024-07-12 16:58:17
 * @LastEditTime: 2024-07-13 17:18:35
 * @LastEditors: WuFeng <763467339@qq.com>
 * @Description: 
 * @FilePath: \wufeng\src\.vitepress\config.mts
 * Copyright 版权声明
 */
import { SearchPlugin } from "vitepress-plugin-search";

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { plugins: [SearchPlugin({
    previewLength: 62,
    buttonLabel: "搜索",
    placeholder: "搜索文档",
    allow: [],
    ignore: [],
  })] },
  title: "猿小站",
  description: "猿小站",
  head: [
    // ['link', { rel: 'icon', href: '/images/logo.jpg' }]
  ],

  // lang: 'en-US',
  srcDir: '.',
  outDir: '../docs',
  assetsDir: 'assets',
  base: '/wufeng',

  lastUpdated: true,

  themeConfig: {
    logo: '/images/logo.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '书签', link: '/bookmark' },
      { text: '随笔', link: '/essay' },
      { text: '分类',
        items: [
          { text: 'HTML', link: '/categories/blog' },
          { text: 'CSS', link: '/categories/me' },
          { text: 'JavaScript', link: '/categories/me' }
        ]
      },
      // { text: '归档', link: '/archives' },
      { text: '关于',
        items: [
          { text: '关于 Blog', link: '/about/blog' },
          { text: '关于我', link: '/about/me' }
        ]
      },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: {
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '关于 Blog', link: '/about/blog' },
            { text: '关于我', link: '/about/me' }
          ]
        }
      ]
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/likewufeng' }
    ],
    
    i18nRouting: false,
    search: {
      // 本地离线搜索

      provider: "local",

      // 多语言搜索配置

      // options: {
      //   locales: {
      //     /* 默认语言 */

      //     en: {
      //       translations: {
      //         button: {
      //           buttonText: "搜索",

      //           buttonAriaLabel: "搜索文档",

      //         },

      //         modal: {
      //           noResultsText: "无法找到相关结果",

      //           resetButtonTitle: "清除查询结果",

      //           footer: {
      //             selectText: "选择",

      //             navigateText: "切换",

      //           },

      //         },

      //       },

      //     }
      //   }
      // }
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 1991-present Evan You'
    }
  }
})
