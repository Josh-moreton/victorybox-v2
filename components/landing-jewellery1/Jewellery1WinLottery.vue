<script setup lang="ts">
import { jewellery1items } from "@/../public/data/jewellery1PageData";
import { PhArrowRight, PhArrowUpRight, PhBarbell, PhBookmarkSimple, PhClock, PhShoppingCart } from "@phosphor-icons/vue";
</script>
<template>
  <section class="current-lottery pb-120">
    <div class="container">
      <!-- {/* Section Header */} -->
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title">
            <SubTitle text="Try your chance at winning" />
            <span class="display-four d-block n4-clr">
              Current
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Lottery </span>
              <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Offering </span>
            </span>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <div class="browse-more" data-aos="zoom-in" data-aos-duration="2000">
            <NuxtLink to="/contest" class="cmn__collection radius-circle s1-bg d-center position-relative ms-lg-auto">
              <span class="cmn-cont-box text-center position-relative">
                <span class="icon mb-1">
                  <PhArrowUpRight class="ph-bold ph-arrow-up-right n0-clr fs-three"></PhArrowUpRight>
                </span>
                <span class="d-block n0-clr fw_700"> Browse More </span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- {/* Section Header */} -->

      <!-- {/* win lottery body */} -->
      <div class="row gx-6 gy-8">
        <div v-for="item in jewellery1items" :class="`col-lg-4 col-md-6 col-sm-6 `" key="{item.id}">
          <div class="current-lottery-itemjewelry position-relative">
            <div class="thumb d-center cus-z1 position-relative mb-xxl-6 mb-xl-5 mb-4">
              <div class="thumb-inner position-relative">
                <NuxtImg :src="item.image" alt="img" />
              </div>
              <div class="cmn-cart-wrapcircle d-flex justify-content-center pt-10 align-items-center gap-1">
                <NuxtLink to="#" class="bokmart cmn-48 d-center">
                  <PhBookmarkSimple weight="bold" class="ph-bold ph-bookmark-simple n4-clr fs-five"></PhBookmarkSimple>
                </NuxtLink>
                <NuxtLink to="#" class="bokmart cmn-48 d-center">
                  <PhShoppingCart class="ph-bold ph-shopping-cart n4-clr fs-five"></PhShoppingCart>
                </NuxtLink>
              </div>
              <span class="draw-badgev7 n4-clr act3-bg py-2 px-xl-4 px-3">
                <span class="n4-clr position-relative text-uppercase fw_700 fs-eight"> Draw Today </span>
              </span>
            </div>
            <div class="content-middle">
              <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3 d-grid align-items-center gap-2">
                <span class="n4-clr soldout fw_700 fs-eight"> {item.soldOut} </span>
                <div class="range-custom position-relative">
                  <span class="curs-range"></span>
                </div>
              </div>
              <div class="px-xxl-6 px-xl-5 px-lg-4 px-3 nw4-bb py-xxl-5 py-sm-4 py-3">
                <div class="box">
                  <h4 class="mb-xxl-2 mb-2">
                    <NuxtLink to="#" class="n4-clr act3-hover">
                      {{ item.title }}
                    </NuxtLink>
                  </h4>
                  <h3 class="d-flex align-items-center gap-3 n4-clr">
                    <span class="pr">{{ item.price }}</span> <span class="fs-six text-uppercase">{{ item.perEntry }}</span>
                  </h3>
                </div>
              </div>
              <ul class="remaining-info px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-xl-3 py-2 mb-xxl-8 mb-xl-6 mb-4 nw4-bb d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
                <li class="d-flex align-items-center gap-2">
                  <PhClock class="ph ph-clock fs-five n3-clr"></PhClock>
                  <span class="n3-clr fw_600"> {{ item.drawDays }} </span>
                </li>
                <li class="vline-remaing"></li>
                <li class="d-flex align-items-center gap-2">
                  <PhBarbell class="ph ph-barbell fs-five n3-clr"></PhBarbell>
                  <span class="n3-clr fw_600"> {{ item.remainingItems }} </span>
                </li>
              </ul>
              <NuxtLink to="/contest-details" class="kewta-btn kewta-alt w-100 d-flex align-items-center">
                <span class="kew-text w-100 text-uppercase fs-seven fw_500 n4-bg n0-clr"> Enter Competition </span>
                <div class="kew-arrow n4-bg">
                  <div class="kt-one">
                    <PhArrowRight class="ti ti-arrow-right n0-clr"></PhArrowRight>
                  </div>
                  <div class="kt-two">
                    <PhArrowRight class="ti ti-arrow-right n0-clr"></PhArrowRight>
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
