<script setup lang="ts">
import { compitation1contests } from "@/../public/data/compitation2PageData";
import useCountdownTwo from "../../hooks/useCountdownTwo";
import Game1WinCard from "./Game1WinCard.vue";
import icon from "/images/global/section-iconb.png";

const deadline = "April 20, 2025";
const { days, hours, minutes, seconds } = useCountdownTwo(deadline);
</script>
<template>
  <section class="limited-lottery limited-lotteryv1 act3-bg pt-120 pb-120">
    <div class="container">
      <!-- {/* Section Header */} -->
      <div class="row g-xl-4 g-3 align-items-center justify-content-center mb-xxl-15 mb-xl-12 mb-10">
        <div class="col-lg-10 col-md-8 col-sm-8">
          <div class="section__title text-center">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex justify-content-center flex-wrap align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="icon" alt="img" />
              <h5 class="n4-clr fw_700">Limited Time Offer!</h5>
            </div>
            <span class="display-five d-block n4-clr">Up To 50% Off From Selected Jewelry</span>
          </div>
        </div>
      </div>
      <!-- {/* Section Header */} -->

      <!-- {/* Included Cound Down */} -->
      <div class="limited-timerwrap mb-xxl-15 mb-xl-10 mb-6">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-lg-md-12 col-sm-12">
            <div class="limit-time" id="clockdiv2">
              <div class="draw-timer-item">
                <span class="text-hed days">{{ days }}</span>
                <div class="smalltext">Days</div>
              </div>
              <div class="ldots">:</div>
              <div class="draw-timer-item">
                <span class="text-hed hours">{{ String(hours).padStart(2, "0") }}</span>
                <div class="smalltext n0-clr">Hours</div>
              </div>
              <div class="ldots">:</div>
              <div class="draw-timer-item">
                <span class="text-hed minutes">{{ String(minutes).padStart(2, "0") }}</span>
                <div class="smalltext n0-clr">Minutes</div>
              </div>
              <div class="ldots">:</div>
              <div class="draw-timer-item">
                <span class="text-hed seconds">{{ String(seconds).padStart(2, "0") }}</span>
                <div class="smalltext n0-clr">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- {/* Included Cound Down */} -->

      <h4 class="mb-xxl-15 mb-xl-10 mb-6 text-center">
        <NuxtLink to="/contest" class="n4-clr fw_600 text-decoration-underline"> Browse all Electronic </NuxtLink>
      </h4>

      <!-- {/* win lottery body */} -->
      <div class="row g-6">
        <Game1WinCard v-for="(contest, index) in compitation1contests" v-bind="contest" :key="`contest2-${contest.id}`" />
      </div>
      <!-- {/* win lottery body */} -->
    </div>
  </section>
</template>

<style scoped></style>
