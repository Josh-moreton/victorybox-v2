// vuetify.config.ts
import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          // Main colors
          primary: "#009688",
          "primary-darken-1": "#00796B",
          "primary-lighten-1": "#4DB6AC",
          secondary: "#6200EE",
          "secondary-darken-1": "#3700B3",
          "secondary-lighten-1": "#BB86FC",

          // Semantic colors
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",

          // Surface colors
          background: "#F5F5F5",
          surface: "#FFFFFF",
          "surface-variant": "#F5F5F5",

          // On-colors for contrast
          "on-primary": "#FFFFFF",
          "on-secondary": "#FFFFFF",
          "on-surface": "#000000",
          "on-background": "#000000",
        },
      },
      dark: {
        dark: true,
        colors: {
          // Main colors
          primary: "#80CBC4",
          "primary-darken-1": "#00796B",
          "primary-lighten-1": "#B2DFDB",
          secondary: "#BB86FC",
          "secondary-darken-1": "#3700B3",
          "secondary-lighten-1": "#D1C4E9",

          // Semantic colors
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",

          // Surface colors
          background: "#121212",
          surface: "#212121",
          "surface-variant": "#1E1E1E",

          // On-colors for contrast
          "on-primary": "#000000",
          "on-secondary": "#000000",
          "on-surface": "#FFFFFF",
          "on-background": "#FFFFFF",
        },
      },
    },
  },
  defaults: {
    // Global defaults
    global: {
      ripple: true,
      font: {
        family: "Parkinsans, sans-serif",
      },
    },
    // Component-specific defaults
    VBtn: {
      variant: "flat", // Default button style
      color: "primary",
      elevation: 0,
      rounded: "sm",
      height: 44,
      // Variants
      variants: {
        nav: {
          variant: "text",
          color: "primary",
          elevation: 0,
          rounded: 0,
          class: "text-none font-weight-medium",
          height: 44,
          minWidth: 96,
        },
        primary: {
          variant: "elevated",
          color: "primary",
          elevation: 2,
          rounded: "lg",
        },
        secondary: {
          variant: "tonal",
          color: "secondary",
          elevation: 0,
          rounded: "lg",
        },
        competition: {
          color: "teal",
          variant: "elevated",
          rounded: "lg",
          elevation: 4,
        },
      },
    },
    VCard: {
      elevation: 2,
      rounded: "lg",
      border: false,
    },
    VChip: {
      size: "default",
      rounded: "pill",
      elevation: 0,
      variants: {
        competition: {
          color: "teal",
          variant: "outlined",
          elevation: 0,
          rounded: "sm",
          size: "x-large",
        },
      },
    },
    VTextField: {
      variant: "outlined",
      color: "primary",
      rounded: "lg",
      hideDetails: "auto",
    },
    VSelect: {
      variant: "outlined",
      color: "primary",
      rounded: "lg",
      hideDetails: "auto",
    },
    VAlert: {
      rounded: "lg",
      variant: "tonal",
      elevation: 2,
    },
    VAppBar: {
      elevation: 2,
      color: "surface",
    },
    VNavigationDrawer: {
      elevation: 2,
      color: "primary", // Updated to use primary color
    },
    VPagination: {
      activeColor: "primary",
      rounded: "circle",
    },
    VProgressLinear: {
      height: 6,
      rounded: true,
    },
    VDivider: {
      color: "surface-variant",
      thickness: 1,
    },
    VTab: {
      variant: "nav", // Inherits from VBtn nav variant
      height: 60,
      class: "text-none",
    },
    VSlider: {
      thumbLabelColor: "black",
      // or use any color from your theme
    },
  },
  display: {
    // Display options
    mobileBreakpoint: "sm",
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  icons: {
    defaultSet: "mdi",
  },
});
