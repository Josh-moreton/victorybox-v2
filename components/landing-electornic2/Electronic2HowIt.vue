<script setup lang="ts">
import VideoHowItWork from "../VideoHowItWork.vue";
import icon from "/images/global/section-icon.png";
import howItVid10 from "/images/howit/howit-vid10.png";

defineProps<{
  image?: string;
}>();

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
  <section class="howit-work-section howit-work-sectionv10 position-relative n0-bg pt-120 pb-120">
    <!-- {/* Section Header */} -->
    <div class="container mb-xxl-15 mb-lg-11 mb-9">
      <div class="row g-xl-4 pt-5 pt-lg-0 g-4 justify-content-md-between justify-content-center">
        <div class="col-xl-5 col-lg-6 col-md-7">
          <div class="section__title text-md-start text-md-start text-center">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap justify-content-md-start justify-content-center align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="icon" alt="img" />
              <h5 class="s1-clr fw_700">How It Works</h5>
            </div>

            <h2 class="display-four d-block n4-clr">
              Your Ultimate
              <span class="d-flex align-items-center justify-content-md-start justify-content-center gap-2">
                <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Guide to </span>
                <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Winning! </span>
              </span>
            </h2>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-5 col-sm-5">
          <VideoHowItWork :handle-video-modal="handleVideoModal" :isOpen="isOpen" :image="image || howItVid10" />
        </div>
      </div>
    </div>
    <!-- {/* Section Header */} -->

    <!-- {/* Work Body */} -->
    <div class="container">
      <div class="row g-6">
        <div class="col-lg-4 col-md-6 border-endcustom" data-aos="zoom-in" data-aos-duration="1000">
          <div class="work-item1 text-md-start text-center position-relative p-xxl-7 p-xl-4 p-3">
            <span class="icons-step m-md-0 m-auto cmn-60 radius-circle d-center p1-bg">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.6654 15.9997H26.6654M18.6654 21.333H26.6654M18.6654 26.6663H26.6654M5.33203 6.66634C5.33203 6.31272 5.47251 5.97358 5.72256 5.72353C5.9726 5.47348 6.31174 5.33301 6.66536 5.33301H25.332C25.6857 5.33301 26.0248 5.47348 26.2748 5.72353C26.5249 5.97358 26.6654 6.31272 26.6654 6.66634V9.33301C26.6654 9.68663 26.5249 10.0258 26.2748 10.2758C26.0248 10.5259 25.6857 10.6663 25.332 10.6663H6.66536C6.31174 10.6663 5.9726 10.5259 5.72256 10.2758C5.47251 10.0258 5.33203 9.68663 5.33203 9.33301V6.66634ZM5.33203 17.333C5.33203 16.9794 5.47251 16.6402 5.72256 16.3902C5.9726 16.1401 6.31174 15.9997 6.66536 15.9997H11.9987C12.3523 15.9997 12.6915 16.1401 12.9415 16.3902C13.1916 16.6402 13.332 16.9794 13.332 17.333V25.333C13.332 25.6866 13.1916 26.0258 12.9415 26.2758C12.6915 26.5259 12.3523 26.6663 11.9987 26.6663H6.66536C6.31174 26.6663 5.9726 26.5259 5.72256 26.2758C5.47251 26.0258 5.33203 25.6866 5.33203 25.333V17.333Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h4 class="n5-clr mb-xxl-3 mb-2 mt-xxl-7 mt-xl-5 mt-3">
              <NuxtLink to="#">Choose Prize</NuxtLink>
            </h4>
            <p class="fs18 n3-clr m-md-0 m-auto">Browse through our exciting selection of lottery game. From jackpot extravaganza to themed draws,</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 border-endcustom" data-aos="zoom-in" data-aos-duration="1500">
          <div class="work-item1 text-md-start text-center position-relative p-xxl-7 p-xl-4 p-3">
            <span class="icons-step m-md-0 m-auto cmn-60 radius-circle d-center p1-bg">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.33203 5.33301V5.34634M10.6654 5.33301V5.34634M15.9987 5.33301V5.34634M21.332 5.33301V5.34634M5.33203 10.6663V10.6797M5.33203 15.9997V16.013M5.33203 21.333V21.3463M10.6654 13.333C10.6654 12.6258 10.9463 11.9475 11.4464 11.4474C11.9465 10.9473 12.6248 10.6663 13.332 10.6663H23.9987C24.7059 10.6663 25.3842 10.9473 25.8843 11.4474C26.3844 11.9475 26.6654 12.6258 26.6654 13.333V23.9997C26.6654 24.7069 26.3844 25.3852 25.8843 25.8853C25.3842 26.3854 24.7059 26.6663 23.9987 26.6663H13.332C12.6248 26.6663 11.9465 26.3854 11.4464 25.8853C10.9463 25.3852 10.6654 24.7069 10.6654 23.9997V13.333Z"
                  stroke="#0E0E0E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h4 class="n5-clr mb-xxl-3 mb-2 mt-xxl-7 mt-xl-5 mt-3">
              <NuxtLink to="#"> Await the Draw</NuxtLink>
            </h4>
            <p class="fs18 n3-clr m-md-0 m-auto">Get ready for the draw! Our transparent and fair draw processes ensure that every player has an could be you!</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 border-endcustom" data-aos="zoom-in" data-aos-duration="1900">
          <div class="work-item1 text-md-start text-center position-relative p-xxl-7 p-xl-4 p-3">
            <span class="icons-step m-md-0 m-auto cmn-60 radius-circle d-center p1-bg">
              <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 1.66699V4.33366M17 9.66699V12.3337M17 17.667V20.3337M3.66667 1.66699H22.3333C23.0406 1.66699 23.7189 1.94794 24.219 2.44804C24.719 2.94814 25 3.62641 25 4.33366V8.33366C24.2928 8.33366 23.6145 8.61461 23.1144 9.11471C22.6143 9.61481 22.3333 10.2931 22.3333 11.0003C22.3333 11.7076 22.6143 12.3858 23.1144 12.8859C23.6145 13.386 24.2928 13.667 25 13.667V17.667C25 18.3742 24.719 19.0525 24.219 19.5526C23.7189 20.0527 23.0406 20.3337 22.3333 20.3337H3.66667C2.95942 20.3337 2.28115 20.0527 1.78105 19.5526C1.28095 19.0525 1 18.3742 1 17.667V13.667C1.70724 13.667 2.38552 13.386 2.88562 12.8859C3.38572 12.3858 3.66667 11.7076 3.66667 11.0003C3.66667 10.2931 3.38572 9.61481 2.88562 9.11471C2.38552 8.61461 1.70724 8.33366 1 8.33366V4.33366C1 3.62641 1.28095 2.94814 1.78105 2.44804C2.28115 1.94794 2.95942 1.66699 3.66667 1.66699Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h4 class="n5-clr mb-xxl-3 mb-2 mt-xxl-7 mt-xl-5 mt-3">
              <NuxtLink to="#">Purchase Your Ticket</NuxtLink>
            </h4>
            <p class="fs18 n3-clr m-md-0 m-auto">Once you have selected your numbers, proceed to purchase your lottery ticket. and secure on your</p>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Work Body */} -->
  </section>
  <VideoModal :handle-video-modal="handleVideoModal" :is-open="isOpen" />
</template>

<style scoped></style>
