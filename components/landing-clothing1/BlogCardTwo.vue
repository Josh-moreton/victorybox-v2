<script setup lang="ts">
import { PhArrowUpRight } from "@phosphor-icons/vue";

defineProps<{
  image: string;
  date: string;
  title: string;
  link: string;
}>();
</script>
<template>
  <MotionEffectMotionFade :class="`col-lg-4 col-md-6 `" data-aos-duration="1400">
    <div class="blog-items15">
      <div class="boxs">
        <div class="thumb mb-xxl-6 mb-4 w-100">
          <NuxtImg :src="image" alt="blog-img" class="w-100" />
        </div>
        <div class="content">
          <span class="fw_600 n3-clr d-block mb-xxl-4 mb-3">Our Blog. {{ date }}</span>
          <h3 class="mb-xxl-5 mb-3">
            <NuxtLink :to="`${link}`" passHref>
              <span class="n4-clr act4-texthover">{{ title }}</span>
            </NuxtLink>
          </h3>
          <div class="border-top"></div>
          <div class="d-flex align-items-center gap-xxl-6 gap-4 mt-xxl-5 mt-4">
            <NuxtLink :to="`${link}`" passHref>
              <span class="n4-clr fs20 fw_700 act4-texthover">Read More</span>
            </NuxtLink>
            <NuxtLink :to="`${link}`" passHref>
              <span class="read15 d-center">
                <PhArrowUpRight class="ph-bold ph-arrow-up-right fs-five" />
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </MotionEffectMotionFade>
</template>

<style scoped></style>
