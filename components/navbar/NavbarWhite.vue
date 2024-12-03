<script setup lang="ts">
import { navbarData } from "@/../public/data/navbarData";
import globalNft from "/images/global/global-nft.png";
import globalNft2 from "/images/global/global-nft2.png";
import logoWhite from "/images/logo/logo-black.png";

import { PhArrowRight, PhCaretDown, PhShoppingCartSimple, PhUser } from "@phosphor-icons/vue";
import AllHomePage from "./AllHomePage.vue";

const scrollHeight = ref(0);
const isNavOpen = ref(false);
const isOverflowHidden = ref(false);
const dropdownId = ref("");

const handleNavToggle = () => {
  isNavOpen.value = !isNavOpen.value;
  isOverflowHidden.value = !isOverflowHidden;
};

const handleScroll = () => {
  const scroll = window.scrollY;
  scrollHeight.value = scroll;
};

watch(scrollHeight, () => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});

const { currentRoute } = useRouter();

const pathName = currentRoute.value.path;

let isActive = (subMenus: any) => {
  return subMenus.some((p: any) => pathName === p.menuItemPath);
};

const handleDropDown = (id: string) => {
  if (dropdownId.value === id) {
    dropdownId.value = "";
  } else {
    dropdownId.value = id;
  }
};

//   const options = [
//     { value: "En", label: "En" },
//     { value: "Bn", label: "Bn" },
//     { value: "Hn", label: "Hn" },
//   ];
</script>
<template>
  <header :class="`header-section-v4 custom-fixed header-position ${scrollHeight > 50 ? 'animated fadeInDown header-fixed' : ''}`">
    <!-- desktop header  -->
    <div class="container-header">
      <div class="main-navbar main-navbar-black">
        <nav class="navbar-custom">
          <div class="d-flex align-items-center justify-content-between">
            <NuxtLink to="#" class="nav-brand d-xl-none">
              <NuxtImg class="w-100" :src="logoWhite" width="{243}" alt="logo" />
            </NuxtLink>
            <div class="d-flex gap-6">
              <button :class="`navbar-toggle-btn navbar-toggle-black d-block d-xl-none ${isNavOpen ? 'open' : ''}`" type="button" @click="handleNavToggle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
          <div :class="`navbar-toggle-item ${isNavOpen ? 'navbar-toggle-item-active' : ''}`">
            <div class="d-flex gap-5 flex-column flex-lg-row align-items-start align-items-xl-center justify-content-between mt-2 mt-xl-0">
              <NuxtLink to="/" class="nav-brand d-none d-xl-block">
                <NuxtImg class="w-100" :src="logoWhite" width="{243}" alt="logo" />
              </NuxtLink>
              <ul class="custom-nav d-xl-flex d-grid gap-4 gap-xl-5 gap-xxl-10">
                <AllHomePage :handleDropDown="handleDropDown" :dropdownId="dropdownId" />

                <template v-for="{ id, menuTitle, path, menuItems } in navbarData" :key="`black-nav-dropdown-menu-title-${id}`">
                  <li :key="`black-nav-dropdown-menu-title-${id}`" v-if="menuItems" class="menu-item position-relative">
                    <div class="d-flex align-items-center" @click="() => handleDropDown(id)">
                      <button :class="`position-relative ${isActive(menuItems) ? 'active' : ''}`">{{ menuTitle }}</button> <PhCaretDown />
                    </div>
                    <ul :class="`sub-menu ${dropdownId === id ? 'active-sub-menu' : ''}`">
                      <li v-for="{ id, title, menuItemPath } in menuItems" key="{id}" :class="`menu-link mb-xxl-2 `">
                        <NuxtLink :to="`${menuItemPath}`" :class="`${pathName == menuItemPath ? 'menu-active' : ''}`"> {{ title }} </NuxtLink>
                      </li>
                    </ul>
                  </li>

                  <li v-else :key="`black-nav-menu-title-${id}`" :class="`menu-item position-relative ${pathName === path ? 'active' : ''}`">
                    <NuxtLink :to="`${path}`"> {{ menuTitle }} </NuxtLink>
                  </li>
                </template>
              </ul>
              <div class="d-flex flex-wrap flex-xl-no-wrap align-items-center justify-content-lg-end gap-4">
                <ul class="d-flex head-card align-items-center gap-3">
                  <li>
                    <NuxtLink to="/basket" class="cmn-circle">
                      <PhShoppingCartSimple class="ti ti-shopping-cart-plus"></PhShoppingCartSimple>
                    </NuxtLink>
                    <span class="badge-seri">04</span>
                  </li>
                  <li>
                    <NuxtLink to="/user-panel" class="cmn-circle">
                      <PhUser class="ti ti-user"></PhUser>
                    </NuxtLink>
                  </li>
                </ul>
                <div class="head-language">
                  <!-- <Select defaultValue={options[0]} options={options} classNamePrefix="react-select" /> -->
                </div>
                <NuxtLink to="/contest-details" class="kewta-btn d-inline-flex align-items-center">
                  <span class="kew-text act3-border n4-clr">Explore Now</span>
                  <div class="kew-arrow p1-bg">
                    <div class="kt-one">
                      <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                    </div>
                    <div class="kt-two">
                      <PhArrowRight class="ti ti-arrow-right n4-clr"></PhArrowRight>
                    </div>
                  </div>
                </NuxtLink>
                <div class="invisible-menuthumb d-flex">
                  <NuxtLink to="/landing-nft1">
                    <NuxtImg :src="globalNft" width="{456}" alt="img" />
                  </NuxtLink>
                  <NuxtLink to="/landing-nft2">
                    <NuxtImg :src="globalNft2" width="{456}" alt="img" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!--  mobile header  -->
  </header>
</template>

<style scoped></style>
