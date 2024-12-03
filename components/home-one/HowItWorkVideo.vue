<script setup lang="ts">
import { PhPlay } from "@phosphor-icons/vue";
import howItVid from "/images/howit/howit-vid.png";

defineProps<{
  handleVideoModal: () => void;
  isOpen: boolean;
}>();
</script>
<template>
  <div class="howit-video position-relative" @click="handleVideoModal">
    <NuxtImg :src="howItVid" alt="img" />
    <button class="bn-vid popup-video">
      <PhPlay weight="fill" class="ti ti-player-play-filled act3-clr fs-five"></PhPlay>
    </button>
  </div>
</template>

<style scoped></style>
