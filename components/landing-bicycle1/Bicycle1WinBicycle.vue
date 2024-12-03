<script setup lang="ts">
import { bicycle1WinData } from "@/../public/data/bicycle1PageData";
import { PhArrowUpRight, PhBookmarkSimple, PhCaretLeft, PhCaretRight, PhPlus, PhShoppingCart, PhStar } from "@phosphor-icons/vue";
</script>
<template>
  <section class="current-bikev1 n0-bg pt-120 pb-120">
    <!-- {/* Header Slide */} -->
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
            <NuxtLink to="/winners" class="cmn__collection radius-circle s1-bg d-center position-relative">
              <span class="cmn-cont-box text-center position-relative">
                <span class="icon mb-1">
                  <PhArrowUpRight weight="bold" class="ph-bold ph-arrow-up-right n0-clr fs-three"></PhArrowUpRight>
                </span>
                <span class="d-block n0-clr fw_700">Browse More</span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- {/* Section Header */} -->
    </div>
    <!-- {/* Header Slide */} -->
    <!-- {/* Win Bike Slide */} -->
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
      class="win-bikeslide-wrap lottery-service-wrap swiper"
    >
      <SwiperSlide v-for="({ image, draw, price, sold, rating, reviews }, index) in bicycle1WinData" class="swiper-slide">
        <div class="win-bikeslide-itemv1 winfixed win-bicycleslide-itemv5 position-relative">
          <div class="d-flex pb-xxl-11 pb-xl-9 pb-lg-8 pb-7 justify-content-end align-items-center gap-xl-3 gap-2 pt-xxl-4 pt-xl-3 pt-sm-2 pt-0 px-xxl-4 px-xl-3 px-sm-2 px-2">
            <ul class="ratting d-flex align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr"></PhStar>
              </li>
            </ul>
            <span class="n3-clr fw_600"> <span class="n4-clr fs20 fw_700">4.9</span> (192 reviews) </span>
          </div>
          <div class="win-thumbv1 mb-xxl-8 mb-xl-6 mb-lg-4 mb-3">
            <NuxtImg :src="image" alt="img" />
          </div>
          <span class="n4-badge d-inline-block">
            <span class="n0-clr position-relative fw_700 fs-eight"> Draw Wednesday 8pm </span>
          </span>
          <div class="win-bikefooter d-flex align-items-center">
            <div class="box-price box-ticketcmn">
              <h4 class="fw_700 h4-clr d-flex align-items-center gap-2">${{ price }}.00 <span class="fs-seven n4-clr">ENTRY</span></h4>
            </div>
            <div class="line"></div>
            <div class="box-ticket box-ticketcmn">
              <div class="cmn-prrice-rang mb-2 d-flex align-items-center justify-content-between gap-2">
                <span class="n4-clr soldout fw_700 fs-eight"> Ticket Sold </span>
                <span class="n4-clr soldout fw_700 fs-eight"> 45% </span>
              </div>
              <div class="range-custom position-relative mb-1">
                <span class="curs-range"></span>
              </div>
            </div>
            <div class="line"></div>
            <div class="box-price box-ticketcmn">
              <NuxtLink to="/contest-details" class="kewta-btn d-inline-flex align-items-center">
                <span class="kew-text n4-bg n0-clr"> Enter Competition </span>
                <div class="kew-arrow n4-bg position-relative">
                  <div class="kt-one">
                    <PhArrowUpRight weight="bold" class="ph-bold ph-arrow-up-right n0-clr"></PhArrowUpRight>
                  </div>
                  <div class="kt-two">
                    <PhArrowUpRight weight="bold" class="d-flex ph-bold ph-arrow-up-right n0-clr"></PhArrowUpRight>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="iconbox radius-circle p1-bg d-center">
            <div class="team-social">
              <ul class="social-area d-grid gap-1">
                <li>
                  <NuxtLink to="/basket" class="bokmart d-center">
                    <PhShoppingCart weight="bold" class="ph-bold ph-shopping-cart n4-clr fs-five"></PhShoppingCart>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/basket" class="bokmart d-center">
                    <PhBookmarkSimple class="ph-bold ph-bookmark-simple n4-clr fs-five"></PhBookmarkSimple>
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="icon d-center radius-circle">
              <PhPlus weight="bold" class="ti ti-plus fs-five cus-z1 p1-color"></PhPlus>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="container">
      <div class="mt-xxl-15 mt-xl-8 mt-6 d-flex align-items-center gap-xxl-6 gap-xl-5 gap-3">
        <div class="slider-btn d-inline-flex gap-xxl-5 gap-3">
          <button type="button" class="swiper-button-nextteam cmn-s1-slide cmn-60 act4-border p1-clr radius-circle">
            <PhCaretLeft weight="light" class="ph-light ph-caret-left act4-clr"></PhCaretLeft>
          </button>
          <button type="button" class="swiper-button-prevteam cmn-s1-slide cmn-60 act4-border p1-clr radius-circle">
            <PhCaretRight weight="light" class="ph-light ph-caret-right act4-clr"></PhCaretRight>
          </button>
        </div>
        <div class="swiper-pagination d-center"></div>
      </div>
    </div>
    <!-- {/* Win Bike Slide */} -->
  </section>
</template>

<style scoped></style>
