<script setup lang="ts">
import { clothing1blogData } from "@/../public/data/clothing1PageData";
import videoImage from "/images/howit/howvid-v17.png";
useHead({
  title: "Landing Competition One - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});
definePageMeta({
  layout: "landing-pages",
});
</script>
<template>
  <NavbarBlack />
  <LandingCompitition1Game1Banner />
  <LandingBicycle1HowItWork :videoImage="videoImage" />
  <LandingCompitition1Game1Win />
  <LandingCompitition1Game1LimitedSection />
  <LandingBicycle1Testimonial />
  <LandingElectornic1ElectronicCallToAction />
  <LandingClothing1Blog :blogPost="clothing1blogData" />
  <Faq :bgColor="true" />
  <HomeOneSponsorSection />
  <LandingBike1Footer />
</template>

<style scoped></style>
