<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import CountUp from "vue-countup-v3";
import MotionFadeTopToDown from "../motionEffect/MotionFadeTopToDown.vue";
import bannerV14 from "/images/banner/banner-v14-simble.png";
import banner14 from "/images/banner/banner-v14.png";
import acv1 from "/images/testimonial/acv17-1.png";
import acv2 from "/images/testimonial/acv17-2.png";
import acv3 from "/images/testimonial/acv17-3.png";
</script>
<template>
  <div class="banner-section-v14 pt-70-fixed position-relative overflow-hidden">
    <!-- {/* Banner Content */} -->
    <div class="banner-v14wraper pb-20 pt-xxl-6">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-8 col-lg-8 col-md-8">
            <div class="banner-content-v14 pt-xxl-20 pt-12 mt-xl-6 mt-md-6 mt-0 position-relative">
              <div class="d-flex mb-sm-4 mb-4 align-items-center gap-xxl-8 gap-lg-6 gap-4 flex-wrap">
                <ul class="entry-win d-flex align-items-center gap-3">
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1000">
                    <NuxtLink to="#" class="fs-four p1-clr"> Entry </NuxtLink>
                  </li>
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1200">
                    <PhArrowRight class="ti ti-arrow-right fs-four p1-clr" />
                  </li>
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1400">
                    <NuxtLink to="#" class="fs-four p1-clr"> Draw </NuxtLink>
                  </li>
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1600">
                    <PhArrowRight class="ti ti-arrow-right fs-four p1-clr" />
                  </li>
                  <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="2000">
                    <NuxtLink to="#" class="fs-four p1-clr"> Win </NuxtLink>
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
              <div class="bn-content-box">
                <MotionEffectMotionFade class="display-one position-relative cus-z1 fw_800 text-capitalize nw1-clr mb-xxl-6 mb-lg-4 mb-3">
                  <span class="fw_800 text-capitalize d-block" data-aos="zoom-in" data-aos-duration="1800"> Explore the </span>
                  <span class="d-flex align-items-center gap-xxl-4 gap-3 fw_800 text-capitalize">
                    World of
                    <span class="nft-text position-relative text-uppercase act4-clr">
                      NFT
                      <span class="nft-border">
                        <svg width="141" height="6" viewBox="0 0 141 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5C22.8731 2.55684 81.2954 -1.30336 140 2.80115" stroke="#FF650E" />
                        </svg>
                      </span>
                    </span>
                  </span>
                  <span class="d-flex nw1-clr fw_900 text-capitalize align-items-center gap-3" data-aos="zoom-in-left" data-aos-duration="2400"> Treasures </span>
                </MotionEffectMotionFade>
                <p class="nw2-clr fs20 max-520 mb-xxl-10 mb-lg-8 mb-5" data-aos="fade-down-right" data-aos-duration="1500">
                  Discover NFTs by category track the latest drops and follow the collections you love Enjoy it
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
              <div class="bn1-odometer mt-xxl-16 mt-xl-10 mt-6 pt-0 d-flex align-items-center gap-xxl-10 gap-sm-8 gap-4">
                <div class="odometer__items" data-aos="zoom-in-down" data-aos-duration="1000">
                  <div class="cont d-flex align-items-center">
                    <span class="odometer display-four p1-clr fw_800">
                      <count-up :end-val="100"></count-up>
                    </span>
                    <span class="plus__icon display-four p1-clr fw_800">k</span>
                    <span class="plus__icon display-four p1-clr fw_800">+</span>
                  </div>
                  <p class="nw2-clr">Customers</p>
                </div>
                <div class="odometer__items" data-aos="zoom-in-down" data-aos-duration="1000">
                  <div class="cont d-flex align-items-center">
                    <span class="odometer display-four p1-clr fw_800">
                      <count-up :end-val="32"></count-up>
                    </span>
                    <span class="plus__icon display-four p1-clr fw_800">k</span>
                    <span class="plus__icon display-four p1-clr fw_800">+</span>
                  </div>
                  <p class="nw2-clr">Artwork</p>
                </div>
                <div class="odometer__items" data-aos="zoom-in-down" data-aos-duration="1000">
                  <div class="cont d-flex align-items-center">
                    <span class="odometer display-four p1-clr fw_800">
                      <count-up :end-val="12"></count-up>
                    </span>
                    <span class="plus__icon display-four p1-clr fw_800">k</span>
                    <span class="plus__icon display-four p1-clr fw_800">+</span>
                  </div>
                  <p class="nw2-clr">Owner</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4">
            <div class="banner-v14-thumb position-relative" data-aos="zoom-in" data-aos-duration="2000">
              <MotionEffectMotionFade>
                <NuxtImg :src="banner14" alt="img" />
              </MotionEffectMotionFade>
              <div class="flash">
                <svg width="103" height="64" viewBox="0 0 103 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.15625 1L18.1904 43.2425" stroke="#AEFE3A" strokeWidth="2" strokeLinecap="round" />
                  <path d="M27.4141 25.2158L31.2182 43.8042" stroke="#AEFE3A" strokeWidth="2" strokeLinecap="round" />
                  <path d="M51.2274 11.4654L39.4158 46.8064M59.8522 40.2032L46.3836 51.6747M99.2899 38.9107L52.6157 58.4688" stroke="#AEFE3A" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <MotionFadeTopToDown class="place-customer d-grid justify-content-center text-center text-lg-start d-lg-flex align-items-center gap-xxl-3 gap-2">
                <ul class="customer-reviewv17 customer-review17-alt radius100">
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
                      <span class="d-grid customer-ratting text-center p-2 p1-bg align-items-center justify-content-center">
                        <span class="d-block fs20 fw_700 n4-clr">99+</span>
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
                <div class="cont">
                  <span class="p1-clr fs18 fw_600">
                    @Digimental
                    <span class="d-block nw1-clr">HAPE Teaser</span>
                  </span>
                </div>
              </MotionFadeTopToDown>
              <div class="place-bidwrap">
                <div class="d-flex align-items-center justify-content-between gap-2 mb-xxl-3 mb-2">
                  <span class="fs18 fw_600 p1-clr d-block">Ends in</span>
                  <span class="fs18 fw_600 p1-clr d-block">Current bid</span>
                </div>
                <div class="d-flex align-items-center justify-content-between gap-2 mb-xxl-8 mb-xl-6 mb-sm-4 mb-3">
                  <span class="fs18 fw_600 p1-clr d-block">05:39:47</span>
                  <span class="fs18 fw_600 p1-clr d-block">0.32 ETH</span>
                </div>
                <button type="button" class="kewta-btn w-100 d-inline-flex align-items-center">
                  <span class="kew-text p1-border w-100 p1-bg n4-clr">Place bid</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Banner Content */} -->

    <!-- {/* Scroll Top */} -->
    <NuxtLink to="#down-scroll" class="scroll-bn1 act3-bg radius100 d-flex justify-content-center align-items-center justify-content-center">
      <span class="d-grid gap-xxl-5 gap-xl-4 gap-3 justify-content-center text-center m-auto">
        <span class="n4-clr fs18 d-block fw_600">Scroll</span>
        <span class="scroll-iconrarea">
          <svg width="16" height="65" viewBox="0 0 16 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.29289 64.7071C7.68341 65.0976 8.31658 65.0976 8.7071 64.7071L15.0711 58.3431C15.4616 57.9526 15.4616 57.3195 15.0711 56.9289C14.6805 56.5384 14.0474 56.5384 13.6569 56.9289L8 62.5858L2.34314 56.9289C1.95262 56.5384 1.31945 56.5384 0.92893 56.9289C0.538405 57.3195 0.538405 57.9526 0.92893 58.3431L7.29289 64.7071ZM7 -4.37121e-08L7 64L9 64L9 4.37121e-08L7 -4.37121e-08Z"
              fill="black"
            />
          </svg>
        </span>
      </span>
    </NuxtLink>
    <!-- {/* Scroll Top */} -->

    <!-- {/* shape */} -->

    <NuxtImg :src="bannerV14" alt="img" class="ladnig-vnft" />

    <!-- {/* shape */} -->
  </div>
</template>

<style scoped></style>
