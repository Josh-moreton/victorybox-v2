<script setup lang="ts">
import { nft1data } from "@/../public/data/nft1PageData";

useHead({
  title: "Landing NFT One - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "inner-pages",
});
</script>
<template>
  <NavbarWhite />
  <LandingNft1Banner />
  <LandingNft1NextDraw />
  <LandingElectornic1HowItWork />
  <LandingNft1WinProduct />
  <LandingRealestate2RealEstate2WinningBig />
  <LandingElectornic1ElectronicCallToAction title="NFT" />
  <LandingBicycle1Testimonial title="NFT" />
  <HomeOneBlogSection :sectionBg="true" :blogCardsData="nft1data" />
  <Faq />
  <LandingBicycle1Winner />
  <LandingBike2Footer />
</template>

<style scoped></style>
