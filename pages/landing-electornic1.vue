<script setup lang="ts">
import { electronic1blogData, electronic1prizeImages } from "@/../public/data/electornic1PageData";

useHead({
  title: "Landing Electronic One - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});
</script>
<template>
  <NavbarWhite />
  <LandingElectornic1Banner />
  <LandingElectornic1HowItWork />
  <LandingElectornic1Electronic1Win />
  <LandingElectornic1Electronic1LimitedSection />
  <LandingElectornic1Electronic1Feature />
  <LandingBike1PreviousWinnersSection :sectionBg="true" :prizeImages="electronic1prizeImages" />
  <LandingElectornic1ElectronicCallToAction />
  <LandingBicycle1Testimonial title="Electronics" />
  <HomeOneBlogSection :sectionBg="true" :blog-cards-data="electronic1blogData" />
  <Faq />
  <LandingBike1Footer />
</template>

<style scoped></style>
