<!-- components/ProductCardContent.vue -->
<script setup lang="ts">
interface Product {
  price: number;
  soldPercentage: number;
  documentId: string;
}

const props = defineProps<{
  product: Product;
}>();

import { useCompetitionButtonStyle } from "~/composables/useCompetitionButtonStyle";
</script>

<template>
  <div>
    <v-card-item>
      <div class="text-center w-100">
        <v-card-title>
          <NuxtLink
            :to="`/competitions/${product.documentId}`"
            class="text-decoration-none font-parkinsans d-block w-100"
          >
            <span class="text-h5 font-weight-bold text-wrap">
              {{ product.title }}
            </span>
          </NuxtLink>
        </v-card-title>
        <v-chip color="primary" class="mt-2 font-parkinsans">
          Draw {{ product.closingDate || "TBA" }}
        </v-chip>
      </div>
    </v-card-item>

    <div class="product-card-content">
      <div class="text-center my-4">
        <span class="text-h4 font-weight-black">£{{ product.price }}</span>
      </div>

      <v-card-actions class="mt-auto flex-column align-center">
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
          :to="`/competitions/${product.documentId}`"
          prepend-icon="mdi-ticket"
          style="width: 200px"
          class="mb-4"
        >
          <template v-slot:prepend>
            <v-icon color="white" />
          </template>
          <span class="font-weight-bold">Enter now!</span>
        </v-btn>
      </v-card-actions>
    </div>
  </div>
</template>

<style scoped>
.text-decoration-none {
  color: inherit;
}

:deep(.font-parkinsans) {
  font-family: "Parkinsans", sans-serif !important;
}
</style>
