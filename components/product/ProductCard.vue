<!-- components/product/ProductCard.vue -->
<template>
  <NuxtLink
    :to="`/competitions/${product.documentId}`"
    class="text-decoration-none"
  >
    <v-card
      class="mx-auto d-flex flex-column font-parkinsans"
      height="100%"
      max-width="300px"
      hover
      rounded="l"
      :color="$vuetify.theme.current.dark ? 'grey-darken-3' : 'white'"
    >
      <div class="image-container">
        <v-img
          :src="product.image"
          :alt="product.title"
          class="product-image"
          width="100%"
          height="250"
          cover
        />
      </div>
      <ProductCardContent :product="product" />
    </v-card>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
