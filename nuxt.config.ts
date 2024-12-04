// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/scss/style.scss"],
  compatibilityDate: "2024-04-03",
  modules: [
    "nuxt-swiper",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@oku-ui/motion-nuxt",
    "nuxt-aos",
    "floating-vue/nuxt",
    "@nuxtjs/strapi"],
  swiper: {
    prefix: "Swiper",
    styleLang: "css",
    modules: ["autoplay", "navigation", "pagination", "thumbs"],
  },
  strapi: {
    url: process.env.STRAPI_URL || 'https://strapi.medstack.duckdns.org',
    prefix: '/api',
    admin: '/admin',
    version: 'v5',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  
  googleFonts: {
    families: {
      "Nunito Sans": [400, 500, 600, 700, 800, 900],
    },
  },
  build: {
    transpile: ["vue-countup-v3"],
  },
  alias: {
    "@": "public",
  },

  vite: {
    esbuild: {
      drop: ["console", "debugger"],
    },
  },
  devtools: { enabled: false },
  nitro: {
    preset: 'cloudflare-pages',
    routeRules: {
      '/**': { cors: true },
      '/products/**': { static: true }, // This is important for Snipcart validation
      '/api/**': {
        cors: true,
        headers: {
          'Access-Control-Allow-Origin': 'https://victoryboxes.org',
          'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
        },
        proxy: {
          '/api/': {
            target: 'https://strapi.medstack.duckdns.org/api/',
            changeOrigin: true
          }
        }
      }
    },
    serveStatic: true
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js',
          async: true
        }
      ]
    },
    baseURL: '/', // Change this to just '/'
    buildAssetsDir: '_nuxt/' // Default is '_nuxt/'
  },
  runtimeConfig: {
    // Server-side environment variables
    strapiUrl: process.env.STRAPI_URL || 'https://strapi.medstack.duckdns.org',
    
    // Public variables that can be used in frontend
    public: {
      strapiUrl: process.env.STRAPI_URL || 'https://strapi.medstack.duckdns.org',
      siteUrl: process.env.SITE_URL || 'https://victoryboxes.org'
    }
  },
  ssr: true,
  experimental: {
    payloadExtraction: false
  }
});