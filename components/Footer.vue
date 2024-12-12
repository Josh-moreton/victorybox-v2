<template>
  <v-footer
    class="bg-teal-lighten-1 text-center d-flex flex-column"
    color="surface"
  >
    <!-- Social Icons -->
    <div class="social-icons pt-4 pb-2">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <!-- Copyright Text -->
    <div class="font-parkinsans">© All rights reserved</div>

    <v-divider class="my-2"></v-divider>

    <!-- Footer Credits -->
    <div class="py-2 pb-6 font-parkinsans">
      {{ new Date().getFullYear() }} — Victorybox - Platform by
      <a href="https://www.rwxt.org">rwxt.org</a>
    </div>
  </v-footer>
</template>

<script setup>
const icons = [
  "mdi-facebook",
  "mdi-twitter",
  "mdi-linkedin",
  "mdi-youtube",
  "mdi-instagram",
];
</script>

<style scoped>
.font-parkinsans {
  font-family: "Parkinsans", sans-serif !important;
}

:deep(.v-btn) {
  font-family: "Parkinsans", sans-serif !important;
}
</style>
