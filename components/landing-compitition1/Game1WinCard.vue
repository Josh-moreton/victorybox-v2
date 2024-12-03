<script setup lang="ts">
import { PhArrowRight, PhBarbell, PhBookmarkSimple, PhClock, PhPlus, PhShoppingCart, PhStar } from "@phosphor-icons/vue";

defineProps<{
  image: string;
  drawTime: string;
  basketLink: string;
  contestLink: string;
  title: string;
  price: string;
  perEntry: string;
  rating: string;
  daysRemaining: string;
  entriesRemaining: string;
  soldPercentage: string;
  soldOutClass: string;
}>();
</script>
<template>
  <MotionEffectMotionFade class="col-lg-4 col-md-6">
    <div class="current-lottery-itemv11 current-lottery-itemv17 nw4-border position-relative radius24 n0-bg overflow-hidden">
      <div class="thumb w-100 cus-z1 position-relative">
        <NuxtImg :src="image" alt="img" class="w-100" />
        <div class="current-l-badgev11 cus-z1 d-flex align-items-center justify-content-between pt-xxl-5 pt-4 pe-xxl-5 pe-4">
          <div class="current-l-badge cus-z1 d-flex align-items-center justify-content-between pe-xxl-5 pe-4">
            <span class="cmn-draw-badge d-inline-blog n4-bg py-2 ps-xxl-5 ps-3 pe-8">
              <span class="n0-clr position-relative fw_700 fs-eight">{{ drawTime }}</span>
            </span>
          </div>
          <div class="iconbox-global radius-circle">
            <div class="team-social">
              <ul class="social-area d-grid gap-1">
                <li>
                  <NuxtLink :to="`${basketLink}`" class="bokmart d-center">
                    <PhShoppingCart class="ph-bold ph-shopping-cart n4-clr fs-five" />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="`${basketLink}`" class="bokmart d-center">
                    <PhBookmarkSimple class="ph-bold ph-bookmark-simple n4-clr fs-five" />
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="icon d-center radius-circle">
              <PhPlus class="ti ti-plus fs-five cus-z1 p1-color" />
            </div>
          </div>
        </div>
      </div>
      <div class="content-middle pt-xxl-10 pt-8">
        <div class="nw4-bb">
          <div class="box px-xxl-6 px-4 pb-xxl-3 pb-3">
            <h4 class="mb-xxl-3 mb-2">
              <NuxtLink :to="`${contestLink}`" class="n4-clr act4-texthover"> {{ title }} </NuxtLink>
            </h4>
            <div class="d-flex align-items-center justify-content-between">
              <h3 class="d-flex align-items-center gap-3 n4-clr">
                <span class="pr">{{ price }}</span>
                <span class="fs-six text-uppercase">{{ perEntry }}</span>
              </h3>
              <span class="n3-clr fw_600 d-flex align-items-center gap-2">
                <PhStar weight="fill" class="ph-fill ph-star act4-clr fs-four" />
                <span class="n4-clr fw_700 fs20">{{ rating }}</span>
              </span>
            </div>
          </div>
        </div>
        <ul class="remaining-info px-xxl-6 px-4 py-xxl-3 py-xl-3 py-2 mb-xxl-4 mb-xl-3 mb-3 nw4-bb d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
          <li class="d-flex align-items-center gap-2">
            <PhClock class="ph ph-clock fs-five n3-clr" />
            <span class="n3-clr fw_600">{{ daysRemaining }}</span>
          </li>
          <li class="vline-remaing"></li>
          <li class="d-flex align-items-center gap-2">
            <PhBarbell class="ph ph-barbell fs-five n3-clr" />
            <span class="n3-clr fw_600">{{ entriesRemaining }}</span>
          </li>
        </ul>
        <div class="cmn-prrice-range px-xxl-6 px-6 d-grid align-items-center gap-2 mb-xxl-8 mb-xl-6 mb-4">
          <span :class="`n4-clr ${soldOutClass} fw_700 fs-eight`">{{ soldPercentage }}</span>
          <div class="range-custom position-relative">
            <span class="curs-range"></span>
          </div>
        </div>
        <NuxtLink :to="`${contestLink}`" class="kewta-btn px-xxl-6 px-4 mb-xxl-6 mb-4 kewta-alt w-100 d-flex align-items-center">
          <span class="kew-text w-100 text-uppercase fs-seven fw_500 n4-bg n0-clr">Enter Competition</span>
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
  </MotionEffectMotionFade>
</template>

<style scoped></style>
