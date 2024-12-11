<template>
  <div class="carousel-wrapper">
    <template v-if="!loading && !error">
      <v-carousel
        v-if="carouselProducts.length"
        cycle
        interval="5000"
        height="500"
        hide-delimiter-background
        :show-arrows="false"
        class="carousel-override"
      >
        <v-carousel-item
          v-for="product in carouselProducts"
          :key="product.id"
          class="carousel-item-override"
        >
          <NuxtLink
            :to="`/competitions/${product.documentId}`"
            class="carousel-link"
          >
            <div class="carousel-content">
              <h2 class="text-h3 font-weight-bold mb-4">{{ product.title }}</h2>
              <p class="text-h6 description">{{ product.Description }}</p>
            </div>
          </NuxtLink>
          <div class="image-container">
            <img
              :src="product.image"
              :alt="product.title"
              class="carousel-image"
            />
          </div>
        </v-carousel-item>
      </v-carousel>
    </template>

    <div v-else-if="loading" class="loading-placeholder" style="height: 600px">
      <v-progress-circular indeterminate color="primary" />
    </div>

    <div v-else-if="error" class="error-message">
      <v-alert type="error">Failed to load featured competitions</v-alert>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useProducts } from "~/composables/useProducts";

const { products, loading, error, fetchProducts } = useProducts();

const carouselProducts = computed(() =>
  products.value.filter((product) => product.carousel === true)
);

onMounted(async () => {
  await fetchProducts();
});
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.description {
  font-family: var(--body-font) !important;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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

.logo {
  height: 100px; /* Consistent height for all logos */
  width: auto;
  object-fit: contain;
  filter: brightness(0.9);
}
</style>
