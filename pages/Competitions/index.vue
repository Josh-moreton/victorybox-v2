<template>
  <Breadcrumbs pageName="All competitions" />
  <CompetitionsComponent />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "inner-pages",
});

import { ref, onMounted } from "vue";
import { useRuntimeConfig } from "#imports";
import { NuxtLink } from "#components";

const config = useRuntimeConfig();
const products = ref([]);

// Function to generate proper product URLs for Snipcart validation
const productUrl = (id: string) => {
  // Remove any trailing slashes from the base URL
  const baseUrl =
    config.public.siteUrl?.replace(/\/$/, "") || "https://victoryboxes.org";
  return `${baseUrl}/competitions/${id}`;
};

onMounted(async () => {
  try {
    const response = await fetch(
      `${config.public.strapiUrl}/api/products?populate=*`
    );
    const data = await response.json();

    products.value = data.data.map((product) => ({
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
        : "/images/placeholder.jpg",
      soldPercentage: product.soldPercentage?.toString() || "0",
      rating: product.rating?.toString() || "0",
      days: product.days?.toString() || "0",
      remaining: product.remaining?.toString() || "0",
      closingDate: product.closingDate || "TBA",
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});

const handleTestClick = (id: string) => {
  console.log("Test block clicked for product:", id);
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
