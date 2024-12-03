<script setup lang="ts">
import { tabs } from "@/../public/data/faqAndTabData";
import MotionFadeTopToDown from "./motionEffect/MotionFadeTopToDown.vue";
import sectionIcon from "/images/global/section-icon.png";
const activeTab = ref<number>(0);
const activeAccordion = ref<{ [key: number]: number | null }>({});

defineProps<{
  bgColor?: boolean;
}>();

const setActiveTab = (id: number) => {
  activeTab.value = id;
};

const dropDown = ref("");
const updateDropDown = (id: string) => {
  if (dropDown.value === id) {
    dropDown.value = "";
  } else {
    dropDown.value = id;
  }
};
</script>
<template>
  <section :class="` pt-120 pb-120 ${bgColor ? 'question-section' : ''}`">
    <!-- Section Header  -->
    <div class="container">
      <div class="row g-xl-4 g-3 justify-content-center mb-xxl-10 mb-xl-8 mb-7">
        <div class="col-lg-6">
          <div class="section__title text-center">
            <MotionFadeTopToDown class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex justify-content-center flex-wrap align-items-center gap-3" data-aos="zoom-in-up" data-aos-duration="1400">
              <NuxtImg :src="sectionIcon" alt="img" />
              <h5 class="s1-clr fw_700">You Have Questions</h5>
            </MotionFadeTopToDown>

            <h2 class="display-four d-block n4-clr" data-aos="fade-down-left" data-aos-duration="1600">We Have <span class="act4-clr act4-underline"> Answers </span></h2>

            <p class="n3-clr fs18 mt-xxl-4 mt-3" data-aos="zoom-in-down" data-aos-duration="1800">Do not hesitate to send us an email if you can not find what you are looking for.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Section Header  -->

    <!-- Question body  -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="question-wrapper1">
            <div class="singletab">
              <div class="question-tab mb-xxl-15 mb-xl-10 mb-lg-8 mb-7">
                <ul class="tablinks">
                  <li v-for="(tab, index) in tabs" :key="`faq-tab-${index}`" :class="`nav-links ${activeTab === index ? 'active' : ''}`">
                    <button class="tablink" @click="() => setActiveTab(index)">
                      {{ tab.title }}
                    </button>
                  </li>
                </ul>
              </div>
              <div class="tabcontents">
                <div v-for="(tab, tabIndex) in tabs" :key="tabIndex" :class="`tabitem ${activeTab === tabIndex ? 'active' : ''}`">
                  <div class="accordion-section">
                    <SingleFaq
                      v-for="({ question, answer }, index) in tab.tab"
                      :question="question"
                      :answer="answer"
                      :id="`faq-${index}${tab.id}`"
                      :dropDown="dropDown"
                      @update:dropDown="updateDropDown"
                      :key="`faq-${index}`"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Question body  -->
  </section>
</template>

<style scoped></style>
