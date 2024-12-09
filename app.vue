<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div id="snipcart" class="snipcart" hidden :data-api-key="runtimeConfig.public.snipcart.publicApiKey"
      data-config-modal-style="side" data-currency="GBP"></div>
  </v-app>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
</script>