<script setup lang="ts">
import { PhArrowRight, PhArrowUpRight } from "@phosphor-icons/vue";
import useCircularText from "../../hooks/useCircularText";
import MotionFadeDownToTop from "../motionEffect/MotionFadeDownToTop.vue";
import bannerBicycleImg from "/images/banner/banner-bicycle1.png";
import textBicycleImg from "/images/banner/text-bicycle.png";
import arrowV5Img from "/images/global/arrow-v5.png";

const textRef = useCircularText({ rotationAngle: 14 });
</script>
<template>
  <div class="banner-section-v5 pt-70-fixed n4-bg position-relative overflow-hidden">
    <!-- {/* Banner Content */} -->
    <div class="container">
      <div class="row justify-content-center justify-content-between">
        <div class="col-lg-7">
          <div class="banner-content-v2 banner-content-v3 pt-xxl-20 pt-12 mt-6">
            <div class="bn-content-box">
              <div class="display-two position-relative cus-z1 text-capitalize n0-clr mb-xxl-5 mb-3">
                <span class="d-flex text-capitalize align-items-center mb-3 n0-clr gap-3 text-uppercase" data-aos="zoom-in-up" data-aos-duration="2200">
                  <span class="fw_900 text-capitalize d-block">Your Ticket</span>
                  <NuxtImg :src="textBicycleImg" alt="img" class="bn-v2textcar1" />
                  <span class="fw_900 act3-clr d-block act3-underline">Two</span>
                </span>
                <span class="d-flex fw_900 nw1-clr text-capitalize align-items-center gap-3" data-aos="zoom-in-left" data-aos-duration="2400"> Wheel Euphoria! </span>
              </div>
              <p class="nw1-clr fs20 max-520 mb-xxl-10 mb-lg-8 mb-5" data-aos="fade-down-right" data-aos-duration="1500">
                Join the excitement. Get your ticket now, ride toward winning your dream bike!
              </p>
              <div class="d-flex flex-wrap cus-z1 position-relative flex-md-nowrap mb-xxl-12 mb-xl-10 mb-8 align-items-center gap-xl-8 gap-3 flex-wrap w-100">
                <NuxtLink to="/contest-details">
                  <div class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                    <span class="kew-text n4-clr act3-bg">Participant Now</span>
                    <div class="kew-arrow act3-bg">
                      <div class="kt-one">
                        <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                      </div>
                      <div class="kt-two">
                        <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/howtoplay">
                  <div class="how-cont nw1-clr act3-hover fw_700" data-aos="zoom-in-left" data-aos-duration="800">How It’s Works</div>
                </NuxtLink>
                <NuxtImg :src="arrowV5Img" alt="img" class="arrow-v5" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="banner-v5bicycle-thumb" data-aos="zoom-in-left" data-aos-duration="1800">
            <NuxtImg :src="bannerBicycleImg" alt="img" />
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Banner Content */} -->

    <!-- {/* Text Animation */} -->
    <MotionFadeDownToTop class="banner-textanimation">
      <div class="textcircle">
        <div class="text" ref="textRef">
          <p><span>Explore</span> <span>More</span> <span>Explore</span> <span>More</span></p>
        </div>
      </div>
      <div>
        <NuxtLink to="#" class="icon-explore">
          <span class="icon">
            <PhArrowUpRight class="ph-bold ph-arrow-up-right"></PhArrowUpRight>
          </span>
        </NuxtLink>
      </div>
    </MotionFadeDownToTop>
    <!-- {/* Text Animation */} -->

    <!-- {/* Mouse Animation */} -->
    <div class="mouse-animation">
      <div class="m-aniline">
        <svg width="2" height="239" viewBox="0 0 2 239" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="0" x2="1" y2="239" stroke="url(#paint0_linear_8113_8275)" strokeWidth="2" />
          <defs>
            <linearGradient id="paint0_linear_8113_8275" x1="0" y1="239" x2="0" y2="0" gradientUnits="userSpaceOnUse">
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
    <!-- {/* Mouse Animation */} -->
  </div>
</template>

<style scoped></style>
