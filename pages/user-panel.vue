<script setup lang="ts">
import { tickets } from "@/../public/data/userPanelData";
import { PhCaretRight } from "@phosphor-icons/vue";

useHead({
  title: "User Panel - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "user-panel-layout",
});
</script>
<template>
  <div class="col-xxl-9 col-xl-8 col-lg-8">
    <div class="cmn-box-addingbg win40-ragba border radius24 py-xxl-10 py-xl-8 py-lg-6 py-5 px-xxl-8 px-xl-6 px-sm-5 px-4">
      <h3 class="user-title n4-clr mb-xxl-10 mb-xl-8 mb-lg-6 mb-5">My ticket number</h3>
      <div class="row g-xl-6 g-4">
        <div v-for="ticket in tickets" :key="`ticket-${ticket.id}`" class="col-lg-6 col-md-6">
          <div class="my-ticket-boxwrap position-relative overflow-hidden">
            <div class="my-ticket-box n0-bg d-grid align-items-center h-100 overflow-hidden border radius12 py-xxl-5 py-4 position-relative">
              <div class="d-flex align-items-center justify-content-between gap-3 mb-12 px-xxl-8 px-xl-6 px-sm-5 px-3">
                <span class="fs20 fw_700 n4-clr">Ticket#_{{ ticket.ticketNumber }}</span>
                <span class="fw_600 n4-clr">Contest No: {{ ticket.contestNumber }}</span>
              </div>
              <div class="ticket-border position-relative"></div>
              <div class="d-flex align-items-center justify-content-between gap-3 pt-xl-3 pt-5 px-xxl-8 px-xl-6 px-sm-5 px-3">
                <div class="ticket-in text-center">
                  <span class="fs18 fw_600 n4-clr d-block mb-2">Ticket No:</span>
                  <span class="s1-clr fw_600">{{ ticket.ticketNo }}</span>
                </div>
                <div class="ticket-in text-center">
                  <span class="fs18 fw_600 n4-clr d-block mb-2">Answer</span>
                  <span class="s1-clr fw_600">{{ ticket.answer }}</span>
                </div>
                <div class="ticket-in text-center">
                  <span class="fs18 fw_600 n4-clr d-block mb-2">Order</span>
                  <span class="s1-clr fw_600 text-decoration-underline">{{ ticket.order }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="custom-pagination pt-xxl-15 pt-xl-10 pt-8 d-flex align-items-center justify-content-center gap-xxl-3 gap-2">
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle nw1-clr n2-bg fs20 fw_700"> 1 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle nw1-clr n2-bg fs20 fw_700 active"> 2 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle nw1-clr n2-bg fs20 fw_700"> 3 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle nw1-clr n2-bg">
            <PhCaretRight class="ph ph-caret-right nw1-clr fs20"></PhCaretRight>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
