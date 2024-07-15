## antdv config[](https://buqiyuan.github.io/essay/2022/Vite开发环境UI框架库加载提速不同UI库的写法.html#antdv-config)

js

```javascript
//vite.config.js plugins节点加入
{
    name: 'dev-auto-import-antdv',
    transform(code, id) {
        if (/src\/main.js$/.test(id)) {
            let result = code.split('\n')
            // 解决首次加载isCustomElement的问题
            result.splice(result.length - 2, 0, `import Antd from 'ant-design-vue';import 'ant-design-vue/dist/antd.less';app.use(Antd);`)
            return {
                code: result.join('\n'),
                map: null
            }
        }
    },
    apply: 'serve'
}
```

## elemenet-plus config[](https://buqiyuan.github.io/essay/2022/Vite开发环境UI框架库加载提速不同UI库的写法.html#elemenet-plus-config)

js

```javascript
//vite.config.js plugins节点加入
{
    name: 'dev-auto-import-element-plus',
    transform(code, id) {
        if (/src\/main.js$/.test(id)) {
        let result = code.split('\n')
        // 解决首次加载isCustomElement的问题
        result.splice(result.length - 2, 0, `import ElementPlus from 'element-plus';import 'element-plus/theme-chalk/src/index.scss';app.use(ElementPlus);`)
        return {
            code: result.join('\n'),
            map: null
            }
        }
    },
    apply: 'serve'
}
```

## arco-design config[](https://buqiyuan.github.io/essay/2022/Vite开发环境UI框架库加载提速不同UI库的写法.html#arco-design-config)

js

```javascript
//vite.config.js plugins节点加入
{
    name: 'dev-auto-import-arco',
        transform(code, id)
    {
        if (/src\/main.js$/.test(id)) {
            let result = code.split('\n')
            // 解决首次加载isCustomElement的问题
            result.splice(result.length - 2, 0, `import ArcoVue from '@arco-design/web-vue';import '@arco-design/web-vue/es/index.less';app.use(ArcoVue);`)
            return {
                code: result.join('\n'),
                map: null,
            }
        }
    },
    apply: 'serve',
}
```