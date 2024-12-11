// vuetify.config.ts
import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#F5F5F5",
          surface: "#FFFFFF",
          primary: "#009688", // Teal
          "primary-darken-1": "#00796B", // Darker Teal
          secondary: "#6200EE", // Previous primary as secondary
          "secondary-darken-1": "#3700B3",
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
          primary: "#80CBC4", // Lighter Teal for dark theme
          "primary-darken-1": "#00796B",
          secondary: "#BB86FC", // Previous dark theme primary
          "secondary-darken-1": "#3700B3",
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
        family: "Parkinsans, Roboto, sans-serif",
      },
    },
  },
});
