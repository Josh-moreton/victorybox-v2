export default defineEventHandler(async (event) => {

    const { competitions } = await $fetch('https://strapi.medstack.duckdns.org/competition')

return competitions

})