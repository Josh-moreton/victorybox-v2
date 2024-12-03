<script setup lang="ts">
import { navbarData } from "@/../public/data/navbarData";
import globalNft from "/images/global/global-nft.png";
import globalNft2 from "/images/global/global-nft2.png";
import logoWhite from "/images/logo/logo-white.png";

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
  <header :class="`header-section-v1 custom-fixed header-position ${scrollHeight > 50 ? 'animated fadeInDown header-fixed' : ''}`">
    <!-- desktop header  -->
    <div class="container-header">
      <div class="main-navbar main-navbar-white">
        <nav class="navbar-custom">
          <div class="d-flex align-items-center justify-content-between">
            <NuxtLink to="/" class="nav-brand d-xl-none">
              <NuxtImg class="w-100" :src="logoWhite" width="{243}" alt="logo" />
            </NuxtLink>
            <div class="d-flex gap-6">
              <button :class="`navbar-toggle-btn d-block d-xl-none ${isNavOpen ? 'open' : ''}`" type="button" @click="handleNavToggle">
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
                <li class="menu-item position-relative">
                  <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li class="menu-item position-relative">
                  <NuxtLink to="/winners">Winners</NuxtLink>
                </li>
                <li class="menu-item position-relative">
                  <NuxtLink to="/contests">Contests</NuxtLink>
                </li>
                <li class="menu-item position-relative">
                  <NuxtLink to="/products">Products</NuxtLink>
                </li>
                <!-- Add Snipcart Cart Button -->
                <li class="menu-item position-relative">
                  <button class="snipcart-checkout cart-button">
                    <span class="cart-icon">🛒</span>
                    <span class="snipcart-items-count">0</span>
                    <span class="snipcart-total-price">£0.00</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!--  mobile header  -->
  </header>
</template>

<style scoped>
.cart-button {
  background: none;
  border: none;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}

.cart-icon {
  font-size: 1.2rem;
}

.snipcart-items-count {
  background: #ff0000;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
}
</style>
