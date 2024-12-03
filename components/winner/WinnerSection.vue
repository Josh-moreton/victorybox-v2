"use client";
<script setup lang="ts">
import { PhArrowRight, PhCaretLeft, PhCaretRight, PhStar, PhStarHalf } from "@phosphor-icons/vue";
import customer1 from "/images/banner/customer1.png";
import customer2 from "/images/banner/customer2.png";
import customer3 from "/images/banner/customer3.png";
import customer4 from "/images/banner/customer4.png";
import carTicket from "/images/lottery/car-ticket.png";
import winnerMCar2 from "/images/lottery/winner-mcar2.png";
import winnerMCar3 from "/images/lottery/winner-mcar3.png";
import winnerMCar4 from "/images/lottery/winner-mcar4.png";
import headBadge from "/images/luxury/head-badge.png";
import winnerBadgeMan from "/images/man-global/winner-badge-man.png";
import m1 from "/images/man-global/winner-m1.png";
import m2 from "/images/man-global/winner-m2.png";
import m3 from "/images/man-global/winner-m3.png";
import mm4 from "/images/man-global/winner-mm4.png";
</script>
<template>
  <section class="winners-section winner-custom-space pt-120 pb-120 n0-bg">
    <div class="container">
      <div class="row g-6">
        <div class="col-lg-8">
          <div class="row g-6 justify-content-center">
            <div class="col-lg-12 col-md-6 col-sm-9">
              <div class="winner-main-items border radius12 px-xxl-3 px-2 py-xl-3 py-2">
                <div class="thumb-basket position-relative d-center">
                  <NuxtImg :src="carTicket" alt="img" />
                </div>
                <div class="content">
                  <div class="border-bottom pb-xxl-5 pb-3">
                    <h4 class="n4-clr mb-xxl-3 mb-2">The Breeze Zodiac IX</h4>
                    <span class="act4-clr fw_600 mb-2 d-block">Draw took place on</span>
                    <span class="fw_600 n4-clr">Saturday April 27.2024</span>
                  </div>
                  <div class="pt-xxl-5 pt-3">
                    <span class="fs20 fw_700 n4-clr mb-xxl-3 mb-3">Winning Number:</span>
                    <div class="d-flex align-items-center gap-sm-2 gap-1 justify-content-lg-start justify-content-center">
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">12</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">14</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">23</button>

                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">11</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">88</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">87</button>
                    </div>
                  </div>
                </div>
                <div class="win-man text-center m-lg-0 m-auto">
                  <div class="win-thumbs mb-xxl-3 mb-2">
                    <NuxtImg :src="m1" alt="img" />
                  </div>
                  <span class="n4-clr mb-1 d-block fw_700 fs20">Dianne Russell</span>
                  <span class="fw_600 n4-clr">China</span>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-6 col-sm-9">
              <div class="winner-main-items border radius12 px-xxl-3 px-2 py-xl-3 py-2">
                <div class="thumb-basket position-relative d-center">
                  <NuxtImg :src="winnerMCar2" alt="img" />
                </div>
                <div class="content">
                  <div class="border-bottom pb-xxl-5 pb-3">
                    <h4 class="n4-clr mb-xxl-3 mb-2">Porsche 917 Carrera</h4>
                    <span class="act4-clr fw_600 mb-2 d-block">Draw took place on</span>
                    <span class="fw_600 n4-clr">Saturday April 27.2024</span>
                  </div>
                  <div class="pt-xxl-5 pt-3">
                    <span class="fs20 fw_700 n4-clr mb-xxl-3 mb-3">Winning Number:</span>
                    <div class="d-flex align-items-center gap-sm-2 gap-1 justify-content-lg-start justify-content-center">
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">12</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">14</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">23</button>

                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">11</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">88</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">87</button>
                    </div>
                  </div>
                </div>
                <div class="win-man text-center m-lg-0 m-auto">
                  <div class="win-thumbs mb-xxl-3 mb-2">
                    <NuxtImg :src="m2" alt="img" />
                  </div>
                  <span class="n4-clr mb-1 d-block fw_700 fs20">Bessie Cooper</span>
                  <span class="fw_600 n4-clr">France</span>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-6 col-sm-9">
              <div class="winner-main-items border radius12 px-xxl-3 px-2 py-xl-3 py-2">
                <div class="thumb-basket position-relative d-center">
                  <NuxtImg :src="winnerMCar3" alt="img" />
                </div>
                <div class="content">
                  <div class="border-bottom pb-xxl-5 pb-3">
                    <h4 class="n4-clr mb-xxl-3 mb-2">Chiptuning Von ABT</h4>
                    <span class="act4-clr fw_600 mb-2 d-block">Draw took place on</span>
                    <span class="fw_600 n4-clr">Saturday April 27.2024</span>
                  </div>
                  <div class="pt-xxl-5 pt-3">
                    <span class="fs20 fw_700 n4-clr mb-xxl-3 mb-3">Winning Number:</span>
                    <div class="d-flex align-items-center gap-sm-2 gap-1 justify-content-lg-start justify-content-center">
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">12</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">14</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">23</button>

                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">11</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">88</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">87</button>
                    </div>
                  </div>
                </div>
                <div class="win-man text-center m-lg-0 m-auto">
                  <div class="win-thumbs mb-xxl-3 mb-2">
                    <NuxtImg :src="m3" alt="img" />
                  </div>
                  <span class="n4-clr mb-1 d-block fw_700 fs20">Ralph Edwards</span>
                  <span class="fw_600 n4-clr">USA</span>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-6 col-sm-9">
              <div class="winner-main-items border radius12 px-xxl-3 px-2 py-xl-3 py-2">
                <div class="thumb-basket position-relative d-center">
                  <NuxtImg :src="winnerMCar4" alt="img" />
                </div>
                <div class="content">
                  <div class="border-bottom pb-xxl-5 pb-3">
                    <h4 class="n4-clr mb-xxl-3 mb-2">Porsche 917 Carrera</h4>
                    <span class="act4-clr fw_600 mb-2 d-block">Draw took place on</span>
                    <span class="fw_600 n4-clr">Saturday April 27.2024</span>
                  </div>
                  <div class="pt-xxl-5 pt-3">
                    <span class="fs20 fw_700 n4-clr mb-xxl-3 mb-3">Winning Number:</span>
                    <div class="d-flex align-items-center gap-sm-2 gap-1 justify-content-lg-start justify-content-center">
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">12</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">14</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">23</button>

                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">11</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">88</button>
                      <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">87</button>
                    </div>
                  </div>
                </div>
                <div class="win-man text-center m-lg-0 m-auto">
                  <div class="win-thumbs mb-xxl-3 mb-2">
                    <NuxtImg :src="mm4" alt="img" />
                  </div>
                  <span class="n4-clr mb-1 d-block fw_700 fs20">Bessie Cooper</span>
                  <span class="fw_600 n4-clr">France</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-xxl-15 mt-xl-10 mt-8">
            <NuxtLink to="/contact" class="kewta-btn d-inline-flex align-items-center">
              <span class="kew-text p1-bg p1-border n4-clr">Read More</span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row g-6 justify-content-center">
            <div class="col-lg-12 col-md-6 col-sm-9">
              <div class="biggest-winnerwrap-box text-center py-xxl-15 py-xl-10 py-sm-8 py-6 px-xxl-6 px-xl-5 px-2 border radius24">
                <h3 class="fw_700 h4-clr mb-xxl-10 mb-xl-9 mb-8">Biggest Winner</h3>
                <Swiper
                  :loop="true"
                  :slidesPerView="1"
                  :spaceBetween="0"
                  :speed="1500"
                  :modules="[SwiperNavigation]"
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
                  class="biggest-winner-sldewrap swiper position-relative"
                >
                  <SwiperSlide class="swiper-slide">
                    <div class="biggest-winner-slide-items">
                      <div class="thumb position-relative m-auto">
                        <NuxtImg :src="winnerBadgeMan" alt="img" />
                        <NuxtImg :src="headBadge" alt="img" class="head-badge" />
                      </div>
                      <div class="designation text-center mb-xxl-8 mb-xl-6 mb-5">
                        <div class="car mb-xxl-5 mb-3 m-auto act3-bg radius-circle d-center">
                          <NuxtImg :src="carTicket" alt="img" />
                        </div>
                        <span class="fs20 fw_700 mb-1 d-block n4-clr">Dianne Russell</span>
                        <span class="fw_600 n2-clr">China</span>
                      </div>
                      <span class="fs20 fw_700 n2-clr mb-xxl-4 mb-4">Winning Number:</span>
                      <div class="mb-xxl-5 mb-4 d-flex justify-content-center align-items-center gap-sm-2 gap-1">
                        <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">12</button>
                        <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">14</button>
                        <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">23</button>

                        <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">11</button>
                        <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">88</button>
                        <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">87</button>
                      </div>
                      <span class="fs20 fw_600 n2-clr">Saturday April 27.2024</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div class="biggest-winner-slide-items">
                      <div class="thumb position-relative m-auto">
                        <NuxtImg :src="winnerBadgeMan" alt="img" />
                        <NuxtImg :src="headBadge" alt="img" class="head-badge" />
                      </div>
                      <div class="designation text-center mb-xxl-8 mb-xl-6 mb-5">
                        <div class="car mb-xxl-5 mb-3 m-auto act3-bg radius-circle d-center">
                          <NuxtImg :src="carTicket" alt="img" />
                        </div>
                        <span class="fs20 fw_700 mb-1 d-block n4-clr">Dianne Russell</span>
                        <span class="fw_600 n2-clr">China</span>
                      </div>
                      <span class="fs20 fw_700 n2-clr mb-xxl-4 mb-4">Winning Number:</span>
                      <div class="mb-xxl-5 mb-4 d-flex justify-content-center align-items-center gap-sm-2 gap-1">
                        <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">12</button>
                        <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">14</button>
                        <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">23</button>

                        <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">11</button>
                        <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">88</button>
                        <button type="button" class="act3-bg radius12 cmn-40 d-center n4-clr fw_600">87</button>
                      </div>
                      <span class="fs20 fw_600 n2-clr">Saturday April 27.2024</span>
                    </div>
                  </SwiperSlide>
                  <div class="click-slideluxry-button">
                    <div class="container">
                      <div class="slider-btn d-inline-flex justify-content-between w-100 gap-xxl-5 gap-3" data-aos="zoom-in-down" data-aos-duration="1400">
                        <button type="button" class="luxury-prevteam cmn-s1-slide cmn-48 act4-border p1-clr radius-circle">
                          <PhCaretLeft class="ph-light ph-caret-left act4-clr"></PhCaretLeft>
                        </button>
                        <button type="button" class="luxury-nextteam cmn-s1-slide cmn-48 act4-border p1-clr radius-circle">
                          <PhCaretRight class="ph-light ph-caret-right act4-clr"></PhCaretRight>
                        </button>
                      </div>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
            <div class="col-lg-12 col-md-6 col-sm-9">
              <div class="biggest-trustpilot text-center border radius24 py-xxl-18 py-xl-10 py-9 px-xxl-10 px-xl-5">
                <div class="testimonial-ratting mb-xxl-6 mb-xl-4 mb-3" data-aos="zoom-in-down" data-aos-duration="1600">
                  <h3 class="d-flex align-items-center justify-content-center gap-3 n4-clr fw_700 mb-xxl-7 mb-xl-4 mb-3">
                    <PhStar weight="fill" class="ph-fill ph-star fs-three act4-clr"></PhStar> Trustpilot
                  </h3>
                  <ul class="ratting d-flex justify-content-center align-items-center gap-1 mb-xxl-3 mb-2">
                    <li>
                      <PhStar weight="fill" class="ph-fill ph-star fs-four act4-clr"></PhStar>
                    </li>
                    <li>
                      <PhStar weight="fill" class="ph-fill ph-star fs-four act4-clr"></PhStar>
                    </li>
                    <li>
                      <PhStar weight="fill" class="ph-fill ph-star fs-four act4-clr"></PhStar>
                    </li>
                    <li>
                      <PhStar weight="fill" class="ph-fill ph-star fs-four act4-clr"></PhStar>
                    </li>
                    <li>
                      <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr"></PhStarHalf>
                    </li>
                  </ul>
                  <h4 class="n2-clr fs20 fw_600">Reviews 25,750</h4>
                </div>
                <ul class="customer-review w-100 m-auto d-inline-flex cmn-style-flex justify-content-center mb-xxl-15 mb-xl-10 mb-lg-8 mb-6">
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
                        <span class="d-block fs-eight fw_700 n4-clr">10k+</span>
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
                <NuxtLink to="/contact" class="kewta-btn d-inline-flex align-items-center">
                  <span class="kew-text act3-bg act3-border n4-clr">Participant Now</span>
                  <div class="kew-arrow act3-bg kew-rotate">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
