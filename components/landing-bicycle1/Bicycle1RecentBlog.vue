<script setup lang="ts">
import { bicycle1blogData } from "@/../public/data/bike1PageData";
import { PhArrowRight, PhArrowUpRight } from "@phosphor-icons/vue";

type Props = {
  sectionBg?: boolean;
  blogSectionData?: {
    blogBig: {
      imageSrc: string;
      imageAlt: string;
      date: {
        day: string;
        month: string;
      };
      title: string;
      description: string;
    };
    blogSmall1: {
      imageSrc: string;
      imageAlt: string;
      date: {
        fullDate: string;
      };
      title: string;
      description: string;
    };
    blogSmall2: {
      imageSrc: string;
      imageAlt: string;
      date: {
        fullDate: string;
      };
      title: string;
      description: string;
    };
    blogSmall3: {
      imageSrc: string;
      imageAlt: string;
      date: {
        fullDate: string;
      };
      title: string;
      description: string;
    };
  };
};

const props = withDefaults(defineProps<Props>(), {
  sectionBg: false,
  blogSectionData: () => bicycle1blogData,
});
</script>
<template>
  <section :class="`blog-section1 pt-120 pb-120 question-section ${sectionBg ? 'winbg' : ''}`">
    <!--Section Header-->

    <div class="container">
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-12 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title">
            <SubTitle text="Recent Blog" />

            <h2 class="display-four d-block n4-clr">
              News &
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Analysis </span>
            </h2>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <div class="browse-more" data-aos="zoom-in-up" data-aos-duration="2000">
            <NuxtLink to="/blog-details" class="cmn__collection radius-circle s1-bg d-center position-relative ms-lg-auto">
              <span class="cmn-cont-box text-center position-relative">
                <span class="icon mb-1">
                  <PhArrowUpRight weight="bold" class="ph-bold ph-arrow-up-right n0-clr fs-three"></PhArrowUpRight>
                </span>
                <span class="d-block n0-clr fw_700"> Browse More </span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!--Section Header-->

    <!--blog body Header-->

    <div class="container">
      <div class="row g-6">
        <MotionEffectMotionFade class="col-lg-6 col-md-6">
          <div class="blog-items1 blog-v1-hover blog-items-v5">
            <div class="boxs">
              <div class="thumb mb-xxl-6 mb-4">
                <NuxtImg :src="blogSectionData.blogBig.imageSrc" alt="{blogSectionData.blogBig.imageAlt}" />
                <div class="dats d-center">
                  <span class="bos">
                    <span class="d-block nw1-clr fw_700"> 12/ </span>
                    <span class="d-block nw1-clr fw_700"> Aug </span>
                  </span>
                </div>
              </div>
              <div class="content">
                <h3 class="mb-xxl-4 mb-3">
                  <NuxtLink to="/blog-details" class="n4-clr"> {{ blogSectionData.blogBig.title }} </NuxtLink>
                </h3>
                <p class="fs18 pra bbd pb-xxl-5 pb-xl-4 pb-3 mb-xxl-6 mb-xl-4 mb-3">{{ blogSectionData.blogBig.description }}</p>
                <NuxtLink to="/blog-details" class="kewta-btn d-inline-flex align-items-center">
                  <span class="kew-text n4-bg n0-clr"> Read More </span>
                  <div class="kew-arrow n4-bg">
                    <div class="kt-one">
                      <PhArrowRight class="ti ti-arrow-right n0-clr"></PhArrowRight>
                    </div>
                    <div class="kt-two">
                      <PhArrowRight class="ti ti-arrow-right n0-clr"></PhArrowRight>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </MotionEffectMotionFade>
        <MotionEffectMotionFade class="col-lg-6 col-md-6" data-aos="zoom-in-up" data-aos-duration="1600">
          <div class="blog-v5-rightwrap d-grid gap-xxl-6 gap-xl-4 gap-xl-3 gap-6">
            <div class="blog-v5-inner">
              <div class="thumb">
                <NuxtImg :src="blogSectionData.blogSmall1.imageSrc" alt="img" />
              </div>
              <div class="content">
                <NuxtLink to="/blog-details" class="fs-four n4-clr d-block mb-2"> {{ blogSectionData.blogSmall1.title }} </NuxtLink>
                <p class="fs18 n3-clr">{{ blogSectionData.blogSmall1.description }}</p>
                <div class="btn-area pt-xxl-5 pt-xl-4 pt-lg-3 pt-3 mt-xxl-4 mt-xl-4 mt-lg-3 mt-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <span class="d-block n2-clr fw_600"> March 23, 2024 </span>
                  <NuxtLink to="/contact" class="kewta-btn d-inline-flex align-items-center">
                    <span class="kew-text n4-bg n0-clr"> Read More </span>
                    <div class="kew-arrow n4-bg">
                      <div class="kt-one">
                        <PhArrowRight class="ti ti-arrow-right n0-clr"></PhArrowRight>
                      </div>
                      <div class="kt-two">
                        <PhArrowRight class="ti ti-arrow-right n0-clr"></PhArrowRight>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="line"></div>
            <div class="blog-v5-inner">
              <div class="thumb">
                <NuxtImg :src="blogSectionData.blogSmall2.imageSrc" alt="img" />
              </div>
              <div class="content">
                <NuxtLink to="/blog-details" class="fs-four n4-clr d-block mb-2"> {{ blogSectionData.blogSmall2.title }} </NuxtLink>
                <p class="fs18 n3-clr">{{ blogSectionData.blogSmall2.description }}</p>
                <div class="btn-area pt-xxl-5 pt-xl-4 pt-lg-3 pt-3 mt-xxl-4 mt-xl-4 mt-lg-3 mt-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <span class="d-block n2-clr fw_600"> March 23, 2024 </span>
                  <NuxtLink to="/contact" class="kewta-btn d-inline-flex align-items-center">
                    <span class="kew-text n4-bg n0-clr"> Read More </span>
                    <div class="kew-arrow n4-bg">
                      <div class="kt-one">
                        <PhArrowRight class="ti ti-arrow-right n0-clr"></PhArrowRight>
                      </div>
                      <div class="kt-two">
                        <PhArrowRight class="ti ti-arrow-right n0-clr"></PhArrowRight>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="line"></div>
            <div class="blog-v5-inner">
              <div class="thumb">
                <NuxtImg :src="blogSectionData.blogSmall3.imageSrc" alt="img" />
              </div>
              <div class="content">
                <NuxtLink to="/blog-details" class="fs-four n4-clr d-block mb-2"> {{ blogSectionData.blogSmall3.title }} </NuxtLink>
                <p class="fs18 n3-clr">{{ blogSectionData.blogSmall3.description }}</p>
                <div class="btn-area pt-xxl-5 pt-xl-4 pt-lg-3 pt-3 mt-xxl-4 mt-xl-4 mt-lg-3 mt-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <span class="d-block n2-clr fw_600"> March 23, 2024 </span>
                  <NuxtLink to="/contact" class="kewta-btn d-inline-flex align-items-center">
                    <span class="kew-text n4-bg n0-clr"> Read More </span>
                    <div class="kew-arrow n4-bg">
                      <div class="kt-one">
                        <PhArrowRight class="ti ti-arrow-right n0-clr"></PhArrowRight>
                      </div>
                      <div class="kt-two">
                        <PhArrowRight class="ti ti-arrow-right n0-clr"></PhArrowRight>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </MotionEffectMotionFade>
      </div>
    </div>

    <!--blog body Header-->
  </section>
</template>

<style scoped></style>
