<script setup lang="ts">
import { PhArrowRight, PhCaretLeft, PhCaretRight, PhStar } from "@phosphor-icons/vue";
import bannerThumbCar2 from "/images/banner/banner-car2.png";
import bannerThumbCar3 from "/images/banner/banner-car3.png";
import bannerThumbCar1 from "/images/banner/banner-thumb-car1.png";
import bannerImgV2Text1 from "/images/banner/banner-v2-text1.png";
import bannerImgV2Text2 from "/images/banner/banner-v2-text2.png";
import bnV2Avatar from "/images/banner/bn-v2-avatar.png";
import customer1 from "/images/banner/customer1.png";
import customer2 from "/images/banner/customer2.png";
import customer3 from "/images/banner/customer3.png";
import customer4 from "/images/banner/customer4.png";
import rounding from "/images/banner/rounding.png";
import shapeCares from "/images/banner/shape-cars.png";
import win from "/images/banner/win.png";
</script>
<template>
  <div class="banner-section-v2 pt-70-fixed n4-bg position-relative overflow-hidden">
    <!--Banner Content -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="banner-content-v2 pt-xxl-20 pt-12 pb-20 mt-6">
            <div class="bn-content-box">
              <div class="display-two n0-clr mb-xxl-10 mb-lg-8 mb-5">
                <span class="d-flex align-items-center mb-3 n0-clr gap-3 justify-content-center text-uppercase" data-aos="zoom-in-up" data-aos-duration="2200">
                  <span class="fw_900 d-block">COULD YOU</span>
                  <NuxtImg :src="bannerImgV2Text2" alt="img" class="bn-v2textcar1" />
                  <span class="fw_900 d-block">Be Our</span>
                </span>
                <span class="d-flex justify-content-center align-items-center gap-3" data-aos="zoom-in-left" data-aos-duration="2400">
                  <NuxtImg :src="bannerImgV2Text1" alt="img" class="bn-v2textcar2" />
                  NEXT WINNERS?
                </span>
              </div>
              <div class="d-flex flex-wrap flex-md-nowrap mb-xxl-8 mb-8 align-items-center justify-content-center gap-xl-8 gap-3 flex-wrap w-100">
                <NuxtLink to="/contact" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                  <span class="kew-text n4-clr p1-bg">Participant Now</span>
                  <div class="kew-arrow p1-bg">
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
                      <NuxtImg :src="bannerThumbCar2" alt="img" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div class="bn-carslide-item">
                      <NuxtImg :src="bannerThumbCar3" alt="img" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div class="bn-v2cutomer">
                <ul class="customer-review cmn-style-flex mb-3">
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
                <span class="n0-clr fs20 fw_700 d-block">CUSTOMER REVIEW</span>
              </div>
              <div class="employed-count text-end">
                <NuxtImg :src="bnV2Avatar" alt="img" class="mb-xxl-6 mb-3" />
                <p class="mb-2">Crop Employed worldwide</p>
                <div class="d-flex align-items-center display-three n0-clr justify-content-lg-end">
                  <span class="fw_800"> 7K<span class="plus">+</span> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Banner Content -->
    <NuxtImg :src="win" alt="img" class="shape-win" />
    <NuxtImg :src="shapeCares" alt="img" class="bn-v2-carshape" />
    <NuxtImg :src="rounding" alt="img" class="bn-v2-rounging" />

    <!--Slide Click Button -->
    <div class="slider-btn d-flex gap-xxl-5 gap-3">
      <button type="button" class="swiper-button-prevteam cmn-60 p1-border p1-clr radius-circle">
        <PhCaretLeft weight="light" class="ph-light ph-caret-left"></PhCaretLeft>
      </button>
      <button type="button" class="swiper-button-nextteam cmn-60 p1-border p1-clr radius-circle">
        <PhCaretRight weight="light" class="ph-light ph-caret-right"></PhCaretRight>
      </button>
    </div>
    <!--Slide Click Button -->
  </div>
</template>

<style scoped></style>
