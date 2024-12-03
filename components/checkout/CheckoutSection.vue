<script setup lang="ts">
import ipay from "/images/howit/iplay.png";
import masterCard from "/images/howit/master.png";
import others from "/images/howit/others.png";
import visa from "/images/howit/visa.png";

import { PhArrowRight, PhCheck, PhHouseLine, PhShoppingCartSimple } from "@phosphor-icons/vue";
import car2 from "/images/banner/banner-car2.png";
import car3 from "/images/banner/banner-car3.png";
import car1 from "/images/banner/banner-thumb-car1.png";

const isChecked = ref(true);
const setIsChecked = () => {
  isChecked.value = !isChecked.value;
};
</script>
<template>
  <section class="checkout-section pt-120 pb-120 n0-bg">
    <div class="container">
      <div class="row g-6">
        <div class="col-lg-8">
          <div class="checkout-informationwrap">
            <div class="mb-xxl-15 mb-xl-10 mb-8">
              <h4 class="n4-clr mb-xxl-10 mb-xl-8 mb-lg-7 mb-6">1. Contact Information</h4>
              <form action="#0" class="ch-form-one">
                <div class="row g-6">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="ch-form-items">
                      <label htmlFor="name1" class="text-uppercase fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> First Name* </label>
                      <input id="name1" type="text" placeholder="First Name" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="ch-form-items">
                      <label htmlFor="lname1" class="text-uppercase fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> Last Name* </label>
                      <input id="lname1" type="text" placeholder="Last Name" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="ch-form-items">
                      <label htmlFor="phs" class="text-uppercase fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> Phone* </label>
                      <input id="phs" type="number" placeholder="+270" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="ch-form-items">
                      <label htmlFor="eml" class="text-uppercase fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> Your Email* </label>
                      <input id="eml" type="email" placeholder="Email" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="mb-xxl-15 mb-xl-10 mb-8">
              <h4 class="n4-clr mb-xxl-10 mb-xl-8 mb-lg-7 mb-6">2. Delivery Method</h4>
              <div class="d-flex align-items-center gap-xxl-6 gap-4">
                <NuxtLink to="#" class="delivery-method border radius12 py-5 px-xl-10 px-6 d-flex align-items-center gap-xxl-4 gap-3">
                  <span class="icon cmn-40 nw4-bg d-center radius-circle">
                    <PhHouseLine class="ph-bold ph-house-line n4-clr fs-five"></PhHouseLine>
                  </span>
                  <span class="n3-clr">Store</span>
                </NuxtLink>
                <NuxtLink to="#" class="delivery-method border radius12 py-5 px-xl-10 px-6 d-flex align-items-center gap-xxl-4 gap-3">
                  <span class="icon cmn-40 nw4-bg d-center radius-circle">
                    <PhShoppingCartSimple class="ph-bold ph-shopping-cart-simple n4-clr fs-five"></PhShoppingCartSimple>
                  </span>
                  <span class="n3-clr">Store</span>
                </NuxtLink>
              </div>
            </div>
            <div class="mb-xxl-15 mb-xl-10 mb-8">
              <form action="#0" class="ch-form-one">
                <div class="row g-6">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="ch-form-items">
                      <label htmlFor="delv" class="text-uppercase fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> DELIVERY DATE * </label>
                      <input id="delv" type="date" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="ch-form-items">
                      <label htmlFor="tim" class="text-uppercase fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> CONVENIENT TIME * </label>
                      <input id="tim" type="date" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="ch-form-items">
                      <label htmlFor="city" class="text-uppercase fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> CITY * </label>
                      <input id="city" type="text" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="ch-form-items">
                      <label htmlFor="addr" class="text-uppercase fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> ADDRESS * </label>
                      <input id="addr" type="text" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="ch-form-items">
                      <label htmlFor="code" class="text-uppercase fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> ZIP CODE * </label>
                      <input id="code" type="number" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="pay-methodwrap">
              <h4 class="n4-clr mb-xxl-10 mb-xl-8 mb-lg-7 mb-6">3. Payment Method</h4>
              <div class="d-flex flex-wrap flex-sm-nowrap align-items-center gap-xxl-6 gap-xl-4 gap-3">
                <NuxtLink to="#" class="border pays radius12 py-xxl-3 py-2 px-xxl-14 px-xl-10 px-lg-7 px-5">
                  <NuxtImg :src="masterCard" alt="img" />
                </NuxtLink>
                <NuxtLink to="#" class="border pays radius12 py-xxl-3 py-2 px-xxl-14 px-xl-10 px-lg-7 px-5">
                  <NuxtImg :src="visa" alt="img" />
                </NuxtLink>
                <NuxtLink to="#" class="border pays radius12 py-xxl-3 py-2 px-xxl-14 px-xl-10 px-lg-7 px-5">
                  <NuxtImg :src="ipay" alt="img" />
                </NuxtLink>
                <NuxtLink to="#" class="border pays radius12 py-xxl-3 py-2 px-xxl-14 px-xl-10 px-lg-7 px-5">
                  <NuxtImg :src="others" alt="img" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="checkout-righbar nw4-border radius12 p-xxl-6 p-4 mt-lg-0 mt-4">
            <Swiper
              :loop="true"
              :slidesPerView="1"
              :spaceBetween="14"
              :speed="4500"
              :modules="[SwiperAutoplay, SwiperPagination]"
              :autoplay="{
                delay: 100,
              }"
              :pagination="{
                el: '.swiper-pagination-ch',
                clickable: true,
              }"
              :breakpoints="{
                1400: {
                  slidesPerView: 1,
                  spaceBetween: 14,
                },
                992: {
                  slidesPerView: 1,
                  spaceBetween: 14,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 14,
                },
                576: {
                  slidesPerView: 1,
                  spaceBetween: 14,
                },
                500: {
                  slidesPerView: 1,
                  spaceBetween: 14,
                },
              }"
              class="checkout-carslide-wrap swiper mySwipe position-relative"
            >
              <SwiperSlide class="swiper-slide">
                <div class="ch-carslide-item">
                  <NuxtImg :src="car1" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <div class="ch-carslide-item">
                  <NuxtImg :src="car2" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <div class="ch-carslide-item">
                  <NuxtImg :src="car3" alt="img" />
                </div>
              </SwiperSlide>

              <div class="swiper-pagination-ch"></div>
            </Swiper>
            <h4 class="my-xxl-6 my-4 n4-clr">The Fabia Magnum</h4>
            <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between border-bottom pb-xxl-7 pb-xl-5 pb-4">
              <div class="d-flex align-items-center gap-2">
                <span class="n3-clr fw_600">Ticket Price:</span>
                <span class="fs20 fw_700 n4-clr">$7.00</span>
              </div>
              <div class="d-flex align-items-center gap-2">
                <span class="n3-clr fw_600">Colors:</span>
                <span class="fs20 fw_700 n4-clr">Orange</span>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between pt-xxl-7 pt-xl-5 pt-4 mb-xxl-11 mb-xl-8 mb-lg-6 mb-4">
              <span class="fs20 fw_700 n4-clr">Total:</span>
              <span class="fs20 fw_700 n4-clr">$7.00</span>
            </div>
            <NuxtLink to="/contact" class="kewta-btn kewta-alt d-inline-flex align-items-center w-100" data-aos="zoom-in-right" data-aos-duration="1000">
              <span class="kew-text act4-bg nw1-clr act3-bg w-100">Checkout</span>
              <div class="kew-arrow act4-bg">
                <div class="kt-one">
                  <PhArrowRight class="ti ti-arrow-right nw1-clr" />
                </div>
                <div class="kt-two">
                  <PhArrowRight class="ti ti-arrow-right nw1-clr" />
                </div>
              </div>
            </NuxtLink>
            <div class="ch-condition mt-xxl-8 mt-xl-6 mt-4">
              <label class="checkbox-single">
                <input type="checkbox" :checked="!isChecked" @change="setIsChecked" />
                <span class="checkmark d-center"> <PhCheck v-if="isChecked" /> </span>
                <span class="fs-seven fw_400 n700-color title-item">
                  By Clicking Make Payment you agree to the
                  <NuxtLink to="#" class="s1-clr"> terms and conditions </NuxtLink>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
