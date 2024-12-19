export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const config = useRuntimeConfig();

  try {
    // Fetch product from Strapi
    const response = await $fetch(
      `${config.public.strapiUrl}/api/products/${id}?populate=*`
    );
    const product = response.data;

    // Return Snipcart-compatible JSON format
    return {
      id: product.id,
      name: product.attributes.title,
      price: product.attributes.price,
      url: `/api/products/${id}`,
      description: product.attributes.description,
      customFields: [
        {
          name: product.attributes.question,
          options: product.attributes.answer.join("|"),
          required: true,
        },
      ],
    };
  } catch (error) {
    throw createError({
      statusCode: 404,
      message: `Product ${id} not found`,
    });
  }
});
