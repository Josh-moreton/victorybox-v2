<!-- components/ProductCardContent.vue -->
<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

import { useCompetitionButtonStyle } from "~/composables/useCompetitionButtonStyle";
</script>

<template>
  <v-card-item>
    <div class="d-flex flex-column align-center">
      <v-card-title>
        <NuxtLink
          :to="`/competitions/${product.documentId}`"
          class="text-decoration-none font-parkinsans"
        >
          <span
            class="text-center text-h5 font-weight-bold text-wrap font-parkinsans"
          >
            {{ product.title }}
          </span>
        </NuxtLink>
      </v-card-title>
      <v-chip color="primary" class="mt-2 font-parkinsans">
        Draw {{ product.closingDate || "TBA" }}
      </v-chip>
    </div>
  </v-card-item>

  <!-- Centered Price -->
  <div class="text-center my-4">
    <span class="text-h4 font-weight-black">£{{ product.price }}</span>
  </div>

  <v-card-actions class="mt-auto flex-column">
    <div class="text-caption text-grey text-left w-100">
      {{ Math.ceil(product.soldPercentage) }}% Sold
    </div>
    <v-progress-linear
      :model-value="product.soldPercentage"
      :color="
        product.soldPercentage > 75
          ? 'deep-orange'
          : product.soldPercentage > 50
          ? 'lime'
          : product.soldPercentage > 25
          ? 'light-green-darken-4'
          : 'light-blue'
      "
      height="10"
      class="w-100 mb-4"
      striped
      rounded
    />
    <v-btn
      v-bind="useCompetitionButtonStyle()"
      block
      :to="`/competitions/${product.documentId}`"
      prepend-icon="mdi-ticket"
    >
      <template v-slot:prepend>
        <v-icon color="white" />
      </template>
      <span class="font-weight-bold">Enter now!</span>
    </v-btn>
  </v-card-actions>
</template>

<style scoped>
.text-decoration-none {
  color: inherit;
}

:deep(.font-parkinsans) {
  font-family: "Parkinsans", sans-serif !important;
}
</style>
