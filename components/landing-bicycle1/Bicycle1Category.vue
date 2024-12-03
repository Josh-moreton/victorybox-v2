<script setup lang="ts">
import { bicycle1Categories } from "@/../public/data/bicycle1PageData";
import { PhArrowUpRight } from "@phosphor-icons/vue";
import sectionIcon from "/images/global/section-icon.png";
</script>
<template>
  <section class="category-v5-banner pt-120 pb-100">
    <div class="container">
      <div class="row justify-content-center mb-xxl-15 mb-xl-10 mb-10">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title text-center">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex justify-content-center flex-wrap align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="sectionIcon" alt="section icon" />
              <h5 class="s1-clr fw_700">Bicycle Category</h5>
            </div>
            <h2 class="display-four fw_800 n4-clr">
              Bicycle By Body
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Types </span>
            </h2>
          </div>
        </div>
      </div>
      <div class="row g-xxl-6 g-5">
        <div v-for="(bike, index) in bicycle1Categories" :key="`bike-categories-${index}`" class="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in-up" :data-aos-duration="1200 + index * 200">
          <div class="categori-bikev3-item bicycle-cate-item">
            <div class="bithumb">
              <NuxtImg :src="bike.image" alt="{{bike.name}}" />
            </div>
            <div class="content-wrap">
              <NuxtLink :to="`${bike.link}`" class="doble-cont">
                <span class="cont">{{ bike.name }}</span>
                <span class="cmn-arrows n0-bg">
                  <PhArrowUpRight class="ph-bold ph-arrow-up-right">
                    <PhArrowUpRight />
                  </PhArrowUpRight>
                </span>
              </NuxtLink>
              <NuxtLink :to="`${bike.link}`" class="single-cont">
                <span class="cont">{{ bike.name }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
