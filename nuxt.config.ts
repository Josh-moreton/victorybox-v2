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
    "@nuxtjs/strapi",
    "@nuxt/ui",
    "vuetify-nuxt-module",
    "@nuxtjs/snipcart",
  ],
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
    },
  },
  build: {
    transpile: ["vue-countup-v3"],
  },
  alias: {
    "@": "public",
  },
  snipcart: {
    publicApiKey:
      process.env.SNIP_PUBLIC_KEY ||
      "ZTVmZDI0ZWQtMDZjNy00Y2IyLWJlMzMtMzhhY2Q5ZjFjMzk5NjM4Njg4MjA1ODI2NzE1MDEw",
  },
  vite: {
    esbuild: {
      drop: ["console", "debugger"],
    },
  },
  devtools: { enabled: false },
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
      "/competitions/**": { static: true },
    },
    serveStatic: true,
    prerender: {
      routes: ["/competitions", "/competitions/[documentId]"], // Updated to match route parameter
      crawlLinks: true,
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
  vuetify: {
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#669bbc", // Air superiority blue
            secondary: "#003049", // Prussian blue
            accent: "#c1121f", // Fire brick
            error: "#780000", // Barn red
            background: "#fdf0d5", // Papaya whip
            "on-background": "#003049", // Text color for light theme
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: "#3a86ff", // Azure
            secondary: "#8338ec", // Blue Violet
            accent: "#ff006e", // Rose
            error: "#fb5607", // Orange
            background: "#121212", // Dark background
            surface: "#1E1E1E",
            "on-surface": "#fdf0d5", // Papaya whip for text on surface
            "on-background": "#fdf0d5", // Papaya whip for text on background
          },
        },
      },
    },
    defaults: {
      global: {
        font: {
          family: "Parkinsans",
        },
      },
    },
    customVariables: ["~/assets/scss/variables.scss"],
    treeShake: true,
    defaultAssets: {
      font: {
        family: "Parkinsans",
      },
    },
  },
});
