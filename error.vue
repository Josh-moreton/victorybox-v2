<script setup lang="ts">
import errorImage from "/images/error/error.png";

useHead({
  title: "Error - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});
</script>
<template>
  <section class="error-section d-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="error-wrapper p-xxl-8 p-xl-6 p-3">
            <div class="thumb">
              <NuxtImg :src="errorImage" alt="img" />
            </div>
            <div class="cont text-center">
              <h2 class="n4-clr mb-xxl-6 mb-xl-4 mb-3">Page Not Found</h2>
              <p class="fs18 fw_600 mb-xxl-10 mb-xl-7 mb-5">The page you are looking for doesn exist or has been moved</p>
              <NuxtLink to="/" class="kewta-btn d-inline-flex align-items-center">
                <span class="kew-text s1-bg s1-border n0-clr">Back To Home</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
