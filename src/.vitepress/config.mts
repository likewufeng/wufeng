/*
 * @Author: WuFeng <763467339@qq.com>
 * @Date: 2024-07-12 16:58:17
 * @LastEditTime: 2024-07-17 20:49:00
 * @LastEditors: WuFeng <763467339@qq.com>
 * @Description: 
 * @FilePath: \wufeng\src\.vitepress\config.mts
 * Copyright 版权声明
 */
import { SearchPlugin } from "vitepress-plugin-search";
import antDesign from 'vite-plugin-imp'

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  plugins: [antDesign({
    lib: 'ant-design-vue',
    style: 'css',
  })],
  vite: { plugins: [SearchPlugin({
    previewLength: 62,
    buttonLabel: "搜索",
    placeholder: "搜索文档",
    allow: [],
    ignore: [],
  })] },
  title: "茶歇小站",
  description: "猿谋人茶歇小站",
  head: [
    ['link', { rel: 'icon', href: 'svg/logo.svg' }]
  ],

  // lang: 'en-US',
  srcDir: '.',
  outDir: '../docs',
  assetsDir: 'assets',
  base: '/wufeng',

  lastUpdated: true,

  themeConfig: {
    logo: '/svg/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '书签', link: '/bookmark' },
      { text: '随笔', link: '/essay/2024/npmrc小记' },
      { text: '分类',
        items: [
          { text: 'HTML', link: '/categories/html' },
          { text: 'CSS', link: '/categories/css' },
          { text: 'JavaScript', link: '/categories/javascript' },
          { text: '历史', link: '/categories/history' }
        ]
      },
      { text: '关于',
        items: [
          { text: '关于 Blog', link: '/about/blog' },
          { text: '关于我', link: '/about/me' }
        ]
      },
      // { text: '示例', link: '/markdown-examples' }
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
      ],
      '/essay/': [
        {
          text: '2024年',
          items: [
            { text: '.npmrc小记', link: '/essay/2024/npmrc小记' },
            { text: 'Vite 开发环境UI框架库加载提速不同UI库的写法', link: '/essay/2024/Vite 开发环境UI框架库加载提速不同UI库的写法' },
            { text: '从0到1开发一个自己的npm包完整过程', link: '/essay/2024/从0到1开发一个自己的npm包完整过程' },
            { text: 'Vite 开发环境UI框架库加载提速不同UI库的写法', link: '/essay/2024/Vite 开发环境UI框架库加载提速不同UI库的写法' },
            { text: '从 Windows 过度到 Mac 必备快捷键对照表', link: '/essay/2024/从 Windows 过度到 Mac 必备快捷键对照表' },
          ]
        }
      ],
      '/categories/': [
        {
          text: 'CSS',
          items: [
            {
              text: 'css实现当文本内容过长时，中间显示省略号...，两端正常显示',
              link: '/categories/css/css实现当文本内容过长时，中间显示省略号...，两端正常显示'
            }
          ]
        },
        {
          text: '历史',
          items: [
            { text: '朝代歌', link: '/categories/history/朝代歌' },
            {
              text: '六朝',
              items: [
                { text: '何为六朝', link: '/categories/history/六朝/何为六朝' },
              ]
            }
          ]
        }
      ],
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
    },

    // aside，设定为false将关闭右侧栏，文档内容会填充剩余空白部分
    aside: true,
    // outline设置为deep可以解析2-6层深度的标题嵌套
    outline: "deep",
    // 暂时没发现这个属性有啥用
    outlineBadges: true,
    // 设置所有aside的标题
    outlineTitle: "目录",
    
  }
})
