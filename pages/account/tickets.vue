<template>
  <DashboardLayout>
    <div class="pa-4">
      <v-sheet
        border="outlined"
        color="surface"
        rounded="lg"
        width="100%"
        class="pa-4"
      >
        <MyTickets />
      </v-sheet>
    </div>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from "./layouts/dashboard-layout.vue";
import MyTickets from "~/components/MyTickets.vue";

// Add auth middleware to protect the route
definePageMeta({
  middleware: ["auth"],
});
</script>

<style scoped>
.v-sheet {
  min-height: calc(100vh - 150px); /* Adjust for header/footer */
}
</style>
