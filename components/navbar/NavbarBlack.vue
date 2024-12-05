<script setup lang="ts">
import { navbarData } from "@/../public/data/navbarData";
import globalNft from "/images/global/global-nft.png";
import globalNft2 from "/images/global/global-nft2.png";
import logoWhite from "/images/logo/logo-white.png";

import { PhArrowRight, PhCaretDown, PhShoppingCartSimple, PhUser, PhShoppingCart } from "@phosphor-icons/vue";
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
  <header :class="`header-section-v1 custom-fixed header-position ${scrollHeight > 50 ? 'header-fixed' : ''}`">
    <div class="container-header">
      <div class="main-navbar main-navbar-white">
        <nav class="navbar-custom">
          <div class="navbar-content d-flex align-items-center justify-content-between">
            <!-- Logo -->
            <NuxtLink to="/" class="nav-brand d-xl-none">
              <NuxtImg class="w-100" :src="logoWhite" width="{243}" alt="logo" />
            </NuxtLink>
            
            <!-- Menu Items -->
            <ul class="custom-nav d-xl-flex align-items-center gap-4 gap-xl-5 gap-xxl-10 mb-0">
              <li class="menu-item">
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li class="menu-item">
                <NuxtLink to="/winners">Winners</NuxtLink>
              </li>
              <li class="menu-item">
                <NuxtLink to="/contest">Contests</NuxtLink>
              </li>
              <li class="menu-item">
                <NuxtLink to="/products">Products</NuxtLink>
              </li>
              <li class="menu-item">
                <button class="cart-button snipcart-checkout">
                  <PhShoppingCart size="24" />  <!-- Phosphor shopping cart icon -->
                  <span class="snipcart-items-count">0</span>
                  <span class="snipcart-total-price">£0.00</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-section-v1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: rgba(255, 255, 255, 0.95);
  transition: background 0.3s ease;
}

.header-fixed {
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.custom-nav .menu-item a {
  color: #333;
  font-weight: 600;
}

.cart-button {
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: inherit;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}

.snipcart-items-count {
  background: var(--act4);  /* Using your theme color */
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
}

.navbar-toggle-btn span {
  background: #333;
}
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

.navbar-custom {
  padding: 0.5rem 0; /* Reduced from 1rem */
}

.navbar-content {
  height: 100%;
}

.custom-nav {
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu-item {
  display: flex;
  align-items: center;
}

.menu-item a,
.cart-button {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0.25rem 1rem; /* Reduced from 0.5rem */
  text-decoration: none;
  color: inherit;
}

.cart-button {
  background: none;
  border: none;
  cursor: pointer;
}

.container-header {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar-custom {
  padding: 0.5rem 0; /* Reduced from 1rem */
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav-brand {
  display: block !important; /* Override d-xl-none */
  align-items: center;
  height: 100%;
}

.nav-brand img {
  height: 100px;
  width: auto;
  vertical-align: middle; /* Ensure image aligns */
}

.custom-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem; /* Slightly reduced */
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu-item a,
.cart-button {
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem; /* Reduced from 0.5rem */
  color: #333;
  font-weight: 600;
  text-decoration: none;
}

.cart-button {
  background: none;
  border: none;
  cursor: pointer;
  gap: 0.5rem;
}

/* Rest of your existing styles... */
</style>
