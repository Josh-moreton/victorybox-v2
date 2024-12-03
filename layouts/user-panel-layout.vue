<script setup lang="ts">
</script>
<template>
  <NavbarBlack />
  <Breadcrumbs pageName="User Panel" />
  <div class="userpanel-section pt-120 pb-120">
    <div class="container">
      <div class="row g-6 justify-content-center">
        <UserPanelSidebar />
        <slot />
      </div>
    </div>
  </div>
  <HomeOneFooter />
</template>

<style scoped></style>
