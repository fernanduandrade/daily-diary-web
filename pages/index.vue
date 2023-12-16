<script lang="ts" setup>
useHead({
  title: 'Diary'
})

definePageMeta({
  layout: 'the-nav-bar',
  auth: true
})

</script>

<template>
  <main class="h-full bg-cyan-100">
    <NuxtLayout />
  </main>
</template>