<script setup lang="ts">
import { jewellery2blogData, jewellery2CategoryData, jewellery2prizeImages, jewellery2winnerImage } from "@/../public/data/jewellery2PageData";
import videoImage from "/images/howit/ultimate-vidv8.png";

useHead({
  title: "Landing Jewellery Two  - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});

</script>
<template>
  <NavbarBlack />
  <LandingJewellery2Banner />
  <LandingBike1Category :categoryData="jewellery2CategoryData" />
  <LandingBicycle1HowItWork :videoImage="videoImage" />
  <LandingJewellery2Winning />
  <LandingJewellery2Progress />
  <LandingJewellery2Testimonial />
  <LandingJewellery1CallToAction />
  <LandingBike1PreviousWinnersSection :prizeImages="jewellery2prizeImages" :winnerImage="jewellery2winnerImage" />
  <HomeOneBlogSection :blogCardsData="jewellery2blogData" />
  <Faq />
  <TabletButton />
  <LandingBike1Footer />
</template>

<style scoped></style>
