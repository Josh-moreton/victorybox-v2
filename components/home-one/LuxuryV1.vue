<script setup lang="ts">
import LuxuryCarSlider from "./LuxuryCarSlider.vue";
import shape from "/images/global-shape/suxry-shape.png";
import sectionIcon from "/images/global/section-icon.png";

defineProps<{
  sectionPadding?: string;
}>()
</script>
<template>
  <section :class="`luxury-selection-v1 position-relative overflow-visible ${sectionPadding}`">
    <!--Section Header-->
    <div class="container">
      <div class="row g-xl-4 g-3 justify-content-center mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6">
          <div class="section__title text-center">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex justify-content-center flex-wrap align-items-center gap-3" data-aos="zoom-in-down">
              <NuxtImg :src="sectionIcon" alt="img" />
              <h5 class="s1-clr fw_700">Luxury Wheels Selection</h5>
            </div>

            <h2 class="display-four d-block n4-clr" data-aos="zoom-in-down" data-aos-duration="1400">
              Lottery&apos;s Finest
              <span class="act4-clr act4-underline" data-aos="zoom-in-up" data-aos-duration="1400"> Cars </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <!--Section Header-->
    <!--Luxury Car Selection-->
    <LuxuryCarSlider />
    <NuxtImg :src="shape" alt="img" class="luxury-shape" />
    <!--Luxury Car Selection-->
  </section>
</template>

<style scoped></style>
