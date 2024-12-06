<template>
  <Breadcrumbs pageName="All Contests"/>

  <v-container class="py-16">
    <v-row>
      <v-col cols="12">
        <h2 class="text-h4 mb-6">Available Contests</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="mx-auto d-flex flex-column" height="100%" hover>
          <div class="image-container">
            <v-img
              :src="product.image"
              :alt="product.title"
              class="product-image"
              width="100%"
              height="250"
              cover
            ></v-img>
          </div>

          <v-card-item>
            <div class="d-flex flex-column align-center">
              <v-card-title>
                <NuxtLink 
                  :to="`/contests/${product.documentId}`" 
                  class="text-decoration-none"
                >
                  <span class="text-center text-h5 font-weight-bold text-wrap">
                    {{ product.title }}
                  </span>
                </NuxtLink>
              </v-card-title>
              <v-chip color="primary" class="mt-2">
                Draw {{ product.closingDate || 'TBA' }}
              </v-chip>
            </div>
          </v-card-item>


            <!-- Centered Price -->
            <div class="text-center my-4">
              <span class="text-h4 font-weight-black">£{{ product.price }}</span>
            </div>

          <v-card-actions class="mt-auto flex-column">
            <div class="text-caption text-grey text-left w-100">
              {{ Math.ceil(product.soldPercentage) }}% Sold
            </div>
            
            <v-progress-linear
              :model-value="product.soldPercentage"
              :color="product.soldPercentage > 75 ? 'deep-orange' : 
                      product.soldPercentage > 50 ? 'lime' : 
                      product.soldPercentage > 25 ? 'light-green-darken-4' : 
                      'light-blue'"
              height="10"
              class="w-100 mb-4"
              striped
              rounded
            >
            </v-progress-linear>

            <v-btn
              variant="elevated"
              color="primary"
              class="snipcart-add-item w-100"
              :data-item-id="product.id"
              :data-item-name="product.title"
              :data-item-price="product.price"
              :data-item-url="productUrl(product.id)"
              :data-item-description="product.Description"
              :data-item-image="product.image"
              prepend-icon="mdi-ticket"
            >
              <template v-slot:prepend>
                <v-icon color="white"></v-icon>
              </template>
  <span class="font-weight-bold">Enter now!</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup lang="ts">

definePageMeta({
  layout: "inner-pages",
});

import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#imports';
import { NuxtLink } from '#components';

const config = useRuntimeConfig();
const products = ref([]);

// Function to generate proper product URLs for Snipcart validation
const productUrl = (id: string) => {
  // Remove any trailing slashes from the base URL
  const baseUrl = config.public.siteUrl?.replace(/\/$/, '') || 'https://victoryboxes.org';
  return `${baseUrl}/contests/${id}`;
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
      remaining: product.remaining?.toString() || '0',
      closingDate: product.closingDate || 'TBA'
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

.v-card {
  transition: transform 0.2s;
}

.v-card:hover {
  transform: translateY(-4px);
}

.text-decoration-none {
  color: inherit;
  &:hover {
    opacity: 0.8;
  }
}
</style>