<script setup lang="ts">
import { useRoute, useRuntimeConfig } from "#imports";
import { ref, computed, onMounted } from "vue";
import { useCompetitionChipStyle } from "~/composables/useCompetitionChipStyle";
import { useCompetitionButtonStyle } from "~/composables/useCompetitionButtonStyle";
import { useProducts } from "~/composables/useProducts";
import SoldPercentageBar from "~/components/product/SoldPercentageBar.vue";
import DrawDateChip from "~/components/DrawDateChip.vue";

const config = useRuntimeConfig();
const route = useRoute();
const tab = ref(1);
const selection = ref(null);
const quantity = ref(1);

definePageMeta({
  layout: "inner-pages",
  keepalive: false,
  key: (route) => route.fullPath,
  ssr: true,
  static: true, // Add this
});

// Use products composable
const { products, loading, error, fetchProducts } = useProducts();
await fetchProducts(); // Make this blocking

// Get current product with null check
const product = computed(() => {
  return (
    products.value?.find((p) => p.documentId === route.params.documentId) ||
    null
  );
});

// Computed properties
const allImages = computed(() => {
  if (!product.value?.image) return [];
  return [{ url: product.value.image, alt: product.value.title }];
});

const breadcrumbName = computed(() => product.value?.title || "Loading...");

const answers = computed(() => {
  if (!product.value?.answer) return [];
  return Array.isArray(product.value.answer) ? product.value.answer : [];
});

const productUrl = computed(() => {
  const baseUrl =
    config.public.siteUrl?.replace(/\/$/, "") || "https://victoryboxes.org";
  return `${baseUrl}/competitions/${route.params.documentId}`;
});

// Keep client-side fetch for reactivity
onMounted(async () => {
  if (!products.value?.length) {
    await fetchProducts();
  }
});

// Enhance meta tags for better SEO
useHead(() => ({
  title: `${product.value?.title || "Contest"} - Victory Boxes`,
  meta: [
    {
      name: "description",
      content: product.value?.description || "Loading...",
    },
    {
      property: "og:title",
      content: `${product.value?.title || "Contest"} - Victory Boxes`,
    },
    {
      property: "og:description",
      content: product.value?.description || "Loading...",
    },
    {
      property: "og:image",
      content: product.value?.image || "",
    },
    {
      property: "og:url",
      content: productUrl.value,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: productUrl.value,
    },
  ],
}));
</script>

<template>
  <v-container class="font-parkinsans py-8">
    <!-- Loading State -->
    <div
      v-if="loading"
      class="d-flex justify-center align-center"
      style="height: 400px"
    >
      <v-progress-circular indeterminate color="primary" />
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center">
      <v-alert type="error">Failed to load product</v-alert>
    </div>

    <!-- Product Content -->
    <v-row v-else-if="product" class="equal-height-row">
      <!-- Left Column -->
      <v-col cols="12" md="6">
        <v-card rounded="lg" elevation="2" class="overflow-hidden">
          <v-carousel
            v-if="allImages.length"
            cycle
            height="400"
            hide-delimiter-background
            show-arrows="hover"
          >
            <v-carousel-item
              v-for="(image, i) in allImages"
              :key="i"
              :src="image.url"
              :alt="image.alt"
              cover
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-carousel-item>
          </v-carousel>
          <v-img
            v-else
            src="/images/placeholder.jpg"
            height="400"
            cover
          ></v-img>
        </v-card>
      </v-col>

      <!-- Right Column -->
      <v-col cols="12" md="6" class="d-flex flex-column">
        <!-- Product info section -->
        <div class="text-center mb-6">
          <h1 class="text-h3 font-weight-bold mb-6 mt-6">
            {{ product?.title }}
          </h1>
          <p class="text-body-1 mb-6 mt-6">
            {{ product?.description }}
          </p>
          <DrawDateChip :product="product" v-if="product" />

          <div class="text-h4 font-weight-bold primary--text mb-6 mt-6">
            £{{ product?.price }}
          </div>

          <!-- Add percentage sold section -->
          <div class="text-left text-caption mb-2"></div>
          <SoldPercentageBar
            :total-tickets="product.total_tickets"
            :available-tickets="product.tickets_available"
          />
        </div>

        <!-- Question card with fixed height -->
        <v-card
          :disabled="loading"
          :loading="loading"
          class="mx-auto font-parkinsans flex-grow-0"
          elevation="2"
        >
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-card-Title class="text-center mt-4"
            >Answer the question</v-card-Title
          >

          <v-card-subtitle class="text-center mt-4 mb-4"
            >{{ product.question }}<br
          /></v-card-subtitle>
          <div class="div-answers">
            <v-chip-group
              selected-class="text-primary"
              v-model="selection"
              column
              class="chip-container"
            >
              <v-chip
                v-for="answer in answers"
                :key="answer"
                :value="answer"
                v-bind="useCompetitionChipStyle()"
                class="equal-width-chip"
              >
                {{ answer }}
              </v-chip>
            </v-chip-group>
          </div>

          <!-- Add quantity slider -->
          <v-card-Title class="text-center mt-4 mb-10"
            >How many tickets?</v-card-Title
          >

          <div class="px-8">
            <!-- Added padding container -->
            <v-slider
              v-model="quantity"
              class="mx-4"
              :min="1"
              :max="1000"
              :step="1"
              thumb-label="always"
              color="secondary"
              :track-color="'secondary-lighten-1'"
              thumb-color="secondary-darken-1"
            >
              <template v-slot:thumb-label="{ modelValue }">
                <span class="text-black">{{ modelValue }}</span>
              </template>
            </v-slider>
          </div>

          <v-card-actions class="px-20 pb-4">
            <v-btn
              v-bind="useCompetitionButtonStyle()"
              block
              class="snipcart-add-item"
              :disabled="!selection"
              :data-item-id="product.documentId"
              :data-item-name="product.title"
              :data-item-price="product.price"
              :data-item-url="productUrl"
              :data-item-description="product?.description"
              :data-item-image="product?.image"
              :data-item-quantity="quantity"
              :data-item-custom1-name="product?.question"
              :data-item-custom1-options="product?.answer?.join('|')"
              :data-item-custom1-required="true"
            >
              <v-icon start icon="mdi-ticket"></v-icon>
              Buy {{ quantity }} Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Not Found State -->
    <div v-else class="text-center">
      <v-alert type="warning">Product not found</v-alert>
    </div>
  </v-container>
</template>

<style scoped>
.contest-details {
  padding-top: 2rem;
}

.div-answers {
  width: 100%;
  padding: 0 32px;
  /* Match padding with slider container */
}

.chip-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1 auto;
}

.equal-width-chip {
  flex: 1 1 40% !important;
  margin: 6px 6px !important;
  justify-content: center;
}

.equal-height-row {
  align-items: start;
}
</style>
