<template>
  <v-container class="pa-md-16" fluid>
    <v-row align="center">
      <v-col cols="12" lg="6">
        <v-responsive max-width="450">
          <h1 class="font-weight-bold mb-4 text-h5 text-sm-h4">
            Subscribe to our newsletter.
          </h1>

          <p class="text-subtitle-2 text-medium-emphasis mb-6">
            Stay updated with our latest news, exclusive offers, and upcoming
            events. Join our community and never miss out on exciting
            opportunities.
          </p>

          <v-text-field
            flat
            placeholder="Enter your email"
            rounded="lg"
            type="email"
            variant="solo-filled"
          >
            <template #append-inner>
              <v-btn
                class="text-none"
                color="primary"
                text="Subscribe"
                variant="flat"
              />
            </template>
          </v-text-field>
        </v-responsive>
      </v-col>

      <v-col
        v-for="item in newsletterItems"
        :key="item.title"
        cols="12"
        lg="3"
        md="6"
      >
        <div>
          <v-avatar class="mb-2" color="primary" :icon="item.icon" rounded />

          <p class="text-body-2 font-weight-bold pb-1">
            {{ item.title }}
          </p>

          <p class="text-caption">{{ item.subtitle }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const newsletterItems = [
  {
    title: "Weekly Prizes",
    subtitle:
      "Enter our weekly draws for a chance to win exciting prizes every week.",
    icon: "mdi-trophy", // Changed to a trophy icon
  },
  {
    title: "Chances for Free Tickets",
    subtitle:
      "Subscribe to our newsletter for exclusive opportunities to win free tickets.",
    icon: "mdi-ticket", // Changed to a ticket icon
  },
];
</script>
