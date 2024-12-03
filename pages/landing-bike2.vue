<script setup lang="ts">
import { bikeBlogData } from "@/../public/data/bike1PageData";
import bike from "/images/bike/b2.png";

useHead({
  title: "Landing Bike Two - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});
</script>
<template>
  <NavbarWhite />
  <LandingBike2Banner />
  <LandingBike2NextDraw />
  <LandingBike1Category />
  <LandingBike1WinBike />
  <LandingBike1Work />
  <LandingBike1ProgramSection />
  <LandingBike1BlissSection />
  <HomeOneTestimonialSection />
  <HomeOneCallToSection pageName="Bike" :image="bike" />
  <LandingBike1PreviousWinnersSection />
  <HomeOneBlogSection :sectionBg="true" :blog-cards-data="bikeBlogData" />
  <Faq :bgColor="false" />
  <LandingBicycle1Winner />
  <LandingBike2Footer />
</template>

<style scoped></style>
