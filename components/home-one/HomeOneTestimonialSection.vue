<script setup lang="ts">
import { defaultTestimonials } from "@/../public/data/defaultTestimonials";
import { PhStar, PhStarHalf } from "@phosphor-icons/vue";
import customer1 from "/images/banner/customer1.png";
import customer2 from "/images/banner/customer2.png";
import customer3 from "/images/banner/customer3.png";

defineProps({
  testimonials: {
    type: Array as () => {
      rating: number;
      title: string;
      content: string;
      author: string;
      location: string;
      authorImage: string;
      testimonialImage: string;
    }[],
    default: () => defaultTestimonials,
  },
});
</script>

<template>
  <section class="testimonial-section testimonial-mextra testimonial-v1-before pt-120 pb-120">
    <!--  Section Header  -->
    <div class="container">
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-9">
          <div class="section__title">
            <SubTitle text="Trusted by these amazing companies" />
            <div class="display-four testimonial-heading d-block n4-clr">
              Testimonials
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> People </span>
              <div class="d-flex flex-wrap align-items-center g-4">
                <ul class="customer-review testi-people-title cmn-style-flex">
                  <li>
                    <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                      <NuxtImg :src="customer1" alt="img" width="{50}" height="{50}" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                      <NuxtImg :src="customer2" alt="img" width="{50}" height="{50}" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                      <NuxtImg :src="customer3" alt="img" width="{50}" height="{50}" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                      <span class="d-grid customer-ratting text-center p-2 p1-bg align-items-center justify-content-center">
                        <span class="d-block fs-eight fw_700 n4-clr"> 10k+ </span>
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
                <span class="d-block ar-talking" data-aos="zoom-in-right" data-aos-duration="1200"> are talking </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
          <div class="testimonial-ratting" data-aos="zoom-in-down" data-aos-duration="1600">
            <span class="n4-clr fw_700 mb-xxl-6 mb-xl-4 mb-3"> Trustpilot </span>
            <ul class="ratting d-flex align-items-center gap-1 mb-xxl-3 mb-2">
              <li>
                <PhStar weight="fill" class="fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="fs-five act4-clr" />
              </li>
            </ul>
            <h4 class="n2-clr">4.5- <span class="fs-six fw_600">(25,750Reviews)</span></h4>
          </div>
        </div>
      </div>
    </div>
    <!--  Section Header  -->

    <!--  Testimonial Wrap  -->
    <Swiper
      :loop="true"
      :slidesPerView="1"
      :spaceBetween="24"
      :speed="4500"
      :autoplay="{
        delay: 100,
        disableOnInteraction: false,
      }"
      :centeredSlides="true"
      :pagination="{
        el: '.swiper-pagination-testi',
        clickable: true,
      }"
      :breakpoints="{
        1600: {
          slidesPerView: 4.1,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 3.5,
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
      :modules="[SwiperPagination, SwiperAutoplay]"
      class="swiper testimonial-wrap1"
    >
      <SwiperSlide v-for="(testimonial, index) in testimonials" class="swiper-slide" :key="index">
        <div class="testimonial-item1 pt-xxl-10 pt-xl-8 pt-lg-6 pt-4 nw4-border text-center">
          <div class="box px-xxl-10 px-xl-8 px-lg-6 px-4">
            <ul class="ratting d-flex justify-content-center align-items-center gap-1 mb-xxl-4 mb-3">
              <li>
                <PhStar weight="fill" class="fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="fs-five act4-clr" />
              </li>
            </ul>
            <span class="fs20 fw_700 n4-clr d-block mb-xxl-6 mb-4">{{ testimonial.title }}</span>
            <p class="fs18 pra">{{ testimonial.content }}</p>
            <div class="cont mt-xxl-7 mt-xl-6 mt-5 mb-xxl-10 mb-xl-8 mb-lg-6 mb-5">
              <div class="adrew">
                <NuxtImg :src="testimonial.authorImage" alt="img" />
              </div>
              <span class="fs20 mb-1 fw_700 n4-clr d-block">{{ testimonial.author }}</span>
              <span class="fw_600 n2-clr">{{ testimonial.location }}</span>
            </div>
          </div>
          <div class="testi-winthumb radius100">
            <NuxtImg :src="testimonial.testimonialImage" alt="img" class="ttimg" />
          </div>
        </div>
      </SwiperSlide>

      <div class="container">
        <div class="swiper-pagination-testi text-start mt-xxl-13 mt-xl-8 mt-lg-6 mt-4"></div>
      </div>
    </Swiper>
    <!--  Testimonial Wrap  -->
  </section>
</template>

<style scoped></style>
