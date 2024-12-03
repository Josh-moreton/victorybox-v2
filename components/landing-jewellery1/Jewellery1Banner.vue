<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import bannerbv7j1 from "/images/banner/banner-v7j1.png";
import banner from "/images/banner/banner-v7j2.png";
import bv7c1 from "/images/banner/bv7c1.png";
import bv7c2 from "/images/banner/bv7c2.png";
import bv7c3 from "/images/banner/bv7c3.png";

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
  <section class="banner-section-v4 banner-section-v7 pt-70-fixed n4-bg position-relative">
    <!-- {/* Banner Content */} -->
    <div class="banner-v7wraper pt-xxl-8 pt-xl-16 pt-lg-4">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-4 col-md-4 order-1 order-lg-0">
            <MotionEffectMotionFadeLeft class="banner-v7-thumb position-relative">
              <NuxtImg :src="banner" alt="img" />
              <NuxtLink
                to="/about"
                class="banner-v7-startnow text-center py-xxl-8 py-xl-7 py-6 py-lg-5 px-xxl-6 px-xl-4 px-3 d-inline-flex justify-content-center align-items-center radius100 act4-bg"
              >
                <span class="box">
                  <span class="d-block mb-xxl-3 mb-3"> Get Started Now </span>
                  <span class="cmn-48 m-auto icon radius-circle d-center">
                    <PhArrowRight weight="bold" class="ph-bold ph-arrow-right n0-clr"></PhArrowRight>
                  </span>
                </span>
              </NuxtLink>
            </MotionEffectMotionFadeLeft>
          </div>
          <div class="col-lg-7 col-md-8">
            <div class="banner-content-v4 banner-content-v7 pt-xxl-20 pt-12 mt-6">
              <div class="bn-content-box">
                <h4 class="n4-clr mb-xxl-3 mb-3">Glamour in Every Draw</h4>
                <div class="display-two position-relative cus-z1 fw_900 text-capitalize n4-clr mb-xxl-5 mb-4">
                  <div class="d-flex text-capitalize align-items-center n4-clr gap-3 text-uppercase" data-aos="zoom-in-up" data-aos-duration="2200">
                    <span class="fw_900">Play for Your</span>
                    <LandingJewellery1BannerVideo :handle-video-modal="handleVideoModal" :is-open="isOpen" />
                  </div>
                  <span class="fw_900 text-capitalize d-block">Chance Jewelry</span>
                  <span class="fw_900 act4-clr d-block mt-xxl-0 mt-lg-5 mt-1">Wins!</span>
                </div>
                <div class="row g-xxl-6 g-4">
                  <div class="col-xxl-6 col-xl-8 col-lg-8 col-md-8 col-sm-9">
                    <p class="n3-clr fs18 fw_500 mb-xxl-10 mb-lg-8 mb-5" data-aos="fade-down-right" data-aos-duration="1500">
                      Get ready for a winning experience like no other! Join us in the thrill of anticipation and be the next lucky winner.
                    </p>
                    <div class="d-flex cus-z1 position-relative">
                      <NuxtLink to="/contact" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
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
                    </div>
                    <div class="banner-content-v7customer mt-10 pt-xxl-20 pb-sm-0 pb-3 d-flex align-items-center justify-content-lg-end gap-xxl-5 gap-xl-3 gap-2">
                      <ul class="customer-review cmn-style-flex">
                        <li>
                          <NuxtLink to="#" class="customer-revew-item act3-bg d-flex align-items-center justify-content-center">
                            <NuxtImg :src="bv7c1" alt="img" />
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="#" class="customer-revew-item act3-bg d-flex align-items-center justify-content-center">
                            <NuxtImg :src="bv7c2" alt="img" />
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="#" class="customer-revew-item act3-bg d-flex align-items-center justify-content-center">
                            <NuxtImg :src="bv7c3" alt="img" />
                          </NuxtLink>
                        </li>
                      </ul>
                      <span class="fw_600 text-uppercase">
                        <span class="d-block fs20 fw_600"> Treasures </span>
                        <span class="d-block fs20 fw_600"> Every Time </span>
                      </span>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-4 col-lg-4 col-md-4 col-sm-3">
                    <MotionEffectMotionFadeRight class="banner-v7-thumb-small">
                      <NuxtImg :src="bannerbv7j1" alt="img" />
                    </MotionEffectMotionFadeRight>
                  </div>
                </div>
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
        <span class="n4-clr fs18 d-block fw_600"> Scroll </span>
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
  <VideoModal :handle-video-modal="handleVideoModal" :is-open="isOpen" />
</template>

<style scoped></style>
