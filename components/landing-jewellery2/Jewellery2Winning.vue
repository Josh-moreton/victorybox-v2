<script setup lang="ts">
import { jewellery2lotteryItems } from "@/../public/data/jewellery2PageData";
import { PhArrowRight, PhArrowUpRight, PhBarbell, PhBookmarksSimple, PhClock, PhPlus, PhShoppingCart } from "@phosphor-icons/vue";
</script>
<template>
  <section class="current-lottery pb-120 pt-120">
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
                  <PhArrowUpRight class="ph-bold ph-arrow-up-right n0-clr fs-three" />
                </span>
                <span class="d-block n0-clr fw_700"> Browse More </span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- {/* Section Header */} -->

      <!-- {/* win lottery body */} -->
      <div class="row g-6">
        <div class="row g-6">
          <div
            v-for="({ image, drawTime, soldPercent, price, entryPrice, title, daysRemaining, itemsRemaining }, index) in jewellery2lotteryItems"
            :key="`lottery-item-${index}`"
            class="col-lg-4 col-md-6 col-sm-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div class="current-lottery-itemjewelry current-lottery-itemjewelry8 position-relative">
              <div class="thumb cus-z1 position-relative">
                <div class="thumb-inner d-center position-relative">
                  <NuxtImg :src="image" alt="img" />
                </div>
                <span class="n4-badge d-inline-block">
                  <span class="n0-clr position-relative fw_700 fs-eight">{{ drawTime }}</span>
                </span>
                <div class="iconbox radius-circle">
                  <div class="team-social">
                    <ul class="social-area d-grid gap-1">
                      <li>
                        <NuxtLink to="/basket" class="bokmart d-center">
                          <PhShoppingCart weight="bold" class="ph-bold ph-shopping-cart n4-clr fs-five" />
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/basket" class="bokmart d-center">
                          <PhBookmarksSimple weight="bold" class="ph-bold ph-bookmark-simple n4-clr fs-five" />
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                  <div class="icon d-center radius-circle">
                    <PhPlus class="ti ti-plus fs-five cus-z1 p1-color" />
                  </div>
                </div>
              </div>
              <div class="content-middle pt-xxl-6 pt-xl-5 pt-4 pb-xxl-6 pb-xl-5 pb-4">
                <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3 d-grid align-items-center gap-2">
                  <span class="n4-clr soldout fw_700 fs-eight">{{ soldPercent }}</span>
                  <div class="range-custom position-relative">
                    <span class="curs-range"></span>
                  </div>
                </div>
                <div class="px-xxl-6 px-xl-5 px-lg-4 px-3 nw4-bb py-xxl-5 py-sm-4 py-3">
                  <div class="box">
                    <h4 class="mb-xxl-2 mb-2">
                      <NuxtLink to="/contest" class="n4-clr act3-hover fw_700"> {{ title }} </NuxtLink>
                    </h4>
                    <h3 class="d-flex align-items-center gap-3 n4-clr">
                      <span class="pr">{{ price }}</span> <span class="fs-six text-uppercase">{{ entryPrice }}</span>
                    </h3>
                  </div>
                </div>
                <ul class="remaining-info px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-xl-3 py-2 mb-xxl-8 mb-xl-6 mb-4 nw4-bb d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
                  <li class="d-flex align-items-center gap-2">
                    <PhClock class="ph ph-clock fs-five n3-clr"></PhClock>
                    <span class="n3-clr fw_600">{{ daysRemaining }}</span>
                  </li>
                  <li class="vline-remaing"></li>
                  <li class="d-flex align-items-center gap-2">
                    <PhBarbell class="ph ph-barbell fs-five n3-clr"></PhBarbell>
                    <span class="n3-clr fw_600">{{ itemsRemaining }}</span>
                  </li>
                </ul>
                <div class="px-xxl-6 px-xl-5 px-lg-4 px-3">
                  <NuxtLink to="/contest" class="kewta-btn kewta-alt w-100 d-flex align-items-center">
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
            </div>
          </div>
        </div>
        );
      </div>
      <!-- {/* win lottery body */} -->
    </div>
  </section>
</template>

<style scoped></style>
