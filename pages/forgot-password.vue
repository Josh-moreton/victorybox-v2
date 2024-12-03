<script setup lang="ts">
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import lockIcon from "/images/login/look-icon.png";
import logo from "/images/logo/logo-black.png";

useHead({
  title: "Forgot Password - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});
</script>
<template>
  <section class="login-sectionv winbg vsc-initialized py-15 position-relative overflow-hidden w-100 h-100">
    <div class="cmn-scroll-wrapper d-center">
      <div class="cmn-scroll">
        <NuxtLink to="/" class="pb-10 text-center d-block">
          <NuxtImg :src="logo" alt="img" />
        </NuxtLink>
        <div class="left-logwrap text-center d-center p-xxl-10 p-xl-8 p-6 radius24">
          <div class="authentication-cmn">
            <NuxtLink to="/" class="mb-xxl-15 mb-xl-10 mb-lg-8 mb-6 d-block">
              <NuxtImg :src="lockIcon" alt="img" />
            </NuxtLink>
            <div class="log-title mb-xxl-15 mb-xl-10 mb-6">
              <h3 class="mb-xxl-6 mb-4">Forgot your password?</h3>
              <span class="n3-clr">Please enter the email address associated with your account and We will email you a link to reset your password.</span>
            </div>
            <form action="#0" class="form-cmn-action">
              <div class="row g-6">
                <div class="col-lg-12">
                  <div class="form-cmn">
                    <input type="email" placeholder="Email address" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="button" class="w-100 radius12 s1-bg fw_600 nw1-clr d-flex align-items-center justify-content-between py-xxl-4 py-3 px-xxl-4 px-3">
                    Send Request
                    <PhCaretRight class="ph ph-caret-right nw1-clr"></PhCaretRight>
                  </button>
                </div>
                <div class="col-lg-12">
                  <NuxtLink to="/login" class="fs-eight act4-texthover n4-clr d-flex align-items-center justify-content-center gap-1">
                    <PhCaretLeft class="ph ph-caret-left n4-clr fw_600"></PhCaretLeft>
                    Return to sign in
                  </NuxtLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
