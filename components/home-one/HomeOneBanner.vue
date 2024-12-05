<script setup lang="ts">
import { PhArrowRight, PhStar } from "@phosphor-icons/vue";
import CountUp from "vue-countup-v3";
import BannerOneSlider from "./BannerOneSlider.vue";
import customer1 from "/images/banner/customer1.png";
import customer2 from "/images/banner/customer2.png";
import customer3 from "/images/banner/customer3.png";
import customer4 from "/images/banner/customer4.png";
import kewtaArrow from "/images/banner/kewta-arrow.png";
import win from "/images/banner/win.png";
</script>

<template>
  <div class="banner-section-v1 pt-70-fixed n4-bg position-relative overflow-hidden overflow-hidden">
    <!--Banner Content -->
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8">
          <div class="banner-content-v1">
            <div class="custom-display n3-clr mb-6" data-aos="zoom-in-up" data-aos-duration="1000">
              Could you be our
              <div class="d-xxl-flex d-grid align-items-center justify-content-between winner-span gap-xxl-5 gap-4 flex-xxl-nowrap flex-wrap">
                <span class="wins n3-clr d-flex align-items-center gap-6" data-aos="zoom-in-down" data-aos-duration="2000">
                  next
                  <span class="wins p1-clr">
                    winner?
                    <svg viewBox="0 0 355 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.92099 12.8063C56.8373 3.14121 205.75 -10.0362 354.071 14.5747" stroke="#AEFE3A" />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
