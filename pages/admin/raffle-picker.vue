<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useProducts } from "~/composables/useProducts";
import { useCompetitionButtonStyle } from "~/composables/useCompetitionButtonStyle";

interface Ticket {
  id: number;
  documentId: string;
  ticket_number: string;
  customer_email: string;
  createdAt: string;
}

interface Product {
  documentId: string;
  title: string;
  contest_id: string;
  tickets: Ticket[];
}

const {
  products,
  loading: productsLoading,
  error: productsError,
  fetchProducts,
} = useProducts();

const selectedProduct = ref<Product | null>(null);
const tickets = ref<Ticket[]>([]);
const winningTicket = ref<Ticket | null>(null);
const loading = ref(false);
const client = useStrapiClient();

// Fetch tickets for selected product
async function fetchTickets(product: Product) {
  loading.value = true;
  winningTicket.value = null;
  try {
    const response = await client<any>(
      `/products/${product.documentId}?populate[0]=tickets`
    );
    tickets.value = response.data.tickets || [];
  } catch (error) {
    console.error("Failed to fetch tickets:", error);
  } finally {
    loading.value = false;
  }
}

function pickWinner() {
  if (!tickets.value.length) return;

  try {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const randomIndex = array[0] % tickets.value.length;
    winningTicket.value = tickets.value[randomIndex];
  } catch (error) {
    console.error("Error picking winner:", error);
  }
}

watch(selectedProduct, async (newProduct) => {
  if (newProduct?.documentId) {
    await fetchTickets(newProduct);
  }
});

onMounted(async () => {
  await fetchProducts();
});
</script>

<template>
  <v-container>
    <v-progress-linear
      v-if="productsLoading"
      indeterminate
      color="primary"
    ></v-progress-linear>

    <v-alert v-if="productsError" type="error" class="mb-4">
      Failed to load competitions: {{ productsError }}
    </v-alert>

    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6">Raffle Picker</h1>

        <v-card class="mb-6">
          <v-card-text>
            <v-select
              v-model="selectedProduct"
              :items="products"
              item-title="title"
              item-value="documentId"
              label="Select Competition"
              :loading="productsLoading"
              :disabled="productsLoading"
              return-object
            >
              <template v-slot:item="{ props, item }">
                <v-list-item v-bind="props">
                  <template v-slot:title>
                    {{ item.raw.title }}
                  </template>
                  <template v-slot:subtitle>
                    ID: {{ item.raw.contest_id }}
                  </template>
                </v-list-item>
              </template>
            </v-select>

            <div v-if="tickets.length" class="mt-4">
              <p class="text-body-1">Total Tickets: {{ tickets.length }}</p>
            </div>

            <v-btn
              v-bind="useCompetitionButtonStyle()"
              :disabled="!tickets.length || loading"
              :loading="loading"
              block
              class="mt-4"
              @click="pickWinner"
            >
              Pick Winner
            </v-btn>
          </v-card-text>
        </v-card>

        <v-card
          v-if="winningTicket"
          class="mb-6"
          color="success"
          variant="outlined"
        >
          <v-card-text>
            <h2 class="text-h5 mb-2">🎉 Winner Selected!</h2>
            <v-list>
              <v-list-item>
                <v-list-item-title>Ticket Number</v-list-item-title>
                <v-list-item-subtitle>{{
                  winningTicket.ticket_number
                }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Customer Email</v-list-item-title>
                <v-list-item-subtitle>{{
                  winningTicket.customer_email
                }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Purchase Date</v-list-item-title>
                <v-list-item-subtitle>
                  {{ new Date(winningTicket.createdAt).toLocaleString() }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <v-card v-if="tickets.length">
          <v-data-table
            :headers="[
              { title: 'Ticket Number', key: 'ticket_number' },
              { title: 'Customer', key: 'customer_email' },
              { title: 'Purchase Date', key: 'createdAt' },
            ]"
            :items="tickets"
            :loading="loading"
          >
            <template v-slot:item.createdAt="{ item }">
              {{ new Date(item.createdAt).toLocaleString() }}
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
