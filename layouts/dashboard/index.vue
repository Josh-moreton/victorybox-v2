<script setup>
definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});
</script>

<template>
  <div class="pa-4">
    <h1 class="text-h4 mb-6">Dashboard Home</h1>
    <v-card>
      <v-card-text>
        <p class="text-body-1">
          Welcome to your dashboard. Select an option from the menu to get
          started.
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>
