<script setup lang="ts">
import { PhHand, PhLaptop, PhTicket } from "@phosphor-icons/vue";
import icon from "/images/global/section-icon.png";
</script>

<template>
  <section class="howit-work-section howit-work-sectionv9 position-relative n0-bg pt-120 pb-120">
    <!--Section Header-->
    <div class="container mb-xxl-15 mb-xl-11 mb-9">
      <div class="row g-xl-4 g-3 justify-content-center">
        <div class="col-lg-6">
          <div class="section__title text-center">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex justify-content-center flex-wrap align-items-center gap-3" data-aos="zoom-in-up" data-aos-duration="1400">
              <NuxtImg :src="icon" alt="img" />
              <h5 class="s1-clr fw_700">How It Works</h5>
            </div>

            <h2 class="display-four d-block n4-clr" data-aos="fade-down-left" data-aos-duration="1600">
              <span class="d-block">Your Ultimate Guide</span>
              <span class="d-flex justify-content-center align-items-center gap-4">
                to
                <span class="act4-clr act4-underline">Winning!</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <!--Section Header-->
    <!--Work Body-->
    <div class="container">
      <div class="row g-6">
        <div class="col-lg-4 col-md-6 border-endcustom" data-aos="zoom-in" data-aos-duration="1000">
          <div class="work-item1 position-relative">
            <span class="text-uppercase s1-clr fw_700 fs20 d-block mb-xxl-5 mb-3">STEP_01</span>
            <span class="icons-step cmn-60 radius-circle d-center act4-bg mb-xxl-5 mb-3">
              <PhHand class="ph ph-hand-pointing fs-four n0-clr" />
            </span>
            <h2 class="n4-clr mb-xxl-3 mb-2">
              <span class="d-block">Choose</span>
              <span>Prize</span>
            </h2>
            <p class="fs18 n3-clr">
              Choose your desired prize, pick tickets, answer draw and see if youre the lucky correctly, then press enter now for a
              <NuxtLink to="#" class="s1-clr"> chance to win! </NuxtLink>
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 border-endcustom" data-aos="zoom-in" data-aos-duration="1500">
          <div class="work-item1 position-relative">
            <span class="text-uppercase s1-clr fw_700 fs20 d-block mb-xxl-5 mb-3">STEP_02</span>
            <span class="icons-step cmn-60 radius-circle d-center act4-bg mb-xxl-5 mb-3">
              <PhLaptop class="ph ph-laptop fs-four n0-clr" />
            </span>
            <h2 class="n4-clr mb-xxl-3 mb-2">
              <span class="d-block">Watch the Draw</span>
              <span>Live</span>
            </h2>
            <p class="fs18 n3-clr">
              <NuxtLink to="#" class="s1-clr"> Join us live </NuxtLink>
              on Facebook for the draw and see if youre the lucky for the draw and see if winner! Be ready for a potential call
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 border-endcustom" data-aos="zoom-in" data-aos-duration="1800">
          <div class="work-item1 position-relative">
            <span class="text-uppercase s1-clr fw_700 fs20 d-block mb-xxl-5 mb-3">STEP_03</span>
            <span class="icons-step cmn-60 radius-circle d-center act4-bg mb-xxl-5 mb-3">
              <PhTicket class="ph ph-ticket fs-four n0-clr" />
            </span>
            <h2 class="n4-clr mb-xxl-3 mb-2">
              <span class="d-block">Get Your</span>
              <span>Prize</span>
            </h2>
            <p class="fs18 n3-clr">
              Limited tickets ensure fixed odds. Competitions proceed, creating better chances.
              <NuxtLink to="#" class="s1-clr"> Join 7,000+ </NuxtLink>
              winners in anticipation
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--Work Body-->
  </section>
</template>

<style scoped></style>
