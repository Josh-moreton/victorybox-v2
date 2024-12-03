<script setup lang="ts">
import textVidv7 from "/images/banner/text-vidv7.png";
import { PhPlay } from "@phosphor-icons/vue";

defineProps<{
  image?: string;
  handleVideoModal: () => void;
  isOpen: boolean;
}>();
</script>
<template>
  <button class="thumb-textvid" @click="handleVideoModal">
    <NuxtImg :src="textVidv7" alt="img" class="radius100" />
    <span class="bn-vid popup-video">
      <PhPlay weight="fill" class="ti ti-player-play-filled act3-clr fs-four"></PhPlay>
    </span>
  </button>
</template>

<style scoped></style>
