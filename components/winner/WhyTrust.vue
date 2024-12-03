<script setup lang="ts">
import { winnerPageFeatures } from "@/../public/data/winnerPageData";
</script>
<template>
  <section class="feature-section winbg pt-120 pb-120">
    <!-- {/* Section Header */} -->
    <div class="container">
      <div class="row g-xl-4 g-3 justify-content-center mb-xxl-15 mb-xl-12 mb-lg-10 mb-9">
        <div class="col-lg-6">
          <div class="section__title text-center">
            <span class="display-four d-block n4-clr" data-aos="fade-down-left" data-aos-duration="1600"> Why are we worthy of your trust? </span>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Section Header */} -->
    <div class="container">
      <div class="row g-xxl-6 g-4">
        <div v-for="feature in winnerPageFeatures" :key="`feature-${feature.id}`" class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-left" :data-aos-duration="feature.duration">
          <div class="feature-items-v9 n0-bg text-center py-xxl-10 py-xl-7 py-lg-5 py-4 px-xxl-6 px-3 border radius24">
            <div class="icon-mf1 mb-xxl-8 mb-xl-6 mb-5">
              <NuxtImg :src="feature.imgSrc" alt="img" />
            </div>
            <h4 class="mb-xxl-3 mb-2">
              <NuxtLink to="#" class="n5-clr fs20 d-block s1-texthover">
                {{ feature.title }}
              </NuxtLink>
            </h4>
            <p class="cont-big n3-clr m-auto">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
