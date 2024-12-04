<script setup lang="ts">
import { useStrapi } from '#imports';

const route = useRoute();
const strapi = useStrapi();

const { data: product, pending, error } = await useAsyncData(
  `product-${route.params.id}`,
  async () => {
    try {
      const response = await strapi.find('api/products/' + route.params.id + '?populate=*');
      
      if (!response?.data) return null;

      return {
        id: response.data.id,
        title: response.data.attributes.Title,
        Description: response.data.attributes.Description,
        price: parseFloat(response.data.attributes.Price).toFixed(2),
        image: response.data.attributes.Image?.data?.attributes?.url 
          ? `${useRuntimeConfig().public.strapiUrl}${response.data.attributes.Image.data.attributes.url}`
          : '/images/placeholder.jpg'
      };
    } catch (err) {
      console.error('Error fetching product:', err);
      throw new Error('Failed to load product');
    }
  },
  { server: true }
);

const productUrl = computed(() => {
  const baseUrl = useRuntimeConfig().public.siteUrl?.replace(/\/$/, '') || 'https://victoryboxes.org';
  return `${baseUrl}/products/${route.params.id}`;
});
</script>

<template>
  <div class="product-detail">
    <div v-if="pending" class="loading">
      <h2>Loading product...</h2>
    </div>
    
    <div v-else-if="error" class="error">
      <h2>Error loading product</h2>
      <p>{{ error.message }}</p>
      <NuxtLink to="/products" class="back-link">
        Return to products
      </NuxtLink>
    </div>
    
    <div v-else-if="product" class="product-content">
      <img :src="product.image" :alt="product.title" class="product-image" />
      <div class="product-info">
        <h1>{{ product.title }}</h1>
        <p class="description">{{ product.Description }}</p>
        <p class="price">£{{ product.price }}</p>
        
        <button 
          class="snipcart-add-item buy-button"
          :data-item-id="product.id"
          :data-item-name="product.title"
          :data-item-price="product.price"
          :data-item-url="productUrl"
          :data-item-description="product.Description"
          :data-item-image="product.image"
        >
          Add to cart
        </button>

        <NuxtLink to="/products" class="back-link">
          ← Back to products
        </NuxtLink>
      </div>
    </div>
    
    <div v-else class="not-found">
      <h2>Product not found</h2>
      <NuxtLink to="/products" class="back-link">
        Return to products
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.product-detail {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.product-info {
  padding: 1rem;
}

.description {
  margin: 1rem 0;
  line-height: 1.6;
  color: #666;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 1rem 0;
}

.buy-button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.buy-button:hover {
  background: #45a049;
}

.back-link {
  display: inline-block;
  margin-top: 2rem;
  color: #666;
  text-decoration: none;
}

.back-link:hover {
  color: #333;
}

.loading, .error, .not-found {
  text-align: center;
  padding: 4rem 2rem;
}

@media (max-width: 768px) {
  .product-content {
    grid-template-columns: 1fr;
  }
}
</style>