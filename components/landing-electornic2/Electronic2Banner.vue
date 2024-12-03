<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import CountUp from "vue-countup-v3";
import MotionFadeDownToTop from "../motionEffect/MotionFadeDownToTop.vue";
import banner10v1 from "/images/banner/banner-10v1.png";
import banner10v2 from "/images/banner/banner-10v2.png";
import bannerV10 from "/images/banner/bannerv10.png";
import star from "/images/global/star-copy.png";
</script>
<template>
  <div class="banner-section-v8 pt-70-fixed n4-bg position-relative pb-120 overflow-hidden">
    <!-- {/* Banner Content */} -->
    <div class="banner-v10wraper position-relative">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-7 col-md-8">
            <div class="banner-content-v10 pt-xxl-20 pt-12 mt-xl-10 mt-lg-6 mt-5">
              <div class="bn-content-box">
                <div class="d-flex mb-sm-6 mb-6 align-items-center gap-xxl-8 gap-lg-6 gap-4 flex-wrap">
                  <ul class="entry-win d-flex align-items-center gap-3">
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1000">
                      <NuxtLink to="#" class="fs-four p1-clr"> Entry </NuxtLink>
                    </li>
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1200">
                      <PhArrowRight class="ti ti-arrow-right fs-four p1-clr" />
                    </li>
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1400">
                      <NuxtLink to="#" class="fs-four p1-clr"> Draw </NuxtLink>
                    </li>
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1600">
                      <PhArrowRight class="ti ti-arrow-right fs-four p1-clr" />
                    </li>
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="2000">
                      <NuxtLink to="#" class="fs-four p1-clr"> Win </NuxtLink>
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
                <div class="display-one position-relative cus-z1 fw_800 text-capitalize n0-clr mb-xxl-5 mb-3">
                  <span class="fw_800 text-capitalize d-block">Be the Next </span>
                  <span class="d-flex text-capitalize align-items-center mb-3 n0-clr gap-3 text-uppercase" data-aos="zoom-in-up" data-aos-duration="2200">
                    <span>Lucky</span>
                    <span class="fw_800 act3-clr d-block position-relative">
                      Winner
                      <span class="rotate-arrow-v10">
                        <svg width="319" height="12" viewBox="0 0 319 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.998292 6.78838C51.2347 1.31804 185.143 -5.43784 318.883 11.3014" stroke="#FEC92F" />
                        </svg>
                      </span>
                    </span>
                  </span>
                  <span class="d-flex nw1-clr fw_800 text-capitalize align-items-center gap-3" data-aos="zoom-in-left" data-aos-duration="2400"> with Us </span>
                </div>
                <p class="nw2-clr fs20 max-520 mb-xxl-10 mb-lg-8 mb-5" data-aos="fade-down-right" data-aos-duration="1500">
                  Get ready for a winning experience like no other! Join us in the thrill of anticipation and be the next lucky winner.
                </p>
                <div class="cus-z1 position-relative w-100">
                  <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                    <span class="kew-text n4-clr act3-bg">Participant Now</span>
                    <div class="kew-arrow act3-bg">
                      <div class="kt-one">
                        <PhArrowRight class="ti ti-arrow-right n4-clr" />
                      </div>
                      <div class="kt-two">
                        <PhArrowRight class="ti ti-arrow-right n4-clr" />
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div class="bn1-odometer mt-xxl-19 mt-xl-12 mt-lg-9 mt-md-7 mt-6 pt-0 d-flex align-items-center gap-xxl-11 gap-xl-8 gap-lg-6 gap-5">
                  <div class="odometer__items">
                    <div class="cont d-flex align-items-center">
                      <span class="odometer display-four p1-clr fw_800">
                        <count-up :end-val="1750"></count-up>
                      </span>
                      <span class="plus__icon display-four p1-clr fw_800">+</span>
                    </div>
                    <p class="nw4-clr">Verified Users</p>
                  </div>
                  <div class="odometer__items">
                    <div class="cont d-flex align-items-center">
                      <span class="odometer display-four p1-clr fw_800">
                        <count-up :end-val="15"></count-up>
                      </span>
                    </div>
                    <p class="nw4-clr">Years on the market</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="banner-v10-thumbsamll position-relative">
              <NuxtImg :src="star" alt="img" class="star-copy" />
              <div class="thumb">
                <NuxtImg :src="banner10v1" alt="img" />
              </div>
              <div class="thumb thumb-v2-v10 d-flex align-items-center">
                <NuxtImg :src="banner10v2" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MotionFadeDownToTop class="thumb-v10">
      <NuxtImg :src="bannerV10" alt="img" />
    </MotionFadeDownToTop>
    <!-- {/* Banner Content */} -->
  </div>
</template>

<style scoped></style>
