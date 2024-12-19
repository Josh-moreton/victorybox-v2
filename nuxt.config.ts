// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Basic Nuxt configuration
  compatibilityDate: "2024-04-03",
  ssr: true,
  experimental: {
    payloadExtraction: true, // Change to true
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
      // API routes
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
      // Static competition pages - make this more specific
      "/competitions": {
        static: true,
        prerender: true,
      },
      "/competitions/:id": {
        static: true,
        prerender: true,
      },
    },
    serveStatic: true,
    prerender: {
      routes: ["/", "/competitions"],
      crawlLinks: true,
      ignore: ["/api/**"],
    },
  },

  // Lifecycle hooks
  hooks: {
    "nitro:config": async (nitroConfig) => {
      if (nitroConfig.prerender?.routes) {
        try {
          // Fetch products directly from your API
          const response = await fetch(
            "https://strapi.medstack.duckdns.org/api/products"
          );
          const products = await response.json();

          // Add base routes
          nitroConfig.prerender.routes.push("/", "/competitions");

          // Add individual competition routes
          products.data?.forEach((product) => {
            nitroConfig.prerender.routes.push(
              `/competitions/${product.documentId}`
            );
          });
        } catch (error) {
          console.error("Failed to fetch competition routes:", error);
        }
      }
    },
    "build:before": async () => {
      // Fetch and add specific competition routes
      try {
        const { products } = useProducts();
        if (products.value) {
          const competitionRoutes = products.value.map(
            (p) => `/competitions/${p.documentId}`
          );
          nitroConfig.prerender.routes.push(...competitionRoutes);
        }
      } catch (error) {
        console.warn("Failed to fetch competition routes:", error);
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
