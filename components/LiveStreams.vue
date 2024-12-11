<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text class="text-center py-12">
            <v-icon
              icon="mdi-broadcast-off"
              size="64"
              color="grey"
              class="mb-4"
            />
            <h2 class="text-h5 text-medium-emphasis mb-2">
              No Livestreams Today
            </h2>
            <p class="text-body-1 text-grey">
              Check back later for upcoming raffle streams.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineOptions({
  name: "LiveStreams",
});
</script>
