// vuetify.config.ts
import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          primary: "#6200EE",
          "primary-darken-1": "#3700B3",
          secondary: "#03DAC6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#121212",
          surface: "#212121",
          primary: "#BB86FC",
          "primary-darken-1": "#3700B3",
          secondary: "#03DAC6",
          "secondary-darken-1": "#018786",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
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
    VBtn: {
      // ... your button defaults
    },
  },
});
