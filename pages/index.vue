<script setup lang="ts">

useHead({
  title: "Victorybox",
  meta: [{ name: "description", content: "Victory Awaits the Bold." }],
});

definePageMeta({
  layout: "landing-pages",
});</script>
<template>
  <Navbar />
  <Competitioncarousel />
  <HomeOneWinLotterySection />
  <Footer />
</template>

<style scoped></style>
