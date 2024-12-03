<script setup lang="ts">
import sectionIcon from "/images/global/section-icon.png";

defineProps<{
  text: string;
}>();
</script>
<template>
  <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
    <NuxtImg :src="sectionIcon" alt="img" />
    <h5 class="s1-clr fw_700">{{ text }}</h5>
  </div>
</template>

<style scoped></style>
