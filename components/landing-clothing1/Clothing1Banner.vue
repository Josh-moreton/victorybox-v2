<script setup lang="ts">
import { PhArrowRight, PhArrowUpRight } from "@phosphor-icons/vue";
import CountUp from "vue-countup-v3";
import useCircularText from "../../hooks/useCircularText";
import banner1 from "/images/banner/bannerv15-1.png";
import banner2 from "/images/banner/bannerv15-2.png";

const textRef = useCircularText({ rotationAngle: 10 });
</script>
<template>
  <div class="banner-section-v15 pt-70-fixed position-relative overflow-hidden">
    <!-- {/* Banner Content */} -->
    <div class="banner-v15wraper mt-lg-7 pb-15 pt-xxl-6">
      <div class="container">
        <div class="row align-items-lg-center justify-content-lg-center">
          <div class="col-xl-3 col-lg-3">
            <div class="banner-v15-wrap-left position-relative d-grid justify-content-center" data-aos="zoom-in-up" data-aos-duration="1600">
              <!-- {/* Text Animation */} -->
              <div class="banner-textanimation">
                <div class="textcircle2">
                  <div class="text2" ref="textRef">
                    <p><span>Explore</span> <span>More</span> <span>Explore</span> <span>More</span> <span>Explore</span></p>
                  </div>
                </div>
                <NuxtLink to="#" class="icon-explore">
                  <span class="icon">
                    <PhArrowUpRight class="ph-bold ph-arrow-up-right n4-clr" />
                  </span>
                </NuxtLink>
              </div>
              <!-- {/* Text Animation */} -->
              <MotionEffectMotionFadeLeft class="thumb">
                <NuxtImg :src="banner2" alt="img" />
              </MotionEffectMotionFadeLeft>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-8">
            <div class="banner-content-v15 pt-xxl-20 pt-12 mt-xl-6 mt-md-6 mt-0 position-relative">
              <div class="d-flex mb-sm-4 mb-4 align-items-center gap-xxl-8 gap-lg-6 gap-4 flex-wrap">
                <ul class="entry-win d-flex align-items-center gap-3">
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1000">
                    <NuxtLink to="#" class="fs-four act4-clr"> Entry </NuxtLink>
                  </li>
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1200">
                    <PhArrowRight class="ti ti-arrow-right fs-four act4-clr" />
                  </li>
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1400">
                    <NuxtLink to="#" class="fs-four act4-clr"> Draw </NuxtLink>
                  </li>
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1600">
                    <PhArrowRight class="ti ti-arrow-right fs-four act4-clr" />
                  </li>
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="2000">
                    <NuxtLink to="#" class="fs-four act4-clr"> Win </NuxtLink>
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
              <div class="bn-content-box">
                <div class="display-three position-relative cus-z1 fw_800 text-capitalize n4-clr mb-xxl-5 mb-3">
                  <span class="fw_800 text-capitalize d-flex align-items-center flex-wrap gap-xxl-4 gap-sm-0">
                    Win Trendy
                    <span>Styles in</span>
                  </span>
                  <span class="d-flex text-capitalize align-items-center n4-clr gap-3 text-uppercase" data-aos="zoom-in-up" data-aos-duration="2200">
                    <span>Our</span>
                    <span class="fw_800 real-underline act4-clr d-block position-relative">Giveaway!</span>
                  </span>
                </div>
                <p class="n3-clr fs18 max-520 mb-xxl-10 mb-lg-8 mb-5" data-aos="fade-down-right" data-aos-duration="1500">
                  We are giving you the opportunity to revamp your wardrobe and embrace the latest trends. participating in our clothing giveaway
                </p>
                <div class="d-flex flex-wrap cus-z1 position-relative flex-md-nowrap align-items-center gap-xl-8 gap-3 flex-wrap w-100">
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
                  <NuxtLink to="/howtoplay" class="how-cont act3-texthover n4-clr fw_700" data-aos="zoom-in-left" data-aos-duration="800"> How It’s Works </NuxtLink>
                </div>
              </div>
              <!-- {/* Scroll Top */} -->
              <div class="d-flex d-none d-lg-block justify-content-xxl-end justify-content-center">
                <div class="scroll-custom-v15 pe-20 pt-120 mt-20">
                  <NuxtLink to="#croll-down" class="scroll-circle m-auto act3-bg radius100 d-flex justify-content-center align-items-center justify-content-center">
                    <span class="d-grid gap-xxl-3 gap-xl-3 gap-sm-2 gap-2 justify-content-center text-center m-auto">
                      <span class="n4-clr scroll-text d-block fw_600">Scroll Down</span>
                      <span class="scroll-iconrarea">
                        <svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7.29289 26.7071C7.68342 27.0976 8.31658 27.0976 8.70711 26.7071L15.0711 20.3431C15.4616 19.9526 15.4616 19.3195 15.0711 18.9289C14.6805 18.5384 14.0474 18.5384 13.6569 18.9289L8 24.5858L2.34315 18.9289C1.95262 18.5384 1.31946 18.5384 0.928933 18.9289C0.538409 19.3195 0.538409 19.9526 0.928933 20.3431L7.29289 26.7071ZM7 4.37114e-08L7 26L9 26L9 -4.37114e-08L7 4.37114e-08Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </span>
                  </NuxtLink>
                </div>
              </div>
              <!-- {/* Scroll Top */} -->
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-2">
            <div class="banner-v15-wrap-right position-relative" data-aos="zoom-in" data-aos-duration="2000">
              <MotionEffectMotionFadeRight class="thumb mb-xxl-9 mb-xl-6 mb-4">
                <NuxtImg :src="banner1" alt="img" />
              </MotionEffectMotionFadeRight>
              <div class="bn1-odometer pt-0 m-auto text-center">
                <div class="odometer__items d-flex align-items-center justify-content-xxl-center justify-content-start gap-3" data-aos="zoom-in-down" data-aos-duration="1000">
                  <div class="cont d-flex align-items-center">
                    <span class="odometer display-four n4-clr fw_800">
                      <count-up :end-val="100"></count-up>
                    </span>
                    <span class="plus__icon display-four n4-clr fw_800">k</span>
                    <span class="plus__icon display-four n4-clr fw_800">+</span>
                  </div>
                  <p class="n3-clr n3-fixed">Customers</p>
                </div>
                <p class="mt-xxl-2 mt-1 n3-clr fs18">Avg rating 4.8 makes us world best.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex scroll-custom-v15 d-lg-none d-block justify-content-xxl-center justify-content-center mt-md-2 mt-11">
        <NuxtLink to="#croll-down" class="scroll-circle act3-bg radius100 d-flex justify-content-center align-items-center justify-content-center">
          <span class="d-grid gap-xxl-3 gap-xl-3 gap-sm-2 gap-2 justify-content-center text-center m-auto">
            <span class="n4-clr scroll-text d-block fw_600">Scroll Down</span>
            <span class="scroll-iconrarea">
              <svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.29289 26.7071C7.68342 27.0976 8.31658 27.0976 8.70711 26.7071L15.0711 20.3431C15.4616 19.9526 15.4616 19.3195 15.0711 18.9289C14.6805 18.5384 14.0474 18.5384 13.6569 18.9289L8 24.5858L2.34315 18.9289C1.95262 18.5384 1.31946 18.5384 0.928933 18.9289C0.538409 19.3195 0.538409 19.9526 0.928933 20.3431L7.29289 26.7071ZM7 4.37114e-08L7 26L9 26L9 -4.37114e-08L7 4.37114e-08Z"
                  fill="black"
                />
              </svg>
            </span>
          </span>
        </NuxtLink>
      </div>
    </div>
    <!-- {/* Banner Content */} -->
  </div>
</template>

<style scoped></style>
