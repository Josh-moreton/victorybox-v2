<script setup lang="ts">
import { PhArrowRight, PhCheck } from "@phosphor-icons/vue";
import aboutThumb from "/images/howit/about-thumb.png";
</script>
<template>
  <div class="about-section pt-120 pb-120 n0-bg overflow-hidden">
    <div class="container">
      <div class="about-wrapper-core">
        <div class="row g-xxl-12 g-xl-6 g-5">
          <div class="col-lg-6">
            <div class="about-thumb-core" data-aos="zoom-in" data-aos-duration="1600">
              <NuxtImg :src="aboutThumb" alt="img" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content-core">
              <div class="section__title mb-xxl-8 mb-6">
                <span class="display-four d-block n4-clr mb-xxl-4 mb-xl-3 mb-2">
                  News &
                  <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Analysis </span>
                </span>
                <p class="fs20 n3-clr" data-aos="fade-up-right" data-aos-duration="1400">
                  Welcome to Lottovibe, where luck meets excitement in the world of lotteries! We are passionate about creating a thrilling and secure platform that brings the joy of winning to
                  players around the globe
                </p>
              </div>
              <ul class="about-list d-grid gap-xxl-4 gap-3 mb-xxl-10 mb-xl-8 mb-7">
                <li class="d-flex align-items-center gap-xxl-4 gap-3" data-aos="zoom-in-up" data-aos-duration="1200">
                  <span class="icon cmn-40 d-center p1-bg radius-circle">
                    <PhCheck class="ph ph-check n4-clr" />
                  </span>
                  <span class="fs20 fw_600 n1-clr">Playing It Global for Over a Decade</span>
                </li>
                <li class="d-flex align-items-center gap-xxl-4 gap-3" data-aos="zoom-in-up" data-aos-duration="1400">
                  <span class="icon cmn-40 d-center p1-bg radius-circle">
                    <PhCheck class="ph ph-check n4-clr" />
                  </span>
                  <span class="fs20 fw_600 n1-clr">Play from Anywhere in the World</span>
                </li>
                <li class="d-flex align-items-center gap-xxl-4 gap-3" data-aos="zoom-in-up" data-aos-duration="1600">
                  <span class="icon cmn-40 d-center p1-bg radius-circle">
                    <PhCheck class="ph ph-check n4-clr" />
                  </span>
                  <span class="fs20 fw_600 n1-clr">Absolutely No Commissions Taken</span>
                </li>
              </ul>
              <NuxtLink to="/contact" class="kewta-btn kewta-alt d-inline-flex align-items-center">
                <span class="kew-text s1-bg n0-clr" data-aos="zoom-in-left" data-aos-duration="900"> Contact Us </span>
                <div class="kew-arrow s1-bg" data-aos="zoom-in-left" data-aos-duration="1600">
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
