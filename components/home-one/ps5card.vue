<script setup lang="ts">
import { PhArrowUpRight, PhBarbell, PhBookmarkSimple, PhClock, PhShoppingCart, PhStar, PhStarHalf } from "@phosphor-icons/vue";

defineProps<{
  image: string;
  title: string;
  soldPercentage: string;
  rating: number;
  days: string;
  remaining: string;
  price: string;
  serialNumber: string;
}>();
</script>
<template>
  <div class="col-lg-4 col-md-6">
    <div class="current-lottery-item cmn-cartborder current-bg position-relative radius24">
      <div class="current-l-badge position-relative cus-z1 mb-xxl-10 mb-xl-8 mb-lg-6 mb-4 d-flex align-items-center justify-content-between pt-xxl-5 pt-4 pe-xxl-5 pe-4">
        <span class="draw-badge n4-clr">
          <span class="n4-clr position-relative fw_700 fs-eight"> Draw Today </span>
        </span>
        <span class="cmn-40 n0-bg radius-circle n0-hover">
          <PhShoppingCart class="ph ph-bold ph-shopping-cart n4-clr fs-six" />
        </span>
      </div>
      <div class="thumb cus-z1 position-relative px-3 mb-xxl-10 mb-xl-8 mb-lg-6 mb-4">
        <NuxtImg :src="image" alt="img" class="car-win-card-image" />
      </div>
      <div class="content-middle">
        <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3 d-flex align-items-center gap-2">
          <div class="range-custom position-relative">
            <span class="curs-range" :style="{ left: soldPercentage }"></span>
          </div>
          <span class="n4-clr soldout fw_700 fs-eight"> {{ soldPercentage }} Sold </span>
        </div>
        <div class="d-flex px-xxl-6 px-xl-5 px-lg-4 px-3 nw4-bb py-xxl-5 py-sm-4 py-3 flex-wrap gap-3 align-items-center justify-content-between">
          <div class="box">
            <h4 class="mb-xxl-3 mb-2">
              <NuxtLink to="/contest-details">
                <span class="n4-clr">{{ title }}</span>
              </NuxtLink>
            </h4>
            <div class="d-flex align-items-center gap-xl-3 gap-2">
              <ul class="ratting d-flex align-items-center gap-1">
                <li>
                  <PhStar :size="24" class="ph-fill ph-star fs-five act4-clr" weight="fill" />
                </li>
                <li>
                  <PhStar :size="24" class="ph-fill ph-star fs-five act4-clr" weight="fill" />
                </li>
                <li>
                  <PhStar :size="24" class="ph-fill ph-star fs-five act4-clr" weight="fill" />
                </li>
                <li>
                  <PhStar :size="24" class="ph-fill ph-star fs-five act4-clr" weight="fill" />
                </li>
                <li>
                  <PhStarHalf :size="24" class="ph-fill ph-star fs-five act4-clr" weight="fill" />
                </li>
              </ul>
              <span class="n3-clr fw_600"> {{ rating }} reviews </span>
            </div>
          </div>
          <span class="cmn-40 radius-circle act4-border n0-fillhover">
            <PhBookmarkSimple class="ph-bold ph-bookmark-simple act4-clr" />
          </span>
        </div>
        <ul class="remaining-info px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-xl-3 py-2 nw4-bb d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
          <li class="d-flex align-items-center gap-2">
            <PhClock class="ph ph-clock fs-five n3-clr" />
            <span class="n3-clr fw_600"> {{ days }} Days </span>
          </li>
          <li class="vline-remaing"></li>
          <li class="d-flex align-items-center gap-2">
            <PhBarbell class="ph ph-barbell fs-five n3-clr" />
            <span class="n3-clr fw_600"> {{ remaining }} Remaining </span>
          </li>
        </ul>
        <div class="d-flex px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-8 py-xl-6 py-lg-4 py-3 align-items-center justify-content-between">
          <h3 class="d-flex align-items-center gap-3 n4-clr">
            <span class="pr">{{ price }}</span>
            <span class="fs-six text-uppercase">PER ENTRY</span>
          </h3>
          <NuxtLink to="/contest-details">
            <span class="cmn-40 radius-circle s1-bg s1-hover">
              <PhArrowUpRight class="ph-bold ph-arrow-up-right n0-clr lh" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
