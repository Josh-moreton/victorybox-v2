<script setup lang="ts">
import { PhStar, PhStarHalf } from "@phosphor-icons/vue";
import customer1 from "/images/banner/customer1.png";
import customer2 from "/images/banner/customer2.png";
import customer4 from "/images/banner/customer4.png";
import w1 from "/images/luxury/w1.png";
import w2 from "/images/luxury/w2.png";
import w6 from "/images/luxury/w6.png";
import w7 from "/images/luxury/w7.png";
import t5 from "/images/man-global/t5.png";
import t6 from "/images/man-global/t6.png";
import t7 from "/images/man-global/t7.png";
import t8 from "/images/man-global/t8.png";
import t9 from "/images/man-global/t9.png";
</script>
<template>
  <section class="testimonial-sectionv8 overflow-visible badge-before-thumb pb-120">
    <!-- {/* Section Header */} -->
    <div class="container pt-120">
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-9">
          <div class="section__title">
            <SubTitle text="Jewelry Lottery Triumphs" />
            <div class="display-four testimonial-heading d-block n4-clr">
              <span class="d-flex gap-1 flex-wrap">
                Jewelry Lottery
                <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Success! </span>
              </span>
              <div class="d-flex flex-wrap align-items-center g-4">
                <ul class="customer-review testi-people-title cmn-style-flex">
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
                      <NuxtImg :src="customer4" alt="img" />
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
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
            <h4 class="n2-clr">4.5- <span class="fs-six fw_600">(25,750Reviews)</span></h4>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Section Header */} -->

    <!-- {/* Testimonial wap */} -->
    <Swiper
      :loop="true"
      :slidesPerView="1"
      :spaceBetween="24"
      :speed="4500"
      :modules="[SwiperAutoplay]"
      :centeredSlides="true"
      :autoplay="{ delay: 100 }"
      :pagination="{
        el: '.swiper-pagination-testi',
        clickable: true,
      }"
      :breakpoints="{
        1600: {
          slidesPerView: 2.9,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 2.5,
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
      class="swiper testimonial-wrapv8"
    >
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv8 nw4-border overflow-hidden">
          <div class="total-content pt-4 pt-md-0 py-xx-3 py2 ps-xxl-8 ps-xl-4 ps-4">
            <ul class="ratting mb-xxl-3 m-xl-2 mb-2 d-flex align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
            <p class="fs18 pra mb-xxl-7 mb-xl-6 mb-lg-4 mb-md-3 mb-3">
              I never thought winning a stunning diamond could this thrilling! The Jewelry Lottery website made my dreams come true. Thank you for this incredible experience.
            </p>
            <div class="conts d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
              <div class="adrew">
                <NuxtImg :src="t5" alt="img" />
              </div>
              <div class="designation-box">
                <span class="fs20 mb-0 fw_700 n4-clr d-block"> Kristin Watson </span>
                <span class="fw_600 n2-clr"> France </span>
              </div>
            </div>
          </div>
          <div class="testi-ring s1-bg p-3 d-center">
            <div class="ring">
              <NuxtImg :src="w6" alt="img" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv8 nw4-border overflow-hidden">
          <div class="total-content pt-4 pt-md-0 py-xx-3 py2 ps-xxl-8 ps-xl-4 ps-4">
            <ul class="ratting mb-xxl-3 m-xl-2 mb-2 d-flex align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
            <p class="fs18 pra mb-xxl-7 mb-xl-6 mb-lg-4 mb-md-3 mb-3">
              I never thought winning a stunning diamond could this thrilling! The Jewelry Lottery website made my dreams come true. Thank you for this incredible experience.
            </p>
            <div class="conts d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
              <div class="adrew">
                <NuxtImg :src="t6" alt="img" />
              </div>
              <div class="designation-box">
                <span class="fs20 mb-0 fw_700 n4-clr d-block"> Theresa Webb </span>
                <span class="fw_600 n2-clr"> China </span>
              </div>
            </div>
          </div>
          <div class="testi-ring s1-bg p-3 d-center">
            <div class="ring">
              <NuxtImg :src="w2" alt="img" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv8 nw4-border overflow-hidden">
          <div class="total-content pt-4 pt-md-0 py-xx-3 py2 ps-xxl-8 ps-xl-4 ps-4">
            <ul class="ratting mb-xxl-3 m-xl-2 mb-2 d-flex align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
            <p class="fs18 pra mb-xxl-7 mb-xl-6 mb-lg-4 mb-md-3 mb-3">
              I never thought winning a stunning diamond could this thrilling! The Jewelry Lottery website made my dreams come true. Thank you for this incredible experience.
            </p>
            <div class="conts d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
              <div class="adrew">
                <NuxtImg :src="t7" alt="img" />
              </div>
              <div class="designation-box">
                <span class="fs20 mb-0 fw_700 n4-clr d-block"> Leslie Alexander </span>
                <span class="fw_600 n2-clr"> India </span>
              </div>
            </div>
          </div>
          <div class="testi-ring s1-bg p-3 d-center">
            <div class="ring">
              <NuxtImg :src="w1" alt="img" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv8 nw4-border overflow-hidden">
          <div class="total-content pt-4 pt-md-0 py-xx-3 py2 ps-xxl-8 ps-xl-4 ps-4">
            <ul class="ratting mb-xxl-3 m-xl-2 mb-2 d-flex align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
            <p class="fs18 pra mb-xxl-7 mb-xl-6 mb-lg-4 mb-md-3 mb-3">
              I never thought winning a stunning diamond could this thrilling! The Jewelry Lottery website made my dreams come true. Thank you for this incredible experience.
            </p>
            <div class="conts d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
              <div class="adrew">
                <NuxtImg :src="t8" alt="img" />
              </div>
              <div class="designation-box">
                <span class="fs20 mb-0 fw_700 n4-clr d-block"> Floyd Miles </span>
                <span class="fw_600 n2-clr"> UK </span>
              </div>
            </div>
          </div>
          <div class="testi-ring s1-bg p-3 d-center">
            <div class="ring">
              <NuxtImg :src="w2" alt="img" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv8 nw4-border overflow-hidden">
          <div class="total-content pt-4 pt-md-0 py-xx-3 py2 ps-xxl-8 ps-xl-4 ps-4">
            <ul class="ratting mb-xxl-3 m-xl-2 mb-2 d-flex align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
            <p class="fs18 pra mb-xxl-7 mb-xl-6 mb-lg-4 mb-md-3 mb-3">
              I never thought winning a stunning diamond could this thrilling! The Jewelry Lottery website made my dreams come true. Thank you for this incredible experience.
            </p>
            <div class="conts d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
              <div class="adrew">
                <NuxtImg :src="t9" alt="img" />
              </div>
              <div class="designation-box">
                <span class="fs20 mb-0 fw_700 n4-clr d-block"> Andrew Russel </span>
                <span class="fw_600 n2-clr"> Russia </span>
              </div>
            </div>
          </div>
          <div class="testi-ring s1-bg p-3 d-center">
            <div class="ring">
              <NuxtImg :src="w7" alt="img" />
            </div>
          </div>
        </div>
      </SwiperSlide>

      <div class="container">
        <div class="swiper-pagination-testi text-start mt-xxl-13 mt-xl-8 mt-lg-6 mt-4"></div>
      </div>
    </Swiper>
    <!-- {/* Testimonial wap */} -->
  </section>
</template>

<style scoped></style>
