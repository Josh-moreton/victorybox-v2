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

const drawer = ref(false)

  import { shallowRef } from 'vue'


  const items = [
    {
      text: 'Home',
      to: '/'
    },
    {
      text: 'Competitions',
      to: '/competitions'
    },
    {
      text: 'About',
      to: '/about'
    },
    {
      text: 'Contact',    
      to: '/contact'

    },
  ]
</script>

<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" color="primary" disable-resize-watcher>
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :active="i === 0"
          :to="item.to"
          :title="item.text"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="px-md-4">
      <template #prepend>
        <v-app-bar-nav-icon
          v-if="$vuetify.display.smAndDown"
          @click="drawer = !drawer"
        />
      </template>

      <v-img
        class="me-sm-8"
        max-width="40"
        :src="logo"
        />

      <template v-if="$vuetify.display.mdAndUp">
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          :active="i === 0"
          class="me-2 text-none"
          slim
          v-bind="item"
        />
      </template>

      <v-spacer />

      <template #append>
        <v-btn
          class="ms-1"
          color="medium-emphasis"
          icon="mdi-bell-outline"
        />

        <v-btn class="ms-1" icon>
          <v-avatar image="https://cdn.vuetifyjs.com/images/john.png" />

          <v-menu activator="parent" origin="top">
            <v-list>
              <v-list-item link title="Update profile" />

              <v-list-item link title="Sign out" />
            </v-list>
          </v-menu>
        </v-btn>
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
        <v-btn icon variant="text" class="snipcart-checkout ms-2 me-2"
          :color="theme.global.current.value.dark ? 'on-surface' : 'on-background'">
          <PhShoppingCart size="24" />
          <v-badge :content="0" color="primary" floating>
            <span class="snipcart-items-count hidden">0</span>
            <span class="snipcart-total-price hidden">£0.00</span>
          </v-badge>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main height="200">
      <!--  -->
    </v-main>
  </v-layout>
</template>




