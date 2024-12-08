<template>
  <v-footer
    class="bg-teal-lighten-1 text-center d-flex flex-column"
    color="surface">
    <!-- Social Icons -->
    <div class="social-icons">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"></v-btn>
    </div>

    <!-- Copyright Text -->
    <div class="pt-0 font-parkinsans">© All rights reserved</div>

    <v-divider></v-divider>

    <!-- Footer Credits -->
    <div class="font-parkinsans">
      {{ new Date().getFullYear() }} —
      <strong>
        Victorybox - Platform by
        <a href="https://www.rwxt.org" target="_blank">rwxt.org</a>
      </strong>
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
