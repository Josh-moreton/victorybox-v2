<script setup lang="ts">
import { prizeImages } from "@/../public/data/bicycle1PageData";
import bicycleCallToAction from "/images/bike/bb-3.png";
import bicycle from "/images/bike/program-v5.png";
import bicycleAwaits from "/images/bike/wheelv5.png";

useHead({
  title: "Landing Bicycle One - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});
</script>
<template>
  <NavbarBlack />
  <LandingBicycle1Banner />
  <LandingBicycle1NextDraw />
  <LandingBicycle1Category />
  <LandingBicycle1HowItWork />
  <LandingBicycle1WinBicycle />
  <LandingBike1ProgramSection :image="bicycle" text="Cycle" />
  <LandingBike1BlissSection :image="bicycleAwaits" />
  <LandingBicycle1Testimonial />
  <HomeOneCallToSection :image="bicycleCallToAction" pageName="Bicycle" />
  <LandingBike1PreviousWinnersSection :prizeImages="prizeImages" />
  <LandingBicycle1RecentBlog />
  <Faq />
  <LandingBicycle1Winner />
  <LandingBicycle1Footer />
</template>

<style scoped></style>
