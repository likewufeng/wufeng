/*
 * @Author: WuFeng <763467339@qq.com>
 * @Date: 2024-07-15 13:54:56
 * @LastEditTime: 2024-07-15 15:40:57
 * @LastEditors: WuFeng <763467339@qq.com>
 * @Description: 
 * @FilePath: \wufeng\src\.vitepress\theme\index.js
 * @Copyright 版权声明
 */
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // 可以在这里全局引入Ant Design组件
    app.use(Antd)
  }
}