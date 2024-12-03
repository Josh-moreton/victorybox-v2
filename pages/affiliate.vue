<script setup lang="ts">

useHead({
  title: "Affiliate - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});
definePageMeta({
  layout: "inner-pages",
});
</script>
<template>
  <Breadcrumbs pageName="Affiliate" />
  <AboutSection />
  <AffiliateReferralBonus />
  <AffiliateRankingLastMonth />
  <Faq :bgColor="true" />
  <HomeOneSponsorSection />
</template>

<style scoped></style>
