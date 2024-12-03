<script setup lang="ts">
import { PhArrowRight, PhBarbell, PhBookmarkSimple, PhClock, PhShoppingCart } from "@phosphor-icons/vue";

defineProps<{
  id: number;
  drawTime: string;
  image: string;
  title: string;
  price: string;
  perEntry: string;
  daysRemaining: string;
  remaining: string;
  sold: string;
  duration: number;
}>();
</script>
<template>
  <MotionEffectMotionFade class="col-lg-4 col-md-6">
    <div class="current-lottery-itemv13 current-lottery-v13before nw3-border position-relative radius24 n0-bg p-xxl-6 p-xl-4 p-3">
      <div class="thumb cus-z1 position-relative radius24 overflow-hidden">
        <div class="current-l-badge cus-z1 d-flex align-items-center justify-content-between pe-xxl-5 pe-4">
          <span class="cmn-draw-badge d-inline-blog act3-bg py-2 ps-xxl-5 ps-3 pe-8">
            <span class="n4-clr position-relative fw_700 fs-eight">{{ drawTime }}</span>
          </span>
        </div>
        <div class="cart-added d-grid align-items-center gap-xxl-3 gap-2">
          <NuxtLink to="#" class="cmn-60 act3-bg d-center radius-circle n0-hover">
            <PhBookmarkSimple weight="bold" class="ph-bold ph-bookmark-simple n4-clr fs-five" />
          </NuxtLink>
          <NuxtLink to="/basket" class="cmn-60 act3-bg d-center radius-circle n0-hover">
            <PhShoppingCart weight="bold" class="ph ph-bold ph-shopping-cart n4-clr fs-five" />
          </NuxtLink>
        </div>
        <NuxtImg :src="image" alt="img" class="w-100" />
      </div>
      <div class="content-middle pt-xxl-6 pt-sm-4 pt-4">
        <div class="d-flex flex-wrap align-items-center justify-content-between pb-xxl-3 pb-sm-3 pb-2 gap-3">
          <h4>
            <NuxtLink to="/contest-details" class="n4-clr fw_700 act4-texthover"> {{ title }} </NuxtLink>
          </h4>
          <NuxtLink to="/contest-details" class="kewta-btn kewta-44 d-inline-flex align-items-center">
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
        <h3 class="d-flex align-items-center gap-3 n4-clr mb-xxl-4 mb-3">
          <span class="pr fw_700">{{ price }}</span>
          <span class="fs-six text-uppercase">{{ perEntry }}</span>
        </h3>
        <div class="border-top"></div>
        <ul class="remaining-info py-xxl-3 py-3 d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
          <li class="d-flex align-items-center gap-2">
            <PhClock class="ph ph-clock fs-five n3-clr" />
            <span class="n3-clr fw_600">{{ daysRemaining }}</span>
          </li>
          <li class="vline-remaing"></li>
          <li class="d-flex align-items-center gap-2">
            <PhBarbell class="ph ph-barbell fs-five n3-clr" />
            <span class="n3-clr fw_600">{{ remaining }}</span>
          </li>
        </ul>
        <div class="border-top"></div>
        <div class="cmn-prrice-range mt-xxl-4 mt-3 d-grid align-items-center gap-2">
          <span class="n4-clr soldout fw_700 fs-eight mb-1">{{ sold }}</span>
          <div class="range-custom position-relative">
            <span class="curs-range"></span>
          </div>
        </div>
      </div>
    </div>
  </MotionEffectMotionFade>
</template>

<style scoped></style>
