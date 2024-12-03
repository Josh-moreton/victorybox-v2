<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import bannerV20 from "/images/banner/bannerv20.png";
import bannerLeftShape from "/images/global/bannerv17-left-shape.png";
import acv1 from "/images/testimonial/acv17-1.png";
import acv2 from "/images/testimonial/acv17-2.png";
import acv3 from "/images/testimonial/acv17-3.png";
</script>
<template>
  <div class="banner-section-v20 pt-70-fixed n4-bg position-relative pb-xxl-20 pb-lg-20 pb-15 overflow-hidden">
    <!-- {/* Banner Content */} -->
    <div class="banner-v20wraper pt-xxl-3 mb-5 position-relative">
      <div class="container">
        <div class="row align-items-lg-center justify-content-between">
          <div class="col-xxl-6 col-lg-7 col-md-8">
            <div class="banner-content-v20 pt-xxl-20 pt-12 mt-xl-6 mt-md-6 mt-0 position-relative">
              <div class="bn-content-box pb-xxl-20 pb-xl-15 pb-8">
                <span class="fs20 fw_700 nw1-clr mb-xxl-4 mb-3 d-block" data-aos="zoom-in-left" data-aos-duration="1600"> Exclusive Lottery </span>
                <div class="display-one position-relative cus-z1 fw_800 text-capitalize n0-clr mb-xxl-6 mb-xl-5 mb-4">
                  <span class="fw_800 text-capitalize" data-aos="zoom-in-down" data-aos-duration="1800"> Your Time to </span>
                  <span class="d-flex flex-wrap text-capitalize align-items-center n4-clr gap-lg-3 gap-1 text-uppercase" data-aos="zoom-in-up" data-aos-duration="2200">
                    <span class="d-flex align-items-center gap-1">
                      <span class="fw_800 act3-clr d-block position-relative">
                        Win
                        <span class="game-line">
                          <svg width="193" height="7" viewBox="0 0 193 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.446758 4.98926C30.7969 1.47362 111.729 -3.16618 192.658 6.39979" stroke="#FEC92F" />
                          </svg>
                        </span>
                      </span>
                    </span>
                    Big!
                  </span>
                </div>
                <p class="fs18 max-630 nw2-clr mb-xxl-10 mb-xl-8 mb-lg-6 mb-5">
                  Our exclusive Game Key Challenges await, offering you the chance to triumph over epic gaming challenges and unlock incredible rewards.
                </p>
                <div class="d-flex flex-wrap text-center flex-md-nowrap align-items-center gap-xl-8 gap-3 cus-z1 position-relative w-100">
                  <NuxtLink to="/contact" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                    <span class="kew-text n4-clr act3-bg">Start Playing Now</span>
                    <div class="kew-arrow act3-bg">
                      <div class="kt-one">
                        <PhArrowRight class="ti ti-arrow-right n4-clr" />
                      </div>
                      <div class="kt-two">
                        <PhArrowRight class="ti ti-arrow-right n4-clr" />
                      </div>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/howtoplay" class="how-cont act3-texthover nw1-clr fw_700" data-aos="zoom-in-left" data-aos-duration="800"> How It’s Works </NuxtLink>
                </div>
                <div class="banner-reviewer18 mt-xxl-20 mt-xl-15 mt-lg-10 mt-md-8 mt-8 d-flex align-items-center gap-xxl-6 gap-5 flex-wrap">
                  <ul class="customer-reviewv17 customer-review17-alt act3-border radius100 py-xxl-2 py-2 px-2">
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
                  <span class="active-userv17 nw1-clr fs18 fw_500 text-capitalize position-relative">Active Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bannerv20-thumb">
        <div class="thumb">
          <NuxtImg :src="bannerV20" alt="img" />
        </div>
        <div class="video-bg2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
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

    <!-- {/* Other Shape */} -->
    <NuxtImg :src="bannerLeftShape" alt="img" class="bannerv20-shape" />
    <!-- {/* Other Shape */} -->
  </div>
</template>

<style scoped></style>
