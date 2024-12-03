<script setup lang="ts">
import { featureItems } from "@/../public/data/featurePageData";
</script>

<template>
  <section class="main-feature pt-120 pb-120">
    <div class="container">
      <div class="row g-6">
        <MotionEffectMotionFade v-for="(item, index) in featureItems" :key="`main-feature-${index}`" class="col-lg-4 col-md-6 col-sm-6">
          <div class="m-feature-items p-xxl-8 p-xl-6 p-4 text-center radius24">
            <div class="thumb mb-xxl-8 mb-xl-6 mb-4 w-100">
              <NuxtImg :src="item.imageSrc" :alt="item.imageAlt" class="w-100" />
            </div>
            <div class="content">
              <h4 class="n4-clr mb-xxl-3 mb-2">{{ item.title }}</h4>
              <p class="n3-clr">{{ item.description }}</p>
            </div>
          </div>
        </MotionEffectMotionFade>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
