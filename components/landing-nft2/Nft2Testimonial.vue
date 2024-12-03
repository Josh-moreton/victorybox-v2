<script setup lang="ts">
import { PhQuotes, PhStar, PhStarHalf } from "@phosphor-icons/vue";
import customer1 from "/images/banner/customer1.png";
import customer2 from "/images/banner/customer2.png";
import customer4 from "/images/banner/customer4.png";
import test1 from "/images/testimonial/testv11-1.png";
import test2 from "/images/testimonial/testv11-2.png";
import test3 from "/images/testimonial/testv11-3.png";
import test4 from "/images/testimonial/testv11-4.png";
import test5 from "/images/testimonial/testv11-5.png";
import test6 from "/images/testimonial/testv11-6.png";
</script>
<template>
  <section class="testimonial-sectionv8 overflow-visible testimonial-v1-before pt-120 pb-120">
    <!-- {/* Section Header */} -->
    <div class="container">
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-7 col-md-8 col-sm-9">
          <div class="section__title">
            <SubTitle text="NFT Triumphs" />
            <div class="display-four testimonial-heading d-block n4-clr">
              <span class="d-flex gap-1 flex-wrap">
                NFT Lottery
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
                        <span class="d-block fs-eight fw_700 n4-clr">10k+</span>
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
            <span class="n4-clr fw_700 mb-xxl-6 mb-xl-4 mb-3">Trustpilot</span>
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
      :centeredSlides="true"
      :autoplay="{ delay: 100 }"
      :pagination="{
        el: '.swiper-pagination-testi',
        clickable: true,
      }"
      :breakpoints="{
        1600: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1399: {
          slidesPerView: 4,
          spaceBetween: 14,
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
      class="swiper testimonial-wrapv11"
    >
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item11 nw4-border radius24">
          <div class="thumb position-relative">
            <NuxtImg :src="test1" alt="img" class="radius24" />
            <span class="quote-cmn rot160 d-center s1-bg radius-circle">
              <PhQuotes weight="light" class="ph-light ph-quotes act4-clr" />
            </span>
            <span class="rat-star d-inline-flex align-items-center gap-2 p1-bg py-2 px-4 radius100">
              <PhStar weight="fill" class="ph-fill ph-star fs20 n4-clr" />
              <span class="fs18 fw_600 n4-clr">5/5</span>
            </span>
          </div>
          <div class="content p-xxl-6 p-xl-4 p-4">
            <p class="mb-xxl-7 mb-xl-6 mb-lg-4 mb-md-3 mb-3 n3-clr">
              Participating in the real estate lottery on was a game changer for me. Winning my dream home was an experience beyond words. The road to joy starts here
            </p>
            <div class="conts d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
              <div class="designation-box">
                <span class="fs20 mb-0 fw_700 n4-clr d-block">Ralph Edwards</span>
                <span class="fw_600 n3-clr">United States - March 23, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item11 nw4-border radius24">
          <div class="thumb position-relative">
            <NuxtImg :src="test2" alt="img" class="radius24" />
            <span class="quote-cmn rot160 d-center s1-bg radius-circle">
              <PhQuotes weight="light" class="ph-light ph-quotes act4-clr" />
            </span>
            <span class="rat-star d-inline-flex align-items-center gap-2 p1-bg py-2 px-4 radius100">
              <PhStar weight="fill" class="ph-fill ph-star fs20 n4-clr" />
              <span class="fs18 fw_600 n4-clr">5/5</span>
            </span>
          </div>
          <div class="content p-xxl-6 p-xl-4 p-4">
            <p class="mb-xxl-7 mb-xl-6 mb-lg-4 mb-md-3 mb-3 n3-clr">
              Participating in the real estate lottery on was a game changer for me. Winning my dream home was an experience beyond words. The road to joy starts here
            </p>
            <div class="conts d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
              <div class="designation-box">
                <span class="fs20 mb-0 fw_700 n4-clr d-block">Dianne Russell</span>
                <span class="fw_600 n3-clr">United States - March 23, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item11 nw4-border radius24">
          <div class="thumb position-relative">
            <NuxtImg :src="test3" alt="img" class="radius24" />
            <span class="quote-cmn rot160 d-center s1-bg radius-circle">
              <PhQuotes weight="light" class="ph-light ph-quotes act4-clr" />
            </span>
            <span class="rat-star d-inline-flex align-items-center gap-2 p1-bg py-2 px-4 radius100">
              <PhStar weight="fill" class="ph-fill ph-star fs20 n4-clr" />
              <span class="fs18 fw_600 n4-clr">5/5</span>
            </span>
          </div>
          <div class="content p-xxl-6 p-xl-4 p-4">
            <p class="mb-xxl-7 mb-xl-6 mb-lg-4 mb-md-3 mb-3 n3-clr">
              Participating in the real estate lottery on was a game changer for me. Winning my dream home was an experience beyond words. The road to joy starts here
            </p>
            <div class="conts d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
              <div class="designation-box">
                <span class="fs20 mb-0 fw_700 n4-clr d-block">Eleanor Pena</span>
                <span class="fw_600 n3-clr">United States - March 23, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item11 nw4-border radius24">
          <div class="thumb position-relative">
            <NuxtImg :src="test4" alt="img" class="radius24" />
            <span class="quote-cmn rot160 d-center s1-bg radius-circle">
              <PhQuotes weight="light" class="ph-light ph-quotes act4-clr" />
            </span>
            <span class="rat-star d-inline-flex align-items-center gap-2 p1-bg py-2 px-4 radius100">
              <PhStar weight="fill" class="ph-fill ph-star fs20 n4-clr" />
              <span class="fs18 fw_600 n4-clr">5/5</span>
            </span>
          </div>
          <div class="content p-xxl-6 p-xl-4 p-4">
            <p class="mb-xxl-7 mb-xl-6 mb-lg-4 mb-md-3 mb-3 n3-clr">
              Participating in the real estate lottery on was a game changer for me. Winning my dream home was an experience beyond words. The road to joy starts here
            </p>
            <div class="conts d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
              <div class="designation-box">
                <span class="fs20 mb-0 fw_700 n4-clr d-block">Arlene McCoy</span>
                <span class="fw_600 n3-clr">United States - March 23, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item11 nw4-border radius24">
          <div class="thumb position-relative">
            <NuxtImg :src="test5" alt="img" class="radius24" />
            <span class="quote-cmn rot160 d-center s1-bg radius-circle">
              <PhQuotes weight="light" class="ph-light ph-quotes act4-clr" />
            </span>
            <span class="rat-star d-inline-flex align-items-center gap-2 p1-bg py-2 px-4 radius100">
              <PhStar weight="fill" class="ph-fill ph-star fs20 n4-clr" />
              <span class="fs18 fw_600 n4-clr">5/5</span>
            </span>
          </div>
          <div class="content p-xxl-6 p-xl-4 p-4">
            <p class="mb-xxl-7 mb-xl-6 mb-lg-4 mb-md-3 mb-3 n3-clr">
              Participating in the real estate lottery on was a game changer for me. Winning my dream home was an experience beyond words. The road to joy starts here
            </p>
            <div class="conts d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
              <div class="designation-box">
                <span class="fs20 mb-0 fw_700 n4-clr d-block">Brooklyn Simmons</span>
                <span class="fw_600 n3-clr">United States - March 23, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item11 nw4-border radius24">
          <div class="thumb position-relative">
            <NuxtImg :src="test6" alt="img" class="radius24" />
            <span class="quote-cmn rot160 d-center s1-bg radius-circle">
              <PhQuotes weight="light" class="ph-light ph-quotes act4-clr" />
            </span>
            <span class="rat-star d-inline-flex align-items-center gap-2 p1-bg py-2 px-4 radius100">
              <PhStar weight="fill" class="ph-fill ph-star fs20 n4-clr" />
              <span class="fs18 fw_600 n4-clr">5/5</span>
            </span>
          </div>
          <div class="content p-xxl-6 p-xl-4 p-4">
            <p class="mb-xxl-7 mb-xl-6 mb-lg-4 mb-md-3 mb-3 n3-clr">
              Participating in the real estate lottery on was a game changer for me. Winning my dream home was an experience beyond words. The road to joy starts here
            </p>
            <div class="conts d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
              <div class="designation-box">
                <span class="fs20 mb-0 fw_700 n4-clr d-block">Arlene McCoy</span>
                <span class="fw_600 n3-clr">United States - March 23, 2024</span>
              </div>
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
