// vuetify.config.ts
import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#219ebcff", // blue-green as primary
          secondary: "#023047ff", // prussian-blue as secondary
          accent: "#fb8500ff", // ut-orange as accent
          error: "#fb8500ff", // ut-orange for errors
          warning: "#ffb703ff", // selective-yellow for warnings
          info: "#8ecae6ff", // sky-blue for info
          success: "#219ebcff", // blue-green for success
          background: "#ffffff",
          surface: "#f8f9fa",
          "on-background": "#023047ff", // prussian-blue for text
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#8ecae6ff", // sky-blue in dark mode
          secondary: "#219ebcff", // blue-green in dark mode
          accent: "#ffb703ff", // selective-yellow in dark mode
          error: "#fb8500ff", // ut-orange in dark mode
          warning: "#ffb703ff", // selective-yellow in dark mode
          info: "#8ecae6ff", // sky-blue in dark mode
          success: "#219ebcff", // blue-green in dark mode
          background: "#121212",
          surface: "#1E1E1E",
          "on-surface": "#8ecae6ff", // sky-blue for text on surface
          "on-background": "#8ecae6ff", // sky-blue for text on background
        },
      },
    },
  },
});
