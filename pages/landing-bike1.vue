<script setup lang="ts">
import { bikeBlogData } from "@/../public/data/bike1PageData";
import bike from "/images/bike/b2.png";
import phone from "/images/global/phone-v3.png";

useHead({
  title: "Landing Bike One - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});
</script>
<template>
  <NavbarBlack />
  <LandingBike1Banner />
  <LandingBike1Category />
  <LandingBike1WinBike />
  <LandingBike1Work />
  <LandingBike1ProgramSection />
  <LandingBike1BlissSection />
  <HomeOneTestimonialSection />
  <HomeOneCallToSection :image="bike" pageName="Bike" />
  <LandingBike1PreviousWinnersSection />
  <HomeOneBlogSection :sectionBg="true" :blog-cards-data="bikeBlogData" />
  <HomeOneSmartphoneSection :image="phone" />
  <HomeOneSponsorSection />
  <Faq />
  <TabletButton />
  <LandingBike1Footer />
</template>

<style scoped></style>
