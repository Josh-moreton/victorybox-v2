<template>
  <div>
    <h1>Products</h1>
    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.title" />
        <h2>{{ product.title }}</h2>
        <p>{{ product.Description }}</p>
        <p>£{{ product.price }}</p>
        
        <button 
          class="snipcart-add-item"
          :data-item-id="product.id"
          :data-item-name="product.title"
          :data-item-price="product.price"
          :data-item-url="productUrl(product.id)"
          :data-item-description="product.Description"
          :data-item-image="product.image"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const config = useRuntimeConfig();
const products = ref([]);

// Function to generate proper product URLs for Snipcart validation
const productUrl = (id: string) => {
  // Remove any trailing slashes from the base URL
  const baseUrl = config.public.siteUrl?.replace(/\/$/, '') || 'https://victoryboxes.org';
  return `${baseUrl}/products/${id}`;
};

onMounted(async () => {
  try {
    const response = await fetch(`${config.public.strapiUrl}/api/products?populate=*`);
    const data = await response.json();
    
    products.value = data.data.map(product => ({
      id: product.id,
      title: product.Title,
      Description: product.Description,
      // Ensure price is a number and format it correctly
      price: parseFloat(product.Price).toFixed(2),
      image: product.Image?.formats?.medium?.url 
        ? `${config.public.strapiUrl}${product.Image.formats.medium.url}` 
        : product.Image?.url 
          ? `${config.public.strapiUrl}${product.Image.url}` 
          : '/images/placeholder.jpg',
      soldPercentage: product.soldPercentage?.toString() || '0',
      rating: product.rating?.toString() || '0',
      days: product.days?.toString() || '0',
      remaining: product.remaining?.toString() || '0'
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.product-card {
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 8px;
}

.product-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>