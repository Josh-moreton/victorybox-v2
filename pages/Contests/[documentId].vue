<script setup lang="ts">
import { useStrapi } from '#imports';
import { PhStar, PhStarHalf } from "@phosphor-icons/vue";

useHead({
  title: "Contest Details - Lottery & Giveaway NuxtJs Template {{ product.title }}",
  meta: [{ name: "description", content: "Lottery & Giveaway NuxtJs Template" }],
});

definePageMeta({
  layout: "inner-pages",
});
const route = useRoute();
const strapi = useStrapi();
const tab = ref(1);

const { data: product, pending, error } = await useAsyncData(
  `product-${route.params.documentId}`,
  async () => {
    try {
      console.log('Fetching product with documentId:', route.params.documentId);
      
      const response = await strapi.findOne('products', route.params.documentId, {
        populate: '*'
      });
      
      console.log('API response:', response);

      if (!response?.data) {
        console.log('No product found');
        return null;
      }

      // Updated to match actual API response structure
      return {
        id: response.data.id,
        documentId: response.data.documentId,
        title: response.data.Title,
        Description: response.data.Description,
        price: parseFloat(response.data.Price).toFixed(2),
        image: response.data.Image?.url 
          ? `${useRuntimeConfig().public.strapiUrl}${response.data.Image.url}`
          : '/images/placeholder.jpg'
      };
    } catch (err) {
      console.error('Error fetching product:', err);
      throw new Error('Failed to load product');
    }
  },
  { server: true }
);

const productUrl = computed(() => {
  const baseUrl = useRuntimeConfig().public.siteUrl?.replace(/\/$/, '') || 'https://victoryboxes.org';
  return `${baseUrl}/products/${route.params.documentId}`;
});

const toggleTab = (index: number) => {
  if (tab.value !== index) {
    tab.value = index;
  }
};

// Add computed property for breadcrumb name
const breadcrumbName = computed(() => {
  return product.value?.title || 'Loading Product...';
});
</script>

<template>
  <Breadcrumbs :pageName="breadcrumbName" />
  <ContestDetailsSlider />

  <section v-if="product" class="contest-details pt-120">
    <div class="container">
      <div class="row g-6">
        <!-- Left Column -->
        <div class="col-lg-6">
          <div class="contest-details-leftwrap">
            <div class="border-bottom pb-xxl-8 pb-6 mb-xxl-8 mb-6">
              <h2 class="n4-clr mb-xxl-3 mb-2">{{ product.title }}</h2>
              <div class="d-flex align-items-center gap-2 flex-wrap">
                <span class="fs-eight n3-clr">Product ID: {{ product.id }}</span>
              </div>
            </div>
            
            <!-- Tabs Navigation -->
            <div class="common-tabwrap">
              <div class="singletab">
                <div class="example-common-button mb-xxl-8 mb-xl-7 mb-6">
                  <ul class="tablinks d-grid gap-sm-0 gap-3 d-sm-flex align-items-center">
                    <li :class="`nav-links ${tab === 1 ? 'active' : ''}`">
                      <button class="tablink n3-clr d-center border p-xxl-3 p-2 w-100" 
                              @click="() => toggleTab(1)">Description</button>
                    </li>
                    <li :class="`nav-links ${tab === 2 ? 'active' : ''}`">
                      <button class="tablink n3-clr d-center border p-xxl-3 p-2 w-100" 
                              @click="() => toggleTab(2)">Details</button>
                    </li>
                  </ul>
                </div>

                <!-- Tab Contents -->
                <div class="tabcontents">
                  <div :class="`tabitem ${tab === 1 ? 'active' : ''}`">
                    <div class="description-body">
                      <p class="n3-clr mb-xxl-8 mb-xl-5 mb-4">
                        {{ product.Description }}
                      </p>
                    </div>
                  </div>
                  <div :class="`tabitem ${tab === 2 ? 'active' : ''}`">
                    <div class="product-details">
                      <p class="n3-clr mb-xl-4 mb-3">
                        Additional product details and specifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="col-lg-6">
          <div class="competition-ending border radius24">
            <div class="product-image-wrap py-xxl-10 py-xl-7 py-6 px-xxl-8 px-xl-6 px-4">
              <img :src="product.image" :alt="product.title" class="w-100 rounded" />
            </div>
            <div class="pricing-section py-xxl-10 py-8 px-xxl-12 px-xl-9 px-sm-7 px-5">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <h3 class="price-display">£{{ product.price }}</h3>
              </div>
              
              <button 
                class="snipcart-add-item buy-button w-100"
                :data-item-id="product.id"
                :data-item-name="product.title"
                :data-item-price="product.price"
                :data-item-url="productUrl"
                :data-item-description="product.Description"
                :data-item-image="product.image"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div v-else-if="pending" class="loading-section">
    <h2>Loading product...</h2>
  </div>

  <div v-else-if="error" class="error-section">
    <h2>Error loading product</h2>
    <p>{{ error.message }}</p>
    <NuxtLink to="/products" class="back-link">
      Return to products
    </NuxtLink>
  </div>
</template>

<style scoped>
.contest-details {
  padding-top: 2rem;
}

.product-image-wrap img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.buy-button {
  background: var(--act4-color, #4CAF50);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
}

.buy-button:hover {
  opacity: 0.9;
}

.price-display {
  font-size: 2rem;
  font-weight: 700;
  color: var(--n4-color, #333);
}

.loading-section,
.error-section {
  text-align: center;
  padding: 4rem 2rem;
}

.back-link {
  color: var(--act4-color, #4CAF50);
  text-decoration: none;
}

.tablink {
  background: none;
  border: 1px solid #eee;
  cursor: pointer;
}

.nav-links.active .tablink {
  background: var(--act4-color, #4CAF50);
  color: white;
}
</style>