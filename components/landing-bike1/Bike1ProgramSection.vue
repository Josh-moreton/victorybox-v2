<script setup lang="ts">
import { PhArrowRight, PhCheck, PhMotorcycle, PhShield, PhTicket } from "@phosphor-icons/vue";
import MotionFadeDownToTop from "../motionEffect/MotionFadeDownToTop.vue";
import bike5 from "/images/bike/b5.png";

defineProps<{
  image?: string;
  text?: string;
  sectionBg?: boolean;
}>();
</script>
<template>
  <section :class="`bike-program  bike-program-before position-relative pb-120 overflow-hidden ${sectionBg ? '' : 'winbg pt-120  mb-120'} `">
    <div class="container">
      <div class="row g-6 align-items-center">
        <div class="col-lg-6 order-1 order-lg-0">
          <div :class="`program-thumb ${image ? 'program-thumbv5' : ''}`" data-aos="zoom-in-right" data-aos-duration="1400">
            <MotionEffectMotionFadeLeft class="thumb">
              <NuxtImg :src="image ? image : bike5" alt="img" />
            </MotionEffectMotionFadeLeft>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="program-content">
            <div class="section__title mb-xxl-10 mb-8">
              <SubTitle text="Why Participant Our Program" />
              <h2 class="display-four d-block n4-clr">
                Explore
                <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Our Exclusive </span>
                <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> {{ text ? text : "Bike" }} Lottery Services </span>
              </h2>
            </div>
            <div class="program-planwrap">
              <MotionFadeDownToTop class="program-plan-item d-flex gap-xxl-10 gap-xl-7 gap-lg-5 gap-sm-4 gap-2">
                <div class="pro-check d-center s1-bg position-relative">
                  <PhCheck weight="bold" class="ph-bold ph-check"></PhCheck>
                </div>
                <div class="program-plan-inner d-flex gap-xxl-6 gap-xl-5 gap-lg-3 gap-2" data-aos="zoom-in-down" data-aos-duration="1000">
                  <div class="icon d-center p1-bg">
                    <PhMotorcycle :size="32" weight="bold" class="ph ph-motorcycle"></PhMotorcycle>
                  </div>
                  <div class="content">
                    <span class="fs20 mb-xxl-3 mb-2 fw_700 n4-clr d-block">Dream Bike Lineup</span>
                    <p class="n3-clr">Discover a diverse range of dream cars, offering a wide lottery selection.</p>
                  </div>
                </div>
              </MotionFadeDownToTop>
              <MotionFadeDownToTop class="program-plan-item d-flex gap-xxl-10 gap-xl-7 gap-lg-5 gap-sm-4 gap-2">
                <div class="pro-check d-center s1-bg position-relative">
                  <PhCheck :size="20" weight="bold" class="ph-bold ph-check"></PhCheck>
                </div>
                <div class="program-plan-inner d-flex gap-xxl-6 gap-xl-5 gap-lg-3 gap-2" data-aos="zoom-in-down" data-aos-duration="1200">
                  <div class="icon d-center p1-bg">
                    <PhShield :size="32" class="ph ph-shield"></PhShield>
                  </div>
                  <div class="content">
                    <span class="fs20 mb-xxl-3 mb-2 fw_700 n4-clr d-block">Transparent Draw Process</span>
                    <p class="n3-clr">Our platform ensures transparent draws, using secure verifiable procedures, ensuring absolute fairness.</p>
                  </div>
                </div>
              </MotionFadeDownToTop>
              <MotionFadeDownToTop class="program-plan-item d-flex gap-xxl-10 gap-xl-7 gap-lg-5 gap-sm-4 gap-2">
                <div class="pro-check d-center s1-bg position-relative">
                  <PhCheck :size="20" weight="bold" class="ph-bold ph-check"></PhCheck>
                </div>
                <div class="program-plan-inner d-flex gap-xxl-6 gap-xl-5 gap-lg-3 gap-2" data-aos="zoom-in-down" data-aos-duration="1400">
                  <div class="icon d-center p1-bg">
                    <PhTicket :size="32" class="ph ph-ticket"></PhTicket>
                  </div>
                  <div class="content">
                    <span class="fs20 mb-xxl-3 mb-2 fw_700 n4-clr d-block">Secure Ticket Purchasing</span>
                    <p class="n3-clr">Safely buy lottery tickets with confidence using our secure system, ensuring worry-free transactions for all.</p>
                  </div>
                </div>
              </MotionFadeDownToTop>
            </div>
            <div class="car-tybtn" data-aos="zoom-in-up" data-aos-duration="1600">
              <NuxtLink to="/contact" class="kewta-btn kewta-alt d-inline-flex align-items-center">
                <span class="kew-text s1-bg n0-clr">All Featured</span>
                <div class="kew-arrow s1-bg">
                  <div class="kt-one">
                    <PhArrowRight class="ti ti-arrow-right n0-clr"></PhArrowRight>
                  </div>
                  <div class="kt-two">
                    <PhArrowRight class="ti ti-arrow-right n0-clr"></PhArrowRight>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
