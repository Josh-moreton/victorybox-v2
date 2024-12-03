<script setup lang="ts">
import { PhPencilSimpleLine, PhTrash } from "@phosphor-icons/vue";
import americanCard from "/images/howit/american-card.png";
import discoverCard from "/images/howit/discover-card.png";
import masterCard from "/images/howit/master-card.png";
import paypalCard from "/images/howit/paypal-card.png";
import visaCard from "/images/howit/visa-card.png";

useHead({
  title: "Payment - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "user-panel-layout",
});
</script>
<template>
  <div class="col-xxl-9 col-xl-8 col-lg-8">
    <div class="cmn-box-addingbg win40-ragba border radius24 py-xxl-10 py-xl-8 py-lg-6 py-5">
      <div class="d-flex align-items-center justify-content-between flex-wrap px-xxl-8 px-xl-6 px-sm-5 px-4 mb-xxl-15 mb-xl-10 mb-lg-8 mb-6 gap-2">
        <h3 class="user-title n4-clr">Payment Methods</h3>
        <button type="submit" class="kewta-btn kewta-alt d-inline-flex align-items-center">
          <span class="kew-text s1-bg nw1-clr">Submit Now</span>
        </button>
      </div>
      <div class="payment-methodwrap">
        <div class="payment-method-items border-bottom pb-xxl-8 pb-xl-5 pb-4 d-flex algin-items-center justify-content-between gap-3 px-xxl-8 px-xl-6 px-sm-5 px-4">
          <div class="d-flex align-items-center gap-xl-6 gap-lg-4 gap-3">
            <NuxtImg :src="visaCard" alt="img" class="radius12" />
            <div class="cont">
              <span class="n4-clr fw_600 d-block mb-0">**** 1234</span>
              <span class="n3-clr fs-eight">Expires in 10/2024</span>
            </div>
          </div>
          <div class="d-flex align-items-center gap-xl-6 gap-3">
            <button type="button">
              <PhPencilSimpleLine weight="bold" class="ph-bold ph-pencil-simple-line n4-clr fs-four"></PhPencilSimpleLine>
            </button>
            <button type="button">
              <PhTrash weight="bold" class="ph-bold ph-trash act4-clr fs-four"></PhTrash>
            </button>
          </div>
        </div>
        <div class="payment-method-items gap-3 border-bottom border-top pb-xxl-8 pb-xl-5 pb-4 pt-xxl-8 pt-xl-5 pt-4 d-flex algin-items-center justify-content-between px-xxl-8 px-xl-6 px-sm-5 px-4">
          <div class="d-flex align-items-center gap-xl-6 gap-lg-4 gap-3">
            <NuxtImg :src="masterCard" alt="img" class="radius12" />
            <div class="cont">
              <span class="n4-clr fw_600 d-block mb-0">Mastercard ending in 1234</span>
              <span class="n3-clr fs-eight">Expires in 03/2026</span>
            </div>
          </div>
          <div class="d-flex align-items-center gap-xl-6 gap-3">
            <button type="button">
              <PhPencilSimpleLine weight="bold" class="ph-bold ph-pencil-simple-line n4-clr fs-four"></PhPencilSimpleLine>
            </button>
            <button type="button">
              <PhTrash weight="bold" class="ph-bold ph-trash act4-clr fs-four"></PhTrash>
            </button>
          </div>
        </div>
        <div class="payment-method-items gap-3 border-bottom border-top pb-xxl-8 pb-xl-5 pb-4 pt-xxl-8 pt-xl-5 pt-4 d-flex algin-items-center justify-content-between px-xxl-8 px-xl-6 px-sm-5 px-4">
          <div class="d-flex align-items-center gap-xl-6 gap-lg-4 gap-3">
            <NuxtImg :src="discoverCard" alt="img" class="radius12" />
            <div class="cont">
              <span class="n4-clr fw_600 d-block mb-0">Discover ending in 1234</span>
              <span class="n3-clr fs-eight">Expires in 03/2026</span>
            </div>
          </div>
          <div class="d-flex align-items-center gap-xl-6 gap-3">
            <button type="button">
              <PhPencilSimpleLine weight="bold" class="ph-bold ph-pencil-simple-line n4-clr fs-four"></PhPencilSimpleLine>
            </button>
            <button type="button">
              <PhTrash weight="bold" class="ph-bold ph-trash act4-clr fs-four"></PhTrash>
            </button>
          </div>
        </div>
        <div class="payment-method-items gap-3 border-bottom border-top pb-xxl-8 pb-xl-5 pb-4 pt-xxl-8 pt-xl-5 pt-4 d-flex algin-items-center justify-content-between px-xxl-8 px-xl-6 px-sm-5 px-4">
          <div class="d-flex align-items-center gap-xl-6 gap-lg-4 gap-3">
            <NuxtImg :src="americanCard" alt="img" class="radius12" />
            <div class="cont">
              <span class="n4-clr fw_600 d-block mb-0">American Express ending in 1234</span>
              <span class="n3-clr fs-eight">Expires in 12/2021</span>
            </div>
          </div>
          <div class="d-flex align-items-center gap-xl-6 gap-3">
            <button type="button">
              <PhPencilSimpleLine weight="bold" class="ph-bold ph-pencil-simple-line n4-clr fs-four"></PhPencilSimpleLine>
            </button>
            <button type="button">
              <PhTrash weight="bold" class="ph-bold ph-trash act4-clr fs-four"></PhTrash>
            </button>
          </div>
        </div>
        <div class="payment-method-items gap-3 border-bottom border-top pb-xxl-8 pb-xl-5 pb-4 pt-xxl-8 pt-xl-5 pt-4 d-flex algin-items-center justify-content-between px-xxl-8 px-xl-6 px-sm-5 px-4">
          <div class="d-flex align-items-center gap-xl-6 gap-lg-4 gap-3">
            <NuxtImg :src="paypalCard" alt="img" class="radius12" />
            <div class="cont">
              <span class="n4-clr fw_600 d-block mb-0">Paypal Express ending in 123</span>
              <span class="n3-clr fs-eight">Expires in 10/2024</span>
            </div>
          </div>
          <div class="d-flex align-items-center gap-xl-6 gap-3">
            <button type="button">
              <PhPencilSimpleLine weight="bold" class="ph-bold ph-pencil-simple-line n4-clr fs-four"></PhPencilSimpleLine>
            </button>
            <button type="button">
              <PhTrash weight="bold" class="ph-bold ph-trash act4-clr fs-four"></PhTrash>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
