<script setup lang="ts">
import { PhArrowRight, PhGift } from "@phosphor-icons/vue";
import sectionIcon from "/images/global/section-icon.png";
import ws3 from "/images/global/w3.png";
import ws1 from "/images/global/ws1.png";
import ws2 from "/images/global/ws2.png";
</script>
<template>
  <section class="bike-worksection n0-bg pt-120 pb-120">
    <div class="container">
      <div class="row g-md-6 g-0 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-9">
        <div class="col-lg-6 col-md-7">
          <div class="section__title mb-xxl-10 mb-8">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="sectionIcon" alt="img" />
              <h5 class="s1-clr fw_700">How It Works</h5>
            </div>
            <span class="display-four d-block n4-clr">
              <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Your Ultimate Guide </span>
              to
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Winning! </span>
            </span>
          </div>
        </div>
        <div class="col-lg-4 col-md-5">
          <p class="n3-clr fs20">Lottovibe is the best way to play these exciting lotteries from anywhere in the world.</p>
        </div>
      </div>
      <div class="bikeworking-wrap swiper position-relative">
        <Swiper
          :direction="'vertical'"
          :spaceBetween="50"
          :slidesPerView="1"
          :autoHeight="true"
          :mousewheel="true"
          :modules="[SwiperAutoplay, SwiperPagination]"
          :speed="1000"
          :loop="false"
          :pagination="{ clickable: true, el: '.swiper-pagination-workguide' }"
          :autoplay="{ delay: 3000 }"
        >
          <SwiperSlide>
            <div class="work-sliderwing position-relative">
              <div class="row g-6 align-items-center justify-content-between">
                <div class="col-lg-5">
                  <div class="work-wingi-contentv3 position-relative cus-z1">
                    <div class="d-flex mb-xxl-5 mb-xl-4 mb-4 align-items-center gap-xxl-4 gap-4">
                      <span class="text-uppercase fs20 fw_700 nw1-clr">STEP_01</span>
                      <svg width="315" height="2" viewBox="0 0 315 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="2" width="2" height="315" transform="rotate(-90 0 2)" fill="url(#paint0_linear_5647_69310)" />
                        <defs>
                          <linearGradient id="paint0_linear_5647_69310" x1="1" y1="2" x2="1" y2="317" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#FF650E" />
                            <stop offset="1" stop-color="#FF650E" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div class="d-flex align-items-center gap-xxl-5 gap-3 mb-xxl-5 mb-4">
                      <div class="step-gift act4-bg d-center">
                        <PhGift :size="32" class="ph ph-gift"></PhGift>
                      </div>
                      <h2 class="nw1-clr">Choose Prize</h2>
                    </div>
                    <p class="fs18 fw_600 nw1-clr mb-xxl-5 mb-5">
                      Choose your desired prize, pick tickets, answer correctly, then press &apos;enter nowa&apos; for a
                      <NuxtLink to="#" class="act4-clr"> chance to win! </NuxtLink>
                    </p>
                    <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center">
                      <span class="kew-text act3-bg n4-clr" data-aos="zoom-in-left" data-aos-duration="900"> Participant Now </span>
                      <div class="kew-arrow act3-bg" data-aos="zoom-in-left" data-aos-duration="1600">
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
                <div class="col-lg-6">
                  <div class="work-thumb-widing">
                    <div class="work-thumbv3">
                      <NuxtImg :src="ws1" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="work-sliderwing position-relative">
              <div class="row g-6 align-items-center justify-content-between">
                <div class="col-lg-5">
                  <div class="work-wingi-contentv3 position-relative cus-z1">
                    <div class="d-flex mb-xxl-5 mb-xl-4 mb-4 align-items-center gap-xxl-4 gap-4">
                      <span class="text-uppercase fs20 fw_700 nw1-clr">STEP_02</span>
                      <svg width="315" height="2" viewBox="0 0 315 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="2" width="2" height="315" transform="rotate(-90 0 2)" fill="url(#paint0_linear_5647_69311)" />
                        <defs>
                          <linearGradient id="paint0_linear_5647_69311" x1="1" y1="2" x2="1" y2="317" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#FF650E" />
                            <stop offset="1" stop-color="#FF650E" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div class="d-flex align-items-center gap-xxl-5 gap-3 mb-xxl-5 mb-4">
                      <div class="step-gift act4-bg d-center">
                        <PhGift :size="32" class="ph ph-gift"></PhGift>
                      </div>
                      <h2 class="nw1-clr">Select Your Entries</h2>
                    </div>
                    <p class="fs18 fw_600 nw1-clr mb-xxl-5 mb-5">
                      Choose your desired prize, pick tickets, answer correctly, then press &apos;enter now&apos; for a
                      <NuxtLink to="#" class="act4-clr"> chance to win! </NuxtLink>
                    </p>
                    <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center">
                      <span class="kew-text act3-bg n4-clr" data-aos="zoom-in-left" data-aos-duration="900"> Participant Now </span>
                      <div class="kew-arrow act3-bg" data-aos="zoom-in-left" data-aos-duration="1600">
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
                <div class="col-lg-6">
                  <div class="work-thumb-widing">
                    <div class="work-thumbv3 re-working-position">
                      <NuxtImg :src="ws2" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="work-sliderwing position-relative">
              <div class="row g-6 align-items-center justify-content-between">
                <div class="col-lg-5">
                  <div class="work-wingi-contentv3 position-relative cus-z1">
                    <div class="d-flex mb-xxl-5 mb-xl-4 mb-4 align-items-center gap-xxl-4 gap-4">
                      <span class="text-uppercase fs20 fw_700 nw1-clr">STEP_03</span>
                      <svg width="315" height="2" viewBox="0 0 315 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="2" width="2" height="315" transform="rotate(-90 0 2)" fill="url(#paint0_linear_5647_69312)" />
                        <defs>
                          <linearGradient id="paint0_linear_5647_69312" x1="1" y1="2" x2="1" y2="317" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#FF650E" />
                            <stop offset="1" stop-color="#FF650E" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div class="d-flex align-items-center gap-xxl-5 gap-3 mb-xxl-5 mb-4">
                      <div class="step-gift act4-bg d-center">
                        <PhGift :size="32" class="ph ph-gift"></PhGift>
                      </div>
                      <h2 class="nw1-clr">Win Prizes</h2>
                    </div>
                    <p class="fs18 fw_600 nw1-clr mb-xxl-5 mb-5">
                      Choose your desired prize, pick tickets, answer correctly, then press &apos;enter now&apos; for a
                      <NuxtLink to="#" class="act4-clr"> chance to win! </NuxtLink>
                    </p>
                    <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center">
                      <span class="kew-text act3-bg n4-clr" data-aos="zoom-in-left" data-aos-duration="900"> Participant Now </span>
                      <div class="kew-arrow act3-bg" data-aos="zoom-in-left" data-aos-duration="1600">
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
                <div class="col-lg-6">
                  <div class="work-thumb-widing">
                    <div class="work-thumbv3 re-working-position">
                      <NuxtImg :src="ws3" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-pagination-workguide"></div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
