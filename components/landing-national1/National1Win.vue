<script setup lang="ts">
import { national1lotteryData } from "@/../public/data/nationPageData";
import { PhArrowRight, PhArrowUpRight } from "@phosphor-icons/vue";
import icon from "/images/global/section-icon.png";
</script>
<template>
  <section class="current-lotteryv15 winbg pt-120 pb-120">
    <div class="container">
      <!-- {/* Section Header */} -->
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title text-sm-start text-center mb-lg-0 mb-4">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap align-items-center justify-content-sm-start justify-content-center gap-3">
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
      <div class="row g-xxl-6 g-4">
        <div v-for="lottery in national1lotteryData" :key="`tottery-win-${lottery.id}`" class="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in" :data-aos-duration="1000 + lottery.id * 200">
          <div class="current-lottery-itemv19 nw4-border position-relative radius24 n0-bg overflow-hidden">
            <div class="thumb w-100 cus-z1 position-relative">
              <NuxtImg :src="lottery.image" alt="img" class="w-100" />
            </div>
            <div class="content-middle py-xxl-8 py-xl-6 py-5 px-2 text-center">
              <div class="box pb-xxl-3 pb-3">
                <h3 class="mb-xxl-4 mb-2">
                  <NuxtLink :to="`${lottery.link}`" class="n4-clr act4-texthover"> {{ lottery.title }} </NuxtLink>
                </h3>
                <h4 class="n4-clr">{{ lottery.prize }}</h4>
                <span class="fs20 fw_700 n4-clr py-xxl-8 py-xl-6 py-lg-4 py-3">{{ lottery.nextDraw }}</span>
              </div>
              <NuxtLink :to="`${lottery.link}`" class="kewta-btn kewta-alt d-flex justify-content-center align-items-center">
                <span class="kew-text text-capitalize fs-seven fw_700 n4-bg n0-clr">Play Now!</span>
                <div class="kew-arrow n4-bg">
                  <div class="kt-one">
                    <PhArrowRight class="ti ti-arrow-right n0-clr" />
                  </div>
                  <div class="kt-two">
                    <PhArrowRight class="ti ti-arrow-right n0-clr" />
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- {/* win lottery body */} -->
    </div>
  </section>
</template>

<style scoped></style>
