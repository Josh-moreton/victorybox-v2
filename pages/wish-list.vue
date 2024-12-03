<script setup lang="ts">
import { wishListLotteryItems } from "@/../public/data/userPanelData";
import { PhArrowUpRight, PhBarbell, PhBookmarkSimple, PhCaretRight, PhClock, PhShoppingCart, PhStar, PhStarHalf } from "@phosphor-icons/vue";

useHead({
  title: "Wish List - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "user-panel-layout",
});
</script>
<template>
  <div class="col-xxl-9 col-xl-8 col-lg-8">
    <div class="cmn-box-addingbg win40-ragba border radius24 py-xxl-10 py-xl-8 py-lg-6 py-5 px-xxl-8 px-xl-6 px-sm-5 px-4">
      <h3 class="user-title n4-clr mb-xxl-10 mb-xl-8 mb-lg-6 mb-5">My Wish List</h3>
      <div class="row g-xl-6 g-4">
        <MotionEffectMotionFade v-for="item in wishListLotteryItems" class="col-lg-6 col-md-6" data-aos="zoom-in-up" :data-aos-duration="item.aosDuration" :key="item.id">
          <div class="current-lottery-item cmn-cartborder current-bg position-relative radius24">
            <div class="current-l-badge position-relative cus-z1 mb-xxl-10 mb-xl-8 mb-lg-6 mb-4 d-flex align-items-center justify-content-between pt-xxl-5 pt-4 pe-xxl-5 pe-4">
              <span class="draw-badge n4-clr">
                <span class="n4-clr position-relative fw_700 fs-eight">{{ item.drawStatus }}</span>
              </span>
              <span class="cmn-40 n0-bg radius-circle n0-hover">
                <PhShoppingCart class="ph ph-bold ph-shopping-cart n4-clr fs-six"></PhShoppingCart>
              </span>
            </div>
            <div class="thumb cus-z1 position-relative px-3 mb-xxl-10 mb-xl-8 mb-lg-6 mb-4">
              <NuxtImg :src="item.imageSrc" alt="img" />
            </div>
            <div class="content-middle">
              <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3 d-flex align-items-center gap-2">
                <div class="range-custom position-relative">
                  <span class="curs-range"></span>
                </div>
                <span class="n4-clr soldout fw_700 fs-eight">{{ item.soldStatus }}</span>
              </div>
              <div class="d-flex px-xxl-6 px-xl-5 px-lg-4 px-3 nw4-bb py-xxl-5 py-sm-4 py-3 flex-wrap gap-3 align-items-center justify-content-between">
                <div class="box">
                  <h4 class="mb-xxl-3 mb-2">
                    <NuxtLink to="#0" class="n4-clr"> {{ item.title }} </NuxtLink>
                  </h4>
                  <div class="d-flex align-items-center gap-xl-3 gap-2">
                    <ul class="ratting d-flex align-items-center gap-1">
                      <li>
                        <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr"></PhStar>
                      </li>
                      <li>
                        <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr"></PhStar>
                      </li>
                      <li>
                        <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr"></PhStar>
                      </li>
                      <li>
                        <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr"></PhStar>
                      </li>
                      <li>
                        <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr"></PhStarHalf>
                      </li>
                    </ul>
                    <span class="n3-clr fw_600">{{ item.reviews }} reviews</span>
                  </div>
                </div>
                <span class="cmn-40 radius-circle act4-border n0-fillhover">
                  <PhBookmarkSimple weight="bold" class="ph-bold ph-bookmark-simple act4-clr"></PhBookmarkSimple>
                </span>
              </div>
              <ul class="remaining-info px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-xl-3 py-2 nw4-bb d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
                <li class="d-flex align-items-center gap-2">
                  <PhClock class="ph ph-clock fs-five n3-clr"></PhClock>
                  <span class="n3-clr fw_600">{{ item.daysRemaining }} Days</span>
                </li>
                <li class="vline-remaing"></li>
                <li class="d-flex align-items-center gap-2">
                  <PhBarbell class="ph ph-barbell fs-five n3-clr"></PhBarbell>
                  <span class="n3-clr fw_600">{{ item.itemsRemaining }} Remaining</span>
                </li>
              </ul>
              <div class="d-flex px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-8 py-xl-6 py-lg-4 py-3 align-items-center justify-content-between">
                <h3 class="d-flex align-items-center gap-3 n4-clr">
                  <span class="pr">{{ item.price }}</span> <span class="fs-six text-uppercase">{{ item.perEntry }}</span>
                </h3>
                <NuxtLink to="#0" class="cmn-40 radius-circle s1-bg s1-hover">
                  <span>
                    <PhArrowUpRight weight="bold" class="ph-bold ph-arrow-up-right n0-clr lh"></PhArrowUpRight>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </MotionEffectMotionFade>
      </div>
      <ul class="custom-pagination pt-xxl-15 pt-xl-10 pt-8 d-flex align-items-center justify-content-center gap-xxl-3 gap-2">
        <li>
          <NuxtLink to="#0" class="cmn-60 d-center radius-circle nw1-clr n2-bg fs20 fw_700"> 1 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#0" class="cmn-60 d-center radius-circle nw1-clr n2-bg fs20 fw_700 active"> 2 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#0" class="cmn-60 d-center radius-circle nw1-clr n2-bg fs20 fw_700"> 3 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#0" class="cmn-60 d-center radius-circle nw1-clr n2-bg">
            <PhCaretRight class="ph ph-caret-right nw1-clr fs20"></PhCaretRight>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
