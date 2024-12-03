<script setup lang="ts">
import { PhArrowRight, PhStar } from "@phosphor-icons/vue";
import bannerV4One from "/images/banner/banner-v4one.png";
import customer1 from "/images/banner/customer1.png";
import customer2 from "/images/banner/customer2.png";
import customer3 from "/images/banner/customer3.png";
import customer4 from "/images/banner/customer4.png";
import textBike from "/images/banner/text-bike.png";
import win from "/images/banner/win.png";
import act4 from "/images/global/act4-shape.png";
</script>
<template>
  <div class="banner-section-v4 pt-70-fixed n4-bg position-relative overflow-hidden">
    <!-- {/* Banner Content */} -->
    <div class="banner-v4wraper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="banner-content-v4 pt-xxl-20 pt-12 mt-6">
              <div class="bn-content-box">
                <div class="d-flex mb-sm-6 mb-6 align-items-center gap-xxl-8 gap-lg-6 gap-4 flex-wrap">
                  <ul class="entry-win entry-winv4 d-flex align-items-center gap-3">
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1000">
                      <NuxtLink to="#" class="fs-four h4-clr"> Entry </NuxtLink>
                    </li>
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1200">
                      <PhArrowRight weight="bold" class="ti ti-arrow-right fs-four"></PhArrowRight>
                    </li>
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1400">
                      <NuxtLink to="#" class="fs-four h4-clr"> Draw </NuxtLink>
                    </li>
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1600">
                      <PhArrowRight weight="bold" class="ti ti-arrow-right fs-four"></PhArrowRight>
                    </li>
                    <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="2000">
                      <NuxtLink to="#" class="fs-four h4-clr"> Win </NuxtLink>
                    </li>
                  </ul>
                  <NuxtLink to="/contest" class="custom-bigarrow">
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
                <div class="display-two position-relative cus-z1 fw_900 text-capitalize n4-clr mb-xxl-5 mb-3">
                  <span class="fw_900 text-capitalize d-block">Two-Wheel</span>
                  <span class="d-flex text-capitalize align-items-center mb-3 n0-clr gap-3 text-uppercase" data-aos="zoom-in-up" data-aos-duration="2200">
                    <span class="fw_900 act4-clr d-block act4-underline">Dreams</span>

                    <NuxtImg :src="textBike" alt="img" class="bn-v2textcar1" />
                  </span>
                  <span class="d-flex nw1-clr fw_900 text-capitalize align-items-center gap-3" data-aos="zoom-in-left" data-aos-duration="2400"> Begin </span>
                </div>

                <p class="n3-clr fs20 max-520 mb-xxl-10 mb-lg-8 mb-5" data-aos="fade-down-right" data-aos-duration="1500">
                  Join the excitement. Get your ticket now, ride toward winning your dream bike!
                </p>

                <div class="d-flex flex-wrap cus-z1 position-relative flex-md-nowrap mb-xxl-12 mb-xl-10 mb-8 align-items-center gap-xl-8 gap-3 flex-wrap w-100">
                  <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                    <span class="kew-text n4-clr act3-bg">Participant Now</span>
                    <div class="kew-arrow act3-bg">
                      <div class="kt-one">
                        <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                      </div>
                      <div class="kt-two">
                        <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                      </div>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/howtoplay" class="how-cont n4-clr fw_700" data-aos="zoom-in-left" data-aos-duration="800"> How It’s Works </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="banner-v4-thumb">
              <div class="banner-v4-thumbbox">
                <div class="thumb" data-aos="fade-left" data-aos-duration="2000">
                  <NuxtImg :src="bannerV4One" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bnv4-countedwrap d-flex align-items-center justify-content-end">
          <div class="banner-content-v1customer">
            <ul class="customer-review cmn-style-flex act4-border radius100 py-xxl-2 py-2 px-2">
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
                    <span class="d-block fs-eight fw_700 n4-clr">4.7</span>
                  </span>
                </NuxtLink>
              </li>
            </ul>
            <span class="n4-clr fs-eight fw_700 text-uppercase mt-xxl-4 mt-3"> <span class="act4-clr fs-five">70k</span> CUSTOMER REVIEW </span>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Banner Content */} -->

    <!-- {/* win shape */} -->
    <div class="win-bn4-thumb">
      <NuxtImg :src="win" alt="win" />
    </div>
    <!-- {/* star shpae */} -->
    <NuxtImg :src="act4" alt="img" class="banner-4v-shape" />
  </div>
</template>

<style scoped></style>
