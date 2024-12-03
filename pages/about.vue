<script setup lang="ts">

useHead({
  title: "About - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "inner-pages",
});
</script>
<template>
  <Breadcrumbs pageName="About Us" />
  <AboutSection />
  <AboutCountDown />
  <HomeOneLuxuryV1 sectionPadding="pt-120" />
  <HomeOneHowItSectionV1 />
  <HomeOneTestimonialSection />
  <Faq />
  <HomeOneSponsorSection />
</template>

<style scoped></style>
