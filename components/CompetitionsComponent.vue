<template>
  <v-container
    fluid
    class="pa-0 font-parkinsans"
    :class="[$vuetify.theme.current.dark ? 'bg-surface' : 'bg-background']">
    <v-container
      fluid
      class="py-16 px-4"
      :class="[$vuetify.theme.current.dark ? 'bg-surface' : 'bg-background']"
      style="max-width: 1000px">
      <v-row>
        <v-col cols="12">
          <h2
            class="text-h4 mb-6 text-center text-teal font-parkinsans"
            :class="
              $vuetify.theme.current.dark ? 'text-primary' : 'text-primary'
            ">
            {{ title }}
          </h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
          lg="4">
          <NuxtLink
            :to="`/competitions/${product.documentId}`"
            class="text-decoration-none">
            <v-card
              class="mx-auto d-flex flex-column font-parkinsans"
              height="100%"
              max-width="300px"
              hover
              :color="
                $vuetify.theme.current.dark ? 'grey-darken-3' : 'background'
              ">
              <div class="image-container">
                <v-img
                  :src="product.image"
                  :alt="product.title"
                  class="product-image"
                  width="100%"
                  height="250"
                  cover></v-img>
              </div>

              <v-card-item>
                <div class="d-flex flex-column align-center">
                  <v-card-title>
                    <NuxtLink
                      :to="`/competitions/${product.documentId}`"
                      class="text-decoration-none font-parkinsans">
                      <span
                        class="text-center text-h5 font-weight-bold text-wrap font-parkinsans">
                        {{ product.title }}
                      </span>
                    </NuxtLink>
                  </v-card-title>
                  <v-chip color="primary" class="mt-2 font-parkinsans">
                    Draw {{ product.closingDate || "TBA" }}
                  </v-chip>
                </div>
              </v-card-item>

              <!-- Centered Price -->
              <div class="text-center my-4">
                <span class="text-h4 font-weight-black"
                  >£{{ product.price }}</span
                >
              </div>

              <v-card-actions class="mt-auto flex-column">
                <div class="text-caption text-grey text-left w-100">
                  {{ Math.ceil(product.soldPercentage) }}% Sold
                </div>

                <v-progress-linear
                  :model-value="product.soldPercentage"
                  :color="
                    product.soldPercentage > 75
                      ? 'deep-orange'
                      : product.soldPercentage > 50
                      ? 'lime'
                      : product.soldPercentage > 25
                      ? 'light-green-darken-4'
                      : 'light-blue'
                  "
                  height="10"
                  class="w-100 mb-4"
                  striped
                  rounded>
                </v-progress-linear>

                <v-btn
                  v-bind="useCompetitionButtonStyle()"
                  block
                  :to="`/competitions/${product.documentId}`"
                  prepend-icon="mdi-ticket">
                  <template v-slot:prepend>
                    <v-icon color="white"></v-icon>
                  </template>
                  <span class="font-weight-bold">Enter now!</span>
                </v-btn>
              </v-card-actions>
            </v-card></NuxtLink
          >
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRuntimeConfig } from "#imports";
import { useTheme } from "vuetify";
import { NuxtLink } from "#components";

const config = useRuntimeConfig();
const theme = useTheme();
const products = ref([]);

// Make these props if they need to be configurable by parent
defineProps({
  title: {
    type: String,
    default: "Competitions",
  },
});

// Emit events that the parent might need to handle
const emit = defineEmits(["product-loaded", "error"]);

// Function to generate proper product URLs for Snipcart validation
const productUrl = (id: string) => {
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
      documentId: product.documentId,
      title: product.Title,
      Description: product.Description,
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

    emit("product-loaded", products.value);
  } catch (error) {
    console.error("Error fetching products:", error);
    emit("error", error);
  }
});
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

/* Add global font class */
:deep(.font-parkinsans) {
  font-family: "Parkinsans", sans-serif !important;
}
</style>
