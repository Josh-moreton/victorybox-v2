<script setup lang="ts">
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
</script>
<template>
  <div class="detaild-searchbox blog-dbg p-xxl-6 p-4 mb-xxl-6 mb-4">
    <form action="#0" class="px-xxl-3 px-2 d-flex align-items-center">
      <input type="text" placeholder="Search" />
      <button type="submit" class="d-center p1-bg">
        <PhMagnifyingGlass class="ph ph-magnifying-glass n4-clr"></PhMagnifyingGlass>
      </button>
    </form>
  </div>
</template>

<style scoped></style>
