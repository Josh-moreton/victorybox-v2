<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import CountUp from "vue-countup-v3";
import heroThumb from "/images/banner/hero-thumb.png";
import lottoB8 from "/images/global/lotto-b8.png";
</script>
<template>
  <div class="banner-section-v2 pt-70-fixed n4-bg position-relative overflow-hidden">
    <!-- {/* Banner Content */} -->
    <div class="container pt-xl-20 pt-md-10 pt-sm-7 pt-4 mt-xl-10">
      <div class="row justify-content-between">
        <div class="col-xxl-6 col-xl-7 col-lg-6">
          <div class="banner-content-v1 pb-lg-20 pb-10">
            <div class="d-flex mb-sm-3 mb-5 align-items-center gap-xxl-8 gap-lg-6 gap-4 flex-wrap">
              <ul class="entry-win d-flex align-items-center gap-3">
                <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1000">
                  <NuxtLink to="#" class="fs-four act4-texthover nw1-clr"> Entry </NuxtLink>
                </li>
                <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1200">
                  <PhArrowRight class="ti ti-arrow-right fs-four act4-texthover nw1-clr"></PhArrowRight>
                </li>
                <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1400">
                  <NuxtLink to="#" class="fs-four act4-texthover nw1-clr"> Draw </NuxtLink>
                </li>
                <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1600">
                  <PhArrowRight class="ti ti-arrow-right fs-four act4-texthover nw1-clr"></PhArrowRight>
                </li>
                <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="2000">
                  <NuxtLink to="#" class="fs-four act4-texthover nw1-clr"> Win </NuxtLink>
                </li>
              </ul>
              <NuxtLink to="/contest" class="custom-bigarrow">
                <span class="icon">
                  <svg width="137" height="16" viewBox="0 0 137 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M136.707 8.70712C137.098 8.31659 137.098 7.68343 136.707 7.29291L130.343 0.928944C129.953 0.538419 129.319 0.538419 128.929 0.928943C128.538 1.31947 128.538 1.95263 128.929 2.34316L134.586 8.00001L128.929 13.6569C128.538 14.0474 128.538 14.6806 128.929 15.0711C129.319 15.4616 129.953 15.4616 130.343 15.0711L136.707 8.70712ZM-8.74228e-08 9L136 9.00001L136 7.00001L8.74228e-08 7L-8.74228e-08 9Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </NuxtLink>
            </div>
            <div class="display-one n0-clr mb-6" data-aos="zoom-in-up" data-aos-duration="1000">
              Two-Wheel
              <div class="d-xxl-flex d-grid align-items-center justify-content-between winner-span gap-xxl-5 gap-4 flex-xxl-nowrap flex-wrap">
                <span class="wins nw1-clr d-flex align-items-center gap-6" data-aos="zoom-in-down" data-aos-duration="2000">
                  Dream
                  <span class="wins p1-clr act4-underline act4-clr">Begin</span>
                </span>
              </div>
            </div>
            <p class="nw2-clr max-630 fs18 bn-pra mb-xxl-10 mb-sm-8 mb-6" data-aos="zoom-out-up" data-aos-duration="1000">
              Now is your chance to win a Lottery! Check out the prestige cars you can win in our car prize draws. Will you be our next lucky winner?
            </p>
            <div class="d-flex align-items-center gap-xl-8 gap-3 flex-wrap mb-xxl-20 mb-xl-10 pb-xl-10 pb-sm-4">
              <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                <span class="kew-text s1-bg n4-clr act3-bg">Participant Now</span>
                <div class="kew-arrow act3-bg">
                  <div class="kt-one">
                    <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                  </div>
                  <div class="kt-two">
                    <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink to="/howtoplay" class="how-cont act4-texthover text-decoration-underline nw1-clr fw_700" data-aos="zoom-in-left" data-aos-duration="800"> How It’s Works </NuxtLink>
            </div>
            <div class="d-flex align-items-center gap-xxl-11 gap-xl-8 gap-lg-6 gap-5">
              <div class="odometer__items" data-aos="zoom-in-down" data-aos-duration="1000">
                <div class="cont d-flex align-items-center">
                  <span class="odometer display-four nw1-clr fw_800">
                    <count-up :end-val="1750"></count-up>
                  </span>
                  <span class="plus__icon display-four nw1-clr fw_800">+</span>
                </div>
                <p class="fs18 fw_600 nw1-clr">Verified Users</p>
              </div>
              <div class="odometer__items" data-aos="zoom-in-up" data-aos-duration="1000">
                <div class="cont d-flex align-items-center">
                  <span class="odometer display-four nw1-clr fw_800">
                    <count-up :end-val="15"></count-up>
                  </span>
                </div>
                <p class="fs18 fw_600 nw1-clr">Years on the market</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-5 col-lg-6">
          <MotionEffectMotionFade class="banner-thumbm">
            <NuxtImg :src="heroThumb" alt="img" />
          </MotionEffectMotionFade>
        </div>
      </div>
    </div>
    <!-- {/* Banner Content */} -->

    <!-- {/* Scroll Top */} -->
    <NuxtLink to="#down-scroll" class="scroll-bn1 act3-bg radius100 d-flex justify-content-center align-items-center justify-content-center">
      <span class="d-grid gap-xxl-5 gap-xl-4 gap-3 justify-content-center text-center m-auto">
        <span class="n4-clr fs18 d-block fw_600">Scroll</span>
        <span class="scroll-iconrarea">
          <svg width="16" height="65" viewBox="0 0 16 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.29289 64.7071C7.68341 65.0976 8.31658 65.0976 8.7071 64.7071L15.0711 58.3431C15.4616 57.9526 15.4616 57.3195 15.0711 56.9289C14.6805 56.5384 14.0474 56.5384 13.6569 56.9289L8 62.5858L2.34314 56.9289C1.95262 56.5384 1.31945 56.5384 0.92893 56.9289C0.538405 57.3195 0.538405 57.9526 0.92893 58.3431L7.29289 64.7071ZM7 -4.37121e-08L7 64L9 64L9 4.37121e-08L7 -4.37121e-08Z"
              fill="black"
            />
          </svg>
        </span>
      </span>
    </NuxtLink>
    <!-- {/* Scroll Top */} -->

    <!-- {/* Boom Eight */} -->
    <NuxtImg :src="lottoB8" alt="img" class="boom-eight" />
  </div>
</template>

<style scoped></style>
