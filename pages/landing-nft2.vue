<script setup lang="ts">
import { nft1data } from "@/../public/data/nft1PageData";
import image from "/images/howit/how14.png";

useHead({
  title: "Landing Nft Two - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "landing-pages",
});

</script>
<template>
  <NavbarBlack />
  <LandingNft2Banner />
  <LandingNft2HowItWork />
  <LandingNft1WinProduct />
  <LandingJewellery1CallToAction :image="image" />
  <LandingNft2Testimonial />
  <HomeOneBlogSection :sectionBg="true" :blogCardsData="nft1data" />
  <Faq />
  <LandingJewellery1Footer />
</template>

<style scoped></style>
