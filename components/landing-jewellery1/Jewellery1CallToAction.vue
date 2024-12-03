<script setup lang="ts">
import { PhArrowUpRight, PhCheck } from "@phosphor-icons/vue";
import MotionFadeDownToTop from "../motionEffect/MotionFadeDownToTop.vue";
import callSum from "/images/global/call-sun.png";
import globalPicon from "/images/global/global-picon.png";
import jewelryCallto from "/images/global/jewelry-callto.png";

defineProps<{
  image?: string;
  title?: string;
}>();

const isChecked = ref(true);
const setIsChecked = () => {
  isChecked.value = !isChecked.value;
};
</script>
<template>
  <section class="call-tosectionv7 overflow-hidden n4-bg pt-120 pb-120 position-relative call-custom-space call-custom-spacev4">
    <div class="container">
      <div class="call-to-wrapper1 call-to-wrapperv4 pt-6 position-relative">
        <div class="row g-xl-0 g-0 justify-content-between">
          <div class="col-xl-5 col-lg-5 col-md-7">
            <div class="section__title text-sm-start text-center">
              <div
                class="subtitle-head mb-xxl-20 mb-xl-15 mb-lg-10 mb-md-5 mb-0 pb-7 d-flex flex-wrap justify-content-sm-start justify-content-center align-items-center gap-3"
                data-aos="zoom-in-down"
                data-aos-duration="1200"
              >
                <NuxtImg :src="globalPicon" alt="img" />
                <h5 class="p1-clr fw_700">Call To Action</h5>
              </div>
              <div class="callany">
                <span class="fs20 fw_700 n0-clr text-uppercase d-block mb-lg-3 mb-2"> CALL US AT ANYTIME </span>
                <NuxtLink to="#" class="fs-seven fw_700 n0-clr"> (629) 555-0129 </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7" data-aos="zoom-in-down" data-aos-duration="1600">
            <div class="callto-action-v4 text-sm-start text-center pt-120 mt-xxl-4 mt-0">
              <span class="display-four d-block n0-clr">
                Get Your Real
                <span class="d-flex flex-wrap justify-content-sm-start justify-content-center align-items-center gap-2">
                  <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> {{ title ? title : "Jewelry" }} Lottery </span>
                  <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Ticket Now! </span>
                </span>
              </span>
              <div class="listing-checkwrap pt-120">
                <NuxtLink to="#" class="listing-box position-relative">
                  <span class="text-uppercase fs-six fw_600 n0-clr"> Listing </span>
                  <span class="listing-arrow cmn-48 s1-bg radius-circle d-flex align-items-center justify-content-center">
                    <PhArrowUpRight weight="bold" class="ph-bold ph-arrow-up-right n0-clr" />
                  </span>
                </NuxtLink>
                <div class="listing-right">
                  <NuxtLink to="#" class="cruz-expm d-inline-flex"> cruz@example.com </NuxtLink>
                  <div class="listing-submit mt-xxl-6 mt-xl-5 mt-lg-4 mt-3 pt-xxl-6 pt-xl-5 pt-lg-4 pt-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <label class="checkbox-single">
                      <span class="checkbox-area d-center">
                        <input type="checkbox" :checked="!isChecked" @change="setIsChecked" />
                        <span class="checkmark d-center"> <PhCheck v-if="isChecked" /> </span>
                      </span>
                      <span class="nw2-clr text-check text-start">
                        I agree with
                        <NuxtLink to="#" class="p1-clr"> Privacy Policy </NuxtLink>
                        and
                        <NuxtLink to="#" class="p1-clr"> Terms of Conditions </NuxtLink>
                      </span>
                    </label>
                    <button type="submit" class="kewta-btn s1-bg radius100 py-xxl-4 py-2 px-xxl-10 px-6">
                      <span class="fs-seven fw_700 n0-clr"> Submit </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MotionFadeDownToTop class="jewelary-callto">
          <NuxtImg :src="image || jewelryCallto" alt="img" />
        </MotionFadeDownToTop>
      </div>
    </div>
    <div class="call-sun">
      <NuxtImg :src="callSum" alt="call-sun" />
    </div>
  </section>
</template>

<style scoped></style>
