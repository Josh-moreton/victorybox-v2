<script setup lang="ts">
import s1 from "/images/global/s1.png";
import s2 from "/images/global/s2.png";
import s3 from "/images/global/s3.png";
import s4 from "/images/global/s4.png";
</script>
<template>
  <div class="sponsor-section1 pt-120 pb-120 overflow-hidden">
    <!-- Section Header  -->
    <div class="container">
      <div class="row g-xl-4 g-3 justify-content-center mb-xxl-15 mb-xl-10 mb-7">
        <div class="col-lg-6">
          <div class="section__title text-center">
            <h2 class="display-four d-block n4-clr" data-aos="zoom-in-down" data-aos-duration="1200"><span class="act4-clr act4-underline">Featured</span> In</h2>
            <p class="n3-clr fs18 mt-xxl-4 mt-3" data-aos="zoom-in-down" data-aos-duration="1400">
              These features highlight our dedication to providing a secure and exciting platform for players worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Section Header  -->

    <!-- Sponsor boydss  -->
    <div class="container">
      <div class="sponsor-borderwrap">
        <Swiper
          :loop="true"
          :slidesPerView="1"
          :spaceBetween="24"
          :speed="4500"
          :autoplay="{ delay: 100 }"
          :modules="[SwiperAutoplay]"
          :centeredSlides="true"
          :breakpoints="{
            1600: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 14,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            0: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
          }"
        >
          <SwiperSlide>
            <div class="sponsor-items">
              <NuxtImg :src="s1" alt="sponsors-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sponsor-items">
              <NuxtImg :src="s2" alt="sponsors-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sponsor-items">
              <NuxtImg :src="s3" alt="sponsors-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sponsor-items">
              <NuxtImg :src="s4" alt="sponsors-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sponsor-items">
              <NuxtImg :src="s1" alt="sponsors-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sponsor-items">
              <NuxtImg :src="s2" alt="sponsors-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sponsor-items">
              <NuxtImg :src="s3" alt="sponsors-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sponsor-items">
              <NuxtImg :src="s4" alt="sponsors-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sponsor-items">
              <NuxtImg :src="s1" alt="sponsors-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sponsor-items">
              <NuxtImg :src="s2" alt="sponsors-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sponsor-items">
              <NuxtImg :src="s3" alt="sponsors-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sponsor-items">
              <NuxtImg :src="s4" alt="sponsors-img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <!-- Sponsor boyds  -->
  </div>
</template>

<style scoped></style>
