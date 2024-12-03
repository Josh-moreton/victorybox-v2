<script setup lang="ts">
import { PhArrowUpRight } from "@phosphor-icons/vue";
</script>
<template>
  <footer class="footer-section4 n5-bg position-relative cus-z1 overflow-hidden">
    <div class="container pb-120">
      <div class="footer-wrapv5 gap-xxl-0 gap-lg-4 gap-sm-10 gap-10 d-flex flex-lg-nowrap flex-wrap justify-content-center justify-content-lg-between">
        <div class="footer-v5-item">
          <div class="footer-v5box1">
            <h3 class="n0-clr text-center mb-xxl-8 mb-xl-6 mb-4 fw_700 text-uppercase">Quick Links</h3>
            <div class="quick-linkv5 d-flex gap-2 justify-content-between">
              <ul class="d-grid gap-xxl-4 gap-xl-3 gap-3">
                <li>
                  <NuxtLink to="#" class="fs18 nw4-clr"> About Us </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#" class="fs18 nw4-clr"> Our Blog </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#" class="fs18 nw4-clr"> Winners List </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#" class="fs18 nw4-clr"> Winner Benefits </NuxtLink>
                </li>
              </ul>
              <ul class="d-grid gap-xxl-4 gap-xl-3 gap-3">
                <li>
                  <NuxtLink to="#" class="fs18 nw4-clr"> My Account </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#" class="fs18 nw4-clr"> Our Shop </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#" class="fs18 nw4-clr"> Cart </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#" class="fs18 p1under nw4-clr"> Contact Us </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="fv5border"></div>
        <div class="footer-v5-item d-flex justify-content-between">
          <div class="box-fv5">
            <h3 class="n0-clr text-center mb-xxl-8 mb-xl-6 mb-4 fw_700 text-uppercase">newsletter</h3>
            <p class="fs18 nw4-clr text-center mb-xxl-10 mb-xl-8 mb-5">Subscribe to our Newsletter to receive exclusive offer. latest news and updates</p>
            <form class="form-footerv5 d-flex align-items-center">
              <input type="text" placeholder="Enter Your Email..." />
              <button type="submit" class="cmn-footer-btv5 p1-bg radius-circle d-center">
                <PhArrowUpRight class="ph-bold ph-arrow-up-right fs-four"></PhArrowUpRight>
              </button>
            </form>
          </div>
        </div>
        <div class="fv5border"></div>
        <div class="footer-v5-item text-center">
          <div class="footer-v5box3">
            <h3 class="n0-clr mb-xxl-8 mb-xl-6 mb-4 fw_700 text-uppercase">follow us</h3>
            <ul class="social-wrap d-flex justify-content-center align-items-center gap-xxl-3 gap-2 flex-wrap mb-xxl-10 mb-xl-8 mb-lg-6 mb-4">
              <li>
                <NuxtLink to="#" class="soc-item soc-item-hover-black d-inline-flex radius-circle justify-content-center align-items-center n4-border">
                  <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 8.53125V12.5312H4V19.5312H8V12.5312H11L12 8.53125H8V6.53125C8 6.26603 8.10536 6.01168 8.29289 5.82414C8.48043 5.63661 8.73478 5.53125 9 5.53125H12V1.53125H9C7.67392 1.53125 6.40215 2.05803 5.46447 2.99572C4.52678 3.9334 4 5.20517 4 6.53125V8.53125H1Z"
                      stroke="#0E0E0E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="soc-item soc-item-hover-black d-inline-flex radius-circle justify-content-center align-items-center n4-border">
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13 5.53125V9.53125M8.99998 5.53125V9.53125M1 2.53125V13.5312C1 13.7965 1.10536 14.0508 1.29289 14.2384C1.48043 14.4259 1.73478 14.5312 2 14.5312H4V18.5312L8 14.5312H13.584C13.85 14.5312 14.104 14.4263 14.291 14.2383L16.706 11.8243C16.893 11.6363 16.999 11.3823 16.999 11.1163V2.53125C16.999 2.26603 16.8936 2.01168 16.7061 1.82414C16.5186 1.63661 16.2642 1.53125 15.999 1.53125H1.999C1.73378 1.53125 1.47943 1.63661 1.29189 1.82414C1.10436 2.01168 1 2.26603 1 2.53125Z"
                      stroke="#0E0E0E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="soc-item soc-item-hover-black d-inline-flex radius-circle justify-content-center align-items-center n4-border">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.5 5.03125V5.04125M1 5.53125C1 4.47038 1.42143 3.45297 2.17157 2.70282C2.92172 1.95268 3.93913 1.53125 5 1.53125H13C14.0609 1.53125 15.0783 1.95268 15.8284 2.70282C16.5786 3.45297 17 4.47038 17 5.53125V13.5312C17 14.5921 16.5786 15.6095 15.8284 16.3597C15.0783 17.1098 14.0609 17.5312 13 17.5312H5C3.93913 17.5312 2.92172 17.1098 2.17157 16.3597C1.42143 15.6095 1 14.5921 1 13.5312V5.53125ZM6 9.53125C6 10.3269 6.31607 11.09 6.87868 11.6526C7.44129 12.2152 8.20435 12.5312 9 12.5312C9.79565 12.5312 10.5587 12.2152 11.1213 11.6526C11.6839 11.09 12 10.3269 12 9.53125C12 8.7356 11.6839 7.97254 11.1213 7.40993C10.5587 6.84732 9.79565 6.53125 9 6.53125C8.20435 6.53125 7.44129 6.84732 6.87868 7.40993C6.31607 7.97254 6 8.7356 6 9.53125Z"
                      stroke="#0E0E0E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="soc-item soc-item-hover-black d-inline-flex radius-circle justify-content-center align-items-center n4-border">
                  <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.9822 1.53125L14.1052 1.53725C16.1192 1.75125 17.6322 2.20925 19.0712 3.21025C19.2429 3.33007 19.3726 3.50076 19.4422 3.69825C21.3182 9.01325 21.8152 13.6853 20.8932 15.9783C19.8902 17.9833 18.2872 19.5312 16.4992 19.5312C15.5592 19.5312 14.2422 17.9353 13.7222 16.5623L13.7022 16.5672C14.5402 16.4362 15.3922 16.2442 16.2742 15.9932C16.4005 15.9571 16.5185 15.8965 16.6214 15.8148C16.7243 15.7331 16.8101 15.6319 16.8739 15.517C16.9377 15.4022 16.9782 15.2759 16.9932 15.1453C17.0082 15.0148 16.9973 14.8826 16.9612 14.7563C16.9251 14.6299 16.8644 14.5119 16.7827 14.409C16.701 14.3061 16.5998 14.2204 16.4849 14.1566C16.3701 14.0928 16.2438 14.0522 16.1132 14.0372C15.9827 14.0223 15.8505 14.0331 15.7242 14.0693C12.4042 15.0193 9.59417 15.0193 6.27417 14.0693C6.01903 13.9963 5.74537 14.0277 5.51338 14.1566C5.2814 14.2854 5.1101 14.5011 5.03717 14.7563C4.96423 15.0114 4.99564 15.2851 5.12448 15.517C5.25331 15.749 5.46903 15.9203 5.72417 15.9932C6.44917 16.2002 7.15517 16.3663 7.85017 16.4923L8.29417 16.5662C7.81717 17.9362 6.59917 19.5312 5.66717 19.5312C3.92417 19.5312 2.39117 17.9763 1.40017 15.8873C0.559166 13.6813 1.03117 9.01925 2.81417 3.71325C2.87986 3.51678 3.00496 3.34556 3.17217 3.22325C4.56417 2.20725 5.97917 1.74825 7.88917 1.53825C8.07031 1.51841 8.25343 1.54845 8.41875 1.62511C8.58407 1.70178 8.72529 1.82216 8.82717 1.97325L8.89017 2.08025L9.54217 3.36825L9.70217 3.34925C10.5792 3.25925 11.4202 3.25925 12.2972 3.34925L12.4552 3.36825L13.1052 2.08125C13.1779 1.93704 13.2845 1.8126 13.4158 1.71856C13.5471 1.62452 13.6992 1.56368 13.8592 1.54125L13.9822 1.53125ZM7.99917 7.53125C7.52123 7.53123 7.05908 7.70236 6.69642 8.01366C6.33377 8.32495 6.09457 8.75583 6.02217 9.22825L6.00417 9.38225L5.99917 9.53125L6.00417 9.68125C6.03335 10.0693 6.17511 10.4404 6.41207 10.7491C6.64902 11.0578 6.97089 11.2906 7.33821 11.4191C7.70553 11.5476 8.10236 11.5661 8.48006 11.4724C8.85775 11.3787 9.19991 11.1769 9.46461 10.8916C9.7293 10.6064 9.90502 10.2501 9.97024 9.86645C10.0355 9.48281 9.98735 9.08848 9.83179 8.73178C9.67624 8.37508 9.42 8.0715 9.09448 7.85826C8.76897 7.64502 8.38831 7.53137 7.99917 7.53125ZM13.9992 7.53125C13.5212 7.53123 13.0591 7.70236 12.6964 8.01366C12.3338 8.32495 12.0946 8.75583 12.0222 9.22825L12.0042 9.38225L11.9992 9.53125L12.0042 9.68125C12.0334 10.0693 12.1751 10.4404 12.4121 10.7491C12.649 11.0578 12.9709 11.2906 13.3382 11.4191C13.7055 11.5476 14.1024 11.5661 14.4801 11.4724C14.8578 11.3787 15.1999 11.1769 15.4646 10.8916C15.7293 10.6064 15.905 10.2501 15.9702 9.86645C16.0355 9.48281 15.9873 9.08848 15.8318 8.73178C15.6762 8.37508 15.42 8.0715 15.0945 7.85826C14.769 7.64502 14.3883 7.53137 13.9992 7.53125Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </NuxtLink>
              </li>
            </ul>
            <p class="nw4-clr fs18">For winner-related inquiries or sharing your success story,</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottomv4 py-xl-7 py-6">
      <div class="privacy-policy-footer">
        <div class="container">
          <div class="d-flex flex-wrap n4-bt gap-3 align-items-center justify-content-center">
            <p class="footer-copyright flex-wrap justify-content-center n4-clr">
              <span class="copy nw4-clr">
                Copyright &copy; 2024
                <NuxtLink to="#" class="nw4-clr"> Lottovibe </NuxtLink>
              </span>
              <span class="midbor"> </span>
              <span class="designed nw4-clr">
                Designed By
                <NuxtLink to="https://themeforest.net/user/pixelaxis" class="p1-clr"> Pixelaxis </NuxtLink>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
