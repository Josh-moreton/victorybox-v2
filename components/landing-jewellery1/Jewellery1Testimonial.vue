<script setup lang="ts">
import { PhQuotes, PhStar, PhStarHalf } from "@phosphor-icons/vue";
import customer1 from "/images/banner/customer1.png";
import customer2 from "/images/banner/customer2.png";
import customer4 from "/images/banner/customer4.png";
import l1 from "/images/man-global/l1.png";
import l2 from "/images/man-global/l2.png";
import l3 from "/images/man-global/l3.png";
import l4 from "/images/man-global/l4.png";
import l5 from "/images/man-global/l5.png";
import l6 from "/images/man-global/l6.png";

defineProps<{
  name?: string;
}>();
</script>
<template>
  <section class="testimonial-section overflow-visible badge-before-thumb pt-120 pb-120">
    <!-- {/* Section Header */} -->
    <div class="container">
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-9">
          <div class="section__title">
            <SubTitle text="Jewelry Lottery Triumphs" />
            <div class="display-four testimonial-heading d-block n4-clr">
              <span class="d-flex gap-1 flex-wrap">
                {{ name || "Jewelry" }} Lottery
                <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Success! </span>
              </span>
              <div class="d-flex flex-wrap align-items-center g-4">
                <ul class="customer-review testi-people-title cmn-style-flex">
                  <li>
                    <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                      <NuxtImg :src="customer1" alt="img" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                      <NuxtImg :src="customer2" alt="img" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="#" class="customer-revew-item n0-bg d-flex align-items-center justify-content-center">
                      <NuxtImg :src="customer4" alt="img" />
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
                <span class="d-block ar-talking" data-aos="zoom-in-right" data-aos-duration="1200"> Reviews! </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
          <div class="testimonial-ratting" data-aos="zoom-in-down" data-aos-duration="1600">
            <span class="n4-clr fw_700 mb-xxl-6 mb-xl-4 mb-3"> Trustpilot </span>
            <ul class="ratting d-flex align-items-center gap-1 mb-xxl-3 mb-2">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
            <h4 class="n2-clr">4.5- <span class="fs-six fw_600">(25,750Reviews)</span></h4>
          </div>
        </div>
      </div>
    </div>
    <!-- {/* Section Header */} -->

    <!-- {/* Testimonial wap */} -->
    <Swiper
      :loop="true"
      :slidesPerView="1"
      :spaceBetween="24"
      :speed="4500"
      :centeredSlides="true"
      :modules="[SwiperAutoplay, SwiperPagination]"
      :autoplay="{
        delay: 100,
      }"
      :pagination="{
        el: '.swiper-pagination-testi',
        clickable: true,
      }"
      :breakpoints="{
        1600: {
          slidesPerView: 5.5,
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
      class="swiper testimonial-wrapv7"
    >
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv7 pt-sml-6 pt-4 pb-sml-6 pb-4 px-2 nw4-border text-center">
          <div class="box">
            <div class="cont mb-xl-3 mb-lg-3 mb-2">
              <div class="adrew">
                <NuxtImg :src="l1" alt="img" />
                <div class="icon">
                  <PhQuotes weight="bold" class="ph-bold ph-quotes"></PhQuotes>
                </div>
              </div>
              <span class="fs20 mb-0 fw_700 n4-clr d-block"> Devon Lane </span>
              <span class="fw_600 n2-clr"> USA - April 25, 2024 </span>
            </div>
            <p class="fs18 pra mb-xxl-6 mb-xl-5 mb-lg-4 mb-md-3 mb-2">Participating in the car lottery was a changer for me. Winning my dream experience beyond words.</p>
            <ul class="ratting d-flex justify-content-center align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv7 pt-sml-6 pt-4 pb-sml-6 pb-4 px-2 nw4-border text-center">
          <div class="box">
            <div class="cont mb-xl-3 mb-lg-3 mb-2">
              <div class="adrew">
                <NuxtImg :src="l2" alt="img" />
                <div class="icon">
                  <PhQuotes weight="bold" class="ph-bold ph-quotes"></PhQuotes>
                </div>
              </div>
              <span class="fs20 mb-0 fw_700 n4-clr d-block"> Jacob Jones </span>
              <span class="fw_600 n2-clr"> USA - April 25, 2024 </span>
            </div>
            <p class="fs18 pra mb-xxl-6 mb-xl-5 mb-lg-4 mb-md-3 mb-2">Participating in the car lottery was a changer for me. Winning my dream experience beyond words.</p>
            <ul class="ratting d-flex justify-content-center align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv7 pt-sml-6 pt-4 pb-sml-6 pb-4 px-2 nw4-border text-center">
          <div class="box">
            <div class="cont mb-xl-3 mb-lg-3 mb-2">
              <div class="adrew">
                <NuxtImg :src="l3" alt="img" />
                <div class="icon">
                  <PhQuotes weight="bold" class="ph-bold ph-quotes"></PhQuotes>
                </div>
              </div>
              <span class="fs20 mb-0 fw_700 n4-clr d-block"> Annette Black </span>
              <span class="fw_600 n2-clr"> USA - April 25, 2024 </span>
            </div>
            <p class="fs18 pra mb-xxl-6 mb-xl-5 mb-lg-4 mb-md-3 mb-2">Participating in the car lottery was a changer for me. Winning my dream experience beyond words.</p>
            <ul class="ratting d-flex justify-content-center align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv7 pt-sml-6 pt-4 pb-sml-6 pb-4 px-2 nw4-border text-center">
          <div class="box">
            <div class="cont mb-xl-3 mb-lg-3 mb-2">
              <div class="adrew">
                <NuxtImg :src="l4" alt="img" />
                <div class="icon">
                  <PhQuotes weight="bold" class="ph-bold ph-quotes"></PhQuotes>
                </div>
              </div>
              <span class="fs20 mb-0 fw_700 n4-clr d-block"> Bessie Cooper </span>
              <span class="fw_600 n2-clr"> USA - April 25, 2024 </span>
            </div>
            <p class="fs18 pra mb-xxl-6 mb-xl-5 mb-lg-4 mb-md-3 mb-2">Participating in the car lottery was a changer for me. Winning my dream experience beyond words.</p>
            <ul class="ratting d-flex justify-content-center align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv7 pt-sml-6 pt-4 pb-sml-6 pb-4 px-2 nw4-border text-center">
          <div class="box">
            <div class="cont mb-xl-3 mb-lg-3 mb-2">
              <div class="adrew">
                <NuxtImg :src="l5" alt="img" />
                <div class="icon">
                  <PhQuotes weight="bold" class="ph-bold ph-quotes"></PhQuotes>
                </div>
              </div>
              <span class="fs20 mb-0 fw_700 n4-clr d-block"> Arlene McCoy </span>
              <span class="fw_600 n2-clr"> USA - April 25, 2024 </span>
            </div>
            <p class="fs18 pra mb-xxl-6 mb-xl-5 mb-lg-4 mb-md-3 mb-2">Participating in the car lottery was a changer for me. Winning my dream experience beyond words.</p>
            <ul class="ratting d-flex justify-content-center align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv7 pt-sml-6 pt-4 pb-sml-6 pb-4 px-2 nw4-border text-center">
          <div class="box">
            <div class="cont mb-xl-3 mb-lg-3 mb-2">
              <div class="adrew">
                <NuxtImg :src="l6" alt="img" />
                <div class="icon">
                  <PhQuotes weight="bold" class="ph-bold ph-quotes"></PhQuotes>
                </div>
              </div>
              <span class="fs20 mb-0 fw_700 n4-clr d-block"> Albert Flores </span>
              <span class="fw_600 n2-clr"> USA - April 25, 2024 </span>
            </div>
            <p class="fs18 pra mb-xxl-6 mb-xl-5 mb-lg-4 mb-md-3 mb-2">Participating in the car lottery was a changer for me. Winning my dream experience beyond words.</p>
            <ul class="ratting d-flex justify-content-center align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv7 pt-sml-6 pt-4 pb-sml-6 pb-4 px-2 nw4-border text-center">
          <div class="box">
            <div class="cont mb-xl-3 mb-lg-3 mb-2">
              <div class="adrew">
                <NuxtImg :src="l4" alt="img" />
                <div class="icon">
                  <PhQuotes weight="bold" class="ph-bold ph-quotes"></PhQuotes>
                </div>
              </div>
              <span class="fs20 mb-0 fw_700 n4-clr d-block"> Bessie Cooper </span>
              <span class="fw_600 n2-clr"> USA - April 25, 2024 </span>
            </div>
            <p class="fs18 pra mb-xxl-6 mb-xl-5 mb-lg-4 mb-md-3 mb-2">Participating in the car lottery was a changer for me. Winning my dream experience beyond words.</p>
            <ul class="ratting d-flex justify-content-center align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv7 pt-sml-6 pt-4 pb-sml-6 pb-4 px-2 nw4-border text-center">
          <div class="box">
            <div class="cont mb-xl-3 mb-lg-3 mb-2">
              <div class="adrew">
                <NuxtImg :src="l5" alt="img" />
                <div class="icon">
                  <PhQuotes weight="bold" class="ph-bold ph-quotes"></PhQuotes>
                </div>
              </div>
              <span class="fs20 mb-0 fw_700 n4-clr d-block"> Arlene McCoy </span>
              <span class="fw_600 n2-clr"> USA - April 25, 2024 </span>
            </div>
            <p class="fs18 pra mb-xxl-6 mb-xl-5 mb-lg-4 mb-md-3 mb-2">Participating in the car lottery was a changer for me. Winning my dream experience beyond words.</p>
            <ul class="ratting d-flex justify-content-center align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="testimonial-item1 testimonial-itemv7 pt-sml-6 pt-4 pb-sml-6 pb-4 px-2 nw4-border text-center">
          <div class="box">
            <div class="cont mb-xl-3 mb-lg-3 mb-2">
              <div class="adrew">
                <NuxtImg :src="l6" alt="img" />
                <div class="icon">
                  <PhQuotes weight="bold" class="ph-bold ph-quotes"></PhQuotes>
                </div>
              </div>
              <span class="fs20 mb-0 fw_700 n4-clr d-block"> Albert Flores </span>
              <span class="fw_600 n2-clr"> USA - April 25, 2024 </span>
            </div>
            <p class="fs18 pra mb-xxl-6 mb-xl-5 mb-lg-4 mb-md-3 mb-2">Participating in the car lottery was a changer for me. Winning my dream experience beyond words.</p>
            <ul class="ratting d-flex justify-content-center align-items-center gap-1">
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStar weight="fill" class="ph-fill ph-star fs-five act4-clr" />
              </li>
              <li>
                <PhStarHalf weight="fill" class="ph-fill ph-star-half fs-five act4-clr" />
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>

      <div class="container">
        <div class="swiper-pagination-testi text-start mt-xxl-13 mt-xl-8 mt-lg-6 mt-4"></div>
      </div>
    </Swiper>
    <!-- {/* Testimonial wap */} -->
  </section>
</template>

<style scoped></style>
