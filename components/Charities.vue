<template>
  <v-container
    fluid
    class="pa-4 charity-container"
    :class="[
      $vuetify.theme.current.dark ? 'bg-grey-darken-2' : 'bg-background',
    ]">
    <v-row align="center" class="justify-space-between px-16">
      <!-- Left section - Text -->
      <v-col cols="2">
        <span class="charity-text">Charities we<br />support:</span>
      </v-col>

      <!-- Middle section - Charity Logos -->
      <v-col cols="6" class="d-flex justify-left align-center">
        <img src="/images/bhf.png" alt="Charity 1" class="logo mx-4" />
        <img src="/images/gosh.png" alt="Charity 2" class="logo mx-4" />
      </v-col>

      <!-- Right section - Trustpilot -->
      <v-col cols="4" class="d-flex justify-end">
        <img src="/images/trustpilot-logo.png" alt="Trustpilot" class="logo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
const theme = useTheme();
</script>

<style scoped>
.charity-container {
  max-height: 100px;
  min-height: 100px;
  display: flex;
  align-items: center;
}

.gap-4 {
  gap: 1rem;
}

:deep(.v-img) {
  transition: opacity 0.2s ease;
}

:deep(.v-img:hover) {
  opacity: 0.8;
}

/* Make logos responsive within container height */
.logo {
  max-height: 60px;
  width: auto;
  object-fit: contain;
}
</style>
