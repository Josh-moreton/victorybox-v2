<script setup lang="ts">
import { PhAddressBook, PhArrowUpRight, PhChatSlash, PhHeadset } from "@phosphor-icons/vue";
</script>
<template>
  <section class="blog-section pt-120 pb-120 n0-bg">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-xxl-15 mb-xl-12 mb-10">
        <span class="display-three" data-aos="zoom-in-left" data-aos-duration="1500">
          Let’s Get in
          <span class="d-block">Touch</span>
        </span>
        <p class="max-340 fs18 n3-clr" data-aos="zoom-in-right" data-aos-duration="1600">Great! We are excited to hear from you and let start something special togerter. call us for any inquery.</p>
      </div>
      <div class="row g-6">
        <div class="col-lg-6 col-md-5">
          <div class="contact-content">
            <div class="contact-cont-items d-flex align-items-center gap-xxl-8 gap-xl-6 gap-lg-4 gap-3 mb-xxl-15 mb-xl-10 mb-lg-8 mb-sm-7 mb-6" data-aos="zoom-in-left" data-aos-duration="1400">
              <div class="icon d-center s1-border radius-circle">
                <PhHeadset class="ph ph-headset fs-three s1-clr"></PhHeadset>
              </div>
              <div class="cont">
                <h4 class="n1-clr mb-1">Help & Support</h4>
                <span class="n3-clr">supports@babuZ.com</span>
              </div>
            </div>
            <div class="contact-cont-items d-flex align-items-center gap-xxl-8 gap-xl-6 gap-lg-4 gap-3 mb-xxl-15 mb-xl-10 mb-lg-8 mb-sm-7 mb-6" data-aos="zoom-in-left" data-aos-duration="1500">
              <div class="icon d-center s1-border radius-circle">
                <PhChatSlash class="ph ph-chats fs-three s1-clr"></PhChatSlash>
              </div>
              <div class="cont">
                <h4 class="n1-clr mb-1">Sales</h4>
                <span class="n3-clr">sales@babuZ.com</span>
              </div>
            </div>
            <div class="contact-cont-items d-flex align-items-center gap-xxl-8 gap-xl-6 gap-lg-4 gap-3" data-aos="zoom-in-left" data-aos-duration="1600">
              <div class="icon d-center s1-border radius-circle">
                <PhAddressBook class="ph ph-address-book fs-three s1-clr"></PhAddressBook>
              </div>
              <div class="cont">
                <h4 class="n1-clr mb-1">Media & Press</h4>
                <span class="n3-clr">media@babuZ.com</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-7">
          <form class="contact-form" data-aos="zoom-in-left" data-aos-duration="1800">
            <div class="row g-6">
              <div class="col-lg-6 col-md-6">
                <input type="text" placeholder="Fast Name" />
              </div>
              <div class="col-lg-6 col-md-6">
                <input type="text" placeholder="Last Name" />
              </div>
              <div class="col-lg-6 col-md-6">
                <input type="email" placeholder="Email" />
              </div>
              <div class="col-lg-6 col-md-6">
                <input type="number" placeholder="Phone" />
              </div>
              <div class="col-lg-12">
                <textarea name="message" :rows="1" placeholder="Message"></textarea>
              </div>
              <button type="submit" class="cmn__collection mt-xl-13 radius-circle n0-bg nw4-border d-center position-relative">
                <span class="cmn-cont-box text-center position-relative">
                  <span class="icon mb-1">
                    <PhArrowUpRight weight="bold" class="ph-bold ph-arrow-up-right n4-clr fs-three"></PhArrowUpRight>
                  </span>
                  <span class="d-block n4-clr fw_700">Send Message</span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
