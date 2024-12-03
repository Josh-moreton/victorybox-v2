<script setup lang="ts">
import { national2blogData } from "@/../public/data/national2PageData";
import callToActionImage from "/images/banner/banner19-thumb.png";
import howIt19 from "/images/howit/howit19.png";

useHead({
  title: "Landing National Two - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});

</script>
<template>
  <NavbarBlack />
  <LandingNational2Banner />
  <LandingNational2NextDraw />
  <LandingBicycle1HowItWork :section-bg="true" :videoImage="howIt19" />
  <LandingNational1Win />
  <LandingBicycle1Testimonial />
  <LandingJewellery1CallToAction :image="callToActionImage" />
  <HomeOneBlogSection :sectionBg="true" :blogCardsData="national2blogData" />
  <Faq />
  <LandingBicycle1Winner />
  <LandingBike2Footer />
</template>

<style scoped></style>
