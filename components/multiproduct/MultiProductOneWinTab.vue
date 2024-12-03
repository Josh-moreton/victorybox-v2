<script setup lang="ts">
import { contestPageLotteryItems } from "@/../public/data/contestPageData";
import { bikeItems, clothesData, cycleItems, electronicItems, multiProductContestData, realEstateData, ringItems, tabs } from "@/../public/data/multiProductPageData";
import { PhArrowUpRight } from "@phosphor-icons/vue";
import MultiProductOneTabHouseCard from "./MultiProductOneTabHouseCard.vue";
import icon from "/images/global/section-icon.png";

const activeTab = ref("Car");

const handleTabClick = (tabName: string) => {
  activeTab.value = tabName;
};
</script>
<template>
  <section class="current-lottery pt-120 pb-120">
    <div class="container">
      <!-- {/* Section Header */} -->
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title">
            <div class="subtitle-head mb-xxl-4 mb-sm-4 mb-3 d-flex flex-wrap align-items-center gap-3" data-aos="zoom-in-down" data-aos-duration="1200">
              <NuxtImg :src="icon" alt="img" />
              <h5 class="s1-clr fw_700">Try your chance at winning</h5>
            </div>
            <span class="display-four d-block n4-clr">
              Current
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Lottery </span>
              <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Offering </span>
            </span>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <NuxtLink to="/contest" class="cmn__collection radius-circle s1-bg d-center position-relative ms-lg-auto">
            <span class="cmn-cont-box text-center position-relative">
              <span class="icon mb-1">
                <PhArrowUpRight class="ph-bold ph-arrow-up-right n0-clr fs-three"></PhArrowUpRight>
              </span>
              <span class="d-block n0-clr fw_700">Browse More</span>
            </span>
          </NuxtLink>
        </div>
      </div>
      <!-- {/* Section Header */} -->

      <div class="singletab">
        <div class="question-tab main-lottery-tab mb-xxl-15 mb-xl-10 mb-lg-8 mb-7">
          <ul class="tablinks">
            <li v-for="(tab, index) in tabs" :key="`multiproduct-tab-${index}`" :class="`nav-links ${tab.name === activeTab ? 'active' : ''}`">
              <button class="tablink" @click="() => handleTabClick(tab.name)">
                {{ tab.name }}
              </button>
            </li>
          </ul>
        </div>
        <div class="tabcontents">
          <div :class="`tabitem ${activeTab === 'Car' ? 'active' : ''}`">
            <div class="row g-6">
              <HomeOneCarWinCard v-for="(item, index) in contestPageLotteryItems.slice(0, 3)" :key="`lottery-items-${index}`" v-bind="item" />
            </div>
          </div>
          <div :class="`tabitem ${activeTab === 'Bike' ? 'active' : ''}`">
            <div class="row g-6">
              <HomeOneCarWinCard v-for="(item, index) in bikeItems" :key="`lottery-items-${index}`" v-bind="item" />
            </div>
          </div>
          <div :class="`tabitem cycle-custom ${activeTab === 'Cycle' ? 'active' : ''}`">
            <div class="row g-6">
              <HomeOneCarWinCard v-for="(item, index) in cycleItems" :key="`lottery-items-${index}`" v-bind="item" />
            </div>
          </div>
          <div :class="`tabitem cycle-custom ${activeTab === 'Jewelry' ? 'active' : ''}`">
            <div class="row g-6">
              <HomeOneCarWinCard v-for="(item, index) in ringItems" :key="`lottery-items-${index}`" v-bind="item" />
            </div>
          </div>
          <div :class="`tabitem ${activeTab === 'Electronic' ? 'active' : ''}`">
            <div class="row g-6">
              <HomeOneCarWinCard v-for="(item, index) in electronicItems" :key="`lottery-items-${index}`" v-bind="item" />
            </div>
          </div>
          <div :class="`tabitem ${activeTab === 'Real Estate' ? 'active' : ''}`">
            <div class="row g-6">
              <MultiProductOneTabHouseCard
                v-for="(card, index) in realEstateData"
                :key="`multiproduct-category-${index}`"
                :drawBadgeText="card.drawBadgeText"
                :imgSrc="card.imgSrc"
                :daysRemaining="card.daysRemaining"
                :remainingTickets="card.remainingTickets"
                :contestTitle="card.contestTitle"
                :entryPrice="card.entryPrice"
                :soldPercentage="card.soldPercentage"
                :rating="card.rating"
                :reviewCount="card.reviewCount"
              />
            </div>
          </div>
          <div :class="`tabitem ${activeTab === 'NFT' ? 'active' : ''}`">
            <div class="row g-6">
              <LandingNft1WinCard v-for="(contest, index) in multiProductContestData" :key="`nft-1-win-product-${contest.id}`" v-bind="contest" />
            </div>
          </div>
          <div :class="`tabitem ${activeTab === 'Clothing' ? 'active' : ''}`">
            <div class="row g-6">
              <MultiproductMultiProductOneTabClothCard v-for="(contest, index) in clothesData" :key="contest.id" v-bind="contest" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
