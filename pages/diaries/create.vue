<script lang="ts" setup>
definePageMeta({
  auth: true,
  layout: 'the-nav-bar'
})

onMounted(() => {
  console.log('ao menos tá caindo aqui?')
})
</script>

<template>
  <div>
    <NuxtLayout />
    <h1>TESTE</h1>
  </div>
</template>