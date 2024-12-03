<script setup lang="ts">
import { PhMinus, PhPlus, PhX } from "@phosphor-icons/vue";
import carTicket from "/images/lottery/car-ticket.png";
import carTicketBig from "/images/lottery/ticket-big.png";


</script>
<template>
  <section class="basket-section pt-120 pb-120 n0-bg">
    <div class="container">
      <div class="basket-wrapper">
        <div
          class="basket-items border-bottom pb-xxl-8 pb-6 mb-xxl-8 mb-6 d-flex flex-wrap flex-md-nowrap align-items-center justify-content-md-between justify-content-center gap-xxl-15 gap-6"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
        >
          <div class="basket-thumb d-flex align-items-center gap-xxl-6 gap-4">
            <div class="thumb-basket position-relative d-center">
              <NuxtImg :src="carTicket" alt="img" />
            </div>
            <div class="cont">
              <span class="n1-clr fw_700 mb-xxl-3">Win This 520BHP BMW M3 Competition + £1,000 Cash!</span>
              <span class="fw_600 n3-clr d-block">Answer: Tiguan</span>
            </div>
          </div>
          <div class="basket-content-area d-flex align-items-center justify-content-between gap-3">
            <div class="quantity-basket">
              <div class="quantity-body">
                <p class="qty">
                  <button class="qtyminus" aria-hidden="true">
                    <PhMinus />
                  </button>
                  <input type="number" name="qty" id="qty" min="1" max="10" step="1" readOnly value="1" />
                  <button class="qtyplus" aria-hidden="true">
                    <PhPlus />
                  </button>
                </p>
              </div>
            </div>
            <span class="fs20 fw_700 n1-clr">£112.20</span>
            <button type="button" class="cmn-time border-clrn3 radius-circle d-center">
              <PhX class="ph ph-x n3-clr" />
            </button>
          </div>
        </div>
        <div
          class="basket-items border-bottom pb-xxl-8 pb-6 d-flex flex-wrap flex-md-nowrap align-items-center justify-content-md-between justify-content-center gap-xxl-15 gap-6"
          data-aos="zoom-in-up"
          data-aos-duration="1600"
        >
          <div class="basket-thumb d-flex align-items-center gap-xxl-6 gap-4">
            <div class="thumb-basket position-relative d-center">
              <NuxtImg :src="carTicketBig" alt="img" />
            </div>
            <div class="cont">
              <span class="n1-clr fw_700 mb-xxl-3">Win This 520BHP BMW M3 Competition + £1,000 Cash!</span>
              <span class="fw_600 n3-clr d-block">Answer: Tiguan</span>
            </div>
          </div>
          <div class="basket-content-area d-flex align-items-center justify-content-between gap-3">
            <div class="quantity-basket">
              <div class="quantity-body">
                <p class="qty">
                  <button class="qtyminus" aria-hidden="true">
                    <PhMinus />
                  </button>
                  <input type="number" name="qty" id="qty2" min="1" max="10" step="1" readOnly value="1" />
                  <button class="qtyplus" aria-hidden="true">
                    <PhPlus />
                  </button>
                </p>
              </div>
            </div>
            <span class="fs20 fw_700 n1-clr">£112.20</span>
            <button type="button" class="cmn-time border-clrn3 radius-circle d-center">
              <PhX class="ph ph-x n3-clr"></PhX>
            </button>
          </div>
        </div>
        <div class="d-flex mt-xxl-15 mt-xl-10 mt-lg-8 mt-6 mb-xxl-10 mb-xl-8 mb-6 flex-wrap align-items-center justify-content-md-between justify-content-center gap-4">
          <div class="coupon-code">
            <form action="#">
              <input type="text" placeholder="Coupon code" />
              <button type="submit" class="s1-bg n0-clr d-center fw_600">Apply coupon</button>
            </form>
          </div>
          <div class="total-pricewrap d-flex align-items-center justify-content-between gap-4">
            <h4 class="n4-clr">Total</h4>
            <span class="fs20 fw_700 n1-clr">£224.40</span>
          </div>
        </div>
        <div class="text-md-end text-center">
          <button type="button" class="act4-bg fw_700 nw1-clr radius12 py-xxl-3 py-2 px-xxl-16 px-xl-10 px-8">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
