<!-- pages/account/my-tickets.vue -->
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});

interface Ticket {
  id: number;
  ticket_number: string;
  customer_email: string;
  status: string;
  product?: {
    Title: string;
  };
}

const user = useStrapiUser();
const client = useStrapiClient();
const tickets = ref<Ticket[]>([]);
const loading = ref(false);
const error = ref("");

// Add computed property to group tickets
const groupedTickets = computed(() => {
  const groups = tickets.value.reduce((acc, ticket) => {
    const title = ticket.product?.Title || "Unknown Competition";
    if (!acc[title]) {
      acc[title] = {
        tickets: [],
        count: 0,
      };
    }
    acc[title].tickets.push(ticket);
    acc[title].count++;
    return acc;
  }, {} as Record<string, { tickets: Ticket[]; count: number }>);

  return groups;
});

async function fetchUserTickets() {
  if (!user.value?.email) return;

  loading.value = true;
  try {
    const email = user.value.email.replace("@", "%40");
    const response = await client<{ data: Ticket[] }>(
      `/tickets/customer/${email}`
    );
    tickets.value = response.data;
  } catch (e: any) {
    error.value = e.message || "Failed to fetch tickets";
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchUserTickets();
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6">My Tickets</h1>

        <!-- User Email Display -->
        <v-card class="mb-6">
          <v-card-text>
            <div class="d-flex align-center">
              <v-icon icon="mdi-email" class="mr-2" />
              <span class="text-body-1">{{ user?.email }}</span>
            </div>
          </v-card-text>
        </v-card>

        <v-card>
          <v-card-text>
            <!-- Loading and Error states remain the same -->
            <div v-if="loading" class="text-center pa-4">
              <v-progress-circular indeterminate />
            </div>

            <v-alert v-else-if="error" type="error" class="mb-4">
              {{ error }}
            </v-alert>

            <div v-else-if="tickets.length === 0" class="text-center pa-4">
              <p class="text-body-1">You haven't purchased any tickets yet.</p>
              <v-btn color="primary" to="/competitions" class="mt-4">
                Browse Competitions
              </v-btn>
            </div>

            <!-- Grouped Tickets List -->
            <v-expansion-panels v-else>
              <v-expansion-panel
                v-for="(group, title) in groupedTickets"
                :key="title"
              >
                <v-expansion-panel-title>
                  <div class="d-flex align-center justify-space-between">
                    <span>{{ title }}</span>
                    <v-chip class="ml-4" color="primary" size="small">
                      {{ group.count }} tickets
                    </v-chip>
                  </div>
                </v-expansion-panel-title>

                <v-expansion-panel-text>
                  <v-list>
                    <v-list-item
                      v-for="ticket in group.tickets"
                      :key="ticket.id"
                      two-line
                    >
                      <v-list-item-title>
                        Ticket #{{ ticket.ticket_number }}
                      </v-list-item-title>

                      <template v-slot:append>
                        <v-chip
                          :color="
                            ticket.status === 'active' ? 'success' : 'grey'
                          "
                          size="small"
                        >
                          {{ ticket.status || "pending" }}
                        </v-chip>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card {
  border-radius: 8px;
}
</style>
