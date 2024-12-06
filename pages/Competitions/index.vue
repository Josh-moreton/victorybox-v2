<template>
    <div>
        <h2>Competitions</h2>
        <p>Here is a list of all the competitions</p>
        <div> {{ competitions }}</div>
    </div>
</template>

<script setup>
const { competitions } = await useFetch('/api/strapi')
</script>