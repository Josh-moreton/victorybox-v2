<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div
      id="snipcart"
      class="snipcart"
      hidden="true"
      :data-api-key="runtimeConfig.public.snipcart.publicApiKey"
      data-config-modal-style="side"
    ></div>
  </v-app>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
</script>
