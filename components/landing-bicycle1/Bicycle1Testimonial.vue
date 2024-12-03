<script setup lang="ts">
import { PhCaretLeft, PhCaretRight, PhQuotes, PhStar, PhStarHalf } from "@phosphor-icons/vue";
import CountUp from "vue-countup-v3";
import customer1 from "/images/banner/customer1.png";
import customer2 from "/images/banner/customer2.png";
import customer4 from "/images/banner/customer4.png";
import clientv51 from "/images/man-global/clientv51.png";
import clientv52 from "/images/man-global/clientv52.png";
import clientv53 from "/images/man-global/clientv53.png";
defineProps<{
  title?: string;
}>();
</script>
<template>
  <section class="testimonial-section overflow-visible pt-120 pb-120">
    <!-- {/* Section Header */} -->
    <div class="container">
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-8 col-md-8 col-sm-9">
          <div class="section__title">
            <SubTitle :text="`${title || 'Bicycle Lottery Triumphs'}`" />
            <div class="display-four testimonial-heading d-block n4-clr">
              {{ title || "Bicycle" }} Lottery
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Success! </span>
              <div class="d-flex flex-wrap align-items-center g-4">
                <ul class="customer-review testi-people-title cmn-style-flex">
                  <li>
                    <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                      <NuxtImg :src="customer1" alt="/img" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                      <NuxtImg :src="customer2" alt="/img" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                      <NuxtImg :src="customer4" alt="/img" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                      <span class="d-grid customer-ratting text-center p-2 p1-bg align-items-center justify-content-center">
                        <span class="d-block fs-eight fw_700 n4-clr"> 10k+ </span>
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
                <span class="d-block ar-talking" data-aos="zoom-in-right" data-aos-duration="1200"> Reviews! </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
          <div class="testimonial-ratting" data-aos="zoom-in-down" data-aos-duration="1600">
            <span class="n4-clr fw_700 mb-xxl-6 mb-xl-4 mb-3"> Trustpilot </span>
            <ul class="ratting d-flex align-items-center gap-1 mb-xxl-3 mb-2">
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
            <h4 class="n2-clr">4.5- <span class="fs-six fw_600">(25,750Reviews)</span></h4>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Section Header */} -->
    <!-- {/* Testimonial wap */} -->
    <div class="container">
      <div class="row g-5 justify-content-between align-items-center">
        <div class="col-lg-5">
          <div class="testimonial-v5-thumb">
            <div class="d-flex align-items-end justify-content-between">
              <div class="thumb2">
                <NuxtImg :src="clientv52" alt="/img" class="radius-circle" />
              </div>
              <div class="thumb1 position-relative">
                <NuxtImg :src="clientv51" alt="/img" class="radius-circle" />
                <div class="quotes d-center n0-bg radius-circle">
                  <PhQuotes weight="bold" class="ph-bold ph-quotes"></PhQuotes>
                </div>
              </div>
            </div>
            <div class="d-grid happy-thumb3 justify-content-center">
              <div class="happy-cbox d-flex align-items-center justify-content-center radius-circle s1-bg">
                <div class="box">
                  <h2 class="counters mb-1 n0-clr d-flex align-items-center">
                    <span>+</span>
                    <span class="odometer" data-odometer-final="100">
                      <count-up :end-val="1000"></count-up>
                    </span>
                    <span>k</span>
                  </h2>
                  <span class="nw1-clr fs18 d-block"> Happy Clients </span>
                </div>
              </div>
              <div class="thumb3">
                <NuxtImg :src="clientv53" alt="/img" class="radius-circle" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 pt-lg-0 pt-sm-5 pt-0">
          <Swiper
            :loop="true"
            :slidesPerView="1"
            :spaceBetween="24"
            :speed="2000"
            :autoplay="false"
            :pagination="{
              el: '.swiper-paginations',
              type: 'fraction',
            }"
            :navigation="{
              nextEl: '.swiper-button-nextteam',
              prevEl: '.swiper-button-prevteam',
            }"
            :modules="[SwiperPagination, SwiperNavigation]"
            :breakpoints="{
              1600: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              992: {
                slidesPerView: 1,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 14,
              },
              576: {
                slidesPerView: 1,
                spaceBetween: 14,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 14,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 14,
              },
            }"
            class="swiper testimonial-uniquewrap"
          >
            <SwiperSlide class="swiper-slide">
              <div class="testi-unique-item">
                <div class="box mb-xxl-10 mb-8">
                  <h3 class="n4-clr mb-xxl-4 mb-xl-3 mb-2">Quick & easy</h3>
                  <p class="fs18 n3-clr">From the moment I purchased my ticket to claiming my prize, journey. The transparency and excitement are unmatched. Highly recommend!</p>
                </div>
                <div class="designation">
                  <span class="fs20 mb-1 fw_700 d-block"> Andrew Russel </span>
                  <span class="fw_600 n2-clr d-block"> United States - March 23, 2024 </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="testi-unique-item">
                <div class="box mb-xxl-10 mb-8">
                  <h3 class="n4-clr mb-xxl-4 mb-xl-3 mb-2">Quick & easy</h3>
                  <p class="fs18 n3-clr">From the moment I purchased my ticket to claiming my prize, journey. The transparency and excitement are unmatched. Highly recommend!</p>
                </div>
                <div class="designation">
                  <span class="fs20 mb-1 fw_700 d-block"> Devid Glow </span>
                  <span class="fw_600 n2-clr d-block"> United States - March 23, 2024 </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="testi-unique-item">
                <div class="box mb-xxl-10 mb-8">
                  <h3 class="n4-clr mb-xxl-4 mb-xl-3 mb-2">Quick & easy</h3>
                  <p class="fs18 n3-clr">From the moment I purchased my ticket to claiming my prize, journey. The transparency and excitement are unmatched. Highly recommend!</p>
                </div>
                <div class="designation">
                  <span class="fs20 mb-1 fw_700 d-block"> Kw Scale </span>
                  <span class="fw_600 n2-clr d-block"> United States - March 23, 2024 </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="testi-unique-item">
                <div class="box mb-xxl-10 mb-8">
                  <h3 class="n4-clr mb-xxl-4 mb-xl-3 mb-2">Quick & easy</h3>
                  <p class="fs18 n3-clr">From the moment I purchased my ticket to claiming my prize, journey. The transparency and excitement are unmatched. Highly recommend!</p>
                </div>
                <div class="designation">
                  <span class="fs20 mb-1 fw_700 d-block"> Jr Paquata </span>
                  <span class="fw_600 n2-clr d-block"> United States - March 23, 2024 </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="mt-xxl-15 mt-xl-8 mt-6 d-flex align-items-center justify-content-between gap-4">
            <div class="swiper-paginations n4-clr"></div>
            <div class="d-flex align-items-center gap-xxl-6 gap-xl-5 gap-3">
              <div class="slider-btn d-inline-flex gap-xxl-5 gap-3">
                <button type="button" class="swiper-button-nextteam cmn-s1-slide cmn-60 act4-border p1-clr radius-circle">
                  <PhCaretLeft weight="light" class="ph-light ph-caret-left act4-clr"></PhCaretLeft>
                </button>
                <button type="button" class="swiper-button-prevteam cmn-s1-slide cmn-60 act4-border p1-clr radius-circle">
                  <PhCaretRight weight="light" class="ph-light ph-caret-right act4-clr"></PhCaretRight>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Testimonial wap */} -->
  </section>
</template>

<style scoped></style>
