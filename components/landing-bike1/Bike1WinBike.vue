<script setup lang="ts">
import { bikeData } from "@/../public/data/bike1PageData";
import { PhArrowUpRight, PhBookmarkSimple, PhCaretLeft, PhCaretRight, PhShoppingCart, PhStar, PhStarHalf } from "@phosphor-icons/vue";
import MotionFadeDownToTop from "../motionEffect/MotionFadeDownToTop.vue";

const stars = ref([...Array(4).keys()]);
</script>
<template>
  <section class="current-bikev1 winbg pt-120 pb-120">
    <div class="container">
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title">
            <SubTitle text="Try your chance at winning" />
            <MotionFadeDownToTop>
              <h2 class="display-four d-block n4-clr">
                Current <span class="act4-clr act4-underline">Lottery</span>
                <span class="d-block">Offering</span>
              </h2>
            </MotionFadeDownToTop>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <div class="browse-more">
            <NuxtLink to="/contest" class="cmn__collection radius-circle s1-bg d-center position-relative">
              <span class="cmn-cont-box text-center position-relative">
                <span class="icon mb-1">
                  <PhArrowUpRight class="ph-light ph-arrow-up-right n0-clr fs-three" />
                </span>
                <span class="d-block n0-clr fw_700">Browse More</span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="win-bikeslide-wrap lottery-service-wrap swiper">
      <Swiper
        :loop="true"
        :slidesPerView="1"
        :spaceBetween="24"
        :speed="1500"
        :modules="[SwiperNavigation, SwiperPagination]"
        :navigation="{
          nextEl: '.swiper-button-prevteam',
          prevEl: '.swiper-button-nextteam',
        }"
        :pagination="{ el: '.swiper-pagination', clickable: true }"
        :breakpoints="{
          1400: { slidesPerView: 3, spaceBetween: 24 },
          992: { slidesPerView: 3, spaceBetween: 14 },
          768: { slidesPerView: 2, spaceBetween: 14 },
          576: { slidesPerView: 2, spaceBetween: 14 },
          500: { slidesPerView: 1, spaceBetween: 14 },
        }"
      >
        <SwiperSlide v-for="(item, index) in bikeData" :key="`bike-win-item-${index}`">
          <div class="win-bikeslide-itemv1 position-relative">
            <div class="d-flex align-items-center gap-xl-3 gap-2 pt-xxl-8 pt-xl-6 pt-sm-4 pt-3 ps-xxl-8 ps-xl-6 ps-sm-4 ps-3">
              <ul class="ratting d-flex align-items-center gap-1">
                <li v-for="index in stars" :key="index">
                  <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
                </li>
                <li>
                  <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
                </li>
              </ul>
              <span class="n3-clr fw_600">{{ item.reviews }}</span>
            </div>
            <div class="win-thumbv1">
              <NuxtImg :src="item.imageSrc" alt="img" />
            </div>
            <span class="n4-badge d-inline-block">
              <span class="n0-clr position-relative fw_700 fs-eight">{{ item.drawTime }}</span>
            </span>
            <div class="win-bikefooter d-flex align-items-center">
              <div class="icon-box box-ticketcmn">
                <NuxtLink to="#" class="bokmart">
                  <PhBookmarkSimple class="ph-bold ph-bookmark-simple n4-clr fs-five" />
                </NuxtLink>
              </div>
              <div class="line"></div>
              <div class="icon-box box-ticketcmn">
                <NuxtLink to="#" class="bokmart">
                  <PhShoppingCart class="ph-bold ph-shopping-cart n4-clr fs-five" />
                </NuxtLink>
              </div>
              <div class="line"></div>
              <div class="box-ticket box-ticketcmn">
                <div class="cmn-prrice-rang mb-2 d-flex align-items-center justify-content-between gap-2">
                  <span class="n4-clr soldout fw_700 fs-eight">Ticket Sold</span>
                  <span class="n4-clr soldout fw_700 fs-eight">{{ item.ticketSoldPercentage }}</span>
                </div>
                <div class="range-custom position-relative mb-1">
                  <span class="curs-range"></span>
                </div>
              </div>
              <div class="line"></div>
              <div class="box-price box-ticketcmn">
                <h4 class="fw_700 act4-clr d-flex align-items-center gap-2">{{ item.price }} <span class="fs-seven n4-clr">ENTRY</span></h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="container">
        <div class="mt-xxl-15 mt-xl-8 mt-6 d-flex align-items-center gap-xxl-6 gap-xl-5 gap-3">
          <div class="slider-btn d-inline-flex gap-xxl-5 gap-3">
            <button type="button" class="swiper-button-nextteam cmn-s1-slide cmn-60 act4-border p1-clr radius-circle">
              <PhCaretLeft class="ph-light ph-caret-left act4-clr" />
            </button>
            <button type="button" class="swiper-button-prevteam cmn-s1-slide cmn-60 act4-border p1-clr radius-circle">
              <PhCaretRight class="ph-light ph-caret-right act4-clr" />
            </button>
          </div>
          <div class="swiper-pagination d-center"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
