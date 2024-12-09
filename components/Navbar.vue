<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useTheme } from "vuetify";
import { PhShoppingCart, PhUser, PhSun, PhMoon } from "@phosphor-icons/vue";

// Define the paths for the logos
const logoLight = "/images/logos/black.png";
const logoDark = "/images/logos/white.png";

// Use Vuetify's theme detection
const theme = useTheme();

// Reactive variable to store the current logos
const logo = computed(() =>
  theme.global.current.value.dark ? logoDark : logoLight
);

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

const toggleCart = () => {
  if (window.Snipcart) {
    if (window.Snipcart.store.getState().cart.opened) {
      window.Snipcart.api.theme.close();
    } else {
      window.Snipcart.api.theme.open();
    }
  }
};

const scrollHeight = ref(0);

const handleScroll = () => {
  scrollHeight.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const drawer = ref(false);
</script>

<template>
  <v-navigation-drawer v-model="drawer" color="teal" disable-resize-watcher>
    <v-list nav>
      <v-list-item to="/" title="Home" />
      <v-list-item to="/competitions" title="Competitions" />
    </v-list>
  </v-navigation-drawer>

  <v-app-bar app scroll-behavior="elevate" class="px-4 px-md-8" :height="$vuetify.display.smAndDown ? 64 : 100">
    <!-- Mobile Menu Icon -->
    <template #prepend>
      <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="drawer = !drawer" class="me-2" />
    </template>

    <!-- Logo -->
    <NuxtLink to="/">
      <v-img :src="logo" alt="Victory Box" :max-height="$vuetify.display.smAndDown ? '60' : '80'"
        :max-width="$vuetify.display.smAndDown ? '120' : '160'" :min-width="$vuetify.display.smAndDown ? '100' : '120'"
        contain class="me-4 me-sm-8" />
    </NuxtLink>
    <v-spacer />

    <!-- Desktop Navigation -->
    <template v-if="$vuetify.display.mdAndUp">
      <v-btn to="/" class="me-2 text-none" slim>Home</v-btn>
      <v-btn to="/Competitions" class="me-2 text-none" slim>Competitions</v-btn>
      <v-btn to="/Winners" class="me-2 text-none" slim>Winners</v-btn>
      <v-btn to="/About" class="me-2 text-none" slim>About</v-btn>
    </template>

    <v-spacer />

    <!-- Theme and User Controls -->
    <template #append>
      <v-btn icon variant="text" @click="toggleTheme" class="ms-2"
        :text-color="theme.global.current.value.dark ? 'white' : 'black'">
        <PhMoon v-if="theme.global.current.value.dark" size="24" />
        <PhSun v-else size="24" />
      </v-btn>

      <v-btn icon variant="text" to="/account" class="ms-2"
        :text-color="theme.global.current.value.dark ? 'white' : 'black'">
        <PhUser size="24" />
      </v-btn>

      <!-- Shopping Cart -->
      <v-btn icon variant="text" class="snipcart-checkout ms-2 me-2" :color="theme.global.current.value.dark ? 'on-surface' : 'on-background'
        " @click.prevent="toggleCart">
        <PhShoppingCart size="24" />
        <v-badge :content="0" color="teal" floating>
          <span class="snipcart-items-count hidden">0</span>
          <span class="snipcart-total-price hidden">£0.00</span>
        </v-badge>
      </v-btn>
    </template>
  </v-app-bar>

  <v-main>
    <slot></slot>
  </v-main>
</template>

<style scoped>
.hidden {
  display: none;
}

:deep(.v-btn) {
  text-transform: none;
  letter-spacing: 0;
}

.v-app-bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

/* Adjust logo size for taller navbar */
.v-img {
  display: flex;
  align-items: center;
  height: auto;
}

@media (max-width: 600px) {
  .v-img {
    min-width: 100px;
    max-width: 120px;
  }
}
</style>
