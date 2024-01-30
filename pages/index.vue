<script lang="ts" setup>
import type { ApiResponse } from '~/common/types/apiResponse';
import type { Diary } from '~/features/diaries/types';

useHead({
  title: 'My diaries'
})

definePageMeta({
  layout: 'the-nav-bar',
  auth: true
})
const authStore = useAuthStore()
const diaries = ref<Diary[]>([])


onMounted(async () => {
  const userId = authStore.getUserId
  const { data, error } = await useFetch<ApiResponse<Diary[]>>(`http://localhost:5204/api/diaries/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${authStore.getBearer}`
    },
    method: 'GET',
  })

  diaries.value = data.value!.data
})
</script>

<template>
  <main class="h-full flex flex-col gap-5">
    <NuxtLayout />
    <div
      v-for="diary in diaries" :key="diary.id"
      class="self-center shadow-md w-[50%]"
    >
      <Diary :diary="diary" />
    </div>
  </main>
</template>