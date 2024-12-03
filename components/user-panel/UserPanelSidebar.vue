<script setup lang="ts">
import { PhPencilSimple } from "@phosphor-icons/vue";
const { currentRoute } = useRouter();

import { sidebarItems } from "@/../public/data/userPanelData";
import miller from "/images/man-global/devid-miller.png";

const path = currentRoute.value.path;
</script>
<template>
  <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-8 relative">
    <div class="user-panel-sidebarwrap sidebar-sticky">
      <div class="user-panel-sideinner win40-ragba border radius24 py-xxl-10 py-xl-8 py-lg-6 py-5 px-xxl-8 px-xl-6 px-5">
        <div class="user-profile-thumb position-relative text-center border-bottom pb-xxl-5 pb-4 mb-xxl-6 mb-5">
          <span class="pencil d-center">
            <PhPencilSimple weight="bold" class="ph-bold ph-pencil-simple"></PhPencilSimple>
          </span>

          <div class="thumb mb-xxl-5 mb-xl-4 mb-4 m-auto">
            <NuxtImg :src="miller" alt="img" class="radius-circle" />
          </div>
          <div class="content">
            <span class="fs20 fw_700 n4-clr d-block mb-1">Mohammad Salah</span>
            <span class="n3-clr">michexample.com</span>
          </div>
        </div>
        <ul class="user-sidebar d-grid gap-2">
          <li v-for="(item, index) in sidebarItems" :key="`sidebar-${item.id}`">
            <NuxtLink :to="`${item.href}`" active-class="active" :class="` py-xxl-3 py-2 px-xxl-5 px-xl-4 px-3 radius12 n4-clr fw_600 d-flex align-items-center gap-xxl-3 gap-2 user-text-inner`">
              <component :is="item.icon" weight="regular" :class="`${item.iconClasses}`" />
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
