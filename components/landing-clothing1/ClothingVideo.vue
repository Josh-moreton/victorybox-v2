<script setup lang="ts">
import { PhPlay } from "@phosphor-icons/vue";
import circle from "/images/global/rotarion-circle.png";

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
  <div class="real-estate-video colthing-bg d-center position-relative overflow-hidden">
    <div class="real-vid position-relative">
      <button class="popup-video real-play d-center" @click="handleVideoModal">
        <PhPlay weight="fill" class="ti ti-player-play-filled n0-clr fs-three"></PhPlay>
      </button>
      <NuxtImg :src="circle" alt="img" class="real-play-circle" />
    </div>
  </div>
  <VideoModal :handle-video-modal="handleVideoModal" :is-open="isOpen" />
</template>

<style scoped></style>
