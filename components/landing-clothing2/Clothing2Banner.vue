<script setup lang="ts">
import { PhArrowRight, PhArrowUpRight, PhStar, PhStarHalf } from "@phosphor-icons/vue";
import useCircularText from "../../hooks/useCircularText";
import bannerSmall1 from "/images/banner/banner16-small1.png";
import bannerSmall2 from "/images/banner/banner16-small2.png";
import bannerV16 from "/images/banner/bannerv16.png";
import lifeArrow from "/images/global/life-arrow.png";

const textRef = useCircularText({ rotationAngle: 10 });
</script>
<template>
  <div class="banner-section-v16 pt-70-fixed n4-bg position-relative over overflow-hidden">
    <!--Banner Content -->

    <div class="banner-v15wraper pb-15 pt-xxl-3">
      <div class="container">
        <div class="row align-items-lg-center justify-content-lg-center">
          <div class="col-xl-9 col-lg-8 col-md-11">
            <div class="banner-content-v15 banner-content-v16 pt-xxl-20 pt-12 mt-xl-6 mt-md-6 mt-0 position-relative">
              <div class="d-flex mb-sm-4 mb-4 align-items-center gap-xxl-8 gap-lg-6 gap-4 flex-wrap">
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
              <div class="bn-content-box pb-sm-0 pb-3">
                <div class="display-three position-relative cus-z1 fw_800 text-capitalize n0-clr mb-xxl-5 mb-3">
                  <span class="fw_800 text-capitalize d-flex align-items-center flex-wrap gap-xxl-4 gap-sm-0">Your Chance in Our Clothing</span>
                  <span class="d-flex text-capitalize align-items-center n4-clr gap-3 text-uppercase" data-aos="zoom-in-up" data-aos-duration="2200">
                    <span class="fw_800 real-underline act4-clr d-block position-relative">Giveaway!</span>
                  </span>
                </div>
                <p class="nw2-clr fs18 max-520 mb-xxl-10 mb-lg-8 mb-5" data-aos="fade-down-right" data-aos-duration="1500">
                  We are giving you the opportunity to revamp your wardrobe and embrace the latest trends. participating in our clothing giveaway
                </p>
                <div class="d-flex flex-wrap cus-z1 position-relative flex-md-nowrap align-items-center gap-xl-8 gap-3 flex-wrap w-100 mb-xxl-20 mb-xl-10 mb-lg-8 mb-7">
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
                  <NuxtLink to="/howtoplay" class="how-cont act3-texthover nw1-clr fw_700" data-aos="zoom-in-left" data-aos-duration="800"> How It’s Works </NuxtLink>
                </div>
                <div class="d-flex align-items-center gap-xxl-6 gap-4 gap-3 mb-xxl-20 mb-xl-10 mb-lg-8 mb-6">
                  <div class="bannerv16-small1" data-aos="zoom-in-down" data-aos-duration="1600">
                    <NuxtImg :src="bannerSmall1" alt="img" />
                  </div>
                  <div class="bannerv16-small1" data-aos="zoom-in-down" data-aos-duration="1800">
                    <NuxtImg :src="bannerSmall2" alt="img" />
                  </div>
                </div>
                <div class="review-v8 d-flex align-items-center">
                  <div class="d-flex align-items-center gap-xxl-10 gap-xl-6 gap-lg-3 gap-3">
                    <svg width="66" height="16" viewBox="0 0 66 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M65.7071 8.7071C66.0976 8.31658 66.0976 7.68341 65.7071 7.29289L59.3431 0.928927C58.9526 0.538403 58.3195 0.538403 57.9289 0.928927C57.5384 1.31945 57.5384 1.95262 57.9289 2.34314L63.5858 7.99999L57.9289 13.6568C57.5384 14.0474 57.5384 14.6805 57.9289 15.0711C58.3195 15.4616 58.9526 15.4616 59.3431 15.0711L65.7071 8.7071ZM8.74228e-08 9L65 8.99999L65 6.99999L-8.74228e-08 7L8.74228e-08 9Z"
                        fill="black"
                      />
                    </svg>
                    <span class="display-three fw_800 nw1-clr">9.5</span>
                  </div>
                  <div class="review-star">
                    <ul class="ratting d-flex align-items-center gap-1 mb-xxl-1 mb-1">
                      <li>
                        <PhStar weight="fill" class="ph-fill ph-star fs-four act3-clr" />
                      </li>
                      <li>
                        <PhStar weight="fill" class="ph-fill ph-star fs-four act3-clr" />
                      </li>
                      <li>
                        <PhStar weight="fill" class="ph-fill ph-star fs-four act3-clr" />
                      </li>
                      <li>
                        <PhStar weight="fill" class="ph-fill ph-star fs-four act3-clr" />
                      </li>
                      <li>
                        <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-four act3-clr" />
                      </li>
                    </ul>
                    <span class="nw1-clr fw_600 fs20 d-block">207K Reviews</span>
                  </div>
                </div>
              </div>
              <NuxtImg :src="lifeArrow" alt="img" class="bannerv16-arrow" />
            </div>
          </div>
        </div>
      </div>
      <div class="banner-v15-wrap-left banner-v16-wrap-customright" data-aos="zoom-in-up" data-aos-duration="1600">
        <!--Text Animation -->

        <div class="banner-textanimation">
          <div class="textcircle2">
            <div class="text2" ref="textRef">
              <p><span>Explore</span> <span>More</span> <span>Explore</span> <span>More</span> <span>Explore</span></p>
            </div>
          </div>
          <NuxtLink to="#" class="icon-explore">
            <span class="icon">
              <PhArrowUpRight weight="bold" class="ph-bold ph-arrow-up-right n4-clr"></PhArrowUpRight>
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!--Banner Content -->

    <!--mouse animation -->

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

    <!--mouse animation -->

    <!--bannerv16 thumb -->

    <div class="bannerv16-thumb">
      <NuxtImg :src="bannerV16" alt="img" />
    </div>

    <!--bannerv16 thumb -->
  </div>
</template>

<style scoped></style>
