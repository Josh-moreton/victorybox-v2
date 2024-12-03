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
    console.log('Fetched data:', data); // Log the fetched data
    products.value = data.data;
    products.value.forEach(product => {
      console.log('Product:', product); // Log each product
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>