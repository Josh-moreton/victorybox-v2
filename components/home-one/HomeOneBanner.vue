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
            <div class="d-flex mb-sm-3 mb-5 align-items-center gap-xxl-8 gap-lg-6 gap-4 flex-wrap">
              <ul class="entry-win d-flex align-items-center gap-3">
                <li id="{1}" class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1000">
                  <NuxtLink to="#" class="fs-four p1-clr"> Entry </NuxtLink>
                </li>
                <li id="{2}" class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1200">
                  <PhArrowRight class="ti ti-arrow-right fs-four p1-clr"></PhArrowRight>
                </li>
                <li id="{3}" class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1400">
                  <NuxtLink to="#" class="fs-four p1-clr"> Draw </NuxtLink>
                </li>
                <li id="{4}" class="entry-win-item" data-aos="fade-down-right" data-aos-duration="1600">
                  <PhArrowRight class="ti ti-arrow-right fs-four p1-clr"></PhArrowRight>
                </li>
                <li id="{5}" class="entry-win-item">
                  <NuxtLink to="#" class="fs-four p1-clr"> Win </NuxtLink>
                </li>
              </ul>
              <NuxtLink to="/contest" class="custom-bigarrow">
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
            <div class="custom-display n0-clr mb-6" data-aos="zoom-in-up" data-aos-duration="1000">
              Could you be our
              <div class="d-xxl-flex d-grid align-items-center justify-content-between winner-span gap-xxl-5 gap-4 flex-xxl-nowrap flex-wrap">
                <span class="wins nw1-clr d-flex align-items-center gap-6" data-aos="zoom-in-down" data-aos-duration="2000">
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
