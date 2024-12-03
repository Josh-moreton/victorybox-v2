<script setup lang="ts">
import { PhArrowRight, PhCaretLeft, PhCaretRight, PhStar, PhStarHalf } from "@phosphor-icons/vue";
import sl1 from "/images/banner/bn8-sl1.png";
import sl2 from "/images/banner/bn8-sl2.png";
import sl3 from "/images/banner/bn8-sl3.png";
import sl4 from "/images/banner/bn8-sl4.png";
import bv7c1 from "/images/banner/bv7c1.png";
import bv7c2 from "/images/banner/bv7c2.png";
import bv7c3 from "/images/banner/bv7c3.png";

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};
</script>
<template>
  <div class="banner-section-v8 pt-70-fixed n4-bg position-relative pb-120 overflow-hidden">
    <!-- {/* Banner Content */} -->
    <div class="banner-v4wraper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="banner-content-v8 pt-xxl-20 pt-12 mt-xl-6 mt-lg-6 mt-5">
              <div class="bn-content-box">
                <div class="d-flex mb-sm-6 mb-6 align-items-center gap-xxl-8 gap-lg-6 gap-4 flex-wrap">
                  <ul class="entry-win d-flex align-items-center gap-3">
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1000">
                      <NuxtLink to="#" class="fs-four p1-clr"> Entry </NuxtLink>
                    </li>
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1200">
                      <PhArrowRight class="ti ti-arrow-right fs-four p1-clr" />
                    </li>
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1400">
                      <NuxtLink to="#" class="fs-four p1-clr"> Draw </NuxtLink>
                    </li>
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1600">
                      <PhArrowRight class="ti ti-arrow-right fs-four p1-clr" />
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
                <div class="display-two position-relative cus-z1 fw_900 text-capitalize n0-clr mb-xxl-5 mb-3">
                  <span class="fw_900 text-capitalize d-block">Be the Next</span>
                  <span class="d-flex text-capitalize align-items-center mb-3 n0-clr gap-3 text-uppercase" data-aos="zoom-in-up" data-aos-duration="2200">
                    <span>Lucky</span>
                    <span class="fw_900 act3-clr d-block position-relative">
                      Winner
                      <span class="rotate-arrow">
                        <svg width="220" height="10" viewBox="0 0 220 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.658448 8.17998C35.372 2.17245 127.819 -6.01826 219.898 9.2792" stroke="#FEC92F" />
                        </svg>
                      </span>
                    </span>
                  </span>
                  <span class="d-flex nw1-clr fw_900 text-capitalize align-items-center gap-3" data-aos="zoom-in-left" data-aos-duration="2400"> with Us </span>
                </div>

                <p class="nw2-clr fs20 max-520 mb-xxl-10 mb-lg-8 mb-5" data-aos="fade-down-right" data-aos-duration="1500">
                  Get ready for a winning experience like no other! Join us in the thrill of anticipation and be the next lucky winner.
                </p>

                <div class="cus-z1 position-relative w-100">
                  <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                    <span class="kew-text n4-clr act3-bg">Participant Now</span>
                    <div class="kew-arrow act3-bg">
                      <div class="kt-one">
                        <PhArrowRight class="ti ti-arrow-right n4-clr" />
                      </div>
                      <div class="kt-two">
                        <PhArrowRight class="ti ti-arrow-right n4-clr" />
                      </div>
                    </div>
                  </NuxtLink>
                </div>

                <div class="review-v8 pt-xxl-20 mt-lg-10 mt-6 d-flex align-items-center">
                  <div class="d-flex align-items-center gap-xxl-10 gap-xl-6 gap-lg-3 gap-3">
                    <svg width="107" height="16" viewBox="0 0 107 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M106.695 8.59379C107.092 8.20983 107.103 7.57675 106.719 7.17978L100.462 0.710647C100.078 0.313668 99.4447 0.303117 99.0478 0.68708C98.6508 1.07104 98.6402 1.70412 99.0242 2.1011L104.586 7.85143L98.8356 13.4132C98.4387 13.7972 98.4281 14.4303 98.8121 14.8273C99.196 15.2242 99.8291 15.2348 100.226 14.8508L106.695 8.59379ZM0.983336 7.12486L105.983 8.87486L106.017 6.87514L1.01666 5.12514L0.983336 7.12486Z"
                        fill="white"
                      />
                    </svg>
                    <span class="display-three fw_800 nw1-clr">9.5</span>
                  </div>
                  <div class="review-star">
                    <ul class="ratting d-flex align-items-center gap-1 mb-xxl-2 mb-1">
                      <li>
                        <PhStar weight="fill" class="ph-fill ph-star fs-five act3-clr" />
                      </li>
                      <li>
                        <PhStar weight="fill" class="ph-fill ph-star fs-five act3-clr" />
                      </li>
                      <li>
                        <PhStar weight="fill" class="ph-fill ph-star fs-five act3-clr" />
                      </li>
                      <li>
                        <PhStar weight="fill" class="ph-fill ph-star fs-five act3-clr" />
                      </li>
                      <li>
                        <PhStarHalf class="ph-fill ph-star-half fs-five act3-clr" />
                      </li>
                    </ul>
                    <span class="nw1-clr d-block">207K Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Banner Content */} -->

    <!-- {/* Scroll Top */} -->
    <NuxtLink to="#scroll-down" class="scroll-bn1 act4-bg radius100 d-flex justify-content-center align-items-center justify-content-center">
      <span class="d-grid gap-xxl-5 gap-xl-4 gap-3 justify-content-center text-center m-auto">
        <span class="n0-clr fs18 d-block fw_600">Scroll</span>
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

    <!-- {/* Thumb Slider Position */} -->
    <div class="banner-v8-slidrposition">
      <div class="banner-v8slidewrap">
        <Swiper :loop="true" :spaceBetween="10" :slidesPerView="1" :onSwiper="setThumbsSwiper" :watchSlidesProgress="true" :allowTouchMove="false" class="swiper mySwiper">
          <SwiperSlide class="swiper-slide">
            <div class="bn8-thumb-big">
              <NuxtImg :src="sl1" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="bn8-thumb-big">
              <NuxtImg :src="sl2" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="bn8-thumb-big">
              <NuxtImg :src="sl3" alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="bn8-thumb-big">
              <NuxtImg :src="sl4" alt="img" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="banner-rightslider-v8small pt-10 position-relative">
          <div class="banner-content-v7customer mb-xxl-20 mb-xl-10 mb-lg-8 mb-md-6 mb-5 d-flex align-items-center gap-xxl-5 gap-xl-3 gap-2">
            <ul class="customer-review cmn-style-flex">
              <li>
                <NuxtLink to="#" class="customer-revew-item act3-bg d-flex align-items-center justify-content-center">
                  <NuxtImg :src="bv7c1" alt="img" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="customer-revew-item act3-bg d-flex align-items-center justify-content-center">
                  <NuxtImg :src="bv7c2" alt="img" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="customer-revew-item act3-bg d-flex align-items-center justify-content-center">
                  <NuxtImg :src="bv7c3" alt="img" />
                </NuxtLink>
              </li>
            </ul>
            <span class="fw_600 text-uppercase">
              <span class="d-block nw1-clr fs20 fw_600">Treasures</span>
              <span class="d-block nw1-clr fs20 fw_600">Every Time</span>
            </span>
          </div>
          <Swiper
            :loop="true"
            :spaceBetween="10"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="[SwiperNavigation, SwiperThumbs]"
            :navigation="{
              nextEl: '.swiper-button-nextteamjk',
              prevEl: '.swiper-button-prevteamjk',
            }"
            class="swiper mySwiper2"
          >
            <SwiperSlide class="swiper-slide">
              <div class="bn8-thumb-inner">
                <NuxtImg :src="sl1" alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="bn8-thumb-inner">
                <NuxtImg :src="sl2" alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="bn8-thumb-inner">
                <NuxtImg :src="sl3" alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="bn8-thumb-inner">
                <NuxtImg :src="sl4" alt="img" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="jk-cont text-center mt-xxl-6 mt-5">
            <span class="fs20 fw_600 nw1-clr d-block mb-xxl-2 mb-0">Jewelry Jackpot</span>
            <NuxtLink to="/contest-details" class="p1-clr"> Try Your Chance </NuxtLink>
          </div>
          <div class="slider-btn d-flex gap-xxl-5 gap-3 justify-content-center mt-xxl-12 mt-xl-9 mt-lg-8 mt-6">
            <button type="button" class="swiper-button-nextteamjk cmn-60 p1-border p1-clr radius-circle">
              <PhCaretLeft class="ph-light ph-caret-left p1-clr fs-four" />
            </button>
            <button type="button" class="swiper-button-prevteamjk cmn-60 p1-border p1-clr radius-circle">
              <PhCaretRight class="ph-light ph-caret-right p1-clr fs-four" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- {/* Thumb Slider Position */} -->
  </div>
</template>

<style scoped></style>
