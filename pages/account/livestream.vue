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
        <h1>Welcome to the Account Dashboard!</h1>
        <p>Here you can manage your account settings and view reports.</p>
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
