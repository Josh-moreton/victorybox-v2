<script setup lang="ts">
import HowItWorkVideo from "./HowItWorkVideo.vue";
import sectionIcon from "/images/global/global-picon.png";
import how1Arrow from "/images/global/how1-arrow.png";

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
  <section class="howit-work-section position-relative n2-bg pt-120 pb-120">
    <!--Section Header-->
    <div class="container">
      <div class="row g-xl-4 pt-5 pt-lg-0 g-4 justify-content-between align-items-center mb-xxl-15 mb-xl-11 mb-11">
        <div class="col-xl-5 col-lg-6 col-md-7">
          <div class="section__title">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="sectionIcon" alt="img" />
              <h5 class="fw_700 p1-clr">How It Works</h5>
            </div>
            <div>
              <h2 class="display-four d-block n0-clr">
                Your Ultimate
                <span class="d-flex align-items-center gap-2">
                  <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Guide to </span>
                  <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Winning! </span>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-1 d-lg-block d-none">
          <NuxtImg :src="how1Arrow" alt="img" class="m-howarrow" />
        </div>
        <div class="col-xl-4 col-lg-4 col-md-5 col-sm-5">
          <HowItWorkVideo :handle-video-modal="handleVideoModal" :is-open="isOpen" />
        </div>
      </div>
    </div>
    <!--Section Header-->

    <!--Work Body-->
    <div class="container">
      <div class="row g-6">
        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1000">
          <div class="work-item1 position-relative">
            <span class="text-uppercase p1-clr fw_700 fs20 d-block mb-xxl-5 mb-3"> STEP_01 </span>
            <h2 class="n0-clr mb-xxl-11 mb-xl-8 mb-lg-6 mb-5">
              <span class="d-block"> Choose </span>
              <span> Prize </span>
            </h2>
            <p class="fs18 nw4-clr">
              Choose your desired prize, answer correctly, then press pick tickets, answer correctly, then press enter now for a
              <NuxtLink to="/contest-details" class="p1-clr"> chance to win! </NuxtLink>
            </p>
            <span class="number-shadow"> 1 </span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1500">
          <div class="work-item1 position-relative">
            <span class="text-uppercase p1-clr fw_700 fs20 d-block mb-xxl-5 mb-3"> STEP_02 </span>
            <h2 class="n0-clr mb-xxl-11 mb-xl-8 mb-lg-6 mb-5">
              <span class="d-block"> Watch the </span>
              <span> Draw LIVE </span>
            </h2>
            <p class="fs18 nw4-clr">
              <NuxtLink to="/contest-details" class="p1-clr"> Join us live </NuxtLink>
              on Facebook for the draw and see if you&apos;re the lucky for the draw and see if winner! Be ready for a potential call
            </p>
            <span class="number-shadow"> 2 </span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1800">
          <div class="work-item1 position-relative">
            <span class="text-uppercase p1-clr fw_700 fs20 d-block mb-xxl-5 mb-3"> STEP_03 </span>
            <h2 class="n0-clr mb-xxl-11 mb-xl-8 mb-lg-6 mb-md-5 mb-2">
              <span class="d-block"> Get Your </span>
              <span> Prize </span>
            </h2>
            <p class="fs18 nw4-clr">Limited tickets ensure fixed odds. Competitions proceed, creating better chances. Join 7,000+ winners in anticipation</p>
            <span class="number-shadow"> 3 </span>
          </div>
        </div>
      </div>
    </div>
    <!--  Work Body  -->
  </section>
  <VideoModal :handle-video-modal="handleVideoModal" :isOpen="isOpen" />
</template>

<style scoped></style>
