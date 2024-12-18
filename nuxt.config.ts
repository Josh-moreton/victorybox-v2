// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Basic Nuxt configuration
  compatibilityDate: "2024-04-03",
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },

  // Module imports and configuration
  modules: [
    "vuetify-nuxt-module",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/strapi",
    "@nuxtjs/snipcart",
    "@productdevbook/chatwoot",
  ],

  // Auto-import configuration
  imports: {
    dirs: ["stores", "composables", "types"],
  },

  // UI Framework configuration
  vuetify: {
    vuetifyOptions: "./vuetify.config.ts",
    moduleOptions: {
      styles: true,
      autoImport: true,
    },
  },

  // CMS configuration
  strapi: {
    url: process.env.STRAPI_URL || "https://strapi.medstack.duckdns.org",
    prefix: "/api",
    admin: "/admin",
    version: "v5",
    cookie: {},
    cookieName: "strapi_jwt",
  },

  // Font configuration
  googleFonts: {
    families: {
      Parkinsans: [400, 500, 600, 700, 800],
      Roboto: [100, 300, 400, 500, 700, 900],
    },
  },

  // Build configuration
  build: {
    transpile: ["vue-countup-v3", "vuetify"],
  },
  alias: {
    "@": "public",
  },

  // E-commerce configuration
  snipcart: {
    publicApiKey:
      process.env.SNIP_PUBLIC_KEY ||
      "ZTVmZDI0ZWQtMDZjNy00Y2IyLWJlMzMtMzhhY2Q5ZjFjMzk5NjM4Njg4MjA1ODI2NzE1MDEw",
    loadStrategy: "on:visible",
    version: "3.0",
    currency: "GBP",
    domain: process.env.SITE_URL || "https://victoryboxes.org",
  },

  // Chat widget configuration
  chatwoot: {
    init: {
      websiteToken: "hbak7AA86P1AhGxnMSHEwiLn",
    },
    settings: {
      locale: "en",
      position: "right",
      launcherTitle: "Hello Chat",
    },
    partytown: false,
  },

  // Development tools
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  // Server and deployment configuration
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
        swr: false,
      },
    },
    serveStatic: true,
    prerender: {
      routes: ["/", "/competitions"],
      ignore: ["/competitions/[documentId]"],
      crawlLinks: false,
    },
  },

  // Lifecycle hooks
  hooks: {
    "nitro:config": (nitroConfig) => {
      if (nitroConfig.prerender?.routes) {
        nitroConfig.prerender.routes.push("/competitions");
      }
    },
  },

  // App-wide configuration
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

  // Runtime configuration and environment variables
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
});
