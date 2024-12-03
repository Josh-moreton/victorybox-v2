<script setup lang="ts">
import callToActionImage from "/images/global/super-win.png";
import videoImage from "/images/howit/vid-v15.png";

useHead({
  title: "Landing Clothing One - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});
</script>
<template>
  <NavbarWhite />
  <LandingClothing1Banner />
  <LandingBicycle1HowItWork :videoImage="videoImage" />
  <LandingClothing1Win />
  <LandingClothing1ClothingVideo />
  <LandingBicycle1Testimonial title="Cloth" />
  <HomeOneCallToSection :image="callToActionImage" />
  <LandingClothing1Blog />
  <Faq :bgColor="true" />
  <HomeOneSponsorSection />
  <LandingBicycle1Winner />
  <LandingBike2Footer />
</template>

<style scoped></style>
