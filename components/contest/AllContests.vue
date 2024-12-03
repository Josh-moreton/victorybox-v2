<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { contestPageLotteryItems } from "@/../public/data/contestPageData";
import { PhCaretRight } from "@phosphor-icons/vue"

interface Product {
  image: string
  title: string
  soldPercentage: string
  rating: string
  days: string
  remaining: string
  price: number
  serialNumber: string
}

const config = useRuntimeConfig()
const products = ref<Product[]>([])
const totalResults = ref(0)

onMounted(async () => {
  try {
    const response = await fetch(`${config.public.strapiUrl}/api/products?populate=*`)
    const data = await response.json()
    console.log('Fetched data:', data)
    
    products.value = data.data.map(product => ({
      image: product.Image?.formats?.medium?.url 
        ? `${config.public.strapiUrl}${product.Image.formats.medium.url}` 
        : product.Image?.url 
          ? `${config.public.strapiUrl}${product.Image.url}` 
          : 'path/to/placeholder/image.jpg',
      title: product.Title,
      soldPercentage: product.soldPercentage?.toString() || '0',
      rating: product.rating?.toString() || '0',
      days: product.days?.toString() || '0',
      remaining: product.remaining?.toString() || '0',
      price: product.Price,
      serialNumber: product.serialNumber || ''
    }))

    totalResults.value = data.meta.pagination.total
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})
</script>

<template>
  <section class="contest-section pt-120 pb-120 n0-bg">
    <div class="container">
      <div class="showing-sort mb-xxl-18 mb-xl-15 mb-11 d-flex flex-wrap gap-3 align-items-center justify-content-sm-between justify-content-center">
        <span class="fs20 fw_600 n1-clr">
          Showing 1-{{ products.length }} of {{ totalResults }} results
        </span>
        <select name="sort-select">
          <option value="1">Sort by popularity</option>
          <option value="2">Car</option>
          <option value="3">Jewelry</option>
          <option value="4">Bicycle</option>
          <option value="5">Bike</option>
          <option value="6">Electronic</option>
        </select>
      </div>
      <div class="row g-6">
        <HomeOneCarWinCard 
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
      <ul class="custom-pagination pt-xxl-20 pt-xl-15 pt-10 d-flex align-items-center justify-content-center gap-xxl-3 gap-2">
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle n4-clr pagi-bg fs20 fw_700"> 1 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle n4-clr pagi-bg fs20 fw_700 active"> 2 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle n4-clr pagi-bg fs20 fw_700"> 3 </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="cmn-60 d-center radius-circle nw1-clr pagi-bg">
            <PhCaretRight class="ph ph-caret-right n4-clr fs20" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* Add your styles here */
</style>
