<!-- components/CompetitionsComponent.vue -->
<template>
  <v-container
    fluid
    class="pa-0 bg-background"
    :class="[
      $vuetify.theme.current.dark ? 'bg-surface-variant' : 'bg-background',
    ]"
  >
    <!-- Title row -->
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <v-card-title
          class="text-h4 font-parkinsans text-center d-flex align-center justify-center my-6"
          :class="[
            $vuetify.theme.current.dark ? 'text-primary' : 'text-primary',
          ]"
        >
          <v-icon start color="primary" size="small" class="mr-3">
            mdi-trophy
          </v-icon>
          {{ title }}
        </v-card-title>
      </v-col>
    </v-row>

    <!-- Content container with max-width -->
    <v-container class="mx-auto px-0" :style="{ maxWidth: '1200px' }">
      <v-sheet
        rounded="lg"
        elevation="3"
        :class="[
          $vuetify.theme.current.dark
            ? 'bg-grey-darken-4'
            : 'bg-grey-lighten-4',
        ]"
      >
        <v-tabs
          v-model="tab"
          :items="tabs"
          align-tabs="center"
          color="primary"
          height="60"
        >
          <template v-slot:tab="{ item }">
            <v-tab
              :prepend-icon="item.icon"
              :text="item.text"
              :value="item.value"
              class="text-none"
            />
          </template>
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item
            v-for="tabItem in tabs"
            :key="tabItem.value"
            :value="tabItem.value"
          >
            <v-row class="pa-12">
              <v-col
                v-for="product in tabItem.value === 'featured'
                  ? featuredProducts
                  : tabItem.value === 'warhammer'
                  ? warhammerProducts
                  : tabItem.value === 'lego'
                  ? legoProducts
                  : tabItem.value === 'tech'
                  ? techProducts
                  : tabItem.value === 'collectibles'
                  ? collectiblesProducts
                  : tabItem.value === 'magic'
                  ? magicProducts
                  : products"
                :key="product.id"
                cols="12"
                sm="6"
                md="4"
                lg="4"
              >
                <ProductCard :product="product" />
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-sheet>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useTheme } from "vuetify";
import { useProducts } from "~/composables/useProducts";

const theme = useTheme();
const { products, loading, error, fetchProducts } = useProducts();

// Map of category names to icons
const categoryIcons = {
  featured: "mdi-star",
  warhammer: "mdi-sword-cross",
  lego: "mdi-cube-outline",
  tech: "mdi-laptop",
  collectibles: "mdi-trophy-variant",
  magic: "mdi-cards",
};

// Update tabs array
const tabs = [
  { text: "Featured", value: "featured", icon: "mdi-star" },
  { text: "Warhammer", value: "warhammer", icon: "mdi-sword-cross" },
  { text: "Lego", value: "lego", icon: "mdi-cube-outline" },
  { text: "Tech", value: "tech", icon: "mdi-laptop" },
  { text: "Collectibles", value: "collectibles", icon: "mdi-trophy-variant" },
  { text: "Magic: The Gathering", value: "magic", icon: "mdi-cards" },
];

// Computed properties for filtered products
const featuredProducts = computed(() =>
  products.value.filter((p) => p.featured === true)
);

const warhammerProducts = computed(() =>
  products.value.filter((p) => p.category?.toLowerCase() === "warhammer")
);

const legoProducts = computed(() =>
  products.value.filter((p) => p.category?.toLowerCase() === "lego")
);

const techProducts = computed(() =>
  products.value.filter((p) => p.category?.toLowerCase() === "tech")
);

const collectiblesProducts = computed(() =>
  products.value.filter((p) => p.category?.toLowerCase() === "collectibles")
);

const magicProducts = computed(() =>
  products.value.filter((p) => p.category?.toLowerCase() === "magic")
);

const tab = ref(tabs[0].value); // Default to first category

defineProps({
  title: {
    type: String,
    default: "Competitions",
  },
});

const emit = defineEmits(["product-loaded", "error"]);

onMounted(async () => {
  await fetchProducts();
  if (error.value) {
    emit("error", error.value);
  } else {
    emit("product-loaded", products.value);
  }
});
</script>
