<script setup lang="ts">
import { PhArrowRight, PhArrowUpRight, PhBarbell, PhBookmarkSimple, PhClock, PhShoppingCart } from "@phosphor-icons/vue";

import { clothing1lotteryItems } from "@/../public/data/clothing1PageData";
import icon from "/images/global/section-icon.png";

defineProps<{
  sectionBg?: boolean;
}>();
</script>
<template>
  <section :class="`current-lotteryv15 pt-120 pb-120 ${sectionBg ? 'question-section' : ''}`">
    <div class="container">
      <!-- {/* Section Header */} -->
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title text-sm-start text-center mb-lg-0 mb-4">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap align-items-center justify-content-sm-start justify-content-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="icon" alt="img" />
              <h5 class="s1-clr fw_700">Try your chance at winning</h5>
            </div>
            <div>
              <h2 class="display-four d-block n4-clr">
                Current
                <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Lottery </span>
                <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Offering </span>
              </h2>
            </div>
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
        <MotionEffectMotionFade v-for="item in clothing1lotteryItems" class="col-lg-4 col-md-6" key="{`clothing-1-win-${item.id}`}">
          <div class="current-lottery-itemv13 current-lottery-itemv14 nw3-border position-relative radius24 n0-bg p-xxl-6 p-xl-4 p-3">
            <div class="current-l-badge cus-z1 d-flex align-items-center justify-content-between pe-xxl-5 pe-4">
              <span class="cmn-draw-badge d-inline-blog act3-bg py-2 ps-xxl-5 ps-3 pe-8">
                <span class="n4-clr position-relative fw_700 fs-eight">{item.drawTime}</span>
              </span>
            </div>
            <div class="thumb cus-z1 position-relative radius24 overflow-hidden">
              <div class="cart-added d-grid align-items-center gap-xxl-3 gap-2">
                <NuxtLink to="#" class="cmn-40 act4-bg d-center radius-circle n0-hover">
                  <PhBookmarkSimple weight="bold" class="ph-bold ph-bookmark-simple n0-clr fs-five"></PhBookmarkSimple>
                </NuxtLink>
                <NuxtLink :to="`${item.link}`" class="cmn-40 act4-bg d-center radius-circle n0-hover">
                  <PhShoppingCart weight="bold" class="ph ph-bold ph-shopping-cart n0-clr fs-five"></PhShoppingCart>
                </NuxtLink>
              </div>
              <NuxtImg :src="item.image" alt="img" class="w-100" />
            </div>
            <div class="content-middle pt-xxl-6 pt-sm-4 pt-4">
              <h4>
                <NuxtLink :to="`${item.link}`" class="n4-clr fw_700 act4-texthover"> {{ item.title }} </NuxtLink>
              </h4>
              <ul class="remaining-info py-xxl-6 py-3 d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
                <li class="d-flex align-items-center gap-2">
                  <PhClock class="ph ph-clock fs-five n3-clr"></PhClock>
                  <span class="n3-clr fw_600">{{ item.daysRemaining }}</span>
                </li>
                <li class="vline-remaing"></li>
                <li class="d-flex align-items-center gap-2">
                  <PhBarbell class="ph ph-barbell fs-five n3-clr"></PhBarbell>
                  <span class="n3-clr fw_600">{{ item.itemsRemaining }}</span>
                </li>
              </ul>
              <div class="border-top"></div>
              <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap pt-xxl-5 pt-4">
                <h3 class="d-flex align-items-center gap-3 n4-clr">
                  <span class="pr fw_700">{{ item.price }}</span> <span class="fs-six text-uppercase">{{ item.entryText }}</span>
                </h3>
                <NuxtLink :to="`${item.link}`" class="kewta-btn kewta-44 d-inline-flex align-items-center">
                  <div class="kew-arrow kew-rotate n4-bg">
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
        </MotionEffectMotionFade>
      </div>
      <!-- {/* win lottery body */} -->
    </div>
  </section>
</template>

<style scoped></style>
