<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import picon from "/images/global/global-picon.png";
import mike from "/images/global/super-mike.png";
import win from "/images/global/super-win.png";
import wheel from "/images/global/wheel-trophy.png";

defineProps<{
  title?: string;
}>();
</script>
<template>
  <section class="callto-actionv9 n4-bg pt-120 pb-120 position-relative">
    <div class="container">
      <div class="row g-xl-4 g-3 justify-content-center">
        <div class="col-lg-8">
          <div class="section__title text-center">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex justify-content-center flex-wrap align-items-center gap-3" data-aos="zoom-in-up" data-aos-duration="1400">
              <NuxtImg :src="picon" alt="img" />
              <h5 class="p1-clr fw_700">Call To Action</h5>
            </div>
            <h2 class="display-four mb-xxl-10 mb-xl-8 mb-lg-6 mb-5 d-block n0-clr" data-aos="fade-down-left" data-aos-duration="1600">
              <span> Get Your {{ title || "Electronic" }} <span class="act4-clr act4-underline">Lottery</span> Ticket Now! </span>
            </h2>

            <div class="d-flex cus-z1 position-relative flex-md-nowrap justify-content-center mb-xxl-12 mb-xl-10 mb-8 align-items-center gap-xl-8 gap-3 flex-wrap w-100">
              <NuxtLink to="/contact" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                <span class="kew-text n4-clr act3-bg">Contact Us</span>
                <div class="kew-arrow act3-bg">
                  <div class="kt-one">
                    <PhArrowRight class="ti ti-arrow-right n4-clr" />
                  </div>
                  <div class="kt-two">
                    <PhArrowRight class="ti ti-arrow-right n4-clr" />
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink to="/howtoplay" class="how-cont n0-clr act3-hover fw_700" data-aos="zoom-in-left" data-aos-duration="800"> How It’s Works </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NuxtImg :src="win" alt="img" class="wind" />
    <NuxtImg :src="wheel" alt="img" class="wind-cap" />
    <NuxtImg :src="mike" alt="img" class="wind-ball" />
  </section>
</template>

<style scoped></style>
