<script setup lang="ts">
import { PhArrowRight, PhPlay, PhStar, PhStarHalf } from "@phosphor-icons/vue";
import CountUp from "vue-countup-v3";
import banner9 from "/images/banner/bannerv9.png";
import arrowX from "/images/global/arrow-ex.png";
import nextArrow9 from "/images/global/next-arrowv9.png";
import howbidv9 from "/images/howit/how-bidv9.png";
import nextEx from "/images/howit/next-ex.png";
import nextEx1 from "/images/howit/next-ex1.png";

const isOpen = ref(false);

const handleVideoModal = () => {
  isOpen.value = !isOpen.value;
};

watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
</script>
<template>
  <section class="banner-section-v9 electronic-shape pt-70-fixed n4-bg position-relative">
    <!-- {/* Banner Content */} -->
    <div class="banner-v4wraper pb-20">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-5 col-lg-5 col-md-6">
            <div class="banner-content-v9 pt-xxl-20 pt-12 mt-xl-6 mt-lg-6 mt-5 position-relative">
              <div class="bn-content-box">
                <h4 class="n4-clr mb-xxl-3 mb-2">Electronic Jackpot</h4>
                <h2 class="display-two position-relative cus-z1 fw_900 text-capitalize n4-clr mb-xxl-4 mb-3">
                  <span class="fw_900 text-capitalize d-flex align-items-center gap-xxl-4 gap-3">
                    World
                    <span class="act4-clr fw_800 start-icontext">
                      <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M33.3333 0H26.6667V21.9526L11.1438 6.42978L6.42977 11.1438L21.9526 26.6667H0V33.3333H21.9526L6.42978 48.8562L11.1438 53.5702L26.6667 38.0474V60H33.3333V38.0474L48.8562 53.5702L53.5702 48.8562L38.0474 33.3333H60V26.6667H38.0474L53.5702 11.1438L48.8562 6.42977L33.3333 21.9526V0Z"
                          fill="#FF650E"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="fw_900 text-capitalize d-block">Of Electronic</span>
                  <span class="d-flex nw1-clr fw_900 text-capitalize align-items-center gap-3" data-aos="zoom-in-left" data-aos-duration="2400"> Triumphs! </span>
                </h2>

                <p class="n3-clr fs20 max-520 mb-xxl-10 mb-lg-8 mb-5" data-aos="fade-down-right" data-aos-duration="1500">
                  Get ready for a winning experience like no other! Join us in the thrill of anticipation and be the next lucky winner.
                </p>

                <div class="cus-z1 position-relative w-100">
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
                </div>
              </div>
              <NuxtImg :src="arrowX" alt="img" class="arrow-exv9" />
            </div>
          </div>
          <div class="col-xl-5 col-lg-4 col-md-3">
            <div class="banner-thumbv9">
              <NuxtImg :src="banner9" alt="img" />
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-3">
            <div class="banner-v9-countreview">
              <div class="review-v8 pt-xxl-20 mt-lg-10 mt-6 d-flex align-items-center">
                <div class="d-flex align-items-center gap-xxl-10 gap-xl-6 gap-lg-3 gap-3">
                  <svg width="66" height="16" viewBox="0 0 66 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M65.7071 8.7071C66.0976 8.31658 66.0976 7.68341 65.7071 7.29289L59.3431 0.928927C58.9526 0.538403 58.3195 0.538403 57.9289 0.928927C57.5384 1.31945 57.5384 1.95262 57.9289 2.34314L63.5858 7.99999L57.9289 13.6568C57.5384 14.0474 57.5384 14.6805 57.9289 15.0711C58.3195 15.4616 58.9526 15.4616 59.3431 15.0711L65.7071 8.7071ZM8.74228e-08 9L65 8.99999L65 6.99999L-8.74228e-08 7L8.74228e-08 9Z"
                      fill="black"
                    />
                  </svg>
                  <span class="display-three fw_800 n4-clr">9.5</span>
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
                  <span class="n4-clr fw_600 fs20 d-block">207K Reviews</span>
                </div>
              </div>
              <div class="bn1-odometer d-flex align-items-center">
                <div class="odometer__items" data-aos="zoom-in-down" data-aos-duration="1000">
                  <div class="cont d-flex align-items-center">
                    <span class="odometer display-four n4-clr fw_800">
                      <count-up :end-val="1750"></count-up>
                    </span>
                    <span class="plus__icon display-four n4-clr fw_800">+</span>
                  </div>
                  <p class="n4-clr">Verified Users</p>
                </div>
                <div class="odometer__items" data-aos="zoom-in-up" data-aos-duration="1000">
                  <div class="cont d-flex align-items-center">
                    <span class="odometer display-four n4-clr fw_800">
                      <count-up :end-val="15"></count-up>
                    </span>
                  </div>
                  <p>Years on the market</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Banner Content */} -->

    <!-- {/* Next Draw wrap */} -->
    <div class="nexdraw-wrapperv9 py-xxl-15 py-xl-12 py-11 position-relative">
      <div class="container">
        <div class="nextdraw-innerwrapv9 gap-4">
          <div class="howit-video position-relative" @click="handleVideoModal">
            <NuxtImg :src="howbidv9" alt="img" />
            <button class="bn-vid popup-video">
              <PhPlay weight="fill" class="ti ti-player-play-filled p1-clr fs-five" />
            </button>
          </div>
          <div class="howit-nexdrawv9 text-center position-relative">
            <span class="fs20 fw_700 n4-clr d-block mb-xl-4 mb-lg-3 mb-2">How it Works</span>
            <ul class="entry-win d-flex justify-content-center align-items-center gap-3">
              <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1000">
                <NuxtLink to="#" class="fs-four act4-clr"> Entry </NuxtLink>
              </li>
              <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1200">
                <PhArrowRight class="ti ti-arrow-right fs-four act4-clr" />
              </li>
              <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1400">
                <NuxtLink to="#" class="fs-four act4-clr"> Draw </NuxtLink>
              </li>
              <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1600">
                <PhArrowRight class="ti ti-arrow-right fs-four act4-clr" />
              </li>
              <li class="entry-win-item" data-aos="fade-down-right" data-aos-duration="2000">
                <NuxtLink to="#" class="fs-four act4-clr"> Win </NuxtLink>
              </li>
            </ul>
            <NuxtImg :src="nextArrow9" alt="img" class="next-arrowv9" />
          </div>
          <div class="watch-live-wrap">
            <div class="watch-thumb cmn-width">
              <NuxtImg :src="nextEx" alt="img" class="radius-circle" />
            </div>
            <NuxtLink to="/contest" class="draw-watch cmn-width d-flex align-items-center justify-content-center position-relative">
              <NuxtImg :src="nextEx1" alt="img" class="radius-circle" />
              <span class="ex-text fs20 fw_700 nw1-clr">Explore</span>
            </NuxtLink>
          </div>
        </div>
      </div>
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
    </div>
    <!-- {/* Next Draw wrap */} -->
    <VideoModal :handleVideoModal="handleVideoModal" :isOpen="isOpen" />
  </section>
</template>

<style scoped></style>
