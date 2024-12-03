<script setup lang="ts">
import recent1 from "/images/blog/recent1.png";
import recent2 from "/images/blog/recent2.png";
import recent3 from "/images/blog/recent3.png";
</script>
<template>
  <div class="categori-component blog-dbg p-xxl-6 p-4 mb-xxl-6 mb-4">
    <h4 class="n4-clr border-bottom pb-5 mb-5">Recent Post</h4>
    <ul class="recent-post d-grid gap-xl-4 gap-4">
      <li>
        <NuxtLink to="#" class="d-flex align-items-center gap-xl-3 gap-2">
          <NuxtImg :src="recent1" alt="img" class="radius12" />
          <span class="cont">
            <span class="fs20 fw_700 n4-clr d-block mb-2">Car Dreams Unveiled Lottery</span>
            <span class="n3-clr fw_500">July 28, 2023</span>
          </span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#" class="d-flex align-items-center gap-xl-3 gap-2">
          <NuxtImg :src="recent2" alt="img" class="radius12" />
          <span class="cont">
            <span class="fs20 fw_700 n4-clr d-block mb-2">Rolling Jackpot Adventures</span>
            <span class="n3-clr fw_500">July 28, 2023</span>
          </span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#" class="d-flex align-items-center gap-xl-3 gap-2">
          <NuxtImg :src="recent3" alt="img" class="radius12" />
          <span class="cont">
            <span class="fs20 fw_700 n4-clr d-block mb-2">Dream Chronicles of Wins...</span>
            <span class="n3-clr fw_500">July 28, 2023</span>
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
