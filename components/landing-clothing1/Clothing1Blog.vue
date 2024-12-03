<script setup lang="ts">
import { clothing1blogData } from "@/../public/data/clothing1PageData";
import { PhArrowUpRight } from "@phosphor-icons/vue";
import BlogCardTwo from "./BlogCardTwo.vue";
</script>
<template>
  <section class="blog-section1 pt-120 pb-120">
    <!--Section Header-->

    <div class="container">
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-12 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title">
            <SubTitle text="Recent Blog" />
            <h2 class="display-four d-block n4-clr">
              News &
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Analysis </span>
            </h2>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <div class="browse-more" data-aos="zoom-in-up" data-aos-duration="2000">
            <NuxtLink to="/blog-details" class="cmn__collection radius-circle s1-bg d-center position-relative ms-lg-auto">
              <span class="cmn-cont-box text-center position-relative">
                <span class="icon mb-1">
                  <PhArrowUpRight class="ph-bold ph-arrow-up-right n0-clr fs-three" />
                </span>
                <span class="d-block n0-clr fw_700">Browse More</span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!--Section Header-->

    <!--blog body Header-->

    <div class="container">
      <div class="row g-6 justify-content-center">
        <BlogCardTwo v-for="(blog, index) in clothing1blogData" :key="blog.id" v-bind="blog" />
      </div>
    </div>

    <!--blog body Header-->
  </section>
</template>

<style scoped></style>
