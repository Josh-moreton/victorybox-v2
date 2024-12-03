<script setup lang="ts">
import { jewellery1blogData, jewellery1carCategories } from "@/../public/data/jewellery1PageData";


useHead({
  title: "Landing Jewellery One - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});

</script>
<template>
  <NavbarWhite />
  <LandingJewellery1Banner />
  <LandingJewellery1NextDraw />
  <LandingBike1Work />
  <LandingJewellery1WinLottery />
  <LandingJewellery1LimitedSection />
  <LandingJewellery1Testimonial />
  <LandingJewellery1CallToAction />
  <HomeOneCarCategorySection :sectionBg="true" :categoryImages="jewellery1carCategories" />
  <LandingBicycle1RecentBlog :sectionBg="true" :blogSectionData="jewellery1blogData" />
  <Faq />
  <LandingJewellery1Footer />
</template>

<style scoped></style>
