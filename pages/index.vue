<script setup lang="ts">
useHead({
  title: "Victorybox",
  meta: [{ name: "description", content: "Victory Awaits the Bold." }],
});

definePageMeta({
  layout: "landing-pages",
});
</script>
<template>
  <Header />
  <Competitioncarousel />
  <Charities />
  <CompetitionsComponent />
  <Footer />
</template>

<style scoped></style>
