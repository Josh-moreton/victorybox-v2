<template>
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="product in products"
        :key="product.id"
        :src="product.image"
      >
        <NuxtLink :to="`/products/${product.documentId}`" class="carousel-link">
          <div class="carousel-content">
            <h2 class="text-h3 font-weight-bold text-white">{{ product.title }}</h2>
            <p class="text-h5 text-white">£{{ product.price }}</p>
          </div>
        </NuxtLink>
      </v-carousel-item>
    </v-carousel>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRuntimeConfig } from '#imports'
  
  const config = useRuntimeConfig()
  const products = ref([])
  
  onMounted(async () => {
    try {
      const response = await fetch(`${config.public.strapiUrl}/api/products?populate=*`)
      const data = await response.json()
      
      products.value = data.data.map(product => ({
        id: product.id,
        documentId: product.documentId,
        title: product.Title,
        price: parseFloat(product.Price).toFixed(2),
        image: product.Image?.formats?.large?.url 
          ? `${config.public.strapiUrl}${product.Image.formats.large.url}` 
          : product.Image?.url 
            ? `${config.public.strapiUrl}${product.Image.url}` 
            : '/images/placeholder.jpg'
      }))
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  })
  </script>
  
  <style scoped>
  .carousel-link {
    text-decoration: none;
    display: block;
    height: 100%;
  }
  
  .carousel-content {
    position: absolute;
    bottom: 50px;
    left: 50px;
    z-index: 2;
  }
  
  .v-carousel {
    box-shadow: none;
  }
  
  .v-carousel-item {
    filter: brightness(0.7);
  }
  </style>