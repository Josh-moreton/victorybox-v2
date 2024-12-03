<script setup lang="ts">
import { PhArrowRight, PhPhoneCall } from "@phosphor-icons/vue";
import MotionFadeDownToTop from "../motionEffect/MotionFadeDownToTop.vue";
import callSun from "/images/global/call-sun.png";
import icon from "/images/global/global-picon.png";
import lc4 from "/images/lottery/lc4.png";

defineProps<{
  pageName?: string;
  image?: string;
}>();
</script>
<template>
  <section class="call-tosection overflow-visible n4-bg pt-120 position-relative call-custom-space">
    <div class="container">
      <div class="call-to-wrapper1 pt-6">
        <div class="row g-xl-4 g-4 justify-content-between">
          <div class="col-xl-5 col-lg-5 col-md-7">
            <div class="section__title mb-xxl-15 mb-xl-10 mb-lg-8 mb-6">
              <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap align-items-center gap-3 aos-init aos-animate" data-aos="zoom-in-down" data-aos-duration="1200">
                <NuxtImg :src="icon" alt="img" />
                <h5 class="p1-clr fw_700">Call To Action</h5>
              </div>
              <MotionFadeDownToTop>
                <h2 class="display-four d-block n0-clr">
                  Get Your {{ pageName }}
                  <span class="d-flex align-items-center gap-2">
                    <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Lottery </span>
                    <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Ticket Now! </span>
                  </span>
                </h2>
              </MotionFadeDownToTop>
            </div>
            <div class="time-callwrap position-relative cus-z1">
              <div class="this-box">
                <span class="text-uppercase fs20 fw_700 n0-clr mb-xxl-10 mb-xl-7 mb-lg-6 mb-5"> CALL US AT ANYTIME </span>
                <div class="call-anytime">
                  <NuxtLink to="#" class="cal-box d-center" data-aos="zoom-in-left" data-aos-duration="1400">
                    <span class="boxs n0-clr d-flex align-items-center gap-1">
                      <span class="fs20 fw_700"> Call </span>
                      <PhPhoneCall :size="20" class="fs-five" />
                    </span>
                  </NuxtLink>
                  <NuxtLink to="#" class="cal-box d-center" data-aos="zoom-in-right" data-aos-duration="1400">
                    <span class="boxs ph-text d-block n4-clr d-block fw_700"> (629) 555-0129 </span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7">
            <div class="action-form">
              <span class="display-two nw1-clr mb-xxl-15 mb-xl-10 mb-lg-8 mb-5"> Subscribe To Our Newsletter </span>
              <form>
                <div class="row g-6">
                  <div class="col-lg-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div class="col-lg-6">
                    <input type="text" placeholder="Phone" />
                  </div>
                  <div class="col-lg-12">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div class="col-lg-12">
                    <div class="d-flex align-items-center gap-3 flex-wrap">
                      <NuxtLink to="#" class="kewta-btn kewta-alt d-inline-flex align-items-center">
                        <span class="kew-text n5-bg n0-clr"> I Agree T&CS </span>
                      </NuxtLink>
                      <button type="submit" class="kewta-btn kewta-alt d-inline-flex align-items-center">
                        <span class="kew-text p1-bg n4-clr"> Submit Now </span>
                        <span class="kew-arrow p1-bg">
                          <span class="kt-one">
                            <PhArrowRight class="n4-clr"></PhArrowRight>
                          </span>
                          <span class="kt-two">
                            <PhArrowRight class="n4-clr"></PhArrowRight>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="call-sun">
      <NuxtImg :src="callSun" alt="call-sun" />
    </div>
    <MotionEffectMotionFadeLeft :class="`call-posi-car ${image ? 'call-posi-bikev4' : ''}`">
      <NuxtImg :src="image ? image : lc4" alt="img" />
    </MotionEffectMotionFadeLeft>
  </section>
</template>

<style scoped></style>
