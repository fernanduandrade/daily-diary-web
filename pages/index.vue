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
  <font-awesome-icon icon="fa-info-circle" color="#54BAD2"/>
  <h1>FUNCIONA KRL</h1>
</template>