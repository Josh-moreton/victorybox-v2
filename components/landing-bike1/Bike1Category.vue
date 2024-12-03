<script setup lang="ts">
// components/CategoryBanner.js
import { bike1CategoryData } from "@/../public/data/bike1PageData";
import { PhArrowUpRight } from "@phosphor-icons/vue";
import gorgiousShape from "/images/global-shape/gorsious-shape.png";
import icon from "/images/global/global-picon.png";

defineProps({
  categoryData: {
    type: Array as () => {
      img: string;
      name: string;
    }[],
    required: false,
    default: () => bike1CategoryData,
  },
  title: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <section class="category-v3-banner category-v8-banner pt-120 pb-100 overflow-hidden">
    <div class="container">
      <div class="row g-xxl-6 g-4">
        <div class="col-lg-3">
          <div class="cate-gorgiousbox">
            <div class="section__title mb-xxl-15 mb-xl-10 mb-8">
              <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
                <NuxtImg :src="icon" :width="44" alt="img" />
                <h5 class="p1-clr fw_700">Car Category</h5>
              </div>
              <span class="fs-two fw_800 d-block n0-clr mb-xxl-5 mb-3">
                {{ title || "Bike" }} By
                <span class="d-flex fs-two align-items-center gap-2">
                  <span class="d-block fw_800 n0-clr fs-two" data-aos="zoom-in-right" data-aos-duration="1200"> Body </span>
                  <span class="act4-clr fw_800 fs-two act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Types </span>
                </span>
              </span>
              <p class="nw1-clr">Discover bikes by body types for a personalized riding experience</p>
            </div>
            <div class="browse-more" data-aos="zoom-in" data-aos-duration="2000">
              <NuxtLink to="/contest" class="cmn__collection radius-circle p1-bg d-center position-relative">
                <span class="cmn-cont-box text-center position-relative">
                  <span class="icon mb-1">
                    <PhArrowUpRight class="n4-clr fs-three" />
                  </span>
                  <span class="d-block n4-clr fw_700">View All</span>
                </span>
              </NuxtLink>
            </div>
            <NuxtImg :src="gorgiousShape" alt="Gorgeous Shape" class="gorgiour-shape" />
          </div>
        </div>
        <div class="col-lg-9">
          <div class="row g-xxl-6 g-4">
            <div v-for="(bike, index) in categoryData" :class="`col-lg-4 col-md-6 col-sm-6 `" :data-aos="index % 2 === 0 ? 'zoom-in-up' : 'zoom-in-down'" :key="`Bike1Category${index}`">
              <div class="categori-bikev3-item">
                <div class="thumb">
                  <div class="thumb-in">
                    <NuxtImg :src="bike.img" :alt="bike.name" />
                  </div>
                </div>
                <div class="content-wrap">
                  <NuxtLink to="/contest-details" class="doble-cont">
                    <span class="cont">{{ bike.name }}</span>
                    <span class="cmn-arrows n0-bg">
                      <PhArrowUpRight />
                    </span>
                  </NuxtLink>
                  <NuxtLink to="/contest-details" class="single-cont">
                    <span class="cont">{{ bike.name }}</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
