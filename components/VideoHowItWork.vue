<script setup lang="ts">
import { PhPlay } from "@phosphor-icons/vue";
import howPlayv5 from "/images/howit/how-playv5.png";
defineProps<{
  image?: string;
  handleVideoModal: () => void;
  isOpen: boolean;
}>();
</script>
<template>
  <div class="howit-video position-relative" @click="handleVideoModal">
    <NuxtImg :src="image ? image : howPlayv5" alt="img" />
    <button class="bn-vid popup-video">
      <PhPlay weight="fill" class="ti ti-player-play-filled act3-clr fs-five"></PhPlay>
    </button>
  </div>
</template>

<style scoped></style>
