<script setup lang="ts">
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import car2 from "/images/banner/banner-car3.png";
import car1 from "/images/banner/banner-thumb-car1.png";
</script>

<template>
  <div class="contest-carslide-section position-relative">
    <div class="container">
      <Swiper
        :modules="[SwiperNavigation]"
        :loop="true"
        :slidesPerView="1"
        :spaceBetween="0"
        :speed="1500"
        :navigation="{
          nextEl: '.luxury-prevteam',
          prevEl: '.luxury-nextteam',
        }"
        :breakpoints="{
          1400: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
        }"
        class="contest-details-carslidewrap position-relative biggest-winner-sldewrap s1-bg swiper py-xxl-5 py-lg-6 py-7 px-2"
      >
        <SwiperSlide class="swiper-slide">
          <div class="cons-decar-items">
            <NuxtImg :src="car1" alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <div class="cons-decar-items">
            <NuxtImg :src="car2" alt="img" />
          </div>
        </SwiperSlide>

        <div class="click-slideluxry-button">
          <div class="container">
            <div class="slider-btn d-inline-flex justify-content-between w-100 gap-xxl-5 gap-3" data-aos="zoom-in-down" data-aos-duration="1400">
              <button type="button" class="luxury-prevteam cmn-s1-slide cmn-48 act4-border p1-clr radius-circle">
                <PhCaretLeft weight="light" class="ph-light ph-caret-left act4-clr"></PhCaretLeft>
              </button>
              <button type="button" class="luxury-nextteam cmn-s1-slide cmn-48 act4-border p1-clr radius-circle">
                <PhCaretRight weight="light" class="ph-light ph-caret-right act4-clr"></PhCaretRight>
              </button>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<style scoped></style>
