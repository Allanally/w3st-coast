<template>
    <div>
<div class="grid grid-cols-4 gap-5">
    <div v-for="p in products">
     <ProductCard :product="p"/>
    </div>
</div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})
//fetch products

const { data: products} = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'W3ST-COAST | MERCH',
    meta: [
    {name: 'description', content: 'ALWAYS HERE'}
    ]
})
</script>

<style scoped>

</style>