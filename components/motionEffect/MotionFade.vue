<script setup lang="ts">
defineProps<{ className?: string; onClick?: () => void }>();
</script>
<template>
  <Motion
    :class="className"
    @click="onClick"
    :initial="{ opacity: 0, scale: 0.5, y: 40 }"
    :transition="{ duration: 1, delay: 0.2 }"
    :in-view="{
      opacity: 1,
      scale: 1,
      y: 0,
    }"
  >
    <slot></slot>
  </Motion>
</template>

<style scoped></style>
