<script setup lang="ts">
useHead({
  title: "Winners List - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "inner-pages",
});
</script>
<template>
  <WinnerBreadcrumbsWinnerList pageName="Winners List" />
  <WinnerSection />
  <WinnerWhyTrust />
  <Faq />
</template>

<style scoped></style>
