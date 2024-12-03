<script setup lang="ts">
import { PhArrowRight, PhPlus } from "@phosphor-icons/vue";
import roomSelected from "/images/howit/room-selected.png";
</script>
<template>
  <section class="journey-exciting">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-5">
          <div class="journey-exthumb position-relative">
            <NuxtImg :src="roomSelected" alt="img" />

            <VTooltip class="tooltip-plus tooltip-v1 act3-bg radius-circle d-center" data-toggle="tooltip" popperId="tolTipId1">
              <NuxtLink to="#">
                <PhPlus weight="bold" class="ph-bold ph-plus black-plus" />
              </NuxtLink>
              <template #popper> 2 Bed Rooms </template>
            </VTooltip>

            <VTooltip class="tooltip-plus tooltip-v2 act3-bg radius-circle d-center" data-toggle="tooltip" popperId="tolTipId2">
              <NuxtLink to="#">
                <PhPlus weight="bold" class="ph-bold ph-plus black-plus" />
              </NuxtLink>
              <template #popper> 4 Bed Rooms </template>
            </VTooltip>
            <VTooltip class="tooltip-plus tooltip-v3 act3-bg radius-circle d-center" data-toggle="tooltip" popperId="tolTipId3">
              <NuxtLink to="#">
                <PhPlus weight="bold" class="ph-bold ph-plus black-plus" />
              </NuxtLink>
              <template #popper> 4 Bed Rooms </template>
            </VTooltip>
            <VTooltip class="tooltip-plus tooltip-v4 act3-bg radius-circle d-center" data-toggle="tooltip" popperId="tolTipId4">
              <NuxtLink to="#">
                <PhPlus weight="bold" class="ph-bold ph-plus black-plus" />
              </NuxtLink>
              <template #popper> 3 Bed Rooms </template>
            </VTooltip>
            <VTooltip class="tooltip-plus tooltip-v5 act3-bg radius-circle d-center" data-toggle="tooltip" popperId="tolTipId5">
              <NuxtLink to="#">
                <PhPlus weight="bold" class="ph-bold ph-plus black-plus" />
              </NuxtLink>
              <template #popper> 5 Bed Rooms </template>
            </VTooltip>
            <VTooltip class="tooltip-plus tooltip-v6 act3-bg radius-circle d-center" data-toggle="tooltip" popperId="tolTipId6">
              <NuxtLink to="#">
                <PhPlus weight="bold" class="ph-bold ph-plus black-plus" />
              </NuxtLink>
              <template #popper> 3 Bed Rooms </template>
            </VTooltip>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="journey-content py-xxl-10 py-10 px-sm-0 px-2">
            <div class="section__title">
              <SubTitle text="Your Prize Awaits" />

              <h2 class="display-four d-block n4-clr mb-xxl-5 mb-3">
                Navigating the
                <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Exciting </span>
                <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Real Estate Journey </span>
              </h2>

              <p class="n3-clr fs18 mb-xxl-10 mb-xl-8 mb-lg-6 mb-4">
                Step into the realm of real estate wonders where your prize awaits. Explore properties of unparalleled charm, exquisite designs, and endless possibilities. Your dream home is just a
                step away.
              </p>
              <NuxtLink to="/contact" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
                <span class="kew-text n4-clr act3-bg">Enter Competition</span>
                <div class="kew-arrow act3-bg">
                  <div class="kt-one">
                    <PhArrowRight class="ti ti-arrow-right n4-clr" />
                  </div>
                  <div class="kt-two">
                    <PhArrowRight class="ti ti-arrow-right n4-clr" />
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
