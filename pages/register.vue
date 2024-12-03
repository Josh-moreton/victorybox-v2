<script setup lang="ts">
import { PhCaretRight, PhEye, PhEyeSlash } from "@phosphor-icons/vue";
import registerImage from "/images/login/register.png";
import logo from "/images/logo/logo-black.png";

useHead({
  title: "Register - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

useHead({
  title: "Register - Lottery & Giveaway NuxtJs Template",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

const isPasswordShow = ref(false);
const handlePasswordShow = () => {
  isPasswordShow.value = !isPasswordShow.value;
};
</script>
<template>
  <section class="login-section position-relative">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-4">
          <div class="left-logwrap d-center">
            <div class="authentication-cmn">
              <NuxtLink to="/" class="pb-120 mb-xxl-10 d-block">
                <NuxtImg :src="logo" alt="img" />
              </NuxtLink>
              <div class="log-title mb-xxl-10 mb-xl-7 mb-6">
                <h3 class="mb-xxl-6 mb-4">Get started absolutely free</h3>
                <span class="n3-clr">
                  Already have an account?
                  <NuxtLink to="/login" class="s1-clr fw_500 s1-texthover"> Sign in </NuxtLink>
                </span>
              </div>
              <form action="#0" class="form-cmn-action">
                <div class="row g-6">
                  <div class="col-lg-6">
                    <div class="form-cmn">
                      <input type="text" placeholder="First name" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-cmn">
                      <input type="text" placeholder="Last name" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-cmn">
                      <input type="email" placeholder="Email address" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-cmn">
                      <div class="ps-grp position-relative">
                        <input :type="`${isPasswordShow ? 'text' : 'password'}`" id="password-field" name="password" class="password-field" placeholder="Enter Your Password..." />

                        <PhEyeSlash v-if="isPasswordShow" class="far fa-eye-slash field-icon toggle-password eye-icon" @click="handlePasswordShow"></PhEyeSlash>
                        <PhEye v-else class="far fa-eye-slash field-icon toggle-password eye-icon" @click="handlePasswordShow"></PhEye>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-cmn">
                      <button type="button" class="w-100 radius12 s1-bg fw_600 nw1-clr d-flex align-items-center justify-content-between py-xxl-4 py-3 px-xxl-4 px-3">
                        Create account
                        <PhCaretRight class="ph ph-caret-right nw1-clr"></PhCaretRight>
                      </button>
                    </div>
                  </div>
                  <NuxtLink to="#" class="n3-clr fs-eight act4-texthover"> By signup, I agree to <span class="n4-clr">Terms of service and Privacy Policy.</span> </NuxtLink>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="log-thumbwrap">
            <div class="thumb">
              <NuxtImg :src="registerImage" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
