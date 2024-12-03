<script setup lang="ts">
import { PhEye, PhEyeSlash } from "@phosphor-icons/vue";
import loginImage from "/images/login/login.png";
import logoBlack from "/images/logo/logo-black.png";

useHead({
  title: "Login - Lottery & Giveaway NuxtJs Template",
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
                <NuxtImg :src="logoBlack" alt="img" />
              </NuxtLink>
              <div class="log-title mb-xxl-10 mb-xl-7 mb-6">
                <h3 class="mb-xxl-6 mb-4">Sign in to Minimal</h3>
                <span class="n3-clr">
                  New user?
                  <NuxtLink to="/register" class="s1-clr s1-texthover"> Create an account </NuxtLink>
                </span>
              </div>
              <form action="#0" class="form-cmn-action">
                <div class="row g-6">
                  <div class="col-lg-12">
                    <div class="form-cmn">
                      <input type="email" placeholder="Email address" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-cmn">
                      <div class="ps-grp position-relative">
                        <input :type="`${isPasswordShow ? 'text' : 'password'}`" id="password-field" name="password" class="password-field" placeholder="Enter Your Password..." />

                        <PhEyeSlash v-if="!isPasswordShow" class="far fa-eye-slash field-icon toggle-password eye-icon" @click="handlePasswordShow"></PhEyeSlash>
                        <PhEye v-else class="far fa-eye-slash field-icon toggle-password eye-icon" @click="handlePasswordShow"></PhEye>
                      </div>
                    </div>
                  </div>
                  <NuxtLink to="#" class="d-flex text-decoration-underline act4-texthover justify-content-end fw_600 n4-clr fs-eight mt-xxl-6 mt-3"> Forget password </NuxtLink>
                  <div class="col-lg-12">
                    <button type="button" class="cmn-btn s1-bg radius12 w-100 fw_600 justify-content-center d-inline-flex align-items-center gap-2 py-xxl-4 py-3 px-xl-6 px-5 n0-clr mt-1">
                      <span class="fw_600 n0-clr">Login</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="log-thumbwrap">
            <div class="thumb">
              <NuxtImg :src="loginImage" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
