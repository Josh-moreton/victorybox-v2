<script setup lang="ts">
import b4 from "/images/bike/b4.png";
import bc6 from "/images/bike/bc6.png";
import icon from "/images/global/section-icon.png";
import t1 from "/images/man-global/t1.png";
import t2 from "/images/man-global/t2.png";
import t6 from "/images/man-global/t6.png";
import test3 from "/images/testimonial/tes3.png";

import { PhArrowRight, PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
</script>
<template>
  <section class="unique-winner pt-120 pb-120">
    <div class="container-fluid p-2">
      <div class="row g-xl-4 g-3 align-items-center justify-content-xl-between justify-content-center">
        <div class="col-xl-5 col-lg-5">
          <div class="section__title meet-main-title text-xl-start text-center mb-xl-0 mb-lg-12 mb-9">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap align-items-center justify-content-xl-start justify-content-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="icon" alt="img" />
              <h5 class="s1-clr fw_700">People In Illinois Are</h5>
            </div>
            <span class="display-four d-block n4-clr mb-xxl-10 mb-xl-7 mb-sm-5 mb-4">
              Meet Our
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Previous </span>
              <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Winners </span>
            </span>
            <NuxtLink to="/contest-details" class="kewta-btn d-inline-flex align-items-center">
              <span class="kew-text act3-bg n4-clr">View All Winners</span>
              <div class="kew-arrow act3-bg n4-clr">
                <div class="kt-one">
                  <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                </div>
                <div class="kt-two">
                  <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="col-xl-7">
          <Swiper
            :loop="true"
            :slidesPerView="1"
            :spaceBetween="24"
            :speed="1500"
            :modules="[SwiperNavigation, SwiperPagination]"
            :navigation="{
              nextEl: '.swiper-button-prevteam',
              prevEl: '.swiper-button-nextteam',
            }"
            :pagination="{
              el: '.swiper-paginationnew',
              clickable: true,
            }"
            :breakpoints="{
              1400: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 14,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 14,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 14,
              },
            }"
            class="lottery-service-wrapnew swiper"
          >
            <SwiperSlide class="swiper-slide">
              <div class="meet-previous-item" data-aos="zoom-in-down" data-aos-duration="1200">
                <div class="thumb-man">
                  <NuxtImg :src="t1" alt="img" class="mimg" />
                  <div class="man-bike">
                    <NuxtImg :src="b4" alt="img" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="meet-previous-item" data-aos="zoom-in-down" data-aos-duration="1200">
                <div class="thumb-man">
                  <NuxtImg :src="t2" alt="img" class="mimg" />
                  <div class="man-bike">
                    <NuxtImg :src="test3" alt="img" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="meet-previous-item">
                <div class="thumb-man">
                  <NuxtImg :src="t6" alt="img" class="mimg" />
                  <div class="man-bike">
                    <NuxtImg :src="bc6" alt="img" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="meet-previous-item" data-aos="zoom-in-down" data-aos-duration="1200">
                <div class="thumb-man">
                  <NuxtImg :src="t1" alt="img" class="mimg" />
                  <div class="man-bike">
                    <NuxtImg :src="b4" alt="img" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="meet-previous-item" data-aos="zoom-in-down" data-aos-duration="1200">
                <div class="thumb-man">
                  <NuxtImg :src="t2" alt="img" class="mimg" />
                  <div class="man-bike">
                    <NuxtImg :src="test3" alt="img" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="meet-previous-item">
                <div class="thumb-man">
                  <NuxtImg :src="t6" alt="img" class="mimg" />
                  <div class="man-bike">
                    <NuxtImg :src="bc6" alt="img" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="container">
            <div class="mt-xxl-15 mt-xl-8 mt-6 d-flex align-items-center gap-xxl-6 gap-xl-5 gap-3">
              <div class="slider-btn d-inline-flex gap-xxl-5 gap-3">
                <button type="button" class="swiper-button-nextteam cmn-s1-slide cmn-60 act4-border p1-clr radius-circle">
                  <PhCaretLeft weight="light" class="ph-light ph-caret-left act4-clr"></PhCaretLeft>
                </button>
                <button type="button" class="swiper-button-prevteam cmn-s1-slide cmn-60 act4-border p1-clr radius-circle">
                  <PhCaretRight weight="light" class="ph-light ph-caret-right act4-clr"></PhCaretRight>
                </button>
              </div>
              <div class="swiper-paginationnew d-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
