<script setup lang="ts">
import callToActionImage from "/images/howit/how16.png";

useHead({
  title: "Landing Clothing Two - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});
definePageMeta({
  layout: "landing-pages",
});
</script>
<template>
  <NavbarBlack />
  <LandingClothing2Banner />
  <LandingElectornic1HowItWork />
  <LandingClothing1Win :sectionBg="true" />
  <LandingClothing2LimitedTime />
  <LandingNft2Testimonial />
  <LandingJewellery1CallToAction :image="callToActionImage" />
  <LandingClothing1Blog />
  <Faq :bgColor="true" />
  <LandingBike1Footer />
</template>

<style scoped></style>
