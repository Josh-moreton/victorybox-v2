<script setup lang="ts">
import { PhPlay } from "@phosphor-icons/vue";
import playText from "/images/global/play-text.png";

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
  <div class="thumb" @click="handleVideoModal">
    <NuxtImg :src="playText" alt="img" class="radius100" />
    <button class="bn-vid popup-video">
      <PhPlay weight="fill" class="ti ti-player-play-filled n4-clr fs-six"></PhPlay>
    </button>
  </div>
  <VideoModal :handle-video-modal="handleVideoModal" :is-open="isOpen" />
</template>

<style scoped></style>
