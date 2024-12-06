<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTheme } from 'vuetify'
import { PhShoppingCart, PhUser, PhSun, PhMoon } from "@phosphor-icons/vue"

// Define the paths for the logos
const logoLight = '/images/logos/black.png'
const logoDark = '/images/logos/white.png'

// Use Vuetify's theme detection
const theme = useTheme()

// Reactive variable to store the current logos
const logo = computed(() => theme.global.current.value.dark ? logoDark : logoLight)

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const scrollHeight = ref(0)

const handleScroll = () => {
  scrollHeight.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <v-layout>
    <v-app-bar>
      <!-- Logo -->
      <v-img :src="logo" alt="Victory Box" max-height="80" contain class="mx-4" />
      <v-spacer></v-spacer>
      <!-- Navigation Links -->
      <v-btn>Home</v-btn>
      <v-btn>Competitions</v-btn>
      <v-spacer></v-spacer>

      <!-- Theme Toggle -->
      <v-btn icon variant="text" @click="toggleTheme" class="ml-2"
        :text-color="theme.global.current.value.dark ? 'white' : 'black'">
        <PhMoon v-if="theme.global.current.value.dark" size="24" />
        <PhSun v-else size="24" />
      </v-btn>

      <!-- User Account -->
      <v-btn icon variant="text" to="/account" class="ml-2"
        :text-color="theme.global.current.value.dark ? 'white' : 'black'">
        <PhUser size="24" />
      </v-btn>

      <!-- Shopping Cart -->
      <v-btn icon variant="text" class="snipcart-checkout ml-2"
        :color="theme.global.current.value.dark ? 'on-surface' : 'on-background'">
        <PhShoppingCart size="24" />
        <v-badge :content="0" color="primary" floating>
          <span class="snipcart-items-count hidden">0</span>
          <span class="snipcart-total-price hidden">£0.00</span>
        </v-badge>
      </v-btn>

      <v-spacer class="mr-4"></v-spacer>
    </v-app-bar>
  </v-layout>
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

.v-img {
  display: flex;
  align-items: center;
}
</style>