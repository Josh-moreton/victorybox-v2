<template>
  <section class="current-lottery pt-120 pb-120">
    <div class="container">
      <h2 class="display-four d-block n4-clr mb-xxl-15 mb-xl-10 mb-8">
        Available Products
      </h2>

      <div class="row g-6">
        <div v-for="product in products" :key="product.id" class="col-lg-4 col-md-6">
          <div class="current-lottery-item cmn-cartborder current-bg position-relative radius24">
            <!-- Draw Date -->
            <div class="current-l-badge position-relative cus-z1 mb-xxl-10 mb-xl-8 mb-lg-6 mb-4">
              <span class="draw-badge n4-clr">
                <span class="n4-clr position-relative fw_700 fs-eight">
                  Due {{ product.closingDate || 'TBA' }}
                </span>
              </span>
            </div>

            <!-- Product Image -->
            <NuxtLink :to="`/products/${product.documentId}`" class="product-link">
              <div class="thumb position-relative px-3 mb-xxl-10 mb-xl-8 mb-lg-6 mb-4">
                <img :src="product.image" :alt="product.title" class="w-100 rounded" />
              </div>
            </NuxtLink>

            <!-- Progress Bar -->
            <div class="cmn-prrice-range px-xxl-6 px-xl-5 px-lg-4 px-3">
              <div class="range-custom position-relative">
                <span class="curs-range" :style="{ width: product.soldPercentage + '%' }"></span>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-2">
                <span class="fs-eight n3-clr">Tickets Sold</span>
                <span class="n4-clr soldout fw_700 fs-eight">{{ product.soldPercentage }}%</span>
              </div>
            </div>

            <!-- Product Details -->
            <div class="product-details px-xxl-6 px-xl-5 px-lg-4 px-3 py-xxl-5 py-4">
              <h3 class="title fw_700 n4-clr mb-2">{{ product.title }}</h3>
              <p class="desc n3-clr mb-3">{{ product.Description }}</p>
              
              <ul class="remaining-info d-flex align-items-center gap-xxl-5 gap-lg-3 gap-2 mb-4">
                <li class="d-flex align-items-center gap-2">
                  <span class="n3-clr fw_600">{{ product.days }} Days</span>
                </li>
                <li class="vline-remaing"></li>
                <li class="d-flex align-items-center gap-2">
                  <span class="n3-clr fw_600">{{ product.remaining }} Remaining</span>
                </li>
              </ul>

              <!-- Price and Cart -->
              <div class="d-flex align-items-center justify-content-between">
                <h4 class="price fw_700 n4-clr mb-0">£{{ product.price }}</h4>
                <button 
                  class="snipcart-add-item cmn-btn"
                  :data-item-id="product.id"
                  :data-item-name="product.title"
                  :data-item-price="product.price"
                  :data-item-url="productUrl(product.id)"
                  :data-item-description="product.Description"
                  :data-item-image="product.image"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#imports';
import { NuxtLink } from '#components';

const config = useRuntimeConfig();
const products = ref([]);

// Function to generate proper product URLs for Snipcart validation
const productUrl = (id: string) => {
  // Remove any trailing slashes from the base URL
  const baseUrl = config.public.siteUrl?.replace(/\/$/, '') || 'https://victoryboxes.org';
  return `${baseUrl}/products/${id}`;
};

onMounted(async () => {
  try {
    const response = await fetch(`${config.public.strapiUrl}/api/products?populate=*`);
    const data = await response.json();
    
    products.value = data.data.map(product => ({
      id: product.id,
      documentId: product.documentId, // Add this line
      title: product.Title,
      Description: product.Description,
      // Ensure price is a number and format it correctly
      price: parseFloat(product.Price).toFixed(2),
      image: product.Image?.formats?.medium?.url 
        ? `${config.public.strapiUrl}${product.Image.formats.medium.url}` 
        : product.Image?.url 
          ? `${config.public.strapiUrl}${product.Image.url}` 
          : '/images/placeholder.jpg',
      soldPercentage: product.soldPercentage?.toString() || '0',
      rating: product.rating?.toString() || '0',
      days: product.days?.toString() || '0',
      remaining: product.remaining?.toString() || '0',
      closingDate: product.closingDate || 'TBA'
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});

const handleTestClick = (id: string) => {
  console.log('Test block clicked for product:', id);
};
</script>

<style scoped>
.current-lottery-item {
  background: #fff;
  border: 1px solid #eee;
  transition: all 0.3s ease;
}

.current-lottery-item:hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.range-custom {
  height: 6px;
  background: rgba(244, 244, 244, 0.5);
  border-radius: 12px;
  width: 100%;
}

.curs-range {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--act4-color, #4CAF50);
  border-radius: 12px;
  transition: width 0.3s ease;
}

.vline-remaing {
  width: 1px;
  height: 20px;
  background: var(--n3-color, #666);
}

.cmn-btn {
  background: var(--act4-color, #4CAF50);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  transition: opacity 0.2s;
}

.cmn-btn:hover {
  opacity: 0.9;
}

.thumb img {
  aspect-ratio: 16/9;
  object-fit: cover;
}
</style>