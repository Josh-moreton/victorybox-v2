<template>
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
        <v-card
          class="mx-auto h-100"
          :to="`/contests/${product.documentId}`"
        >
          <v-img
            :src="product.image"
            :alt="product.title"
            height="200"
            cover
          ></v-img>

          <v-card-item>
            <v-card-title>{{ product.title }}</v-card-title>
            
            <!-- Due Date Badge -->
            <v-chip
              color="primary"
              class="mt-2"
            >
              Due {{ product.closingDate || 'TBA' }}
            </v-chip>
          </v-card-item>

          <v-card-text>
            <!-- Progress Bar -->
            <v-progress-linear
              :model-value="product.soldPercentage"
              color="primary"
              height="20"
            >
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}% Sold</strong>
              </template>
            </v-progress-linear>

            <div class="mt-4">{{ product.Description }}</div>

            <v-row class="mt-4" no-gutters>
              <v-col class="text-caption">
                {{ product.days }} Days
              </v-col>
              <v-divider vertical class="mx-2"></v-divider>
              <v-col class="text-caption">
                {{ product.remaining }} Remaining
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-row align="center" no-gutters>
              <v-col>
                <span class="text-h6">£{{ product.price }}</span>
              </v-col>
              <v-col class="text-right">
                <v-btn
                  color="primary"
                  class="snipcart-add-item"
                  :data-item-id="product.id"
                  :data-item-name="product.title"
                  :data-item-price="product.price"
                  :data-item-url="productUrl(product.id)"
                  :data-item-description="product.Description"
                  :data-item-image="product.image"
                >
                  Add to cart
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
.v-card {
  transition: transform 0.2s;
}

.v-card:hover {
  transform: translateY(-4px);
}
</style>