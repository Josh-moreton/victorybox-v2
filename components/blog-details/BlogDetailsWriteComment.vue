<script setup lang="ts"></script>
<template>
  <div class="leave-comments mt-15">
    <h4 class="n4-clr mb-xxl-10 mb-xl-8 mb-6">Leave A Comment</h4>
    <form action="#" class="comments-area">
      <div class="row g-xxl-6 g-4">
        <div class="col-lg-6">
          <input type="text" placeholder="Name" />
        </div>
        <div class="col-lg-6">
          <input type="text" placeholder="Email" />
        </div>
        <div class="col-lg-12">
          <textarea name="comments" :rows="4" placeholder="Type Comment here"></textarea>
        </div>
        <button type="submit" class="cmn__collection radius-circle n0-bg d-center border position-relative">
          <span class="cmn-cont-box text-center position-relative">
            <span class="d-block n3-clr fw_600">Post Comment</span>
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
