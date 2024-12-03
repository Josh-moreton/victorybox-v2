<script setup lang="ts">
import { PhArrowUpRight, PhBarbell, PhBookmarkSimple, PhClock, PhShoppingCart, PhStar, PhStarHalf } from "@phosphor-icons/vue";
import useCountdownTwo from "../../hooks/useCountdownTwo";
import icon from "/images/global/section-icon.png";
import lc1 from "/images/lottery/lc1.png";
import lc2 from "/images/lottery/lc2.png";
import lc3 from "/images/lottery/lc3.png";

const deadline = "April 20, 2025";
const { days, hours, minutes, seconds } = useCountdownTwo(deadline);
</script>
<template>
  <section class="limited-lottery act3-bg pt-120 pb-120">
    <div class="container">
      <!--Section Header-->
      <div class="row g-xl-4 g-3 align-items-center justify-content-center mb-xxl-10 mb-xl-9 mb-8">
        <div class="col-lg-10 col-md-8 col-sm-8">
          <div class="section__title text-center">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex justify-content-center flex-wrap align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="icon" alt="img" />
              <h5 class="s1-clr fw_700">Limited Time Offer!</h5>
            </div>
            <span class="display-five d-block n4-clr">Up To 50% Off From Selected Car</span>
          </div>
        </div>
      </div>
      <!--Section Header-->

      <!--Included Cound Down-->
      <div class="limited-timerwrap pb-120">
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
      <!--Included Cound Down-->

      <!--limited body-->
      <div class="row g-6">
        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1000">
          <div class="current-lottery-item cmn-cartborder current-bg position-relative radius24">
            <div class="current-l-badge position-relative cus-z1 mb-xxl-10 mb-xl-8 mb-lg-6 mb-4 d-flex align-items-center justify-content-between pt-xxl-5 pt-4 pe-xxl-5 pe-4">
              <span class="draw-badge n4-clr">
                <span class="n4-clr position-relative fw_700 fs-eight">Draw Today</span>
              </span>
              <span class="cmn-40 n0-bg radius-circle n0-hover">
                <PhShoppingCart weight="bold" class="ph ph-bold ph-shopping-cart n4-clr fs-six"></PhShoppingCart>
              </span>
            </div>
            <div class="thumb cus-z1 position-relative px-3 mb-xxl-10 mb-xl-8 mb-lg-6 mb-4">
              <NuxtImg :src="lc1" alt="img" />
            </div>
            <div class="content-middle">
              <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3 d-flex align-items-center gap-2">
                <div class="range-custom position-relative">
                  <span class="curs-range"></span>
                </div>
                <span class="n4-clr soldout fw_700 fs-eight">27% Sold</span>
              </div>
              <div class="d-flex px-xxl-6 px-xl-5 px-lg-4 px-3 nw4-bb py-xxl-5 py-sm-4 py-3 flex-wrap gap-3 align-items-center justify-content-between">
                <div class="box">
                  <h4 class="mb-xxl-3 mb-2">
                    <NuxtLink to="/contest-details" class="n4-clr"> The Breeze Zodiac IX </NuxtLink>
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
                    <span class="n3-clr fw_600">0.97 reviews</span>
                  </div>
                </div>
                <span class="cmn-40 radius-circle act4-border n0-fillhover">
                  <PhBookmarkSimple class="ph-bold ph-bookmark-simple act4-clr"></PhBookmarkSimple>
                </span>
              </div>
              <ul class="remaining-info px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-xl-3 py-2 nw4-bb d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
                <li class="d-flex align-items-center gap-2">
                  <PhClock class="ph ph-clock fs-five n3-clr"></PhClock>
                  <span class="n3-clr fw_600">03 Days</span>
                </li>
                <li class="vline-remaing"></li>
                <li class="d-flex align-items-center gap-2">
                  <PhBarbell class="ph ph-barbell fs-five n3-clr"></PhBarbell>
                  <span class="n3-clr fw_600">1750 Remaining</span>
                </li>
              </ul>
              <div class="d-flex px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-8 py-xl-6 py-lg-4 py-3 align-items-center justify-content-between">
                <h3 class="d-flex align-items-center gap-3 n4-clr"><span class="pr">$8.00</span> <span class="fs-six text-uppercase">PER ENTRY</span></h3>
                <NuxtLink to="/contest-details" class="cmn-40 radius-circle s1-bg s1-hover">
                  <span>
                    <PhArrowUpRight class="ph-bold ph-arrow-up-right n0-clr lh"></PhArrowUpRight>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="1200">
          <div class="current-lottery-item cmn-cartborder current-bg position-relative radius24">
            <div class="current-l-badge position-relative cus-z1 mb-xxl-10 mb-xl-8 mb-lg-6 mb-4 d-flex align-items-center justify-content-between pt-xxl-5 pt-4 pe-xxl-5 pe-4">
              <span class="draw-badge n4-clr">
                <span class="n4-clr position-relative fw_700 fs-eight">Draw Today</span>
              </span>
              <span class="cmn-40 n0-bg radius-circle n0-hover">
                <PhShoppingCart weight="bold" class="ph ph-bold ph-shopping-cart n4-clr fs-six"></PhShoppingCart>
              </span>
            </div>
            <div class="thumb cus-z1 position-relative px-3 mb-xxl-10 mb-xl-8 mb-lg-6 mb-4">
              <NuxtImg :src="lc2" alt="img" />
            </div>
            <div class="content-middle">
              <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3 d-flex align-items-center gap-2">
                <div class="range-custom position-relative">
                  <span class="curs-range"></span>
                </div>
                <span class="n4-clr soldout fw_700 fs-eight">23% Sold</span>
              </div>
              <div class="d-flex px-xxl-6 px-xl-5 px-lg-4 px-3 nw4-bb py-xxl-5 py-sm-4 py-3 flex-wrap gap-3 align-items-center justify-content-between">
                <div class="box">
                  <h4 class="mb-xxl-3 mb-2">
                    <NuxtLink to="/contest-details" class="n4-clr"> Chiptuning Von ABT </NuxtLink>
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
                    <span class="n3-clr fw_600">0.97 reviews</span>
                  </div>
                </div>
                <span class="cmn-40 radius-circle act4-border n0-fillhover">
                  <PhBookmarkSimple class="ph-bold ph-bookmark-simple act4-clr"></PhBookmarkSimple>
                </span>
              </div>
              <ul class="remaining-info px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-xl-3 py-2 nw4-bb d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
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
              <div class="d-flex px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-8 py-xl-6 py-lg-4 py-3 align-items-center justify-content-between">
                <h3 class="d-flex align-items-center gap-3 n4-clr"><span class="pr">$5.00</span> <span class="fs-six text-uppercase">PER ENTRY</span></h3>
                <NuxtLink to="/contest-details" class="cmn-40 radius-circle s1-bg s1-hover">
                  <span>
                    <PhArrowUpRight class="ph-bold ph-arrow-up-right n0-clr lh"></PhArrowUpRight>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1400">
          <div class="current-lottery-item cmn-cartborder current-bg position-relative radius24">
            <div class="current-l-badge position-relative cus-z1 mb-xxl-10 mb-xl-8 mb-lg-6 mb-4 d-flex align-items-center justify-content-between pt-xxl-5 pt-4 pe-xxl-5 pe-4">
              <span class="draw-badge n4-clr">
                <span class="n4-clr position-relative fw_700 fs-eight">Draw Today</span>
              </span>
              <span class="cmn-40 n0-bg radius-circle n0-hover">
                <PhShoppingCart weight="bold" class="ph ph-bold ph-shopping-cart n4-clr fs-six"></PhShoppingCart>
              </span>
            </div>
            <div class="thumb cus-z1 position-relative px-3 mb-xxl-10 mb-xl-8 mb-lg-6 mb-4">
              <NuxtImg :src="lc3" alt="img" />
            </div>
            <div class="content-middle">
              <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3 d-flex align-items-center gap-2">
                <div class="range-custom position-relative">
                  <span class="curs-range"></span>
                </div>
                <span class="n4-clr soldout fw_700 fs-eight">20% Sold</span>
              </div>
              <div class="d-flex px-xxl-6 px-xl-5 px-lg-4 px-3 nw4-bb py-xxl-5 py-sm-4 py-3 flex-wrap gap-3 align-items-center justify-content-between">
                <div class="box">
                  <h4 class="mb-xxl-3 mb-2">
                    <NuxtLink to="/contest-details" class="n4-clr"> Shelby Cobra </NuxtLink>
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
                    <span class="n3-clr fw_600">0.97 reviews</span>
                  </div>
                </div>
                <span class="cmn-40 radius-circle act4-border n0-fillhover">
                  <PhBookmarkSimple class="ph-bold ph-bookmark-simple act4-clr"></PhBookmarkSimple>
                </span>
              </div>
              <ul class="remaining-info px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-xl-3 py-2 nw4-bb d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2">
                <li class="d-flex align-items-center gap-2">
                  <PhClock class="ph ph-clock fs-five n3-clr"></PhClock>
                  <span class="n3-clr fw_600">02 Days</span>
                </li>
                <li class="vline-remaing"></li>
                <li class="d-flex align-items-center gap-2">
                  <PhBarbell class="ph ph-barbell fs-five n3-clr"></PhBarbell>
                  <span class="n3-clr fw_600">1200 Remaining</span>
                </li>
              </ul>
              <div class="d-flex px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-8 py-xl-6 py-lg-4 py-3 align-items-center justify-content-between">
                <h3 class="d-flex align-items-center gap-3 n4-clr"><span class="pr">$3.00</span> <span class="fs-six text-uppercase">PER ENTRY</span></h3>
                <NuxtLink to="/contest-details" class="cmn-40 radius-circle s1-bg s1-hover">
                  <span>
                    <PhArrowUpRight class="ph-bold ph-arrow-up-right n0-clr lh"></PhArrowUpRight>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--limited body-->
    </div>
  </section>
</template>

<style scoped></style>
