<script setup lang="ts">
import { PhArrowRight, PhClock, PhThumbsDown, PhTicket, PhTrophy } from "@phosphor-icons/vue";
import CountUp from "vue-countup-v3";
import blissBikeImg from "/images/bike/bliss-bike.png";

defineProps<{
  image?: string;
}>();
</script>
<template>
  <section class="bike-blisssection pt-120 n2-bg">
    <!-- {/* Section Header */} -->
    <div class="container">
      <div class="row g-xl-4 pt-5 pt-lg-0 g-4 justify-content-between align-items-center mb-xxl-15 mb-xl-11 mb-11">
        <div class="col-xl-5 col-lg-6 col-md-6">
          <div class="section__title">
            <SubTitle text="Bike Bliss Awaits" />

            <h2 class="display-four d-block n0-clr">
              Countdown to Two
              <span class="d-flex align-items-center gap-2">
                <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Wheel </span>
                <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Triumph! </span>
              </span>
            </h2>
          </div>
        </div>
        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-9">
          <p class="fs20 nw1-clr mb-xxl-8 mb-xxl-6 mb-5">
            The anticipation is building, and the thrill is about to hit its peak! We&apos;re excited to announce the kickoff of our exclusive Bike Lottery,
          </p>
          <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center">
            <span class="kew-text p1-bg n4-clr" data-aos="zoom-in-left" data-aos-duration="900"> Explore our offer </span>
            <div class="kew-arrow p1-bg" data-aos="zoom-in-left" data-aos-duration="1600">
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
    <!-- {/* Section Header */} -->

    <!-- {/* Bliss Body */} -->
    <div class="bliss-bodywrap">
      <div class="container">
        <div class="row g-6 align-items-center">
          <div class="col-lg-6">
            <div class="bliss-counterwrap">
              <div class="bliss-item" data-aos="zoom-in-left" data-aos-duration="1000">
                <div class="icon mb-xxl-6 mb-xl-5 mb-4 cmn-60 radius-circle d-center act4-bg">
                  <PhTicket class="ph ph-ticket fs-four n0-clr"></PhTicket>
                </div>
                <h3 class="counters fw_700 mb-2 d-flex align-items-center n500-color">
                  <span>£</span>
                  <span class="odometer" data-odometer-final="75,000,000">
                    <count-up :end-val="750000000"></count-up>
                  </span>
                </h3>
                <p class="n2-clr fs18">Given away in prizes</p>
              </div>
              <div class="bliss-item" data-aos="zoom-in-right" data-aos-duration="1400">
                <div class="icon mb-xxl-6 mb-xl-5 mb-4 cmn-60 radius-circle d-center act4-bg">
                  <PhClock class="ph ph-clock fs-four n0-clr"></PhClock>
                </div>
                <h3 class="counters fw_700 mb-2 gap-2 d-flex align-items-center n500-color">
                  Guaranteed
                  <span class="act4-clr"> Draws</span>
                </h3>
                <p class="n2-clr fs18">Regardless of how many tickets sold</p>
              </div>
              <div class="bliss-item" data-aos="zoom-in-left" data-aos-duration="1600">
                <div class="icon mb-xxl-6 mb-xl-5 mb-4 cmn-60 radius-circle d-center act4-bg">
                  <PhThumbsDown class="ph ph-thumbs-up fs-four n0-clr"></PhThumbsDown>
                </div>
                <h3 class="counters fw_700 mb-2 d-flex align-items-center n500-color">
                  <span class="odometer" data-odometer-final="480">
                    <count-up :end-val="480"></count-up>
                  </span>
                  <span class="act4-clr"> K</span>
                  <span class="n4-clr ps-2">Players</span>
                </h3>
                <p class="n2-clr fs18">UK’s No.1 Car Competition</p>
              </div>
              <div class="bliss-item" data-aos="zoom-in-right" data-aos-duration="1800">
                <div class="icon mb-xxl-6 mb-xl-5 mb-4 cmn-60 radius-circle d-center act4-bg">
                  <PhTrophy class="ph ph-trophy fs-four n0-clr"></PhTrophy>
                </div>
                <h3 class="counters fw_700 mb-2 d-flex align-items-center n500-color">
                  <span class="odometer" data-odometer-final="7,000">
                    <count-up :end-val="7000"></count-up>
                  </span>
                  <span class="act4-clr"> +</span>
                  <span class="ps-2">Winners</span>
                </h3>
                <p class="n2-clr fs18">And counting, since 2024!</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="bliss-thumbmain position-relative" data-aos="zoom-in-down" data-aos-duration="2000">
              <MotionEffectMotionFadeRight class="bliss-thumb">
                <NuxtImg :src="image || blissBikeImg" alt="img" />
              </MotionEffectMotionFadeRight>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Bliss Body */} -->
  </section>
</template>

<style scoped></style>
