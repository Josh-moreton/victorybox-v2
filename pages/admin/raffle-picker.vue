<script setup lang="ts">
import { ref } from "vue";
import { useProducts } from "~/composables/useProducts";

interface Ticket {
  id: number;
  ticket_number: string;
  customer_email: string;
  status: string;
  product?: {
    Title: string;
  };
}

const {
  products,
  loading: productsLoading,
  error: productsError,
} = useProducts();
const selectedProduct = ref(null);
const tickets = ref<Ticket[]>([]);
const winnningTicket = ref<Ticket | null>(null);
const loading = ref(false);
const client = useStrapiClient();

// Fetch tickets for selected product
async function fetchTickets(product: any) {
  loading.value = true;
  winnningTicket.value = null;
  try {
    const response = await client<{ data: Ticket[] }>(
      `/tickets/contest/${product.contest_id}`
    );
    tickets.value = response.data;
  } catch (error) {
    console.error("Failed to fetch tickets:", error);
  } finally {
    loading.value = false;
  }
}

// Pick random winner
function pickWinner() {
  if (!tickets.value.length) return;

  // Get truly random index
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  const randomIndex = array[0] % tickets.value.length;

  winnningTicket.value = tickets.value[randomIndex];
}

// Watch for product selection
watch(selectedProduct, async (newProduct) => {
  if (newProduct && newProduct.contest_id) {
    await fetchTickets(newProduct);
  }
});

// Add debug logging
onMounted(async () => {
  console.log("Fetching products...");
  await useProducts().fetchProducts();
  console.log("Products loaded:", products.value);
});
</script>

<template>
  <v-container>
    <!-- Show loading state -->
    <v-progress-linear
      v-if="productsLoading"
      indeterminate
      color="primary"
    ></v-progress-linear>

    <!-- Show error state -->
    <v-alert v-if="productsError" type="error" class="mb-4">
      Failed to load competitions: {{ productsError }}
    </v-alert>

    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6">Raffle Picker</h1>

        <v-card>
          <v-card-text>
            <!-- Product Selection -->
            <v-select
              v-model="selectedProduct"
              :items="products"
              item-title="title"
              label="Select Competition"
              :loading="productsLoading"
              :disabled="productsLoading"
              return-object
              hint="Select a competition to pick winners"
              persistent-hint
            >
              <template v-slot:item-title="{ item }">
                {{ item.title }} (ID: {{ item.contest_id }})
              </template>
            </v-select>

            <!-- Ticket Stats -->
            <div v-if="tickets.length" class="my-4">
              <p class="text-body 1">Total Tickets: {{ tickets.length }}</p>
            </div>

            <!-- Winner Selection Button -->
            <v-btn
              v-bind="useCompetitionButtonStyle()"
              :disabled="!tickets.length || loading"
              :loading="loading"
              block
              @click="pickWinner"
              class="mt-4"
            >
              Pick Winner
            </v-btn>

            <!-- Winner Display -->
            <v-card
              v-if="winnningTicket"
              class="mt-6 pa-4"
              color="secondary"
              variant="outlined"
            >
              <h2 class="text-h5 mb-2">Winner!</h2>
              <p class="text-body-1">
                Ticket #{{ winnningTicket.ticket_number }}
              </p>
              <p class="text-body-2">{{ winnningTicket.customer_email }}</p>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
