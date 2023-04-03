<template>
    <div>
<h2>ABOUT</h2>
<P>Lorem ipsum dolor sit, amet consectetur adi
    pisicing elit. Assumenda, id! Esse, soluta? Illo incidunt voluptas minima magni delectus, natus fugit architecto dolore voluptate nam inventore, minus esse eos vel nostrum?</P>
    <P>Lorem ipsum dolor sit, amet consectetur adi
    pisicing elit. Assumenda, id! Esse, soluta? Illo incidunt voluptas minima magni dele
    ctus, natus fugit architecto dolore voluptate nam inventore, minus esse eos vel nostrum?</P>
    </div>
</template>

<script setup>

const { data } = await useFetch('/api/currency')
  
</script>

<style scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}
P{
    margin: 20px 0;
}
</style>