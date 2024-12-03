<script setup lang="ts">
import MotionFadeTopToDown from "../motionEffect/MotionFadeTopToDown.vue";
import icon from "/images/global/section-icon.png";
import howIt19 from "/images/howit/howit19.png";

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
  <section class="howit-work-section howit-work-sectionv9 position-relative n0-bg pt-120 pb-120" id="down-scroll">
    <!-- {/* Section Header */} -->
    <div class="container mb-xxl-18 mb-lg-12 mb-7">
      <div class="row g-xl-4 pt-5 pt-lg-0 g-4 justify-content-md-between justify-content-center align-items-center">
        <div class="col-xl-5 col-lg-6 col-md-7">
          <div class="section__title text-md-start text-md-start text-center">
            <MotionFadeTopToDown class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap justify-content-md-start justify-content-center align-items-center gap-3">
              <NuxtImg :src="icon" alt="img" />
              <h5 class="s1-clr fw_700">How It Works</h5>
            </MotionFadeTopToDown>

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
          <VideoHowItWork :handle-video-modal="handleVideoModal" :is-open="isOpen" :image="howIt19" />
        </div>
      </div>
    </div>
    <!-- {/* Section Header */} -->

    <!-- {/* Work Body */} -->
    <div class="container">
      <div class="row g-6">
        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1000">
          <div class="work-item1 work-itemv14 position-relative">
            <span class="text-uppercase s1-clr fw_700 fs20 d-block mb-xxl-5 mb-3">STEP_01</span>
            <h2 class="n1-clr mb-xxl-11 mb-xl-8 mb-lg-6 mb-5">
              <span class="d-block">Choose</span>
              <span>Prize</span>
            </h2>
            <p class="fs18 n3-clr">
              Choose your desired prize, answer correctly, then press pick tickets, answer correctly, then press enter now for a
              <NuxtLink to="#" class="s1-clr"> chance to win! </NuxtLink>
            </p>
            <span class="number-shadow">1</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1500">
          <div class="work-item1 work-itemv14 position-relative">
            <span class="text-uppercase s1-clr fw_700 fs20 d-block mb-xxl-5 mb-3">STEP_02</span>
            <h2 class="n1-clr mb-xxl-11 mb-xl-8 mb-lg-6 mb-5">
              <span class="d-block">Watch the</span>
              <span>Draw LIVE</span>
            </h2>
            <p class="fs18 n34-clr">
              <NuxtLink to="#" class="s1-clr"> Join us live </NuxtLink>{" "} on Facebook for the draw and see if you are the lucky for the draw and see if winner! Be ready for a potential call
            </p>
            <span class="number-shadow">2</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1800">
          <div class="work-item1 work-itemv14 position-relative">
            <span class="text-uppercase s1-clr fw_700 fs20 d-block mb-xxl-5 mb-3">STEP_03</span>
            <h2 class="n1-clr mb-xxl-11 mb-xl-8 mb-lg-6 mb-md-5 mb-2">
              <span class="d-block">Get Your</span>
              <span>Prize</span>
            </h2>
            <p class="fs18 n3-clr">Limited tickets ensure fixed odds. Competitions proceed, creating better chances. Join 7,000+ winners in anticipation</p>
            <span class="number-shadow">3</span>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Work Body */} -->
  </section>
  <VideoModal :handle-video-modal="handleVideoModal" :is-open="isOpen" />
</template>

<style scoped></style>
