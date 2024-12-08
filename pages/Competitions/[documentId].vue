<script setup lang="ts">
import { useStrapi, useRoute, useRuntimeConfig, useAsyncData } from "#imports";
import { PhStar, PhStarHalf } from "@phosphor-icons/vue";
import { ref, computed } from "vue";
import { useCompetitionChipStyle } from "~/composables/useCompetitionChipStyle";
import { useCompetitionButtonStyle } from "~/composables/useCompetitionButtonStyle";

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

// Add interface for product data
interface Product {
  id: string;
  documentId: string;
  title: string;
  Description: string;
  price: string;
  images: Array<{ url: string; alt: string }>;
  question: string;
  answer: string;
  soldPercentage: number;
  closingDate?: string;
}

// Update API response processing in [documentId].vue
const {
  data: product,
  pending,
  error,
} = await useAsyncData<Product>(
  `product-${route.params.documentId}`,
  async () => {
    try {
      console.log("Fetching product with documentId:", route.params.documentId);

      const response = await strapi.findOne(
        "products",
        route.params.documentId,
        {
          populate: "*",
        }
      );

      console.log("API response:", response);

      if (!response?.data) {
        console.log("No product found");
        return null;
      }

      // Process multiple images from the API
      const images =
        response.data.Images?.map((img) => ({
          url: img.url
            ? `${config.public.strapiUrl}${img.url}`
            : "/images/placeholder.jpg",
          alt: img.alternativeText || "Product image",
        })) || [];

      // Add main image to images array if it exists
      if (response.data.Image?.url) {
        images.unshift({
          url: `${config.public.strapiUrl}${response.data.Image.url}`,
          alt: response.data.Image.alternativeText || "Main product image",
        });
      }

      return {
        id: response.data.id,
        documentId: response.data.documentId,
        title: response.data.Title,
        Description: response.data.Description,
        price: parseFloat(response.data.Price).toFixed(2),
        images: images,
        question: response.data.question || "A question",
        answer: response.data.answer || "Question responses",
        soldPercentage: Math.ceil(Number(response.data.soldPercentage) || 0),
        closingDate: response.data.closingDate || "TBA",
      };
    } catch (err) {
      console.error("Error fetching product:", err);
      throw new Error("Failed to load product");
    }
  }
);

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
const selection = ref(null); // Add ref for selected answer

// Split answers string into array if needed
const answers = computed(() => {
  if (!product.value?.answer) return [];
  return typeof product.value.answer === "string"
    ? product.value.answer.split("|")
    : product.value.answer;
});

const reserve = () => {
  loading.value = true;
  setTimeout(() => (loading.value = false), 2000);
};

// Add quantity ref
const quantity = ref(1);
</script>

<template>
  <v-container class="font-parkinsans">
    <v-row class="equal-height-row">
      <!-- Left Column -->
      <v-col cols="12" md="6">
        <v-carousel
          v-if="product?.images?.length"
          cycle
          height="400"
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="(image, i) in product.images"
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

        <!-- Fallback for no images -->
        <v-img v-else src="/images/placeholder.jpg" height="400" cover></v-img>
      </v-col>

      <!-- Right Column -->
      <v-col cols="12" md="6">
        <!-- Add content above v-card -->
        <div class="text-center mb-8 mt-8 font-parkinsans">
          <h1 class="text-h3 font-weight-bold mb-6 mt-6">
            {{ product?.title }}
          </h1>
          <p class="text-body-1 mb-6 mt-6">
            {{ product?.Description }}
          </p>
          <v-chip color="green" variant="flat" rounded="pill" class="mb-6 mt-6">
            Draw {{ product?.closingDate || "TBA" }}
          </v-chip>
          <div class="text-h4 font-weight-bold primary--text mb-6 mt-6">
            £{{ product?.price }}
          </div>

          <!-- Add percentage sold section -->
          <div class="text-left text-caption mb-2">
            Sold: {{ product?.soldPercentage }}%
          </div>
          <v-progress-linear
            :model-value="product?.soldPercentage"
            :color="
              product?.soldPercentage > 75
                ? 'deep-orange'
                : product?.soldPercentage > 50
                ? 'lime'
                : product?.soldPercentage > 25
                ? 'light-green-darken-4'
                : 'light-blue'
            "
            height="10"
            class="mb-6"
            striped
            rounded
          ></v-progress-linear>
        </div>

        <v-card
          :disabled="loading"
          :loading="loading"
          class="h-100 mx-auto font-parkinsans"
          elevation="2"
        >
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-card-title class="text-center mt-4"
            >Answer the question</v-card-title
          >

          <v-card-subtitle class="text-center mt-4 mb-4">{{
            product.question
          }}<br></v-card-subtitle>
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
          <v-card-title class="text-center mt-4 mb-10">How many tickets?</v-card-title>

          <div class="px-8"> <!-- Added padding container -->
            <v-slider
              v-model="quantity"
              class="mx-4"
              :min="1"
              :max="1000"
              :step="1"
              thumb-label="always"
            >
              <template v-slot:thumb-label="{ modelValue }">
                {{ modelValue }}
              </template>
            </v-slider>
          </div>

          <v-card-actions class="px-20 pb-4">
            <v-btn
              v-bind="useCompetitionButtonStyle()"
              block
              class="snipcart-add-item"
              :disabled="!selection"
              :data-item-id="product.id"
              :data-item-name="product.title"
              :data-item-price="product.price"
              :data-item-url="productUrl"
              :data-item-description="product.Description"
              :data-item-image="product.image"
              :data-item-custom1-name="product.question"
              :data-item-custom1-value="selection"
              :data-item-custom1-options="product.answer"
              :data-item-quantity="quantity"
              @click="reserve"
            >
              <v-icon start icon="mdi-ticket"></v-icon>
              Buy {{ quantity }} Now
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

.v-carousel {
  border-radius: 8px;
  overflow: hidden;
}

.equal-height-row {
  display: flex;
  flex-wrap: wrap;
}

.h-100 {
  height: 100%;
}

.div-answers {
  width: 100%;
  padding: 0 32px; /* Match padding with slider container */
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

:deep(.font-parkinsans) {
  font-family: "Parkinsans", sans-serif !important;
}
</style>
