<script setup lang="ts">
defineProps<{
  className?: string;
}>();
</script>
<template>
  <Motion
    :class="className"
    :initial="{ opacity: 0, y: 40 }"
    :transition="{ duration: 1, delay: 0.2 }"
    :in-view="{
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    }"
  >
    <slot></slot>
  </Motion>
</template>

<style scoped></style>
