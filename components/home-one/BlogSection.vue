<script setup lang="ts">
import { blogDefaultData } from "@/../public/data/blogDefaultData";
import { PhArrowUpRight } from "@phosphor-icons/vue";
import MotionFadeDownToTop from "../motionEffect/MotionFadeDownToTop.vue";
import BlogCard from "./BlogCard.vue";

defineProps({
  sectionBg: {
    type: Boolean,
    required: false,
  },
  blogCardsData: {
    type: Array as () => { imageUrl: string; date: string; title: string; description: string; link: string }[],
    required: false,
    default: () => blogDefaultData,
  },
});
</script>
<template>
  <section :class="`blog-section1 pt-120 pb-120 ${sectionBg ? 'question-section' : ''}`">
    <!--Section Header-->
    <div class="container">
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-12 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title">
            <SubTitle text="Recent Blog" />
            <MotionFadeDownToTop>
              <h2 class="display-four d-block n4-clr">
                News &
                <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Analysis </span>
              </h2>
            </MotionFadeDownToTop>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <div class="browse-more" data-aos="zoom-in-up" data-aos-duration="2000">
            <NuxtLink to="/blog-details" class="cmn__collection radius-circle s1-bg d-center position-relative ms-lg-auto">
              <span class="cmn-cont-box text-center position-relative">
                <span class="icon mb-1">
                  <PhArrowUpRight class="n0-clr fs-three" />
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
      <div class="row g-6">
        <BlogCard
          v-for="(blogCard, index) in blogCardsData"
          :key="`blog-card-${index}`"
          :imageUrl="blogCard.imageUrl"
          :date="blogCard.date"
          :title="blogCard.title"
          :description="blogCard.description"
          :link="blogCard.link"
        />
      </div>
    </div>
    <!--blog body Header-->
  </section>
</template>

<style scoped></style>
