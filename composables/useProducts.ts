interface Product {
  id: number;
  documentId: string;
  title: string;
  description: string; // Changed from Description
  price: number;
  image: string;
  createdAt: string; // Added
  updatedAt: string; // Added
  publishedAt: string; // Added
  closingDate: string;
  carousel: boolean;
  question: string; // Added
  answer: string[]; // Added
  tickets_available: number;
  contest_id: string; // Added
  featured: boolean;
  category: string;
  total_tickets: number;
  galleryImages: any; // Added
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
      products.value = data.data.map((product: any) => ({
        id: product.id,
        documentId: product.documentId,
        title: product.title, // Fixed casing
        description: product.description, // Fixed casing
        price: product.price, // Fixed casing
        image: product.image?.formats?.medium?.url
          ? `${config.public.strapiUrl}${product.image.formats.medium.url}`
          : product.image?.url
          ? `${config.public.strapiUrl}${product.image.url}`
          : "/images/placeholder.jpg",
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        publishedAt: product.publishedAt,
        closingDate: product.closingDate || "TBA",
        carousel: product.carousel || false,
        question: product.question || "",
        answer: product.answer || [],
        tickets_available: product.tickets_available || 0,
        contest_id: product.contest_id || "",
        featured: product.featured || false,
        category: product.category || "",
        total_tickets: product.total_tickets || 0,
        galleryImages: product.galleryImages || null,
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
