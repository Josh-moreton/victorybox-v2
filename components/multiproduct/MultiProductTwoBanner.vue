<script setup lang="ts">
import { PhArrowRight, PhCaretLeft, PhCaretRight, PhStar } from "@phosphor-icons/vue";
import bannerThumbCar1 from "/images/banner/banner-thumb-car1.png";
import customer1 from "/images/banner/customer1.png";
import customer2 from "/images/banner/customer2.png";
import customer3 from "/images/banner/customer3.png";
import customer4 from "/images/banner/customer4.png";
import kewtaArrow from "/images/banner/kewta-arrow.png";
import win from "/images/banner/win.png";
import bannerCycle from "/images/bike/banner-cycle.png";
import blissBike from "/images/bike/bliss-bike.png";

import MultiProductBannerVideo from "./MultiProductBannerVideo.vue";

import CountUp from "vue-countup-v3";
</script>
<template>
  <div class="banner-section-v1 pt-70-fixed n4-bg position-relative overflow-hidden">
    <!-- {/* Banner Content */} -->
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8">
          <div class="banner-content-v1">
            <div class="d-flex mb-sm-3 mb-5 align-items-center gap-xxl-8 gap-lg-6 gap-4 flex-wrap">
              <ul class="entry-win d-flex align-items-center gap-3">
                <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1000">
                  <NuxtLink to="#" class="fs-four p1-clr"> Entry </NuxtLink>
                </li>
                <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1200">
                  <PhArrowRight class="ti ti-arrow-right fs-four p1-clr"></PhArrowRight>
                </li>
                <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1400">
                  <NuxtLink to="#" class="fs-four p1-clr"> Draw </NuxtLink>
                </li>
                <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1600">
                  <PhArrowRight class="ti ti-arrow-right fs-four p1-clr"></PhArrowRight>
                </li>
                <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="2000">
                  <NuxtLink to="#" class="fs-four p1-clr"> Win </NuxtLink>
                </li>
              </ul>
              <NuxtLink to="/contest" class="custom-bigarrow">
                <span class="icon">
                  <svg width="137" height="16" viewBox="0 0 137 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M136.707 8.70712C137.098 8.31659 137.098 7.68343 136.707 7.29291L130.343 0.928944C129.953 0.538419 129.319 0.538419 128.929 0.928943C128.538 1.31947 128.538 1.95263 128.929 2.34316L134.586 8.00001L128.929 13.6569C128.538 14.0474 128.538 14.6806 128.929 15.0711C129.319 15.4616 129.953 15.4616 130.343 15.0711L136.707 8.70712ZM-8.74228e-08 9L136 9.00001L136 7.00001L8.74228e-08 7L-8.74228e-08 9Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </NuxtLink>
            </div>
            <div class="custom-display n0-clr mb-6" data-aos="zoom-in-up" data-aos-duration="1000">
              Could you be our
              <div class="d-xxl-flex d-grid align-items-center justify-content-between winner-span gap-xxl-5 gap-4 flex-xxl-nowrap flex-wrap">
                <span class="wins nw1-clr d-flex align-items-center gap-6" data-aos="zoom-in-down" data-aos-duration="2000">
                  next
                  <span class="wins p1-clr">
                    winner?
                    <svg viewBox="0 0 355 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.92099 12.8063C56.8373 3.14121 205.75 -10.0362 354.071 14.5747" stroke="#AEFE3A" />
                    </svg>
                  </span>
                </span>
                <MultiProductBannerVideo />
              </div>
            </div>
            <p class="nw2-clr bn-pra mb-xxl-10 mb-sm-8 mb-6" data-aos="zoom-out-up" data-aos-duration="1000">
              Now your chance to win a car! Check out the prestige cars you can win in our car prize draws. Will you be our next lucky winner?
            </p>
            <div class="d-flex align-items-center gap-xl-8 gap-3 flex-wrap mb-xxl-20 pb-xl-20 pb-5">
              <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                <span class="kew-text s1-bg n4-clr act3-bg">Participant Now</span>
                <div class="kew-arrow act3-bg">
                  <div class="kt-one">
                    <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                  </div>
                  <div class="kt-two">
                    <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink to="/howtoplay" class="how-cont nw1-clr fw_700" data-aos="zoom-in-left" data-aos-duration="800"> How It’s Works </NuxtLink>
            </div>
            <div class="bn1-odometer d-flex align-items-center gap-xxl-11 gap-xl-8 gap-lg-6 gap-5">
              <div class="odometer__items" data-aos="zoom-in-down" data-aos-duration="1000">
                <div class="cont d-flex align-items-center">
                  <span class="odometer display-four nw1-clr fw_800">
                    <count-up :end-val="1750"></count-up>
                  </span>
                  <span class="plus__icon display-four nw1-clr fw_800">+</span>
                </div>
                <p>Verified Users</p>
              </div>
              <div class="odometer__items" data-aos="zoom-in-up" data-aos-duration="1000">
                <div class="cont d-flex align-items-center">
                  <span class="odometer display-four nw1-clr fw_800">
                    <count-up :end-val="15"></count-up>
                  </span>
                </div>
                <p>Years on the market</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3">
          <div class="banner-content-v1customer">
            <ul class="customer-review cmn-style-flex d-inline-flex act3-border radius100 py-xxl-2 py-2 px-2">
              <li>
                <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                  <NuxtImg :src="customer1" alt="img" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                  <NuxtImg :src="customer2" alt="img" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                  <NuxtImg :src="customer3" alt="img" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                  <NuxtImg :src="customer4" alt="img" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                  <span class="d-grid customer-ratting text-center p-2 p1-bg align-items-center justify-content-center">
                    <PhStar weight="fill" class="ti ti-star-filled n4-clr"></PhStar>
                    <span class="d-block fs-eight fw_700 n4-clr">4.7</span>
                  </span>
                </NuxtLink>
              </li>
            </ul>
            <span class="nw2-clr fs-eight d-block fw_700 text-uppercase mt-xxl-4 mt-3"> <span class="act3-clr fs-five">70k</span> CUSTOMER REVIEW </span>
            <NuxtLink to="/about" class="d-flex arrow-rotate justify-content-end me-5 mt-6">
              <NuxtImg :src="kewtaArrow" alt="img" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Banner Content */} -->
    <NuxtImg :src="win" alt="img" class="shape-win" />
    <div class="banner-oneslider">
      <Swiper
        :loop="true"
        :slidesPerView="1"
        :spaceBetween="24"
        :speed="1000"
        :navigation="{
          nextEl: '.swiper-button-nextteam',
          prevEl: '.swiper-button-prevteam',
        }"
        :modules="[SwiperNavigation, SwiperAutoplay]"
        :autoplay="{
          delay: 1200,
        }"
        class="banner-carslide-wrap swiper mySwiper"
      >
        <SwiperSlide class="swiper-slide">
          <div class="bn-carslide-item">
            <NuxtImg :src="bannerThumbCar1" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <div class="bn-carslide-item">
            <NuxtImg :src="blissBike" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <div class="bn-carslide-item">
            <NuxtImg :src="bannerCycle" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <div class="bn-carslide-item">
            <NuxtImg :src="bannerThumbCar1" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <div class="bn-carslide-item">
            <NuxtImg :src="blissBike" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <div class="bn-carslide-item">
            <NuxtImg :src="bannerCycle" alt="img" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <!-- {/* Slide Click Button */} -->
    <div class="slider-btn d-grid gap-xxl-5 gap-3">
      <button type="button" class="swiper-button-prevteam cmn-60 p1-border p1-clr radius-circle">
        <PhCaretRight weight="light" class="ph-light ph-caret-right"></PhCaretRight>
      </button>
      <button type="button" class="swiper-button-nextteam cmn-60 p1-border p1-clr radius-circle">
        <PhCaretLeft weight="light" class="ph-light ph-caret-left"></PhCaretLeft>
      </button>
    </div>
    <!-- {/* Slide Click Button */} -->

    <!-- {/* Scroll Top */} -->
    <NuxtLink to="#down-scroll" class="scroll-bn1 act3-bg radius100 d-flex justify-content-center align-items-center justify-content-center">
      <span class="d-grid gap-xxl-5 gap-xl-4 gap-3 justify-content-center text-center m-auto">
        <span class="n4-clr fs18 d-block fw_600">Scroll</span>
        <span class="scroll-iconrarea">
          <svg width="16" height="65" viewBox="0 0 16 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.29289 64.7071C7.68341 65.0976 8.31658 65.0976 8.7071 64.7071L15.0711 58.3431C15.4616 57.9526 15.4616 57.3195 15.0711 56.9289C14.6805 56.5384 14.0474 56.5384 13.6569 56.9289L8 62.5858L2.34314 56.9289C1.95262 56.5384 1.31945 56.5384 0.92893 56.9289C0.538405 57.3195 0.538405 57.9526 0.92893 58.3431L7.29289 64.7071ZM7 -4.37121e-08L7 64L9 64L9 4.37121e-08L7 -4.37121e-08Z"
              fill="black"
            />
          </svg>
        </span>
      </span>
    </NuxtLink>
    <!-- {/* Scroll Top */} -->
  </div>
</template>

<style scoped></style>
