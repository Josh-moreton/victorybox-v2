<script setup lang="ts"></script>
<template>
  <div class="d-flex flex-column min-vh-100">
    <Header />
    <main class="flex-grow-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
