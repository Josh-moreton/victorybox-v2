interface Product {
  id: number;
  documentId: string;
  title: string;
  Description: string;
  price: number; // Keep as number
  image: string;
  soldPercentage: string;
  rating: string;
  days: string;
  remaining: string;
  closingDate: string;
  carousel?: boolean;
  featured?: boolean; // Add featured property
  category?: string; // Add category property
}

export const useProducts = () => {
  const products = ref<Product[]>([]);
  const config = useRuntimeConfig();
  const loading = ref(false);
  const error = ref(null);

  const fetchProducts = async () => {
    loading.value = true;
    try {
      const response = await fetch(
        `${config.public.strapiUrl}/api/products?populate=*`
      );
      const data = await response.json();
      products.value = data.data.map((product) => ({
        id: product.id,
        documentId: product.documentId,
        title: product.Title,
        Description: product.Description,
        price: product.Price, // Map price property
        image: product.Image?.formats?.medium?.url
          ? `${config.public.strapiUrl}${product.Image.formats.medium.url}`
          : product.Image?.url
          ? `${config.public.strapiUrl}${product.Image.url}`
          : "/images/placeholder.jpg",
        soldPercentage: product.soldPercentage?.toString() || "0",
        rating: product.rating?.toString() || "0",
        days: product.days?.toString() || "0",
        remaining: product.remaining?.toString() || "0",
        closingDate: product.closingDate || "TBA",
        carousel: product.carousel || false,
        featured: product.featured || false, // Map featured property
        category: product.category || "", // Map category property
      }));
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
  };
};
