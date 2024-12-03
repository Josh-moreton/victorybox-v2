<script setup lang="ts">
import { PhQuotes } from "@phosphor-icons/vue";
import BlogDetailsComments from "./BlogDetailsComments.vue";
import BlogDetailsTags from "./BlogDetailsTags.vue";
import BlogDetailsWriteComment from "./BlogDetailsWriteComment.vue";
import communityBig from "/images/blog/community-big.png";
import communitySmall from "/images/blog/community-small.png";
</script>
<template>
  <div class="col-lg-8">
    <p class="fs18 n3-clr mb-xxl-8 mb-xl-6 mb-lg-5 mb-3" data-aos="zoom-in" data-aos-duration="1000">
      In this section, we spotlight the inspiring stories of individuals who accelerated their luck by winning our Car Lottery. From everyday drivers to passionate car enthusiasts, discover the
      diverse paths that led them to victory and the cars they now proudly call their own.
    </p>
    <p class="fs18 n3-clr" data-aos="zoom-in" data-aos-duration="1200">
      Get ready to rev up your lottery game! Our blog features insights and tips from seasoned lottery players who have cracked the code to success. Learn about strategic number selection
    </p>
    <p
      class="text-quote mt-xxl-10 mt-xl-8 mt-5 text-center cus-z1 fs-four fw_700 n1-clr position-relative py-xxl-10 py-xl-7 py-5 px-xxl-8 px-xl-7 px-5"
      data-aos="zoom-in-left"
      data-aos-duration="1600"
    >
      Ever wondered what happens behind the scenes of a car lottery draw? In this segment, we pull back the curtain,
      <span class="icon">
        <PhQuotes class="ph ph-quotes act3-clr" />
      </span>
    </p>
    <div class="community-cont mt-xxl-15 mt-xl-12 mt-12">
      <h2 class="n4-clr">Join the Car Lottery Community</h2>
      <p class="fs18">Our Car Lottery blog isnt just about wins; its about building a community of passionate individuals who share the love for cars and the thrill of the lottery.</p>
      <div class="d-flex align-items-center gap-xxl-6 gap-4 mt-xxl-6 mt-5 mb-xxl-6 mb-4">
        <div class="thumb" data-aos="zoom-in" data-aos-duration="1000">
          <NuxtImg :src="communityBig" alt="img" />
        </div>
        <div class="thumb" data-aos="zoom-in" data-aos-duration="1000">
          <NuxtImg :src="communitySmall" alt="img" />
        </div>
      </div>
      <p class="fs18 n3-clr">
        As you navigate through our Car Lottery blog, we invite you to rev up your own lottery experience. Every spin is a chance to write your own winning story and get behind the wheel of the car
        youve always dreamed of.
      </p>
    </div>
    <div class="variety-cont mt-xxl-15 mt-xl-12 mt-10 mb-xxl-15 mb-xl-12 mb-10">
      <h3 class="n4-clr mb-xxl-6 mb-xl-5 mb-4">Exploring the Variety of Dream Cars</h3>
      <p class="fs18 n3-clr mb-xxl-5 mb-xl-4 mb-3">
        Join us on a virtual tour of the dream cars featured in our lotteries. From sleek sports cars to luxurious SUVs, each draw presents a unique lineup that could make your automotive dreams a
        reality. Discover the cars that have captured the hearts of our winners.
      </p>
      <p class="fs18 n3-clr">As you navigate through our Car Lottery blog, we invite you to rev up your own lottery experience. Every spin is a chance to write your own winning story dreamed of.</p>
    </div>
    <BlogDetailsTags />
    <BlogDetailsComments />
    <BlogDetailsWriteComment />
  </div>
</template>

<style scoped></style>
