<script setup lang="ts">
import { electronic1blogData } from "@/../public/data/electornic1PageData";

useHead({
  title: "Landing Electronic Two - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});
</script>
<template>
  <NavbarBlack />
  <LandingElectornic2Electronic2Banner />
  <LandingElectornic2Electronic2HowIt />
  <LandingElectornic1Electronic1Win />
  <LandingElectornic1Electronic1LimitedSection />
  <LandingJewellery1Testimonial name="Electronic" />
  <LandingElectornic1ElectronicCallToAction />
  <LandingElectornic2Electronic2Category />
  <HomeOneBlogSection :sectionBg="true" :blog-cards-data="electronic1blogData" />
  <Faq />
  <LandingBicycle1Winner />
  <LandingBike2Footer />
</template>

<style scoped></style>
