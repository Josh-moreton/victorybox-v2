<script setup lang="ts">
import { realEstate1BlogData } from "@/../public/data/realestate1PageData";
import videoImage from "/images/howit/how-vid11.png";

import callToActionImage from "/images/howit/real-call.png";

useHead({
  title: "Landing Real Estate One - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});

</script>
<template>
  <NavbarWhite />
  <LandingRealestate1RealEstate1Banner />
  <LandingRealestate1RealEstate1BedCat />
  <LandingElectornic2Electronic2HowIt :image="videoImage" />
  <LandingRealestate1RealEstate1Award />
  <LandingRealestate1RealEstate1WinProduct />
  <LandingRealestate1RealEstate1Video />
  <LandingRealestate1RealEstate1Testimonial />
  <LandingJewellery1CallToAction :image="callToActionImage" title="Estate" />
  <HomeOneBlogSection :sectionBg="true" :blogCardsData="realEstate1BlogData" />
  <Faq />
  <LandingBicycle1Winner />
  <LandingBike2Footer />
</template>

<style scoped></style>
