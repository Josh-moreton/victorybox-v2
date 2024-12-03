<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import SubTitle from "../SubTitle.vue";
import LotteryServiceSlider from "./LotteryServiceSlider.vue";
</script>
<template>
  <section class="lottery-service pt-120 pb-120" id="down-scroll">
    <!--Section Header-->
    <div class="container">
      <div class="row g-xl-4 g-3 justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6">
          <div class="section__title">
            <SubTitle text="Why Participant Our Program" />
            <h2 class="display-four d-block n4-clr">
              Explore
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Our Exclusive </span>
              <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Car Lottery Services </span>
            </h2>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6">
          <div class="section__title-sub">
            <p class="n3-clr fs20 mb-xxl-8 mb-xl-6 mb-4" data-aos="fade-up-right" data-aos-duration="1000">
              Experience the ease of participating in our car lotteries. Our user-friendly platform ensures a seamless ticketing process,
            </p>
            <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center">
              <span class="kew-text p1-bg n4-clr" data-aos="zoom-in-left" data-aos-duration="900"> Explore Now </span>
              <div class="kew-arrow p1-bg" data-aos="zoom-in-left" data-aos-duration="1600">
                <div class="kt-one">
                  <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                </div>
                <div class="kt-two p1-bg">
                  <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!--Section Header-->

    <!--Lottery Service Body-->

    <LotteryServiceSlider />

    <!--Lottery Service Body-->
  </section>
</template>

<style scoped></style>
