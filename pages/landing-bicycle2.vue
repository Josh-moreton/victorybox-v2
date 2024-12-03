<script setup lang="ts">
import { bicycle2prizeImages } from "@/../public/data/bicycle2PageData";
import bicycleCallToAction from "/images/bike/bb-3.png";
import bicycle from "/images/bike/program-v5.png";
import bicycleAwaits from "/images/bike/wheelv5.png";

useHead({
  title: "Landing Bicycle Two - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});
</script>
<template>
  <NavbarBlack />
  <LandingBicycle2Banner />
  <LandingBicycle1Category />
  <LandingBicycle1HowItWork />
  <LandingBicycle1WinBicycle />
  <LandingBike1ProgramSection :image="bicycle" text="Cycle" :sectionBg="true" />
  <LandingBike1BlissSection :image="bicycleAwaits" />
  <HomeOneTestimonialSection />
  <HomeOneCallToSection :image="bicycleCallToAction" pageName="Bicycle" />
  <LandingBike1PreviousWinnersSection :prizeImages="bicycle2prizeImages" />
  <LandingBicycle1RecentBlog />
  <Faq />
  <LandingBicycle1Winner />
  <LandingBicycle1Footer />
</template>

<style scoped></style>
