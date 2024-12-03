<script setup lang="ts">
import blogThumb from "/images/blog/blog-d-thumb1.png";

import BlogDetailsCategories from "./BlogDetailsCategories.vue";
import BlogDetailsInnerContent from "./BlogDetailsInnerContent.vue";
import BlogDetailsPopularTag from "./BlogDetailsPopularTag.vue";
import BlogDetailsRecentPost from "./BlogDetailsRecentPost.vue";
import BlogDetailsSearch from "./BlogDetailsSearch.vue";
</script>
<template>
  <div class="blog-section pt-120 pb-120 n0-bg">
    <div class="container">
      <div class="blog-details-wrapper">
        <div class="blot-title1 mb-xxl-10 mb-xl-8 mb-lg-6 mb-5">
          <h4 class="fw_600 n1-clr d-block mb-xxl-4 mb-3" data-aos="zoom-in-up" data-aos-duration="1200">Latest News December 12, 2024</h4>
          <span class="display-three fw_800 n4-clr" data-aos="zoom-in-up" data-aos-duration="1600"> Wheels of Destiny Lottery Adventures </span>
        </div>
        <div class="blog-details-thumb1 mb-xxl-10 mb-xl-9 mb-lg-9 mb-9" data-aos="zoom-in" data-aos-duration="2000">
          <NuxtImg :src="blogThumb" alt="img" />
        </div>
        <!-- {/* blog details body content */} -->
        <div class="row g-6">
          <BlogDetailsInnerContent />
          <div class="col-lg-4">
            <div class="sidebar-sticky">
              <BlogDetailsSearch />
              <BlogDetailsCategories />
              <BlogDetailsRecentPost />
              <BlogDetailsPopularTag />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
