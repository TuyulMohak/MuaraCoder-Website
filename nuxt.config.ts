// https://v3.nuxtjs.org/api/configuration/nuxt.config
// import highlightjs from 'highlight.js'
// const wrap = (code:string, lang:string) => `<pre><code class="hljs ${lang}">${code}</code></pre>`


export default defineNuxtConfig({
  css:['~/app.css'],
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/i18n', 'nuxt-simple-sitemap', 'nuxt-simple-robots'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  robots:{
    siteUrl: 'https://muaracoder.com',
    sitemap: ['https://muaracoder.com/sitemap.xml'],
    indexable:true
  },
  sitemap :{
    siteUrl: 'https://muaracoder.com'
  },
  i18n: {
    /* module options */
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'id',
        iso: 'id',
        name: 'Indonesian',
        file: 'id.json'
      }
    ],  // used in URL path prefix
    defaultLocale: 'en',
    vueI18n : './i18n.config.ts',
    // default locale of your project for Nuxt pages and routings
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    langDir: 'lang',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark'
    }
  }

})
