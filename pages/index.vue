<script lang="ts" setup>
useHead({
  title: 'Diary'
})

definePageMeta({
  middleware: 'auth',
  layout: 'the-nav-bar'
})

</script>

<template>
  <NuxtLayout />
  <h1>FUNCIONA KRL</h1>
</template>