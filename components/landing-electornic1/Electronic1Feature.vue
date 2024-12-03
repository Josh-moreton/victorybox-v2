<script setup lang="ts">
import { PhArrowRight, PhGlobeSimple, PhHandshake, PhHeadset, PhShieldWarning } from "@phosphor-icons/vue";
import MotionFadeTopToDown from "../motionEffect/MotionFadeTopToDown.vue";
</script>
<template>
  <section class="feature-section n0-bg pt-120 pb-120">
    <!-- {/* Section Header */} -->
    <div class="container">
      <div class="row g-xl-4 g-3 justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6">
          <div class="section__title">
            <SubTitle text="An Exhaustive list of" />
            <h2 class="display-four d-block n4-clr">
              Our
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Feature </span>
            </h2>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="section__title-sub">
            <p class="n3-clr fs20 mb-xxl-8 mb-xl-6 mb-4" data-aos="fade-up-right" data-aos-duration="1000">
              Lottery website features: user-friendly registration, diverse lotteries, secure payments, random number generation, real-time results, mobile responsiveness, customer support,
              promotions.
            </p>
            <NuxtLink to="/contact" class="kewta-btn kewta-alt d-inline-flex align-items-center">
              <span class="kew-text act3-bg n4-clr" data-aos="zoom-in-left" data-aos-duration="900"> All Features </span>
              <div class="kew-arrow act3-bg" data-aos="zoom-in-left" data-aos-duration="1600">
                <div class="kt-one">
                  <PhArrowRight class="ti ti-arrow-right n4-clr" />
                </div>
                <div class="kt-two">
                  <PhArrowRight class="ti ti-arrow-right n4-clr" />
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Section Header */} -->

    <div class="container">
      <div class="row g-xxl-6 g-4">
        <MotionFadeTopToDown class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="feature-items-v9 text-center py-xxl-10 py-xl-7 py-lg-5 py-4 px-3 border radius24">
            <div class="icon d-center s1-border radius-circle m-auto mb-xxl-5 mb-3">
              <PhHandshake class="ph ph-handshake s1-clr" />
            </div>
            <h4 class="mb-xxl-3 mb-2">
              <NuxtLink to="/affiliate" class="n5-clr d-block s1-texthover"> Safe Service </NuxtLink>
            </h4>
            <p class="n3-clr m-auto">Ensure a secure experience with our reliable and trustworthy services.</p>
          </div>
        </MotionFadeTopToDown>
        <MotionFadeTopToDown class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="feature-items-v9 text-center py-xxl-10 py-xl-7 py-lg-5 py-4 px-3 border radius24">
            <div class="icon d-center s1-border radius-circle m-auto mb-xxl-5 mb-3">
              <PhShieldWarning class="ph ph-shield-warning s1-clr" />
            </div>
            <h4 class="mb-xxl-3 mb-2">
              <NuxtLink to="/contact" class="n5-clr d-block s1-texthover"> Security </NuxtLink>
            </h4>
            <p class="n3-clr m-auto">Implement robust security features to protect user data and financial transactions.</p>
          </div>
        </MotionFadeTopToDown>
        <MotionFadeTopToDown class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="feature-items-v9 text-center py-xxl-10 py-xl-7 py-lg-5 py-4 px-3 border radius24">
            <div class="icon d-center s1-border radius-circle m-auto mb-xxl-5 mb-3">
              <PhGlobeSimple class="ph ph-globe-simple s1-clr" />
            </div>
            <h4 class="mb-xxl-3 mb-2">
              <NuxtLink to="/contact" class="n5-clr d-block s1-texthover"> Network </NuxtLink>
            </h4>
            <p class="n3-clr m-auto">Expand your reach with our robust and scalable network solutions.</p>
          </div>
        </MotionFadeTopToDown>
        <MotionFadeTopToDown class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="feature-items-v9 text-center py-xxl-10 py-xl-7 py-lg-5 py-4 px-3 border radius24">
            <div class="icon d-center s1-border radius-circle m-auto mb-xxl-5 mb-3">
              <PhHeadset class="ph ph-headset s1-clr" />
            </div>
            <h4 class="mb-xxl-3 mb-2">
              <NuxtLink to="/contact" class="n5-clr d-block s1-texthover"> Support </NuxtLink>
            </h4>
            <p class="n3-clr m-auto">Provide a responsive customer support system to address user queries and concerns.</p>
          </div>
        </MotionFadeTopToDown>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
