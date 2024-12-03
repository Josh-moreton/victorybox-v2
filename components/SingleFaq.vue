<script setup lang="ts">
import { PhCaretDown } from "@phosphor-icons/vue";
import AnimateHeight from "vue-animate-height";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  dropDown: {
    type: String,
    required: true,
  },
});

const dropDownValue = ref(props.dropDown);

const emit = defineEmits(["update:dropDown"]);

const handleDropDown = (id: string) => {
  emit("update:dropDown", id);
};
</script>
<template>
  <div :class="`accordion-single ${dropDown === id ? 'active' : ''}`">
    <h5 class="header-area">
      <button class="accordion-btn d-flex justify-content-between w-100" type="button" @click="() => handleDropDown(id)">
        <span class="fs20 fw_700 n4-clr d-block">{{ question }}</span>
        <span class="faq-icon">
          <PhCaretDown class="ph-bold ph-caret-down n4-clr" :size="24" />
        </span>
      </button>
    </h5>
    <AnimateHeight :duration="500" :height="dropDown === id ? 'auto' : 0">
      <div class="content-area">
        <div class="content-body">
          <p>{{ answer }}</p>
        </div>
      </div>
    </AnimateHeight>
  </div>
</template>

<style scoped></style>
