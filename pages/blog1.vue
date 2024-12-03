<script setup lang="ts">

useHead({
  title: "Blog One - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

useHead({
  title: "Blog - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "inner-pages",
});
</script>
<template>
  <Breadcrumbs pageName="Blog" />
  <Blog1AllBlogs />
</template>

<style scoped></style>
