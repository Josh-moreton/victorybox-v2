<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";

defineProps<{
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  link: string;
}>();
</script>
<template>
  <MotionEffectMotionFade class="col-lg-6 col-md-6">
    <div class="blog-items1 blog-v1-hover">
      <div class="boxs">
        <div class="thumb mb-xxl-6 mb-4">
          <NuxtImg :src="imageUrl" alt="blog-img" />
          <div class="dats d-center">
            <span class="bos">
              <span class="d-block nw1-clr fw_700">{{ date }}</span>
            </span>
          </div>
        </div>
        <div class="content">
          <h3 class="mb-xxl-4 mb-3">
            <NuxtLink :to="`${link}`" class="n4-clr">{{ title }}</NuxtLink>
          </h3>
          <p class="fs18 pra bbd pb-xxl-5 pb-xl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">{{ description }}</p>
          <NuxtLink :to="`${link}`" class="kewta-btn d-inline-flex align-items-center">
            <span class="kew-text n4-bg n0-clr">Read More</span>
            <div class="kew-arrow n4-bg">
              <div class="kt-one">
                <PhArrowRight class="n0-clr" />
              </div>
              <div class="kt-two">
                <PhArrowRight class="n0-clr" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div></div
  ></MotionEffectMotionFade>
</template>

<style scoped></style>
