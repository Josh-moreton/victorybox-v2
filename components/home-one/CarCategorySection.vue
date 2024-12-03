<script setup lang="ts">
import { carCategories } from "@/../public/data/carCategories";
import { PhArrowRight } from "@phosphor-icons/vue";
import icon from "/images/global/section-icon.png";

defineProps({
  sectionBg: {
    type: Boolean,
    required: false,
  },
  categoryImages: {
    type: Array as () => {
      name: string;
      imgSrc: string;
    }[],
    required: false,
    default: () => carCategories,
  },
});
</script>
<template>
  <section :class="` pt-120 pb-120 ${sectionBg ? '' : 'cate-body-type'}`">
    <!-- Section Header  -->
    <div class="container">
      <div class="row g-xl-4 g-3 justify-content-center mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6">
          <div class="section__title text-center">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex justify-content-center flex-wrap align-items-center gap-3" data-aos="zoom-in-up" data-aos-duration="1200">
              <NuxtImg :src="icon" alt="img" />
              <h5 class="s1-clr fw_700">Car Category</h5>
            </div>
            <div>
              <h2 class="display-four d-block n4-clr" data-aos="zoom-in-down" data-aos-duration="1400">
                Car By Body
                <span class="act4-clr act4-underline"> Types </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Section Header  -->

    <!-- Cate Body  -->
    <div class="container">
      <div class="cate-body-wrap cate-body-wrap cate-body-wrapv7 mb-xxl-6 mb-5 mb-xxl-6 mb-5">
        <div
          v-for="(car, index) in categoryImages?.slice(0, 4)"
          :key="`car-${index}`"
          class="cate-body-item winbg position-relative d-flex align-items-center justify-content-center nw4-border text-center"
        >
          <div class="box">
            <div class="thumb position-relative cus-z1 px-xxl-0 px-2 mb-xxl-8 mb-xl-6 mb-5">
              <NuxtImg :src="car.imgSrc" alt="img" />
            </div>
            <div class="content position-relative cus-z1">
              <h4 class="n4-clr">
                <NuxtLink to="/contest-details">{{ car.name }}</NuxtLink>
              </h4>
              <div class="car-tybtn">
                <NuxtLink to="/contest-details" class="kewta-btn kewta-alt d-inline-flex align-items-center">
                  <span class="kew-text act3-bg n4-clr"> Participant Now </span>
                  <div class="kew-arrow act3-bg">
                    <div class="kt-one">
                      <PhArrowRight class="n4-clr" />
                    </div>
                    <div class="kt-two">
                      <PhArrowRight class="n4-clr" />
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cate-body-wrap cate-body-wrapv7">
        <div
          v-for="(car, index) in categoryImages?.slice(2, 6)"
          :key="`car2-${index}`"
          class="cate-body-item winbg position-relative d-flex align-items-center justify-content-center nw4-border text-center"
        >
          <div class="box">
            <div class="thumb position-relative cus-z1 px-xxl-0 px-2 mb-xxl-8 mb-xl-6 mb-5">
              <NuxtImg :src="car.imgSrc" alt="img" />
            </div>
            <div class="content position-relative cus-z1">
              <h4 class="n4-clr">
                <NuxtLink to="/contest-details">{{ car.name }}</NuxtLink>
              </h4>
              <div class="car-tybtn">
                <NuxtLink to="/contest-details" class="kewta-btn kewta-alt d-inline-flex align-items-center">
                  <span class="kew-text act3-bg n4-clr"> Participant Now </span>
                  <div class="kew-arrow act3-bg">
                    <div class="kt-one">
                      <PhArrowRight class="n4-clr" />
                    </div>
                    <div class="kt-two">
                      <PhArrowRight class="n4-clr" />
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Cate Body  -->
  </section>
</template>

<style scoped></style>
