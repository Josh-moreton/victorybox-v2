<script setup lang="ts"></script>
<template>
  <div class="tag-share-wrap border-top border-bottom py-xl-4 py-3 d-flex align-items-center justify-content-sm-between justify-content-center flex-wrap gap-3">
    <ul class="tag d-flex align-items-center gap-2">
      <li class="n4-clr fs-four fw_700 pe-xxl-7 pe-4">Tags:</li>
      <li>
        <NuxtLink to="#" class="dealer fs-eight fw_600 n3-clr d-inline-block py-xxl-2 py-2 px-xxl-4 px-3 radius100"> Car Dealer </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#" class="dealer fs-eight fw_600 n3-clr d-inline-block py-xxl-2 py-2 px-xxl-4 px-3 radius100"> Business </NuxtLink>
      </li>
    </ul>
    <ul class="tag d-flex align-items-center gap-2">
      <li class="n4-clr fs-four fw_700 pe-xxl-7 pe-4">Share:</li>
      <li>
        <NuxtLink to="#" class="soc-icon n4-bg cmn-40 radius-circle d-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
              stroke="#F4F4F4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#" class="soc-icon n4-bg cmn-40 radius-circle d-center">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 5V9M8.99998 5V9M1 2V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H4V18L8 14H13.584C13.85 14 14.104 13.895 14.291 13.707L16.706 11.293C16.893 11.105 16.999 10.851 16.999 10.585V2C16.999 1.73478 16.8936 1.48043 16.7061 1.29289C16.5186 1.10536 16.2642 1 15.999 1H1.999C1.73378 1 1.47943 1.10536 1.29189 1.29289C1.10436 1.48043 1 1.73478 1 2Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#" class="soc-icon n4-bg cmn-40 radius-circle d-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.5 4.5V4.51M1 5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H13C14.0609 1 15.0783 1.42143 15.8284 2.17157C16.5786 2.92172 17 3.93913 17 5V13C17 14.0609 16.5786 15.0783 15.8284 15.8284C15.0783 16.5786 14.0609 17 13 17H5C3.93913 17 2.92172 16.5786 2.17157 15.8284C1.42143 15.0783 1 14.0609 1 13V5ZM6 9C6 9.79565 6.31607 10.5587 6.87868 11.1213C7.44129 11.6839 8.20435 12 9 12C9.79565 12 10.5587 11.6839 11.1213 11.1213C11.6839 10.5587 12 9.79565 12 9C12 8.20435 11.6839 7.44129 11.1213 6.87868C10.5587 6.31607 9.79565 6 9 6C8.20435 6 7.44129 6.31607 6.87868 6.87868C6.31607 7.44129 6 8.20435 6 9Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
