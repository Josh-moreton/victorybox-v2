<script setup lang="ts">
import { realEstate2contests } from "@/../public/data/realestate1PageData";
import { PhArrowRight, PhArrowUpRight, PhBarbell, PhBookmarkSimple, PhClock, PhShoppingCart } from "@phosphor-icons/vue";
</script>
<template>
  <section class="current-lottery current-lotteryv9 n0-bg pt-120 pb-120">
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
            <NuxtLink to="/contest" class="cmn__collection radius-circle act3-bg d-center position-relative">
              <span class="cmn-cont-box text-center position-relative">
                <span class="icon mb-1">
                  <PhArrowUpRight weight="bold" class="ph-bold ph-arrow-up-right n4-clr fs-three" />
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
        <div v-for="(contest, index) in realEstate2contests" class="col-lg-4 col-md-6" :key="`realestate-2-win-product-${index}`" data-aos="zoom-in" :data-aos-duration="`${1000 + index * 200}`">
          <div class="current-lottery-itemv11 current-lottery-itemv12 position-relative radius24 n0-bg overflow-hidden">
            <div class="thumb w-100 cus-z1 position-relative">
              <NuxtImg :src="contest.image" alt="img" class="w-100" />
              <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3 pb-xxl-6 pb-4">
                <span class="n4-clr soldout fw_700 fs-eight mb-2">{{ contest.soldPercentage }}</span>
                <div class="range-custom range-custom-act4 range-custom-act12 position-relative">
                  <span class="curs-range"></span>
                </div>
              </div>
              <div class="offering-content12 text-center px-xxl-6 px-xl-4 px-3">
                <div class="kewta-btn kewta-alt d-inline-flex justify-content-center align-items-center">
                  <h3 class="kew-text n4-bg d-flex align-items-center justify-content-center gap-3 n4-clr">
                    <span class="fs-three fw_700 n0-clr">{{ contest.price }}</span> <span class="fs-six text-uppercase n0-clr">PER ENTRY</span>
                  </h3>
                  <div class="kew-arrow cmn-60 n4-bg">
                    <div class="kt-one">
                      <PhArrowRight class="ti ti-arrow-right n0-clr" />
                    </div>
                    <div class="kt-two">
                      <PhArrowRight class="ti ti-arrow-right n0-clr" />
                    </div>
                  </div>
                </div>
                <ul class="remaining-info mt-8 d-flex justify-content-center border-bottom pb-xxl-5 pb-4 mb-xxl-5 mb-4 align-items-center gap-xxl-5 gap-lg-3 gap-2">
                  <li class="d-flex align-items-center gap-2">
                    <PhClock class="ph ph-clock fs-five nw1-clr" />
                    <span class="nw1-clr fw_600">{{ contest.daysRemaining }}</span>
                  </li>
                  <li class="vline-remaing"></li>
                  <li class="d-flex align-items-center gap-2">
                    <PhBarbell class="ph ph-barbell fs-five nw1-clr" />
                    <span class="nw1-clr fw_600">{{ contest.remainingEntries }}</span>
                  </li>
                </ul>
                <ul class="social-area d-flex justify-content-center gap-xxl-3 gap-2">
                  <li>
                    <NuxtLink to="/basket" class="bokmart d-center act3-bg radius-circle cmn-60">
                      <PhShoppingCart class="ph-bold ph-shopping-cart n4-clr fs-five" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/basket" class="bokmart d-center act3-bg radius-circle cmn-60">
                      <PhBookmarkSimple class="ph-bold ph-bookmark-simple n4-clr fs-five" />
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- {/* win lottery body */} -->
    </div>
  </section>
</template>

<style scoped></style>
