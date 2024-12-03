<script setup lang="ts">
useHead({
  title: "Contest - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "inner-pages",
});
</script>
<template>
  <Breadcrumbs pageName="Latest Contest" />
  <ContestAllContests />
</template>

<style scoped></style>
