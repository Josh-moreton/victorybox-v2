<script setup lang="ts">
import { PhArrowRight, PhCheck, PhHandPointing, PhLaptop, PhTicket } from "@phosphor-icons/vue";
import winningDigit from "/images/blog/winning-digit.png";
import globalPicon from "/images/global/global-picon.png";
import ottoB8 from "/images/global/lotto-b8.png";
</script>
<template>
  <section class="guid-winning pb-120 pt-120 s1-bg position-relative">
    <!-- {/* Section Header */} -->
    <div class="container mb-xxl-15 mb-xl-12 mb-10 pb-xxl-15 pb-xl-12 pb-10 nw4-custom">
      <div class="row g-xl-4 g-3 align-items-center justify-content-center">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title text-center">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap align-items-center justify-content-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="globalPicon" alt="img" />
              <h5 class="p1-clr fw_700">How It Works</h5>
            </div>
            <span class="display-four d-block nw1-clr mb-xxl-8 mb-4">
              Your Ultimate
              <span class="d-flex align-items-center justify-content-center gap-3" data-aos="zoom-in-right" data-aos-duration="1200">
                Guide to
                <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Winning! </span>
              </span>
            </span>
            <div class="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center gap-xl-8 gap-3 flex-wrap w-100">
              <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                <span class="kew-text n4-clr act3-bg">Participant Now</span>
                <div class="kew-arrow act3-bg">
                  <div class="kt-one">
                    <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                  </div>
                  <div class="kt-two">
                    <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink to="/howtoplay" class="how-cont nw1-clr fw_700" data-aos="zoom-in-left" data-aos-duration="800"> Learn More </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Section Header */} -->

    <div class="container">
      <div class="row g-6 align-items-center">
        <div class="col-lg-6 order-1 order-lg-0">
          <div class="guid-thumb w-100 pe-lg-10 pe-sm-6 ps-sm-6 ps-3 pe-3 mt-lg-0 mt-6" data-aos="zoom-in-right" data-aos-duration="1400">
            <NuxtImg :src="winningDigit" alt="img" class="w-100" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="program-content">
            <div class="program-planwrap multiproduct">
              <div class="program-plan-item d-flex gap-xxl-10 gap-xl-7 gap-lg-5 gap-sm-4 gap-2">
                <div class="pro-check d-center s1-bg nw1-border position-relative">
                  <PhCheck weight="bold" class="ph-bold ph-check"></PhCheck>
                </div>
                <div class="program-plan-inner d-flex gap-xxl-6 gap-xl-5 gap-lg-3 gap-2" data-aos="zoom-in-down" data-aos-duration="1000">
                  <div class="icon d-center p1-bg">
                    <PhHandPointing class="ph ph-hand-pointing"></PhHandPointing>
                  </div>
                  <div class="content">
                    <span class="fs-three mb-xxl-3 mb-2 fw_700 nw1-clr d-block">Choose Prize</span>
                    <p class="nw2-clr">Choose your desired prize, pick tickets, answer correctly, then press enter now for a chance to win!</p>
                  </div>
                </div>
              </div>
              <div class="program-plan-item d-flex gap-xxl-10 gap-xl-7 gap-lg-5 gap-sm-4 gap-2">
                <div class="pro-check d-center s1-bg nw1-border position-relative">
                  <PhCheck weight="bold" class="ph-bold ph-check"></PhCheck>
                </div>
                <div class="program-plan-inner d-flex gap-xxl-6 gap-xl-5 gap-lg-3 gap-2" data-aos="zoom-in-down" data-aos-duration="1200">
                  <div class="icon d-center p1-bg">
                    <PhLaptop class="ph ph-laptop"></PhLaptop>
                  </div>
                  <div class="content">
                    <span class="fs-three mb-xxl-3 mb-2 fw_700 nw1-clr d-block">Watch the Draw LIVE</span>
                    <p class="nw2-clr">Join us live on Facebook for the draw and see if you are the lucky winner! Be ready for a potential call</p>
                  </div>
                </div>
              </div>
              <div class="program-plan-item d-flex gap-xxl-10 gap-xl-7 gap-lg-5 gap-sm-4 gap-2">
                <div class="pro-check d-center s1-bg nw1-border position-relative">
                  <PhCheck weight="bold" class="ph-bold ph-check"></PhCheck>
                </div>
                <div class="program-plan-inner d-flex gap-xxl-6 gap-xl-5 gap-lg-3 gap-2" data-aos="zoom-in-down" data-aos-duration="1400">
                  <div class="icon d-center p1-bg">
                    <PhTicket class="ph ph-ticket"></PhTicket>
                  </div>
                  <div class="content">
                    <span class="fs-three mb-xxl-3 mb-2 fw_700 nw1-clr d-block">Get Your Prize</span>
                    <p class="nw2-clr">Limited tickets ensure fixed odds. Competitions proceed, creating better chances. Join 7,000+ winners in anticipation</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="car-tybtn" data-aos="zoom-in-up" data-aos-duration="1600">
              <NuxtLink to="/contact" class="kewta-btn kewta-alt d-inline-flex align-items-center">
                <span class="kew-text p1-bg n4-clr">All Featured</span>
                <div class="kew-arrow p1-bg">
                  <div class="kt-one">
                    <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                  </div>
                  <div class="kt-two">
                    <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <NuxtImg :src="ottoB8" alt="img" class="lotto-b8" />
  </section>
</template>

<style scoped></style>
