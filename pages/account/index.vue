<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6">My Account</h1>
        <v-card>
          <v-card-text>
            <p>Welcome, {{ user?.email }}</p>
            <v-btn color="primary" @click="logout"> Logout </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
  layout: "inner-pages",
});

const { login, logout } = useStrapiAuth();
const user = useStrapiUser();
</script>
