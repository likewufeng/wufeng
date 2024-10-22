import{$ as i,U as a,at as n,S as t}from"./chunks/framework.D38NXrck.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"essay/2024/从0到1开发一个自己的npm包完整过程.md","filePath":"essay/2024/从0到1开发一个自己的npm包完整过程.md","lastUpdated":1721020987000}'),p={name:"essay/2024/从0到1开发一个自己的npm包完整过程.md"};function l(h,s,e,k,r,o){return t(),a("div",null,s[0]||(s[0]=[n(`<p>其实开发一个自己的 npm 包也不难，如果一个东西需要在我们很多项目中复用，那封装成一个公共的 npm 包就是一个很好的方式，也方便统一维护和管理，步骤主要有以下6个步骤：</p><ol><li>注册 npm 账号</li><li>初始化项目</li><li>开发项目</li><li>本地调试</li><li>npm login 登录账号</li><li>npm publish 发布项目</li></ol><h3 id="_1、注册-npm-账号" tabindex="-1">1、注册 npm 账号 <a class="header-anchor" href="#_1、注册-npm-账号" aria-label="Permalink to &quot;1、注册 npm 账号&quot;">​</a></h3><p>直接去 npm 官方网站 <a href="https://link.zhihu.com/?target=https%3A//www.npmjs.com/" target="_blank" rel="noreferrer">https://www.npmjs.com/</a> 注册账号，注册成功了才可以在本地用命令行登录。</p><h3 id="_2、初始化项目" tabindex="-1">2、初始化项目 <a class="header-anchor" href="#_2、初始化项目" aria-label="Permalink to &quot;2、初始化项目&quot;">​</a></h3><p>跟我们平时初始化前端项目一样，直接输入 npm init 初始化项目。注意要发布到 npm 公共仓库里 private 属性要设置为 false，还确保 package.json 中的 name 字段是唯一的，否则发布时会失败，可以自己在 npm 网站上搜索包名或者通过如下命令查看是否已经存在同名包：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm view </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">packageName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>初始化项目配置文件参考：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vant-tree-shaking&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;小程序按需引入vant组件，自动清除项目中未使用的vant组件，减少代码包大小，避免因未使用到的 vant 组件触发隐私协议提交审核时被拒&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;bin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;vant-tree-shaking&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bin/vant-tree-shaking.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;echo </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Error: no test specified</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;repository&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;git&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;git+https://github.com/cafehaus/vant-tree-shaking.git&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;keywords&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;vant&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;tree-shaking&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;miniapp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;wechat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;vue&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cafehaus&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;510878689@qq.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;license&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MIT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;bugs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/cafehaus/vant-tree-shaking/issues&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;homepage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/cafehaus/vant-tree-shaking#readme&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>还有一点需要注意的是配置文件中的版本号 version 里面的值，每次发布的时候只能在前一次的基础上往上增加，否则发布的时候也会失败。</p><h3 id="_3、开发项目" tabindex="-1">3、开发项目 <a class="header-anchor" href="#_3、开发项目" aria-label="Permalink to &quot;3、开发项目&quot;">​</a></h3><p>很多人一想到封装这些就觉得是一件很难的事，其实除了前端中我们经常用到的 ui 组件库，还有很多东西都是可以自己来封装成 npm 包的，哪怕只是一个处理某些数据的 function 函数同样是可以发布成 npm 包的。当然，这里也不推荐大家往 npm 上随便发布一些无意义的包，但是对于我们很多项目中用到的一些自己的公共方法，就完成可以封装成一个自己的 npm 包以便在不同的项目中复用。</p><p>我们常用的大部分 npm 包主要集中在3大类： <em>ui 库，如 element-ui</em> 方法库，如 lodash * 命令行，如 vue cli</p><p>刚开始可以从比较简单的命令行工具入手，就比如上面配置文件中的 <a href="https://link.zhihu.com/?target=https%3A//www.npmjs.com/package/vant-tree-shaking" target="_blank" rel="noreferrer">vant-tree-shaking</a>，所有代码就一个110行的 js 文件，然后设置下 package.json 配置文件中的 bin 字段，这样别人 npm install vant-tree-shaking 安装好包后就可以直接通过命令行来使用这个包了。</p><h3 id="_4、本地调试" tabindex="-1">4、本地调试 <a class="header-anchor" href="#_4、本地调试" aria-label="Permalink to &quot;4、本地调试&quot;">​</a></h3><h3 id="本地设置" tabindex="-1">本地设置 <a class="header-anchor" href="#本地设置" aria-label="Permalink to &quot;本地设置&quot;">​</a></h3><p>先将本地的 npm 包链接到全局，直接在本地 npm 包源码目录下输入命令：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm link</span></span></code></pre></div><p>这样就会在本地的全局 npm 目录中创建一个我们自己的包的符号链接，可以通过 npm list -g 命令来查看是否生效。然后再到需要使用我们的包的项目目录中，输入命令：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm link </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">packageName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>这样项目中就通过上一步设置的全局软链接链接到了我们本地的 npm 开发目录，使用的时候就和项目中的 node_modules 目录下安装的依赖一样的效果。而且直接修改本地的 npm 包源码，项目中使用时也会实时生效，这样对我们本地调试就很方便。</p><h3 id="清理" tabindex="-1">清理 <a class="header-anchor" href="#清理" aria-label="Permalink to &quot;清理&quot;">​</a></h3><p>调试完成后后，我们需要清理掉本地的设置。清理掉全局的软链接，随便在哪终端命令输入：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm unlink </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">package</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>清理项目中使用的全局软链接，在项目的根目录输入：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm unlink </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">package</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="_5、npm-login-登录账号" tabindex="-1">5、npm login 登录账号 <a class="header-anchor" href="#_5、npm-login-登录账号" aria-label="Permalink to &quot;5、npm login 登录账号&quot;">​</a></h3><p>注意在终端中输入 npm login 登录的时候报错或者自动在浏览器中打开了其他网页，一般是因为我们设置了国内 npm 镜像源导致的，当需要发布 npm 包时我们需要切换到官方的仓库才可以发布的，可以通过如下设置：</p><p>查看 npm 配置信息</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm config list</span></span></code></pre></div><p>删除设置的镜像源</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm config delete registry</span></span></code></pre></div><p>设置成 npm 官方地址</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm config set registry https:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">registry.npmjs.org</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span></code></pre></div><p>根据提示输入账号、密码、邮箱和 One Time Password 密码登录，登录成功了会在控制台提示你。</p><h3 id="_6、npm-publish-发布项目" tabindex="-1">6、npm publish 发布项目 <a class="header-anchor" href="#_6、npm-publish-发布项目" aria-label="Permalink to &quot;6、npm publish 发布项目&quot;">​</a></h3><p>登录成功后，接着输入 npm punlish 就可以发布项目了，成功后也会有相应提示，然后邮箱里也会收到一封发布成功的邮件。</p>`,37)]))}const g=i(p,[["render",l]]);export{E as __pageData,g as default};
