<script setup lang="ts">
definePageMeta({
  layout: "inner-pages",
});

const features = [
  {
    icon: "mdi-shield-check",
    title: "Modern Architecture",
    description:
      "Built with microservices and event-driven design for reliability",
  },
  {
    icon: "mdi-database-check",
    title: "Data Integrity",
    description: "Advanced queuing systems ensure transaction consistency",
  },
  {
    icon: "mdi-lightning-bolt",
    title: "High Performance",
    description: "Cloud-native infrastructure with autoscaling capabilities",
  },
  {
    icon: "mdi-security",
    title: "Enterprise Security",
    description: "Multi-layered security with real-time monitoring",
  },
];
</script>

<template>
  <v-container class="py-16">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="pa-8" elevation="2">
          <!-- Hero Section -->
          <div class="text-center mb-12">
            <h1 class="text-h2 font-weight-bold text-teal mb-6 font-parkinsans">
              Our Story
            </h1>
            <v-divider class="mb-6"></v-divider>
          </div>

          <!-- Mission Statement -->
          <v-card-text class="text-body-1">
            <p class="mb-6 text-h6">
              Founded in 2024, Victorybox emerged from a simple idea: create the
              most reliable, transparent, and technologically advanced raffle
              platform on the market.
            </p>

            <!-- Vision Section -->
            <v-row class="mb-8">
              <v-col cols="12" md="6">
                <v-card class="pa-4 h-100" variant="outlined">
                  <v-card-title class="text-teal font-parkinsans">
                    Our Vision
                  </v-card-title>
                  <v-card-text>
                    We're revolutionizing online raffles through modern software
                    architecture, ensuring every transaction is secure,
                    traceable, and processed with enterprise-grade reliability.
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card class="pa-4 h-100" variant="outlined">
                  <v-card-title class="text-teal font-parkinsans">
                    Our Mission
                  </v-card-title>
                  <v-card-text>
                    To deliver a world-class raffle platform built on modern
                    architectural principles, while supporting charitable causes
                    and providing an exceptional user experience.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- Technology Section -->
            <div class="mb-8">
              <h3 class="text-h5 mb-4 font-parkinsans text-teal">
                Technology at Our Core
              </h3>
              <p class="mb-4">
                Our platform is built on simple principles including:
              </p>
              <v-list>
                <v-list-item
                  v-for="(feature, index) in features"
                  :key="index"
                  :prepend-icon="feature.icon"
                  class="mb-2"
                >
                  <v-list-item-title>{{ feature.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    feature.description
                  }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </div>

            <!-- Technical Excellence -->
            <div class="text-center mt-12">
              <h3 class="text-h5 mb-4 font-parkinsans text-teal">
                Built for Scale
              </h3>
              <p class="mb-6">
                Our loosely coupled, event-driven architecture ensures high
                availability and seamless scalability. With real-time monitoring
                and automated failover, we provide a reliable platform that our
                users can trust.
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.font-parkinsans {
  font-family: "Parkinsans", sans-serif !important;
}

.text-teal {
  color: rgb(0, 150, 136) !important;
}
</style>
