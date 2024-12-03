<script setup lang="ts">
import { PhCaretDoubleRight } from "@phosphor-icons/vue";
import ballBreadcrumbs from "/images/global/ball-breadcrumbs.png";
import ballShape1 from "/images/global/ball-shape19-1.png";
import shapeBreadcrumRight from "/images/global/shape-breadcrum-right.png";

defineProps<{
  pageName: string;
}>();
</script>
<template>
  <div class="banner-bredcrumbs pt-70-fixed n4-bg position-relative">
    <div class="container">
      <div class="breadcrumbs-content position-relative cus-z1 pt-120 pb-120 text-center">
        <span class="mb-xxl-8 mb-xl-6 mb-5 display-two nw1-clr" data-aos="zoom-in" data-aos-duration="2000"> {{ pageName }} </span>
        <div class="box">
          <ul class="bread d-flex justify-content-center align-items-center gap-2">
            <li>
              <NuxtLink to="/" class="fs20 fw_600 nw1-clr"> Home </NuxtLink>
            </li>
            <li>
              <PhCaretDoubleRight class="ph ph-caret-double-right nw1-clr"></PhCaretDoubleRight>
            </li>
            <li>
              <span class="fs20 fw_600 p1-clr">{{ pageName }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--Banner Shape Images-->

    <NuxtImg :src="ballShape1" alt="img" class="ball-shape-breadcrumb" data-aos="zoom-in-right" data-aos-duration="2200" />
    <NuxtImg :src="ballBreadcrumbs" alt="img" class="ball-circle-breadcrumb" />
    <NuxtImg :src="shapeBreadcrumRight" alt="img" class="shape-breadcrumbright" />
  </div>
</template>

<style scoped></style>
