<script setup lang="ts">
import { compitation1contests } from "@/../public/data/compitation2PageData";
import { PhArrowUpRight } from "@phosphor-icons/vue";
import Game1WinCard from "./Game1WinCard.vue";
import icon from "/images/global/section-icon.png";
</script>
<template>
  <section class="current-lotteryv15 n0-bg pt-120 pb-120">
    <div class="container">
      <!-- {/* Section Header */} -->
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title text-sm-start text-center mb-lg-0 mb-4">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap align-items-center justify-content-sm-start justify-content-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="icon" alt="img" />
              <h5 class="s1-clr fw_700">Try your chance at winning</h5>
            </div>

            <h2 class="display-four d-block n4-clr">
              Current
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Lottery </span>
              <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Offering </span>
            </h2>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <div class="browse-more" data-aos="zoom-in" data-aos-duration="2000">
            <NuxtLink to="/contest" class="cmn__collection radius-circle act3-bg d-center position-relative ms-lg-auto">
              <span class="cmn-cont-box text-center position-relative">
                <span class="icon mb-1">
                  <PhArrowUpRight class="ph-bold ph-arrow-up-right n4-clr fs-three" />
                </span>
                <span class="d-block n4-clr fw_700">Browse More</span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- {/* Section Header */} -->

      <!-- {/* win lottery body */} -->
      <div class="row g-6">
        <Game1WinCard v-for="(contest, index) in compitation1contests" :key="`game-win-${index}`" v-bind="contest" />
      </div>

      <!-- {/* win lottery body */} -->
    </div>
  </section>
</template>

<style scoped></style>
