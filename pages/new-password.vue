<script setup lang="ts">
import { PhCaretLeft, PhEye, PhEyeSlash } from "@phosphor-icons/vue";
import rocket from "/images/login/rocket-icon.png";
import logo from "/images/logo/logo-black.png";

useHead({
  title: "New Password - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

const isPasswordShow = ref(false);
const confirmPasswordShow = ref(false);
const handlePasswordShow = () => {
  isPasswordShow.value = !isPasswordShow.value;
};

const handleConfirmPasswordShow = () => {
  confirmPasswordShow.value = !confirmPasswordShow.value;
};
</script>
<template>
  <section class="login-sectionv py-15 position-relative overflow-hidden w-100 h-100">
    <div class="cmn-scroll-wrapper d-center">
      <div class="cmn-scroll">
        <NuxtLink to="/" class="pb-10 text-center d-block">
          <NuxtImg :src="logo" alt="img" />
        </NuxtLink>
        <div class="left-logwrap d-center p-xxl-10 p-xl-8 p-6 radius24">
          <div class="authentication-cmn">
            <NuxtLink to="/" class="mb-xxl-15 text-center mb-xl-10 mb-lg-8 mb-6 d-block">
              <NuxtImg :src="rocket" alt="img" />
            </NuxtLink>
            <div class="log-title text-center mb-xxl-15 mb-xl-10 mb-6">
              <h3 class="mb-xxl-6 mb-4">Request sent successfully!</h3>
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
                  <div class="form-cmn">
                    <div class="ps-grp position-relative">
                      <input :type="`${isPasswordShow ? 'text' : 'password'}`" id="password-field" name="password" class="password-field" placeholder="Enter Your Password..." />
                      <PhEyeSlash v-if="!isPasswordShow" class="far fa-eye-slash field-icon toggle-password eye-icon" @click="handlePasswordShow"></PhEyeSlash>
                      <PhEye v-else class="far fa-eye-slash field-icon toggle-password eye-icon" @click="handlePasswordShow"></PhEye>
                    </div>
                    <span class="n4-clr mt-xxl-3 mt-2 fs-eight text-start">Password must be at least 6 characters</span>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-cmn">
                    <div class="ps-grp position-relative">
                      <input :type="`${confirmPasswordShow ? 'text' : 'password'}`" id="password-field" name="password" class="password-field" placeholder="Confirm New Password" />
                      <PhEyeSlash v-if="!confirmPasswordShow" class="far fa-eye-slash field-icon toggle-password eye-icon" @click="handleConfirmPasswordShow"></PhEyeSlash>
                      <PhEye v-else class="far fa-eye-slash field-icon toggle-password eye-icon" @click="handleConfirmPasswordShow"></PhEye>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="button" class="cmn-btn s1-bg radius12 w-100 fw_600 justify-content-center d-inline-flex align-items-center gap-2 py-xxl-4 py-3 px-xl-6 px-5 n0-clr mt-1">
                    <span class="fw_600 n0-clr">Update Password</span>
                  </button>
                </div>
                <span class="fs-eight n3-clr mt-xxl-7 mt-xl-6 mt-5 text-center">
                  Don’t have a code?
                  <NuxtLink to="#" class="s1-clr s1-texthover"> Resend code </NuxtLink>
                </span>
                <NuxtLink to="#" class="fs-eight s1-texthover n4-clr d-flex align-items-center justify-content-center gap-1">
                  <PhCaretLeft class="ph ph-caret-left n4-clr fw_600 s1-texthover"></PhCaretLeft>
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
