import{R as i}from"./chunks/theme.BNQbhL3B.js";import{ak as o,au as u,av as l,aw as c,ax as f,ay as d,az as m,aA as h,aB as A,aC as g,aD as v,d as w,a0 as y,o as C,h as P,aE as R,aF as E,aG as b,l as S}from"./chunks/framework.D38NXrck.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),T=w({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=y();return C(()=>{P(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&R(),E(),b(),s.setup&&s.setup(),()=>S(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=F(),a=x();a.provide(l,e);const t=c(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function x(){return A(T)}function F(){let e=o,a;return g(t=>{let n=v(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{D as createApp};
