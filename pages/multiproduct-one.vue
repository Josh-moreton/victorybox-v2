<script setup lang="ts">
import { multiProduct2data, multiProduct2testimonials } from "@/../public/data/multiProductPageData";

useHead({
  title: "multiproduct One - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "multiproduct",
});
</script>
<template>
  <MultiproductMultiProductOneBanner />
  <HomeOneLotteryService />
  <MultiproductMultiProductOneCategory />
  <MultiproductMultiProductOneWinTab />
  <AboutCountDown />
  <MultiproductMultiProductPreviousWinners />
  <MultiproductMultiProductOneHowItWork />
  <HomeOneTestimonialSection :testimonials="multiProduct2testimonials" />
  <HomeOneCallToSection />
  <HomeOneBlogSection :blogCardsData="multiProduct2data" />
  <Faq />
  <HomeOneSponsorSection />
  <TabletButton />
</template>

<style scoped></style>
