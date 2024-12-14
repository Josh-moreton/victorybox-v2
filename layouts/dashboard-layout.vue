<template>
  <v-layout>
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer">
      <v-list density="compact" item-props :items="items" nav />

      <template #append>
        <v-list-item
          class="ma-2"
          link
          nav
          prepend-icon="mdi-cog-outline"
          title="Settings"
        />
      </template>
    </v-navigation-drawer>

    <!-- Replace App Bar with Header -->
    <Header :drawer="drawer" @update:drawer="drawer = $event" />

    <!-- Main Content Area -->
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";
import Header from "~/components/Header.vue";

const drawer = ref(true);

const items = ref([
  {
    title: "Dashboard",
    prependIcon: "mdi-view-dashboard-outline",
    to: "/account/account-dashboard",
  },
  {
    title: "My Tickets",
    prependIcon: "mdi-account-group",
    to: "/account/tickets",
  },
  {
    title: "Live Raffle Stream",
    prependIcon: "mdi-briefcase-outline",
    to: "/account/livestream",
  },
  { title: "Calendar", prependIcon: "mdi-calendar", to: "/calendar" },
  { title: "Reports", prependIcon: "mdi-file-chart-outline", to: "/reports" },
]);
</script>

<style scoped>
/* Add any custom styles here */
</style>
