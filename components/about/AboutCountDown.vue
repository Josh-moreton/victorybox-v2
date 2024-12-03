<script setup lang="ts">
import badge from "/images/global/badge-a.png";
import dollar from "/images/global/dollar-a.png";
import ticket from "/images/global/ticket-a.png";


import CountUp from "vue-countup-v3";
</script>
<template>
  <div class="about-counter winbg pt-120 pb-120 overflow-hidden">
    <div class="container">
      <div class="row g-10 justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration="1200">
          <div class="about-winner-countitem">
            <div class="icon d-center act3-border mb-xxl-8 mb-xl-6 mb-5">
              <NuxtImg :src="badge" alt="img" />
            </div>
            <div class="cont text-center">
              <span class="counters display-two mb-2 mb-xl-3 justify-content-center d-flex align-items-center n1-clr">
                <span class="odometer" data-odometer-final="27">
                  <count-up :end-val="27"></count-up>
                </span>
                <span class="act4-clr"> +</span>
              </span>
              <span class="fs20 fw_600 n1-clr">Winners For Last Month</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration="1400">
          <div class="about-winner-countitem">
            <div class="icon d-center act3-border mb-xxl-8 mb-xl-6 mb-5">
              <NuxtImg :src="ticket" alt="img" />
            </div>
            <div class="cont text-center">
              <span class="counters display-two mb-2 mb-xl-3 justify-content-center d-flex align-items-center n1-clr">
                <span class="odometer" data-odometer-final="4575"><count-up :end-val="4575"></count-up></span>
                <span class="act4-clr"> K</span>
              </span>
              <span class="fs20 fw_600 n1-clr">Tickets Sold</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration="1600">
          <div class="about-winner-countitem">
            <div class="icon d-center act3-border mb-xxl-8 mb-xl-6 mb-5">
              <NuxtImg :src="dollar" alt="img" />
            </div>
            <div class="cont text-center">
              <span class="counters display-two mb-2 mb-xl-3 justify-content-center d-flex align-items-center n1-clr">
                <span class="odometer" data-odometer-final="27"><count-up :end-val="27"></count-up> </span>
                <span class="act4-clr"> K</span>
              </span>
              <span class="fs20 fw_600 n1-clr">Payout to Winners</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
