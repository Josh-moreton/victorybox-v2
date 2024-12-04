<template>
  <div>
    <h1>Products</h1>
    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="test-block" @click="handleTestClick(product.id)">
          CLICK ME - Product ID: {{ product.id }}
        </div>
        <NuxtLink :to="`/products/${product.documentId}`" class="product-link">
          <div class="product-content">
            <img :src="product.image" :alt="product.title" />
            <h2>{{ product.title }}</h2>
            <p>{{ product.Description }}</p>
            <p>£{{ product.price }}</p>
          </div>
        </NuxtLink>
        
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
import { useRuntimeConfig } from '#imports';
import { NuxtLink } from '#components';

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
      documentId: product.documentId, // Add this line
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

const handleTestClick = (id: string) => {
  console.log('Test block clicked for product:', id);
};
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

.product-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.product-content {
  cursor: pointer;
  transition: opacity 0.2s;
}

.product-content:hover {
  opacity: 0.8;
}

.product-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.test-block {
  background-color: red;
  color: white;
  padding: 20px;
  margin: 10px 0;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border: 3px solid black;
}
</style>