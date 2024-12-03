<script setup lang="ts">
import { tableData } from "@/../public/data/userPanelData";
import { PhCalendarBlank, PhHandHeart, PhLinkSimple, PhUsersFour } from "@phosphor-icons/vue";

const textAreaRef = ref<HTMLInputElement | null>(null);

function copyToClipboard(e: MouseEvent) {
  if (textAreaRef.value) {
    textAreaRef.value.select();
    document.execCommand("copy");
    (e.currentTarget as HTMLElement).focus();
  }
}

useHead({
  title: "Referal Program - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});
definePageMeta({
  layout: "user-panel-layout",
});
</script>
<template>
  <div class="col-xxl-9 col-xl-8 col-lg-8">
    <MotionEffectMotionFadeTopToDown class="cmn-box-addingbg mb-6 win40-ragba border radius24 py-xxl-10 py-xl-8 py-lg-6 py-5 px-xxl-10 px-xl-8 px-lg-6 px-5">
      <h3 class="user-title n4-clr mb-lg-6 mb-5">Partners:</h3>
      <div class="copy-codearea">
        <div
          class="copy-form d-flex border flex-sm-nowrap flex-wrap radius100 p-2 align-items-center justify-content-sm-between justify-content-center text-sm-start text-center w-100"
          data-copy="true"
        >
          <div class="d-flex align-items-center gap-3 icon-text">
            <span class="c-icon s1-bg radius-circle d-center cmn-48">
              <PhLinkSimple weight="bold" class="ph-bold ph-link nw1-clr fs-four"></PhLinkSimple>
            </span>
            <span class="n4-clr fw_600">Referral Link :</span>
          </div>
          <span class="minput">
            <input type="text" value="https:/Lottovibe.com/?ref=albert25" readonly data-click-select-all class="in-input" ref="textAreaRef" />
          </span>
          <input
            type="submit"
            value="Copy Link"
            class="btn-copy d-center"
            @click="
              (e) => {
                copyToClipboard(e);
              }
            "
          />
        </div>
      </div>
    </MotionEffectMotionFadeTopToDown>
    <MotionEffectMotionFadeDownToTop class="cmn-box-addingbg mb-6 win40-ragba border radius24 py-xxl-10 py-xl-8 py-5 px-xxl-10 px-xl-8 px-5">
      <div class="d-flex flex-wrap align-items-center justify-content-center gap-xl-6 gap-4">
        <NuxtLink to="#" class="deposit-box h-100 w-auto text-center d-center border radius24 d-center py-xxl-8 py-6 px-xxl-18 px-xl-15 px-lg-10 px-6">
          <span class="box">
            <span class="icon m-auto mb-xxl-5 mb-xl-4 mb-lg-3 mb-2 s1-bg radius-circle d-center">
              <PhUsersFour class="ph ph-users-four fs-two n0-clr"></PhUsersFour>
            </span>
            <span class="n4-clr fs-three mb-2"> $2956.00 </span>
            <span class="n3-clr fw_600 d-block"> Earned Referral </span>
          </span>
        </NuxtLink>
        <NuxtLink to="#" class="deposit-box h-100 w-auto text-center d-center border radius24 d-center py-xxl-8 py-6 px-xxl-18 px-xl-15 px-lg-10 px-6">
          <span class="box">
            <span class="icon m-auto mb-xxl-5 mb-xl-4 mb-lg-3 mb-2 s1-bg radius-circle d-center">
              <PhHandHeart class="ph ph-hand-heart fs-two n0-clr"></PhHandHeart>
            </span>
            <span class="n4-clr fs-three mb-2"> $2956.00 </span>
            <span class="n3-clr fw_600 d-block"> Last Month </span>
          </span>
        </NuxtLink>
      </div>
    </MotionEffectMotionFadeDownToTop>
    <MotionEffectMotionFade class="cmn-box-addingbg win40-ragba border radius24 pt-xxl-10 pt-xl-8 pt-lg-6 pt-5 pb-5">
      <div class="mb-xxl-10 mb-xl-8 mb-lg-6 mb-5 d-flex align-items-center justify-content-between flex-wrap gap-3 px-xxl-10 px-xl-8 px-5">
        <h3 class="user-title n4-clr">Your Partners:</h3>
        <form action="#0" class="min-maxdate d-flex align-items-center justify-content-between border radius100 py-xxl-3 py-2 px-xxl-6 px-5">
          <input type="text" placeholder="min - max date" />
          <PhCalendarBlank weight="bold" class="ph-bold ph-calendar-blank"></PhCalendarBlank>
        </form>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
                <span class="n4-clr fs20 fw_700">Date</span>
              </th>
              <th>
                <span class="n4-clr fs20 fw_700">Level</span>
              </th>
              <th>
                <span class="n4-clr fs20 fw_700">Username</span>
              </th>
              <th>
                <span class="n4-clr fs20 fw_700">Email</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in tableData" :key="`index-${index}`">
              <td>
                <span class="n3-clr">{{ row.date }}</span>
              </td>
              <td>
                <span class="n3-clr">{{ row.level }}</span>
              </td>
              <td>
                <span class="n3-clr">{{ row.name }}</span>
              </td>
              <td>
                <span class="n3-clr">{{ row.email }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </MotionEffectMotionFade>
  </div>
</template>

<style scoped></style>
