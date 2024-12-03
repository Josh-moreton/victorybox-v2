<script setup lang="ts">
import { PhCaretLeft } from "@phosphor-icons/vue";
import mail from "/images/login/mail-icon.png";
import logo from "/images/logo/logo-black.png";

useHead({
  title: "Verify password - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});
</script>
<template>
  <section class="login-sectionv winbg py-15 position-relative overflow-hidden w-100 h-100">
    <div class="cmn-scroll-wrapper d-center">
      <div class="cmn-scroll">
        <NuxtLink to="/" class="pb-10 text-center d-block">
          <NuxtImg :src="logo" alt="img" />
        </NuxtLink>
        <div class="left-logwrap d-center p-xxl-10 p-xl-8 p-6 radius24">
          <div class="authentication-cmn">
            <NuxtLink to="/" class="mb-xxl-15 text-center mb-xl-10 mb-lg-8 mb-6 d-block">
              <NuxtImg :src="mail" alt="img" />
            </NuxtLink>
            <div class="log-title text-center mb-xxl-15 mb-xl-10 mb-6">
              <h3 class="mb-xxl-6 mb-4">Please check your email!</h3>
              <span class="n3-clr">We have sent a 6-digit confirmation email to your email.Please enter the code in below box to verify your email.</span>
            </div>
            <form action="#0" class="form-cmn-action">
              <div class="row g-6">
                <div class="col-lg-12">
                  <div class="form-cmn">
                    <input type="email" placeholder="Email address" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="ps-disitwrap d-flex flex-wrap gap-xxl-4 gap-xl-2 gap-1">
                    <input type="number" placeholder="-" />
                    <input type="number" placeholder="-" />
                    <input type="number" placeholder="-" />
                    <input type="number" placeholder="-" />
                    <input type="number" placeholder="-" />
                    <input type="number" placeholder="-" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="button" class="cmn-btn s1-bg radius12 w-100 fw_600 justify-content-center d-inline-flex align-items-center gap-2 py-xxl-4 py-3 px-xl-6 px-5 n0-clr mt-1">
                    <span class="fw_600 n0-clr">Verify</span>
                  </button>
                </div>
                <span class="fs-eight n3-clr mt-xxl-7 mt-xl-6 mt-5 text-center">
                  Don’t have a code?
                  <NuxtLink to="#" class="s1-clr act4-texthover"> Resend code </NuxtLink>
                </span>
                <NuxtLink to="#" class="fs-eight act4-texthover n4-clr d-flex align-items-center justify-content-center gap-1">
                  <PhCaretLeft class="ph ph-caret-left n4-clr fw_600"></PhCaretLeft>
                  Return to sign in
                </NuxtLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
