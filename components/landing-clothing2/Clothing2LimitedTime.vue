<script setup lang="ts">
import { PhArrowRight, PhBarbell, PhBookmarkSimple, PhBookmarksSimple, PhClock, PhShoppingCart, PhShoppingCartSimple } from "@phosphor-icons/vue";
import useCountdownTwo from "../../hooks/useCountdownTwo";
import icon from "/images/global/section-iconb.png";
import l1 from "/images/man-global/comv15-l1.png";
import l2 from "/images/man-global/comv15-l2.png";
import l3 from "/images/man-global/comv15-l3.png";

const deadline = "April 20, 2026";
const { days, hours, minutes, seconds } = useCountdownTwo(deadline);
</script>
<template>
  <section class="limited-lottery limited-lotteryv16 act3-bg pt-120 pb-120">
    <div class="container">
      <!-- {/* Section Header */} -->
      <div class="row g-xl-4 g-3 align-items-center justify-content-center mb-xxl-15 mb-xl-12 mb-10">
        <div class="col-lg-10 col-md-8 col-sm-8">
          <div class="section__title text-center">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex justify-content-center flex-wrap align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="icon" alt="img" />
              <h5 class="n4-clr fw_700">Limited Time Offer!</h5>
            </div>
            <span class="display-five d-block n4-clr">Up To 50% Off From Selected Clothing</span>
          </div>
        </div>
      </div>
      <!-- {/* Section Header */} -->

      <!-- {/* Included Cound Down */} -->
      <div class="limited-timerwrap mb-xxl-15 mb-xl-10 mb-6">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-lg-md-12 col-sm-12">
            <div class="limit-time" id="clockdiv2">
              <div class="draw-timer-item">
                <span class="text-hed days">{{ days }}</span>
                <div class="smalltext">Days</div>
              </div>
              <div class="ldots">:</div>
              <div class="draw-timer-item">
                <span class="text-hed hours">{{ String(hours).padStart(2, "0") }} </span>
                <div class="smalltext">Hours</div>
              </div>
              <div class="ldots">:</div>
              <div class="draw-timer-item">
                <span class="text-hed minutes">{{ String(minutes).padStart(2, "0") }}</span>
                <div class="smalltext">Minutes</div>
              </div>
              <div class="ldots">:</div>
              <div class="draw-timer-item">
                <span class="text-hed seconds">{{ String(seconds).padStart(2, "0") }}</span>
                <div class="smalltext">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- {/* Included Cound Down */} -->

      <h4 class="mb-xxl-15 mb-xl-10 mb-6 text-center">
        <NuxtLink to="/contest" class="n4-clr text-decoration-underline n0-hover"> Browse all Clothing </NuxtLink>
      </h4>

      <!-- {/* win lottery body */} -->
      <div class="row gx-6 gy-8 justify-content-center form-selectv7">
        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1000">
          <div class="current-lottery-itemv13 current-lottery-itemv14 nw3-border position-relative radius24 n0-bg p-xxl-6 p-xl-4 p-3">
            <div class="current-l-badge cus-z1 d-flex align-items-center justify-content-between pe-xxl-5 pe-4">
              <span class="cmn-draw-badge d-inline-blog n4-bg py-2 ps-xxl-5 ps-3 pe-8">
                <span class="n0-clr position-relative fw_700 fs-eight">Draw Wednesday 8pm</span>
              </span>
            </div>
            <div class="thumb cus-z1 position-relative radius24 overflow-hidden">
              <div class="cart-added d-grid align-items-center gap-xxl-3 gap-2">
                <NuxtLink to="#" class="cmn-40 act4-bg d-center radius-circle n0-hover">
                  <PhBookmarkSimple class="ph-bold ph-bookmark-simple n0-clr fs-five" />
                </NuxtLink>
                <NuxtLink to="/basket" class="cmn-40 act4-bg d-center radius-circle n0-hover">
                  <PhShoppingCart class="ph ph-bold ph-shopping-cart n0-clr fs-five" />
                </NuxtLink>
              </div>
              <NuxtImg :src="l1" alt="img" class="w-100" />
            </div>
            <div class="content-middle pt-xxl-6 pt-sm-4 pt-4">
              <h4>
                <NuxtLink to="/basket" class="n4-clr fw_700 act4-texthover"> Faux leather biker jacket </NuxtLink>
              </h4>
              <ul class="remaining-info py-xxl-6 py-3 d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
                <li class="d-flex align-items-center gap-2">
                  <PhClock class="ph ph-clock fs-five n3-clr" />
                  <span class="n3-clr fw_600">05 Days</span>
                </li>
                <li class="vline-remaing"></li>
                <li class="d-flex align-items-center gap-2">
                  <PhBarbell class="ph ph-barbell fs-five n3-clr" />
                  <span class="n3-clr fw_600">1950 Remaining</span>
                </li>
              </ul>
              <div class="border-top"></div>
              <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap pt-xxl-5 pt-4">
                <h3 class="d-flex align-items-center gap-3 n4-clr"><span class="pr fw_700">$0.40</span> <span class="fs-six text-uppercase">PER ENTRY</span></h3>
                <NuxtLink to="/basket" class="kewta-btn kewta-44 d-inline-flex align-items-center">
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
        </div>
        <div class="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="1200">
          <div class="current-lottery-itemv13 current-lottery-itemv14 nw3-border position-relative radius24 n0-bg p-xxl-6 p-xl-4 p-3">
            <div class="current-l-badge cus-z1 d-flex align-items-center justify-content-between pe-xxl-5 pe-4">
              <span class="cmn-draw-badge d-inline-blog n4-bg py-2 ps-xxl-5 ps-3 pe-8">
                <span class="n0-clr position-relative fw_700 fs-eight">Draw Wednesday 8pm</span>
              </span>
            </div>
            <div class="thumb cus-z1 position-relative radius24 overflow-hidden">
              <div class="cart-added d-grid align-items-center gap-xxl-3 gap-2">
                <NuxtLink to="#" class="cmn-40 act4-bg d-center radius-circle n0-hover">
                  <PhBookmarksSimple class="ph-bold ph-bookmark-simple n0-clr fs-five"></PhBookmarksSimple>
                </NuxtLink>
                <NuxtLink to="/basket" class="cmn-40 act4-bg d-center radius-circle n0-hover">
                  <PhShoppingCartSimple class="ph ph-bold ph-shopping-cart n0-clr fs-five"></PhShoppingCartSimple>
                </NuxtLink>
              </div>
              <NuxtImg :src="l2" alt="img" class="w-100" />
            </div>
            <div class="content-middle pt-xxl-6 pt-sm-4 pt-4">
              <h4>
                <NuxtLink to="/basket" class="n4-clr fw_700 act4-texthover"> Trench-style coat </NuxtLink>
              </h4>
              <ul class="remaining-info py-xxl-6 py-3 d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
                <li class="d-flex align-items-center gap-2">
                  <PhClock class="ph ph-clock fs-five n3-clr"></PhClock>
                  <span class="n3-clr fw_600">05 Days</span>
                </li>
                <li class="vline-remaing"></li>
                <li class="d-flex align-items-center gap-2">
                  <PhBarbell class="ph ph-barbell fs-five n3-clr"></PhBarbell>
                  <span class="n3-clr fw_600">1950 Remaining</span>
                </li>
              </ul>
              <div class="border-top"></div>
              <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap pt-xxl-5 pt-4">
                <h3 class="d-flex align-items-center gap-3 n4-clr"><span class="pr fw_700">$0.50</span> <span class="fs-six text-uppercase">PER ENTRY</span></h3>
                <NuxtLink to="/basket" class="kewta-btn kewta-44 d-inline-flex align-items-center">
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
        </div>
        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1400">
          <div class="current-lottery-itemv13 current-lottery-itemv14 nw3-border position-relative radius24 n0-bg p-xxl-6 p-xl-4 p-3">
            <div class="current-l-badge cus-z1 d-flex align-items-center justify-content-between pe-xxl-5 pe-4">
              <span class="cmn-draw-badge d-inline-blog n4-bg py-2 ps-xxl-5 ps-3 pe-8">
                <span class="n0-clr position-relative fw_700 fs-eight">Draw Wednesday 8pm</span>
              </span>
            </div>
            <div class="thumb cus-z1 position-relative radius24 overflow-hidden">
              <div class="cart-added d-grid align-items-center gap-xxl-3 gap-2">
                <NuxtLink to="#" class="cmn-40 act4-bg d-center radius-circle n0-hover">
                  <PhBookmarkSimple class="ph-bold ph-bookmark-simple n0-clr fs-five"></PhBookmarkSimple>
                </NuxtLink>
                <NuxtLink to="/basket" class="cmn-40 act4-bg d-center radius-circle n0-hover">
                  <PhShoppingCart class="ph ph-bold ph-shopping-cart n0-clr fs-five"></PhShoppingCart>
                </NuxtLink>
              </div>
              <NuxtImg :src="l3" alt="img" class="w-100" />
            </div>
            <div class="content-middle pt-xxl-6 pt-sm-4 pt-4">
              <h4>
                <NuxtLink to="/basket" class="n4-clr fw_700 act4-texthover"> Green Camo Sleeve Shacket </NuxtLink>
              </h4>
              <ul class="remaining-info py-xxl-6 py-3 d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
                <li class="d-flex align-items-center gap-2">
                  <PhClock class="ph ph-clock fs-five n3-clr"></PhClock>
                  <span class="n3-clr fw_600">05 Days</span>
                </li>
                <li class="vline-remaing"></li>
                <li class="d-flex align-items-center gap-2">
                  <PhBarbell class="ph ph-barbell fs-five n3-clr"></PhBarbell>
                  <span class="n3-clr fw_600">1950 Remaining</span>
                </li>
              </ul>
              <div class="border-top"></div>
              <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap pt-xxl-5 pt-4">
                <h3 class="d-flex align-items-center gap-3 n4-clr"><span class="pr fw_700">$0.70</span> <span class="fs-six text-uppercase">PER ENTRY</span></h3>
                <NuxtLink to="/basket" class="kewta-btn kewta-44 d-inline-flex align-items-center">
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
        </div>
      </div>
      <!-- {/* win lottery body */} -->
    </div>
  </section>
</template>

<style scoped></style>
