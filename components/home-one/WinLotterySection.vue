<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { PhArrowUpRight } from "@phosphor-icons/vue";
import SubTitle from "../SubTitle.vue";
import CarWinCard from "./CarWinCard.vue";

const products = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:1337/api/products?populate=*'); // Ensure media fields are populated
    const data = await response.json();
    console.log('Fetched data:', data); // Log the fetched data
    products.value = data.data.map(product => {
      console.log('Product:', product); // Log each product
      return {
        image: product.Image?.formats?.medium?.url 
          ? `http://localhost:1337${product.Image.formats.medium.url}` 
          : product.Image?.url 
            ? `http://localhost:1337${product.Image.url}` 
            : 'path/to/placeholder/image.jpg', // Adjust this based on your actual data structure
        title: product.Title,
        soldPercentage: product.soldPercentage?.toString() || '0', // Convert to string
        rating: product.rating?.toString() || '0', // Convert to string
        days: product.days?.toString() || '0', // Convert to string
        remaining: product.remaining?.toString() || '0', // Convert to string
        price: product.Price, // Keep price as a number
        serialNumber: product.serialNumber || '', // Default to empty string if not available
      };
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});
</script>

<template>
  <section class="current-lottery pt-120 pb-120">
    <div class="container">
      <!-- Section Header  -->
      <div class="row g-xl-4 g-3 align-items-center justify-content-between mb-xxl-15 mb-xl-10 mb-8">
        <div class="col-lg-6 col-md-8 col-sm-8">
          <div class="section__title">
            <SubTitle text="Try your chance at winning" />
            <h2 class="display-four d-block n4-clr">
              Current
              <span class="act4-clr act4-underline" data-aos="zoom-in-left" data-aos-duration="1000"> Lottery </span>
              <span class="d-block" data-aos="zoom-in-right" data-aos-duration="1200"> Offering </span>
            </h2>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <div class="browse-more" data-aos="zoom-in" data-aos-duration="2000">
            <NuxtLink to="/contest" class="cmn__collection radius-circle s1-bg d-center position-relative ms-lg-auto">
              <span class="cmn-cont-box text-center position-relative">
                <span class="icon mb-1">
                  <PhArrowUpRight class="ph-bold ph-arrow-up-right n0-clr fs-three"></PhArrowUpRight>
                </span>
                <span class="d-block n0-clr fw_700"> Browse More </span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Win lottery body  -->
      <div class="row g-6">
        <CarWinCard
          v-for="product in products"
          :key="product.serialNumber"
          :image="product.image"
          :title="product.title"
          :soldPercentage="product.soldPercentage"
          :rating="product.rating"
          :days="product.days"
          :remaining="product.remaining"
          :price="`£${product.price.toFixed(2)}`"
          :serialNumber="product.serialNumber"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add your styles here */
</style>
