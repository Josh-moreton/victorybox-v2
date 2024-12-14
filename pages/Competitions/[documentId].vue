<script setup lang="ts">
import { useStrapi, useRoute, useRuntimeConfig, useAsyncData } from "#imports";
import { ref, computed } from "vue";
import { useCompetitionChipStyle } from "~/composables/useCompetitionChipStyle";
import { useCompetitionButtonStyle } from "~/composables/useCompetitionButtonStyle";
import SoldPercentageBar from "~/components/product/SoldPercentageBar.vue";

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

// Update Product interface to match API structure
interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  formats: {
    large: {
      url: string;
    };
  };
}

interface Product {
  id: string;
  documentId: string;
  Title: string;
  Description: string;
  Price: number; // Changed from price to Price
  Image: Image;
  galleryImages: Image[];
  question: string;
  answer: string[];
  soldPercentage: number;
  closingDate?: string;
}

// Update API response processing
const {
  data: product,
  pending,
  error,
} = await useAsyncData<Product>(
  `product-${route.params.documentId}`,
  async () => {
    try {
      const response = await strapi.findOne(
        "products",
        route.params.documentId,
        {
          populate: "*",
        }
      );
      console.log("Raw API response:", response); // Add this debug line

      if (!response?.data) return null;

      // Process main image
      const mainImage = response.data.Image
        ? {
            url: `${config.public.strapiUrl}${response.data.Image.formats.large.url}`,
            alt: response.data.Image.alternativeText || "Main product image",
          }
        : null;

      // Process gallery images
      const galleryImages =
        response.data.galleryImages?.map((img) => ({
          url: `${config.public.strapiUrl}${img.formats.large.url}`,
          alt: img.alternativeText || "Gallery image",
        })) || [];

      return {
        ...response.data,
        image: mainImage,
        galleryImages,
      };
    } catch (err) {
      console.error("Error fetching product:", err);
      throw new Error("Failed to load product");
    }
  }
);

useHead({
  Title: computed(
    () => `${product.value?.Title || "Contest Details"} - Victory Boxes`
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
  return `${baseUrl}/competitions/${route.params.documentId}`;
});

const toggleTab = (index: number) => {
  if (tab.value !== index) {
    tab.value = index;
  }
};

// Update computed for all images
const allImages = computed(() => {
  if (!product.value) return [];
  return [
    ...(product.value.image ? [product.value.image] : []),
    ...product.value.galleryImages,
  ];
});

// Add computed property for breadcrumb name
const breadcrumbName = computed(() => {
  return product.value?.Title || "Loading Product...";
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
  <v-container class="font-parkinsans py-8">
    <v-row class="equal-height-row">
      <!-- Left Column -->
      <v-col cols="12" md="6">
        <v-card rounded="lg" elevation="2" class="overflow-hidden">
          <v-carousel
            v-if="allImages?.length"
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
            {{ product?.Title }}
          </h1>
          <p class="text-body-1 mb-6 mt-6">
            {{ product?.Description }}
          </p>
          <v-chip color="green" variant="flat" rounded="pill" class="mb-6 mt-6">
            Draw {{ product?.closingDate || "TBA" }}
          </v-chip>
          <div class="text-h4 font-weight-bold primary--text mb-6 mt-6">
            £ {{ product.Price }}
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
              :data-item-name="product.Title"
              :data-item-price="product.Price"
              :data-item-url="productUrl"
              :data-item-description="product.Description"
              :data-item-image="product.image"
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
