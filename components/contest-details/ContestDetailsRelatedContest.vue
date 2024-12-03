<script setup lang="ts">
import { contestPageLotteryItems } from "@/../public/data/contestPageData";
</script>
<template>
  <section class="contest-section pt-120 pb-120 n0-bg">
    <div class="container">
      <h2 class="fw_700 mb-xxl-15 mb-xl-10 mb-8 n4-clr">Related Competitions</h2>
      <div class="row g-6">
        <HomeOneCarWinCard v-for="(item, index) in contestPageLotteryItems" :key="`lottery-items-${index}`" v-bind="item" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
