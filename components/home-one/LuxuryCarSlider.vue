<script setup lang="ts">
import { PhArrowUpRight, PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import car1 from "/images/luxury/luxury-car1.png";
import car2 from "/images/luxury/luxury-car2.png";
import car3 from "/images/luxury/luxury-car3.png";

const cars = [
  { id: 1, image: car1, name: "Lamborghini" },
  { id: 2, image: car2, name: "Volkswagen" },
  { id: 3, image: car3, name: "Land Rover" },
];
</script>
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <Swiper
          :loop="true"
          :slidesPerView="1"
          :spaceBetween="0"
          :speed="1500"
          :navigation="{
            nextEl: '.luxury-prevteam',
            prevEl: '.luxury-nextteam',
          }"
          :breakpoints="{
            1400: { slidesPerView: 1 },
            992: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            500: { slidesPerView: 1 },
          }"
          :modules="[SwiperNavigation]"
          class="luxury-selectionwrap1 swiper mySwiper"
        >
          {cars.map((item, index) => (
          <SwiperSlide v-for="item in cars" class="swiper-slide" :key="`car-${item.id}`">
            <div class="luxury-car-item1">
              <div class="thumb">
                <NuxtImg :src="item.image" alt="img" />
              </div>
              <div class="cont mt-xxl-15 mt-lg-8 mt-md-7 mt-4 display-three act4-clr text-uppercase text-center">{{ item.name }}</div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
        <div class="d-flex luxury-cusbtn justify-content-center mt-xxl-7 mt-5">
          <NuxtLink to="/contest" class="cmn__collection radius-circle p1-bg d-center position-relative">
            <span class="cmn-cont-box text-center position-relative">
              <span class="icon mb-1">
                <PhArrowUpRight class="ph-bold ph-arrow-up-right fs-three"></PhArrowUpRight>
              </span>
              <span class="d-block n4-clr fw_700"> View Collection </span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div class="click-slideluxry-button">
    <div class="container">
      <div class="slider-btn d-inline-flex justify-content-between w-100 gap-xxl-5 gap-3" data-aos="zoom-in-down" data-aos-duration="1400">
        <button type="button" class="luxury-prevteam d-flex cmn-s1-slide cmn-60 act4-border p1-clr radius-circle">
          <PhCaretLeft :size="24" class="ph-light ph-caret-left act4-clr"></PhCaretLeft>
        </button>
        <button type="button" class="luxury-nextteam d-flex cmn-s1-slide cmn-60 act4-border p1-clr radius-circle">
          <PhCaretRight :size="24" class="ph-light ph-caret-right act4-clr"></PhCaretRight>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
