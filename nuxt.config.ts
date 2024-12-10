// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/scss/style.scss", "vuetify/lib/styles/main.sass"],
  compatibilityDate: "2024-04-03",
  modules: [
    "vuetify-nuxt-module",
    "nuxt-swiper",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    // "@oku-ui/motion-nuxt",
    // "nuxt-aos",
    // "floating-vue/nuxt",
    "@nuxtjs/strapi",
    "@nuxtjs/snipcart",
  ],
  vuetify: {
    vuetifyOptions: "./vuetify.config.ts",
    moduleOptions: {
      /* module specific options */
      styles: true,
      autoImport: true,
    },
  },
  swiper: {
    prefix: "Swiper",
    styleLang: "css",
    modules: ["autoplay", "navigation", "pagination", "thumbs"],
  },
  strapi: {
    url: process.env.STRAPI_URL || "https://strapi.medstack.duckdns.org",
    prefix: "/api",
    admin: "/admin",
    version: "v5",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  googleFonts: {
    families: {
      Parkinsans: [400, 500, 600, 700, 800],
      Roboto: [100, 300, 400, 500, 700, 900], // Add Roboto with desired weights
    },
  },
  build: {
    transpile: ["vue-countup-v3", "vuetify"],
  },
  alias: {
    "@": "public",
  },
  snipcart: {
    publicApiKey:
      process.env.SNIP_PUBLIC_KEY ||
      "ZTVmZDI0ZWQtMDZjNy00Y2IyLWJlMzMtMzhhY2Q5ZjFjMzk5NjM4Njg4MjA1ODI2NzE1MDEw",
    loadStrategy: "on:visible", // Add this
    version: "3.0",
    currency: "GBP", // Add this
    domain: process.env.SITE_URL || "https://victoryboxes.org",
  },
  vite: {
    esbuild: {
      drop: ["console", "debugger"],
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  nitro: {
    preset: "cloudflare-pages",
    routeRules: {
      "/**": { cors: true },
      "/products/**": { static: true },
      "/api/**": {
        cors: true,
        headers: {
          "Access-Control-Allow-Origin": "https://victoryboxes.org",
          "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        },
        proxy: {
          "/api/": {
            target: "https://strapi.medstack.duckdns.org/api/",
            changeOrigin: true,
          },
        },
      },
      "/competitions/**": {
        static: true,
        swr: false, // Disable stale-while-revalidate
      },
    },
    serveStatic: true,
    prerender: {
      routes: ["/", "/competitions"],
      ignore: [
        "/competitions/[documentId]", // Ignore dynamic route during prerendering
      ],
      crawlLinks: false, // Disable automatic crawling
    },
  },
  hooks: {
    "nitro:config": (nitroConfig) => {
      if (nitroConfig.prerender?.routes) {
        nitroConfig.prerender.routes.push("/competitions");
      }
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css",
        },
      ],
      script: [
        {
          src: "https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js",
          async: true,
        },
      ],
    },
    baseURL: "/",
    buildAssetsDir: "_nuxt/",
  },
  runtimeConfig: {
    strapiUrl: process.env.STRAPI_URL || "https://strapi.medstack.duckdns.org",
    public: {
      strapiUrl:
        process.env.STRAPI_URL || "https://strapi.medstack.duckdns.org",
      siteUrl: process.env.SITE_URL || "https://victoryboxes.org",
      snipcart: {
        publicApiKey:
          process.env.SNIP_PUBLIC_KEY ||
          "ZTVmZDI0ZWQtMDZjNy00Y2IyLWJlMzMtMzhhY2Q5ZjFjMzk5NjM4Njg4MjA1ODI2NzE1MDEw",
      },
    },
  },
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
});