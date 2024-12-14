<template>
  <DashboardLayout>
    <div class="pa-4">
      <v-sheet
        border="dashed md"
        color="surface-light"
        height="500"
        rounded="lg"
        width="100%"
      >
        <!-- Your dashboard-specific content here -->
        <h1>Welcome to the Live Raffle Stream!</h1>
        <p>Nothing here yet, come back on Friday for prizes.</p>
      </v-sheet>
    </div>
  </DashboardLayout>
</template>

<script setup>
// Import the layout
import DashboardLayout from "./layouts/dashboard-layout.vue";
// Add auth middleware to protect the route
definePageMeta({
  middleware: ["auth"],
});
</script>
