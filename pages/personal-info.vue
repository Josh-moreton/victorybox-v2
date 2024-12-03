<script setup lang="ts">
import { PhCheck, PhEye, PhEyeSlash } from "@phosphor-icons/vue";

useHead({
  title: "Personal Info - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "user-panel-layout",
});

const isChecked = ref(true);
const setIsChecked = () => {
  isChecked.value = !isChecked.value;
};

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
  <MotionEffectMotionFade class="col-xxl-9 col-xl-8 col-lg-8">
    <div class="cmn-box-addingbg win40-ragba border radius24 py-xxl-10 py-xl-8 py-lg-6 py-5 px-xxl-8 px-xl-6 px-sm-5 px-4">
      <h3 class="user-title n4-clr mb-xxl-10 mb-xl-8 mb-lg-6 mb-5">Personal Details</h3>
      <form action="#0" class="ch-form-one">
        <div class="row g-6">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="ch-form-items">
              <label htmlFor="name1" class="text-capitalize fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> First Name </label>
              <input id="name1" type="text" placeholder="First Name" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="ch-form-items">
              <label htmlFor="lname1" class="text-capitalize fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> Last Name </label>
              <input id="lname1" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="ch-form-items">
              <label htmlFor="eml" class="text-capitalize fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> Email Address </label>
              <input id="eml" type="email" placeholder="Email" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="ch-form-items">
              <label htmlFor="phs" class="text-capitalize fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> Phone Number </label>
              <input id="phs" type="number" placeholder="+270" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="ch-form-items">
              <label htmlFor="password-field" class="text-capitalize fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> New Password </label>
              <div class="ps-grp position-relative">
                <input :type="`${isPasswordShow ? 'text' : 'password'}`" id="password-field" name="password" class="password-field" placeholder="Enter Your Password..." />
                <PhEyeSlash v-if="!isPasswordShow" class="far fa-eye-slash field-icon toggle-password eye-icon" @click="handlePasswordShow"></PhEyeSlash>
                <PhEye v-else class="far fa-eye-slash field-icon toggle-password eye-icon" @click="handlePasswordShow"></PhEye>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="ch-form-items">
              <label htmlFor="password-field2" class="text-capitalize fs18 fw_600 n3-clr mb-xxl-4 mb-xl-3 mb-2"> Confirm Password </label>
              <div class="ps-grp position-relative">
                <input :type="`${confirmPasswordShow ? 'text' : 'password'}`" id="password-field" name="password" class="password-field" placeholder="Confirm New Password" />
                <PhEyeSlash v-if="!confirmPasswordShow" class="far fa-eye-slash field-icon toggle-password eye-icon" @click="handleConfirmPasswordShow"></PhEyeSlash>
                <PhEye v-else class="far fa-eye-slash field-icon toggle-password eye-icon" @click="handleConfirmPasswordShow"></PhEye>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="border-top d-flex align-items-center justify-content-between pt-xxl-8 pt-6 mt-xxl-8 mt-6">
        <div class="ch-condition">
          <label class="checkbox-single">
            <input type="checkbox" name="checkbox" class="d-none" :checked="!isChecked" @change="setIsChecked" />
            <span class="checkmark d-center"> <PhCheck v-if="isChecked" /> </span>
            <span class="fs-seven fw_600 title-item">Subscribe me to Newsletter</span>
          </label>
        </div>
        <button type="button" class="kewta-btn kewta-alt d-inline-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="1000">
          <span class="kew-text act4-bg nw1-clr act3-bg">Update Profile</span>
        </button>
      </div>
    </div>
  </MotionEffectMotionFade>
</template>

<style scoped></style>
