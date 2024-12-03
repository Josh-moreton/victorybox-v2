<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import bike1Img from "/images/bike/b1.png";
import bike2Img from "/images/bike/b2.png";
import bike3Img from "/images/bike/b3.png";
import bike4Img from "/images/bike/b4.png";
import bike5Img from "/images/bike/b5.png";
import bike6Img from "/images/bike/b6.png";
import globalIconImg from "/images/global/section-icon.png";
import man1Img from "/images/man-global/t1.png";
import man2Img from "/images/man-global/t2.png";
import man3Img from "/images/man-global/t3.png";
import man4Img from "/images/man-global/t4.png";
import man5Img from "/images/man-global/t5.png";
import man6Img from "/images/man-global/t6.png";

defineProps<{
  sectionBg?: boolean;
  winnerImage?: {
    winnerImage1: string;
    winnerImage2: string;
    winnerImage3: string;
    winnerImage4: string;
    winnerImage5: string;
    winnerImage6: string;
  };
  prizeImages?: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    image6: string;
  };
}>();
</script>
<template>
  <section :class="`previous-winner previous-winner-v9 pt-120 pb-120 ${sectionBg ? 'winbg' : ''}`">
    <!-- {/* Section Header */} -->
    <div class="container">
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-10 mb-xl-8 mb-6">
        <div class="col-xl-5 col-lg-6">
          <div class="section__title text-sm-start text-center mb-lg-0 mb-4">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap align-items-center justify-content-sm-start justify-content-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="globalIconImg" alt="img" />
              <h5 class="s1-clr fw_700">People In Illinois Are</h5>
            </div>

            <h2 class="display-four d-block n4-clr mb-xxl-10 mb-xl-7 mb-sm-5 mb-4">
              Meet Our
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Previous </span>
              <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Winners </span>
            </h2>

            <NuxtLink to="/contest-details" class="kewta-btn d-inline-flex align-items-center">
              <span class="kew-text act3-bg n4-clr">View All Winners</span>
              <div class="kew-arrow act3-bg n4-clr">
                <div class="kt-one">
                  <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                </div>
                <div class="kt-two">
                  <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="d-grid d-sm-flex align-items-center gap-xxl-6 gap-4">
            <div class="meet-previous-item">
              <div class="thumb-man">
                <NuxtImg :src="winnerImage?.winnerImage2 || man1Img" alt="img" class="mimg" />
                <div class="man-bike">
                  <NuxtImg :src="prizeImages?.image4 || bike4Img" alt="img" />
                </div>
              </div>
            </div>
            <div class="meet-previous-item">
              <div class="thumb-man">
                <NuxtImg :src="winnerImage?.winnerImage3 || man2Img" alt="img" class="mimg" />
                <div class="man-bike">
                  <NuxtImg :src="prizeImages?.image3 || bike3Img" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Previous Body */} -->
    <div class="container">
      <div class="row g-6 justify-content-center">
        <div class="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration="1200">
          <div class="meet-previous-item">
            <div class="thumb-man">
              <NuxtImg :src="winnerImage?.winnerImage1 || man3Img" alt="img" class="mimg" />
              <div class="man-bike">
                <NuxtImg :src="prizeImages?.image1 || bike1Img" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-left" data-aos-duration="1400">
          <div class="meet-previous-item">
            <div class="thumb-man">
              <NuxtImg :src="winnerImage?.winnerImage4 || man4Img" alt="img" class="mimg" />
              <div class="man-bike">
                <NuxtImg :src="prizeImages?.image2 || bike2Img" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration="1600">
          <div class="meet-previous-item">
            <div class="thumb-man">
              <NuxtImg :src="winnerImage?.winnerImage5 || man5Img" alt="img" class="mimg" />
              <div class="man-bike">
                <NuxtImg :src="prizeImages?.image5 || bike5Img" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-left" data-aos-duration="1800">
          <div class="meet-previous-item">
            <div class="thumb-man">
              <NuxtImg :src="winnerImage?.winnerImage6 || man6Img" alt="img" class="mimg" />
              <div class="man-bike">
                <NuxtImg :src="prizeImages?.image6 || bike6Img" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Previous Body */} -->
  </section>
</template>

<style scoped></style>
