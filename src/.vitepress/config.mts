/*
 * @Author: WuFeng <763467339@qq.com>
 * @Date: 2024-07-12 16:58:17
 * @LastEditTime: 2024-07-12 18:02:23
 * @LastEditors: WuFeng <763467339@qq.com>
 * @Description: 
 * @FilePath: \wufeng\docs\.vitepress\config.mts
 * Copyright 版权声明
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "猿小站",
  description: "猿小站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '书签', link: '/' },
      { text: '归档', link: '/' },
      { text: '关于', link: '/' },
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/likewufeng' }
    ],

    search: {
      provider: 'local'
    }
  },

  outDir: '../docs'
})
