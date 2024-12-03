// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/scss/style.scss"],
  compatibilityDate: "2024-04-03",
  modules: ["nuxt-swiper", "@nuxt/image", "@nuxtjs/google-fonts", "@vueuse/nuxt", "@oku-ui/motion-nuxt", "nuxt-aos", "floating-vue/nuxt"],
  swiper: {
    prefix: "Swiper",
    styleLang: "css",
    modules: ["autoplay", "navigation", "pagination", "thumbs"],
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
    }
  }
});
