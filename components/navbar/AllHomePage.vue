<script setup lang="ts">
import { PhCaretDown } from "@phosphor-icons/vue";
import banner1 from "/images/banner/banner1.png";
import banner10 from "/images/banner/banner10.png";
import banner11 from "/images/banner/banner11.png";
import banner12 from "/images/banner/banner12.png";
import banner13 from "/images/banner/banner13.png";
import banner14 from "/images/banner/banner14.png";
import banner15 from "/images/banner/banner15.png";
import banner16 from "/images/banner/banner16.png";
import banner18 from "/images/banner/banner18.png";
import banner19 from "/images/banner/banner19.png";
import banner2 from "/images/banner/banner2.png";
import banner20 from "/images/banner/banner20.png";
import banner3 from "/images/banner/banner3.png";
import banner4 from "/images/banner/banner4.png";
import banner5 from "/images/banner/banner5.png";
import banner6 from "/images/banner/banner6.png";
import banner7 from "/images/banner/banner7.png";
import banner8 from "/images/banner/banner8.png";
import banner9 from "/images/banner/banner9.png";

const hrefs = [
  "/",
  "/landing-car",
  "/landing-realestate1",
  "/landing-realestate2",
  "/landing-bike1",
  "/landing-bike2",
  "/landing-nft1",
  "/landing-nft2",
  "/landing-bicycle1",
  "/landing-bicycle2",
  "/landing-clothing1",
  "/landing-clothing2",
  "/landing-jewellery1",
  "/landing-jewellery2",
  "/landing-compitition1",
  "/landing-compitition2",
  "/landing-electornic1",
  "/landing-electornic2",
  "/landing-national1",
  "/landing-national2",
];

defineProps<{
  handleDropDown: (id: string) => void;
  dropdownId: string;
}>();

const { currentRoute } = useRouter();

const path = currentRoute.value.path;
const active = ref(false);

onMounted(() => {
  hrefs.some((href) => {
    if (path === href) {
      active.value = true;
    }
  });
});
</script>
<template>
  <li class="menu-item">
    <div class="d-flex align-items-center" @click="() => handleDropDown('home')"><button :class="`position-relative ${active ? 'active' : ''}`">Home</button> <PhCaretDown /></div>
    <ul :class="`sub-menu mega-menu-style ${dropdownId === 'home' ? 'active-sub-menu' : ''}`">
      <li class="menu-link">
        <ul>
          <li>
            <NuxtLink to="/" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner1" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/' ? 'active' : ''}`"> Car V-1 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-car" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner2" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-car' ? 'active' : ''}`"> Car V-2 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-realestate1" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner11" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-realestate1' ? 'active' : ''}`"> Real Estate V-1 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-realestate2" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner12" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-realestate2' ? 'active' : ''}`"> Real Estate V-1 </span>
            </NuxtLink>
          </li>
        </ul>
        <ul>
          <li>
            <NuxtLink to="/landing-bike1" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner3" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-bike1' ? 'active' : ''}`"> Bike V-1 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-bike2" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner4" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-bike2' ? 'active' : ''}`"> Bike V-2 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-nft1" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner13" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-nft1' ? 'active' : ''}`"> NFT V-1 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-nft2" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner14" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-nft2' ? 'active' : ''}`"> NFT V-2 </span>
            </NuxtLink>
          </li>
        </ul>
        <ul>
          <li>
            <NuxtLink to="/landing-bicycle1" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner5" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-bicycle1' ? 'active' : ''}`"> Bicycle V-1 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-bicycle2" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner6" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-bicycle2' ? 'active' : ''}`"> Bicycle V-2 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-clothing1" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner15" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-clothing1' ? 'active' : ''}`"> Clothing V-1 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-clothing2" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner16" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-clothing2' ? 'active' : ''}`"> Clothing V-2 </span>
            </NuxtLink>
          </li>
        </ul>
        <ul>
          <li>
            <NuxtLink to="/landing-jewellery1" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner7" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-jewellery1' ? 'active' : ''}`"> Jewelry V-1 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-jewellery2" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner8" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-jewellery2' ? 'active' : ''}`"> Jewelry V-2 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-compitition1" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner7" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-compitition1' ? 'active' : ''}`"> Game V-1 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-compitition2" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner18" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-compitition2' ? 'active' : ''}`"> Game V-2 </span>
            </NuxtLink>
          </li>
        </ul>
        <ul>
          <li>
            <NuxtLink to="/landing-electornic1" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner9" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-electornic1' ? 'active' : ''}`"> Electronic V-1 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-electornic2" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner10" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-electornic2' ? 'active' : ''}`"> Electronic V-2 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-national1" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner19" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-national1' ? 'active' : ''}`"> Lottery V-1 </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/landing-national2" class="mega-menu-link">
              <span class="mega-menu-thumb d-none d-xl-block">
                <NuxtImg :src="banner20" width="{636}" alt="" />
              </span>
              <span :class="`mega-span ${path === '/landing-national2' ? 'active' : ''}`"> Lottery V-2 </span>
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</template>

<style scoped></style>
