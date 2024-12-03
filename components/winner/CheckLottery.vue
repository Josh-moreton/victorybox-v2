<script setup lang="ts">
import { PhArrowUpRight } from "@phosphor-icons/vue";
</script>
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="check-lotterywrap act3-bg radius24 p-xxl-10 p-xl-8 p-lg-6 p-5">
          <div class="d-flex flex-wrap align-items-center justify-content-md-between justify-content-center text-md-start text-center gap-3 mb-xxl-15 mb-xl-10 mb-lg-8 mb-6">
            <h2 class="n4-clr">Check My Numbers</h2>
            <p class="n1-clr">
              Are you holding on to a winning ticket? Heres
              <span class="d-flex align-items-center gap-2 flex-wrap">
                an easy way to find out.
                <NuxtLink to="#" class="act4-clr d-flex align-items-center gap-2">
                  Need any Helps
                  <PhArrowUpRight class="ph ph-arrow-up-right fs-six"></PhArrowUpRight>
                </NuxtLink>
              </span>
            </p>
          </div>
          <div class="check-lottery-inner">
            <form action="#0" class="contest-numberwrap d-flex align-items-center">
              <div class="conts-number">
                <span class="fs20 fw_700 mb-xxl-4 mb-3">Contest No:</span>
                <input type="text" placeholder="Enter Contest No" />
              </div>
              <div class="m-number">
                <span class="fs20 fw_700 mb-xxl-4 mb-3">Enter Your Lottery Numbers:</span>
                <div class="d-flex align-items-center gap-2">
                  <input type="text" placeholder="00" />
                  <input type="text" placeholder="00" />
                  <input type="text" placeholder="00" />
                  <input type="text" placeholder="00" />
                  <input type="text" placeholder="00" />
                  <input type="text" placeholder="00" />
                </div>
              </div>
            </form>
            <div class="daysper">
              <span class="fs20 fw_700 mb-xxl-4 mb-3 d-block act3-clr d-md-block d-none">.</span>
              <select name="days">
                <option value="1">Last 7 Days</option>
                <option value="1">Last 5 Days</option>
                <option value="1">Last 6 Days</option>
                <option value="1">Last 10 Days</option>
                <option value="1">Last 4 Days</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
