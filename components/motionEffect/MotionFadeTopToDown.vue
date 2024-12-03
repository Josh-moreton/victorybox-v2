<script setup lang="ts">
defineProps<{
  className?: string;
}>();
</script>
<template>
  <Motion
    :class="className"
    :initial="{ opacity: 0, y: -100, scale: 0.5 }"
    :transition="{ duration: 1, delay: 0.2 }"
    :in-view="{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7 },
    }"
  >
    <slot></slot>
  </Motion>
</template>

<style scoped></style>
