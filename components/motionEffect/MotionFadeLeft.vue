<script setup lang="ts">
defineProps<{
  className?: string;
}>();
</script>
<template>
  <Motion
    :class="className"
    :initial="{ opacity: 0, x: -70 }"
    :transition="{ duration: 1, delay: 0.2 }"
    :in-view="{
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    }"
  >
    <slot></slot>
  </Motion>
</template>

<style scoped></style>
