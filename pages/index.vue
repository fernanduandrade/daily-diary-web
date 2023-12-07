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
  <main class="h-full bg-slate-100">

  </main>
</template>