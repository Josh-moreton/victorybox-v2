<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import AnimationCard from "./AnimationCard.vue";
import lifeArrow from "/images/global/life-arrow.png";
</script>
<template>
  <div class="tablet-section tablet-custom-v1 n4-bg pt-120 overflow-hidden">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="section__title text-center tablet-section-title pb-120 position-relative">
            <div class="kewta-btn d-inline-flex mb-xxl-8 mb-6 align-items-center">
              <span class="kew-text act3-border p1-clr">Don&apos;t Miss Out</span>
              <div class="kew-arrow act3-bg">
                <div class="kt-one">
                  <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                </div>
                <div class="kt-two">
                  <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                </div>
              </div>
            </div>
            <span class="display-two d-block n0-clr" data-aos="zoom-in-down" data-aos-duration="1200"> Play for Life-Changing Winning Prizes </span>
            <NuxtImg :src="lifeArrow" alt="img" class="tablet-arrow" />
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden">
      <AnimationCard />
    </div>
  </div>
</template>

<style scoped></style>
