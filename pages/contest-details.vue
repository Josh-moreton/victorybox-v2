<script setup lang="ts">
useHead({
  title: "Contest Details - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "inner-pages",
});
</script>
<template>
  <Breadcrumbs pageName="Contest Details" />
  <ContestDetailsSlider />
  <ContestDetailsContent />
  <ContestDetailsRelatedContest />
</template>

<style scoped></style>
