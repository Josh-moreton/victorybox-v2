<script setup lang="ts">
import circle from "/images/global/rotarion-circle.png";

import { PhPlay } from "@phosphor-icons/vue";

const isOpen = ref(false);

const handleVideoModal = () => {
  isOpen.value = !isOpen.value;
};

watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
</script>
<template>
  <div class="real-estate-video freature-videobg d-center position-relative overflow-hidden">
    <div class="real-vid position-relative">
      <button @click='handleVideoModal' class="popup-video real-play d-center">
          <PhPlay weight="fill" class="ti ti-player-play-filled n0-clr fs-three"></PhPlay>
        </button>
      <NuxtImg :src="circle" alt="img" className="real-play-circle" />
    </div>
  </div>
  <VideoModal :handle-video-modal="handleVideoModal" :is-open="isOpen" />
</template>

<style scoped></style>
