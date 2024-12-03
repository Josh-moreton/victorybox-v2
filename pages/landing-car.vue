<script setup lang="ts">
import phone from "/images/global/phonecar.png";

useHead({
  title: "landing Car - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});
</script>
<template>
  <NavbarBlack />
  <LandingCarBanner />
  <LandingCarNextDraw />
  <HomeOneLotteryService />
  <HomeOneLuxuryV1 />
  <HomeOneHowItSectionV1 />
  <HomeOneWinLotterySection />
  <LandingCarLimitedTimeOffer />
  <HomeOneCarCategorySection />
  <HomeOneTestimonialSection />
  <HomeOneCallToSection />
  <HomeOneBlogSection />
  <Faq />
  <HomeOneSmartphoneSection :image="phone" />
  <HomeOneSponsorSection />
  <LandingCarFooter />
</template>

<style scoped></style>
