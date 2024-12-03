<script setup lang="ts">
import { PhArrowRight, PhArrowUpRight } from "@phosphor-icons/vue";
import CountUp from "vue-countup-v3";
import useCircularText from "../../hooks/useCircularText";
import MotionFadeTopToDown from "../motionEffect/MotionFadeTopToDown.vue";
import bannerV13 from "/images/banner/banner-v13-one.png";
import bannerV13Two from "/images/banner/banner-v13-two.png";
import customer2 from "/images/banner/customer2.png";
import customer3 from "/images/banner/customer3.png";
import arrowV11 from "/images/global/arrow-v11.png";

const textRef = useCircularText({ rotationAngle: 14 });
</script>
<template>
  <section class="banner-section-v9 banner-section-v13 pt-70-fixed position-relative">
    <!-- {/* Banner Content */} -->
    <div class="banner-v13wraper pb-20 pt-xxl-6">
      <div class="container">
        <div class="row align-items-end">
          <div class="col-xl-6 col-lg-6 col-md-8">
            <div class="banner-content-v13 pt-xxl-20 pt-12 mt-xl-6 mt-lg-6 mt-5 position-relative">
              <div class="bn-content-box">
                <MotionFadeTopToDown>
                  <h4 class="n4-clr mb-xxl-4 mb-3">Glamour in Every Draw</h4>
                </MotionFadeTopToDown>
                <div class="display-two position-relative cus-z1 fw_900 text-capitalize n4-clr mb-xxl-4 mb-3">
                  <span class="d-flex align-items-center gap-xxl-4 gap-3 fw_900 text-capitalize">
                    Play for
                    <span class="nft-text position-relative text-uppercase act4-clr">
                      NFT
                      <span class="nft-border">
                        <svg width="141" height="6" viewBox="0 0 141 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5C22.8731 2.55684 81.2954 -1.30336 140 2.80115" stroke="#FF650E" />
                        </svg>
                      </span>
                      <span class="flash-focus">
                        <svg width="110" height="84" viewBox="0 0 110 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.8164 1.26562L20.5612 45.1542" stroke="#FF650E" strokeWidth="2" strokeLinecap="round" />
                          <path d="M33.7734 29.8076L33.0918 48.769" stroke="#FF650E" strokeWidth="2" strokeLinecap="round" />
                          <path d="M60.1542 22.0535L40.3501 53.6177M61.7669 52.0143L45.975 59.9903M100.399 60.0482L50.4313 68.0613" stroke="#FF650E" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>
                    </span>
                  </span>
                  <span class="fw_900 text-capitalize d-block">Glory and Digital </span>
                  <span class="d-flex nw1-clr fw_900 text-capitalize align-items-center gap-3" data-aos="zoom-in-left" data-aos-duration="2400"> Wins! </span>
                </div>
                <p class="n3-clr fs20 max-520 mb-xxl-10 mb-lg-8 mb-5" data-aos="fade-down-right" data-aos-duration="1500">
                  Discover NFTs by category track the latest drops and follow the collections you love Enjoy it
                </p>
                <div class="d-flex flex-wrap cus-z1 position-relative flex-md-nowrap mb-xxl-20 mb-xl-10 mb-2 pb-6 align-items-center gap-xl-8 gap-3 flex-wrap w-100">
                  <NuxtLink to="/contest" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
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
                  <NuxtLink to="/howtoplay" class="how-cont act3-texthover n4-clr fw_700" data-aos="zoom-in-left" data-aos-duration="800"> How It’s Works </NuxtLink>
                </div>
              </div>
              <div class="bn1-odometer pt-0 d-flex align-items-center gap-xxl-10 gap-sm-8 gap-4">
                <div class="odometer__items" data-aos="zoom-in-down" data-aos-duration="1000">
                  <div class="cont d-flex align-items-center">
                    <span class="odometer display-four n4-clr fw_800">
                      <count-up :end-val="100"></count-up>
                    </span>
                    <span class="plus__icon display-four n4-clr fw_800">k</span>
                    <span class="plus__icon display-four n4-clr fw_800">+</span>
                  </div>
                  <p class="n4-clr">Customers</p>
                </div>
                <div class="odometer__items" data-aos="zoom-in-down" data-aos-duration="1000">
                  <div class="cont d-flex align-items-center">
                    <span class="odometer display-four n4-clr fw_800">
                      <count-up :end-val="32"></count-up>
                    </span>
                    <span class="plus__icon display-four n4-clr fw_800">k</span>
                    <span class="plus__icon display-four n4-clr fw_800">+</span>
                  </div>
                  <p class="n4-clr">Artwork</p>
                </div>
                <div class="odometer__items" data-aos="zoom-in-down" data-aos-duration="1000">
                  <div class="cont d-flex align-items-center">
                    <span class="odometer display-four n4-clr fw_800">
                      <count-up :end-val="12"></count-up>
                    </span>
                    <span class="plus__icon display-four n4-clr fw_800">k</span>
                    <span class="plus__icon display-four n4-clr fw_800">+</span>
                  </div>
                  <p class="n4-clr">Owner</p>
                </div>
              </div>
              <NuxtImg :src="arrowV11" alt="img" class="arrow-exv9" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-4">
            <div class="banner-v13-thumbwrap">
              <div class="banner-innerv13-one">
                <MotionEffectMotionFade class="thumb mb-xxl-15 mb-xl-9 mb-lg-6 mb-4">
                  <NuxtImg :src="bannerV13" alt="img" />
                </MotionEffectMotionFade>
                <div class="banner-content-v1customer justify-content-center d-grid pt-0">
                  <ul class="customer-review d-inline-flex cmn-style-flex">
                    <li>
                      <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                        <NuxtImg :src="bannerV13Two" alt="img" />
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
                        <span class="d-grid fs-eight fw_600 n4-clr customer-ratting text-center p-2 p1-bg align-items-center justify-content-center">10k+</span>
                      </NuxtLink>
                    </li>
                  </ul>
                  <span class="d-flex align-items-center gap-2 d-block fw_700 text-uppercase mt-xxl-3 mt-2"> Excellent <span class="fs-four act4-clr">7.000+</span> Reviews </span>
                </div>
              </div>
              <div class="banner-innerv13-two">
                <p class="mb-xxl-10 mb-9 mb-lg-6 mb-4 fs20 n3-clr">Embark on a journey into the realm of NFT glory and digital triumphs!</p>
                <div class="thumb">
                  <NuxtImg :src="bannerV13Two" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Banner Content */} -->

    <!-- {/* Text Animation */} -->
    <MotionFadeTopToDown class="banner-textanimation">
      <div class="textcircle2">
        <div class="text2" ref="textRef">
          <p><span>Explore</span> <span>More</span> <span>Explore</span> <span>More</span> <span>Explore</span></p>
        </div>
      </div>
      <NuxtLink to="#" class="icon-explore">
        <span class="icon">
          <PhArrowUpRight weight="bold" class="ph-bold ph-arrow-up-right" />
        </span>
      </NuxtLink>
    </MotionFadeTopToDown>
    <!-- {/* Text Animation */} -->

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
  </section>
</template>

<style scoped></style>
