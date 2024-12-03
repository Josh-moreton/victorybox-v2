<script setup lang="ts">
import { compitation2blogData } from "@/../public/data/compitation2PageData";
import callToActionImage from "/images/howit/how18.png";

useHead({
  title: "Landing Competition Two - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});
definePageMeta({
  layout: "landing-pages",
});
</script>
<template>
  <NavbarBlack />
  <LandingCompitition2Game2Banner />
  <LandingElectornic1HowItWork />
  <LandingCompitition1Game1Win />
  <LandingCompitition2Game2Video />
  <LandingNft2Testimonial />
  <LandingJewellery1CallToAction :image="callToActionImage" />
  <LandingRealestate2RealEstate2WinningBig />
  <HomeOneBlogSection :sectionBg="true" :blogCardsData="compitation2blogData" />
  <Faq />
  <LandingBicycle1Winner />
  <LandingBike2Footer />
</template>

<style scoped></style>
