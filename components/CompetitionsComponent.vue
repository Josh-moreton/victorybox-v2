<!-- components/CompetitionsComponent.vue -->
<template>
  <v-container
    fluid
    class="pa-0"
    :class="[$vuetify.theme.current.dark ? 'bg-surface' : 'bg-background']"
  >
    <v-row>
      <v-col cols="12" class="px-2 px-sm-4 px-md-6">
        <h2
          class="text-h4 mb-6 text-center text-teal font-parkinsans"
          :class="$vuetify.theme.current.dark ? 'text-primary' : 'text-primary'"
        >
          {{ title }}
        </h2>
      </v-col>
    </v-row>

    <v-sheet rounded="lg" elevation="3">
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
        <!-- Add other tab content as needed -->
      </v-window>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useTheme } from "vuetify";
import { useCompetitionTabs } from "~/composables/useCompetitionTabs";
import { useProducts } from "~/composables/useProducts";

const theme = useTheme();
const { tab, tabs } = useCompetitionTabs();
const { products, loading, error, fetchProducts } = useProducts();

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
