<script setup lang="ts">
import { blogPage2blogItemsData } from "@/../public/data/blogPageData";
import { PhCaretRight } from "@phosphor-icons/vue";
import BlogCardTwo from "../landing-clothing1/BlogCardTwo.vue";
</script>
<template>
  <section class="blog-section pt-120 pb-120 n0-bg">
    <div class="container">
      <div class="row gx-6 gy-10">
        <BlogCardTwo v-for="blog in blogPage2blogItemsData" :key="`blog-${blog.id}`" v-bind="blog" />
      </div>
      <ul class="custom-pagination pt-xxl-20 pt-xl-15 pt-10 d-flex align-items-center justify-content-center gap-xxl-3 gap-2">
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle n4-clr pagi-bg fs20 fw_700"> 1 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle n4-clr pagi-bg fs20 fw_700 active"> 2 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle n4-clr pagi-bg fs20 fw_700"> 3 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle nw1-clr pagi-bg">
            <PhCaretRight class="ph ph-caret-right n4-clr fs20"></PhCaretRight>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
