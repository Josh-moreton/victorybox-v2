<script setup lang="ts">
import { PhCalendar, PhCaretLeft, PhCaretRight, PhCarProfile, PhDevToLogo, PhHeadset, PhLayout, PhMegaphone, PhShieldPlus, PhTicket } from "@phosphor-icons/vue";
import service1 from "/images/service/l-service1.png";
import service2 from "/images/service/l-service2.png";
import service3 from "/images/service/l-service3.png";
import service4 from "/images/service/l-service4.png";
import service5 from "/images/service/l-service5.png";
import service6 from "/images/service/l-service6.png";
import service7 from "/images/service/l-service7.png";
import service8 from "/images/service/l-service8.png";

const lotteryServiceSlidersData = [
  {
    image: service3,
    icon: PhCarProfile,
    title: "Transparent Draw Process",
    serialNumber: "01",
  },
  {
    image: service2,
    icon: PhTicket,
    title: "Transparent Draw Process",
    serialNumber: "02",
  },
  {
    image: service1,
    icon: PhShieldPlus,
    title: "Secure Ticket Purchasing",
    serialNumber: "03",
  },
  {
    image: service4,
    icon: PhCalendar,
    title: "Real-Time Jackpot Updates",
    serialNumber: "04",
  },
  {
    image: service5,
    icon: PhLayout,
    title: "User-Friendly Dashboard",
    serialNumber: "05",
  },
  {
    image: service6,
    icon: PhMegaphone,
    title: "Interactive Winner Announcement",
    serialNumber: "06",
  },
  {
    image: service7,
    icon: PhDevToLogo,
    title: "Diverse Payment Options",
    serialNumber: "07",
  },
  {
    image: service8,
    icon: PhHeadset,
    title: "Responsive Customer Support",
    serialNumber: "08",
  },
];
</script>
<template>
  <div class="lotto-services-container">
    <div class="container-fluid">
      <Swiper
        :loop="true"
        :slidesPerView="1"
        :spaceBetween="24"
        :speed="1500"
        :navigation="{
          nextEl: '.swiper-button-prevteam',
          prevEl: '.swiper-button-nextteam',
        }"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }"
        :breakpoints="{
          1400: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
        }"
        :modules="[SwiperNavigation, SwiperPagination]"
        class="lottery-service-wrap swiper"
      >
        <SwiperSlide v-for="({ image, icon, title, serialNumber }, index) in lotteryServiceSlidersData" :key="`lotteryService-${serialNumber}`" class="swiper-slide">
          <NuxtLink to="/contest-details" class="lotter-service-item d-block position-relative overflow-hidden">
            <NuxtImg :src="image" alt="img" class="lotto-img" />
            <span class="lottory-sercar tl__posi">
              <span class="lbadge p1-bg mb-xxl-4 mb-xl-5 mb-5"><component :is="icon" size="32" class="ph-light" /></span>
              <span class="n4-clr">
                <span class="fs-four"> {{ title }} </span>
              </span>
            </span>
            <span class="serial-badge fs-five radius-circle d-flex align-items-center justify-content-center act3-bg"> {{ serialNumber }} </span>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
      <div class="mt-xxl-15 mt-xl-8 mt-6 d-flex align-items-center gap-xxl-6 gap-xl-5 gap-3">
        <div class="slider-btn d-inline-flex gap-xxl-5 gap-3">
          <button type="button" class="swiper-button-nextteam cmn-s1-slide cmn-60 act4-border p1-clr radius-circle">
            <PhCaretLeft :size="24" class="ph-light ph-caret-left act4-clr"></PhCaretLeft>
          </button>
          <button type="button" class="swiper-button-prevteam cmn-s1-slide cmn-60 act4-border p1-clr radius-circle">
            <PhCaretRight :size="24" class="ph-light ph-caret-right act4-clr"></PhCaretRight>
          </button>
        </div>
        <div class="swiper-pagination d-center"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
