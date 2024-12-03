<script setup lang="ts">
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import arrow from "/images/global/arrow-v11.png";
import MotionFadeDownToTop from "../motionEffect/MotionFadeDownToTop.vue";
import bannerIllas from "/images/banner/banner-v11-illastration.png";
import bannerv11 from "/images/banner/bannerv11.png";
</script>
<template>
  <section class="banner-section-v11 pt-70-fixed overflow-visible n0-bg position-relative pb-120 cus-z1">
    <!-- {/* Banner Content */} -->
    <div class="banner-v11wraper position-relative">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-7 col-md-8">
            <div class="banner-content-v11 position-relative cus-z1 pt-xxl-20 pt-12 mt-xl-10 mt-lg-6 mt-5">
              <div class="bn-content-box">
                <h4 class="act4-clr fw_700 mb-xxl-4 mb-3">Glamour in Every Draw</h4>

                <div class="display-two position-relative cus-z1 fw_900 text-capitalize n4-clr mb-xxl-5 mb-3">
                  <span class="fw_900 text-capitalize d-block">Exploring Dream </span>
                  <span class="d-flex text-capitalize align-items-center n4-clr gap-3 text-uppercase" data-aos="zoom-in-up" data-aos-duration="2200">
                    <span>House</span>
                    <span class="fw_900 act4-clr d-block position-relative">
                      Competitions
                      <span class="rotate-arrow-v11">
                        <svg width="463" height="9" viewBox="0 0 463 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.966022 7.62843C73.5619 2.87776 267.401 -3.81425 461.993 7.42302" stroke="#FF650E" strokeWidth="2" />
                        </svg>
                      </span>
                    </span>
                  </span>
                </div>

                <p class="n3-clr fs20 max-600 mb-xxl-10 mb-lg-8 mb-5" data-aos="fade-down-right" data-aos-duration="1500">
                  Get ready for a winning experience like no other! Join us in the thrill of anticipation and be the next lucky winner.
                </p>

                <div class="cmn-formwrap">
                  <form class="d-flex align-items-center radius100 py-xxl-2 py-2 ps-xxl-6 px-4 pe-2">
                    <PhMagnifyingGlass class="ph ph-magnifying-glass" />
                    <input type="text" placeholder="Search Homes" />
                    <button type="submit" class="sumit-btn radius100 act3-bg py-xxl-2 py-xl-1 py-1 px-xxl-6 px-4">
                      <span class="fs-eight fw_600 n4-clr">Submit</span>
                    </button>
                  </form>
                </div>
              </div>
              <NuxtImg :src="arrow" alt="img" class="arrow-v11" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Banner Content */} -->

    <MotionFadeDownToTop class="banner-v11-thumb">
      <NuxtImg :src="bannerv11" alt="img" />
    </MotionFadeDownToTop>
    <NuxtImg :src="bannerIllas" alt="img" class="banner-v11-illastration" />
  </section>
</template>

<style scoped></style>
