<script setup lang="ts">
import { useStrapi, useRoute, useRuntimeConfig, useAsyncData } from "#imports";
import { PhStar, PhStarHalf } from "@phosphor-icons/vue";
import { ref, computed } from "vue";

const config = useRuntimeConfig(); // Move this here, at the top of setup

definePageMeta({
  layout: "inner-pages",
  static: true,
  async getStaticPaths() {
    // Define your static paths here
    // For example, if you want to pre-generate specific documentIds:
    return [{ params: { documentId: "default" } }];
  },
});

const route = useRoute();
const strapi = useStrapi();
const tab = ref(1);

const {
  data: product,
  pending,
  error,
} = await useAsyncData(`product-${route.params.documentId}`, async () => {
  try {
    console.log("Fetching product with documentId:", route.params.documentId);

    const response = await strapi.findOne("products", route.params.documentId, {
      populate: "*",
    });

    console.log("API response:", response);

    if (!response?.data) {
      console.log("No product found");
      return null;
    }

    // Updated to match actual API response structure
    return {
      id: response.data.id,
      documentId: response.data.documentId,
      title: response.data.Title,
      Description: response.data.Description,
      price: parseFloat(response.data.Price).toFixed(2),
      image: response.data.Image?.url
        ? `${config.public.strapiUrl}${response.data.Image.url}` // Use config here
        : "/images/placeholder.jpg",
    };
  } catch (err) {
    console.error("Error fetching product:", err);
    throw new Error("Failed to load product");
  }
});

useHead({
  title: computed(
    () => `${product.value?.title || "Contest Details"} - Victory Boxes`
  ),
  meta: [
    {
      name: "description",
      content: computed(
        () => product.value?.Description || "Loading contest details..."
      ),
    },
  ],
});

const productUrl = computed(() => {
  const baseUrl =
    config.public.siteUrl?.replace(/\/$/, "") || "https://victoryboxes.org";
  return `${baseUrl}/products/${route.params.documentId}`;
});

const toggleTab = (index: number) => {
  if (tab.value !== index) {
    tab.value = index;
  }
};

// Add computed property for breadcrumb name
const breadcrumbName = computed(() => {
  return product.value?.title || "Loading Product...";
});

const loading = ref(false);
const selection = ref(1);

const reserve = () => {
  loading.value = true;
  setTimeout(() => (loading.value = false), 2000);
};
</script>

<template>
  <ContestDetailsSlider />
  <v-container>
    <v-row>
      <!-- Left Column -->
      <v-col cols="12" md="6">
        <v-card class="mx-auto" elevation="2" height="100%">
          <!-- Left card content to come later -->
        </v-card>
      </v-col>

      <!-- Right Column -->
      <v-col cols="12" md="6">
        <v-card
          :disabled="loading"
          :loading="loading"
          class="mx-auto my-12"
          max-width="374">
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate></v-progress-linear>
          </template>

          <v-img height="250" :src="product.image" cover></v-img>

          <v-card-item>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-subtitle>
              <span class="me-1">Featured Product</span>
              <v-icon
                color="error"
                icon="mdi-fire-circle"
                size="small"></v-icon>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :model-value="4.5"
                color="amber"
                density="compact"
                size="small"
                half-increments
                readonly></v-rating>

              <div class="text-grey ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">£{{ product.price }}</div>

            <div>{{ product.Description }}</div>
          </v-card-text>

          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-title>Ticket Options</v-card-title>

          <div class="px-4 mb-2">
            <v-chip-group
              v-model="selection"
              selected-class="bg-deep-purple-lighten-2">
              <v-chip>1 Ticket</v-chip>
              <v-chip>3 Tickets</v-chip>
              <v-chip>5 Tickets</v-chip>
              <v-chip>10 Tickets</v-chip>
            </v-chip-group>
          </div>

          <v-card-actions>
            <v-btn
              color="deep-purple-lighten-2"
              block
              border
              class="snipcart-add-item"
              :data-item-id="product.id"
              :data-item-name="product.title"
              :data-item-price="product.price"
              :data-item-url="productUrl"
              :data-item-description="product.Description"
              :data-item-image="product.image"
              @click="reserve">
              Buy Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.contest-details {
  padding-top: 2rem;
}

.product-image-wrap img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.buy-button {
  background: var(--act4-color, #4caf50);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
}

.buy-button:hover {
  opacity: 0.9;
}

.price-display {
  font-size: 2rem;
  font-weight: 700;
  color: var(--n4-color, #333);
}

.loading-section,
.error-section {
  text-align: center;
  padding: 4rem 2rem;
}

.back-link {
  color: var(--act4-color, #4caf50);
  text-decoration: none;
}

.tablink {
  background: none;
  border: 1px solid #eee;
  cursor: pointer;
}

.nav-links.active .tablink {
  background: var(--act4-color, #4caf50);
  color: white;
}
</style>
