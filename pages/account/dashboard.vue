<template>
  <div>
    <Header />
    <v-layout>
      <!-- Navigation Drawer -->
      <v-navigation-drawer v-model="drawer" color="teal">
        <v-list density="compact" nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            :prepend-icon="item.prependIcon"
            :title="item.title"
            link
          />
        </v-list>

        <template #append>
          <v-list-item
            class="ma-2"
            link
            nav
            prepend-icon="mdi-logout"
            title="Logout"
            @click="handleLogout"
          />
        </template>
      </v-navigation-drawer>

      <!-- Main Content Area -->
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col>
              <!-- Main Content -->
              <div class="pa-4">
                <component :is="currentComponent" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import MyTickets from "~/components/MyTickets.vue";
import Livestreams from "~/components/LiveStreams.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

// Auth setup
definePageMeta({
  middleware: ["auth"],
});

const route = useRoute();
const { logout } = useStrapiAuth();
const router = useRouter();
const user = useStrapiUser();

// Navigation drawer state
const drawer = ref(true);

// Map routes to components
const routeComponents = {
  "/account/dashboard": MyTickets,
  "/account/dashboard/livestreams": Livestreams,
};

// Navigation items
const items = ref([
  {
    title: "My Tickets",
    prependIcon: "mdi-ticket-outline",
    to: "/account/dashboard",
  },
  {
    title: "Live Raffle Streams",
    prependIcon: "mdi-broadcast",
    to: "/account/dashboard/livestreams",
  },
]);

// Determine which component to show based on route
const currentComponent = computed(() => {
  return routeComponents[route.path] || MyTickets; // Default to MyTickets
});

// Logout handler
const handleLogout = async () => {
  await logout();
  router.push("/auth/login");
};
</script>

<style scoped>
.v-layout {
  min-height: calc(
    100vh - 64px - 72px
  ); /* Adjust for header and footer heights */
  background-color: rgb(var(--v-theme-surface));
}
</style>
