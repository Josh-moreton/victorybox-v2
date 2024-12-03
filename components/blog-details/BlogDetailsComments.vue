<script setup lang="ts">
import AnimateHeight from "vue-animate-height";
import comment1 from "/images/blog/comment1.png";
import comment2 from "/images/blog/comment2.png";
import comment3 from "/images/blog/comment3.png";

const dropDown = ref("");

const handleDropDown = (id: string) => {
  if (dropDown.value === id) {
    dropDown.value = "";
  } else {
    dropDown.value = id;
  }
};
</script>
<template>
  <div class="main-commentwrap mt-xxl-15 mb-xl-12 mt-10">
    <h4 class="n4-clr mb-xxl-10 mb-xl-8 mb-6">03 Comments:</h4>
    <div class="comments__box d-flex flex-wrap flex-sm-nowrap gap-xxl-6 gap-4 mb-10">
      <div class="author">
        <NuxtImg :src="comment1" class="radius-circle" alt="img" />
      </div>
      <div class="box">
        <div class="designation mb-xxl-5 mb-xl-5 mb-lg-4 mb-3">
          <span class="fs20 n4-clr fw_700 mb-xxl-1 mb-0">Marvin McKinney</span>
          <span class="n3-clr d-block">October 07,2023</span>
        </div>
        <p class="fs18 n3-clr mb-xxl-5 mb-4">
          Winning my dream car felt like a fantasy turned reality! [Your Car Lottery Website] made it possible, and the customer support was fantastic throughout. I highly recommend this platform to
          anyone with a passion for cars and a dream to win big!
        </p>
        <div class="comment__boxcontent">
          <div class="feedback__content d-flex align-items-center" @click="() => handleDropDown('1')">
            <span class="reply fs18 fw_600 n4-clr pe-xxl-3 pe-2">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.88196 12.3505L1.02969 7.42833C0.323438 7.01213 0.323438 5.98787 1.02969 5.57167L7.88196 0.649534C8.59109 0.231631 9.5 0.737083 9.5 1.57787V3.5C11.75 3.5 18.5 3.5 20 15.5C16.25 8.75 9.5 9.5 9.5 9.5V11.4221C9.5 12.2629 8.59109 12.7684 7.88196 12.3505Z"
                  fill="#121212"
                />
              </svg>
            </span>
            <span class="reply fs18 fw_600 n4-clr">Reply</span>
          </div>
          <AnimateHeight :duration="500" :height="dropDown === '1' ? 'auto' : 0">
            <div class="reply__content d-block">
              <div class="d-flex align-items-center gap-3">
                <NuxtImg :src="comment1" class="radius-circle cmn-40" alt="Author" />
                <form action="#">
                  <input type="text" name="replytext" placeholder="Join the discussion..." required />
                </form>
              </div>
            </div>
          </AnimateHeight>
        </div>
      </div>
    </div>
    <div class="comments__box ps-sm-20 ms-sm-5 d-flex flex-wrap flex-sm-nowrap gap-xxl-6 gap-4 mb-10">
      <div class="author">
        <NuxtImg :src="comment2" class="radius-circle" alt="img" />
      </div>
      <div class="box">
        <div class="designation mb-xxl-5 mb-xl-5 mb-lg-4 mb-3">
          <span class="fs20 n4-clr fw_700 mb-xxl-1 mb-0">David Malan</span>
          <span class="n3-clr d-block">October 07,2023</span>
        </div>
        <p class="fs18 n3-clr mb-xxl-5 mb-4">
          I never thought winning my dream car was possible until discovered The process is simple, the draws are fair, and the thrill of anticipation is unmatched. I am now cruising in the car I have
          always wanted!
        </p>
        <div class="comment__boxcontent">
          <div class="feedback__content d-flex align-items-center" @click="() => handleDropDown('2')">
            <span class="reply fs18 fw_600 n4-clr pe-xxl-3 pe-2">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.88196 12.3505L1.02969 7.42833C0.323438 7.01213 0.323438 5.98787 1.02969 5.57167L7.88196 0.649534C8.59109 0.231631 9.5 0.737083 9.5 1.57787V3.5C11.75 3.5 18.5 3.5 20 15.5C16.25 8.75 9.5 9.5 9.5 9.5V11.4221C9.5 12.2629 8.59109 12.7684 7.88196 12.3505Z"
                  fill="#121212"
                />
              </svg>
            </span>
            <span class="reply fs18 fw_600 n4-clr">Reply</span>
          </div>
          <AnimateHeight :duration="500" :height="dropDown === '2' ? 'auto' : 0">
            <div class="reply__content d-block">
              <div class="d-flex align-items-center gap-3">
                <NuxtImg :src="comment2" class="radius-circle cmn-40" alt="Author" />
                <form action="#">
                  <input type="text" name="replytext" placeholder="Join the discussion..." required />
                </form>
              </div>
            </div>
          </AnimateHeight>
        </div>
      </div>
    </div>
    <div class="comments__box d-flex flex-wrap flex-sm-nowrap gap-xxl-6 gap-4">
      <div class="author">
        <NuxtImg :src="comment3" class="radius-circle" alt="img" />
      </div>
      <div class="box">
        <div class="designation mb-xxl-5 mb-xl-5 mb-lg-4 mb-3">
          <span class="fs20 n4-clr fw_700 mb-xxl-1 mb-0">Robert Fox</span>
          <span class="n3-clr d-block">October 07,2023</span>
        </div>
        <p class="fs18 n3-clr mb-xxl-5 mb-4">The excitement of the draws and the variety of cars keep me hooked. The website is user-friendly, and the customer service team is responsive.</p>
        <div class="comment__boxcontent">
          <div class="feedback__content d-flex align-items-center" @click="() => handleDropDown('3')">
            <span class="reply fs18 fw_600 n4-clr pe-xxl-3 pe-2">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.88196 12.3505L1.02969 7.42833C0.323438 7.01213 0.323438 5.98787 1.02969 5.57167L7.88196 0.649534C8.59109 0.231631 9.5 0.737083 9.5 1.57787V3.5C11.75 3.5 18.5 3.5 20 15.5C16.25 8.75 9.5 9.5 9.5 9.5V11.4221C9.5 12.2629 8.59109 12.7684 7.88196 12.3505Z"
                  fill="#121212"
                />
              </svg>
            </span>
            <span class="reply fs18 fw_600 n4-clr">Reply</span>
          </div>
          <AnimateHeight :duration="500" :height="dropDown === '3' ? 'auto' : 0">
            <div class="reply__content d-block">
              <div class="d-flex align-items-center gap-3">
                <NuxtImg :src="comment3" class="radius-circle cmn-40" alt="Author" />
                <form action="#">
                  <input type="text" name="replytext" placeholder="Join the discussion..." required />
                </form>
              </div>
            </div>
          </AnimateHeight>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
