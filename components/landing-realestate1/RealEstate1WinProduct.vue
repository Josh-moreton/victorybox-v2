<script setup lang="ts">
import { realEstate1contestData } from "@/../public/data/realestate1PageData";
import { PhArrowUpRight, PhBookmarkSimple, PhPlus, PhShoppingCart } from "@phosphor-icons/vue";
</script>
<template>
  <section class="current-lottery current-lotteryv9 n0-bg pt-120 pb-120">
    <div class="container">
      <!-- {/* Section Header */} -->
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title">
            <SubTitle text="Try your chance at winning" />

            <h2 class="display-four d-block n4-clr">
              Current
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Lottery </span>
              <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Offering </span>
            </h2>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <div class="browse-more" data-aos="zoom-in" data-aos-duration="2000">
            <NuxtLink to="/contest" class="cmn__collection radius-circle act3-bg d-center position-relative">
              <span class="cmn-cont-box text-center position-relative">
                <span class="icon mb-1">
                  <PhArrowUpRight class="ph-bold ph-arrow-up-right n4-clr fs-three" />
                </span>
                <span class="d-block n4-clr fw_700">Browse More</span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- {/* Section Header */} -->

      <!-- {/* win lottery body */} -->
      <div class="row g-6">
        <div v-for="item in realEstate1contestData" :key="`win-section-card${item.id}`" class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1000">
          <div class="current-lottery-itemv11 nw4-border position-relative radius24 n0-bg overflow-hidden">
            <div class="thumb w-100 cus-z1 position-relative">
              <NuxtImg :src="item.image" alt="img" class="w-100" />
              <div class="current-l-badgev11 cus-z1 d-flex align-items-center justify-content-between pt-xxl-5 pt-4 pe-xxl-5 pe-4">
                <span class="draw-badge n0-clr">
                  <NuxtLink to="#" class="n0-clr text-uppercase position-relative fw_700 fs-eight"> Draw Today </NuxtLink>
                </span>
                <div class="iconbox-global radius-circle">
                  <div class="team-social">
                    <ul class="social-area d-grid gap-1">
                      <li>
                        <NuxtLink to="/basket" class="bokmart d-center">
                          <PhShoppingCart weight="bold" class="ph-bold ph-shopping-cart n4-clr fs-five" />
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/basket" class="bokmart d-center">
                          <PhBookmarkSimple class="ph-bold ph-bookmark-simple n4-clr fs-five" />
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                  <div class="icon d-center radius-circle">
                    <PhPlus class="ti ti-plus fs-five cus-z1 p1-color" />
                  </div>
                </div>
              </div>
            </div>
            <div class="content-middle pt-xxl-11 pt-xl-8 pt-lg-4 pt-3">
              <div class="px-xxl-6 px-xl-5 px-lg-4 px-3 pb-xxl-6 pb-xl-4 pb-3">
                <h3 class="d-flex align-items-center gap-3 n4-clr mb-2">
                  <span class="pr fw_700">{{ item.price }}</span> <span class="fs-six text-uppercase">PER ENTRY</span>
                </h3>
                <h3>
                  <NuxtLink to="/contest-details" class="n4-clr fw_700 act4-texthover">
                    {{ item.title }}
                  </NuxtLink>
                </h3>
              </div>
              <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3 pb-xxl-6 pb-4">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <span class="fs-eight fw_700 n4-clr">Ticket Sold</span>
                  <span class="n4-clr soldout fw_700 fs-eight">{{ item.soldPercentage }}</span>
                </div>
                <div class="range-custom range-custom-act4 position-relative">
                  <span class="curs-range"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- {/* win lottery body */} -->
    </div>
  </section>
</template>

<style scoped></style>
