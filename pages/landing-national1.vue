<script setup lang="ts">
import { national1blogSectionData } from "@/../public/data/nationPageData";
import callToActionImage from "/images/global/super-win.png";

useHead({
  title: "Landing National one - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});

</script>
<template>
  <NavbarBlack />
  <LandingNational1Banner />
  <LandingNational1HowItWork />
  <LandingNational1Win />
  <LandingNft2Testimonial />
  <HomeOneCallToSection :image="callToActionImage" />
  <LandingRealestate2RealEstate2WinningBig />
  <LandingBicycle1RecentBlog :blogSectionData="national1blogSectionData" />
  <Faq />
  <LandingBike1Footer />
</template>

<style scoped></style>
