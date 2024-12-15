<!-- components/ProductCardContent.vue -->
<script setup lang="ts">
import { useCompetitionButtonStyle } from "~/composables/useCompetitionButtonStyle";
import { useProducts } from "~/composables/useProducts";
import SoldPercentageBar from "./SoldPercentageBar.vue";

// Update interface to match API structure
interface Product {
  price: number;
  documentId: string;
  title: string;
  closingDate: string;
  total_tickets: number;
  tickets_available: number;
}

const props = defineProps<{
  product: Product;
}>();
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
        <div class="w-100">
          <SoldPercentageBar
            :total-tickets="product.total_tickets"
            :available-tickets="product.tickets_available"
            :show-label="true"
          />
        </div>
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
