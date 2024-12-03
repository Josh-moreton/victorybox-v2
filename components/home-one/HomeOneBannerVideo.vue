<script setup lang="ts">
import howPlayv5 from "/images/howit/how-playv5.png";
import { PhPlay } from "@phosphor-icons/vue";
import bannerVideoBg1 from "/images/banner/banner-videobg1.png";

defineProps<{
  handleVideoModal: () => void;
  isOpen: boolean;
}>();
</script>

<template>
  <div class="thumb" @click="handleVideoModal">
    <NuxtImg :src="bannerVideoBg1" alt="img" class="radius100" />
    <button class="bn-vids popup-video">
      <PhPlay weight="fill" :size="24" class="ti ti-player-play-filled p1-clr fs-six"></PhPlay>
    </button>
  </div>
</template>

<style scoped lang="scss">
.bn-vids {
  position: absolute !important;
  top: 56% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  color: var(--p1) !important;

  width: 40px;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
}
</style>
