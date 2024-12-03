<script setup lang="ts">
import { realEstate2winners } from "@/../public/data/realestate1PageData";
import { PhArrowRight } from "@phosphor-icons/vue";
import ball from "/images/global/ball-v12.png";
import dimondV12 from "/images/global/dimond-v12.png";
import icon from "/images/global/section-icon.png";
</script>

<template>
  <section class="winning-bigv12 pt-120 pb-120 position-relative">
    <!-- {/* Section Header */} -->
    <div class="container">
      <div class="row g-xl-4 g-3 align-items-center justify-content-center mb-xxl-12 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title text-center">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap justify-content-center align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="icon" alt="img" />
              <h5 class="s1-clr fw_700">People In Illinois Are</h5>
            </div>
            <h2 class="display-four d-block n4-clr">
              Winning
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Big! </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Section Header */} -->

    <!-- {/* Winning Big body */} -->
    <div class="container">
      <div class="row g-6 justify-content-center">
        <MotionEffectMotionFade v-for="winner in realEstate2winners" :key="`winner-${winner.id}`" class="col-lg-4 col-md-6 col-sm-6">
          <div class="winning-bigv12-item m-auto">
            <div class="thumb radius-circle w-100">
              <NuxtImg :src="winner.imgSrc" alt="img" class="radius-circle w-100" />
            </div>
            <div class="content-wing act3-bg radius100 py-xxl-5 py-3 px-xxl-5 px-3 text-center">
              <h2 class="n5-clr mb-xxl-3 mb-2">{{ winner.amount }}</h2>
              <p class="n2-clr fs18">
                {{ winner.name }}
                <span class="d-block">{{ winner.game }}</span>
              </p>
            </div>
          </div>
        </MotionEffectMotionFade>
      </div>
      <div class="text-center mt-xxl-20 mt-xl-15 mt-10">
        <NuxtLink to="/winners" class="kewta-btn d-inline-flex align-items-center">
          <span class="kew-text s1-border s1-bg n0-clr">See All Winners</span>
          <div class="kew-arrow kew-rotate s1-bg">
            <div class="kt-one">
              <PhArrowRight class="ti ti-arrow-right n0-clr" />
            </div>
            <div class="kt-two">
              <PhArrowRight class="ti ti-arrow-right n0-clr" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- {/* Winning Big body */} -->
    <NuxtImg :src="ball" alt="img" class="ball-v12" />
    <NuxtImg :src="dimondV12" alt="img" class="dimond-v12" />
  </section>
</template>

<style scoped></style>
