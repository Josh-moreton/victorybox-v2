<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import CountUp from "vue-countup-v3";
import banner18 from "/images/banner/bannerv18.png";
import shape1 from "/images/banner/v18-shape1.png";
import shape2 from "/images/banner/v18-shape2.png";
import p118 from "/images/global/arrow-p118.png";
import leftShape from "/images/global/bannerv17-left-shape.png";
import call from "/images/global/call-sun17.png";
import acv1 from "/images/testimonial/acv17-1.png";
import acv2 from "/images/testimonial/acv17-2.png";
import acv3 from "/images/testimonial/acv17-3.png";
</script>
<template>
  <div class="banner-section-v18 pt-70-fixed n4-bg position-relative pb-xxl-20 pb-lg-20 pb-15 overflow-hidden">
    <!-- {/* Banner Content */} -->
    <div class="banner-v18wraper pt-xxl-3 mb-5">
      <div class="container">
        <div class="row align-items-lg-center">
          <div class="col-xl-7 col-lg-10 col-md-12">
            <div class="banner-content-v18 pt-xxl-20 pt-12 mt-xl-6 mt-md-6 mt-0 position-relative">
              <div class="d-flex mb-xxl-6 mb-sm-5 mb-4 align-items-center gap-xxl-8 gap-lg-6 gap-4 flex-wrap">
                <ul class="entry-win d-flex align-items-center gap-3">
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1000">
                    <NuxtLink to="#" class="fs-four act3-clr"> Entry </NuxtLink>
                  </li>
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1200">
                    <PhArrowRight class="ti ti-arrow-right fs-four act3-clr" />
                  </li>
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1400">
                    <NuxtLink to="#" class="fs-four act3-clr"> Draw </NuxtLink>
                  </li>
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1600">
                    <PhArrowRight class="ti ti-arrow-right fs-four act3-clr" />
                  </li>
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="2000">
                    <NuxtLink to="#" class="fs-four act3-clr"> Win </NuxtLink>
                  </li>
                </ul>
                <NuxtLink to="/contest" class="custom-bigarrow custom-bigarrow-act3">
                  <span class="icon">
                    <svg width="137" height="16" viewBox="0 0 137 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M136.707 8.70712C137.098 8.31659 137.098 7.68343 136.707 7.29291L130.343 0.928944C129.953 0.538419 129.319 0.538419 128.929 0.928943C128.538 1.31947 128.538 1.95263 128.929 2.34316L134.586 8.00001L128.929 13.6569C128.538 14.0474 128.538 14.6806 128.929 15.0711C129.319 15.4616 129.953 15.4616 130.343 15.0711L136.707 8.70712ZM-8.74228e-08 9L136 9.00001L136 7.00001L8.74228e-08 7L-8.74228e-08 9Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </NuxtLink>
              </div>
              <div class="bn-content-box pb-xxl-20 pb-xl-15 pb-8">
                <div class="display-three position-relative cus-z1 fw_900 text-capitalize n0-clr mb-xxl-6 mb-xl-5 mb-4">
                  <span class="d-flex flex-wrap text-capitalize align-items-center n4-clr gap-lg-3 gap-1 text-uppercase" data-aos="zoom-in-up" data-aos-duration="2200">
                    Triumph in
                    <span class="d-flex align-items-center gap-1">
                      <span class="fw_900 act3-clr d-block position-relative">
                        Game
                        <span class="game-line">
                          <svg width="193" height="7" viewBox="0 0 193 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.446758 4.98926C30.7969 1.47362 111.729 -3.16618 192.658 6.39979" stroke="#FEC92F" />
                          </svg>
                        </span>
                      </span>
                      Key
                    </span>
                  </span>
                  <span class="fw_900 text-capitalize">Challenges</span>
                </div>
                <p class="fs18 max-630 nw2-clr mb-xxl-10 mb-xl-8 mb-lg-6 mb-5">
                  Our exclusive Game Key Challenges await, offering you the chance to triumph over epic gaming challenges and unlock incredible rewards.
                </p>
                <NuxtLink to="/contact" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                  <span class="kew-text n4-clr act3-bg">Participant Now</span>
                  <div class="kew-arrow act3-bg">
                    <div class="kt-one">
                      <PhArrowRight class="ti ti-arrow-right n4-clr" />
                    </div>
                    <div class="kt-two">
                      <PhArrowRight class="ti ti-arrow-right n4-clr" />
                    </div>
                  </div>
                </NuxtLink>
              </div>
              <div class="bn1-odometer mt-xxl-20 d-flex align-items-center gap-xxl-10 gap-sm-8 gap-4 pt-0">
                <div class="odometer__items" data-aos="zoom-in-down" data-aos-duration="1000">
                  <div class="cont d-flex align-items-center">
                    <span class="odometer display-four nw1-clr fw_800">
                      <count-up :end-val="42"></count-up>
                    </span>
                    <span class="plus__icon display-four nw1-clr fw_800">k</span>
                    <span class="plus__icon display-four nw1-clr fw_800">+</span>
                  </div>
                  <p class="nw2-clr">Customers</p>
                </div>
                <div class="odometer__items" data-aos="zoom-in-down" data-aos-duration="1000">
                  <div class="cont d-flex align-items-center">
                    <span class="odometer display-four nw1-clr fw_800">
                      <count-up :end-val="5"></count-up>
                    </span>
                    <span class="plus__icon display-four nw1-clr fw_800">k</span>
                    <span class="plus__icon display-four nw1-clr fw_800">+</span>
                  </div>
                  <p class="nw2-clr">Artwork</p>
                </div>
                <div class="odometer__items" data-aos="zoom-in-down" data-aos-duration="1000">
                  <div class="cont d-flex align-items-center">
                    <span class="odometer display-four nw1-clr fw_800">
                      <count-up :end-val="1"></count-up>
                    </span>
                    <span class="plus__icon display-four nw1-clr fw_800">k</span>
                    <span class="plus__icon display-four nw1-clr fw_800">+</span>
                  </div>
                  <p class="nw2-clr">Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Banner Content */} -->

    <!-- {/* Customer Review */} -->
    <div class="banner-reviewer18">
      <ul class="customer-reviewv17 customer-review17-alt act3-border radius100 py-xxl-2 py-2 px-2 mb-xxl-6 mb-lg-4 mb-3">
        <li>
          <NuxtLink to="#" class="customer-revew-item act3-bg d-flex align-items-center justify-content-center">
            <NuxtImg :src="acv1" alt="img" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="customer-revew-item act3-bg d-flex align-items-center justify-content-center">
            <NuxtImg :src="acv2" alt="img" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="customer-revew-item act3-bg d-flex align-items-center justify-content-center">
            <NuxtImg :src="acv3" alt="img" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
            <span class="d-grid customer-ratting text-center p-2 act3-bg align-items-center justify-content-center">
              <span class="d-block fs20 fw_700 n4-clr">99+</span>
            </span>
          </NuxtLink>
        </li>
      </ul>
      <span class="active-userv17 active-userv17-alt justify-content-center fs18 fw_500 text-capitalize position-relative m-auto">Active Customers</span>
    </div>
    <!-- {/* Customer Review */} -->

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

    <!-- {/* bannerv18 thumb */} -->
    <div class="bannerv18-mainthumb">
      <NuxtImg :src="banner18" alt="img" />
    </div>
    <!-- {/* bannerv18 thumb */} -->

    <!-- {/* Other Shape */} -->
    <NuxtImg :src="p118" alt="img" class="banner-arrowv18" />
    <NuxtImg :src="shape1" alt="img" class="v18-shapee" />
    <NuxtImg :src="shape2" alt="img" class="v18-shaper" />
    <NuxtImg :src="call" alt="img" class="call-sunv18" />
    <NuxtImg :src="leftShape" alt="img" class="bannerv18-shape" />
    <!-- {/* Other Shape */} -->
  </div>
</template>

<style scoped></style>
