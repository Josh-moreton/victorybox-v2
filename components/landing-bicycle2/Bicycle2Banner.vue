<script setup lang="ts">
import { PhArrowRight, PhArrowUpRight, PhStar } from "@phosphor-icons/vue";
import CountUp from "vue-countup-v3";
import useCircularText from "../../hooks/useCircularText";
import customer1 from "/images/banner/customer1.png";
import customer2 from "/images/banner/customer2.png";
import customer3 from "/images/banner/customer3.png";
import customer4 from "/images/banner/customer4.png";
import win from "/images/banner/win.png";
import c1 from "/images/bike/bannerv6-c1.png";
import c2 from "/images/bike/bannerv6-c2.png";
import c3 from "/images/bike/bannerv6-c3.png";
import shapedBg from "/images/global/banner-v6-shapebg.png";
import call from "/images/global/call-sun.png";

const textRef = useCircularText({ rotationAngle: 14 });
</script>
<template>
  <div class="banner-section-v6 pt-70-fixed n4-bg position-relative overflow-hidden">
    <!-- {/* Banner Content */} -->
    <div class="container">
      <div class="banner-v6-containerwrap pt-xxl-5 position-relative">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="banner-content-v6 pb-xxl-8 pb-xl-6 pb-sm-4 pb-4 text-center pt-xxl-20 pt-xl-14 pt-lg-8 pt-sm-7 pt-5 mt-6">
              <div class="bn-content-box">
                <h2 class="display-three position-relative cus-z1 text-capitalize n0-clr mb-xxl-5 mb-3">
                  <span class="fw_800 text-capitalize d-block">Experience the Thrills in Our</span>
                  <span class="d-flex justify-content-center fw_800 nw1-clr text-capitalize align-items-center gap-3" data-aos="zoom-in-left" data-aos-duration="2400">
                    Lottery
                    <span class="fw_800 act4-clr d-block act4-underline">Adventure</span>
                  </span>
                </h2>
                <p class="nw1-clr fs20 max-520 m-auto mb-xxl-10 mb-lg-8 mb-5" data-aos="fade-down-right" data-aos-duration="1500">
                  Join the excitement. Get your ticket now, ride toward winning your dream bike!
                </p>
                <div class="d-flex cus-z1 position-relative flex-md-nowrap justify-content-center mb-xxl-12 mb-xl-10 mb-8 align-items-center gap-xl-8 gap-3 flex-wrap w-100">
                  <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                    <span class="kew-text n4-clr act3-bg"> Participant Now </span>
                    <div class="kew-arrow act3-bg">
                      <div class="kt-one">
                        <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                      </div>
                      <div class="kt-two">
                        <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                      </div>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/howtoplay" class="how-cont nw1-clr act3-hover fw_700" data-aos="zoom-in-left" data-aos-duration="800"> How It’s Works </NuxtLink>
                </div>
              </div>
            </div>
            <div class="banner-v6wrap position-relative">
              <div class="banner-v6wrap-inner">
                <Swiper
                  :loop="true"
                  :slidesPerView="1"
                  :spaceBetween="24"
                  :speed="2000"
                  :modules="[SwiperAutoplay]"
                  :autoplay="{
                    delay: 1200,
                    reverseDirection: true,
                  }"
                  class="swiper banner-v6wrap-slide"
                >
                  <SwiperSlide class="swiper-slide">
                    <div class="thumb">
                      <NuxtImg :src="c1" alt="img" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div class="thumb">
                      <NuxtImg :src="c2" alt="img" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <div class="thumb">
                      <NuxtImg :src="c3" alt="img" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <!-- {/* Customer & Win */} -->
        <div class="customer-wining">
          <div class="banner-content-v1customer">
            <ul class="customer-review d-inline-flex cmn-style-flex act3-border radius100 py-xxl-2 py-2 px-2">
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
                    <PhStar weight="fill" class="ti ti-star-filled n4-clr"></PhStar>
                    <span class="d-block fs-eight fw_700 n4-clr"> 4.7 </span>
                  </span>
                </NuxtLink>
              </li>
            </ul>
            <span class="nw2-clr d-block fs-eight fw_700 text-uppercase mt-xxl-4 mt-3"> <span class="act3-clr fs-five">70k</span> CUSTOMER REVIEW </span>
          </div>
          <NuxtImg :src="win" alt="img" class="wing-img" />
        </div>
        <!-- {/* Customer & Win */} -->

        <!-- {/* Counter & Text Animation */} -->
        <div class="counter-textanimation-wrap">
          <div class="banner-textanimation banner-textanimation-white">
            <div class="textcircle">
              <div class="text" ref="textRef">
                <p><span>Explore</span> <span>More</span> <span>Explore</span> <span>More</span></p>
              </div>
            </div>
            <NuxtLink to="#" class="icon-explore">
              <span class="icon">
                <PhArrowUpRight weight="bold" class="ph-bold ph-arrow-up-right n4fixed"></PhArrowUpRight>
              </span>
            </NuxtLink>
          </div>
          <div class="employed-countv3">
            <div class="employed-itemv3 mb-xxl-6 mb-4">
              <span class="display-five n0-clr d-flex">
                <count-up :end-val="175"></count-up>
                <span class="act4-clr">0</span>
                <span class="act4-clr">+</span>
              </span>
              <span class="nw1-clr fs18 fw_600 mt-1"> Verified Users </span>
            </div>
            <div class="employed-itemv3 mb-xxl-6 mb-4">
              <span class="display-five n0-clr d-flex">
                <count-up :end-val="15"></count-up>
                <span class="act4-clr">k</span>
              </span>
              <span class="nw1-clr fs18 fw_600 mt-1"> Years on the market </span>
            </div>
          </div>
        </div>
        <!-- {/* Counter & Text Animation */} -->

        <!-- {/* Banner V6 Shpaebg */} -->
        <NuxtImg :src="shapedBg" alt="img" class="banner-v6shape" />
        <!-- {/* Banner V6 Shpaebg */} -->
      </div>
    </div>
    <!-- {/* Banner Content */} -->

    <!-- {/* mouse animation */} -->
    <div class="mouse-animation">
      <div class="m-aniline">
        <svg width="2" height="239" viewBox="0 0 2 239" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="-4.37114e-08" x2="1.00001" y2="239" stroke="url(#paint0_linear_8113_8275)" strokeWidth="2" />
          <defs>
            <linearGradient id="paint0_linear_8113_8275" x1="1.43051e-05" y1="239" x2="-3.02045e-05" y2="-2.84524" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#FF650E" stop-opacity="0" />
              <stop offset="0.989583" stop-color="#FF650E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="m-ani">
        <svg width="34" height="48" viewBox="0 0 34 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 47.625C21.4755 47.625 25.7677 45.8471 28.9324 42.6824C32.0971 39.5177 33.875 35.2255 33.875 30.75V17.25C33.875 12.7745 32.0971 8.48225 28.9324 5.31757C25.7677 2.1529 21.4755 0.375 17 0.375C12.5245 0.375 8.23225 2.1529 5.06757 5.31757C1.9029 8.48225 0.125 12.7745 0.125 17.25V30.75C0.125 35.2255 1.9029 39.5177 5.06757 42.6824C8.23225 45.8471 12.5245 47.625 17 47.625ZM3.5 17.25C3.5 13.6696 4.92232 10.2358 7.45406 7.70406C9.9858 5.17232 13.4196 3.75 17 3.75C20.5804 3.75 24.0142 5.17232 26.5459 7.70406C29.0777 10.2358 30.5 13.6696 30.5 17.25V30.75C30.5 34.3304 29.0777 37.7642 26.5459 40.2959C24.0142 42.8277 20.5804 44.25 17 44.25C13.4196 44.25 9.9858 42.8277 7.45406 40.2959C4.92232 37.7642 3.5 34.3304 3.5 30.75V17.25Z"
            fill="#FF650E"
          />
          <path
            d="M17 23.25C17.4476 23.25 17.8768 23.0722 18.1932 22.7557C18.5097 22.4393 18.6875 22.0101 18.6875 21.5625V14.8125C18.6875 14.3649 18.5097 13.9357 18.1932 13.6193C17.8768 13.3028 17.4476 13.125 17 13.125C16.5524 13.125 16.1232 13.3028 15.8068 13.6193C15.4903 13.9357 15.3125 14.3649 15.3125 14.8125V21.5625C15.3125 22.0101 15.4903 22.4393 15.8068 22.7557C16.1232 23.0722 16.5524 23.25 17 23.25Z"
            fill="#FF650E"
          />
        </svg>
      </div>
    </div>
    <!-- {/* mouse animation */} -->

    <!-- {/* Call Sun */} -->
    <NuxtImg :src="call" alt="img" class="call-sun" />
  </div>
</template>

<style scoped></style>
