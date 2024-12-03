<script setup lang="ts">
import ff1 from "/images/howit/ff1.png";
import ff2 from "/images/howit/ff2.png";
import ff3 from "/images/howit/ff3.png";
</script>
<template>
  <section class="feature-section winbg pt-120 pb-120">
    <!-- {/* Section Header */} -->
    <div class="container">
      <div class="row g-xl-4 g-3 justify-content-center mb-xxl-10 mb-xl-8 mb-7">
        <div class="col-lg-6">
          <div class="section__title text-center">
            <span class="display-four d-block n4-clr" data-aos="fade-down-left" data-aos-duration="1600"> Lucky-Rewards </span>
            <p class="n3-clr fs20 mt-xxl-4 mt-3" data-aos="zoom-in-down" data-aos-duration="1800">
              We at Lottovibe offer you the most generous and innovative lotto bonuses. How would you feel with an attractive deposit bonus, a risk free lottery ticket
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Section Header */} -->
    <div class="container">
      <div class="row g-xxl-6 g-4">
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in-left" data-aos-duration="1200">
          <div class="feature-items-v9 n0-bg text-center py-xxl-10 py-xl-7 py-lg-5 py-4 px-3 border radius24">
            <div class="icon-big p-xxl-3 p-2 d-center nw4-border radius-circle m-auto mb-xxl-5 mb-3">
              <NuxtImg :src="ff1" alt="img" />
            </div>
            <h4 class="mb-xxl-3 mb-2">
              <NuxtLink to="/winners" class="n5-clr d-block s1-texthover"> Collect Points </NuxtLink>
            </h4>
            <p class="cont-big n3-clr m-auto">After playing your ticket, win or not, enter the code from your ticket to collect Lucke-Rewards points.</p>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in-left" data-aos-duration="1400">
          <div class="feature-items-v9 n0-bg text-center py-xxl-10 py-xl-7 py-lg-5 py-4 px-3 border radius24">
            <div class="icon-big p-xxl-3 p-2 d-center nw4-border radius-circle m-auto mb-xxl-5 mb-3">
              <NuxtImg :src="ff2" alt="img" />
            </div>
            <h4 class="mb-xxl-3 mb-2">
              <NuxtLink to="/contest" class="n5-clr d-block s1-texthover"> Enter Drawings </NuxtLink>
            </h4>
            <p class="cont-big n3-clr m-auto">Use your Lucke-Rewards points to enter drawings for a second chance to win.So why are you waiting for?</p>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in-left" data-aos-duration="1600">
          <div class="feature-items-v9 n0-bg text-center py-xxl-10 py-xl-7 py-lg-5 py-4 px-3 border radius24">
            <div class="icon-big p-xxl-3 p-2 d-center nw4-border radius-circle m-auto mb-xxl-5 mb-3">
              <NuxtImg :src="ff3" alt="img" />
            </div>
            <h4 class="mb-xxl-3 mb-2">
              <NuxtLink to="/affiliate" class="n5-clr d-block s1-texthover"> Promotions & Drawings </NuxtLink>
            </h4>
            <p class="cont-big n3-clr m-auto">You’ve earned your points and are ready to play again. Check out the latest Lucke-Rewards drawings</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
;
