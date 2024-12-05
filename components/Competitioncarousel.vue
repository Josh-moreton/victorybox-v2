<template>
  <div class="carousel-wrapper">
    <template v-if="products.length > 0">
      <v-carousel
        cycle
        interval="5000"
        height="600"
        hide-delimiter-background
        show-arrows="hover"
        class="carousel-override"
      >
        <v-carousel-item
          v-for="product in products"
          :key="product.id"
          class="carousel-item-override"
        >
          <NuxtLink :to="`/contests/${product.documentId}`" class="carousel-link">
            <div class="carousel-content">
              <h2 class="text-h3 font-weight-bold mb-4">{{ product.title }}</h2>
              <p class="text-h6 description">{{ product.description }}</p>
            </div>
          </NuxtLink>
          <div class="image-container">
            <img :src="product.image" alt="Product Image" class="carousel-image">
          </div>
          <!-- Overlay for each slide -->
          <div class="carousel-overlay">
            <div class="overlay-grid">
              <div class="charity-section">
                <span class="charity-text">Charities we<br>support:</span>
                <div class="charity-logos">
                  <img src="/images/bhf.png" alt="Charity 1" class="logo">
                  <img src="/images/gosh.png" alt="Charity 2" class="logo">
                </div>
              </div>
              <div class="middle-section">
              </div>
              <div class="trustpilot-section">
                <img src="/images/trustpilot-logo.png" alt="Trustpilot" class="logo">
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </template>

    <div v-else class="loading-placeholder" style="height: 600px;">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
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
    
    // Filter for carousel:true before mapping
    products.value = data.data
      .filter(product => product.carousel === true)
      .map(product => ({
        id: product.id,
        documentId: product.documentId,
        title: product.Title,
        description: product.Description,
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

.text-h4,
.text-h5,
.v-card-title {
  font-family: var(--body-font) !important;
}
.carousel-content h2,
.description {
  font-family: var(--body-font) !important;
}

.carousel-link {
  text-decoration: none;
  display: flex;
  align-items: flex-end; /* Changed from center to flex-end for bottom alignment */
  justify-content: flex-start;
  height: calc(100% - 100px);
  padding: 2rem;
}

.carousel-content {
  position: relative;
  z-index: 3;
  padding-bottom: 120px; /* Adjust this value to move text up/down */
  max-width: 60%;
  text-align: left;
  margin-left: 2rem;
}

.carousel-content h2 {
  font-family: var(--body-font) !important;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.description {
  font-family: var(--body-font) !important;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  max-width: 600px;
  line-height: 1.6;
  margin: 0;
}

.v-carousel {
  box-shadow: none;
}

.v-carousel-item {
  filter: brightness(0.85);
}

.carousel-wrapper {
  position: relative;
  overflow: hidden; /* Hide overflow */
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

/* Override Vuetify's default carousel constraints */
:deep(.carousel-override) {
  overflow: visible !important;
}

:deep(.v-carousel__item) {
  overflow: visible !important;
}

.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.carousel-image {
  width: 100%;
  height: 120%; /* Allows image to overflow top/bottom */
  object-fit: cover;
  object-position: center;
}

.carousel-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: rgba(200, 200, 200, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 2;
}

.overlay-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 4rem;
}

.charity-section,
.middle-section,
.trustpilot-section {
  display: flex;
  align-items: center; /* Vertically center */
  gap: 1rem;
}

.charity-section {
  justify-content: flex-start;
  gap: 2rem;
}

.charity-logos {
  display: flex;
  align-items: center; /* Vertically center */
  justify-content: center;
  gap: 1rem;
}

.trustpilot-section {
  justify-content: flex-end;
}

.logo {
  height: 100px; /* Consistent height for all logos */
  width: auto;
  object-fit: contain;
  filter: brightness(0.9);
}

.charity-section .charity-logos .logo,
.trustpilot-section .logo {
  height: 80px !important;
  width: auto;
  object-fit: contain;
}

.charity-section .logo,
.trustpilot-section .logo {
  height: 70px; /* Consistent height for all logos */
  width: auto;
  object-fit: contain;
}
</style>