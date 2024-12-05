<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { PhShoppingCart, PhUser } from "@phosphor-icons/vue"
import logo from "/public/images/logo/logo.png"

// Add debug logging
console.log('Logo path:', logo)

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
    <v-app-bar
      :elevation="scrollHeight > 50 ? 4 : 0"
      color="white"
      height="64"
      class="px-4"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="text-decoration-none">
        <v-img
          :src="logo"
          alt="Victory Box"
          max-height="80"
          contain
          class="mx-4"
        />
      </NuxtLink>

      <v-spacer></v-spacer>

      <!-- Navigation Links -->
      <v-btn 
        variant="text"
        to="/"
        class="text-none font-weight-medium"
      >
        Home
      </v-btn>

      <v-btn 
        variant="text"
        to="/products"
        class="text-none font-weight-medium"
      >
        Competitions
      </v-btn>

      <!-- User Account -->
      <v-btn
        icon
        variant="text"
        to="/account"
        class="ml-2"
      >
        <PhUser size="24" />
      </v-btn>

      <!-- Shopping Cart -->
      <v-btn
        icon
        variant="text"
        class="snipcart-checkout ml-2"
      >
        <PhShoppingCart size="24" />
        <v-badge
          :content="0"
          color="primary"
          floating
        >
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