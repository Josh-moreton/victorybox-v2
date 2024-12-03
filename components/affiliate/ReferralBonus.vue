<script setup lang="ts">
import { PhCopy, PhHandbagSimple, PhSwap } from "@phosphor-icons/vue";
import sectionIcon from "/images/global/section-icon.png";
</script>
<template>
  <section class="multiple-benigit winbg pt-120 pb-120">
    <!-- {/* Section Header */} -->
    <div class="container">
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-4 col-md-7 col-sm-7">
          <div class="section__title">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="sectionIcon" alt="img" />
              <h5 class="s1-clr fw_700">Multiply Your Benefits</h5>
            </div>
            <span class="display-four testimonial-heading d-block n4-clr">
              <span class="d-flex gap-1 flex-wrap">
                Referral
                <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Bonus </span>
              </span>
              <span class="d-flex">
                <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Level </span>
              </span>
            </span>
          </div>
        </div>
        <div class="col-lg-4 col-md-5 col-sm-5">
          <p class="n3-clr">Help agencies to define their new business objectives and then create professional software.</p>
        </div>
      </div>
    </div>
    <!-- {/* Section Header */} -->

    <!-- {/* Multiple Benifit Body */} -->
    <div class="container">
      <div class="row g-6 justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in-left" data-aos-duration="1200">
          <div class="multiple-bitems text-center n0-bg radius24 border py-xxl-10 py-xl-8 py-lg-6 py-6 px-xxl-8 px-4">
            <div class="icons m-auto mb-xxl-6 mb-4 position-relative d-center radius-circle s1-border">
              <span class="d-center s1-bg radius-circle cmn-40 nw1-clr position-absolute badges">01</span>
              <PhHandbagSimple class="ph ph-handbag-simple fs-three s1-clr" />
            </div>
            <h4 class="n4-clr">Level 01 Instant 10% Bonus Reward</h4>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration="1400">
          <div class="multiple-bitems text-center n0-bg radius24 border py-xxl-10 py-xl-8 py-lg-6 py-6 px-xxl-8 px-4">
            <div class="icons m-auto mb-xxl-6 mb-4 position-relative d-center radius-circle act3-border">
              <span class="d-center act3-bg radius-circle cmn-40 nw1-clr position-absolute badges">01</span>
              <PhCopy class="ph ph-copy fs-three act3-clr" />
            </div>
            <h4 class="n4-clr">Level 02 Instant 20% Bonus Reward</h4>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in-left" data-aos-duration="1600">
          <div class="multiple-bitems text-center n0-bg radius24 border py-xxl-10 py-xl-8 py-lg-6 py-6 px-xxl-8 px-4">
            <div class="icons m-auto mb-xxl-6 mb-4 position-relative d-center radius-circle act4-border">
              <span class="d-center act4-bg radius-circle cmn-40 nw1-clr position-absolute badges">01</span>
              <PhSwap class="ph ph-swap fs-three act4-clr" />
            </div>
            <h4 class="n4-clr">Level 03 Instant 30% Bonus Reward</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Multiple Benifit Body */} -->
  </section>
</template>

<style scoped></style>
