<script setup lang="ts">
import { PhInstagramLogo } from "@phosphor-icons/vue";
import p1 from "/images/man-global/p1.png";
import p2 from "/images/man-global/p2.png";
import p3 from "/images/man-global/p3.png";
import p4 from "/images/man-global/p4.png";
import p5 from "/images/man-global/p5.png";
import p6 from "/images/man-global/p6.png";
</script>
<template>
  <section class="winner-man n5-bg pt-120 pb-120">
    <div class="container">
      <h3 class="n0-clr text-center mb-xxl-15 mb-xl-10 mb-8">Winner People</h3>
      <div class="winner-people-wrap">
        <MotionEffectMotionFade v-for="(img, i) in [p1, p2, p3, p4, p5, p6]" :key="`winner-people-${i}`" class="winner-people-item">
          <div class="thumb d-center">
            <NuxtImg :src="img" alt="img" />
            <NuxtLink to="#" class="soc p1-bg radius-circle d-center">
              <PhInstagramLogo class="ph-bold ph-instagram-logo"></PhInstagramLogo>
            </NuxtLink>
          </div>
        </MotionEffectMotionFade>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
