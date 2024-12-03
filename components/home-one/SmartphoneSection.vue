<script setup lang="ts">
import { PhArrowUpRight } from "@phosphor-icons/vue";
import andro from "/images/global/andro.png";
import appStore from "/images/global/app-sotre.png";
import qr from "/images/global/qr.png";
import smartPhone from "/images/global/smart-phone.png";

defineProps<{
  image?: string;
}>();
</script>
<template>
  <div :class="`smart-phone ${image ? 's1-bg pt-15 pb-15' : 'act4-bg pt-120 pb-120'}  overflow-hidden`">
    <div class="container">
      <div class="row g-6 justify-content-between align-items-center">
        <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-10">
          <div class="smart-content" data-aos="zoom-in-down" data-aos-duration="1200">
            <NuxtImg :src="qr" alt="img" class="mb-xxl-5 mb-3" />
          </div>
          <div class="d-flex align-items-center gap-2 mb-xxl-6 mb-xl-5 mb-4" data-aos="zoom-in-up" data-aos-duration="1300">
            <span class="fs20 fw_700 nw1-clr">Scan me</span>
            <PhArrowUpRight :size="25" class="fs-five n0-clr" />
          </div>

          <h2 class="display-three fw_800 nw1-clr mb-xxl-5 mb-3" data-aos="zoom-in-down" data-aos-duration="1400">Want it on your smartphone?</h2>
          <p class="fs-four fw_600 mb-xxl-10 mb-xl-7 mb-lg-5 mb-5 n0-clr">
            Download our new app for
            <span class="d-block fs-four fw_600 n0-clr">iPhone and Android.</span>
          </p>
          <div class="d-flex align-items-center gap-xxl-6 gap-xl-4 gap-2 flex-wrap" data-aos="zoom-in-up" data-aos-duration="1600">
            <NuxtLink to="#">
              <NuxtImg :src="appStore" alt="img" />
            </NuxtLink>
            <NuxtLink to="#">
              <NuxtImg :src="andro" alt="img" />
            </NuxtLink>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-6 col-lg-6 col-md-12">
          <div class="smar-phonewrap">
            <div :class="` ${image ? 'phone-thumb-v2' : 'phone-thumb'}`" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="image ? image : smartPhone" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
