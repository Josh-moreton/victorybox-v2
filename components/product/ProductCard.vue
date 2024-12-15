<!-- components/product/ProductCard.vue -->
<template>
  <NuxtLink
    :to="`/competitions/${product.documentId}`"
    class="text-decoration-none d-block h-100"
  >
    <v-card class="d-flex flex-column h-100">
      <div class="card-media-wrapper">
        <v-img
          :src="product.image"
          :alt="product.title"
          class="bg-grey-lighten-2"
          :aspect-ratio="16 / 9"
          cover
        />
      </div>
      <ProductCardContent :product="product" />
    </v-card>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Product {
  documentId: string;
  title: string;
  image: string;
  price: number;
  closingDate: string;
  total_tickets: number;
  tickets_available: number;
}

defineProps<{
  product: Product;
}>();
</script>

<style scoped>
.card-media-wrapper {
  position: relative;
  width: 100%;
}

:deep(.v-card) {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
