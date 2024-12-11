<!-- components/CompetitionsComponent.vue -->
<template>
  <v-container
    fluid
    class="pa-0 bg-background"
    :class="[
      $vuetify.theme.current.dark ? 'bg-surface-variant' : 'bg-background',
    ]"
  >
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <v-card-title
          class="text-h2 font-parkinsans text-center d-flex align-center justify-center"
          :class="[
            $vuetify.theme.current.dark ? 'text-primary' : 'text-primary',
          ]"
        >
          <v-icon start color="primary" size="large" class="mr-2">
            mdi-trophy
          </v-icon>
          {{ title }}
        </v-card-title>
      </v-col>
    </v-row>

    <v-sheet
      rounded="lg"
      elevation="3"
      :class="[
        $vuetify.theme.current.dark ? 'bg-grey-darken-4' : 'bg-grey-lighten-4',
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
        <v-window-item value="all">
          <v-row class="pa-12">
            <v-col
              v-for="product in products"
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

        <!-- Add Featured tab content -->
        <v-window-item value="featured">
          <v-row class="pa-12">
            <v-col
              v-for="product in featuredProducts"
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
        <!-- Add other tab content as needed -->

        <!-- cars category tab -->
        <v-window-item value="cars">
          <v-row class="pa-12">
            <v-col
              v-for="product in carsProducts"
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

        <!-- tech category tab -->
        <v-window-item value="tech">
          <v-row class="pa-12">
            <v-col
              v-for="product in techProducts"
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
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useTheme } from "vuetify";
import { useCompetitionTabs } from "~/composables/useCompetitionTabs";
import { useProducts } from "~/composables/useProducts";

const theme = useTheme();
const { tab, tabs } = useCompetitionTabs();
const { products, loading, error, fetchProducts } = useProducts();

// Computed properties for filtered products
const featuredProducts = computed(() =>
  products.value.filter((product) => product.featured === true)
);

const carsProducts = computed(() =>
  products.value.filter((product) => product.category === "cars")
);

const techProducts = computed(() =>
  products.value.filter((product) => product.category === "tech")
);

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
