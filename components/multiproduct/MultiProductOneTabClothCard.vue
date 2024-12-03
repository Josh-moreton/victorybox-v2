<script setup lang="ts">
import { PhBarbell, PhBookmarkSimple, PhClock, PhShoppingCart, PhStar } from "@phosphor-icons/vue";

defineProps<{
  id: string;
  duration: number;
  drawTime: string;
  image: string;
  title: string;
  price: string;
  perEntry: string;
  daysRemaining: string;
  remaining: string;
  sold: string;
  rating: number;
  reviews: number;
}>();
</script>
<template>
  <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="{duration}">
    <div class="current-lottery-itemv9 cmn-cartborder position-relative radius24 n0-bg">
      <div class="thumb cus-z1 position-relative">
        <div class="current-l-badge cus-z1 d-flex align-items-center justify-content-between pt-xxl-5 pt-4 pe-xxl-5 pe-4">
          <span class="draw-badge n0-clr">
            <span class="n0-clr position-relative fw_700 fs-eight">{{ drawTime }}</span>
          </span>
          <NuxtLink to="/basket" class="cmn-40 n0-bg radius-circle n0-hover">
            <PhShoppingCart weight="bold" class="ph ph-bold ph-shopping-cart n4-clr fs-five" />
          </NuxtLink>
        </div>
        <div class="thumb-in w-100">
          <NuxtImg :src="image" alt="img" class="w-100" />
        </div>
      </div>
      <div class="content-middle">
        <ul class="remaining-info px-xxl-6 px-xl-5 px-lg-4 px-3 pt-xxl-6 pt-4 d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
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
        <div class="d-flex px-xxl-6 px-xl-5 px-lg-4 px-3 pt-xxl-5 pt-sm-4 pt-4 pb-xxl-3 pb-sm-3 pb-2 flex-wrap gap-3 align-items-center justify-content-between">
          <h4>
            <NuxtLink to="/contest-details" class="n4-clr fw_700 act4-texthover">
              {{ title }}
            </NuxtLink>
          </h4>
        </div>
        <div class="d-flex px-xxl-6 px-xl-5 px-lg-4 px-3 align-items-center justify-content-between pb-xxl-6 pb-4">
          <h3 class="d-flex align-items-center gap-3 n4-clr">
            <span class="pr fw_700">{{ price }}</span>
            <span class="fs-six text-uppercase">{{ perEntry }}</span>
          </h3>
          <NuxtLink to="#" class="cmn-40 radius-circle n4-border n0-fillhover">
            <PhBookmarkSimple weight="bold" class="ph-bold ph-bookmark-simple fs-five n4-clr" />
          </NuxtLink>
        </div>
        <div class="border-top"></div>
        <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3 d-grid align-items-center gap-2 py-xxl-6 py-4">
          <span class="n4-clr soldout fw_700 fs-eight mb-1">{{ sold }}</span>
          <div class="range-custom position-relative">
            <span class="curs-range"></span>
          </div>
          <div class="d-flex align-items-center gap-xl-1 gap-1 mt-3">
            <ul class="ratting d-flex align-items-center gap-1">
              <li>
                <PhStar class="ph-fill ph-star fs-five act4-clr" />
              </li>
            </ul>
            <span class="n3-clr fw_600 d-flex align-items-center gap-1">
              <span class="n4-clr fw_600 fs20">{{ rating }}</span> ({{ reviews }} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
