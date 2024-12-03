<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.Title }} - {{ product.Description }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const products = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:1337/api/products');
    const data = await response.json();
    products.value = data.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>