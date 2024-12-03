<script setup lang="ts">
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import bannerThumbCar2 from "/images/banner/banner-car2.png";
import bannerThumbCar3 from "/images/banner/banner-car3.png";
import bannerThumbCar1 from "/images/banner/banner-thumb-car1.png";


const slides = [
  { src: bannerThumbCar1, alt: "Image 1" },
  { src: bannerThumbCar2, alt: "Image 2" },
  { src: bannerThumbCar3, alt: "Image 3" },
  { src: bannerThumbCar1, alt: "Image 4" },
  { src: bannerThumbCar2, alt: "Image 5" },
  { src: bannerThumbCar3, alt: "Image 6" },
  { src: bannerThumbCar1, alt: "Image 7" },
  { src: bannerThumbCar2, alt: "Image 8" },
  { src: bannerThumbCar3, alt: "Image 9" },
];
</script>
<template>
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
      <SwiperSlide v-for="(slide, index) in slides" :key="`home-one-banner-slide${index}`" class="swiper-slide">
        <div class="bn-carslide-item">
          <NuxtImg :src="slide.src" :alt="slide.alt" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  <!--Slide Click Button -->
  <div class="slider-btn d-grid gap-xxl-5 gap-3">
    <button type="button" class="swiper-button-prevteam cmn-60 p1-border p1-clr radius-circle">
      <PhCaretLeft :size="32" class="ph-light ph-caret-right"></PhCaretLeft>
    </button>
    <button type="button" class="swiper-button-nextteam cmn-60 p1-border p1-clr radius-circle">
      <PhCaretRight :size="32" class="ph-light ph-caret-left"></PhCaretRight>
    </button>
  </div>
  <!--Slide Click Button -->
</template>

<style scoped></style>
