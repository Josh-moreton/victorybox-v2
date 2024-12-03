<script setup lang="ts">
import { PhArrowRight, PhBarbell, PhBookmarkSimple, PhClock, PhShoppingCart } from "@phosphor-icons/vue";
import useCountdownTwo from "../../hooks/useCountdownTwo";
import icon from "/images/global/section-iconb.png";
import ri1 from "/images/lottery/ri1.png";
import ri2 from "/images/lottery/ri2.png";
import ri3 from "/images/lottery/ri3.png";

const deadline = "April 20, 2025"; // Follow this format: "MM/DD/YYYY"
const { days, hours, minutes, seconds } = useCountdownTwo(deadline);
</script>
<template>
  <section class="limited-lottery act3-bg pt-120 pb-120">
    <div class="container">
      <!-- {/* Section Header */} -->
      <div class="row g-xl-4 g-3 align-items-center justify-content-center mb-xxl-15 mb-xl-12 mb-10">
        <div class="col-lg-10 col-md-8 col-sm-8">
          <div class="section__title text-center">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex justify-content-center flex-wrap align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="icon" alt="img" />
              <h5 class="n4-clr fw_700">Limited Time Offer!</h5>
            </div>
            <span class="display-five d-block n4-clr"> Up To 50% Off From Selected Jewelry </span>
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
                <span class="text-hed hours">{{ String(hours).padStart(2, "0") }}</span>
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
        <NuxtLink to="/contest" class="n4-clr text-decoration-underline n0-hover"> Browse all Jewelry </NuxtLink>
      </h4>

      <!-- {/* win lottery body */} -->
      <div class="row gx-6 gy-8 justify-content-center form-selectv7">
        <div class="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in" data-aos-duration="1000">
          <div class="current-lottery-itemjewelry position-relative">
            <div class="thumb d-center cus-z1 position-relative mb-xxl-6 mb-xl-5 mb-4">
              <div class="thumb-inner position-relative">
                <NuxtImg :src="ri1" alt="img" />
              </div>
              <div class="cmn-cart-wrapcircle d-flex justify-content-center pt-10 align-items-center gap-1">
                <NuxtLink to="#" class="bokmart cmn-48 d-center">
                  <PhBookmarkSimple weight="bold" class="ph-bold ph-bookmark-simple n4-clr fs-five"></PhBookmarkSimple>
                </NuxtLink>
                <NuxtLink to="#" class="bokmart cmn-48 d-center">
                  <PhShoppingCart weight="bold" class="ph-bold ph-shopping-cart n4-clr fs-five" />
                </NuxtLink>
              </div>
              <span class="draw-badgev7 n4-clr act3-bg py-2 px-xl-4 px-3">
                <span class="n4-clr position-relative text-uppercase fw_700 fs-eight"> Draw Today </span>
              </span>
            </div>
            <div class="content-middle">
              <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3 d-grid align-items-center gap-2">
                <span class="n4-clr soldout fw_700 fs-eight"> 27% Sold </span>
                <div class="range-custom position-relative">
                  <span class="curs-range"></span>
                </div>
              </div>
              <div class="px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-sm-4 py-3">
                <div class="box">
                  <h4 class="mb-xxl-2 mb-2">
                    <NuxtLink to="#" class="n4-clr act3-hover"> Diamond Gold </NuxtLink>
                  </h4>
                  <h3 class="d-flex align-items-center gap-3 n4-clr"><span class="pr">$3.00</span> <span class="fs-six text-uppercase">PER ENTRY</span></h3>
                </div>
              </div>
              <ul class="remaining-info px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-xl-3 py-2 mb-xxl-8 mb-xl-6 mb-4 nw4-bb d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
                <li class="d-flex align-items-center gap-2">
                  <PhClock class="ph ph-clock fs-five n3-clr" />
                  <span class="n3-clr fw_600"> 01 Days </span>
                </li>
                <li class="vline-remaing"></li>
                <li class="d-flex align-items-center gap-2">
                  <PhBarbell class="ph ph-barbell fs-five n3-clr" />
                  <span class="n3-clr fw_600"> 1150 Remaining </span>
                </li>
              </ul>
              <NuxtLink to="/contest-details" class="kewta-btn kewta-alt w-100 d-flex align-items-center">
                <span class="kew-text w-100 text-uppercase fs-seven fw_500 n4-bg n0-clr"> Enter Competition </span>
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
        <div class="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in" data-aos-duration="1400">
          <div class="current-lottery-itemjewelry position-relative">
            <div class="thumb d-center cus-z1 position-relative mb-xxl-6 mb-xl-5 mb-4">
              <div class="thumb-inner position-relative">
                <NuxtImg :src="ri2" alt="img" />
              </div>
              <div class="cmn-cart-wrapcircle d-flex justify-content-center pt-10 align-items-center gap-1">
                <NuxtLink to="#" class="bokmart cmn-48 d-center">
                  <PhBookmarkSimple weight="bold" class="ph-bold ph-bookmark-simple n4-clr fs-five" />
                </NuxtLink>
                <NuxtLink to="#" class="bokmart cmn-48 d-center">
                  <PhShoppingCart weight="bold" class="ph-bold ph-shopping-cart n4-clr fs-five" />
                </NuxtLink>
              </div>
              <span class="draw-badgev7 n4-clr act3-bg py-2 px-xl-4 px-3">
                <span class="n4-clr position-relative text-uppercase fw_700 fs-eight"> Draw Today </span>
              </span>
            </div>
            <div class="content-middle">
              <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3 d-grid align-items-center gap-2">
                <span class="n4-clr soldout fw_700 fs-eight"> 60% Sold </span>
                <div class="range-custom position-relative">
                  <span class="curs-range"></span>
                </div>
              </div>
              <div class="px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-sm-4 py-3">
                <div class="box">
                  <h4 class="mb-xxl-2 mb-2">
                    <NuxtLink to="#" class="n4-clr act3-hover"> Diamond Brilliant </NuxtLink>
                  </h4>
                  <h3 class="d-flex align-items-center gap-3 n4-clr"><span class="pr">$2.00</span> <span class="fs-six text-uppercase">PER ENTRY</span></h3>
                </div>
              </div>
              <ul class="remaining-info px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-xl-3 py-2 mb-xxl-8 mb-xl-6 mb-4 nw4-bb d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
                <li class="d-flex align-items-center gap-2">
                  <PhClock class="ph ph-clock fs-five n3-clr" />
                  <span class="n3-clr fw_600"> 02 Days </span>
                </li>
                <li class="vline-remaing"></li>
                <li class="d-flex align-items-center gap-2">
                  <PhBarbell class="ph ph-barbell fs-five n3-clr" />
                  <span class="n3-clr fw_600"> 1750 Remaining </span>
                </li>
              </ul>
              <NuxtLink to="/contest-details" class="kewta-btn kewta-alt w-100 d-flex align-items-center">
                <span class="kew-text w-100 text-uppercase fs-seven fw_500 n4-bg n0-clr"> Enter Competition </span>
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
        <div class="col-lg-4 col-md-6 col-sm-8" data-aos="zoom-in" data-aos-duration="1600">
          <div class="current-lottery-itemjewelry position-relative">
            <div class="thumb d-center cus-z1 position-relative mb-xxl-6 mb-xl-5 mb-4">
              <div class="thumb-inner position-relative">
                <NuxtImg :src="ri3" alt="img" />
              </div>
              <div class="cmn-cart-wrapcircle d-flex justify-content-center pt-10 align-items-center gap-1">
                <NuxtLink to="#" class="bokmart cmn-48 d-center">
                  <PhBookmarkSimple weight="bold" class="ph-bold ph-bookmark-simple n4-clr fs-five" />
                </NuxtLink>
                <NuxtLink to="#" class="bokmart cmn-48 d-center">
                  <PhShoppingCart weight="bold" class="ph-bold ph-shopping-cart n4-clr fs-five" />
                </NuxtLink>
              </div>
              <span class="draw-badgev7 n4-clr act3-bg py-2 px-xl-4 px-3">
                <span class="n4-clr position-relative text-uppercase fw_700 fs-eight"> Draw Today </span>
              </span>
            </div>
            <div class="content-middle">
              <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3 d-grid align-items-center gap-2">
                <span class="n4-clr soldout fw_700 fs-eight"> 45% Sold </span>
                <div class="range-custom position-relative">
                  <span class="curs-range"></span>
                </div>
              </div>
              <div class="px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-sm-4 py-3">
                <div class="box">
                  <h4 class="mb-xxl-2 mb-2">
                    <NuxtLink to="#" class="n4-clr act3-hover"> Engagement ring </NuxtLink>
                  </h4>
                  <h3 class="d-flex align-items-center gap-3 n4-clr"><span class="pr">$4.00</span> <span class="fs-six text-uppercase">PER ENTRY</span></h3>
                </div>
              </div>
              <ul class="remaining-info px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-xl-3 py-2 mb-xxl-8 mb-xl-6 mb-4 nw4-bb d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
                <li class="d-flex align-items-center gap-2">
                  <PhClock class="ph ph-clock fs-five n3-clr" />
                  <span class="n3-clr fw_600"> 04 Days </span>
                </li>
                <li class="vline-remaing"></li>
                <li class="d-flex align-items-center gap-2">
                  <PhBarbell class="ph ph-barbell fs-five n3-clr" />
                  <span class="n3-clr fw_600"> 1700 Remaining </span>
                </li>
              </ul>
              <NuxtLink to="/contest-details" class="kewta-btn kewta-alt w-100 d-flex align-items-center">
                <span class="kew-text w-100 text-uppercase fs-seven fw_500 n4-bg n0-clr"> Enter Competition </span>
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
      <!-- {/* win lottery body */} -->
    </div>
  </section>
</template>

<style scoped></style>
