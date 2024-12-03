<script setup lang="ts">
import { realEstate1BlogData } from "@/../public/data/realestate1PageData";
import videoImage from "/images/howit/how-vid11.png";
import callToActionImage from "/images/howit/real-call.png";

useHead({
  title: "Landing Real Estate Two - Lottery & Giveaway NextJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NextJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});
</script>
<template>
  <NavbarWhite />
  <LandingRealestate2RealEstate2Banner />
  <LandingBicycle1HowItWork :videoImage="videoImage" :sectionBg="true" />
  <LandingRealestate1RealEstate1Award />
  <LandingRealestate2RealEstate2WinProduct />
  <LandingRealestate1RealEstate1Video />
  <LandingRealestate1RealEstate1Testimonial />
  <LandingJewellery1CallToAction :image="callToActionImage" title="Estate" />
  <LandingRealestate2RealEstate2WinningBig />
  <HomeOneBlogSection :sectionBg="true" :blogCardsData="realEstate1BlogData" />
  <Faq />
  <LandingBicycle1Winner />
  <LandingBicycle1Footer />
</template>

<style scoped></style>
